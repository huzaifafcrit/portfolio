import { Injectable } from '@angular/core';
import { UserComments } from '../Models/userComments.model';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class FirebaseDataService {

  userComment: AngularFireList<UserComments>;

  constructor(private databaseService: AngularFireDatabase) { }

  getComments(): any {
    this.userComment = this.databaseService.list('UserComments');
    return this.userComment.snapshotChanges();
  }

  insertUserComment(userCommentValue: UserComments): void {
    this.userComment = this.databaseService.list('UserComments');
    this.userComment.push(userCommentValue);
  }
}
