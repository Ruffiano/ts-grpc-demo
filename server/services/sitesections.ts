import grpc, { ServerReadableStream, ServerUnaryCall, ServerWritableStream, ServiceError, sendUnaryData } from "grpc";
import {
    ISiteSectionsServer,
} from "../../proto/pb/sitesections_grpc_pb";
import { Empty } from "google-protobuf/google/protobuf/empty_pb";
import { SiteSection, SiteSectionRequest } from "../../proto/pb/sitesections_pb";
import { fakeDB } from "../fakeDB";

export class SiteSectionsServer implements ISiteSectionsServer {
    createSiteSection(
        call: ServerReadableStream<Empty>,
        callback: sendUnaryData<Empty>
    ) {
        console.log(`createUsers: creating new users from stream.`);

        let siteCount = 0;

        call.on("data", (u) => {
            siteCount++;
            fakeDB.createSiteSection(u);
        });

        call.on("end", () => {
            console.log(`Created ${siteCount} new user(s).`);
            callback(null, new Empty());
        });
    }

    getSiteSection(call: ServerUnaryCall<SiteSectionRequest>, callback: sendUnaryData<SiteSection>) {
        const siteSectionId = call.request.getId();
        const siteSection = fakeDB.getSiteSectionById(siteSectionId);

        if (!siteSection) {
            const error: ServiceError = {
                name: "User Missing",
                message: `User with ID ${siteSectionId} does not exist.`,
            };
            callback(error, null);
            return;
        }

        console.log(`geSite: returning ${siteSection.getSiteid} (id: ${siteSection.getId}).`);
        callback(null, siteSection);
    }

    getSiteSections(call: ServerWritableStream<Empty>) {
        console.log(`getSiteSections: streaming all site sections.`);
        const all = fakeDB.getAllSiteSections();

        console.log(`${all.length} found`);
        for (const sitesection of all) call.write(sitesection);
        call.end();

    }
}