import { spfi, SPFx } from "@pnp/sp";
import { LogLevel, PnPLogging } from "@pnp/logging";
import "@pnp/sp/batching";
import "@pnp/sp/presets/all";

declare global {
    interface Window {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        _spPageContextInfo: any;
    }
}

let sp: ReturnType<typeof spfi> | null = null;

export function setupPnP() {
    if (window._spPageContextInfo) {
        console.log(window._spPageContextInfo);
        sp = spfi().using(SPFx(window._spPageContextInfo)).using(PnPLogging(LogLevel.Warning));
        console.log("PnPjs initialized with SharePoint context.");
    } else {
        console.error("SharePoint context is not available.");
    }
}

export { sp };
