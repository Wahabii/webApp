import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcueilleComponent } from './acueille.component';

describe('AcueilleComponent', () => {
  let component: AcueilleComponent;
  let fixture: ComponentFixture<AcueilleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcueilleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcueilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
