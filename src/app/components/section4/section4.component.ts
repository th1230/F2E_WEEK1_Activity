import {
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
@Component({
  selector: 'app-section-4',
  templateUrl: './section4.component.html',
  styleUrls: ['./section4.component.scss'],
})
export class Section4Component implements OnInit {
  @ViewChild('ul') ul!: ElementRef;
  @ViewChild('tank') tank!: ElementRef;
  @ViewChildren('week') weeks!: QueryList<ElementRef>;
  @ViewChildren('flag') flags!: QueryList<ElementRef>;
  constructor() {}

  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger);
  }

  ngAfterViewInit() {
    this.horizontalAnimate();
  }

  horizontalAnimate() {
    let ul = this.ul.nativeElement;
    let weeks = this.weeks.map((week) => week.nativeElement);
    let flags = this.flags.map((flag) => flag.nativeElement);
    let oneWeekWidth = weeks[0].offsetWidth;

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ul,
        pin: true,
        start: 'top top',
        scrub: true,
        end: '+=' + oneWeekWidth * 2,
      },
    });
    timeline.to(weeks, {
      ease: 'none',
      xPercent: -100 * (weeks.length - 1),
    });

    flags.forEach((flag: HTMLImageElement,index:number) => {
      gsap.to(flag, {
        scrollTrigger: {
          trigger: flag,
          start: ()=>{
            let flagStart:number|string;
            if(index == 0){
              flagStart = "top"
            }
            else if(index == 1){
              flagStart = oneWeekWidth*0.5
            }
            else{
              flagStart = oneWeekWidth*1.5
            }
            return `+=${flagStart}px center`
          },
          end: ()=>{
            let flagEnd:number|string;
            if(index == 0){
              flagEnd= "bottom"
            }else{
              flagEnd = index * oneWeekWidth / 2
            }
            return `+=${flagEnd}px top`
          },
          scrub: true,
          onUpdate(timeline) {
            let progress = timeline.progress;
            if (progress < 0.1) {
              flag.src = 'assets/img/flag/F1.png';
            } else if (progress >= 0.1 && progress < 0.3) {
              flag.src = 'assets/img/flag/F2.png';
            } else if (progress >= 0.3 && progress < 0.6) {
              flag.src = 'assets/img/flag/F3.png';
            }else{
              flag.src = 'assets/img/flag/F4.png';
            }
          },
        },
      });
    });
  }

}
