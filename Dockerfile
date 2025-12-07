# Use official Nginx image
FROM nginx:alpine

# Set working directory
WORKDIR /usr/share/nginx/html

# Copy app files into Nginx web root
COPY index.html .
COPY style.css .
COPY script.js .
COPY images ./images

# Expose port 80
EXPOSE 80

# Nginx runs automatically with default CMD