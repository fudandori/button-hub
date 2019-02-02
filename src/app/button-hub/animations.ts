import { trigger, state, style, transition, animate, group, animateChild, query } from "@angular/animations";

export const fade = trigger('fade', [
    transition(':enter',
        animate('200ms ease', style({ 'opacity': '1' })))
]);

export const grow = trigger('grow', [
    state('true', style({ width: '100px' })),
    state('false', style({ width: '42px' })),
    transition('1 <=> 0',
        animate('200ms ease')
    )]
);