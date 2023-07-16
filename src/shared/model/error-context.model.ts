import { ErrorMessageModel } from './error-message.model';

export interface ErrorContext {
    $implicit: ErrorMessageModel | undefined;
}
