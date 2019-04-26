import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramNameDialogComponent } from './program-name-dialog.component';

describe('ProgramNameDialogComponent', () => {
  let component: ProgramNameDialogComponent;
  let fixture: ComponentFixture<ProgramNameDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramNameDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramNameDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
