export class UiRegexUtil {

    static email(value: string): boolean {
        return value.match(/^([a-z]|[0-9])+((\.([a-z]|[0-9])+)|(_([a-z]|[0-9])+))*@[a-z]+(\.[a-z]+)+$/i) !== null;
    }
}
