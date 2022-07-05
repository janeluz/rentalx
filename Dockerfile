FROM node

WORKDIR /var/rentalx

COPY package.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "dev"]


