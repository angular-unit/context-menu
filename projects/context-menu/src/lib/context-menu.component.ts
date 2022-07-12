import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import {
  ChangeDetectionStrategy,
  Component,
  ComponentRef,
  ContentChildren,
  QueryList,
  ViewContainerRef,
} from '@angular/core';
import { ContextMenuContainerClass } from './context-menu-const';
import { ContextMenuContainerComponent } from './context-menu-container/context-menu-container.component';
import { ContextMenuItemDirective } from './context-menu-item/context-menu-item.directive';

@Component({
  selector: 'context-menu',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContextMenuComponent<T> {
  @ContentChildren(ContextMenuItemDirective)
  _contextMenuItemDirectives: QueryList<ContextMenuItemDirective<T>> | null;
  _overlayRef: OverlayRef | null;

  constructor(
    public overlay: Overlay,
    public viewContainerRef: ViewContainerRef
  ) {
    this._contextMenuItemDirectives = null;
    this._overlayRef = null;
  }

  createContextMenu(event: MouseEvent): void {
    event.preventDefault();
    const x = event.x;
    const y = event.y;
    this.disposeContextMenu();

    const positionStrategy = this.overlay
      .position()
      .flexibleConnectedTo({ x, y })
      .withPositions([
        {
          originX: 'end',
          originY: 'bottom',
          overlayX: 'end',
          overlayY: 'top',
        },
      ]);

    this._overlayRef = this.overlay.create({
      hasBackdrop: true,
      positionStrategy
    });

    const contextMenuContentRef: ComponentRef<ContextMenuContainerComponent<T>> =
      this._overlayRef.attach(
        new ComponentPortal<ContextMenuContainerComponent<T>>(
          ContextMenuContainerComponent,
          this.viewContainerRef
        )
      );

    const { instance: contextMenuContentComponent } = contextMenuContentRef;

    contextMenuContentComponent.menuClass = ContextMenuContainerClass;
    contextMenuContentComponent.contextMenuItemDirectives = this._contextMenuItemDirectives;

    this._overlayRef.backdropClick().subscribe(() => this.disposeContextMenu());
  }

  disposeContextMenu(): void {
    if (this._overlayRef) {
      this._overlayRef.dispose();
      this._overlayRef = null;
    }
  }
}
