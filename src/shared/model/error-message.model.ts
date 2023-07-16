import { ErrorTypeEnum } from './error-type.enum';

export interface ErrorMessageModel {
    message: string,
    errorType: string,
    code: ErrorTypeEnum
}
