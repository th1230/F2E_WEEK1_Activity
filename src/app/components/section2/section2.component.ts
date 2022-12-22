import { transition } from '@angular/animations';
import { NONE_TYPE } from '@angular/compiler';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import CustomEase from 'gsap/CustomEase';

@Component({
  selector: 'app-section-2',
  templateUrl: './section2.component.html',
  styleUrls: ['./section2.component.scss'],
})
export class Section2Component implements OnInit {
  @ViewChild('landingArea1') landingArea1!: ElementRef;
  @ViewChild('landingArea1_web') landingArea1_web!: ElementRef;
  @ViewChild('landingArea1_dialog') landingArea1_dialog!: ElementRef;

  @ViewChild('landingArea2') landingArea2!: ElementRef;
  @ViewChild('landingArea2_solder') landingArea2_solder!: ElementRef;
  @ViewChild('landingArea2_dialog') landingArea2_dialog!: ElementRef;

  @ViewChild('landingArea3') landingArea3!: ElementRef;
  @ViewChild('landingArea3_tree') landingArea3_tree!: ElementRef;
  @ViewChild('landingArea3_tree_solder') landingArea3_tree_solder!: ElementRef;

  constructor() {}

  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(CustomEase);
  }

  ngAfterViewInit() {
    this.scrollAnimation();
  }

  scrollAnimation() {
    let landingArea1 = this.landingArea1.nativeElement;
    let landingArea1_web = this.landingArea1_web.nativeElement;
    let landingArea1_dialog = this.landingArea1_dialog.nativeElement;
    let landingArea2 = this.landingArea2.nativeElement;
    let landingArea2_solder = this.landingArea2_solder.nativeElement;
    let landingArea2_dialog = this.landingArea2_dialog.nativeElement;
    let landingArea3 = this.landingArea3.nativeElement;
    let landingArea3_tree = this.landingArea3_tree.nativeElement;
    let landingArea3_tree_solder = this.landingArea3_tree_solder.nativeElement;

    // LandingArea 1 Tween Animate
    let landingArea1_Animate = gsap.fromTo(
      landingArea1,
      {
        y: -150,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: 'back.inOut(1.7)',
      }
    );
    let landingArea1_web_Animate = this.scaleAnimate(
      landingArea1_web,
      'power4.inOut'
    );
    let landingArea1_dialog_Animate = this.scaleAnimate(
      landingArea1_dialog,
      'power2.inOut'
    );

    // LandingArea 2 Tween Animate
    let landingArea2Animate = gsap.fromTo(
      landingArea2,
      {
        x: 150,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.5,
        ease: 'back.inOut(2)',
      }
    );

    let solderTimeline = gsap.timeline();
    let landingArea2_solder_Animate = solderTimeline
      .fromTo(
        landingArea2_solder,
        { x: '70%', y: '100%' },
        { x: 0, y: 0, duration: 1 }
      )
    

    let landingArea2_dialog_Animate = this.scaleAnimate(
      landingArea2_dialog,
      'power3.inOut'
    );

    // LandingArea 3 Tween Animate
    let landingArea3Animate = gsap.fromTo(
      landingArea3,
      {
        x: -150,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.5,
        ease: 'back.inOut(2)',
      }
    );

    let treeTimeline = gsap.timeline();
    let landingArea3_tree_Animate = treeTimeline.fromTo(
      landingArea3_tree,
      { x: '50%', y: '100%', scale: 0.5 },
      { x: 0, y: 0, scale: 1, duration: 1 }
    );

    let solderEase = CustomEase.create(
      'custom',
      'M0,0 C0.003,0.421 0.031,0.62 0.121,0.62 0.212,0.62 0.252,0.647 0.252,0.202 0.255,0.623 0.326,0.756 0.4,0.756 0.412,0.756 0.552,0.819 0.552,0.374 0.555,0.795 0.622,0.864 0.656,0.864 0.686,0.864 0.8,0.945 0.8,0.5 0.803,0.921 0.909,1 1,1 '
    );
    let landingArea3_tree_solder_Animate = gsap.fromTo(
      landingArea3_tree_solder,
      { 
        x:"-100%",

      },
      {x:0, duration: 2, ease: "steps(5)"}
    );

    // ScrollTrigger default setting
    ScrollTrigger.defaults({
      start: 'top 40%',
      end: 'top 40%',
      toggleActions: 'restart none none reverse',
    });

    // landingArea 1 ScrollTrigger
    ScrollTrigger.create({
      trigger: landingArea1,
      animation: landingArea1_Animate,
    });

    ScrollTrigger.create({
      trigger: landingArea1,
      animation: landingArea1_web_Animate,
    });

    ScrollTrigger.create({
      trigger: landingArea1,
      animation: landingArea1_dialog_Animate,
    });

    // landingArea 2 ScrollTrigger
    ScrollTrigger.create({
      trigger: landingArea2,
      animation: landingArea2Animate,
    });
    let timer:number | NodeJS.Timer;
    ScrollTrigger.create({
      trigger: landingArea2,
      animation: landingArea2_solder_Animate,
      onEnter(){
        timer=setInterval(()=>{
          let bool = landingArea2_solder.classList.contains("bg-left")
          if(bool){
            landingArea2_solder.classList.remove("bg-left");
            landingArea2_solder.classList.add("bg-right");
          }else{
            landingArea2_solder.classList.remove("bg-right");
            landingArea2_solder.classList.add("bg-left");
          }
        },300)
      },
      onEnterBack(){
        clearInterval(timer)
      }
    });

    ScrollTrigger.create({
      trigger: landingArea2,
      animation: landingArea2_dialog_Animate,
    });

    // landingArea 3 ScrollTrigger
    ScrollTrigger.create({
      trigger: landingArea3,
      animation: landingArea3Animate,
    });

    ScrollTrigger.create({
      trigger: landingArea3,
      animation: landingArea3_tree_Animate,
    });

    ScrollTrigger.create({
      trigger: landingArea3,
      animation: landingArea3_tree_solder_Animate,
    });
  }

  scaleAnimate(el: HTMLElement, ease: string) {
    return gsap.fromTo(
      el,
      {
        scale: 0,
      },
      {
        scale: 1,
        duration: 1,
        ease,
      }
    );
  }
}
