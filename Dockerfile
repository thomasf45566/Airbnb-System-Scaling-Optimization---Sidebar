FROM node:8

COPY . /Sidebar
WORKDIR /Sidebar

RUN npm install

EXPOSE 4000

CMD ["npm","run","start"]
