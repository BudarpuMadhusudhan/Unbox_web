FROM node:18.12.1
RUN mkdir testunbox
COPY . /testunbox
RUN apt-get update 
RUN apt-get install -y openjdk-11-jdk
RUN curl -sS -o - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add 
RUN bash -c "echo 'deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main' >> /etc/apt/sources.list.d/google-chrome.list" 
RUN apt-get update 
RUN apt install -y google-chrome-stable 
RUN apt-key adv --keyserver keyserver.ubuntu.com --recv-keys A6DCF7707EBC211F
RUN apt install -y software-properties-common
RUN apt-add-repository "deb http://ppa.launchpad.net/ubuntu-mozilla-security/ppa/ubuntu focal main"
RUN apt update
RUN apt install -y firefox
RUN wget https://selenium-release.storage.googleapis.com/3.141/selenium-server-standalone-3.141.59.jar 
RUN cd /testunbox/ \
&&  npm install
RUN chmod 655 /testunbox/node_modules/.bin/*
WORKDIR /testunbox


