import { Injectable } from '@angular/core';
import PouchDB from 'pouchdb';
PouchDB.plugin(require('pouchdb'));

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  data: any;
  _DB: any;
  remote: any;

  constructor() {
    this.initDB();
  }

  initDB() {
    this._DB = new PouchDB('employee');
    this.remote = 'http://nrodrigues:Nicodu64100_@localhost:5984/employee';

    let options = {
      live: true,
      retry: true,
      continuous: true,
      auto_completion: true
    };

    this._DB.sync(this.remote, options);
  }

  saveActivity(data) {
    data.activityDateTime = new Date();
    this._DB.put(data).then(
      (resp) => {
        console.log(resp);
        return resp;
      })
      .catch( (e) => {
        console.log(e);
        return e;
      });
  }

  addEmployee(firstname: string, lastname: string) {
    let timeStamp   = new Date().toISOString();
  
    let employee   = {
      _id           : timeStamp,
      firstname : firstname,
      lastname : lastname,
    };

    return new Promise(resolve =>
    {
        this._DB.put(employee).catch((err) =>
        {
            
        });

        resolve(true);

    });
  }

  

  create(employee) {  
    return this._DB.post(employee);
  } 

}
