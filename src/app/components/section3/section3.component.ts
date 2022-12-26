import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

@Component({
  selector: 'app-section-3',
  templateUrl: './section3.component.html',
  styleUrls: ['./section3.component.scss'],
})
export class Section3Component implements OnInit {
  @ViewChild('content') content!: ElementRef;
  @ViewChild('headline') headline!: ElementRef;
  @ViewChild('L1') L1!: ElementRef;
  @ViewChild('L2') L2!: ElementRef;
  @ViewChild('L3') L3!: ElementRef;
  @ViewChild('L4') L4!: ElementRef;

  constructor() {}

  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger);
  }

  ngAfterViewInit() {
    this.scrollAnimation();
  }

  scrollAnimation() {
    let content = this.content.nativeElement;
    let headline = this.headline.nativeElement;
    let L1 = this.L1.nativeElement;
    let L2 = this.L2.nativeElement;
    let L3 = this.L3.nativeElement;
    let L4 = this.L4.nativeElement;

    let mountainTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: content,
        scrub: true,
        start: `30% center`,
        end: 'center center',
      },
    });
    mountainTimeline
      .fromTo(
        L1,
        {
          bottom: '-50%',
        },
        {
          bottom: '0',
        },
      )
      .fromTo(
        L2,
        {
          bottom: '-30%',
        },
        {
          bottom: '0%',
        },
      )
      .fromTo(
        L3,
        {
          bottom: '-10%',
        },
        {
          bottom: '0%',
        },
      )
      .fromTo(
        headline,
        {
          top: '100%',
          scale: 0,
        },
        {
          top: '20%',
          scale: 1,
        },
      )
      .fromTo(
        L4,
        {
          bottom: '-50%',
        },
        {
          bottom: '0%',
        }
      );
  }
}
