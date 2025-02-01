import { getDatabase, ref, get } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-database.js";

export const checkUserStatus = async (uid) => {
    const db = getDatabase();
    try {
        const userRef = ref(db, `UsersAuthList/${uid}`);
        const snapshot = await get(userRef);
        
        if (!snapshot.exists()) {
            return { isValid: false, message: "User not found" };
        }

        const userData = snapshot.val();
        
        if (!userData.emailVerified) {
            return { isValid: false, message: "Please verify your email before logging in" };
        }
        
        if (!userData.adminApproved) {
            return { isValid: false, message: "Your account is pending admin approval" };
        }

        return { isValid: true, userData };
    } catch (error) {
        console.error("Error checking user status:", error);
        return { isValid: false, message: "An error occurred while checking user status" };
    }
}; 