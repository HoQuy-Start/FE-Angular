import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContacsComponent } from './contacs.component';

describe('ContacsComponent', () => {
  let component: ContacsComponent;
  let fixture: ComponentFixture<ContacsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContacsComponent]
    });
    fixture = TestBed.createComponent(ContacsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
