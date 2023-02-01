#FROM docker hub
#FROM node:19-alpine3.16
#FROM node:lts-bullseye-slim
FROM node:19-alpine3.16

# set working direction (just a name for the project)
WORKDIR /app/

#package and package-lock.json both go in
COPY package.json /app/
RUN npm install
RUN npm run build

COPY . /app/

EXPOSE 3000

# start an application (starting our Astro app)
#CMD npm run dev -- --host 0.0.0.0 & tail -f /dev/null
