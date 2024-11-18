import { Converter } from './Converter';
import { StringConverter } from './StringConverter';
import { StringConverterAdapter } from './StringConverterAdapter';

class Client {
    private converter: Converter;

    constructor(converter: Converter) {
        this.converter = converter;
    }

    request(str: string): void {
        console.log(this.converter.convert(str));
    }
}

const stringConverter = new StringConverter();
const adapter = new StringConverterAdapter(stringConverter);
const client = new Client(adapter);
client.request("hello world");