import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cookpit',
  templateUrl: './cookpit.component.html',
  styleUrls: ['./cookpit.component.css']
})
export class CookpitComponent {
  @Output() newServerInfo = new EventEmitter<{serverName: string, content: string}>();
  @Output() newBlueprintServerInfo = new EventEmitter<{serverName: string, content: string}>();
  newServerName = '';
  newServerContent = '';
  
  onAddServer() {
    this.newServerInfo.emit({serverName: this.newServerName, content: this.newServerContent});
  }

  // Using Local reference template 
  // onAddServer(inputData: HTMLInputElement) {
  //   this.newServerInfo.emit({serverName: inputData.value, content: this.newServerContent});
  // }

  onAddBlueprint() {
    this.newBlueprintServerInfo.emit({serverName: this.newServerName, content: this.newServerContent});
  }
}
