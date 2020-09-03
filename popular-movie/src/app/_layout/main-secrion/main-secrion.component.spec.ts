import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSecrionComponent } from './main-secrion.component';

describe('MainSecrionComponent', () => {
  let component: MainSecrionComponent;
  let fixture: ComponentFixture<MainSecrionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainSecrionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainSecrionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
