import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import CustomEase from 'gsap/CustomEase';

const myEase = CustomEase.create("abouEase", "1.000, 0.005, 0.000, 0.995");


// gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  douala = ['D', 'o', 'u', 'a', 'l', 'a'];
  the = ['t','h', 'e'];
  beating = ['b','e','a', 't', 'i', 'n', 'g'];
  heart = ['h', 'e', 'a', 'r', 't'];
  of = ['o', 'f'];
  cameroon = ['C','a','m','e','r','o','o','n'];
  ngOnInit(): void {
    // const lenis = new Lenis();
    // lenis.on('scroll', (e: any) => {
    // })
    // lenis.on('scroll', ScrollTrigger.update)
    // gsap.ticker.add((time) => {
    //   lenis.raf(time * 1000)
    // })
    gsap.ticker.lagSmoothing(0);

    const TL = gsap.timeline({});
    TL
    .fromTo('.chart', {
      y: '40px',
      opacity: 0,
      scaleX: -3
    }, {
      y: '*',
      stagger: {
        amount:  .3
      },
      scaleX: 1,
      opacity: 1,
      duration: 3,
      delay: 1,
      ease: 'elastic'
    })
    .fromTo('.second', {
      width: 0
    }, {
      duration: 2,
      delay: 1,
      width: 'auto',
      ease: myEase
    }, "<1")
    .fromTo('.start', {
      scale: 0,
    }, {
      scale: 1,
      duration: 1,
      delay: 1,
      ease: 'elastic'
    }, "<1")
    .fromTo('.start', {
      rotate: 0,
    }, {
      rotate: 360,
      duration: 2,
      delay: 1,
      ease: myEase
    }, "<")
  }

}
