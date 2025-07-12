# Use Node.js base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package files first for cache efficiency
COPY package.json yarn.lock ./

# Install dependencies using yarn
RUN yarn install

# Copy the rest of the code
COPY . .

# Build the Next.js app
RUN yarn build

# Expose the port Next.js runs on
EXPOSE 3000

# Start the app
CMD ["yarn", "start"]
