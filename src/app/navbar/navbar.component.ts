import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isSidePopupOpen: boolean = false;
  showProfilePopup: boolean = false;
  @Output() newItemEvent = new EventEmitter();
  @Output() buttonEvent = new EventEmitter();
  @Output() profileEvent = new EventEmitter();

  toggleSidePopup() {
    this.isSidePopupOpen = !this.isSidePopupOpen;
    this.newItemEvent.emit(this.isSidePopupOpen);
  }
  buttonClickEvent(type: any) {
    this.buttonEvent.emit(type);
  }

  openProfilePopup() {
    this.showProfilePopup = !this.showProfilePopup;
    this.profileEvent.emit(this.showProfilePopup);
  }
}
