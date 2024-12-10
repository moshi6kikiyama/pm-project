# Use an official Node.js runtime as the base image for the builder stage
FROM node:18-alpine as builder


# Set build-time arguments and environment variables
ARG NUXT_PUBLIC_BUILD_ARG
ENV NUXT_PUBLIC_BUILD_ENV=${NUXT_PUBLIC_BUILD_ARG}

# Set the working directory
WORKDIR /app

# Copy only the package files first to leverage Docker cache
COPY package*.json ./

# Install dependencies first, which can be cached
RUN npm install --legacy-peer-deps


# Copy the rest of the application code
COPY . .


# Build the project based on the environment
RUN if [ "$NUXT_PUBLIC_BUILD_ENV" = "production" ]; then \

    yarn build --dotenv .env.production; \
    else \
    yarn build --dotenv .env.development; \
    fi

# Use a smaller base image for the hoster stage
FROM node:20.11.1-alpine as hoster

# Set the working directory for the hoster
WORKDIR /hoster

# Copy the built application from the builder stage
COPY --from=builder /app /hoster

# Set environment variables and expose the application port
ENV HOST 0.0.0.0
EXPOSE 3000

# Start the application
ENTRYPOINT ["node", ".output/server/index.mjs"]

