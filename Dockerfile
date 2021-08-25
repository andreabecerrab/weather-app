FROM node:4.6
WORKDIR /src/app
ADD . /src/app/
RUN npm install
EXPOSE 3000
CMD npm start
