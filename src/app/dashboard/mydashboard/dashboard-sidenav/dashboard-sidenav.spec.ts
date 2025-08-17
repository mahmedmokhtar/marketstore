import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSidenav } from './dashboard-sidenav';

describe('DashboardSidenav', () => {
  let component: DashboardSidenav;
  let fixture: ComponentFixture<DashboardSidenav>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardSidenav]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardSidenav);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
