# Implementing a gRPC client and server in Typescript

This repo can be used as a template for using gRPC to generate TypeScript files for interacting with a gRPC server or client. Setup this process can be fiddly, hopefully in this repo will make it easier to understand.

#!/bin/bash

OUT_DIR=./proto/pb => build proto

# Generate JavaScript code
npx grpc_tools_node_protoc \
    --js_out=import_style=commonjs,binary:${OUT_DIR} \
    --grpc_out=${OUT_DIR} \
    --plugin=protoc-gen-grpc=./node_modules/.bin/grpc_tools_node_protoc_plugin \
    -I ./proto \
    proto/*.proto

# Generate TypeScript code (d.ts)
npx grpc_tools_node_protoc \
    --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
    --ts_out=${OUT_DIR} \
    -I ./proto \ => .proto gacham bolgan path
    proto/*.proto    => *.proto all proto or define proto
    