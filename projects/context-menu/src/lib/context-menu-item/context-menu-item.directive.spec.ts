import { ContextMenuItemDirective } from './context-menu-item.directive';
import { TemplateRef } from '@angular/core';
import { mock } from '../../test';

describe('ContextMenuItemDirective', () => {
  it('should create an instance', () => {
    const templateRef = mock(TemplateRef<ContextMenuItemDirective<any>>);
    const directive = new ContextMenuItemDirective(templateRef);
    expect(directive).toBeTruthy();
  });
});
