import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardUsersComponent } from './onboard-users.component';

describe('OnboardUsersComponent', () => {
  let component: OnboardUsersComponent;
  let fixture: ComponentFixture<OnboardUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnboardUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnboardUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
