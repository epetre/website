#!/bin/bash
#

ssh root@139.177.193.112  << EOF
cd home/docker/website
echo '*******'
echo '*******'
echo '*******'
echo 'pulling latest'
git pull
echo '*******'

echo 'docker-compose -f docker-compose.prod.yml up -d --build'
docker-compose -f docker-compose.prod.yml up -d --build
echo '*******'
echo '*******'
echo '*******'
exit
EOF
