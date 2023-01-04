import {
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

@Component({
  selector: 'app-section-5',
  templateUrl: './section5.component.html',
  styleUrls: ['./section5.component.scss'],
})
export class Section5Component implements OnInit {
  @ViewChild('tank') tank!: ElementRef;
  @ViewChild('bullet') bullet!: ElementRef;
  @ViewChild('ul') ul!: ElementRef;
  @ViewChildren('enemy') enemys!: QueryList<ElementRef>;
  @ViewChildren('explo') explos!: QueryList<ElementRef>;
  title = 'demo';

  ngOnInit() {
    gsap.registerPlugin(ScrollTrigger);
  }

  ngAfterViewInit() {
    this.scrollAnimate();
  }

  scrollAnimate() {
    let _this= this;
    let tank:HTMLDivElement = this.tank.nativeElement;
    let bullet:HTMLDivElement = this.bullet.nativeElement;
    let ul: HTMLUListElement = this.ul.nativeElement;
    let enemys: HTMLDivElement[] = this.enemys.map(
      (enemy) => enemy.nativeElement
    );
    let explos: HTMLDivElement[] = this.explos.map(
      (explo) => explo.nativeElement
    );

    gsap
      .timeline()
      .to(tank, {
        top: '88%',
        scrollTrigger: {
          trigger: ul,
          scrub: true,
          start: 'top top',
          end: '100% top',
          // markers:true
        },
      })

    enemys.forEach((enemy,i)=>{
      gsap.fromTo(
        bullet,
        {
          top: '10%',
          display:"block"
        },
        {
          top: ()=>{
            let tankPosY = _this.getOffset(tank).top
            let enemyPosY = _this.getOffset(enemys[i]).top
            let diff = enemyPosY-tankPosY;
            return diff + "px"
          },
          display: 'none',
          onStart() {
            enemys[i].classList.remove('hidden');
          },
          onComplete() {
            enemys[i].classList.add('hidden');
            explos[i].classList.remove('hidden');
            if(i == 0){
              setTimeout(() => {
                explos[i].classList.add('hidden');
              }, 400);
            }else{
              setTimeout(() => {
                explos[i].classList.add('hidden');
              }, 200);
            }
          },
          scrollTrigger: {
            trigger: ul,
            start: ()=>{
              if(i==0){
                return "10% 30%"
              }else if(i==1){
                return "30% 25%"
              }else{
                return "50% 10%"
              }
            },
            end: ()=>{
              if(i==0){
                return "10% 30%"
              }else if(i==1){
                return "30% 25%"
              }else{
                return "50% 10%"
              }
            },
            once:true,
            // markers: true,
          },
        }
      );
    })
  }

  getOffset(el:HTMLElement){
    const rect = el.getBoundingClientRect();
    return {
      left: rect.left + window.scrollX,
      top: rect.top + window.scrollY
    };
  }
}
