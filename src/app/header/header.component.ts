import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  ngOnInit(): void {

  }
  //userdefined event
  @Output() toggle = new EventEmitter();
  menuIconClicked() {
    this.toggle.emit()//the value to emit and send to parent
  }

}
