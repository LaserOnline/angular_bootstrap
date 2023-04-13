import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StretchedLinkComponent } from './stretched-link.component';

describe('StretchedLinkComponent', () => {
  let component: StretchedLinkComponent;
  let fixture: ComponentFixture<StretchedLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StretchedLinkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StretchedLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
