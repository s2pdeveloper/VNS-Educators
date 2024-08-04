import { isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, Renderer2, ViewChild, PLATFORM_ID,Inject } from '@angular/core';
import Swiper from 'swiper';
import { register } from 'swiper/element/bundle';
register()
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {
constructor(@Inject(PLATFORM_ID) private _platformId: Object,){}
swiper: Swiper | undefined;

ngAfterViewInit(): void {
  if (isPlatformBrowser(this._platformId)) {
    this.swiper = new Swiper('.sample-slider', {
      loop: true, //loop
      autoplay: {
        //autoplay
        delay: 2000,
      },
      pagination: {
        //pagination(dots)
        el: '.swiper-pagination',
      },
      navigation: {
        //navigation(arrows)
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',  
      },
    });
  }
}

swiperBreakpoints = {
  320: {
    slidesPerView: 1,
    spaceBetween: 10
  },
  640: {
    slidesPerView: 2,
    spaceBetween: 20
  },
  768: {
    slidesPerView: 3,
    spaceBetween: 30
  },
  1024: {
    slidesPerView: 4,
    spaceBetween: 40
  },
  1440: {
    slidesPerView: 4,
    spaceBetween: 40
  }
};

images =[
  {"img":"../../../../assets/corporate-trainer.png"},
  {"img":"../../../../assets/corporate-trainer.png"},
  {"img":"../../../../assets/corporate-trainer.png"},
  {"img":"../../../../assets/corporate-trainer.png"},
  {"img":"../../../../assets/corporate-trainer.png"},
  {"img":"../../../../assets/corporate-trainer.png"},
  {"img":"../../../../assets/corporate-trainer.png"},
]
}
