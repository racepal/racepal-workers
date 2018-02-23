//import firebaseAdmin from 'firebase-admin'
global.Promise = require('bluebird')

if(process.env.NODE_ENV !== 'production') {
	require('dotenv').load()
}
