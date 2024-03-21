import { Component, Input, OnChanges, SimpleChanges, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnChanges {

@Input({required:true})bannerTitle='';
@Input() bannerOverview='';
@Input() key='69yHznzqCEI';
private sanitizer=inject(DomSanitizer);

videoUrl=this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this.key}?autoplay=1&mute=1&loop=1`)


ngOnChanges(changes: SimpleChanges): void {
  
    if(changes['key']){
      this.videoUrl=this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this.key}?autoplay=1&mute=1&loop=1&controls=0`)
    }
}
}
