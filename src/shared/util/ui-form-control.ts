import { FormControl } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';

export class UiFormControl<TValue = any> extends FormControl {

    private touchChange: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    override getRawValue(): TValue {
      return super.getRawValue();
    }

    public getTouchChange(): Observable<boolean> {
        return this.touchChange;
    }
    override markAsTouched(pts?: { onlySelf?: boolean }) {
        super.markAsTouched(pts);
        this.touchChange.next(true);
    }

    public resetTouchChange() {
        if (this.touchChange) {
            this.touchChange.unsubscribe();
        }
        this.touchChange = new BehaviorSubject<boolean>(false);
    }
}
