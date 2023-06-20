import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  public isSidePopupOpen= true;
  public showProfilePopup=true;
  yourName: string = "Aliva";
  formData: any = {};
  public listData: any = [];
  nameError: string = '';
  public activepage: string = 'detail';
  maleProfileImage: string = "assets/images/man.PNG";
  femaleProfileImage: string = "assets/images/women.PNG"
  constructor(private router: Router) { }


  getEventData(event: any) {
    this.isSidePopupOpen = event;
  }
  submitForm() {
    if (this.validateForm()) {
      if(this.formData.gender === 'male') {
        this.formData['profileimg'] = this.maleProfileImage;
      } else {
        this.formData['profileimg'] = this.femaleProfileImage;
      }
      this.listData.push(this.formData);
      this.resetForm();
    }
  }
  validateForm(): boolean {
    if (!this.formData.name || !this.formData.empid || !this.formData.contact || !this.formData.joiningyear || !this.formData.gender || !this.formData.state) {
      this.nameError = 'All fields are required'
      return false;
    }
    return true;
  }
  resetForm() {
    this.formData = {};
    this.nameError = '';
  }
  activeType(event: string) {
    this.activepage = event;
  }
  closeForm()
  {
    this.isSidePopupOpen=false;
  }
  profilegetData(event:any){
    this.showProfilePopup = event;
  }
  logout(){
    this.router.navigate(['/login']);
  }
}
