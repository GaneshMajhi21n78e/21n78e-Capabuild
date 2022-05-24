import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeCapaComponent } from './welcome-capa.component';

describe('WelcomeCapaComponent', () => {
  let component: WelcomeCapaComponent;
  let fixture: ComponentFixture<WelcomeCapaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeCapaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeCapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
