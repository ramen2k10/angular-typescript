import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-festivals',
  templateUrl: './festivals.component.html',
  styleUrls: ['./festivals.component.css']
})
export class FestivalsComponent {
  @Input() categoryFestivals: string;
  
  }
