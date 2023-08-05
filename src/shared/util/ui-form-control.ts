import { FormControl } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';

export class UiFormControl<TValue = any> extends FormControl {

    private touchedChanges: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    override getRawValue(): TValue {
      return super.getRawValue();
    }

    public getTouchedChanges(): Observable<boolean> {
        return this.touchedChanges;
    }
    override markAsTouched(pts?: { onlySelf?: boolean }) {
        super.markAsTouched(pts);
        this.touchedChanges.next(true);
    }

    public resetTouchChange() {
        if (this.touchedChanges) {
            this.touchedChanges.unsubscribe();
        }
        this.touchedChanges = new BehaviorSubject<boolean>(false);
    }
}
