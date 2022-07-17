import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContextMenuComponent } from './context-menu.component';
import { OverlayModule } from '@angular/cdk/overlay';

describe('ContextMenuComponent', () => {
  let component: ContextMenuComponent<any>;
  let fixture: ComponentFixture<ContextMenuComponent<any>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OverlayModule],
      declarations: [ContextMenuComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ContextMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
