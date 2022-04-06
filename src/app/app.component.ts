import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Add Employee', url: '/folder/AddEmployee', icon: 'add' },
    { title: 'Delete Employee', url: '/folder/DeleteEmployee', icon: 'trash' },
    { title: 'List Employee', url: '/folder/List', icon: 'archive' }
  ];
  constructor() {}
}
