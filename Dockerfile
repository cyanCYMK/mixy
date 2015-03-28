FROM ubuntu:14.04
RUN apt-get update && apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup | sudo bash -
RUN sudo apt-get install -y nodejs
COPY . /src
RUN cd /src/server; npm install
EXPOSE 8080
CMD ["node", "/src/server/app.js"]
