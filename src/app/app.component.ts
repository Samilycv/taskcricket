import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'taskcricket';
  sidebar:boolean=true;
  sideBarOpen(){
    this.sidebar=!this.sidebar
  }
}
