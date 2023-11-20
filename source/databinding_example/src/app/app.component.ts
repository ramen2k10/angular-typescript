import { Component, ViewChild } from '@angular/core';
import { ServerTypeComponent } from './server-type/server-type.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{name:'Test', type:'server', content:'Test contents'}, 
                    {name:'Test1',type:'blueprint', content:'Test1 contents'}];
  @ViewChild('serverTypes') serverTypeElements: ServerTypeComponent;

  serverInfoEvent(serverInfo: {serverName: string, content: string}){
    this.serverElements.push({
      type: this.serverTypeElements.serverTypes[0],
      name: serverInfo.serverName,
      content: serverInfo.content
    })
  }

  blueprintServerInfoEvent(serverInfo: {serverName: string, content: string}){
    this.serverElements.push({
      type: this.serverTypeElements.serverTypes[1],
      name: serverInfo.serverName,
      content: serverInfo.content
    })
  }
}
