import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Item } from '../models/item';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})


export class ItemService {
  itemsCollection : AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;

  constructor(public afs: AngularFirestore) {

    this.itemsCollection = this.afs.collection('items', ref => ref.orderBy('title','asc'));

    //this.items= this.afs.collection('items').valueChanges();
      this.items=this.itemsCollection.snapshotChanges().pipe(map(changes =>{
        return changes.map(a=>{
          const data= a.payload.doc.data() as Item;
          data.id= a.payload.doc.id;
          return data;
        })
      })
    )
  }

   getItems(){
     return this.items;
   }

   addItem(item: Item){
    this.itemsCollection.add(item);
  }

}