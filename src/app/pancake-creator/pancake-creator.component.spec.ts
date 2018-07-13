import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PancakeCreatorComponent } from './pancake-creator.component';

describe('PancakeCreatorComponent', () => {
  let component: PancakeCreatorComponent;
  let fixture: ComponentFixture<PancakeCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PancakeCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PancakeCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
