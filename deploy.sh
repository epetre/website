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
echo "docker rmi removing unused orphaned images'
docker rmi $(docker images -f dangling=true -q)
echo '*******'
echo '*******'
echo '*******'
exit
EOF
