// src/setupPnP.ts
import { spfi, SPFx } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/site-users/web";

declare global {
    interface Window {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        _spPageContextInfo: any;
    }
}

let sp: ReturnType<typeof spfi>;

export function setupPnP() {
    if (window._spPageContextInfo) {
        sp = spfi().using(SPFx({ pageContext: window._spPageContextInfo }));
        console.log("PnPjs initialized with SharePoint context.");
    } else {
        console.error("SharePoint context is not available.");
    }
}

export { sp };
