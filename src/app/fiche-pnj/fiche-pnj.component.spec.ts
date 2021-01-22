import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichePnjComponent } from './fiche-pnj.component';

describe('FichePnjComponent', () => {
  let component: FichePnjComponent;
  let fixture: ComponentFixture<FichePnjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FichePnjComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FichePnjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
