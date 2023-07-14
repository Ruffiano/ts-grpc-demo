// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var sitesections_pb = require('./sitesections_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sitesections_SiteSection(arg) {
  if (!(arg instanceof sitesections_pb.SiteSection)) {
    throw new Error('Expected argument of type sitesections.SiteSection');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sitesections_SiteSection(buffer_arg) {
  return sitesections_pb.SiteSection.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sitesections_SiteSectionRequest(arg) {
  if (!(arg instanceof sitesections_pb.SiteSectionRequest)) {
    throw new Error('Expected argument of type sitesections.SiteSectionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sitesections_SiteSectionRequest(buffer_arg) {
  return sitesections_pb.SiteSectionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var SiteSectionsService = exports.SiteSectionsService = {
  createSiteSection: {
    path: '/sitesections.SiteSections/CreateSiteSection',
    requestStream: true,
    responseStream: false,
    requestType: sitesections_pb.SiteSection,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_sitesections_SiteSection,
    requestDeserialize: deserialize_sitesections_SiteSection,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  getSiteSections: {
    path: '/sitesections.SiteSections/GetSiteSections',
    requestStream: false,
    responseStream: true,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: sitesections_pb.SiteSection,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_sitesections_SiteSection,
    responseDeserialize: deserialize_sitesections_SiteSection,
  },
  getSiteSection: {
    path: '/sitesections.SiteSections/GetSiteSection',
    requestStream: false,
    responseStream: false,
    requestType: sitesections_pb.SiteSectionRequest,
    responseType: sitesections_pb.SiteSection,
    requestSerialize: serialize_sitesections_SiteSectionRequest,
    requestDeserialize: deserialize_sitesections_SiteSectionRequest,
    responseSerialize: serialize_sitesections_SiteSection,
    responseDeserialize: deserialize_sitesections_SiteSection,
  },
};

exports.SiteSectionsClient = grpc.makeGenericClientConstructor(SiteSectionsService);
