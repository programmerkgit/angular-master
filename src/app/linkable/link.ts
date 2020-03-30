export type Linkable = Link | Directory;

export class Link {
  url: string;
  text?: string;

  constructor(url: string, text?: string) {
    this.url = url;
    this.text = text;
  }
}

export class Directory {
  text: string;
  children: Linkable[];

  constructor(text: string, children: Linkable[]) {
    this.text = text;
    this.children = children;
  }
}

