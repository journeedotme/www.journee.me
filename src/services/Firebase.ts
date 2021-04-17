import firebase from "firebase/app"
import client from "../../firebase/client"

export class Firebase {
  constructor() {
    if (firebase.apps.length === 0) firebase.initializeApp(client)
  }

  database() {
    return firebase.firestore()
  }

  getInstance() {
    return firebase
  }

  auth() {
    return firebase.auth()
  }

  google() {
    return new firebase.auth.GoogleAuthProvider()
  }

  analytics() {
    return firebase.analytics()
  }
}
