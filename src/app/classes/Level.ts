import { BibleContainer } from '@app/classes/BibleContainer';

export class Level {

  containers: BibleContainer[];
  id: number;

  constructor(
    id: number,
    containers: BibleContainer[]
  ) {
    this.id = id;
    this.containers = containers;
  }
}
