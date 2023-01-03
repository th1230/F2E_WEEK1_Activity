import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-section-6',
  templateUrl: './section6.component.html',
  styleUrls: ['./section6.component.scss']
})
export class Section6Component implements OnInit {
  @ViewChild("text") text!:ElementRef;
  @ViewChild("contain") contain!:ElementRef;

  constructor() { }

  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger);
  }

  ngAfterViewInit(){
    let text = this.text.nativeElement;
    let contain = this.contain.nativeElement;

    gsap.from(text,{
      perspective:"500px",
      transformStyle:"preserve-3d",
      rotateX:"90deg",
      scale:0.5,
      duration:0.5,
      scrollTrigger:{
        trigger:contain
      }
    })
  }

}
