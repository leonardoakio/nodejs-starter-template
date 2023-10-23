# Use an official MongoDB image as the base image
FROM mongo:4.4

# Set the timezone to America/Sao_Paulo
ENV TZ=America/Sao_Paulo

# Copy the MongoDB data into the container
COPY ./data /data/db

# Expose the default MongoDB port
EXPOSE 27017

# Start MongoDB with authentication disabled
CMD ["mongod", "--bind_ip_all", "--noauth"]
