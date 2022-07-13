import { ContextMenuItemDirective } from './context-menu-item.directive';
import { TemplateRef } from '@angular/core';

describe('ContextMenuItemDirective', () => {
  it('should create an instance', () => {
    const templateRef = jasmine.createSpyObj<
      TemplateRef<ContextMenuItemDirective<any>>
    >('templateRef', []);
    const directive = new ContextMenuItemDirective(templateRef);
    expect(directive).toBeTruthy();
  });
});
