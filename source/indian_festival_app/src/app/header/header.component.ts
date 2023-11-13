import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  @Output() category = new EventEmitter<string>();
  ngOnInit(): void {
      
  }

  selectFestivalOption(festivalCategory: string){
    console.log('Festival category on select event')
    this.category.emit(festivalCategory);
  }
}
