import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent implements OnInit {
  @ViewChild('loadText') loadText!: ElementRef;
  showLoading: boolean = true;

  constructor() {}

  ngOnInit(): void {
    gsap.registerPlugin(TextPlugin);
  }

  ngAfterViewInit() {
    let _this = this;
    this.resetScrollBar();
    setTimeout(() => {
      this.showLoading = false;
    }, 4000);
    gsap.from(_this.loadText.nativeElement, {
      duration: 2,
      delay: 0.5,
      text: '',
      ease: 'none',
      repeat: -1,
      onStart: () => {
        _this.resetScrollBar()
      },
    });
  }

  resetScrollBar() {
    window.scrollTo(0, 0);
  }
}
