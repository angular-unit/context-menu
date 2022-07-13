import {
  ChangeDetectionStrategy,
  Component,
  Input,
  QueryList
} from '@angular/core';
import { ContextMenuItemDirective } from '../context-menu-item/context-menu-item.directive';
import { ContextMenuSubContainerClass } from '../context-menu-const';

@Component({
  selector: 'context-menu-container',
  templateUrl: './context-menu-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContextMenuContainerComponent<T> {
  _contextMenuSubContainerClass = ContextMenuSubContainerClass;
  _contextMenuItemDirectives: ContextMenuItemDirective<T>[];

  @Input()
  set contextMenuItemDirectives(
    value: QueryList<ContextMenuItemDirective<T>> | null
  ) {
    this._contextMenuItemDirectives = value !== null ? [...value] : [];
  }

  @Input()
  menuClass: string = '';

  @Input()
  parentContextMenu: ContextMenuContainerComponent<T> | null = null;

  @Input()
  value: T | null = null;

  constructor() {
    this._contextMenuItemDirectives = [];
  }
}
