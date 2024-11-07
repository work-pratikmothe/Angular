import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularTechComponent } from './angular-tech.component';

describe('AngularTechComponent', () => {
  let component: AngularTechComponent;
  let fixture: ComponentFixture<AngularTechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AngularTechComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
