declare module 'qs' {
    interface IStringifyOptions {
      skipNulls?: boolean;
      // Add other options here as needed
    }
  
    function parse(query: string): any;
    function stringify(obj: any, options?: IStringifyOptions): string;
  
    export { parse, stringify };
  }
  