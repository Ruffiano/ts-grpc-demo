// package: sites
// file: sites.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as sites_pb from "./sites_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

interface ISitesService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createSite: ISitesService_ICreateSite;
    getSites: ISitesService_IGetSites;
    getSite: ISitesService_IGetSite;
}

interface ISitesService_ICreateSite extends grpc.MethodDefinition<sites_pb.Site, google_protobuf_empty_pb.Empty> {
    path: "/sites.Sites/CreateSite";
    requestStream: true;
    responseStream: false;
    requestSerialize: grpc.serialize<sites_pb.Site>;
    requestDeserialize: grpc.deserialize<sites_pb.Site>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface ISitesService_IGetSites extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, sites_pb.Site> {
    path: "/sites.Sites/GetSites";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<sites_pb.Site>;
    responseDeserialize: grpc.deserialize<sites_pb.Site>;
}
interface ISitesService_IGetSite extends grpc.MethodDefinition<sites_pb.SiteRequest, sites_pb.Site> {
    path: "/sites.Sites/GetSite";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<sites_pb.SiteRequest>;
    requestDeserialize: grpc.deserialize<sites_pb.SiteRequest>;
    responseSerialize: grpc.serialize<sites_pb.Site>;
    responseDeserialize: grpc.deserialize<sites_pb.Site>;
}

export const SitesService: ISitesService;

export interface ISitesServer {
    createSite: grpc.handleClientStreamingCall<sites_pb.Site, google_protobuf_empty_pb.Empty>;
    getSites: grpc.handleServerStreamingCall<google_protobuf_empty_pb.Empty, sites_pb.Site>;
    getSite: grpc.handleUnaryCall<sites_pb.SiteRequest, sites_pb.Site>;
}

export interface ISitesClient {
    createSite(callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<sites_pb.Site>;
    createSite(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<sites_pb.Site>;
    createSite(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<sites_pb.Site>;
    createSite(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<sites_pb.Site>;
    getSites(request: google_protobuf_empty_pb.Empty, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<sites_pb.Site>;
    getSites(request: google_protobuf_empty_pb.Empty, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<sites_pb.Site>;
    getSite(request: sites_pb.SiteRequest, callback: (error: grpc.ServiceError | null, response: sites_pb.Site) => void): grpc.ClientUnaryCall;
    getSite(request: sites_pb.SiteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sites_pb.Site) => void): grpc.ClientUnaryCall;
    getSite(request: sites_pb.SiteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sites_pb.Site) => void): grpc.ClientUnaryCall;
}

export class SitesClient extends grpc.Client implements ISitesClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public createSite(callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<sites_pb.Site>;
    public createSite(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<sites_pb.Site>;
    public createSite(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<sites_pb.Site>;
    public createSite(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<sites_pb.Site>;
    public getSites(request: google_protobuf_empty_pb.Empty, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<sites_pb.Site>;
    public getSites(request: google_protobuf_empty_pb.Empty, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<sites_pb.Site>;
    public getSite(request: sites_pb.SiteRequest, callback: (error: grpc.ServiceError | null, response: sites_pb.Site) => void): grpc.ClientUnaryCall;
    public getSite(request: sites_pb.SiteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sites_pb.Site) => void): grpc.ClientUnaryCall;
    public getSite(request: sites_pb.SiteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sites_pb.Site) => void): grpc.ClientUnaryCall;
}
