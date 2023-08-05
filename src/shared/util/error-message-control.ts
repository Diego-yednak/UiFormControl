import { ErrorMessageModel } from '../model/error-message.model';
import { ErrorTypeEnum } from '../model/error-type.enum';

/**
 * Collection of reusable error messages
 */
export class ErrorMessageControl {

    static required = {
        message: 'Campo obrigatório',
        errorType: ErrorTypeEnum[ErrorTypeEnum.required],
        code: ErrorTypeEnum.required
    } as ErrorMessageModel;

    static pattern = {
        message: 'Preenchimento inválido',
        errorType: ErrorTypeEnum[ErrorTypeEnum.pattern],
        code: ErrorTypeEnum.pattern
    } as ErrorMessageModel;

    static email = {
        message: 'Valor não corresponde a um email Ex.: devops@hotmail.com',
        errorType: ErrorTypeEnum[ErrorTypeEnum.email],
        code: ErrorTypeEnum.email
    } as ErrorMessageModel;

    static requiredNumber = {
        message: 'Número inválido',
        errorType: ErrorTypeEnum[ErrorTypeEnum.number],
        code: ErrorTypeEnum.email
    } as ErrorMessageModel;

    static requiredCountItem(itens: number) {
        return {
            message: itens > 0 ? (itens  + ' itens faltando'): (itens * - 1  + ' itens excedidos'),
            errorType: ErrorTypeEnum[ErrorTypeEnum.items],
            code: ErrorTypeEnum.items
        } as ErrorMessageModel
    }

}
