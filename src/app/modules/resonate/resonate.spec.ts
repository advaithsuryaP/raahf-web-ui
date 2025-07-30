import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Resonate } from './resonate';

describe('Resonate', () => {
  let component: Resonate;
  let fixture: ComponentFixture<Resonate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Resonate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Resonate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
