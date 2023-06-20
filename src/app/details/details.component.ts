import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  @Input() allData: any;

  editRow(item: any): void {
    item.isEditing = !item.isEditing;
  }

  deleteRow(item: any): void {
    const index = this.allData.indexOf(item);

    if (index !== -1) {
      this.allData.splice(index, 1);
    }
  }
}
