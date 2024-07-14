import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dropdowns',
  standalone: true,
  imports: [],
  templateUrl: './dropdowns.component.html',
  styleUrl: './dropdowns.component.scss'
})
export class DropdownsComponent {
    @Input() icon?: string;
    @Input() name?: string;
    constructor() { }

}
