// package: sitesections
// file: sitesections.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as sitesections_pb from "./sitesections_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

interface ISiteSectionsService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createSiteSection: ISiteSectionsService_ICreateSiteSection;
    getSiteSections: ISiteSectionsService_IGetSiteSections;
    getSiteSection: ISiteSectionsService_IGetSiteSection;
}

interface ISiteSectionsService_ICreateSiteSection extends grpc.MethodDefinition<sitesections_pb.SiteSection, google_protobuf_empty_pb.Empty> {
    path: "/sitesections.SiteSections/CreateSiteSection";
    requestStream: true;
    responseStream: false;
    requestSerialize: grpc.serialize<sitesections_pb.SiteSection>;
    requestDeserialize: grpc.deserialize<sitesections_pb.SiteSection>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface ISiteSectionsService_IGetSiteSections extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, sitesections_pb.SiteSection> {
    path: "/sitesections.SiteSections/GetSiteSections";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<sitesections_pb.SiteSection>;
    responseDeserialize: grpc.deserialize<sitesections_pb.SiteSection>;
}
interface ISiteSectionsService_IGetSiteSection extends grpc.MethodDefinition<sitesections_pb.SiteSectionRequest, sitesections_pb.SiteSection> {
    path: "/sitesections.SiteSections/GetSiteSection";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<sitesections_pb.SiteSectionRequest>;
    requestDeserialize: grpc.deserialize<sitesections_pb.SiteSectionRequest>;
    responseSerialize: grpc.serialize<sitesections_pb.SiteSection>;
    responseDeserialize: grpc.deserialize<sitesections_pb.SiteSection>;
}

export const SiteSectionsService: ISiteSectionsService;

export interface ISiteSectionsServer {
    createSiteSection: grpc.handleClientStreamingCall<sitesections_pb.SiteSection, google_protobuf_empty_pb.Empty>;
    getSiteSections: grpc.handleServerStreamingCall<google_protobuf_empty_pb.Empty, sitesections_pb.SiteSection>;
    getSiteSection: grpc.handleUnaryCall<sitesections_pb.SiteSectionRequest, sitesections_pb.SiteSection>;
}

export interface ISiteSectionsClient {
    createSiteSection(callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<sitesections_pb.SiteSection>;
    createSiteSection(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<sitesections_pb.SiteSection>;
    createSiteSection(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<sitesections_pb.SiteSection>;
    createSiteSection(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<sitesections_pb.SiteSection>;
    getSiteSections(request: google_protobuf_empty_pb.Empty, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<sitesections_pb.SiteSection>;
    getSiteSections(request: google_protobuf_empty_pb.Empty, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<sitesections_pb.SiteSection>;
    getSiteSection(request: sitesections_pb.SiteSectionRequest, callback: (error: grpc.ServiceError | null, response: sitesections_pb.SiteSection) => void): grpc.ClientUnaryCall;
    getSiteSection(request: sitesections_pb.SiteSectionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sitesections_pb.SiteSection) => void): grpc.ClientUnaryCall;
    getSiteSection(request: sitesections_pb.SiteSectionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sitesections_pb.SiteSection) => void): grpc.ClientUnaryCall;
}

export class SiteSectionsClient extends grpc.Client implements ISiteSectionsClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public createSiteSection(callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<sitesections_pb.SiteSection>;
    public createSiteSection(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<sitesections_pb.SiteSection>;
    public createSiteSection(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<sitesections_pb.SiteSection>;
    public createSiteSection(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<sitesections_pb.SiteSection>;
    public getSiteSections(request: google_protobuf_empty_pb.Empty, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<sitesections_pb.SiteSection>;
    public getSiteSections(request: google_protobuf_empty_pb.Empty, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<sitesections_pb.SiteSection>;
    public getSiteSection(request: sitesections_pb.SiteSectionRequest, callback: (error: grpc.ServiceError | null, response: sitesections_pb.SiteSection) => void): grpc.ClientUnaryCall;
    public getSiteSection(request: sitesections_pb.SiteSectionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: sitesections_pb.SiteSection) => void): grpc.ClientUnaryCall;
    public getSiteSection(request: sitesections_pb.SiteSectionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: sitesections_pb.SiteSection) => void): grpc.ClientUnaryCall;
}
