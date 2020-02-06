import { Component, OnInit, ElementRef, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'app-image-report',
  templateUrl: './image-report.component.html',
  styleUrls: ['./image-report.component.scss']
})
export class ImageReportComponent implements OnInit {

  @ViewChild('image', { static: true }) image: ElementRef;
  iframeHeight;
  iframeWidth;

  @Input() srcUrl: string;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    if (this.image) {
    }
  }

  myLoadEvent() {
    this.iframeHeight = this.image.nativeElement.ownerDocument.body.scrollHeight;
    this.iframeWidth = this.image.nativeElement.ownerDocument.body.scrollWidth;
  }

}
