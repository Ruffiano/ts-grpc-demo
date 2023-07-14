// package: sitesections
// file: sitesections.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class AppName extends jspb.Message { 
    getAppnameid(): string;
    setAppnameid(value: string): AppName;

    getName(): string;
    setName(value: string): AppName;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AppName.AsObject;
    static toObject(includeInstance: boolean, msg: AppName): AppName.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AppName, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AppName;
    static deserializeBinaryFromReader(message: AppName, reader: jspb.BinaryReader): AppName;
}

export namespace AppName {
    export type AsObject = {
        appnameid: string,
        name: string,
    }
}

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

export class Channel extends jspb.Message { 
    getChannelid(): string;
    setChannelid(value: string): Channel;

    getName(): string;
    setName(value: string): Channel;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Channel.AsObject;
    static toObject(includeInstance: boolean, msg: Channel): Channel.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Channel, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Channel;
    static deserializeBinaryFromReader(message: Channel, reader: jspb.BinaryReader): Channel;
}

export namespace Channel {
    export type AsObject = {
        channelid: string,
        name: string,
    }
}

export class SiteSection extends jspb.Message { 
    getId(): string;
    setId(value: string): SiteSection;

    getSitesectionname(): string;
    setSitesectionname(value: string): SiteSection;


    hasAppname(): boolean;
    clearAppname(): void;
    getAppname(): AppName | undefined;
    setAppname(value?: AppName): SiteSection;


    hasDevice(): boolean;
    clearDevice(): void;
    getDevice(): DeviceType | undefined;
    setDevice(value?: DeviceType): SiteSection;


    hasChannel(): boolean;
    clearChannel(): void;
    getChannel(): Channel | undefined;
    setChannel(value?: Channel): SiteSection;

    getSitesectionid(): string;
    setSitesectionid(value: string): SiteSection;

    getSiteid(): string;
    setSiteid(value: string): SiteSection;


    hasDatecreated(): boolean;
    clearDatecreated(): void;
    getDatecreated(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setDatecreated(value?: google_protobuf_timestamp_pb.Timestamp): SiteSection;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SiteSection.AsObject;
    static toObject(includeInstance: boolean, msg: SiteSection): SiteSection.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SiteSection, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SiteSection;
    static deserializeBinaryFromReader(message: SiteSection, reader: jspb.BinaryReader): SiteSection;
}

export namespace SiteSection {
    export type AsObject = {
        id: string,
        sitesectionname: string,
        appname?: AppName.AsObject,
        device?: DeviceType.AsObject,
        channel?: Channel.AsObject,
        sitesectionid: string,
        siteid: string,
        datecreated?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class SiteSectionRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): SiteSectionRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SiteSectionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SiteSectionRequest): SiteSectionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SiteSectionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SiteSectionRequest;
    static deserializeBinaryFromReader(message: SiteSectionRequest, reader: jspb.BinaryReader): SiteSectionRequest;
}

export namespace SiteSectionRequest {
    export type AsObject = {
        id: string,
    }
}
