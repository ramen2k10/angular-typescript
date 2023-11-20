import { Component } from '@angular/core';

@Component({
  selector: 'app-server-type',
  templateUrl: './server-type.component.html',
  styleUrls: ['./server-type.component.css']
})
export class ServerTypeComponent {
   serverTypes: string[] = ['server', 'blueprint'];
}
