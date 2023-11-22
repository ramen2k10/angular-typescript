import { Component, OnInit } from '@angular/core';
import { AccountService } from './account-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  /**
   * As per the Hirerchical onjection the heighest priority is app-module compare to component
   */
  //providers: [AccountService],
})
export class AppComponent implements OnInit{
  accounts: { name: string; status: string; }[] = [];
  constructor(private accService: AccountService){

  }

  ngOnInit(): void {
      this.accounts = this.accService.accounts 
  }
}
