import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ReportsService } from 'src/app/services/reports.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit  {

  @ViewChild('iframe', { static: true }) iframe: ElementRef;

  iframeHeight;
  iframeWidth;
  reports;
  errorMessage = '';
  info = '';

  constructor( private reporstService: ReportsService, ) {
  }

  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  ngOnInit() {
    this.reporstService.getText().subscribe({
      next: response => {
        this.info = response;
        console.log(this.info);
      },
      error: err => this.errorMessage = err
    });

    this.reporstService.getReports().subscribe({
      next: reports => {
        this.reports = reports;
        for (const tempo of this.reports.Reportes) {
          tempo.graphUrl = [];
          for (const graph of tempo.Graficos) {
            tempo.graphUrl.push('../../../../api/' + graph.substr(3));
          }
        }
        console.log(this.reports.Reportes, 'Reportes');
      },
      error: err => this.errorMessage = err
    });
  }

}
