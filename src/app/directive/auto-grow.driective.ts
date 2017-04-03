import {Directive, ElementRef, Renderer} from '@angular/core';

@Directive({
    selector: '[autoGrow]',
    host: {
        '(focus)': 'onFocus()',
        '(blue)': 'onBlur()'
    }
})

export class AutoGrowDirective {
    constructor(private el: ElementRef, private renderer: Renderer) {
        
    }

    onFocus() {
        this.renderer.setElementStyle(this.el, 'width', '200');
    }

    onBlur() {
        this.renderer.setElementStyle(this.el, 'width', '120');
    }
}