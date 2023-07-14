import grpc, { ServerReadableStream, ServerUnaryCall, ServerWritableStream, ServiceError, sendUnaryData } from "grpc";
import {
  ISitesServer,
  ISitesService,
  SitesService,
} from "../../proto/pb/sites_grpc_pb";
import { Empty } from "google-protobuf/google/protobuf/empty_pb";
import { Site, SiteRequest } from "../../proto/pb/sites_pb";
import { fakeDB } from "../fakeDB";

export class SitesServer implements ISitesServer {
  createSite(
    call: ServerReadableStream<Empty>,
    callback: sendUnaryData<Empty>
  ) {
    console.log(`createUsers: creating new users from stream.`);
  
      let siteCount = 0;
  
      call.on("data", (u) => {
        siteCount++;
        fakeDB.createSite(u);
      });
  
      call.on("end", () => {
        console.log(`Created ${siteCount} new user(s).`);
        callback(null, new Empty());
      });
  }

  getSite(call: ServerUnaryCall<SiteRequest>, callback: sendUnaryData<Site>) {
    const siteId = call.request.getId();
    const site = fakeDB.getSiteById(siteId);

    if (!site) {
      const error: ServiceError = {
        name: "User Missing",
        message: `User with ID ${siteId} does not exist.`,
      };
      callback(error, null);
      return;
    }

    console.log(`geSite: returning ${site.getSiteid()} (id: ${site.getId()}).`);
    callback(null, site);
  }

  getSites(call: ServerWritableStream<Empty>) {
    console.log(`getSites: streaming all sites.`);
    for (const site of fakeDB.getAllSites()) call.write(site);
    call.end();
  }
}