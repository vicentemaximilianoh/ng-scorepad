import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupGameComponent } from './setup-game.component';

describe('SetupGameComponent', () => {
  let component: SetupGameComponent;
  let fixture: ComponentFixture<SetupGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
