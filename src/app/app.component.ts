import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';
// import CustomEase from 'gsap/CustomEase';

// const myEase = CustomEase.create("abouEase", "1.000, 0.005, 0.000, 0.995");

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    // const lenis = new Lenis();
    // lenis.on('scroll', (e:any) => {
    // })
    // lenis.on('scroll', ScrollTrigger.update)
    // gsap.ticker.add((time) => {
    //   lenis.raf(time * 1000)
    // })
    // gsap.ticker.lagSmoothing(0);
  }
}
