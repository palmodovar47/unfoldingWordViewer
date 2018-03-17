export class BibleContainer {
  id: number;
  containerTitle: string;

  constructor (id: number) {
    this.id = id;
    this.refreshTitle();
  }

  refreshTitle(): void {
    this.containerTitle = `Bible View ${String(this.id + 1)}`;
  }
}
