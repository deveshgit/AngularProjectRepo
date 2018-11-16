import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService]
})
export class AppComponent implements OnInit {
  title = 'angular-hmr';
  itemToSave:string;
  items = [];

  constructor(public appService: AppService) {
    this.itemToSave = "";
  }

  ngOnInit() {
    this.items = this.appService.getItems();
  }

  onSave() {
    this.appService.saveItem(this.itemToSave);
  }
}
