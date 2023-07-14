import { Empty } from "google-protobuf/google/protobuf/empty_pb";
import { siteGroupsClient } from "./utils";
import { Site } from "../proto/pb/sites_pb";
import { SiteGroup } from "../proto/pb/sitesgroups_pb";

export default function allSiteGroups() {
  return new Promise<SiteGroup[]>((resolve, reject) => {
    const stream = siteGroupsClient.getSiteGroups(new Empty());
    const siteGroups: SiteGroup[] = [];
    stream.on("data", (siteGroup) => siteGroups.push(siteGroup));
    stream.on("error", reject);
    stream.on("end", () => resolve(siteGroups));
  });
}
