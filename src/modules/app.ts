// <reference path="drag-drop-interfaces.ts" />
import { Draggable } from './drag-drop-interfaces';

class ProjectItem implements Draggable {
  dragStartHandler(event: DragEvent): void {
    console.log(event);
  }
}

console.log(ProjectItem);