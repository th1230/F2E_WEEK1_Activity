import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
@Component({
  selector: 'app-section-4',
  templateUrl: './section4.component.html',
  styleUrls: ['./section4.component.scss'],
})
export class Section4Component implements OnInit {
  @ViewChild('ul') ul!: ElementRef;
  constructor() {}

  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger);
  }

  ngAfterViewInit() {
    this.horizontalAnimate();
  }

  horizontalAnimate() {
    let ul = this.ul.nativeElement;
    let liItems = ul.children;

    gsap.to(liItems, {
      ease: 'none',
      xPercent: -100 * (liItems.length - 1),
      scrollTrigger: {
        trigger: ul,
        pin: true,
        start: 'top top',
        scrub: true,
        snap: 1 / (liItems.length - 1),
        end: () => '+=' + ul.offsetWidth,
      },
    });
  }
}
