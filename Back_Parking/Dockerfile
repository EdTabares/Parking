FROM amazoncorretto:21-alpine-jdk

COPY target/Seguridad-0.0.1-SNAPSHOT.jar /api-v1.jar

EXPOSE 8080

ENTRYPOINT ["java","-jar","/api-v1.jar"]