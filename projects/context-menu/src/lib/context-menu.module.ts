import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContextMenuComponent } from './context-menu.component';
import { ContextMenuItemDirective } from './context-menu-item/context-menu-item.directive';
import { ContextMenuContainerComponent } from './context-menu-container/context-menu-container.component';

@NgModule({
  declarations: [
    ContextMenuComponent,
    ContextMenuItemDirective,
    ContextMenuContainerComponent
  ],
  imports: [
    CommonModule, OverlayModule
  ],
  exports: [
    ContextMenuComponent,
    ContextMenuItemDirective,
    ContextMenuContainerComponent
  ]
})
export class ContextMenuModule { }
