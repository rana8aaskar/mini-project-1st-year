import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyAFEFTk3oaq6jIx4HaLtbG5wHHib1TkK8I",
    authDomain: "signup-and-login-bd657.firebaseapp.com",
    databaseURL: "https://signup-and-login-bd657-default-rtdb.firebaseio.com",
    projectId: "signup-and-login-bd657",
    storageBucket: "signup-and-login-bd657.appspot.com",
    messagingSenderId: "157132825370",
    appId: "1:157132825370:web:a6fe93e773bc8f75ba82a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();

document.getElementById('appointmentForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission

    // Get input values
    let Uname = document.getElementById('Uname').value;
    let Umail = document.getElementById('Umail').value;
    let Ucourse = document.getElementById('Ucourse').value;
    let Utype = document.getElementById('Utype').value;
    let message = document.getElementById('message').value;

    // Add data to Firebase
    set(ref(db, 'UserSet/' + Uname), {
        nameofuser: Uname,
        mailofuser: Umail,
        coursename: Ucourse,
        thetype: Utype,
        message: message
    }).then(() => {
        alert("Data added successfully!!");
        // Optionally, clear the form after successful submission
        document.getElementById('appointmentForm').reset();
    }).catch((error) => {
        alert("Unsuccessful");
        console.error(error);
    });
});
