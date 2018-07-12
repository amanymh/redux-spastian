import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncrementDescrimentComponent } from './increment-descriment.component';

describe('IncrementDescrimentComponent', () => {
  let component: IncrementDescrimentComponent;
  let fixture: ComponentFixture<IncrementDescrimentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncrementDescrimentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncrementDescrimentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
