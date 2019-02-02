import { trigger, state, style, transition, animate, group, animateChild, query } from "@angular/animations";

export const fade = trigger('fade', [
    transition(':enter',
        animate('200ms ease', style({ 'opacity': '1' })))
]);

export const grow = trigger('grow', [
    state('xl', style({ width: '240px' })),
    state('lg', style({ width: '210px' })),
    state('md', style({ width: '190px' })),
    state('sm', style({ width: '160px' })),
    state('xs', style({ width: '130px' })),
    state('st', style({ width: '100px' })),
    state('icon', style({ width: '42px' })),
    transition('* <=> *',
        animate('200ms ease')
    )]
);