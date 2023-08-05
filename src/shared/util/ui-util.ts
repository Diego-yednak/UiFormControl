import { AbstractControl, NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { forwardRef, Provider } from '@angular/core';
import { CustomValidator } from './custom-validator';

export class UiUtil {
    static controlToHintMessage(control: AbstractControl): string | undefined {
        if (control.hasValidator(CustomValidator.required)) {
            return "Obrigatório *";
        }
        return undefined
    }

    static defaultProviders(clazz: Provider): Array<Provider> {
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
