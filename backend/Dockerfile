FROM node:22.19.0-alpine

# Setting the working directory inside the container
WORKDIR /app

# Copying the package.json and package-lock.json files
COPY package*.json ./

# Installing dependencies
RUN npm install

# Copying the rest of the application files
COPY . .

# Exposing the port for Express.js
EXPOSE 3001

# Running the app using Node.js
CMD ["npm", "run", "dev"]  # or "npm dev" if you have a start script
