import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContextMenuComponent } from './context-menu.component';
import { ContextMenuItemDirective } from './context-menu-item/context-menu-item.directive';
import { ContextMenuContentComponent } from './context-menu-content/context-menu-content.component';

@NgModule({
  declarations: [
    ContextMenuComponent,
    ContextMenuItemDirective,
    ContextMenuContentComponent
  ],
  imports: [
    CommonModule, OverlayModule
  ],
  exports: [
    ContextMenuComponent,
    ContextMenuItemDirective,
    ContextMenuContentComponent
  ]
})
export class ContextMenuModule { }
