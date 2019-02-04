import { trigger, state, style, transition, animate, group, animateChild, query } from "@angular/animations";

export const widen = trigger('widen', [
    state('true', style({ width: '{{ buttonWidth }}px' }),
        { params: { buttonWidth: '42' } }),
    state('false', style({ width: '42px' })),
    transition('0 <=> 1', animate('{{ animationTime }}ms ease'))
]);