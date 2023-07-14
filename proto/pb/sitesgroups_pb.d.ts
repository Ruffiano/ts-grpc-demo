// package: sitegroups
// file: sitesgroups.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class SiteGroup extends jspb.Message { 
    getId(): string;
    setId(value: string): SiteGroup;

    getSitegroupname(): string;
    setSitegroupname(value: string): SiteGroup;

    getSitegroupid(): string;
    setSitegroupid(value: string): SiteGroup;

    getParentsitegroupid(): string;
    setParentsitegroupid(value: string): SiteGroup;


    hasDatecreated(): boolean;
    clearDatecreated(): void;
    getDatecreated(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setDatecreated(value?: google_protobuf_timestamp_pb.Timestamp): SiteGroup;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SiteGroup.AsObject;
    static toObject(includeInstance: boolean, msg: SiteGroup): SiteGroup.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SiteGroup, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SiteGroup;
    static deserializeBinaryFromReader(message: SiteGroup, reader: jspb.BinaryReader): SiteGroup;
}

export namespace SiteGroup {
    export type AsObject = {
        id: string,
        sitegroupname: string,
        sitegroupid: string,
        parentsitegroupid: string,
        datecreated?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class SiteGroupRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): SiteGroupRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SiteGroupRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SiteGroupRequest): SiteGroupRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SiteGroupRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SiteGroupRequest;
    static deserializeBinaryFromReader(message: SiteGroupRequest, reader: jspb.BinaryReader): SiteGroupRequest;
}

export namespace SiteGroupRequest {
    export type AsObject = {
        id: string,
    }
}
