/* tslint:disable variable-name */

import { Component, OnInit, OnDestroy, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  active,
  format,
  create,
  select,
  shuffle,
  Selection,
  transition,
  easeLinear,
  easeExpOut,
  interpolateNumber,
  Transition
} from 'd3';
import { timer, Subscription } from 'rxjs';

@Component({
  selector: 'app-d3-joindata',
  templateUrl: './d3-joindata.component.html',
  styleUrls: ['./d3-joindata.component.scss']
})
export class D3JoindataComponent implements OnInit, OnDestroy {
  @ViewChild('svgContainer1') public svgContainer1: ElementRef;
  @ViewChild('svgContainer2') public svgContainer2: ElementRef;
  @ViewChild('svgContainer3') public svgContainer3: ElementRef;
  @ViewChild('textContainer1') public textEle1: ElementRef;
  @ViewChild('textContainer2') public textEle2: ElementRef;

  private _g1: Selection<SVGGElement, undefined, SVGSVGElement, undefined>;
  private _g2: Selection<SVGGElement, undefined, SVGSVGElement, undefined>;
  private _g3: Selection<SVGGElement, undefined, SVGSVGElement, undefined>;

  private _alphabeta = 'abcdefghijklmnopqrstuvwxyz'.split('');
  private _unsubscription: Subscription;
  public title: string;

  constructor(private _renderer: Renderer2, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data.subscribe(data => this.title = data.title);
  }

  public ngOnInit() {
    const svg1 = this._initSvg();
    const svg2 = this._initSvg();
    const svg3 = this._initSvg();
    this._g1 = svg1.select('g');
    this._g2 = svg2.select('g');
    this._g3 = svg3.select('g');

    this._renderer.appendChild(this.svgContainer1.nativeElement, svg1.node());
    this._renderer.appendChild(this.svgContainer2.nativeElement, svg2.node());
    this._renderer.appendChild(this.svgContainer3.nativeElement, svg3.node());

    this._renderSvg1(this._alphabeta);
    this._renderSvg2(this._alphabeta);
    this._renderSvg3(this._alphabeta);
    this._renderText();

    this._unsubscription = timer(2000, 2000).subscribe(_ => {
      this._renderSvg1(this._updateData());
      this._renderSvg2(this._updateData());
      this._renderSvg3(this._updateData());
    });
  }

  public ngOnDestroy() {
    this._unsubscription.unsubscribe();
  }

  private _renderSvg1(alphabeta: string[]) {
    const texts = this._g1
      .selectAll('text')
      .data(alphabeta)
      .attr('class', 'enter');
    texts
      .enter()
      .append('text')
      .attr('class', 'update')
      .attr('x', (data, index) => index * 30)
      .attr('dy', '.35em')
      .merge(texts as Selection<SVGTextElement, any, SVGGElement, any>)
      .text(data => data);
    texts.exit().remove();
  }

  private _renderSvg2(alphabeta: string[]) {
    const texts = this._g2
      .selectAll('text')
      .data(alphabeta as any[], data => data)
      .attr('class', 'enter');
    texts.exit().remove();
    texts
      .enter()
      .append('text')
      .attr('class', 'update')
      .text(data => data)
      .attr('dy', '.35em')
      .merge(texts as Selection<SVGTextElement, any, SVGGElement, any>)
      .attr('x', (data, index) => index * 30);
  }

  private _renderSvg3(alphabeta: string[]) {
    const t = transition()
      .duration(500)
      .ease(easeLinear);
    const texts = this._g3
      .selectAll('text')
      .data(alphabeta as any[], data => data)
      .attr('class', 'enter');
    texts
      .exit()
      .transition(t)
      .attr('y', 50)
      .attr('fill-opacity', 1e-6)
      .remove();
    texts
      .attr('y', 0)
      .attr('fill-opacity', 1)
      .transition(t)
      .attr('x', (data, index) => index * 30);
    texts
      .enter()
      .append('text')
      .attr('class', 'update')
      .attr('fill-opacity', 1e-6)
      .attr('dy', '.35em')
      .attr('x', (data, index) => index * 30)
      .attr('y', -50)
      .text(data => data)
      .transition(t)
      .attr('y', 0)
      .attr('fill-opacity', 1);
  }

  private _renderText() {
    const f = format(',d');
    const t = transition().duration(2000).ease(easeExpOut);
    this._textTransition1(f, t);
    this._textTransition2(f, t);
  }

  private _textTransition1(f: any, t: Transition<Element, any, Element, any>) {
    select(this.textEle1.nativeElement)
      .select('p')
      .transition(t)
      .on('start', function repeat() {
        active(this).tween('text', () => {
          const selection = select(this);
          const i = interpolateNumber(+selection.text().replace(/,/g, ''), Math.floor(Math.random() * 1e6));
          return (time: number) => selection.text(f(i(time)));
        }).transition().delay(2000).on('start', repeat);
      });
  }

  private _textTransition2(f: any, t: Transition<Element, any, Element, any>) {
    const wrapper = select(this.textEle2.nativeElement);
    wrapper.select('p').transition(t).on('start', function repeat() {
      active(this).style('opacity', 0).remove();
      wrapper.append('p').style('opacity', 0)
        .text(f(Math.floor(Math.random() * 1e6)))
        .transition()
        .duration(2000)
        .style('opacity', 1)
        .transition()
        .delay(2000)
        .on('start', repeat);
    });
  }

  private _updateData() {
    const data = shuffle(this._alphabeta)
      .slice(0, Math.floor(Math.random() * this._alphabeta.length))
      .sort();
    return data;
  }

  private _initSvg() {
    const svg = create('svg');
    svg
      .attr('width', '100%')
      .attr('height', 100)
      .attr('viewbox', `0 0 100% 100`)
    .append('g')
      .attr('transform', 'translate(50, 50)');
    return svg;
  }
}
