# Docker-SeleniumTestNG
Docker-SeleniumTestNG is a sample Java-Selenium automated test suite using Maven-TestNG framework. Below is the step-by-step guide to compile the project, build the docker image, push the docker image to docker hub

- Pull the Docker-SeleniumTestNG project to your local machine and open in your favourite IDE
- Update the src class files, cucumber feature files etc to suite your automation needs (i.e Add Test Cases, Add Dependencies to pom.xml, update the Dockerfile to add all the project files that are needed to run your TestNG suite on a docker image), for exploring purpose you can use this repo as is
- Ensure all the dependencies are downloaded in pom.xml and there are no errors

```
FROM openjdk:8-jre-slim
WORKDIR /usr/share/tag
ADD  target/libs libs
ADD  target/airasia-docker.jar airasia-docker.jar
ADD  target/airasia-docker-tests.jar airasia-docker-tests.jar
ADD  src/main/java/com/airasia/config src/main/java/com/airasia/config
ADD  src/test/resources/features src/test/resources/features
ADD  airasia-sample-tests.xml airasia-sample-tests.xml
ADD  target/test-classes target/test-classes
ENTRYPOINT java -cp airasia-docker.jar:airasia-docker-tests.jar:libs/* -DHUB_HOST=$HUB_HOST -DBROWSER=$BROWSER org.testng.TestNG $MODULE
```

**FROM** As we need jre to run our jar files, we are building the docker on image that has jre installed already</br>
**WORKDIR** This can be any path, consider all the files will be copied to this location inside the docker image </br>
**ADD** This is to add all the dependent files to run your automation suite. The statement __*ADD  target/libs libs*__ means libs directory in your local **$PRODRIR/target** will be copied to **/usr/share/tag/libs** inside the docker image </br>
__*airasia-docker.jar,airasia-docker-tests.jar, libs directory and airasia-sample-tests.xml*__ *are mandatory files. Rest all depends on the config files your automataion suite is trying to access during run time that are not part of packaged jars*</br>
**ENTRYPOINT** This is the command line to run your TestNG suite. We are specifying the -cp (classpaths) to java that are needed to run the test and passing the **HUB_HOST, BROWSER and TestNG xml suite file/s** as auguments</br> 
- Once all the above steps are taken care, either in your IDE or open terminal, navigate to your project directroy where pom.xml is located and run below command </br>

````
mvn clean package -DskipTests
````
- mvn clean package will create *airasia-docker.jar, airasia-docker-tests.jar and libs* in **$PRODRIR/target** directory
- We are using *-DskipTests* as we don't have to run tests in local while packaging the jars however you can run the tests before packaging to ensure that there are no failures 
- Once the required jars are generated in the target folder, push the project to your github repository

### TIP:
- Before you build the docker image, copy airasia-docker.jar, airasia-docker-tests.jar, libs/* and airasia-sample-tests.xml to any local folder in your desktop and run below command </br>
- Ensure Selenium grid is started on the local machine before running this command

````
java -cp airasia-docker.jar:airasia-docker-tests.jar:libs/* -DHUB_HOST=$HUB_HOST -DBROWSER=$BROWSER org.testng.TestNG $MODULE
````
- Please note that HUB_HOST will be *localhost* when you are running the automation in local desktop, the url in DriverManager Class would be like below 

````
url = new URL("http://"+host+":4444/wd/hub"); ---- url = new URL("http://localhost:4444/wd/hub");

$BROWSER would be chrome/firefox and $MODULE is your testng.xml file
````

Now create a GitHub workflow action to build your docker image and push it to docker hub

### Steps to create GitHub workflow action:
- Open your project in GitHub and click on actions
- Under workflow, Click on new workflow
- Click on Setup this workflow, an yml file with default template will be opened, Paste the below code in the file

````
name: AirAsia create and push docker-image to docker hub
on:
  push:
    branches: [ master ]
  pull_request:
    branches: [ master ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - name: Build the Docker image
      run: docker build . --tag kamichettysiva/dockertest
    - uses: docker/build-push-action@v1
      with:
        username: ${{ secrets.DOCKER_USERNAME }}
        password: ${{ secrets.DOCKER_PASSWORD }}
        repository: kamichettysiva/dockertest
        tags: latest  
````
- Rename the docker image with your registry details, save your docker hub credentials in project secrets, give a best suitable name and commit
- Your workflow action will be triggrred upon every push and pull request to the github repo, navigate to the workflow actions to see the logs and staus of the action
- Once action is successfully completed, Your docker image is pushed to docker hub

### Running the tests on docker:
For executing the your automated tests by running docker-compose using GitHub actions, please check below repository
https://github.com/kamichettysiva/Docker-SeleniumRunner
