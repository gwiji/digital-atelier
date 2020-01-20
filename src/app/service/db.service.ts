import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor(public firestore: AngularFirestore) { }

  sendMessage(data: any){
    return this.firestore.collection('contacts')
    .doc(this.firestore.createId())
    .set(data,{merge: true});
}

saveRequest(data: any){
  return this.firestore.collection('demo')
    .doc(this.firestore.createId())
    .set(data,{merge: true});
}

newsletter(data: any){
  return this.firestore.collection('newsletter')
    .doc(this.firestore.createId())
    .set(data,{merge: true});
}
}
