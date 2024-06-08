import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyCXABj4dCBkBn1IZXuiih-Qfb1v1PYpf6o",
    authDomain: "ggyy-c1c6c.firebaseapp.com",
    projectId: "ggyy-c1c6c",
    storageBucket: "ggyy-c1c6c.appspot.com",
    messagingSenderId: "650522888066",
    appId: "1:650522888066:web:76f5a2dcc119f5d6c4719b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();

document.getElementById('orgForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission

    // Get input values
    let org = document.getElementById('orgName').value;
    let address = document.getElementById('address').value;
    let city = document.getElementById('city').value;
    let state = document.getElementById('state').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let website = document.getElementById('website').value;
    let rtoverification = document.getElementById('rtoVerification').value;
    let certificate = document.getElementById('certificate').value;
    let experience = document.getElementById('experience').value;
    let fees = document.getElementById('fees').value;
    let description = document.getElementById('description').value;

    // Add data to Firebase
    set(ref(db, 'Organisation/' + org), {
        Name_of_the_organisation: org,
        Address: address,
        city: city,
        email: email,
        state: state,
        phone: phone,
        website: website,
        rtoverification: rtoverification,
        certificate: certificate,
        experience: experience,
        fees: fees,
        description: description 
    }).then(() => {
        alert("Data added successfully!!");
        // Optionally, clear the form after successful submission
        document.getElementById('orgForm').reset();
    }).catch((error) => {
        alert("Unsuccessful");
        console.error(error);
    });
});
