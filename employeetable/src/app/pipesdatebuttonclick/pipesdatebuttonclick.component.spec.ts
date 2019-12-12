import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesdatebuttonclickComponent } from './pipesdatebuttonclick.component';

describe('PipesdatebuttonclickComponent', () => {
  let component: PipesdatebuttonclickComponent;
  let fixture: ComponentFixture<PipesdatebuttonclickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipesdatebuttonclickComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipesdatebuttonclickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
