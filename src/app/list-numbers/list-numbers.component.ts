import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component, OnInit} from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { RouterModule } from '@angular/router';
import { NumberService } from '../number.service';
import { MaxMod } from '../MaxMod';


@Component({
  selector: 'app-list-numbers',
  standalone: true,
  imports: [CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    RouterModule,
    FormsModule
  ],
  templateUrl: './list-numbers.component.html',
  styleUrl: './list-numbers.component.css'
})
export class ListNumbersComponent implements OnInit {

  listNumbers: MaxMod[]= [];


  constructor(private service: NumberService){}

  ngOnInit(): void {
    this.service.list().subscribe((listNumbers) => {
      this.listNumbers = listNumbers;
    });
  }



}
