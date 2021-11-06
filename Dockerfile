FROM node:alpine
WORKDIR '/mywebsite'
COPY package.json .
RUN npm install 
COPY . . 
CMD ["npm","start"]