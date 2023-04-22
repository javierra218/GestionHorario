import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewrecursoComponent } from './newrecurso.component';

describe('NewrecursoComponent', () => {
  let component: NewrecursoComponent;
  let fixture: ComponentFixture<NewrecursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewrecursoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewrecursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
