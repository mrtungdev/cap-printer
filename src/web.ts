import { WebPlugin } from '@capacitor/core';
import { CapPrinterPlugin } from './definitions';

export class CapPrinterWeb extends WebPlugin implements CapPrinterPlugin {
  constructor() {
    super({
      name: 'CapPrinter',
      platforms: ['web'],
    });
  }

  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}

const CapPrinter = new CapPrinterWeb();

export { CapPrinter };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(CapPrinter);
