var firebase = require("firebase/app");
require("firebase/auth");
require("firebase/database");
require("firebase/storage");

var config = {
	apiKey: "AIzaSyBPxTET_LZP8eiyxvUqZ7zF9ZdSFYUxaAs",
	authDomain: "metromeduc.firebaseapp.com",
	databaseURL: "https://metromeduc.firebaseio.com",
	storageBucket: "metromeduc.appspot.com",
	// messagingSenderId: "722496589888"
};

firebase.initializeApp(config);
    
// Get a reference to the database service
var database = firebase.database();

// Get a reference to the storage service, which is used to create references in your storage bucket
var storage = firebase.storage();

var articles;
const getArticles = () => {
	database.ref('/AArticles').once('value').then((dataSnapshot) => {
		articles = dataSnapshot.val().reverse();
	});
};

var githubAuthProvider = new firebase.auth.GithubAuthProvider();

const authorizeWithGithub = () => {
	firebase.auth().signInWithRedirect(githubAuthProvider).then(result => {
		// This gives you a GitHub Access Token. You can use it to access the GitHub API.
		var token = result.credential.accessToken;
		// The signed-in user info.
		var user = result.user;
		// ...
	}).catch(error => {
		// Handle Errors here.
		var errorCode = error.code;
		var errorMessage = error.message;
		// The email of the user's account used.
		var email = error.email;
		// The firebase.auth.AuthCredential type that was used.
		var credential = error.credential;
		// ...
		console.error(errorMessage);
	});
};

module.exports = { database, getArticles, storage, authorizeWithGithub };