import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridHorizontalAlignmentComponent } from './grid-horizontal-alignment.component';

describe('GridHorizontalAlignmentComponent', () => {
  let component: GridHorizontalAlignmentComponent;
  let fixture: ComponentFixture<GridHorizontalAlignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridHorizontalAlignmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridHorizontalAlignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
