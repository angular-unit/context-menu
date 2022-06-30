import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[libContextMenuItem]'
})
export class ContextMenuItemDirective<T> {
  constructor(public templateRef: TemplateRef<ContextMenuItemDirective<T>>) {}
}
