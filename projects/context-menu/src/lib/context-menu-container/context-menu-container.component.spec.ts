import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContextMenuContainerComponent } from './context-menu-container.component';

describe('ContextMenuContentComponent', () => {
  let component: ContextMenuContainerComponent<any>;
  let fixture: ComponentFixture<ContextMenuContainerComponent<any>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContextMenuContainerComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ContextMenuContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
