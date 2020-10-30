<link rel="stylesheet" type="text/css" media="all" href="./style.css" />

## About

### Contact Information
* **Email**: <a href="mailto:xleonhunter@gmail.com">xleonhunter@gmail.com</a>
* **Phone**: (302) 312-4489
* **Github Organizations**
    * https://github.com/curriculeon
    * https://github.com/git-leon

### Education
* Delaware State University (2011 - 2015)
* Bachelor of Science (BS)
* Computer Science Major, Mathematics Minor

### Summary
Experienced Technical Instructor and T-shaped Engineer with a demonstrated history of managing and up-skilling teams of Junior engineers.
Highly skilled in Cloud Native Application Development using Java8, Spring, Mockito, and Angular culminating  more than [1800 total Git contributions in the past year](https://github.com/Git-Leon?tab=overview).
Knowledgeable in Cloud Dev Ops using unittest, JUnit5, Selenium, Docker, Kubernetes, Jenkins, and AWS.
Strong information technology professional with a Bachelor of Science (BS) focused in Computer Science, Mathematics Minor from Delaware State University.


<hr><hr>

## Personal Projects

### Owner and Creator
#### Curriculeon: The Online Computing Curriculum
* [Curriculeon](https://curriculeon.github.io/Curriculeon/) is a free online portal built in [RevealJs](https://github.com/hakimel/reveal.js/), [Jekyl](https://jekyllrb.com/), and [Github Pages](https://pages.github.com/), which offers free open-source curriculum content for the following courses:
    * Java Web Development
    * Command Line Scripting
    * GitCli
    * HTML/CSS/JS
    * Python Scripting
    * Cloud Computing & Cloud Infrastructure
    * Development Operations - (DevOps)

* The following is a list in ascending order of delivery date of some of the relevant processes that were covered and applications that were built during a 14-week program in a single lecture (**90 minutes or less**). Demonstrations relied heavily on GitOps, TDD and Cloud Native practices; enforcing version-control, portability and testability across each of the developer’s environments. It should be noted that each application, even the creation of the Github repository, was built in front of a live audience of 25 to 30 developers, while polling for and answering questions.
    * A [simple JUnit Testing application](https://github.com/curriculeon/maven.java-fundamentals) built with Maven using JUnit5 testing paradigms and conventions for testing input and output of algorithms;
        * The intent of building this application for the developers is to demonstrate how to implement proper TDD practices. It is critical that this is presented early to the developer to ensure that each demonstration that follows can be built and then tested appropriately.
    * A [crude database-access application](https://github.com/curriculeon/jdbc.project-template) built with Maven using JUnit5 and JDBC to test database connectivity, querying capabilities, and database insertion;
        * The intent of building this application for the developers is to demonstrate how to leverage Java’s JDBC API to connect to delete, create, and connect to a new connection. The demonstration included how to switch Driver implementation by modifying the `pom.xml` to specify the JDBC driver.
    * A [scalable database-access application](https://github.com/curriculeon/maven.jpa_convert-from-jdbc) built with Maven using JUnit5 and JDBC to test database connectivity querying capabilities and database insertion
        * The purpose of demonstrating how to build this application is to assist the developers with establishing how to build an application that leverages strictly JDBC and scales easily by adding more POJO-oriented logic.
        * This demonsstration will prepare developers for proper application-design and scalability by abiding by SOLID principles and introducing GoF Design Patterns (particularly factories, builders, and singletons).
        * In the days that follow, the developers witnesses how proper design can scale flexibly. The decision to implement this POJO-oriented logic is to later enforce an entity-driven-design implementation using JPA and again later with a Spring Boot implementation.
    * A [scalable-database access application](https://github.com/curriculeon/maven.jpa_convert-from-jdbc) built with Maven using JUnit5 and JDBC and JPA.
        * The developers witnesses how the aforementioned application is easily transformed into a JPA project by introducing `persistence.xml` in the `main/resources/META-INF` directory and including a JPA flavor in the `pom.xml`.
    * A [Spring application](https://github.com/curriculeon/spring_projecttemplate) which exposes basic CRUD operations of a controller managing an entity with implicit @Basic field-types
        * By leveraging the H2-console, the developers witness the entire development lifecycle of a Spring Boot application beginning with empty tables. As an Entity is defined, the developers immediately view the change in the console.
        * The developers benefits from viewing this demonstration by witnessing how Beans, EntityManager, IoC container, and Dependency Injection work in the context of Spring
        * The application is tested and interacted with via Postman
    * A [Spring application](https://github.com/curriculeon/spring.mockito_muffinmaker) with automated tests for Controllers, Services, and Repositories by using BDDMockito
        * Using Junit & SpringRunner, MockMvc, MockBean, BDDMockito, and Jackson databind, the developers learns how to create automated tests to check the correctness of the web server. This step is critical in the developers’ advancement toward automation. This ensures that each of the applications that follow can be provisioned with automated tested.
    * A [Spring application]() which exposes CRUD controllers with multi-dependent services and entities with relational cardinality
        * The developers establishes how to make use of an Entity with a cardinal relation to another Entity (1-1, 1-M, M-M, M-1). Additionally, they view how to inject multiple dependencies from the IoC container into the scope of a dependee.
    * An [Application]() (Spring Web Server and JSP Web Application) which renders a webpage with content injected from the web server 
        * This application allows the developers to see how to communicate throughout their entire application-stack: H2 in-memory database, Spring WebServer, JSP  Web Application. 
    * An [Application](https://github.com/curriculeon/spring.jsp_loginpage) (Spring Web Server and JSP Web Application) which renders a login page to create and manage User sessions within the system
        * Using Spring security and the aforementioned technologies, the developers learns how to create an application which enables sign-up, and login features. Additionally, the application manages User sessions for multiple connections and instances.
    * An [Application](https://github.com/curriculeon/spring.react_projecttemplate) (Spring Web Server and ReactJS Web Application) which allows a client to add and view a list of customers fetched from a Spring Web Server
        * The purpose of building this application is to demonstrate how microserver architecture allows us to easily swap implementations of a layer of the stack
    * An [Application](https://github.com/curriculeon/spring.angular_projecttemplate) (Spring Web Server and Angular6 Web Application) which allows a client to add and view a list of customers fetched from a Spring Web Server
        * The purpose of building this application is to further expound how microserver architecture allows us to easily swap implementations of a layer of the stack
    * A [continuous integration system]() (Git, Jenkins, Web Server, Web Application) which fetches a remote repository, builds the application, and runs tests, and reports the results to Jenkins
        * The intent of building this system is to demonstrate how to create an automated pipeline for continuous integration and continuous delivery
    * A [demonstration on containerizing Spring jars](https://curriculeon.github.io/Curriculeon/lectures/cloud/docker/dockerize-jar-application/lecture.html#/1/1)
        * This demonstration allows developers to learn how to containerize applications using Docker with the intent to deploy the application in the most portable way possible.
    * A [demonstration on deploying Spring jars to AWS Elastic Beanstalk](https://curriculeon.github.io/Curriculeon/lectures/cloud/aws/aws-elastic-beanstalk_deploying-maven-springboot-to/deploy-springboot-to-aws/lecture.html)
        * The intent of this demonstration was to provide the developers with industry standard practice for deploying and managing applications on the cloud.

### Owner and Creator
#### Leonium.jar: A Selenium and ExtentReport Wrapper Library
* [Leonium](https://github.com/Git-Leon/leonium) is an [uber jar]() deployed on [packagecloud.io](https://packagecloud.io/git-leon/utils/) that is used to automate Selenium build configuration and script development.
* The library includes [an embedded `.jar` used for dynamically downloading driver binaries](https://github.com/bonigarcia/webdrivermanager)
    * This allows this framework to run `GeckoDriver`, `ChromeDriver`, `PhantomDriver`, `HtmlUnitDriver` without downloading any external dependencies
* The library also includes mechanisms for
    * enabling logging for each web-interaction
    * enabling reporting using [ExtentReports]() for aggregating results
    * [helper classes](https://github.com/Git-Leon/leonium/tree/master/src/main/java/com/git_leon/leonium/browsertools) with [built-in intelligent-waits](https://github.com/Git-Leon/leonium/tree/master/src/main/java/com/git_leon/leonium/browsertools/browserhandler/waiting)


### Owner and Creator
#### OpenCVL.jar: A Selenium and ExtentReport Wrapper Library
* [OpenCVL](https://github.com/Git-Leon/opencvl) is an [uber jar](https://curriculeon.github.io/Curriculeon/lectures/java/build-automation/maven/uber-jar&maven-hosting/content.html) deployed on [packagecloud.io](https://packagecloud.io/git-leon/utils/) that is used to ease OpenCV build configuration and application development.
* The library includes mechanisms for
    * [a factory class for dynamically fetching haarcascade classififers](https://github.com/Git-Leon/opencvl/blob/master/src/main/java/com/github/gitleon/opencvdemo/utils/CascadeClassifierFactory.java)
    * [face detection interface](https://github.com/Git-Leon/opencvl/blob/master/src/main/java/com/github/gitleon/opencvdemo/facedetector/FaceDetectorInterface.java)
    * [default face detection implementation with CascadeClassifier dependency injection support](https://github.com/Git-Leon/opencvl/blob/master/src/main/java/com/github/gitleon/opencvdemo/facedetector/FaceDetector.java)
    * [face detection builder class](https://github.com/Git-Leon/opencvl/blob/master/src/main/java/com/github/gitleon/opencvdemo/facedetector/FaceDetectorBuilder.java)
    * [face detection factory class](https://github.com/Git-Leon/opencvl/blob/master/src/main/java/com/github/gitleon/opencvdemo/facedetector/FaceDetectorFactory.java)


### Owner and Creator
#### JFoot.jar: A Greenfoot Wrapper Library
* [Jfoot](https://github.com/Git-Leon/jfoot-api) is an [uber jar](https://curriculeon.github.io/Curriculeon/lectures/java/build-automation/maven/uber-jar&maven-hosting/content.html) deployed on [packagecloud.io](https://packagecloud.io/git-leon/) that is used to make Greenfoot applications with Maven.
* The library includes mechanisms for
    * converting greenfoot applications to maven applications
    * [helper interfaces for building games](https://github.com/Git-Leon/jfoot-api/tree/master/src/main/java/com/github/git_leon/jfoot)
    * [small gravity physics engine](https://github.com/Git-Leon/jfoot-api/tree/master/src/main/java/com/github/git_leon/jfoot/sprite/physics/gravity)



### Owner and Creator
#### Java8 Exceptional Functional Interfaces
* [Exceptional Functional Interfaces](https://github.com/Git-Leon/Exceptional-Functional-Interfaces) is `.jar` deployed on [packagecloud.io](https://packagecloud.io/git-leon/utils) that is used to express code that explicitly throws an `Exception`, without ever explicitly handling it by defering the `try`/`catch` to the respective `FunctionalInterface`'s static `tryInvoke` method.
* With the advent of [Java 8 Lambdas](https://docs.oracle.com/javase/tutorial/java/javaOO/lambdaexpressions.html) and [Method References](https://docs.oracle.com/javase/tutorial/java/javaOO/methodreferences.html), functional programming in java has become increasingly popular.
* Unfortunately, Java 8 did not account for creating lambda expressions which may throw an `Exception`. This shortcoming has caused a great deal of frustration when developing an exceptional-codebase which should be expressed functionally rather than with object orientation.
* This library aims to help rememdy the deficiencies of exceptional expressions in Java 8 functional programming.


<hr><hr>

## Experience:
### (Upcoming) Remote Lead Technical Instructor 
#### Per Scholas: Cloud DevOps Engineering Course
##### November 2020 – February 2021; Boston, MA.

* Will be remotely leading a group of 30 aspiring engineers through a Cloud DevOps environment.
* Leveraging Zoom meeting, the plan will be to teach the following topics in great detail:
    * GitOps, Git, Shell scripting, SQL / DBMS, TDD, Python Scripting
    * Cloud Infrastructure, Cloud Security
    * CI / CD, Nginx, Build Management
    * Deployment and Jenkins Pipeline
    * Docker and Kubernetes
    * AWS Terraform, AWS ECS, AWS EKS, AWS Lightsail, AWS EC2, AWS Cloud9

### Remote Curriculum Developer 
#### Per Scholas: Cloud DevOps Engineering
#### September 2020 – November 2020.
* As a remote curriculum developer, responsibilities included creating content for curriculums which extensively cover the following topics and more over a twelve to fourteen week period:
    * Cloud Security
    * Cloud DevOps
    * Cloud DevSecOps
    * Java8, Spring Security, Spring MVC, Spring Boot, JPA, JDBC, JSPs, Mockito, Git

### Remote Lead Technical Instructor 
#### Per Scholas: Full Stack Java Engineering Course 
#### June 2020 – September 2020; Charlotte, NC.

* Ceated more than 65 github repositories, along with branches and configured branching rules, for trainees to leverage to build applications, culminating more than [550 Git contributions within the organization during the 14 week program](https://github.com/Git-Leon?from=2020-10-01&to=2020-10-25&org=platformps&year_list=1).
* Managed the group of developers through the development of more than 20 functioning full stack java applications of developers by utilizing GitOps and Cloud Native Application Development practices. Application stacks used some variance of the technologies listed below.
    * Java8, Spring Security, Spring MVC, Spring Boot, Mockito, JSP, ReactJS, Angular
    * AWS S3, AWS EC2, AWS Cloud9, Heroku, Netlify

### Remote Curriculum Developer 
#### Per Scholas
#### March 2020 – June 2020; Wilmington, DE.

* As a remote curriculum developer, responsibilities included creating content for curriculums which extensively cover the following topics and more over a twelve to fourteen week period:
    * A+ CompTIA
    * Network Security
    * ReactJS, Redux, Node
    * Java8, Spring Security, Spring MVC, Spring Boot, JPA, JDBC, JSPs, Mockito, Git

### Lead Software Engineer 
#### Scriptcasters.com: OverseasBasketballConnection.com
##### January 2020 – May 2020; Wilmington, DE.
* Cofounder of Scriptcasters.com, a network of specialized professionals that strive to create innovative technical solutions.
* Hired and lead team of developers to create and maintain a web application and administrative portal for a client seeking a tech solution
* Lead the creation of an application for a client which can connect professional basketball players with overseas teams seeking players, overseasbasketballconnection.com.
* Working alongside one other developer, Frankie Rodriguez, we together created a very successful, popular, heavily used 3-tier platform which
    * allows agents to post job opportunities for players to apply to
    * allows players create a profile and apply for opportunity postings
    * admin portal, which gives client control administrative control over the two aforementioned tiers.
* Including integration testing, deployment, and built configuration, I built the following aspects of the application in their entirety:
    * Java8, Spring MVC, Spring Security, AWS S3, Heroku, Selenium
* The following APIs were leverages for additional features:
    * PrintfulCountry API
    * MailChimp API
* Today, the application has new management and a new team working on the application.

### Lead Technical Instructor 
#### Per Scholas: Full Stack Java Engineering Course
##### November 2019 – February 2020; Philadelphia, PA.

* Lead Technical Instructor at Per Scholas’s Philadelphia pilot of Full Stack Java Engineering bootcamp.
* As lead technical instructor, responsibilities included covering course material via lecture as well as building and testing applications live in front of an audience of 25 developers.

### Lead Curriculum Designer
#### CodeDifferently
##### July 2019 – November 2019; Wilmington, DE.

* As the Lead Curriculum Developer, responsibilities include technically instructing students, designing exercises and solutions, as well as managing 3-person development team.
* Created lesson plans, lecture sequences, and architected teaching material via abstractions of reusable content

### Lead Curriculum Developer
#### Zip Code Wilmington: Full Stack Java Engineering Course
##### December 2018 – May 2019; Wilmington, DE.

* Lead content developer for java programming boot camp.
* Created solutions, lectures, and curriculum for training program.
* Taught all core concepts of java and advanced topics including JDBC, JPA, Spring Boot, and design patterns
* Assisted in the education and job-placement of over 200 junior full-stack application developers

### Contractor / Technical Instructor
#### JPMorgan Chase & Co.
#### October 2018 – November 2018; Glasgow, United Kingdom

* Contracted through ZipCodeWilmington, I served as a technical Java instructor teaching web-development to JP Morgan’s incoming, and transitioning developers located in Glasgow, Scotland.
* The course was an intense 12 week training program mocking a real-world developer environment by enforcing collaboration strictly through Github, and enforcing 12 factor configuration methodologies such as leveraging Maven for dependency management and environment variables for application configuration.
The course was taught using a stack of Maven, SpringBoot, MySql, Angular and Heroku

### Contractor; Lead Technical Instructor
#### JPMorgan Chase & Co.
##### June 2018 – September 2018; Wilmington, DE.

* Contracted through ZipCodeWilmington, I served as the technical Lead Java instructor teaching web-development to JP Morgan’s incoming, and transitioning developers.
* The course was an intense 12 week training program mocking a real-world developer environment by enforcing collaboration strictly through Github, and enforcing 12 factor configuration methodologies such as leveraging Maven for dependency management and environment variables for application configuration.
The course was taught using a stack of Maven, SpringBoot, MySql, Angular and Heroku.

### Lead Technical Instructor
#### Zip Code Wilmington
##### April 2018 – December 2018; Wilmington, DE.

* Lead content developer for java programming boot camp.
* Created solutions, lectures, and curriculum for training program.
* Taught all core concepts of java and advanced topics including JDBC, JPA, Spring Boot, and design patterns
* Assisted in the education and job-placement of over 200 junior full-stack application developers

### Contractor; Technical Instructor
#### JPMorgan Chase & Co.
##### June 2017 – September 2017; Wilmington, DE.

* Contracted through ZipCodeWilmington, I served as a technical Java instructor teaching web-development to JP Morgan’s incoming, and transitioning developers.
* The course was an intense 12 week training program mocking a real-world developer environment by enforcing collaboration strictly through Github, and enforcing 12 factor configuration methodologies such as leveraging Maven for dependency management and environment variables for application configuration.
The course was taught using a stack of Maven, SpringBoot, MySql, Angular and Heroku.

### Technical Instructor
#### Zip Code Wilmington
##### April 2017 – April 2018; Wilmington, DE.

* Taught all core concepts of web design in the context of Java.
* Covered advanced topics including JDBC, JPA, Reflections, Collections.
* Lectured on design patterns in the context of advanced frameworks such as Spring Boot and Angular.
* Assisted in the education and job-placement of over 200 junior full-stack application developers

### Test Automation Engineer
#### Marlette Funding
##### January 2016 – April 2017; Wilmington, DE.

* As a test automation engineer, I was responsible for the implementing a WebCrawling framework for UI automation scripts and error reporting.
* The application was implemented using Selenium, Selenium Grid, SauceLabs, TestNG, and Extent Reporting.

### Optical Science Center for Applied Research (OSCAR) Undergraduate Researcher
#### Delaware State University
##### August 2015 – December 2015; Dover, DE.

* The objective of this project was to develop a genetic algorithm to control a spatial light modulator (SLM) used for shaping the profile of a laser beam.
* Implemented evolutionary algorithm for adaptive optics using MatLAB.
* Interfaced MatLAB with LabVIEW software.

### Operations Leadership Intern
#### Discover
##### June 2015 – August 2015; New Castle, DE.

* Implemented BEST QCAS Access Database.
* Manual web tester and bug reporter.
* Implemented Microsoft Word and Excel macros using VBA to partially automate test reporting.

### Programming Tutor
#### Delaware State University
#### January 2015 – May 2015; Dover, DE.

* Aided students with completing projects developed in python & java.
* Assisted with understanding of programming logic.

### SMILE Undergraduate Researcher
#### National Science Foundation (NSF)
##### May 2013 – May 2014; Dover, DE.

* The objective of this research was to develop a system that would aid in the prevention of catastrophic medical events through persistent intelligent monitoring and early-warning alerting.
* Created interactive electronics using Arduino open-source prototyping platform.
* Coded in C++ to manipulate Arduino microcontroller and eHealth sensor shield.
* Developed poster presentation for 2014 SMILE Undergraduate Summer Research Symposium.
* Presented at 2014 ERN (Emerging Researchers National) conference.

### Programming Tutor
#### Delaware State University
##### January 2013 – May 2013; Dover, DE.

* Aided students with completing programs developed in java.
* Assisted students with conceptualizing and understanding programming logic.