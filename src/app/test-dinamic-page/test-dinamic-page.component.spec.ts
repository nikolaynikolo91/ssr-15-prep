import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestDinamicPageComponent } from './test-dinamic-page.component';

describe('TestDinamicPageComponent', () => {
  let component: TestDinamicPageComponent;
  let fixture: ComponentFixture<TestDinamicPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestDinamicPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestDinamicPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
