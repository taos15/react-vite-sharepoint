import { useEffect } from "react";
import { sp } from "./setupPnP";

export default function App() {
    // Define the function outside useEffect
    const fetchUserEmail = async () => {
        try {
            // Use the login name from the SharePoint context
            console.log({ sp });
            const webData = await sp?.web();
            console.log("Next is the web data");
            console.log(webData);
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
