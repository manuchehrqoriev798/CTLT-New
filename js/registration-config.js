import { getDatabase, ref, child, get } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-database.js";
import { firebaseConfig } from './firebase-config.js';
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const validateRegistrationCode = async (code) => {
    try {
        const dbRef = ref(getDatabase());
        const snapshot = await get(child(dbRef, `validRegistrationCodes/${code}`));
        return snapshot.exists() && snapshot.val() === true;
    } catch (error) {
        console.error("Error validating code:", error);
        return false;
    }
}; 