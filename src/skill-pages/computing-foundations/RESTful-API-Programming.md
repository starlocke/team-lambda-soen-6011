---
slug: "/skills/computing-foundations/restful-api-programming"
title: 'RESTful API Programming'
author: 'Warren White'
categories: ['computing-foundations']
date: '2020-07-26'
---

## Classification of Skill

 - Technical Skills: 6
 - Human Relation Skills: 2
 - Conceptual Skills: 2

![RESTful API Programming & Design requires a blend of different types of skills](https://image-charts.com/chart?chan=1500%2CeaseOutBounce&chd=a%3A6%2C2%2C2&chf=ps0-0%2Clg%2C45%2Cffeb3b%2C0.2%2Cf443367C%2C1%7Cps0-1%2Clg%2C4%2C8bc34a%2C0.2%2C0096887C%2C1%7Cps0-2%2Clg%2C45%2CEA469E%2C0.2%2C03A9F47C%2C1%7Cps0-3%2Clg%2C45%2C03a9f4%2C0.2%2C03A9F47C%2C1&chl=Technical%7CConceptual%7CHuman&chs=600x400&cht=p&chtt=RESTful%20API%20Programming%20%26%20Design%20-%20Skill%20Classification)

## Prerequisites for Skill

* Ability to query a database using SQL and an overall in-depth understanding of database systems

* A grasp on the fundamental concepts of application layer network protocols, specifically HTTP

* Proficiency with the core language features and constructs of any imperative programming language

## Related Software Engineering Area(s)

 - Software Documentation
 - Software Testing
 - Software Design
 - Software Construction
 - Agile Software Project Management

## Rationale for Skill

...

## Roles for Skill

The industry has a plethora of roles and openings that explicitly require a strong understanding and ability to write software that utilizes REST:

* Backend (or) Server-side Engineer
* Web API Developer
* Full-Stack Software Engineer

## Work Related to Skill (Related Activities and Artifacts)

RESTful API design and programming have several activities spanning a few minutes of time to a few weeks for teams that are actively involved in the production of these APIs. 

###  Designing the Endpoints

**Roles that usually perform this activity:** 
  - Technical Lead
  - Senior Software Engineer
  - Software Architect

**Artifacts produced:** 
  - Most importantly, an API contract
  - User Stories that enumerate the endpoints and their respective functionality as well as request/response schema
  - A Swagger/OpenAPI document with request/response schema definitions and endpoints albeit without API interactivity

In most organizations that have resources represented as data, stored in databases of any type (relational, object-relational, document, etc.), there comes a point in time when clients and end-users might want to consume an interface that allows access to this data. If the exposed API is chosen to comply with the REST architectural style, then the design is critical as this activity lays the foundations for activities that follow.

There have been conventions that have been prescriptive to RESTful API design, some of which are listed below:
 
 - Use nouns in URIs to denote resources
 - Prefer using plural forms of these _resource_ nouns
 - Let the actions being performed be defined by the HTTP standard
 - Do not misuse safe and idempotent HTTP methods
 - Allow the URIs to depict the resource hierarchy
 - Use API version numbers to represent major releases
 - Actions that modify resources should return responses that reflect the updated resource representation
 - Utilize query parameters instead of entirely new endpoints to perform searching, sorting and filtering
 - In concordance with the underlying stateless HTTP protocol, RESTful APIs should be stateless ie. independent of previous requests
 - For authorization and authentication, it is scalable to use tokens like JSON Web Tokens alongside OAuth
 - Use HTTP status codes conforming to [RFC 2616](https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html)
 - Document the API using the OpenAPI standard

### Developing the Endpoints
 **Roles that usually perform this activity:** 
  - Software Engineers (across experience levels)

 **Artifacts produced:** 
  - Incrementally through a series of steps, endpoints of the API are created until the final deliverable, the API itself is developed
  - If Test-driven Development is followed, the development process also yields unit tests and feature or acceptance tests

When the specification and design of the endpoints for the required REST API are ready, the engineering team can move forward to implement the design in code. It must be noted that there is a critical step in choosing a technology for this purpose. There have been numerous frameworks that ease the development of REST APIs without having to deal with low-level details such as marshaling and un-marshaling requests and responses. 

Some popular frameworks that facilitate REST API development -
 - ExpressJS (based on the NodeJS runtime)
 - Gin (uses the Go programming language)
 - Ruby on Rails - which now since v5.2 has an `--api-only` flag to create view-less RESTful applications
 - JAX-RS (uses Java)
 - Liberator (uses Clojure, a functional programming language)

After making this intermediate technology choice, the engineers can proceed with creating these endpoints. It is assumed by this article and will not be elaborated that the database design and implementation are robust and scalable. Using one database type over another is rarely a problem unless the application domain is inherently suited to specific engines because there is normally a mapping tool or library that handles the mapping between intrinsically incompatible types. _AllegroGraph_, a graph database, is a good fit for geospatial data.
While most of these frameworks come with Object-Relational (or) Object-Document Mapping baked-in, it is possible that the occasional custom, 100-line long query might be required which would need to be passed directly to the database management system to process. In such cases, only the mapping from the relational record (or) document back to object or structural entity would be required from the mapping library.

In order for an authentication and authorization standard to be utilized by the API (as suggested by the design activity), libraries that abstract the detail of creating JSON Web Tokens and interacting with intra-organization or external identity servers prove to be a good option. This way, engineers working on the API only need to call a method validating the token supplied by the user before proceeding to take action on a request. It is also an implicit requirement that when there an authentication and authorization standard followed, that there must be an endpoint on the API to retrieve a token when provided acceptable credentials.

### Testing the endpoints
 **Roles that usually perform this activity:** 
  - Quality Assurance Engineers (across experience levels)
  - Software Development Engineer in Test (SDET) 

 **Artifacts produced:** 
  - A fully-fledged test suite

Although often categorized as a whole skill discipline in itself, testing forms an important part of RESTful API development. Not only does it validate that the API works as expected but also ensures that it fulfills the specification described in the API contract and end-user workflows. It is common for applications without visual user interfaces to not have feature and integration tests but it is prescribed because an end-user using the API, in order to perform an action may be required to go sequentially through a series of requests to multiple endpoints before acquiring the expected composite response.

A testing strategy recommended by [SISENSE](https://www.sisense.com/blog/rest-api-testing-strategy-what-exactly-should-you-test/):

 - Verify correct HTTP status code. 

   For example, creating a resource should return `201 CREATED` and unauthorized requests should return `403 FORBIDDEN`, etc.

 - Verify response payload. 
 
   Check valid JSON body and correct field names, types, and values — including in error responses.

 - Verify response headers. 
 
   HTTP server headers have implications on both security and performance.

 - Verify correct application state. 
  
   This is optional and applies mainly to manual testing, or when a UI or another interface can be easily inspected.  

 - Verify basic performance sanity. 
   
   If an operation was completed successfully but took an unreasonable amount of time, the test fails.

### Documenting the Endpoints
 **Roles that usually perform this activity:** 
  - Software Engineers (across experience levels)

 **Artifacts produced:** 
  - Comprehensive documentation compliant with the OpenAPI standard which is easily available and accessible to end-users

 This activity is intertwined with the development process and is best done as and when the endpoints are being developed. The documentation enumerates the endpoints of the API, describing requests, responses, status codes of return responses, error messages (and what they mean). In addition to these, when using OpenAPI, a Swagger UI is provided that allows users to interact with the API by filling out form fields for request properties.

## Real-World Example/Scenario of Skill (Text, Graphic, Audio, Video)

...

## Role of Academia or Industry in Cultivating the Skill

The skill of RESTful API programming and design is one that emerges by an amalgamation of other more "atomic" skills which are often cultivated both by academia and industry. While academia provides the initial foundations in schools and universities in core concepts essential to this skill, industry provides a platform to further hone this skill by actually producing software artifacts that are production-ready.

### Role of Academia:

Introductory programming classes offered at schools and universities provide students the requisite foundation in using programming constructs and teach them how to convert logic to code. Courses offered at universities focussed on _Computer Networks, Web Programming, Database Management Systems, and Object-Oriented Design_ serve as a solid pre-requisite to the cultivation of this skill. Higher-level programs and graduate courses also teach the finer aspects of producing high-quality RESTful APIs by introducing notions of good software design, scalable systems, and software quality.

Besides the instructional aspects of academia, it is important to not discount the facet of research that many individuals are actively involved in at universities and research institutions. Research on REST APIs, microservices, and the design of large scale distributed systems has proven to be integral to providing direction every time industry reaches a bottleneck. This skill, thus, at its highest point would involve contributing to research in the same or related field.

### Role of Industry:

Industry plays a rather different role by allowing engineers across experience levels to work on REST APIs (since this happens to be the skill under consideration) in an often domain-specific setting. For instance, consider a company that sources location and map data to end-users, engineers working on such a system will be developing APIs specific to the domain of geospatial data. This conceives a new dimension to the skill by taking the _raw_ skill of programming RESTful APIs to a more wholesome skill of programming and designing RESTful APIs specific to a particular application context (which is the intersection of domain knowledge areas and technical knowledge areas).

The cultivation of this skill to deliver an artifact that is complete, in the sense that it allows for the artifact to be usable by a user by simply making a request to the API, is what can be honed in industry. This is true because the primary deliverable at the end of an industrial-grade software engineering effort is most likely one artifact composed of many smaller sub-units. 

Most importantly, industry provides a hands-on approach to the cultivation of this skill. It also provides individuals an opportunity to expose themselves to many technologies that solve either the same or different problems.

## Tools Supporting the Skill

* **Code Editors and Integrated Development Environments** --
  
  _Examples of code editors:_ Microsoft Visual Studio Code, vim, emacs
  
  _Examples of IDEs:_ IntelliJ, RubyMine (both by JetBrains), Eclipse

* **Compilers or Interpreters for the Programming Language of choice** -- 
  
  For instance, if Ruby is the language of choice, say with the Ruby on Rails framework, then _YARV_ and _MRI_ would be common choices depending on the version of Ruby chosen.

  Consider another example in Java, say with JAX-RS, then the `javac` compiler which comes along with JDK would be used.

* **Task Runners** -- 

  Often with the development of RESTful APIs, there come numerous development tasks like concatenating files, seeding a database, spinning up a web server, etc. 

  For example, when using the NodeJS runtime, _Grunt_ and _Gulp_ prove to be the preferred choices.

  Consider Ruby and the Rails environment, _Rake_ is what is often used.

* **Debuggers & Runtime Developer Consoles** --

  In the process of development of RESTful APIs, the need for debugging becomes evident and necessary; debuggers and runtime developer consoles provide this required tooling.
   
  Consider the example of Ruby and the Rails framework, _pry_ or _pry-byebug_ are common choices.

  When using PHP, say with the _Symfony_ framework, _PsySH_ is often used.

## Skill Self-Assessment (My Skill Score (1 – 10) and Reasons for Self-Assigned Score)

### 8/10

**Reasons for this self-assigned score:**
I have worked in the capacity of a software engineer with most of my tasks centred around the development of RESTful APIs for about one and a half years. In this time, I've worked through the previously mentioned activities and have been actively involved in the production of the aforementioned artifacts. Given that I've worked through a transition process to break a monolith into microservices to enhance maintainability and separation of concerns as prescribed by the concepts of Service-Oriented Architecture, I've also observed the benefits that come with the use of lighter RESTful APIs instead of highly coupled monoliths.

Nevertheless, it is a long way before I can deem myself an expert and in the context of today's ever so rapidly evolving software engineering world where problems are solved nearly as fast as they are created, it has become imperative that I, as a software engineer, adapt to these evolutions.

## References

...
