import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvantageCapaComponent } from './advantage-capa.component';

describe('AdvantageCapaComponent', () => {
  let component: AdvantageCapaComponent;
  let fixture: ComponentFixture<AdvantageCapaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvantageCapaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvantageCapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
