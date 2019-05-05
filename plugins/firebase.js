import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = Env.firebase // eslint-disable-line no-undef

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()

export { db }
