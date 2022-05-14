declare module "@hrdtbs/netlify" {
  export const NetlifyAPI: any;
}

declare module "args-parser" {
  export default function argsParser(argv: string[]): { [key: string]: string };
}
