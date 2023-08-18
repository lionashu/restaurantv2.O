import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestuarentdashComponent } from './restuarentdash.component';

describe('RestuarentdashComponent', () => {
  let component: RestuarentdashComponent;
  let fixture: ComponentFixture<RestuarentdashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestuarentdashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestuarentdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
