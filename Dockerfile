# Use an official Python runtime as a parent image
FROM node:8

COPY . /Sidebar
# Set the working directory to /app
WORKDIR /Sidebar

# Copy the current directory contents into the container at /app


# Install any needed packages specified in requirements.txt
RUN npm install

# Make port 80 available to the world outside this container
EXPOSE 4000

# Define environment variable

# Run app.py when the container launches
# RUN psql sidebarimg user
# RUN COPY sidebarimgs(experience, original, embedurl) FROM 'data.csv';
CMD ["npm","run","start"]
