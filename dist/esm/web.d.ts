import { WebPlugin } from '@capacitor/core';
import { CapPrinterPlugin } from './definitions';
export declare class CapPrinterWeb extends WebPlugin implements CapPrinterPlugin {
    constructor();
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}
declare const CapPrinter: CapPrinterWeb;
export { CapPrinter };
