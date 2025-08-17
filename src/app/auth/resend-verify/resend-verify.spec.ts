import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResendVerify } from './resend-verify';

describe('ResendVerify', () => {
  let component: ResendVerify;
  let fixture: ComponentFixture<ResendVerify>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResendVerify]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResendVerify);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
