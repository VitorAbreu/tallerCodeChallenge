import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainFetchComponent } from './main-fetch.component';

describe('MainFetchComponent', () => {
  let component: MainFetchComponent;
  let fixture: ComponentFixture<MainFetchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainFetchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainFetchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
