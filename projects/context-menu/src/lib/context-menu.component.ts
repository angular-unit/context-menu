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
import { filter, fromEvent, Subscription, take } from 'rxjs';
import { ContextMenuContentComponent } from './context-menu-content/context-menu-content.component';
import { ContextMenuItemDirective } from './context-menu-item/context-menu-item.directive';

@Component({
  selector: 'context-menu',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContextMenuComponent<T> {
  @ContentChildren(ContextMenuItemDirective)
  contextMenuItemDirectives!: QueryList<ContextMenuItemDirective<T>>;

  sub: Subscription | null = null;
  overlayRef: OverlayRef | null = null;

  constructor(
    public overlay: Overlay,
    public viewContainerRef: ViewContainerRef
  ) {}

  createContextMenu(event: MouseEvent) {
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

    this.overlayRef = this.overlay.create({
      hasBackdrop: true,
      positionStrategy,
      scrollStrategy: this.overlay.scrollStrategies.close(),
    });

    const contextMenuContentRef: ComponentRef<ContextMenuContentComponent<T>> =
      this.overlayRef.attach(
        new ComponentPortal<ContextMenuContentComponent<T>>(
          ContextMenuContentComponent,
          this.viewContainerRef
        )
      );

    const { instance: contextMenuContentComponent } = contextMenuContentRef;

    contextMenuContentComponent.contextMenuItemDirectives = [
      ...this.contextMenuItemDirectives,
    ];

    this.sub = fromEvent<MouseEvent>(document, 'click')
      .pipe(
        filter((event) => {
          const clickTarget = event.target as HTMLElement;
          return (
            !!this.overlayRef &&
            !this.overlayRef.overlayElement.contains(clickTarget)
          );
        }),
        take(1)
      )
      .subscribe(() => this.disposeContextMenu());
  }

  disposeContextMenu() {
    this.sub && this.sub.unsubscribe();
    if (this.overlayRef) {
      this.overlayRef.dispose();
      this.overlayRef = null;
    }
  }
}
