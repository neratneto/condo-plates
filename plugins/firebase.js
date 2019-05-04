import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'XXX',
  authDomain: 'XXX',
  databaseURL: 'XXX',
  projectId: 'XXX',
  storageBucket: 'XXX',
  messagingSenderId: 'XXX',
  appId: 'XXX'
}

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()

export { db }
