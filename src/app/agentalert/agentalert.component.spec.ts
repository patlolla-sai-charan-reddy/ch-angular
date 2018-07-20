import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentalertComponent } from './agentalert.component';

describe('AgentalertComponent', () => {
  let component: AgentalertComponent;
  let fixture: ComponentFixture<AgentalertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentalertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentalertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
