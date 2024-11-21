import { Converter } from './Converter';
import { StringConverter } from './StringConverter';

export class StringConverterAdapter implements Converter {
    private stringConverter: StringConverter;

    constructor(stringConverter: StringConverter) {
        this.stringConverter = stringConverter;
    }

    convert(str: string): string {
        return this.stringConverter.toUpperCase(str);
    }
}