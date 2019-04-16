import { InjectionToken, ValueProvider } from '@angular/core';

export interface NavigationLink {
  name: string;
  link: string;
  active?: boolean;
}

export interface NavigationItem {
  title: string;
  links: Array<NavigationLink>;
}

export const navigationConfig: Array<NavigationItem> = [
  {
    title: 'svg-library',
    links: [{ name: 'svg-progressbar', link: './svg-progressbar' }]
  }
];

export const NAVIGATION_CONFIG = new InjectionToken<Array<NavigationItem>>('NAVIGATION_CONFIG');

export const NAVIGATION_PROVIDER: ValueProvider = {
  provide: NAVIGATION_CONFIG,
  useValue: navigationConfig
};
