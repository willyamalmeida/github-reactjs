# Use image node lastet
FROM node

# Set the working directory to /app
WORKDIR /app

# Copy the current application for at /app
ADD . /app

# Install dependencies
RUN npm install --no-optional

# Define envirenment variable
ENV NODE_ENV dev

# Define port
EXPOSE 80

# Execute application
CMD ["npm", "start"]
