// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var sitesgroups_pb = require('./sitesgroups_pb.js');
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

function serialize_sitegroups_SiteGroup(arg) {
  if (!(arg instanceof sitesgroups_pb.SiteGroup)) {
    throw new Error('Expected argument of type sitegroups.SiteGroup');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sitegroups_SiteGroup(buffer_arg) {
  return sitesgroups_pb.SiteGroup.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sitegroups_SiteGroupRequest(arg) {
  if (!(arg instanceof sitesgroups_pb.SiteGroupRequest)) {
    throw new Error('Expected argument of type sitegroups.SiteGroupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sitegroups_SiteGroupRequest(buffer_arg) {
  return sitesgroups_pb.SiteGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var SiteGroupsService = exports.SiteGroupsService = {
  createSiteGroup: {
    path: '/sitegroups.SiteGroups/CreateSiteGroup',
    requestStream: true,
    responseStream: false,
    requestType: sitesgroups_pb.SiteGroup,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_sitegroups_SiteGroup,
    requestDeserialize: deserialize_sitegroups_SiteGroup,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  getSiteGroups: {
    path: '/sitegroups.SiteGroups/GetSiteGroups',
    requestStream: false,
    responseStream: true,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: sitesgroups_pb.SiteGroup,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_sitegroups_SiteGroup,
    responseDeserialize: deserialize_sitegroups_SiteGroup,
  },
  getSiteGroup: {
    path: '/sitegroups.SiteGroups/GetSiteGroup',
    requestStream: false,
    responseStream: false,
    requestType: sitesgroups_pb.SiteGroupRequest,
    responseType: sitesgroups_pb.SiteGroup,
    requestSerialize: serialize_sitegroups_SiteGroupRequest,
    requestDeserialize: deserialize_sitegroups_SiteGroupRequest,
    responseSerialize: serialize_sitegroups_SiteGroup,
    responseDeserialize: deserialize_sitegroups_SiteGroup,
  },
};

exports.SiteGroupsClient = grpc.makeGenericClientConstructor(SiteGroupsService);
