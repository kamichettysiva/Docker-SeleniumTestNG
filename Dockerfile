FROM openjdk:8-jre-slim
WORKDIR /usr/share/tag
ADD  target/libs libs
ADD  target/airasia-docker.jar airasia-docker.jar
ADD  target/airasia-docker-tests.jar airasia-docker-tests.jar
ADD  src/main/java/com/airasia/config src/main/java/com/airasia/config
ADD  src/test/resources/features src/test/resources/features
ADD  airasia-sample-tests.xml airasia-sample-tests.xml
ADD  target/test-classes target/test-classes
#ENTRYPOINT java -cp airasia-docker.jar:airasia-docker-tests.jar:libs/* -DseleniumHubHost=$SELENIUM_HUB -DBROWSER=$BROWSER docker $MODULE
ENTRYPOINT java -cp airasia-docker.jar:airasia-docker-tests.jar:libs/* -DHUB_HOST=$HUB_HOST -DBROWSER=$BROWSER org.testng.TestNG $MODULE