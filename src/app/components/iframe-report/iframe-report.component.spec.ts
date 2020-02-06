import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IFrameReportComponent } from './iframe-report.component';

describe('ReportComponent', () => {
  let component: IFrameReportComponent;
  let fixture: ComponentFixture<IFrameReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IFrameReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IFrameReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
