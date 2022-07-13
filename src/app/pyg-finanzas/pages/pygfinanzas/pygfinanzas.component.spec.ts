import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PygfinanzasComponent } from './pygfinanzas.component';

describe('PygfinanzasComponent', () => {
  let component: PygfinanzasComponent;
  let fixture: ComponentFixture<PygfinanzasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PygfinanzasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PygfinanzasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
