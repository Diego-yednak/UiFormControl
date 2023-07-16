import { ChangeDetectorRef, Directive, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { MatFormField } from '@angular/material/form-field';
import { ErrorMessageModel } from '../model/error-message.model';
import { ErrorContext } from '../model/error-context.model';

@Directive({
    selector: '[matErrorContent]'
})

export class MatErrorContentDirective implements OnInit {

    private context: ErrorContext = {$implicit: undefined};
    private control: AbstractControl<any, any> | undefined | null;

    constructor(
        private readonly matFormField: MatFormField,
        private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef,
        private cdRef: ChangeDetectorRef
    ) {
    }

    ngOnInit() {
        this.cdRef.detectChanges();
        this.control = this.getControl();
        this.watchErrors();
        this.viewContainer.createEmbeddedView(this.templateRef, this.context);
    }

    private watchErrors() {
        if (this.control) {
            this.setContext(this.getErrors())
            this.control.statusChanges.subscribe(() => {
                this.setContext(this.getErrors());
            })
        }
    }

    private getErrors(): ErrorMessageModel {
        return this.control?.errors as ErrorMessageModel;
    }

    private getControl(): AbstractControl<any, any> | undefined | null {
        return this.matFormField?._control?.ngControl?.control;
    }

    private setContext(value: ErrorMessageModel): void {
        this.context.$implicit = value;
    }

}
