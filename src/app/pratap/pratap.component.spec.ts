import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PratapComponent } from './pratap.component';

describe('PratapComponent', () => {
  let component: PratapComponent;
  let fixture: ComponentFixture<PratapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PratapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PratapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
