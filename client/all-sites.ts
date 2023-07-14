import { Empty } from "google-protobuf/google/protobuf/empty_pb";
import { siteClient } from "./utils";
import { Site } from "../proto/pb/sites_pb";

export default function allSites() {
  return new Promise<Site[]>((resolve, reject) => {
    const stream = siteClient.getSites(new Empty());
    const sites: Site[] = [];
    stream.on("data", (site) => sites.push(site));
    stream.on("error", reject);
    stream.on("end", () => resolve(sites));
  });
}
