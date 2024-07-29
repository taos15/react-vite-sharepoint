import { useState, useEffect } from "react";
import { sp } from "./setupPnP";

export default function App() {
    const [userEmail, setUserEmail] = useState<string>("");

    // Define the function outside useEffect
    const fetchUserEmail = async () => {
        try {
            // Use the login name from the SharePoint context

            const user = await sp.web.currentUser();
            console.log({ user });
            setUserEmail(user.Email);
        } catch (error) {
            console.error("Error fetching user email: ", error);
        }
    };

    useEffect(() => {
        fetchUserEmail();
    }, []);

    return (
        <div>
            <h1>Current User Email</h1>
            <p>{userEmail}</p>
        </div>
    );
}
