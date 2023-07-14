import grpc, { ServerReadableStream, ServerUnaryCall, ServerWritableStream, ServiceError, sendUnaryData } from "grpc";
import {
  ISiteGroupsServer,
} from "../../proto/pb/sitesgroups_grpc_pb";
import { Empty } from "google-protobuf/google/protobuf/empty_pb";
import { SiteGroup, SiteGroupRequest } from "../../proto/pb/sitesgroups_pb";
import { fakeDB } from "../fakeDB";

export class SiteGroupsServer implements ISiteGroupsServer {
  createSiteGroup(
    call: ServerReadableStream<Empty>,
    callback: sendUnaryData<Empty>
  ) {
    console.log(`createGroup: creating new users from stream.`);
  
      let siteGroupCount = 0;
  
      call.on("data", (u) => {
        siteGroupCount++;
        fakeDB.createSiteGroup(u);
      });
  
      call.on("end", () => {
        console.log(`Created ${siteGroupCount} new user(s).`);
        callback(null, new Empty());
      });
  }

  getSiteGroup(call: ServerUnaryCall<SiteGroupRequest>, callback: sendUnaryData<SiteGroup>) {
    const siteGroupId = call.request.getId();
    const siteGroup = fakeDB.getSiteGroupById(siteGroupId);

    if (!siteGroup) {
      const error: ServiceError = {
        name: "User Missing",
        message: `User with ID ${siteGroupId} does not exist.`,
      };
      callback(error, null);
      return;
    }

    console.log(`getSiteGroup: returning ${siteGroup.getSitegroupid()} (id: ${siteGroup.getId()}).`);
    callback(null, siteGroup);
  }

  getSiteGroups(call: ServerWritableStream<Empty>) {
    console.log(`getSiteGroups: streaming all Site Groups.`);
    for (const siteGroup of fakeDB.getAllSiteGroups()) call.write(siteGroup);
    call.end();
  }
}