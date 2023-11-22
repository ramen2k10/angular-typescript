import { Component } from '@angular/core';
import { AccountService } from 'src/app/account-service';
import { LoggingService } from 'src/app/logging-service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService]
})
export class NewAccountComponent {

  constructor(private logService: LoggingService,
              private accService: AccountService){
      this.accService.statusUpdate.subscribe(
        (status: String )=> alert('new status '+status)
      );
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accService.onAccountAdded(accountName, accountStatus);
    this.logService.logStatusChange(accountStatus);

    // Example of logging service
    //const loggingService = new LoggingService();
    //loggingService.logStatusChange(accountStatus);
    
    //console.log('A server status changed, new status: ' + accountStatus);
  }
}
