import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { DropdownsComponent } from "../dropdowns/dropdowns.component";
import { dropDownItems } from '../../models/dropdownItems';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgFor, DropdownsComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})

export class NavbarComponent {
    iconList: dropDownItems[] = [
      {
          icon: 'account-check',
          name: 'Organization Structure',
      },
      {
        icon:'tools',
        name:'Configurations',
      },
      {
        icon:'file-multiple-outline',
        name:'Reports',
      },
      {
        icon: 'cogs',
        name:'ETL'
      }
  ];
}
