import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Resighter } from './register';

describe('Resighter', () => {
  let component: Resighter;
  let fixture: ComponentFixture<Resighter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Resighter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Resighter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
