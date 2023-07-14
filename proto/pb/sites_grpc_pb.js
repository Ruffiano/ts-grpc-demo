// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var sites_pb = require('./sites_pb.js');
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

function serialize_sites_Site(arg) {
  if (!(arg instanceof sites_pb.Site)) {
    throw new Error('Expected argument of type sites.Site');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sites_Site(buffer_arg) {
  return sites_pb.Site.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sites_SiteRequest(arg) {
  if (!(arg instanceof sites_pb.SiteRequest)) {
    throw new Error('Expected argument of type sites.SiteRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sites_SiteRequest(buffer_arg) {
  return sites_pb.SiteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var SitesService = exports.SitesService = {
  createSite: {
    path: '/sites.Sites/CreateSite',
    requestStream: true,
    responseStream: false,
    requestType: sites_pb.Site,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_sites_Site,
    requestDeserialize: deserialize_sites_Site,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  getSites: {
    path: '/sites.Sites/GetSites',
    requestStream: false,
    responseStream: true,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: sites_pb.Site,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_sites_Site,
    responseDeserialize: deserialize_sites_Site,
  },
  getSite: {
    path: '/sites.Sites/GetSite',
    requestStream: false,
    responseStream: false,
    requestType: sites_pb.SiteRequest,
    responseType: sites_pb.Site,
    requestSerialize: serialize_sites_SiteRequest,
    requestDeserialize: deserialize_sites_SiteRequest,
    responseSerialize: serialize_sites_Site,
    responseDeserialize: deserialize_sites_Site,
  },
};

exports.SitesClient = grpc.makeGenericClientConstructor(SitesService);
