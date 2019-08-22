import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardPolicyComponent } from './onboard-policy.component';

describe('OnboardPolicyComponent', () => {
  let component: OnboardPolicyComponent;
  let fixture: ComponentFixture<OnboardPolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnboardPolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnboardPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
