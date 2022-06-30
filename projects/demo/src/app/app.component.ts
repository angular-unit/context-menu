import { Component, ViewChild } from '@angular/core';
import { ContextMenuComponent } from 'projects/context-menu/src/public-api';

interface Item {
  value: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('contextMenu') contextMenu: ContextMenuComponent<Item> | null = null;

  title = '@angular-unit/context-menu';
  items: Item[] = [
    { value: 'Item 1' },
    { value: 'Item 2' },
    { value: 'Item 3' },
    { value: 'Item 4' },
    { value: 'Item 5' }
  ];

  open(event: MouseEvent) {
    this.contextMenu?.createContextMenu(event);
  }
}
