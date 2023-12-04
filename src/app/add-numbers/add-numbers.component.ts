import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { NumberService } from '../number.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validator, Validators } from '@angular/forms';
import { MaxMod } from '../MaxMod';

@Component({
  selector: 'app-add-numbers',
  standalone: true,
  imports: [CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './add-numbers.component.html',
  styleUrl: './add-numbers.component.css'
})

export class AddNumbersComponent implements OnInit {

  numberForm!: FormGroup;

  number: MaxMod= {
    x: '',
    y: '',
    n: ''
  }

  constructor(
    private service: NumberService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.numberForm = new FormGroup({
      x: new FormControl('', [Validators.required, Validators.min(1)]),
      y: new FormControl('', [Validators.required, Validators.min(1)]),
      n: new FormControl('', [Validators.required, Validators.min(1)])
    });
  }

  get numberX(){
    return this.numberForm.get('x')!;
  }

  get numberY(){
    return this.numberForm.get('y')!;
  }

  get numberN(){
    return this.numberForm.get('n')!;
  }

  addNumber(){
    this.service.add(this.number).subscribe(() => {
      this.router.navigate(['/list-number'])
    })
  }

  cancel(){
    this.router.navigate(['/list-number']);
  }

  submit(){
    if(this.numberForm.invalid){
      return;
    }
    console.log('Submit');
  }

}
