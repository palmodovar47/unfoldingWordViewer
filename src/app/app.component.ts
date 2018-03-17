import { Component } from '@angular/core';
import { Level } from '@app/classes/Level';
import { BibleContainer } from '@app/classes/BibleContainer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  levels: Level[] = [
    new Level(0, [ new BibleContainer(0) ])
  ];
  title = 'Some Views of the Unfolding Word';
  latestBibleContainerId = 0;
  latestLevelId = 0;

  get totalAmountOfContainers(): number {
    return this.levels
      .map<number>(level => level.containers.length)
      .reduce((pre, cur): number => pre + cur);
  }

  addLevel(): void {
    this.latestBibleContainerId = this.latestBibleContainerId + 1;
    this.latestLevelId = this.latestLevelId + 1;
    this.levels.push(
      new Level(
        this.latestLevelId,
        [ new BibleContainer(this.latestBibleContainerId) ]
      )
    );
  }

  addRight(levelId: number): void {
    this.latestBibleContainerId = this.latestBibleContainerId + 1;
    this.levels
      .find( level => level.id === levelId )
        .containers.push(new BibleContainer(this.latestBibleContainerId));
  }


  closeContainer(
    levelId: number,
    containerId: number
  ): void {
    const levelIndex = this.levels.findIndex(level => level.id === levelId);
    const selectedLevel = this.levels[levelIndex];
    if (selectedLevel.containers.length < 2) {
      if (this.levels.length !== 1) {
        this.levels.splice(levelIndex, 1);
      }
    } else {
      const contIndex = selectedLevel.containers
      .findIndex(con => con.id === containerId);
      selectedLevel.containers.splice(contIndex, 1);
    }
  }
}

