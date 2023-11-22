import { LoggingService } from "./logging-service";
import { Injectable, EventEmitter } from "@angular/core";

/**
 * This class also an example of communication between two services like - logging service
 */
@Injectable()
export class AccountService{
    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];
      
      /**
       * Example of Injection service between the components
       */
      statusUpdate = new EventEmitter<string>();

      constructor(private logService: LoggingService){

      }
      onAccountAdded(name: string, status: string) {
        this.logService.logInfo('Account Added')
        this.accounts.push({name, status});
      }
    
      onStatusChanged(id: number, newStatus: string) {
        this.logService.logInfo('Account Updated for ID '+id)
        this.accounts[id].status = newStatus;
      }
}