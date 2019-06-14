import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSocialMobileComponent } from './header-social-mobile.component';

describe('HeaderSocialMobileComponent', () => {
  let component: HeaderSocialMobileComponent;
  let fixture: ComponentFixture<HeaderSocialMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderSocialMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderSocialMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
