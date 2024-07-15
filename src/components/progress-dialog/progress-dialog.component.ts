import { animate, style, transition, trigger } from '@angular/animations';
import { NgClass, NgIf, NgStyle } from '@angular/common';
import { Component, ElementRef, EventEmitter, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-progress-dialog',
  standalone: true,
  imports: [NgStyle, NgIf, NgClass],
  templateUrl: './progress-dialog.component.html',
  styleUrl: './progress-dialog.component.scss',
  animations: [
    trigger('flyInOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-100%)' }),
        animate(
          '300ms ease-in',
          style({ opacity: 1, transform: 'translateX(0)' })
        ),
      ]),
      transition(':leave', [
        animate(
          '300ms ease-out',
          style({ opacity: 0, transform: 'translateX(100%)' })
        ),
      ]),
    ]),
  ],
})
export class ProgressDialogComponent {
  count: number = 0;
  private accordionElement: HTMLElement | null = null;
  private currentInterval: any;
  private interval: any;

  showFooterDialog: boolean = false;
  toogleIcon: boolean = true;
  @Output() isCompleted: EventEmitter<boolean> = new EventEmitter();

  constructor(private elRef: ElementRef, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.accordionElement =
      this.elRef.nativeElement.querySelector('.accordion');

    if (this.accordionElement) {
      this.accordionElement.addEventListener(
        'click',
        this.toggleAccordion.bind(this)
      );
    }
  }

  ngOnDestroy(): void {
    if (this.interval) {
      clearInterval(this.interval);
    }

    if (this.accordionElement) {
      this.accordionElement.removeEventListener(
        'click',
        this.toggleAccordion.bind(this)
      );
    }
  }

  toggleAccordion() {
    const panel = this.accordionElement?.nextElementSibling as HTMLElement;
    if (panel.style.display === 'block' || panel.style.display === '') {
      panel.style.display = 'none';
    } else {
      panel.style.display = 'block';
    }
    this.toogleIcon = !this.toogleIcon;
  }

  progressLoader = () => {
    this.count = 0;
    try {
      this.showFooterDialog = true;
      this.currentInterval = setInterval(() => {
        if (this.count < 100) {
          this.count += 10;
          if (this.count === 100) {
            this.showFooterDialog = false;
            this.isCompleted.emit(false);
            clearInterval(this.currentInterval);
            this.toastr.success('Migration applied successfully', 'Success', {
              progressBar: true,
              progressAnimation: 'decreasing',
              timeOut: 5000,
              closeButton: true,
              positionClass: 'toast-bottom-right',
            });
          }
        }
      }, 1000);
    } catch (error) {
      clearInterval(this.interval);
    }
  };
}
