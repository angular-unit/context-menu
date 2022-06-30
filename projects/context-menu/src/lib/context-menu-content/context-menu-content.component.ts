import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ContextMenuItemDirective } from '../context-menu-item/context-menu-item.directive';

@Component({
  selector: 'context-menu-content',
  templateUrl: './context-menu-content.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContextMenuContentComponent<T> {
  @Input()
  contextMenuItemDirectives: ContextMenuItemDirective<T>[] = [];

  @Input()
  parentContextMenu: ContextMenuContentComponent<T> | null = null;
}
