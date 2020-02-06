import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Input } from '@angular/core';

@Component({
  selector: 'app-iframe-report',
  templateUrl: './iframe-report.component.html',
  styleUrls: ['./iframe-report.component.scss']
})
export class IFrameReportComponent implements OnInit, AfterViewInit  {

  @ViewChild('iframe', { static: true }) iframe: ElementRef;
  iframeHeight;
  iframeWidth;

  @Input() srcUrl: string;

  constructor() { }

  ngOnInit() {
  }


  ngAfterViewInit() {
    if (this.iframe) {
      console.log(this.iframe, '(this.iframe');
    }
  }

  myLoadEvent() {
    this.iframeHeight = this.iframe.nativeElement.contentDocument.body.scrollHeight;
    this.iframeWidth = this.iframe.nativeElement.contentDocument.body.scrollWidth;
    const iframDoc = this.iframe.nativeElement.contentWindow.document;
    console.log(this.iframe.nativeElement.contentWindow.document.head, 'this.iframe.nativeElement.contentWindow.documen');
    console.log(iframDoc, 'iframDoc');
/* 
    const z = document.createElement('style');
    z.innerHTML = `table { border-style: none; } td {
      white-space: nowrap;
   } html { height: ${this.iframeHeight * 0.50}px;}`;
    iframDoc.head.appendChild(z); */
    // iframDoc.head.insertBefore('<style>table { border-style: none; }</style>', iframDoc.head.childNodes[0]);
  }

}
