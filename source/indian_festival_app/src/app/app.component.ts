import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageNavigate: string

  navigateCategory(feature: string){
    console.log('Festival category navigate page event')
    this.pageNavigate = feature;
  }

}
