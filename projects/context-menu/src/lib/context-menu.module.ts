import { CommonModule } from '@angular/common';
import { ContextMenuComponent } from './context-menu.component';
import { ContextMenuContainerComponent } from './context-menu-container/context-menu-container.component';
import { ContextMenuItemDirective } from './context-menu-item/context-menu-item.directive';
import { NgModule } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';

@NgModule({
  declarations: [
    ContextMenuComponent,
    ContextMenuItemDirective,
    ContextMenuContainerComponent
  ],
  imports: [CommonModule, OverlayModule],
  exports: [
    ContextMenuComponent,
    ContextMenuItemDirective,
    ContextMenuContainerComponent
  ]
})
export class ContextMenuModule {}
