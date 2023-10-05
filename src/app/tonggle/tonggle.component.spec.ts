import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TonggleComponent } from './tonggle.component';

describe('TonggleComponent', () => {
  let component: TonggleComponent;
  let fixture: ComponentFixture<TonggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TonggleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TonggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
