import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input({required:true}) userImg:string=" ";
  @Input ({required:true}) userName:string='';
navItem=["Home","TV Shows","News & Popular","My List","Browse by Language"]
}
