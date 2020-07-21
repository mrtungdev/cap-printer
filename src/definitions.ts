declare module '@capacitor/core' {
  interface PluginRegistry {
    CapPrinter: CapPrinterPlugin;
  }
}

export interface CapPrinterPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
