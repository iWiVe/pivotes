import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PivoresComponent } from './pivotes.component';

describe('WizardsComponent', () => {
  let component: PivoresComponent;
  let fixture: ComponentFixture<PivoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PivoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PivoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
