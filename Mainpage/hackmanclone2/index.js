import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

document.addEventListener("DOMContentLoaded", function () {
    // Your web app's Firebase configuration
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
    const auth = getAuth(app);
    const db = getDatabase(app);

    // Submit button
    const submitButton = document.getElementById('submit');
    if (submitButton) {
        submitButton.addEventListener("click", function (event) {
            event.preventDefault();

            // Inputs
            const firstNameInput = document.getElementById('first_name');
            const emailInput = document.getElementById('floatingInput');
            const dobInput = document.getElementById('dob');
            const passwordInput = document.getElementById('floatingPassword');
            const firstName = firstNameInput.value;
            const email = emailInput.value;
            const dob = dobInput.value;
            const password = passwordInput.value;

            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    alert("Account created successfully!");

                    // Save user data to the database
                    set(ref(db, 'Users/' + user.uid), {
                        firstName: firstName,
                        email: email,
                        dob: dob
                    }).then(() => {
                        alert("User data added to database successfully!");
                    }).catch((error) => {
                        alert("Failed to add user data to database.");
                        console.error(error);
                    });
                })
                .catch((error) => {
                    const errorMessage = error.message;
                    alert(errorMessage);
                    console.error(error);
                });
        });
    } else {
        console.error("Submit button not found.");
    }
});
