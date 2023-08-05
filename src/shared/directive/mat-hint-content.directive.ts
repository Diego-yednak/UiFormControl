import { ChangeDetectorRef, Directive, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { MatFormField } from '@angular/material/form-field';
import { LetContext } from '../model/error-context.model';
import { UiUtil } from '../util/ui-util';

@Directive({
    selector: '[matHintContent]'
})

export class MatHintContentDirective implements OnInit {

    private context: LetContext<string> = {$implicit: undefined};
    private control: AbstractControl<any, any> | undefined | null;

    constructor(
        private templateRef: TemplateRef<LetContext<string>>,
        private viewContainer: ViewContainerRef,
        private cdRef: ChangeDetectorRef,
        private matFormField: MatFormField
    ) { }

    ngOnInit() {
        this.cdRef.detectChanges();
        this.control = this.getControl();
        this.setHint();
        this.viewContainer.createEmbeddedView(this.templateRef, this.context);
    }

    private setHint() {
        if (this.control) {
            this.setContext(UiUtil.controlToHintMessage(this.control))
        }
    }

    private getControl(): AbstractControl<any, any> | undefined | null {
        return this.matFormField?._control?.ngControl?.control;
    }

    private setContext(value: string | undefined): void {
        this.context.$implicit = value;
    }

    static ngTemplateContextGuard(dir: MatHintContentDirective, ctx: unknown): ctx is LetContext<string> {
        return true;
    }
}
