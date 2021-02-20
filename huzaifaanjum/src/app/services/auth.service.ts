import { Injectable } from '@angular/core';
import { Observable, of, merge } from 'rxjs';
import { User } from '../Models/user.model';
import { AngularFireAuth } from '@angular/fire/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument
} from '@angular/fire/firestore';
import { switchMap } from 'rxjs/operators';
import { FirebaseApp } from '@angular/fire';
// Firebase App (the core Firebase SDK) is always required and must be listed first
import { auth } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<User>;

  constructor(
    private afa: AngularFireAuth,
    private afs: AngularFirestore
  ) {
    this.user$ = this.afa.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }

  async googleSignin() {
    // Using a popup.
    const provider = new auth.GoogleAuthProvider();
    auth().signInWithPopup(provider).then((res) => this.updateUserData(res.user));
  }

  async signout() {
    await this.afa.signOut();
  }

  updateUserData(user): any {

    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);
    const data = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL
    };
    return userRef.set(data, { merge: true });
  }
}
