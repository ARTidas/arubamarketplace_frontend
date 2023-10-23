import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginModalContentComponent } from './login-modal-content.component';

describe('LoginModalContentComponent', () => {
  let component: LoginModalContentComponent;
  let fixture: ComponentFixture<LoginModalContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginModalContentComponent]
    });
    fixture = TestBed.createComponent(LoginModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
