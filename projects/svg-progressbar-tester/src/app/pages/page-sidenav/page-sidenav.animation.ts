import {
  trigger,
  state,
  transition,
  animate,
  style,
  query,
  group,
  animateChild
} from '@angular/animations';

export const sidenavAnimation = trigger('fadeInOut', [
  transition(
    'categories <=> svg-progressbar,d3-joindata <=> svg-progressbar,d3-joindata <=> categories',
    [
      style({ position: 'relative' }),
      query(
        ':enter, :leave',
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ),
      query(':enter', style({ opacity: 0 })),
      query(':leave', animateChild()),
      group([
        query(':enter', animate('0.3s ease-in', style({ opacity: 1 }))),
        query(':leave', animate('0.3s ease-out', style({ opacity: 0 })))
      ]),
      query(':enter', animateChild())
    ]
  )
]);
