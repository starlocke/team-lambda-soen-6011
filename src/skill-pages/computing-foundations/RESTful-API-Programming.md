---
slug: "/skills/computing-foundations/restful-api-programming"
title: 'RESTful API Programming'
author: 'Warren White'
categories: ['computing-foundations']
date: '2020-07-26'
---
The exponential growth of data that has come with the onset of _The Information Age_ [[1]](https://www.researchgate.net/publication/49826525_The_World's_Technological_Capacity_to_Store_Communicate_and_Compute_Information) has created an ever-widening problem space that converges to a few key questions out of which the one of interest to this article is - _how can this data be accessed over an inter-network like the Internet?_ RESTful APIs have emerged from the corresponding solution space as a popular and scalable answer. The skill of programming and designing RESTful APIs therewith has become an integral skill for a software engineer.

## Classification of Skill

Although most people would classify this skill simply as a _technical_ or _hard_ skill, it is more multi-dimensional and thus each dimension is scored on a scale of 10 on a polar chart.

 - Technical Skills: 10
 - Human Relation Skills: 4
 - Conceptual Skills: 7

![RESTful API Programming & Design requires a blend of different types of skills](https://image-charts.com/chart?chd=t%3A10%2C7%2C4&chdl=Technical%7CConceptual%7CHuman%20Relations&chf=ps0-0%2Clg%2C45%2Cffeb3b%2C0.2%2Cf443367C%2C1%7Cps0-1%2Clg%2C45%2C8bc34a%2C0.2%2C0096887C%2C1%7Cps0-2%2Clg%2C45%2CEA469E%2C0.2%2C03A9F47C%2C1&chs=700x500&cht=pa&chtt=Classification%20of%20Skill%20-%20RESTful%20API%20Programming&chxt=x%2Cy)

## Prerequisites for Skill

* Ability to query a database using SQL and an overall in-depth understanding of database systems

* A grasp on the fundamental concepts of application layer network protocols, specifically HTTP

* Proficiency with the core language features and constructs of any imperative [[2]](https://cs.lmu.edu/~ray/notes/paradigms/) programming language

## Related Software Engineering Area(s)

 - Software Documentation
 - Software Testing
 - Software Design
 - Software Construction
 - Agile Software Project Management [[3]](https://www.sciencedirect.com/science/article/pii/S0164121212000532)

## Rationale for Skill

Distributed systems comprising numerous specialized components, each designated to perform a specific function, have become ubiquitous owing to developments in information and communication technology, specifically those relating to the Internet. Application layer protocols such as [HTTP](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol) (HyperText Transfer Protocol) have been enablers for web applications to become increasingly feature-rich when used in association with client (user-agent) technologies such as [AJAX](https://en.wikipedia.org/wiki/Ajax_(programming)) (Asynchronous JavaScript and XML). Such applications are characterized by their performance and high levels of user interactivity. In order to facilitate this functionality, it is paramount to reduce the size of payloads and data that flows between these specialized and distributed components. 

### The Traditional Approach of Developing Web Applications

For long and till today, most web applications have been developed as monoliths with the data layer (a database system), a business logic layer and a view layer, all part of the same codebase and even deployed on a single web server (which may be vertically or horizontally scaled, nevertheless). This approach works well when the complexity of the application doesn't hinder scaling as site traffic grows. Besides, there has been a more pertinent problem of software engineering teams finding it increasingly hard to onboard new engineers because it is often the case that a change in a part of the codebase may require many cascading changes in other parts - a paragon of high coupling. As prescribed by the wealth of software engineering literature available, high coupling is problematic and should be avoided.

### Decomposition - A Key Driver of Scalable Web Application Architecture

Consequently, engineering teams began decomposing web applications to usher in an era of more decentralized and clearly separated services. This allowed for both decentralized development and release processes. While the initial days of this transition employed [SOAP](https://en.wikipedia.org/wiki/SOAP) (Simple Object Access Protocol) with [XML](https://en.wikipedia.org/wiki/XML) (eXtensible Markup Language) as the data interchange standard [[4]](https://blog.readme.com/the-history-of-rest-apis), it was replaced soon with [REST](https://en.wikipedia.org/wiki/Representational_state_transfer) (Representational State Transfer) which was commonly utilized with lighter [JSON](https://en.wikipedia.org/wiki/JSON) (JavaScript Object Notation) payloads. It is important to mention that REST does not insist on the use of JSON. Instead, it allows for any universally accepted data interchange standard.

### REST APIs versus Web Services

While user-agents and web browser technology developments have been largely responsible for the popularity of REST APIs, a REST API is ultimately an API (Application Programming Interface) and not a web service because APIs by definition are a set of protocols that govern the communication between applications, in general; a web service is an application that very specifically communicates over the world-wide-web (which uses HTTP) with another application to exchange data resources. The difference between the two terms is elucidated when the fact that REST is protocol-agnostic becomes clear from its specification in Chapter 5 of Roy Fielding's dissertation [[5]](https://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm).

### REST in a nutshell

REST defines some essential components and constraints that are summarized below from Roy Fielding's dissertation on the topic [[5]](https://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm)[[6]](https://martinfowler.com/articles/richardsonMaturityModel.html)[[7]](https://restfulapi.net/rest-architectural-constraints):

> - **Client-server:** REST applications have a server that manages application data and state. The server communicates with a client that handles the user interactions. A clear separation of concerns divides the two components. This means you can update and improve them in independent tracks.
> - **Stateless:** Servers don’t maintain any client state. Clients manage their application state. Their requests to servers contain all the information required to process them.
> - **Cacheable:** Servers must mark their responses as cacheable or not. So, infrastructure and clients can cache them when possible to improve performance. They can dispose of non-cacheable information so that no client uses stale data.
> - **Uniform interface:** This constraint is REST’s most well-known feature or rule, depending on who you ask. Roy Fielding says “The central feature that distinguishes the REST architectural style from other network-based styles is its emphasis on a uniform interface between components.” REST services provide data as resources, with a consistent namespace.
> - **Layered system** – Components in the system cannot “see” beyond their layer. So, you can easily add load-balancers and proxies to improve security or performance.

Despite its simplicity in definition, this RESTful architectural style that constrains the applications using it to use a _uniform interface_ where verbs (`GET`, `POST`, `PUT`, `PATCH` etc.) act on data resources in a clearly defined way, has been the basis for a large number of well-scaled and highly available APIs. Popular applications that have used this RESTful architectural style include Stripe, Twilio, Uber among many others.

![growth of public APIs over time](https://sestopia.s3.amazonaws.com/public_api_growth.png)

As shown by the graph, the number of REST APIs that organizations have opened up for public use has grown quite sharply since 2011. For instance, the Spotify API which is now open for public consumption can access Spotify user data like playlists and other information and as a result, has paved the way for more innovative applications to be developed by third-party developers.

Evidently, the skill of both RESTful API programming and design has evolved to become an important part of any software engineer's skill-set, given the number of enterprises using decomposed REST APIs to provide access to their data resources both to clients as well as to other services and APIs within their organizations.

## Roles for Skill

The industry has a plethora of roles and openings that explicitly require a strong understanding and ability to write software that utilizes REST:

* Backend (or) Server-side Engineer
* Web API Developer
* Full-Stack Software Engineer

## Work Related to Skill

RESTful API design and programming have several activities spanning a few minutes of time to a few months for teams that are actively involved in the production of these APIs. 

###  Designing the Endpoints

**Roles that usually perform this activity:** 
  - Technical Lead
  - Senior Software Engineer
  - Software Architect

**Artifacts produced:** 
  - Most importantly, an API contract [[8]](https://apievangelist.com/2019/07/15/what-is-an-api-contract)
  - User Stories that enumerate the endpoints and their respective functionality as well as request/response schema
  - A [Swagger/OpenAPI](https://swagger.io/docs/specification/about/) document with request, response schema definitions and endpoints albeit without API interactivity

In most organizations that have resources represented as data, stored in databases of any type (relational, object-relational, document, etc.), there comes a point in time when clients and end-users might want to consume an interface that allows access to this data. If the exposed API is chosen to comply with the REST architectural style, then the design is critical as this activity lays the foundations for activities that follow.

There have been conventions that have been prescriptive to RESTful API design, some of which are listed [[9]](https://medium.com/hashmapinc/rest-good-practices-for-api-design-881439796dc9):
 
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
 - Use HTTP status codes conforming to RFC 2616 [[10]](https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html)
 - Document the API using the OpenAPI standard

### Developing the Endpoints
 **Roles that usually perform this activity:** 
  - Software Engineers (across experience levels)

 **Artifacts produced:** 
  - Incrementally through a series of steps, endpoints of the API are created until the final deliverable, the API itself is developed
  - If Test-driven Development is followed, the development process also yields unit tests and feature or acceptance tests

When the specification and design of the endpoints for the required REST API are ready, the engineering team can move forward to implement the design in code. It must be noted that there is a critical step in choosing a technology for this purpose. There have been numerous frameworks that ease the development of REST APIs without having to deal with low-level details such as marshaling and un-marshaling requests and responses. 

Some popular frameworks that facilitate REST API development -
 - [ExpressJS](https://expressjs.com) (based on the [NodeJS](https://nodejs.org/en/) runtime)
 - [Gin](https://github.com/gin-gonic/gin) (uses the Go programming language)
 - [Ruby on Rails](https://rubyonrails.org) - which now since v5.2 has an `--api-only` flag to create view-less RESTful applications
 - [JAX-RS](https://docs.oracle.com/javaee/6/tutorial/doc/giepu.html) (uses Java)
 - [Liberator](http://clojure-liberator.github.io/liberator/) (uses Clojure, a functional programming language)

After making this intermediate technology choice, the engineers can proceed with creating these endpoints. It is assumed by this article and will not be elaborated that the database design and implementation are robust and scalable. Using one database type over another is rarely a problem unless the application domain is inherently suited to specific engines because there is normally a mapping tool or library that handles the mapping between intrinsically incompatible types. _AllegroGraph_ [[11]](https://en.wikipedia.org/wiki/AllegroGraph), a graph database, is a good fit for geospatial data.
While most of these frameworks come with Object-Relational (or) Object-Document Mapping baked-in, it is possible that the occasional custom, 100-line long query might be required which would need to be passed directly to the database management system to process. In such cases, only the mapping from the relational record (or) document back to object or structural entity would be required from the mapping library.

In order for an authentication and authorization standard to be utilized by the API (as suggested by the design activity), libraries that abstract the detail of creating JSON Web Tokens and interacting with intra-organization or external identity servers prove to be a good option. This way, engineers working on the API only need to call a method validating the token supplied by the user before proceeding to take action on a request. It is also an implicit requirement that when there an authentication and authorization standard followed, that there must be an endpoint on the API to retrieve a token when provided acceptable credentials.

### Testing the endpoints
 **Roles that usually perform this activity:** 
  - Quality Assurance Engineers (across experience levels)
  - Software Development Engineer in Test (SDET) 

 **Artifacts produced:** 
  - A fully-fledged test suite

Although often categorized as a whole skill discipline in itself, testing forms an important part of RESTful API development. Not only does it validate that the API works as expected but also ensures that it fulfills the specification described in the API contract and end-user workflows. It is common for applications without visual user interfaces to not have feature and integration tests but it is prescribed because an end-user using the API, in order to perform an action may be required to go sequentially through a series of requests to multiple endpoints before acquiring the expected composite response.

A testing strategy recommended by SISENSE [[12]](https://www.sisense.com/blog/rest-api-testing-strategy-what-exactly-should-you-test/):

 - Verify correct HTTP status code [[10]](https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html). 

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

 This activity is intertwined with the development process and is best done as and when the endpoints are being developed. The documentation enumerates the endpoints of the API, describing requests, responses, status codes of return responses, error messages (and what they mean) [[13]](https://idratherbewriting.com/learnapidoc/). In addition to these, when using OpenAPI, a Swagger UI is provided that allows users to interact with the API by filling out form fields for request properties.

## Real-World Examples

While actually developing and writing the code for a RESTful API may be very time consuming and may require that the reader know a specific programming language, only a simple algorithm for a RESTful API application is given here. Besides this, two more examples are provided, later on.

### A Generalized Algorithm for a RESTful API

For the purpose of this algorithm written in pseudocode, the [Python Flask](https://flask.palletsprojects.com/en/1.1.x/) application structure has been used.

The chosen data source for this example consists of Student records and there are going to be 4 endpoints exposed:

- `GET` endpoint to get a specific student by ID on  `/students/:id`

- `GET` endpoint to get the list of all students on  `/students`

- `POST` endpoint to create a new student resource on `/students`. Do note that the request body for this endpoint contains the data for the student resource to be created and is not contained in the URL.

- `PUT` endpoint to update an existing student resource on `/students/:id`. The updated parameters for the specific student resource are accessible through the request body of the request.

There is very simple and generic error handling used and certain methods such as `listen()`, `JSONresponse()` etc. can be thought of as provided to maintain the simplicity of the algorithm.

```
function listenForRequests
  listen(PORT)
end

function run
  listenForRequests
end

// GET endpoint to get a specific student by ID
function routeHandler('/students/:id')
  requiredStudent = getStudentById(id)
  return JSONresponse(requiredStudent)
end  

// GET endpoint to get the entire list of students
function routeHandler('/students')
  listOfStudents = getAllStudents()
  return JSONresponse(listOfStudents)
end  

// POST endpoint to create a new student resource
function routeHandler('/students')
  studentDetails = extractDataFromRequestBody()
  if addNewStudent(studentDetails).isSuccess
    return JSONresponse() // 201: Successfully  Created
  else
    return JSONresponse(Error) // Either 4xx/5xx Errors
  end
end  

// PUT endpoint to update a student resource
function routeHandler('/students/:id')
  requiredStudent = getStudentById(id)
  studentDetails = extractDataFromRequestBody()
  if updateStudent(studentDetails, requiredStudent).isSuccess
    return JSONresponse() // 200: Success
  else
    return JSONresponse(Error) // Either 4xx/5xx Errors
  end
end 
```

### A Hands-on Approach - Consuming a REST API

This video introduces the viewer to some REST API concepts by making sample calls to Facebook's Graph API, Google Maps' API, Instagram's Media Search API, and Twitter's Status Update API. This provides a real-world example of how REST APIs can be consumed by a third-party developer.

<iframe width="560" height="315" src="https://www.youtube.com/embed/7YcW25PHnAA" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### A Case Study: Engineering Process behind Spotify's Podcast REST API

Spotify has exposed few parts of its data resources to the public via a RESTful API. The Podcast API which can connect to Spotify and manage a user’s podcast library, search the podcast catalog, or fetch detailed information about podcast shows and episodes, is among the newest additions to their API suite.

As stated on the Spotify Engineering blog in a post [[16]](https://engineering.atspotify.com/2020/03/25/spotifys-new-podcast-api-from-design-to-launch), the design of a new RESTful API by their Web API team is an iterative process with a lot of consideration given to what the endpoints should be.
The SDK team selectively releases developer functionality based on feedback from internal engineering teams and members of the developer community.

#### Prototyping and Release Process

Web APIs at Spotify commonly begin as an internal-only product, available for engineers to use in hackathon projects and Spotify-developed apps. This was the case for their podcast API, which debuted in 2015 with a small feature set. The first features included the ability to list episodes and shows in a library, and the ability for apps to read podcast metadata: information about the shows and episodes in the Spotify catalog. These features enabled podcasts to appear at [open.spotify.com](https://open.spotify.com), the web interface for Spotify users.

#### An Iterative Process and the Importance of Documentation before Development

While improving the podcast API iteratively, the team created a proposal that documented the design of their new endpoints. 
> "Sharing API documentation in advance of writing code is an effective way to gather feedback quickly from partners and internal stakeholders."

#### Factors critical to Design

- Backward compatibility: Adding podcast functionality to existing Spotify API endpoints for seamless integration and to introduce familiarity.

- Consistency with Spotify’s other web APIs: Error codes, request and response payloads, and authentication flows should feel familiar for developers who have used other parts of Spotify’s existing Web APIs.

- Consistency with Spotify’s app terminology: Someone who is new to the Spotify API should be able to easily identify how features in the app are associated with API features.

- The Verbosity of our API response payloads: For example, the new API endpoints can provide an episode object or a simplified episode object depending on the situation. The team has to carefully consider which fields belong in the simplified payload and which fields can be exclusive to the episode object.

## Role of Academia or Industry in Cultivating the Skill

The skill of RESTful API programming and design is one that emerges by an amalgamation of other more "atomic" skills which are often cultivated both by academia and industry. While academia provides the initial foundations in schools and universities in core concepts essential to this skill, industry provides a platform to further hone this skill by actually producing software artifacts that are production-ready.

### Role of Academia

Introductory programming classes offered at schools and universities provide students the requisite foundation in using programming constructs and teach them how to convert logic to code. Courses offered at universities focussed on _Computer Networks, Web Programming, Database Management Systems, and Object-Oriented Design_ serve as a solid pre-requisite to the cultivation of this skill. Higher-level programs and graduate courses also teach the finer aspects of producing high-quality RESTful APIs by introducing notions of good software design, scalable systems, and software quality.

Besides the instructional aspects of academia, it is important to not discount the facet of research that many individuals are actively involved in at universities and research institutions. Research on REST APIs, microservices, and the design of large scale distributed systems has proven to be integral to providing direction every time industry reaches a bottleneck. This skill, thus, at its highest point would involve contributing to research in the same or related field.

### Role of Industry

Industry plays a rather different role by allowing engineers across experience levels to work on REST APIs (since this happens to be the skill under consideration) in an often domain-specific setting. For instance, consider a company that sources location and map data to end-users, engineers working on such a system will be developing APIs specific to the domain of geospatial data. This conceives a new dimension to the skill by taking the _raw_ skill of programming RESTful APIs to a more wholesome skill of programming and designing RESTful APIs specific to a particular application context (which is the intersection of domain knowledge areas and technical knowledge areas).

The cultivation of this skill to deliver an artifact that is complete, in the sense that it allows for the artifact to be usable by a user by simply making a request to the API, is what can be honed in industry. This is true because the primary deliverable at the end of an industrial-grade software engineering effort is most likely one artifact composed of many smaller sub-units. 

Most importantly, industry provides a hands-on approach to the cultivation of this skill. It also provides individuals an opportunity to expose themselves to many technologies that solve either the same or different problems.

## Tools Supporting the Skill

* **Code Editors and Integrated Development Environments** --
  
  _Examples of code editors:_ Microsoft Visual Studio Code, vim, emacs
  
  _Examples of IDEs:_ IntelliJ, RubyMine (both by JetBrains), Eclipse

* **Compilers or Interpreters for the Programming Language of choice** -- 
  
  For instance, if Ruby is the language of choice, say with the [Ruby on Rails framework](https://rubyonrails.org), then [_YARV_](https://en.wikipedia.org/wiki/YARV) and [_MRI_](https://en.wikipedia.org/wiki/Ruby_MRI) would be common choices depending on the version of Ruby chosen.

  Consider another example in Java, say with [JAX-RS](https://docs.oracle.com/javaee/6/tutorial/doc/giepu.html), then the [`javac`](https://docs.oracle.com/javase/7/docs/technotes/tools/windows/javac.html) compiler which comes along with JDK would be used.

* **Task Runners** -- 

  Often with the development of RESTful APIs, there come numerous development tasks like concatenating files, seeding a database, spinning up a web server, etc. 

  For example, when using the [NodeJS](https://nodejs.org/en/) runtime, [_Grunt_](https://gruntjs.com) and [_Gulp_](https://gulpjs.com) prove to be the preferred choices.

  Consider Ruby and the Rails environment, [_Rake_](https://github.com/ruby/rake) is what is often used.

* **Debuggers & Runtime Developer Consoles** --

  In the process of development of RESTful APIs, the need for debugging becomes evident and necessary; debuggers and runtime developer consoles provide this required tooling.
   
  Consider the example of Ruby and the Rails framework, [_pry_](https://github.com/pry/pry), or [_pry-byebug_](https://github.com/deivid-rodriguez/pry-byebug) are common choices.

  When using PHP, say with the [_Symfony_ framework](https://symfony.com), [_PsySH_](https://psysh.org) is often used.

## Skill Self-Assessment

Self-assigned Score - **8/10**

For the purpose of this scoring in relation to the Dreyfus Model of Skill Acquisition [[15]](https://en.wikipedia.org/wiki/Dreyfus_model_of_skill_acquisition), let the step between the 5 different levels be 2 points each. According to this model, I do consider myself to be _proficient_.

### Why _Proficient_?

The factor of experience and years of practice and exposure to situations where the skill can be utilized is where I lack and thus, would not deem myself an expert.

**Reasons for this self-assigned score:**
I have worked in the capacity of a professional software engineer with most of my tasks centered around the development of RESTful APIs for about one and a half years. In this time, I've worked through the previously mentioned activities and have been actively involved in the production of the aforementioned artifacts. Given that I've worked through a transition process to break a monolith into microservices [[14]](https://ieeexplore.ieee.org/abstract/document/7833410) to enhance maintainability and separation of concerns as prescribed by the concepts of Service-Oriented Architecture, I've also observed the benefits that come with the use of lighter RESTful APIs instead of highly coupled monoliths.

## References

1. Hilbert, M. and Lopez, P., 2011. The World's Technological Capacity to Store, Communicate, and Compute Information. Science, 332(6025), pp.60-65.

2. Cs.lmu.edu. 2020. Paradigms. [online] Available at: <https://cs.lmu.edu/~ray/notes/paradigms/> [Accessed 9 August 2020].

3. Dingsøyr, T., Nerur, S., Balijepally, V. and Moe, N., 2012. A decade of agile methodologies: Towards explaining agile software development. Journal of Systems and Software, 85(6), pp.1213-1221.

4. The ReadMe Blog. 2020. The History Of REST Apis. [online] Available at: <https://blog.readme.com/the-history-of-rest-apis/> [Accessed 9 August 2020].

5. Fielding, R., 2020. Fielding Dissertation: CHAPTER 5: Representational State Transfer (REST). [online] Ics.uci.edu. Available at: <https://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm> [Accessed 9 August 2020].

6. martinfowler.com. 2020. Richardson Maturity Model. [online] Available at: <https://martinfowler.com/articles/richardsonMaturityModel.html> [Accessed 9 August 2020].

7. Karl, Z., vahab, r., Hegde, H., Gentile, V., Wilson, S., Johnson, E., Ali, A., Godse, P., Kobbanna, S., Kumar, P., Brihan, S. and Patil, S., 2020. REST Architectural Constraints - REST API Tutorial. [online] Restfulapi.net. Available at: <https://restfulapi.net/rest-architectural-constraints/> [Accessed 9 August 2020].

8. Lane, K., 2020. API Evangelist | What Is An API Contract?. [online] API Evangelist. Available at: <https://apievangelist.com/2019/07/15/what-is-an-api-contract/> [Accessed 9 August 2020].

9. Medium. 2020. REST: Good Practices For API Design. [online] Available at: <https://medium.com/hashmapinc/rest-good-practices-for-api-design-881439796dc9> [Accessed 9 August 2020].

10. W3.org. 2020. HTTP/1.1: Status Code Definitions. [online] Available at: <https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html> [Accessed 9 August 2020].

11. En.wikipedia.org. 2020. Allegrograph. [online] Available at: <https://en.wikipedia.org/wiki/AllegroGraph> [Accessed 9 August 2020].

12. Sisense. 2020. REST API Testing Strategy: What Exactly Should You Test? L Sisense. [online] Available at: <https://www.sisense.com/blog/rest-api-testing-strategy-what-exactly-should-you-test/> [Accessed 9 August 2020].

13. Documenting APIs. 2020. Documenting Apis: A Guide For Technical Writers And Engineers. [online] Available at: <https://idratherbewriting.com/learnapidoc/> [Accessed 9 August 2020].

14. Escobar, D., Cardenas, D., Amarillo, R., Castro, E., Garces, K., Parra, C. and Casallas, R., 2016. Towards the understanding and evolution of monolithic applications as microservices. 2016 XLII Latin American Computing Conference (CLEI),.

15. En.wikipedia.org. 2020. Dreyfus Model Of Skill Acquisition. [online] Available at: <https://en.wikipedia.org/wiki/Dreyfus_model_of_skill_acquisition> [Accessed 9 August 2020].

16. Spotify Engineering. 2020. Spotify’S New Podcast API: From Design To Launch. [online] Available at: <https://engineering.atspotify.com/2020/03/25/spotifys-new-podcast-api-from-design-to-launch/> [Accessed 11 August 2020].