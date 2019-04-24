/* tslint:disable variable-name */

import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import hljs from 'highlight.js/lib/highlight';
import javascript from 'highlight.js/lib/languages/javascript';
import { select, scaleLinear, scalePoint, range, ScalePoint, ScaleLinear, Selection, active } from 'd3';
import { interval, Subscription, fromEvent, Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

enum Margin {
  top = 50,
  right = 40,
  bottom = 30,
  left = 40
}

@Component({
  selector: 'app-d3-shuffle-a',
  templateUrl: './d3-shuffle-a.component.html',
  styleUrls: ['./d3-shuffle-a.component.scss']
})
export class D3ShuffleAComponent implements OnInit, AfterViewInit {
  @ViewChild('svgEle1') public svgEle1: ElementRef<SVGSVGElement>;
  @ViewChild('code') public code: ElementRef<HTMLElement>;
  private _width: number = 960;
  private _height: number = 80;
  private _size: number = this._height * 0.4;
  private _count: number = 200;
  private _xScale: ScalePoint<string>;
  private _yScale: ScaleLinear<any, any>;
  public timer1: number = 0;
  public timer2: number = 0;
  public timer3: number = 0;

  constructor() {}

  ngOnInit() {
    this._xScale = scalePoint()
      .domain(range(this._count).map(i => String(i)))
      .range([0, this._width]);
    this._yScale = scaleLinear()
      .domain([0, this._count - 1])
      .range([-Math.PI / 3, Math.PI / 3]);

    this._createChart(this.svgEle1.nativeElement)
      .subscribe(({ lines, restart }) => this._start(lines, restart));
  }

  ngAfterViewInit() {
    hljs.registerLanguage('javascript', javascript);
    hljs.highlightBlock(this.code.nativeElement);
  }

  private _createChart(
    svg: SVGSVGElement
  ): Observable<any> {
    const svgWrapper = select(svg);
    const g = svgWrapper
      .attr('width', this._width + Margin.left + Margin.right)
      .attr('height', this._height + Margin.top + Margin.bottom)
      .append('g')
        .attr('transform', `translate(${Margin.left}, ${Margin.top})`);
    const lines = g
      .selectAll('line')
        .data(range(this._count))
        .enter()
      .append('line')
        .attr('x2', d => this._size * Math.sin(this._yScale(d)))
        .attr('y2', d => -this._size * Math.cos(this._yScale(d)))
        .attr('transform', d => `translate(${this._xScale(String(d))}, ${this._height})`)
        .style('stroke-width', '1.5px')
        .style('stroke', '#666');

    const play = this._createPlay(svgWrapper);
    const restart = this._createRestart(svgWrapper);

    restart.on('click', () => {
      play.style('display', 'block');
      restart.style('display', 'none');
      this._restart(lines);
    });

    return fromEvent(play.node(), 'click').pipe(
      tap(_ => play.style('display', 'none')),
      map(_ => ({lines, restart}))
    );
  }

  private _start(
    lines: Selection<SVGLineElement, any, SVGGElement, any>,
    restart: Selection<SVGPathElement, any, SVGGElement, any>
  ) {
    const nodes = lines.nodes();
    let count = this._count;
    const subscription = interval(100)
      .pipe(tap(i => (this.timer1 += 100)))
      .subscribe(() => {
        count = this._shuffle1(nodes, count);
        if (count <= 0) {
          restart.style('display', 'block');
          subscription.unsubscribe();
        }
      });
  }

  private _restart(lines: Selection<SVGLineElement, any, SVGGElement, any>) {
    this.timer1 = 0;
    lines.data(range(this._count))
      .attr('transform', d => `translate(${this._xScale(String(d))}, ${this._height})`);
  }

  private _createPlay(svgWrapper: Selection<SVGSVGElement, any, null, any>) {
    return svgWrapper
      .append('g')
        .attr('class', 'play')
      .append('path')
        .attr('transform', `translate(${this._width / 2}, ${this._height / 2})`)
        .attr('d', 'M 0,15 v -30 l 30,15 Z');
  }

  private _createRestart(svgWrapper: Selection<SVGSVGElement, any, null, any>) {
    return svgWrapper
      .append('g')
        .attr('class', 'restart')
      .append('circle')
        .style('display', 'none')
        .attr('cx', this._width / 2)
        .attr('cy', this._height / 2)
        .attr('r', 30);
  }

  private _shuffle1(nodes: Element[], count: number) {
    const node = nodes[Math.floor(Math.random() * this._count)];
    const line = select(node);
    if (line.datum() !== -1) {
      line
        .style('stroke-width', '4px')
        .style('stroke', '#333')
      .transition()
        .duration(500)
        .attr('transform', `translate(${this._xScale(String(this._count - count--))}, ${this._size})`)
        .style('stroke-width', '1.5px');
      line.datum(-1);
    } else {
      if (active(node)) { return count; }
      line
        .style('stroke', 'red')
        .style('stroke-width', '4px')
      .transition()
        .delay(100)
        .style('stroke', '#333')
        .style('stroke-width', '1.5px');
    }
    return count;
  }
}
