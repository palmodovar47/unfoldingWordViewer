// Stores the currently-being-typechecked object for error messages.
let obj: any = null;
export class UnfoldingWordProxy {
  public readonly cat: CatEntityProxy[] | null;
  public readonly mod: number;
  public static Parse(d: string): UnfoldingWordProxy {
    return UnfoldingWordProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): UnfoldingWordProxy {
    if (!field) {
      obj = d;
      field = 'root';
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof (d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkArray(d.cat, field + '.cat');
    if (d.cat) {
      for (let i = 0; i < d.cat.length; i++) {
        d.cat[i] = CatEntityProxy.Create(d.cat[i], field + '.cat' + '[' + i + ']');
      }
    }
    if (d.cat === undefined) {
      d.cat = null;
    }
    checkNumber(d.mod, false, field + '.mod');
    return new UnfoldingWordProxy(d);
  }
  private constructor(d: any) {
    this.cat = d.cat;
    this.mod = d.mod;
  }
}

export class CatEntityProxy {
  public readonly langs: LangsEntityProxy[] | null;
  public readonly slug: string;
  public readonly title: string;
  public static Parse(d: string): CatEntityProxy {
    return CatEntityProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): CatEntityProxy {
    if (!field) {
      obj = d;
      field = 'root';
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof (d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkArray(d.langs, field + '.langs');
    if (d.langs) {
      for (let i = 0; i < d.langs.length; i++) {
        d.langs[i] = LangsEntityProxy.Create(d.langs[i], field + '.langs' + '[' + i + ']');
      }
    }
    if (d.langs === undefined) {
      d.langs = null;
    }
    checkString(d.slug, false, field + '.slug');
    checkString(d.title, false, field + '.title');
    return new CatEntityProxy(d);
  }
  private constructor(d: any) {
    this.langs = d.langs;
    this.slug = d.slug;
    this.title = d.title;
  }
}

export class LangsEntityProxy {
  public readonly lc: string;
  public readonly mod: string;
  public readonly vers: VersEntityProxy[] | null;
  public static Parse(d: string): LangsEntityProxy {
    return LangsEntityProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): LangsEntityProxy {
    if (!field) {
      obj = d;
      field = 'root';
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof (d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.lc, false, field + '.lc');
    checkString(d.mod, false, field + '.mod');
    checkArray(d.vers, field + '.vers');
    if (d.vers) {
      for (let i = 0; i < d.vers.length; i++) {
        d.vers[i] = VersEntityProxy.Create(d.vers[i], field + '.vers' + '[' + i + ']');
      }
    }
    if (d.vers === undefined) {
      d.vers = null;
    }
    return new LangsEntityProxy(d);
  }
  private constructor(d: any) {
    this.lc = d.lc;
    this.mod = d.mod;
    this.vers = d.vers;
  }
}

export class VersEntityProxy {
  public readonly mod: string;
  public readonly name: string;
  public readonly slug: string;
  public readonly status: StatusProxy;
  public readonly toc: TocEntityProxy[] | null;
  public static Parse(d: string): VersEntityProxy {
    return VersEntityProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): VersEntityProxy {
    if (!field) {
      obj = d;
      field = 'root';
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof (d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.mod, false, field + '.mod');
    checkString(d.name, false, field + '.name');
    checkString(d.slug, false, field + '.slug');
    d.status = StatusProxy.Create(d.status, field + '.status');
    checkArray(d.toc, field + '.toc');
    if (d.toc) {
      for (let i = 0; i < d.toc.length; i++) {
        d.toc[i] = TocEntityProxy.Create(d.toc[i], field + '.toc' + '[' + i + ']');
      }
    }
    if (d.toc === undefined) {
      d.toc = null;
    }
    return new VersEntityProxy(d);
  }
  private constructor(d: any) {
    this.mod = d.mod;
    this.name = d.name;
    this.slug = d.slug;
    this.status = d.status;
    this.toc = d.toc;
  }
}

export class StatusProxy {
  public readonly checking_entity: string;
  public readonly checking_level: string;
  public readonly comments: string;
  public readonly contributors: string;
  public readonly publish_date: string;
  public readonly source_text: string;
  public readonly source_text_version: string;
  public readonly version: string;
  public static Parse(d: string): StatusProxy {
    return StatusProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): StatusProxy {
    if (!field) {
      obj = d;
      field = 'root';
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof (d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.checking_entity, false, field + '.checking_entity');
    checkString(d.checking_level, false, field + '.checking_level');
    checkString(d.comments, false, field + '.comments');
    checkString(d.contributors, false, field + '.contributors');
    checkString(d.publish_date, false, field + '.publish_date');
    checkString(d.source_text, false, field + '.source_text');
    checkString(d.source_text_version, false, field + '.source_text_version');
    checkString(d.version, false, field + '.version');
    return new StatusProxy(d);
  }
  private constructor(d: any) {
    this.checking_entity = d.checking_entity;
    this.checking_level = d.checking_level;
    this.comments = d.comments;
    this.contributors = d.contributors;
    this.publish_date = d.publish_date;
    this.source_text = d.source_text;
    this.source_text_version = d.source_text_version;
    this.version = d.version;
  }
}

export class TocEntityProxy {
  public readonly desc: string;
  public readonly mod: string;
  public readonly pdf: string | null;
  public readonly slug: string;
  public readonly src: string;
  public readonly src_sig: string;
  public readonly title: string;
  public readonly media: MediaProxy | null;
  public static Parse(d: string): TocEntityProxy {
    return TocEntityProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): TocEntityProxy {
    if (!field) {
      obj = d;
      field = 'root';
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof (d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.desc, false, field + '.desc');
    checkString(d.mod, false, field + '.mod');
    checkString(d.pdf, true, field + '.pdf');
    if (d.pdf === undefined) {
      d.pdf = null;
    }
    checkString(d.slug, false, field + '.slug');
    checkString(d.src, false, field + '.src');
    checkString(d.src_sig, false, field + '.src_sig');
    checkString(d.title, false, field + '.title');
    d.media = MediaProxy.Create(d.media, field + '.media');
    if (d.media === undefined) {
      d.media = null;
    }
    return new TocEntityProxy(d);
  }
  private constructor(d: any) {
    this.desc = d.desc;
    this.mod = d.mod;
    this.pdf = d.pdf;
    this.slug = d.slug;
    this.src = d.src;
    this.src_sig = d.src_sig;
    this.title = d.title;
    this.media = d.media;
  }
}

export class MediaProxy {
  public readonly audio: AudioProxy;
  public readonly video: VideoProxy;
  public static Parse(d: string): MediaProxy | null {
    return MediaProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): MediaProxy | null {
    if (!field) {
      obj = d;
      field = 'root';
    }
    if (d === null || d === undefined) {
      return null;
    } else if (typeof (d) !== 'object') {
      throwNotObject(field, d, true);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, true);
    }
    d.audio = AudioProxy.Create(d.audio, field + '.audio');
    d.video = VideoProxy.Create(d.video, field + '.video');
    return new MediaProxy(d);
  }
  private constructor(d: any) {
    this.audio = d.audio;
    this.video = d.video;
  }
}

export class AudioProxy {
  public readonly contributors: string;
  public readonly rev: string;
  public readonly src_list: SrcListEntityProxy[] | null;
  public readonly txt_ver: string;
  public static Parse(d: string): AudioProxy {
    return AudioProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): AudioProxy {
    if (!field) {
      obj = d;
      field = 'root';
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof (d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.contributors, false, field + '.contributors');
    checkString(d.rev, false, field + '.rev');
    checkArray(d.src_list, field + '.src_list');
    if (d.src_list) {
      for (let i = 0; i < d.src_list.length; i++) {
        d.src_list[i] = SrcListEntityProxy.Create(d.src_list[i], field + '.src_list' + '[' + i + ']');
      }
    }
    if (d.src_list === undefined) {
      d.src_list = null;
    }
    checkString(d.txt_ver, false, field + '.txt_ver');
    return new AudioProxy(d);
  }
  private constructor(d: any) {
    this.contributors = d.contributors;
    this.rev = d.rev;
    this.src_list = d.src_list;
    this.txt_ver = d.txt_ver;
  }
}

export class SrcListEntityProxy {
  public readonly br: BrEntityProxy[] | null;
  public readonly chap: string;
  public readonly length: number;
  public readonly src: string;
  public readonly src_sig: string;
  public static Parse(d: string): SrcListEntityProxy {
    return SrcListEntityProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): SrcListEntityProxy {
    if (!field) {
      obj = d;
      field = 'root';
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof (d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkArray(d.br, field + '.br');
    if (d.br) {
      for (let i = 0; i < d.br.length; i++) {
        d.br[i] = BrEntityProxy.Create(d.br[i], field + '.br' + '[' + i + ']');
      }
    }
    if (d.br === undefined) {
      d.br = null;
    }
    checkString(d.chap, false, field + '.chap');
    checkNumber(d.length, false, field + '.length');
    checkString(d.src, false, field + '.src');
    checkString(d.src_sig, false, field + '.src_sig');
    return new SrcListEntityProxy(d);
  }
  private constructor(d: any) {
    this.br = d.br;
    this.chap = d.chap;
    this.length = d.length;
    this.src = d.src;
    this.src_sig = d.src_sig;
  }
}

export class BrEntityProxy {
  public readonly bitrate: number;
  public readonly mod: number;
  public readonly size: number;
  public static Parse(d: string): BrEntityProxy {
    return BrEntityProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): BrEntityProxy {
    if (!field) {
      obj = d;
      field = 'root';
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof (d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkNumber(d.bitrate, false, field + '.bitrate');
    checkNumber(d.mod, false, field + '.mod');
    checkNumber(d.size, false, field + '.size');
    return new BrEntityProxy(d);
  }
  private constructor(d: any) {
    this.bitrate = d.bitrate;
    this.mod = d.mod;
    this.size = d.size;
  }
}

export class VideoProxy {
  public readonly contributors: string;
  public readonly rev: string;
  public readonly src_list: SrcListEntity1Proxy[] | null;
  public readonly txt_ver: string;
  public static Parse(d: string): VideoProxy {
    return VideoProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): VideoProxy {
    if (!field) {
      obj = d;
      field = 'root';
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof (d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.contributors, false, field + '.contributors');
    checkString(d.rev, false, field + '.rev');
    checkArray(d.src_list, field + '.src_list');
    if (d.src_list) {
      for (let i = 0; i < d.src_list.length; i++) {
        d.src_list[i] = SrcListEntity1Proxy.Create(d.src_list[i], field + '.src_list' + '[' + i + ']');
      }
    }
    if (d.src_list === undefined) {
      d.src_list = null;
    }
    checkString(d.txt_ver, false, field + '.txt_ver');
    return new VideoProxy(d);
  }
  private constructor(d: any) {
    this.contributors = d.contributors;
    this.rev = d.rev;
    this.src_list = d.src_list;
    this.txt_ver = d.txt_ver;
  }
}

export class SrcListEntity1Proxy {
  public readonly chap: string;
  public readonly length: number;
  public readonly res: ResEntityProxy[] | null;
  public readonly src: string;
  public readonly src_sig: string;
  public static Parse(d: string): SrcListEntity1Proxy {
    return SrcListEntity1Proxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): SrcListEntity1Proxy {
    if (!field) {
      obj = d;
      field = 'root';
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof (d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.chap, false, field + '.chap');
    checkNumber(d.length, false, field + '.length');
    checkArray(d.res, field + '.res');
    if (d.res) {
      for (let i = 0; i < d.res.length; i++) {
        d.res[i] = ResEntityProxy.Create(d.res[i], field + '.res' + '[' + i + ']');
      }
    }
    if (d.res === undefined) {
      d.res = null;
    }
    checkString(d.src, false, field + '.src');
    checkString(d.src_sig, false, field + '.src_sig');
    return new SrcListEntity1Proxy(d);
  }
  private constructor(d: any) {
    this.chap = d.chap;
    this.length = d.length;
    this.res = d.res;
    this.src = d.src;
    this.src_sig = d.src_sig;
  }
}

export class ResEntityProxy {
  public readonly mod: number;
  public readonly resolution: number;
  public readonly size: number;
  public static Parse(d: string): ResEntityProxy {
    return ResEntityProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): ResEntityProxy {
    if (!field) {
      obj = d;
      field = 'root';
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof (d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkNumber(d.mod, false, field + '.mod');
    checkNumber(d.resolution, false, field + '.resolution');
    checkNumber(d.size, false, field + '.size');
    return new ResEntityProxy(d);
  }
  private constructor(d: any) {
    this.mod = d.mod;
    this.resolution = d.resolution;
    this.size = d.size;
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
  if (typeof (d) !== 'number' && (!nullable || (nullable && d !== null && d !== undefined))) {
    errorHelper(field, d, 'number', nullable);
  }
}
function checkString(d: any, nullable: boolean, field: string): void {
  if (typeof (d) !== 'string' && (!nullable || (nullable && d !== null && d !== undefined))) {
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
