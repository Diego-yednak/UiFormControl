import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { forwardRef, Provider } from '@angular/core';

export class GenerateProviders {

    static defaultForm(clazz: any): Array<Provider> {
        return [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => clazz),
                multi: true
            },
            {
                provide: NG_VALIDATORS,
                useExisting: forwardRef(() => clazz),
                multi: true
            }
        ];
    }
}
