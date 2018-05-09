import { Component } from '@angular/core';
// import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
//with this above statemenet i got error 
//[ts] Module '"c:/Users/lerisa-pc/firebaseWebApp/firebaseapplication/node_modules/angularfire2/database/index"' has no exported member 'FirebaseListObservable'.
//so i used the below 
import { AngularFireDatabase } from "angularfire2/database"; 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AngularFireDatabase]
})
export class AppComponent {
  title = 'app'; 
  
  description = 'Angular4-Firebase Demo';
 
  // itemValue = '';
  // items: FirebaseListObservable<any[]>;
  
  // constructor(db: AngularFireDatabase) {
  //   this.items = db.list('/items');
  // }
 
  // onSubmit() {
  //   this.items.push({content: this.itemValue});
  //   this.itemValue = '';
  // }
}
