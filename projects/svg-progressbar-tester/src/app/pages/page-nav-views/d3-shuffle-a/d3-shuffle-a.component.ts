/* tslint:disable variable-name */

import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { select, scaleLinear, scalePoint, range, ScalePoint, ScaleLinear, Selection } from 'd3';
import { interval, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';

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
export class D3ShuffleAComponent implements OnInit {
  @ViewChild('svgEle1') public svgEle1: ElementRef;
  private _width = 960;
  private _height = 80;
  private _size = this._height * 0.4;
  private _count = 200;
  private _xScale: ScalePoint<string>;
  private _yScale: ScaleLinear<any, any>;
  public timer: number = 0;

  constructor() {}

  ngOnInit() {
    this._xScale = scalePoint()
      .domain(range(this._count).map(i => String(i)))
      .range([0, this._width]);
    this._yScale = scaleLinear()
      .domain([0, this._count - 1])
      .range([-Math.PI / 3, Math.PI / 3]);
    this._createChart(this.svgEle1.nativeElement);
  }

  private _createChart(svg: SVGSVGElement) {
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
      .attr('stroke-width', '1.5px')
      .attr('stroke', '#666');
    const play = svgWrapper
      .append('g')
      .attr('class', 'play')
      .append('path')
      .attr('transform', `translate(${this._width / 2}, ${this._height / 2})`)
      .attr('d', 'M 0,15 v -30 l 30,15 Z');
    play.on('click', () => {
      play.style('display', 'none');
      this._start(lines);
    });
  }

  private _start(lines: Selection<SVGLineElement, any, SVGGElement, any>) {
    const nodes = lines.nodes();
    let count = this._count;
    const subscription = interval(100)
      .pipe(tap(i => (this.timer += i)))
      .subscribe(() => {
        count = this._shuffle1(nodes, count);
        if (!count) {
          subscription.unsubscribe();
        }
      });
  }

  private _shuffle1(nodes: Element[], count: number) {
    const node = nodes.splice(Math.floor(Math.random() * count), 1)[0];
    select(node)
      .attr('stroke-width', '4px')
      .attr('stroke', '#333')
      .transition()
      .duration(500)
      .attr('transform', `translate(${this._xScale(String(this._count - count))}, ${this._size})`)
      .attr('stroke-width', '1.5px');
    return --count;
  }
}
