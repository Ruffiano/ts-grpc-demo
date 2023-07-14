// package: sitegroups
// file: sitesgroups.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as sitesgroups_pb from "./sitesgroups_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

interface ISiteGroupsService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createSiteGroup: ISiteGroupsService_ICreateSiteGroup;
    getSiteGroups: ISiteGroupsService_IGetSiteGroups;
    getSiteGroup: ISiteGroupsService_IGetSiteGroup;
}

interface ISiteGroupsService_ICreateSiteGroup extends grpc.MethodDefinition<sitesgroups_pb.SiteGroup, google_protobuf_empty_pb.Empty> {
    path: "/sitegroups.SiteGroups/CreateSiteGroup";
    requestStream: true;
    responseStream: false;
    requestSerialize: grpc.serialize<sitesgroups_pb.SiteGroup>;
    requestDeserialize: grpc.deserialize<sitesgroups_pb.SiteGroup>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface ISiteGroupsService_IGetSiteGroups extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, sitesgroups_pb.SiteGroup> {
    path: "/sitegroups.SiteGroups/GetSiteGroups";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<sitesgroups_pb.SiteGroup>;
    responseDeserialize: grpc.deserialize<sitesgroups_pb.SiteGroup>;
}
interface ISiteGroupsService_IGetSiteGroup extends grpc.MethodDefinition<sitesgroups_pb.SiteGroupRequest, sitesgroups_pb.SiteGroup> {
    path: "/sitegroups.SiteGroups/GetSiteGroup";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<sitesgroups_pb.SiteGroupRequest>;
    requestDeserialize: grpc.deserialize<sitesgroups_pb.SiteGroupRequest>;
    responseSerialize: grpc.serialize<sitesgroups_pb.SiteGroup>;
    responseDeserialize: grpc.deserialize<sitesgroups_pb.SiteGroup>;
}

export const SiteGroupsService: ISiteGroupsService;

export interface ISiteGroupsServer {
    createSiteGroup: grpc.handleClientStreamingCall<sitesgroups_pb.SiteGroup, google_protobuf_empty_pb.Empty>;
    getSiteGroups: grpc.handleServerStreamingCall<google_protobuf_empty_pb.Empty, sitesgroups_pb.SiteGroup>;
    getSiteGroup: grpc.handleUnaryCall<sitesgroups_pb.SiteGroupRequest, sitesgroups_pb.SiteGroup>;
}

export interface ISiteGroupsClient {
    createSiteGroup(callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<sitesgroups_pb.SiteGroup>;
    createSiteGroup(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<sitesgroups_pb.SiteGroup>;
    createSiteGroup(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<sitesgroups_pb.SiteGroup>;
    createSiteGroup(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<sitesgroups_pb.SiteGroup>;
    getSiteGroups(request: google_protobuf_empty_pb.Empty, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<sitesgroups_pb.SiteGroup>;
    getSiteGroups(request: google_protobuf_empty_pb.Empty, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<sitesgroups_pb.SiteGroup>;
    getSiteGroup(request: sitesgroups_pb.SiteGroupRequest, callback: (error: grpc.ServiceError | null, response: sitesgroups_pb.SiteGroup) => void): grpc.ClientUnaryCall;
    getSiteGroup(request: sitesgroups_pb.SiteGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sitesgroups_pb.SiteGroup) => void): grpc.ClientUnaryCall;
    getSiteGroup(request: sitesgroups_pb.SiteGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sitesgroups_pb.SiteGroup) => void): grpc.ClientUnaryCall;
}

export class SiteGroupsClient extends grpc.Client implements ISiteGroupsClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public createSiteGroup(callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<sitesgroups_pb.SiteGroup>;
    public createSiteGroup(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<sitesgroups_pb.SiteGroup>;
    public createSiteGroup(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<sitesgroups_pb.SiteGroup>;
    public createSiteGroup(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<sitesgroups_pb.SiteGroup>;
    public getSiteGroups(request: google_protobuf_empty_pb.Empty, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<sitesgroups_pb.SiteGroup>;
    public getSiteGroups(request: google_protobuf_empty_pb.Empty, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<sitesgroups_pb.SiteGroup>;
    public getSiteGroup(request: sitesgroups_pb.SiteGroupRequest, callback: (error: grpc.ServiceError | null, response: sitesgroups_pb.SiteGroup) => void): grpc.ClientUnaryCall;
    public getSiteGroup(request: sitesgroups_pb.SiteGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sitesgroups_pb.SiteGroup) => void): grpc.ClientUnaryCall;
    public getSiteGroup(request: sitesgroups_pb.SiteGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sitesgroups_pb.SiteGroup) => void): grpc.ClientUnaryCall;
}
