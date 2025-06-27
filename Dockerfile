# Build stage
FROM node:18-alpine AS builder
WORKDIR /app

ARG NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL

COPY package*.json ./
RUN npm install
COPY . ./

# 👇 Aquí se pasa la variable al proceso de build
RUN NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL npm run build

# Production stage
FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app ./
EXPOSE 3000
CMD ["npm", "start"]
