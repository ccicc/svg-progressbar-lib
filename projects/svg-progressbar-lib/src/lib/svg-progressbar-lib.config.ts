import { InjectionToken, ValueProvider } from '@angular/core';

export interface SvgProgressbarLibConfig {
  radius: number;         // 半径
  strokeWidth: number;    // 宽度
  color: string;          // 路径颜色
  background: string;     // 背景色彩
  semicycle: boolean;     // 是否半圆
  responsive: boolean;    // 是否自适应
  rounded: boolean;       // 是否圆角
  clockwise: boolean;     // 是否顺时针
  curr: number;
  total: number;
}

export const SVG_PROGRESSBAR_LIB_CONFIG = new InjectionToken<SvgProgressbarLibConfig>('SVG_PROGRESSBAR_LIB_CONFIG');

export const SVG_PROGRESSBAR_LIB_PROVIDER: ValueProvider = {
  provide: SVG_PROGRESSBAR_LIB_CONFIG,
  useValue: {
    radius: 100,
    semicycle: false,
    color: '#666699',
    background: '#cccccc',
    strokeWidth: 10,
    responsive: false,
    rounded: false,
    clockwise: true,
    curr: 60,
    total: 360
  }
};
