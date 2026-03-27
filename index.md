<link rel="stylesheet" type="text/css" media="all" href="./style.css" />
<link rel="stylesheet" type="text/css" media="all" href="./assets/css/github-badges-style.css" />

_Click [here](https://git-leon.github.io/Leon-Hunter-Public-Portfolio/) to view this document online_ <br>
_Click [here](https://github.com/Git-Leon/Leon-Hunter-Public-Portfolio/raw/master/Leon-Hunter-Public-Portfolio.pdf) to download the most recent_ .pdf



# Vice President, Software Engineering
# Enterprise Platform Leader · Engineering Enablement Strategist


<div id="github-widget" data-user="git-leon" data-display="pop_repos,calendar"></div>
<script src="https://gh-widget.oyanglul.us/index.js"></script>

## About

### Contact Information
* **Phone**: (302) 312-4489
* **Email**: [xleonhunter@gmail.com](mailto:xleonhunter@gmail.com)
* **Website:** [https://curriculeon.github.io/Curriculeon/](https://curriculeon.github.io/Curriculeon/)
* **LinkedIn:** [https://www.linkedin.com/in/leon-hunter](https://www.linkedin.com/in/leon-hunter)
* **Github Organization Ownership**
    * [https://github.com/curriculeon](https://github.com/curriculeon)
    * [https://github.com/git-leon](https://github.com/git-leon)

### Education
* Delaware State University (2011 - 2015)
* Bachelor of Science (BS)
* Computer Science Major, Mathematics Minor

### Executive Summary
Enterprise engineering leader with 10+ years of experience driving platform modernization, organizational engineering capability, and strategic technical initiatives across Fortune 100 financial institutions and high-growth startups.

Proven track record of owning the full lifecycle of mission-critical platform architecture — from strategy and design through production deployment and operational excellence — directly impacting business scalability, system reliability, and engineering velocity.

Distinctive strength in engineering enablement: designed and scaled technical curricula, built and led programs that up-skilled 200+ engineers into production-ready contributors, and established engineering standards adopted across multiple organizations.

Currently serving as Vice President of Software Engineering at JPMorgan Chase, leading platform architecture for consumer lending and card transaction systems processing millions of events daily.

<div class="pagebreak"> </div>



## Core Competencies

| Platform & Architecture | Leadership & Enablement | DevOps & Delivery |
|---|---|---|
| Microservices & Event-Driven Architecture | Engineering Team Enablement & Up-Skilling | CI/CD Pipeline Design (Jenkins, Docker, K8s) |
| Cloud-Native Platform Design (AWS, GKP) | Technical Curriculum & Standards Development | Observability & SRE (Dynatrace, Micrometer, Grafana) |
| API Modernization & Contract-First Design | Cross-Functional Stakeholder Alignment | Containerization & Orchestration |
| Data Platform Engineering (Kafka, Cassandra) | Open-Source Community Building | Infrastructure-as-Code & GitOps |


## Open-Source Platform Initiatives

### Curriculeon — Enterprise-Grade Engineering Enablement Platform
* Founded and architected [Curriculeon](https://curriculeon.github.io/Curriculeon/), an open-source engineering enablement platform used to accelerate developer onboarding and up-skilling across multiple organizations.
* Built on [Canvas LMS](https://github.com/instructure/canvas-lms/wiki), [RevealJs](https://github.com/hakimel/reveal.js/), [Jekyll](https://jekyllrb.com/), and [Github Pages](https://pages.github.com/) — designed for scalability and zero-cost distribution.
* Platform covers full-stack engineering, cloud infrastructure, CI/CD, containerization, and DevOps — directly reducing ramp-up time for junior engineers from months to weeks.
* Adopted across 6+ training programs and used to train 200+ engineers who went on to secure production engineering roles.

    
### Leonium — Test Automation Framework
* Created [Leonium](https://github.com/Git-Leon/leonium), an open-source Selenium wrapper library deployed via [packagecloud.io](https://packagecloud.io/git-leon/utils/) that standardizes browser automation configuration and eliminates external driver dependency management.
* Reduced test infrastructure setup time by embedding dynamic driver resolution, intelligent waits, and built-in reporting via [ExtentReports](https://github.com/Git-Leon/leonium/tree/master/src/main/java/com/github/git_leon/leonium/browsertools/browserhandler/reporting).


### OpenCVL — Computer Vision & Machine Learning Library
* Designed [OpenCVL](https://github.com/Git-Leon/opencvl), an open-source wrapper for [OpenCV](https://opencv.org/opencv-now-supports-desktop-java/) with [Haar Cascade machine learning](https://ieeexplore.ieee.org/abstract/document/990517), simplifying object detection implementation through factory patterns and dependency injection.


<div id="github-badges"></div>
<script src="./assets/js/github-badges-service.js"></script>




<div class="pagebreak"> </div>

## Professional Experience

### Vice President, Software Engineer — Platform Owner, Real-Time Lending Data Ingestion
#### JPMorgan Chase, Consumer & Community Banking; Wilmington, DE.
**July 2024 – Present**

- Owned end-to-end architecture, development, and production deployment of a real-time data ingestion platform for lending analytics — serving as sole technical owner across the full software development lifecycle.
- Delivered a production-grade event-driven microservice that consumes, validates, transforms, and persists loan transaction events from Apache Kafka to Apache Cassandra, enabling downstream lending analytics and reporting for Consumer & Community Banking.
- Architected a pluggable field validation framework and multi-layer mapping pipeline, establishing reusable patterns adopted as reference architecture within the lending engineering organization.
- Engineered resilient data persistence with Spring Retry, exponential backoff, and Cassandra downgrade-consistency policies — achieving high availability under partial cluster failures with zero data loss.
- Designed and implemented Kerberos-authenticated Cassandra connectivity and Spring Security configurations, ensuring compliance with enterprise security standards across all environments.
- Established full observability with Dynatrace and Micrometer, providing real-time visibility into Kafka consumer lag, throughput, and API health — reducing mean time to detection for production anomalies.
- Containerized and deployed to Kubernetes (GKP) with Kustomize-based multi-environment overlays, enabling consistent promotion from development through production.
- Built non-production injection endpoints for FMEA (Failure Mode and Effects Analysis) scenarios, enabling proactive resilience testing prior to production release.

#### Platform & Technologies
Java 21 · Spring Boot 3.4 · Spring Kafka · Apache Kafka · Apache Avro · Confluent Schema Registry · Spring Data Cassandra · Apache Cassandra · Spring Retry · Spring Security · Kerberos · Micrometer · Dynatrace · JUnit 5 · Mockito · JaCoCo · Maven · Docker · Kubernetes (GKP) · Kustomize · Jenkins

<div class="pagebreak"> </div>

### Vice President, Software Engineer — Platform Lead, Card Transaction History Modernization
#### JPMorgan Chase, Consumer & Community Banking; Wilmington, DE.
**June 2023 – July 2024**

- Led the full-stack platform modernization of a high-traffic credit card transaction history API, migrating from Java 11 / Spring Boot 2 to Java 17 / Spring Boot 3 — impacting transaction visibility for millions of consumer cardholders.
- Owned the rewrite of both the shared common library (consumed by multiple card services) and the primary transaction history API, reducing accumulated tech debt and improving maintainability across the card platform.
- Modernized the API contract from v3 to v4 using OpenAPI 3.0 code generation, establishing a contract-first development standard adopted by adjacent card services teams.
- Replaced legacy Hystrix circuit breakers with Resilience4j, improving fault tolerance configurability and reducing cascading failure risk across dependent services.
- Designed message-routing pipelines via Spring Integration to orchestrate requests across dual data sources (mainframe system of record and Cassandra operational store) with configurable failover — improving data availability and query reliability.
- Introduced bidirectional contract testing (PactFlow) and Cucumber BDD integration tests, significantly strengthening API quality assurance and cross-team compatibility.
- Implemented dynamic runtime feature flags enabling routing and behavior changes without redeployment, reducing release risk and accelerating experimentation.
- Enhanced transaction enrichment with rewards data and third-party order details, expanding the platform's business value for downstream consumer experiences.

#### Platform & Technologies
Java 17 · Spring Boot 3 · Spring Integration · Spring Data Cassandra · Apache Cassandra · Apache Kafka · Avro · OpenAPI 3.0 · Resilience4j · PactFlow · Cucumber · REST Assured · JUnit 5 · Mockito · JaCoCo · Maven · Jenkins · Kubernetes (GKP) · Docker · SonarQube



### Vice President, Software Engineer — Artifacts Platform Engineering
#### JPMorgan Chase, Chief Technology Office; Wilmington, DE.
##### December 2021 – August 2023
- Drove enterprise-wide artifact management modernization, migrating critical build artifacts from legacy NAS infrastructure to AWS EKS-hosted Artifactory — improving reliability and scalability for engineering teams firm-wide.
- Built migration tooling using Spring Boot and GraphQL, enabling automated, auditable artifact transfers across package ecosystems (Maven, PyPI, npm, NuGet).
- Managed platform availability through proactive traffic monitoring and instance failover using AppViewX, Prometheus, and Grafana — maintaining uptime SLAs for a platform serving thousands of engineers.
- Served as a primary escalation point for artifact procurement issues, ensuring uninterrupted CI/CD pipeline operations across the firm.

#### Platform & Technologies
Artifactory · AWS EKS · Prometheus · AppDynamics · Grafana · JFrog CLI · AppViewX · Spring Boot · GraphQL · Docker



<div class="pagebreak"> </div>


## Engineering Enablement & Technical Leadership

### Adjunct Professor — Advanced Data Structures & Algorithms
#### Delaware State University; Dover, DE.
##### January 2023 – May 2023
- Designed and delivered a university-level course on advanced data structures and algorithms ([syllabus](https://curriculeon.github.io/syllabus.datastructures2/)), building the next generation of computer science talent.
- Developed comprehensive lesson plans, coding exercises, and assessment frameworks to measure student progress and competency.

### Senior Technical Instructor & Curriculum Lead
#### Zip Code Wilmington; Wilmington, DE.
##### April 2017 – December 2021

- Served as the senior-most technical instructor and curriculum architect across multiple cohorts, directly responsible for the technical education and career readiness of 200+ junior engineers who were subsequently placed in production roles at Fortune 500 companies.
- Designed, built, and maintained a full-stack Java engineering curriculum covering Java 8+, Spring Boot, JDBC, JPA, ReactJS, Angular, SQL, TDD, Git, and cloud deployment — serving as the standard curriculum for all subsequent cohorts.
- Led instructor teams and managed the internal LMS, establishing grading standards, progress tracking, and quality benchmarks for training outcomes.
- Contracted multiple times by JPMorgan Chase (Wilmington, DE and Glasgow, UK) to train incoming and transitioning developers through intensive 12-week programs emphasizing real-world collaboration via Git, 12-factor app principles, and cloud-native development.

### Techpreneur Incubator Lead
#### Zip Code Wilmington; Wilmington, DE.
##### March 2021 – May 2021
- Led a technical incubator program advising aspiring technopreneurs on product architecture, technical feasibility, and development strategy.
- Provided hands-on technical guidance and connected consultants with engineering resources to accelerate product development.

<div class="pagebreak"> </div>

### Lead Technical Instructor — Cloud DevOps & Full Stack Engineering
#### Per Scholas; Multiple Locations (Remote)
##### June 2020 – February 2021

- Led multiple remote engineering cohorts (25–30 learners each) through intensive 12–14 week programs in Cloud DevOps and Full Stack Java Engineering.
- Created 65+ structured GitHub repositories with branching rules and CI workflows, cumulating [500+ contributions in a single 14-week program](https://github.com/Git-Leon?from=2020-10-01&to=2020-10-25&org=platformps&year_list=1#year-link-2020) — establishing a deploy-on-day-1 engineering culture.
- Managed cohorts through the development of 20+ full-stack applications using Java, Spring Boot, ReactJS, Angular, and AWS (S3, EC2, Cloud9, Heroku).
- Topics covered: GitOps, Shell scripting, SQL, TDD, Python, CI/CD, Docker, Kubernetes, AWS (Terraform, ECS, EKS, Lightsail, EC2).


### Curriculum Developer — Cloud DevOps & Full Stack Engineering
#### Per Scholas
##### March 2020 – November 2020

- Authored comprehensive 12–14 week training curricula for Cloud DevOps, Cloud DevSecOps, and Full Stack Java Engineering programs.
- Content spanned A+ CompTIA, Cloud Security, Java 8+, Spring (Security, MVC, Boot), JPA, JDBC, ReactJS, Redux, Node, and Git.
- Curricula adopted as the standard for Per Scholas's national expansion of engineering training programs.




### Lead Technical Instructor
#### TalentPath: Full Stack Java Engineering Course
##### November 2020 – December 2020
- Designed and delivered an [accelerated curriculum](https://git-leon.github.io/Leon-Hunter-Public-Portfolio/career-assets/contract-artifacts/talent-path-schedule.html) leveraging [Curriculeon](https://curriculeon.github.io/Curriculeon/) to immerse learners in production-style development from day one.

### Lead Curriculum Designer
#### CodeDifferently; Wilmington, DE.
##### July 2019 – November 2019
- Led a 3-person curriculum development team, architecting modular and reusable teaching content for engineering training programs.
- Designed lesson plans, lecture sequences, and hands-on exercises covering full-stack development fundamentals.


### Lead Software Engineer
#### OverseasBasketballConnection.com
##### January 2020 – May 2020; Wilmington, DE.
- Led a development team to architect, build, and launch a 3-tier web platform connecting professional basketball players with overseas teams.
- Owned end-to-end delivery of the backend (Java 8, Spring MVC, Spring Security), cloud infrastructure (AWS S3, Heroku), and test automation (Selenium).
- Platform included agent job posting, player profile/application, and a full administrative portal — adopted by the client and actively used in production.


## Early Career

### Test Automation Engineer
#### Marlette Funding; Wilmington, DE.
##### January 2016 – April 2017
- Designed and implemented a web-crawling automation framework for UI testing and error reporting using Selenium, Selenium Grid, SauceLabs, TestNG, and Extent Reporting.

### Undergraduate Researcher — Adaptive Optics
#### Optical Science Center for Applied Research (OSCAR); Dover, DE.
##### August 2015 – December 2015
- Developed a [genetic algorithm for adaptive optics](https://github.com/Git-Leon/adaptive-optic-ga) to control a spatial light modulator for laser beam shaping, interfacing MATLAB with LabVIEW.

### Operations Leadership Intern
#### Discover Financial; New Castle, DE.
##### June 2015 – August 2015
- Built internal tooling (Access Database, VBA macros) to partially automate test reporting workflows, improving QA team efficiency.

### Undergraduate Researcher — Health Monitoring Systems
#### National Science Foundation (NSF); Dover, DE.
##### May 2013 – May 2014
- Developed an Arduino-based health monitoring and early-warning system for catastrophic medical event prevention.
- [Presented research](http://www.garyholness.com/LeonHunterERNPoster.pdf) at the 2014 SMILE Undergraduate Research Symposium and 2014 ERN (Emerging Researchers National) Conference.