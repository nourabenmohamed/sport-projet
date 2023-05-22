import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsTabComponent } from './teams-tab.component';

describe('TeamsTabComponent', () => {
  let component: TeamsTabComponent;
  let fixture: ComponentFixture<TeamsTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamsTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
