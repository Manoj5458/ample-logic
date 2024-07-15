import { Component, ViewChild } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { ProgressDialogComponent } from '../../components/progress-dialog/progress-dialog.component';
import { NgClass, NgIf } from '@angular/common';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent,
    ProgressDialogComponent,
    FooterComponent,
    NgIf,
    NgClass,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  isCollapsed = false;
  showContent = false;
  @ViewChild(ProgressDialogComponent) childComponent!: ProgressDialogComponent;

  startProgress() {
    this.showContent = true;
    this.childComponent?.progressLoader();
  }
}
