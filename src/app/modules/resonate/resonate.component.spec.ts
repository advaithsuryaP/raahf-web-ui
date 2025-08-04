import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResonateComponent } from './resonate.component';

describe('ResonateComponent', () => {
  let component: ResonateComponent;
  let fixture: ComponentFixture<ResonateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResonateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResonateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
