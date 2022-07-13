import { Directive, Input, TemplateRef } from '@angular/core';
import { ContextMenuComponent } from '../context-menu.component';
import { Highlightable } from '@angular/cdk/a11y';

@Directive({
  selector: '[contextMenuItem]'
})
export class ContextMenuItemDirective<T> implements Highlightable {
  _active: boolean;
  _disabled: boolean;
  _hidden: boolean;
  _isSubMenu: boolean;
  _subMenu: ContextMenuComponent<T> | null;
  _value: T | null;

  constructor(public templateRef: TemplateRef<ContextMenuItemDirective<T>>) {
    this._active = false;
    this._disabled = false;
    this._hidden = false;
    this._isSubMenu = false;
    this._subMenu = null;
    this._value = null;
  }

  @Input()
  set disabled(value: boolean) {
    this._disabled = value;
  }

  @Input()
  set visible(value: boolean) {
    this._hidden = !value;
  }

  @Input()
  set subMenu(value: ContextMenuComponent<T>) {
    this._isSubMenu = true;
    this._subMenu = value;
  }

  setActiveStyles(): void {
    this._active = true;
  }

  setInactiveStyles(): void {
    this._active = false;
  }
}
