import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridSystemResponsiveComponent } from './grid-system-responsive.component';

describe('GridSystemResponsiveComponent', () => {
  let component: GridSystemResponsiveComponent;
  let fixture: ComponentFixture<GridSystemResponsiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridSystemResponsiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridSystemResponsiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
