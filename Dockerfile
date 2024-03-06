# Use the official OpenJDK image as a base image
FROM openjdk:17

# Set the working directory inside the container
WORKDIR /app

# Add the Spring Boot application JAR file to the container
ADD target/greycell-project-application.jar greycell-project-application.jar

# Expose the port your application runs on
EXPOSE 8080

# Set the entry point for the container
ENTRYPOINT ["java", "-jar", "greycell-project-application.jar"]
