import { Component, OnInit } from '@angular/core';

//import {FirebaseListObservable} from "angularfire2/database";
 
import {CustomerService} from '../customer.service';
import {Customer} from '../customer';


@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})

export class CustomersListComponent implements OnInit {

  
  customers: any;
  //customers: FirebaseListObservable<Customer[]>;
  
  constructor(private customerService: CustomerService) {}
 
  ngOnInit() {
  //   this.customers = this.customerService.getCustomersList();
  this.getCustomersList();
  }
  
  
  getCustomersList() {
    // Use snapshotChanges().map() to store the key
    this.customerService.getCustomersList().snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    }).subscribe(customers => {
      this.customers = customers;
    });
  }
 
  deleteCustomers() {
    this.customerService.deleteAll();
  }
 

 

}
