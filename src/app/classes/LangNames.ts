// Stores the currently-being-typechecked object for error messages.
let obj: any = null;
export class LangNamesProxy {
  public readonly ld: string;
  public readonly lc: string;
  public readonly pk: number;
  public readonly cc: (string | null)[] | null;
  public readonly gw: boolean;
  public readonly ang: string;
  public readonly lr: string;
  public readonly ln: string;
  public readonly alt: (string | null)[] | null;
  public static Parse(d: string): LangNamesProxy {
    return LangNamesProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): LangNamesProxy {
    if (!field) {
      obj = d;
      field = 'root';
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.ld, false, field + '.ld');
    checkString(d.lc, false, field + '.lc');
    checkNumber(d.pk, false, field + '.pk');
    checkArray(d.cc, field + '.cc');
    if (d.cc) {
      for (let i = 0; i < d.cc.length; i++) {
        checkString(d.cc[i], true, field + '.cc' + '[' + i + ']');
        if (d.cc[i] === undefined) {
          d.cc[i] = null;
        }
      }
    }
    if (d.cc === undefined) {
      d.cc = null;
    }
    checkBoolean(d.gw, false, field + '.gw');
    checkString(d.ang, false, field + '.ang');
    checkString(d.lr, false, field + '.lr');
    checkString(d.ln, false, field + '.ln');
    checkArray(d.alt, field + '.alt');
    if (d.alt) {
      for (let i = 0; i < d.alt.length; i++) {
        checkString(d.alt[i], true, field + '.alt' + '[' + i + ']');
        if (d.alt[i] === undefined) {
          d.alt[i] = null;
        }
      }
    }
    if (d.alt === undefined) {
      d.alt = null;
    }
    return new LangNamesProxy(d);
  }
  private constructor(d: any) {
    this.ld = d.ld;
    this.lc = d.lc;
    this.pk = d.pk;
    this.cc = d.cc;
    this.gw = d.gw;
    this.ang = d.ang;
    this.lr = d.lr;
    this.ln = d.ln;
    this.alt = d.alt;
  }
}

function throwNull2NonNull(field: string, d: any): never {
  return errorHelper(field, d, 'non-nullable object', false);
}
function throwNotObject(field: string, d: any, nullable: boolean): never {
  return errorHelper(field, d, 'object', nullable);
}
function throwIsArray(field: string, d: any, nullable: boolean): never {
  return errorHelper(field, d, 'object', nullable);
}
function checkArray(d: any, field: string): void {
  if (!Array.isArray(d) && d !== null && d !== undefined) {
    errorHelper(field, d, 'array', true);
  }
}
function checkNumber(d: any, nullable: boolean, field: string): void {
  if (typeof(d) !== 'number' && (!nullable || (nullable && d !== null && d !== undefined))) {
    errorHelper(field, d, 'number', nullable);
  }
}
function checkBoolean(d: any, nullable: boolean, field: string): void {
  if (typeof(d) !== 'boolean' && (!nullable || (nullable && d !== null && d !== undefined))) {
    errorHelper(field, d, 'boolean', nullable);
  }
}
function checkString(d: any, nullable: boolean, field: string): void {
  if (typeof(d) !== 'string' && (!nullable || (nullable && d !== null && d !== undefined))) {
    errorHelper(field, d, 'string', nullable);
  }
}
function errorHelper(field: string, d: any, type: string, nullable: boolean): never {
  if (nullable) {
    type += ', null, or undefined';
  }
  throw new TypeError('Expected ' + type + ' at ' + field + ' but found:\n' +
   JSON.stringify(d) + '\n\nFull object:\n' + JSON.stringify(obj));
}
