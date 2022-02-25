import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxNouisliderComponent } from './ngx-nouislider.component';

describe('NgxNouisliderComponent', () => {
  let component: NgxNouisliderComponent;
  let fixture: ComponentFixture<NgxNouisliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxNouisliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxNouisliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
