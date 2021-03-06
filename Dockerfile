FROM node:6.11.3

RUN mkdir /usr/src/app

WORKDIR /usr/src/app

RUN npm install -g @angular/cli@1

COPY . /usr/src/app

RUN npm install 

CMD ng serve 
