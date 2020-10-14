// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
  
    apiKey: "AIzaSyA0zIiLBXHcUVbbQD5ZYUYd-p1R-kDOhM0",
    authDomain: "registration-form-638f1.firebaseapp.com",
    databaseURL: "https://registration-form-638f1.firebaseio.com",
    projectId: "registration-form-638f1",
    storageBucket: "registration-form-638f1.appspot.com",
    messagingSenderId: "249811829978",
    appId: "1:249811829978:web:d7342b0a70860d832c11e3",
    measurementId: "G-FWWKCFTQVG"


};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('/public/messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var password = getInputVal('password');
  

  // Save message
  saveMessage(name, password);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, password){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    password:password,
    
  });
}