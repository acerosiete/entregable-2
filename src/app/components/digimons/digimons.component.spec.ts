import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigimonsComponent } from './digimons.component';

describe('DigimonsComponent', () => {
  let component: DigimonsComponent;
  let fixture: ComponentFixture<DigimonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DigimonsComponent]
    });
    fixture = TestBed.createComponent(DigimonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
