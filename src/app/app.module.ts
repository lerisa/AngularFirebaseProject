import { CustomerDetailsComponent } from './customers/customer-details/customer-details.component';
import { CustomersListComponent } from './customers/customers-list/customers-list.component';
import { CreateCustomerComponent } from './customers/create-customer/create-customer.component';


import { CustomerService } from './customers/customer.service';


import { AppComponent } from './app.component';
import { environment } from '../environments/environment';


import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';



import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    CustomerDetailsComponent,
    CustomersListComponent,
    CreateCustomerComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule, // for database


  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }

