// package: sites
// file: sites.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class DeviceType extends jspb.Message { 
    getDeviceid(): string;
    setDeviceid(value: string): DeviceType;

    getDevicename(): string;
    setDevicename(value: string): DeviceType;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeviceType.AsObject;
    static toObject(includeInstance: boolean, msg: DeviceType): DeviceType.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeviceType, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeviceType;
    static deserializeBinaryFromReader(message: DeviceType, reader: jspb.BinaryReader): DeviceType;
}

export namespace DeviceType {
    export type AsObject = {
        deviceid: string,
        devicename: string,
    }
}

export class Site extends jspb.Message { 
    getId(): string;
    setId(value: string): Site;

    getSitename(): string;
    setSitename(value: string): Site;


    hasDevice(): boolean;
    clearDevice(): void;
    getDevice(): DeviceType | undefined;
    setDevice(value?: DeviceType): Site;

    getSiteid(): string;
    setSiteid(value: string): Site;


    hasDatecreated(): boolean;
    clearDatecreated(): void;
    getDatecreated(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setDatecreated(value?: google_protobuf_timestamp_pb.Timestamp): Site;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Site.AsObject;
    static toObject(includeInstance: boolean, msg: Site): Site.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Site, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Site;
    static deserializeBinaryFromReader(message: Site, reader: jspb.BinaryReader): Site;
}

export namespace Site {
    export type AsObject = {
        id: string,
        sitename: string,
        device?: DeviceType.AsObject,
        siteid: string,
        datecreated?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class SiteRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): SiteRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SiteRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SiteRequest): SiteRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SiteRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SiteRequest;
    static deserializeBinaryFromReader(message: SiteRequest, reader: jspb.BinaryReader): SiteRequest;
}

export namespace SiteRequest {
    export type AsObject = {
        id: string,
    }
}
