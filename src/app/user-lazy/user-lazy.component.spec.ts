import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLazyComponent } from './user-lazy.component';

describe('UserLazyComponent', () => {
  let component: UserLazyComponent;
  let fixture: ComponentFixture<UserLazyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserLazyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserLazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
