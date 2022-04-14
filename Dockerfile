FROM node:16

WORKDIR /F5B1-TEAM03-CLIENT/
COPY . /F5B1-TEAM03-CLIENT/

RUN yarn install
RUN yarn build:ssr
CMD yarn start