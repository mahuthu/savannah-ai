Build stage
FROM node:18 as build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ../.env .env
RUN npm run build

# Serve stage
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY public/_redirects /usr/share/nginx/html/_redirects  # For Netlify-style SPA routing (optional)
EXPOSE 80