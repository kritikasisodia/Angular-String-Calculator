import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { StringCalcService } from './string-calc.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Calculator';
  inputNumbers: string = '';
  sum:number=0;
  errorMessage:string='';
  constructor(private stringCalculator: StringCalcService){}
  calculateSum(){
    this.errorMessage='';
    try{
      this.sum=this.stringCalculator.add(this.inputNumbers);
    }catch(error){
      this.errorMessage="Wrong";
    }
  }
}
