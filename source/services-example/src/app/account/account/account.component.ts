import { Component, Input } from '@angular/core';
import { AccountService } from 'src/app/account-service';
import { LoggingService } from 'src/app/logging-service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LoggingService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor(private logService: LoggingService,
              private accService: AccountService){

  }

  onSetTo(status: string) {
    this.accService.onStatusChanged(this.id, status);
    this.logService.logStatusChange(status);
    this.accService.statusUpdate.emit(status);
  }
}
