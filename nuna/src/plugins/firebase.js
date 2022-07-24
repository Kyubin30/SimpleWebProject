import Vue from 'vue'
import firebase from 'firebase/compat/app'

import 'firebase/auth'
import 'firebase/database'
import firebaseConfig from '../../firebaseConfig'

firebase.initializeApp(firebaseConfig)

Vue.prototype.$firebase = firebase