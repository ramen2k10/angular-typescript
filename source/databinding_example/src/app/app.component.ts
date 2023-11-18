import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{name:'Test', type:'server', content:'Test contents'}, 
                    {name:'Test1',type:'blueprint', content:'Test1 contents'}];

  serverInfoEvent(serverInfo: {serverName: string, content: string}){
    this.serverElements.push({
      type: 'server',
      name: serverInfo.serverName,
      content: serverInfo.content
    })
  }

  blueprintServerInfoEvent(serverInfo: {serverName: string, content: string}){
    this.serverElements.push({
      type: 'blueprint',
      name: serverInfo.serverName,
      content: serverInfo.content
    })
  }
}
