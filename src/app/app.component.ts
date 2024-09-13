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
  discover = ['D','i','s','c','o','v','e','r'];
  our = ['o','u','r'];
  cultural = ['c','u','l','t','u','r','a','l'];
  and = ['a','n','d'];
  natural = ['n','a','t','u','r','a','l'];
  riches = ['r','i','c','h','e','s'];
  ngOnInit(): void {
    const lenis = new Lenis();
    lenis.on('scroll', (e: any) => {
    })
    lenis.on('scroll', ScrollTrigger.update)
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })
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
        amount:  1
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
    }, "<1.5")
    .fromTo('.start', {
      scale: -1.5,
    }, {
      scale: 1,
      duration: 1,
      delay: 1,
      ease: 'elastic'
    }, "<1")
    .fromTo('.photograph', {
      clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)',
    }, {
      duration: 1.5,
      stagger: {
        amount:  .5
      },
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
      delay: 1,
      ease: myEase
    }, "<-1")
    .fromTo('.rotate', {
      rotate: 0,
      y: -24,
      opacity: 0
    }, {
      rotate: 360,
      y: '*',
      opacity: 1,
      duration: 2,
      ease: myEase
    }, "<")
    .fromTo('.start, .rotate', {
      rotate: 0,
    }, {
      rotate: 360,
      duration: 2,
      yoyo: true,
      repeat: -1,
      delay: 2,
      ease: myEase
    }, "<")
  }

  moveCursor(e: any) {
    console.log(e.clientX, e.clientY);

    gsap.to(".cursor-contain", {
      x: e.clientX - 10 + 'px',
      y: e.clientY - 960 + 'px',
      delay: .1,
    })
  }

}
