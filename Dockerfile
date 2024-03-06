FROM openjdk:17.0.2-jdk-slim AS build

WORKDIR /app

COPY build.gradle settings.gradle gradlew /app/

COPY src /app/src/main/java/GreyCellProjectApplication


RUN chmod +x ./gradlew
RUN ./gradlew build --no-daemon

RUN ./gradlew bootJar --no-daemon

FROM openjdk:17.0.2-jdk-slim

WORKDIR /app

COPY --from=build /app/build/libs/*.jar /app/GreyCellProjectApplication.jar

EXPOSE 8080

CMD ["java", "-jar", "GreyCellProjectApplication.jar"]
