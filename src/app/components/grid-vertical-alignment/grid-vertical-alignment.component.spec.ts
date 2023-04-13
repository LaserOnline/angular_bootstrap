import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridVerticalAlignmentComponent } from './grid-vertical-alignment.component';

describe('GridVerticalAlignmentComponent', () => {
  let component: GridVerticalAlignmentComponent;
  let fixture: ComponentFixture<GridVerticalAlignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridVerticalAlignmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridVerticalAlignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
