import { ErrorMessageModel } from '../model/error-message.model';
import { ErrorTypeEnum } from '../model/error-type.enum';

export class ErrorMessageControl {

    static required = {
        message: 'Campo obrigatório',
        errorType: ErrorTypeEnum.required.toString(),
        code: ErrorTypeEnum.required
    } as ErrorMessageModel;

    static pattern = {
        message: 'Preenchimento inválido',
        errorType: ErrorTypeEnum.pattern.toString(),
        code: ErrorTypeEnum.pattern
    } as ErrorMessageModel;

    static email = {
        message: 'Valor não corresponde a um email Ex.: devops@telefonica.com',
        errorType: ErrorTypeEnum.email.toString(),
        code: ErrorTypeEnum.email
    } as ErrorMessageModel;

}
