import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-section-1',
  templateUrl: './section1.component.html',
  styleUrls: ['./section1.component.scss'],
})
export class Section1Component implements OnInit {
  @ViewChild('section1') section1!: ElementRef;
  isLogin: boolean = true;
  constructor() {}
  ngOnInit(): void {}

  ngAfterViewInit() {
    // this.moveToTop();
  }

  loginMouseOver(val: boolean) {
    this.isLogin = val;
  }

  moveToTop() {
    let _this = this;
    gsap.from(_this.section1.nativeElement, {
      y: 1000,
      duration: 5,
      delay: 3,
    });
  }
}
