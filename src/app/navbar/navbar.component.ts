import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isSidePopupOpen: boolean = false;
  @Output() newItemEvent = new EventEmitter();
  @Output() buttonEvent = new EventEmitter();

  toggleSidePopup() {
    this.isSidePopupOpen = !this.isSidePopupOpen;
    this.newItemEvent.emit(this.isSidePopupOpen);
  }
  // onClickDetails() {
  //   this.showDetails.emit();
  // }
  // onClickCard() {
  //   alert("button clicked");
  //   this.showCard.emit();
  // }
  buttonClickEvent(type: any) {
    this.buttonEvent.emit(type);
  }
}
