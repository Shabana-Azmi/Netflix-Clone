import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import Swiper from 'swiper';
import { IVideoContent } from '../../models/video-content.interface';
import { DescriptionPipe } from '../../Pipes/description.pipe';
import { NgFor } from '@angular/common';
import { ImagePipe } from '../../Pipes/image.pipe';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-movie-carosel',
  templateUrl: './movie-carosel.component.html',
  styleUrls: ['./movie-carosel.component.scss'],
  // standalone:true,
  animations:[
    trigger('fade',[
      transition('void => *',[
        style({opacity:0}),
        animate(12000,style({opacity:1}))
      ])
    ])
  ]
})


export class MovieCaroselComponent implements OnInit ,AfterViewInit{
  selectConntent:string|null=null;
  description!:DescriptionPipe;
  image!:ImagePipe;
  @Input() videoContents:IVideoContent[]=[];
  @Input() title!:string;
  ngAfterViewInit(): void {
    this.initSwiper();
  }
  @ViewChild('swiperContainer') swiperContainer!: ElementRef;
  ngOnInit(): void {}
  private initSwiper() {
    return new Swiper(this.swiperContainer.nativeElement, {
      slidesPerView: 3,
      slidesPerGroup: 2,
      centeredSlides: true,
      loop: true,
      breakpoints: {
        600: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 5,
          centeredSlides: true,
        },
        900: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 5,
          centeredSlides: true,
        },
        1200: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 5,
          centeredSlides: false,
        },
        1500: {
          slidesPerView: 5,
          slidesPerGroup: 5,
          spaceBetween: 5,
          centeredSlides: false,
        },
        1000: {
          slidesPerView: 5,
          slidesPerGroup: 6,
          spaceBetween: 5,
          centeredSlides: false,
        },
      },
    });
  }
  setHoverMovie(movie:IVideoContent){
    this.selectConntent=movie.title ?? movie.name;
  }
  clearMovies(){
    this.selectConntent=null;
  }
}
