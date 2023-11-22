export class LoggingService{

    logStatusChange(status: string){
        console.log('A server status changed, new status is : ' + status);
    }

    logInfo(status: string){
        console.log('Info: '+status);
    }
}