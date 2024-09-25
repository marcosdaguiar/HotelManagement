# backend/Dockerfile
# Use the official Node.js 14 image.
FROM node:17

# Create and change to the app directory.
WORKDIR /usr/src/app

# Install app dependencies.
COPY package*.json ./
RUN npm install

# Copy the rest of the application code.
COPY . .

# Expose the port the app runs on.
EXPOSE 5000

# Define the command to run the app.
CMD ["npm", "start"]
