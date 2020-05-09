import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit  {
  title = 'esignature-demo';

  @ViewChild(SignaturePad, {static: false}) signaturePad: SignaturePad;

  signaturePadOptions = {
                          minWidth: 5,
                          canvasWidth: 700,
                          canvasHeight: 300
                        };
  imagePath: SafeResourceUrl;
  imageReady = false;

  constructor(private sanitizer: DomSanitizer) { }

  ngAfterViewInit() {
    // this.signaturePad is now available
    this.signaturePad.set('minWidth', 5);
    this.signaturePad.clear();
  }

  drawComplete() {
    // will be notified of szimek/signature_pad's onEnd event
    // console.log(this.signaturePad.toDataURL());
  }

  drawStart() {
    // will be notified of szimek/signature_pad's onBegin event
    console.log('begin drawing');
    this.imageReady = false;
  }

  drawClear() {
    this.signaturePad.clear();
  }

  drawSubmit() {
    // this.imagePath = this.sanitizer.bypassSecurityTrustResourceUrl('data:image/png;base64,' + this.signaturePad.toDataURL());
    this.imagePath =  this.signaturePad.toDataURL();
    this.imageReady = true;
  }

}
