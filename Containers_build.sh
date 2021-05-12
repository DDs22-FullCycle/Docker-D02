#!/usr/bin/env bash

case "${1}" in

    *)
        echo "Aguarde build e push..."
        docker build --force-rm --label=fcpfa --tag=dds22/public:nginx-fc02 ./nginx 
        docker build --force-rm --label=fcpfa --tag=dds22/public:node-fc02 ./node 
        docker push dds22/public:nginx-pfa02
        docker push dds22/public:node-pfa02
    ;;
    
esac
