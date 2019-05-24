FROM node:6
ADD ./package.json /beowulf-js/package.json
WORKDIR /beowulf-js
RUN npm install
ADD . /beowulf-js
RUN npm test
