import { Directive, ElementRef, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appScrollAnimation]',
  standalone: true
})
export class ScrollAnimationDirective implements OnInit, OnDestroy {
  private observer: IntersectionObserver | null = null;
  private currentAnimation: Animation | null = null;

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    const element = this.elementRef.nativeElement;
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.animateIn();
          } else {
            this.animateOut();
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    this.observer.observe(element);
  }

  private animateIn(): void {
    const element = this.elementRef.nativeElement;
    
    if (this.currentAnimation) {
      this.currentAnimation.cancel();
    }
    
    this.currentAnimation = element.animate([
      { opacity: 0, transform: 'translateY(30px)' },
      { opacity: 1, transform: 'translateY(0)' }
    ], {
      duration: 600,
      easing: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
      fill: 'forwards'
    });
  }

  private animateOut(): void {
    const element = this.elementRef.nativeElement;
    
    if (this.currentAnimation) {
      this.currentAnimation.cancel();
    }
    
    this.currentAnimation = element.animate([
      { opacity: 1, transform: 'translateY(0)' },
      { opacity: 0, transform: 'translateY(30px)' }
    ], {
      duration: 400,
      easing: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
      fill: 'forwards'   
    });
  }

  ngOnDestroy(): void {
    if (this.currentAnimation) {
      this.currentAnimation.cancel();
    }
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
