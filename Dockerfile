FROM openjdk:17
ADD target/GreyCellProjectApplication.jar GreyCellProjectApplication.jar
ENTRYPOINT ["java", "-jar", "greycell-project-application.jar"]
