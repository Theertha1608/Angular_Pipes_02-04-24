import { CommonModule, CurrencyPipe, DecimalPipe, JsonPipe, LowerCasePipe, PercentPipe, SlicePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GenderPipePipe } from './gender-pipe.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JsonPipe, LowerCasePipe,CurrencyPipe, UpperCasePipe, DecimalPipe, PercentPipe, SlicePipe,GenderPipePipe,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Angular_Pipes';

students = [
  { name: 'Karthik', gender: 'male' , percentage :'0.90' },
  { name: 'Maya', gender: 'female', percentage :'0.59'},
  { name: 'Arun', gender: 'male', percentage :'0.45' },
  { name: 'Neha', gender: 'female', percentage :'0.70' },
  { name: 'Aarya', gender: 'female', percentage :'0.70' },
  { name: 'Manu', gender: 'male', percentage :'0.45' },
];
}