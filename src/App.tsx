import { useEffect } from "react";
import { sp } from "./setupPnP";

export default function App() {
    // Define the function outside useEffect
    const fetchUserEmail = async () => {
        try {
            // Use the login name from the SharePoint context
            console.log({ sp });
            const user = await sp?.web?.currentUser();
            console.log({ user });
        } catch (error) {
            console.error("Error fetching user email: ", error);
        }
    };

    useEffect(() => {
        fetchUserEmail();
    });

    return (
        <div>
            <h1>Current User Email</h1>
        </div>
    );
}
