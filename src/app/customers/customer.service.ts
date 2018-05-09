

import {Injectable} from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
//import { AngularFireDatabase, FirebaseListObservable,FirebaseObjectObservable } from "angularfire2/database";
//import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';

import { Customer } from './customer';
import { QueryFn } from 'angularfire2/database/interfaces';
@Injectable()
export class CustomerService {


  // private dbPath: string = '/customers';
 
  // customer: FirebaseObjectObservable<Customer> = null;
  // customers: FirebaseListObservable<Customer[]> = null;
 
  // constructor(private db: AngularFireDatabase) {}
 
  // getCustomer(key: string): FirebaseObjectObservable<Customer> {
  //   this.customer = this.db.object(`${this.dbPath}/${key}`);
  //   return this.customer;
  // }
 
  // createCustomer(customer: Customer): void {
  //  // this.customers.push(customer).catch(error => this.handleError(error));
  //  this.customers.push(customer);
  // }
 
  // updateCustomer(key: string, value: any): void {
  //   this.customers.update(key, value).catch(error => this.handleError(error));
  // }
 
  // deleteCustomer(key: string): void {
  //   this.customers.remove(key).catch(error => this.handleError(error));
  // }
 
  // getCustomersList(query = {}): FirebaseListObservable<Customer[]> {
  //   this.customers = this.db.list(this.dbPath, {
  //     query: query
  //   });
  //   return this.customers;
  // }
 
  // deleteAll(): void {
  //   this.customers.remove().catch(error => this.handleError(error));
  // }
 
  // private handleError(error) {
  //   console.log(error);
  // }


  
  private dbPath = '/customers';
 
  customersRef: AngularFireList<Customer> = null;
 
  constructor(private db: AngularFireDatabase) {
    this.customersRef = db.list(this.dbPath);
  }
 
  createCustomer(customer: Customer): void {
    this.customersRef.push(customer);
  }
 
  updateCustomer(key: string, value: any): void {
    this.customersRef.update(key, value).catch(error => this.handleError(error));
  }
 
  deleteCustomer(key: string): void {
    this.customersRef.remove(key).catch(error => this.handleError(error));
  }
 
  getCustomersList(): AngularFireList<Customer> {
    return this.customersRef;
  }
 
  deleteAll(): void {
    this.customersRef.remove().catch(error => this.handleError(error));
  }
 
  private handleError(error) {
    console.log(error);
  }
}
