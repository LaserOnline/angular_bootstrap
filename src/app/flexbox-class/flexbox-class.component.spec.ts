import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexboxClassComponent } from './flexbox-class.component';

describe('FlexboxClassComponent', () => {
  let component: FlexboxClassComponent;
  let fixture: ComponentFixture<FlexboxClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlexboxClassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlexboxClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
