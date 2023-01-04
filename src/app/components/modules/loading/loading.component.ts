import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent implements OnInit {
  @ViewChild('circle') circle!: ElementRef;
  showLoading: boolean = true;

  constructor() {}

  ngOnInit(): void {
    gsap.registerPlugin(TextPlugin);
  }

  ngAfterViewInit() {
    let circle = this.circle.nativeElement;
    let _this = this;
    let tl = gsap.timeline();

    tl.from(circle, {
      width:0,
      height:0,
      duration:0.8,
      borderRadius:"50%",
      onStart: () => {
        _this.resetScrollBar()
      },
    }).to(circle,{
      delay:3,
      duration:0.8,
      width:0,
      height:0,
      borderRadius:"50%",
      onComplete(){
        _this.showLoading = false;
      }
    })
  }

  resetScrollBar() {
    window.scrollTo(0, 0);
  }

}
