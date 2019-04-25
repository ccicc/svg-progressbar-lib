/* tslint:disable variable-name */

import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, selectAll, scaleLinear, scalePoint, range, ScalePoint, ScaleLinear, Selection, active } from 'd3';
import { interval } from 'rxjs';
import hljs from 'highlight.js/lib/highlight';
import javascript from 'highlight.js/lib/languages/javascript';

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
  @ViewChild('svgEle2') public svgEle2: ElementRef<SVGSVGElement>;
  @ViewChild('svgEle3') public svgEle3: ElementRef<SVGSVGElement>;
  @ViewChild('code1') public code1: ElementRef<HTMLElement>;
  @ViewChild('code2') public code2: ElementRef<HTMLElement>;
  @ViewChild('code3') public code3: ElementRef<HTMLElement>;
  @ViewChild('lineCount1') public lineCount1: ElementRef<SVGTextElement>;
  @ViewChild('lineCount2') public lineCount2: ElementRef<SVGTextElement>;
  @ViewChild('lineCount3') public lineCount3: ElementRef<SVGTextElement>;
  private _width: number = 960;
  private _height: number = 80;
  private _size: number = this._height * 0.4;
  private _count: number = 200;
  private _xScale: ScalePoint<string>;
  private _yScale: ScaleLinear<any, any>;
  public title: string;
  public timer1: number = 0;
  public timer2: number = 0;
  public timer3: number = 0;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data.subscribe(data => this.title = data.title);
  }

  ngOnInit() {
    this._xScale = scalePoint()
      .domain(range(this._count).map(i => String(i)))
      .range([0, this._width]);
    this._yScale = scaleLinear()
      .domain([0, this._count - 1])
      .range([-Math.PI / 3, Math.PI / 3]);

    this._createChart(this.svgEle1.nativeElement, this._shuffle1.bind(this));
    this._createChart(this.svgEle2.nativeElement, this._shuffle2.bind(this));
    this._createChart(this.svgEle3.nativeElement, this._shuffle3.bind(this));
  }

  ngAfterViewInit() {
    hljs.registerLanguage('javascript', javascript);
    hljs.highlightBlock(this.code1.nativeElement);
    hljs.highlightBlock(this.code2.nativeElement);
    hljs.highlightBlock(this.code3.nativeElement);
  }

  private _createChart(svg: SVGSVGElement, shuffle: (nodes: Element[], count: number) => number) {
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
    play.on('click', this._start.bind(this, lines, play, restart, shuffle));
    restart.on('click', this._restart.bind(this, lines, play, restart, svgWrapper));
  }

  private _start(
    lines: Selection<SVGLineElement, any, SVGGElement, any>,
    play: Selection<SVGPathElement, any, SVGGElement, any>,
    restart: Selection<SVGCircleElement, any, SVGGElement, any>,
    shuffle: (nodes: Element[], count: number) => number
  ) {
    play.style('display', 'none');
    const nodes = lines.nodes();
    let count = this._count;
    const subscription = interval(100)
      .subscribe(() => {
        count = shuffle(nodes, count);
        if (count <= 0) {
          restart.style('display', 'block');
          subscription.unsubscribe();
        }
      });
  }

  private _restart(
    lines: Selection<SVGLineElement, any, SVGGElement, any>,
    play: Selection<SVGPathElement, any, SVGGElement, any>,
    restart: Selection<SVGCircleElement, any, SVGGElement, any>,
    svgWrapper: Selection<SVGSVGElement, any, null, any>
  ) {
    play.style('display', 'block');
    restart.style('display', 'none');
    switch (svgWrapper.attr('id')) {
      case 'svgEle1': {
        this.timer1 = 0;
        this.lineCount1.nativeElement.innerHTML = '200';
        break;
      }
      case 'svgEle2': {
        this.timer2 = 0;
        this.lineCount2.nativeElement.innerHTML = '200';
        break;
      }
      case 'svgEle3': {
        this.timer3 = 0;
        this.lineCount3.nativeElement.innerHTML = '200';
        break;
      }
    }
    lines.data(range(this._count))
      .style('stroke', '#666')
      .style('stroke-width', '1.5px')
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
        .attr('r', 15);
  }

  private _shuffle1(nodes: Element[], count: number) {
    const node = nodes[Math.floor(Math.random() * this._count)];
    const line = select(node);
    this.timer1 += 100;
    if (line.datum() !== -1) {
      line
        .style('stroke-width', '4px')
        .style('stroke', '#333')
      .transition()
        .duration(500)
        .attr('transform', `translate(${this._xScale(String(this._count - count--))}, ${this._size})`)
        .style('stroke-width', '1.5px');
      line.datum(-1);
      this.lineCount1.nativeElement.innerHTML = count.toString();
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

  private _shuffle2(nodes: Element[], count: number) {
    const node = nodes.splice(Math.floor(Math.random() * count), 1)[0];
    this.timer2 += 100;
    select(node)
      .style('stroke-width', '4px')
      .style('stroke', '#333')
    .transition()
      .duration(500)
      .attr('transform', `translate(${this._xScale(String(this._count - count--))}, ${this._size})`)
      .style('stroke-width', '1.5px');
    selectAll(nodes)
      .transition()
      .attr('transform', (d, i) => `translate(${this._xScale(String(i))}, ${this._height})`);
    this.lineCount2.nativeElement.innerHTML = count.toString();
    return count;
  }

  private _shuffle3(nodes: Element[], count: number) {
    const i = Math.floor(Math.random() * count--);
    const temp = nodes[count];
    nodes[count] = nodes[i];
    nodes[i] = temp;

    this.timer3 += 100;
    this.lineCount3.nativeElement.innerHTML = count.toString();

    select(nodes[count])
      .style('stroke-width', '4px')
      .style('stroke', '#333')
    .transition()
      .duration(500)
      .style('stroke-width', '1.5px')
      .attr('transform', `translate(${this._xScale(String(count))}, ${this._height})`);

    select(nodes[i])
      .transition()
      .duration(500)
      .attr('transform', `translate(${this._xScale(String(i))}, ${this._height})`);

    return count;
  }
}
