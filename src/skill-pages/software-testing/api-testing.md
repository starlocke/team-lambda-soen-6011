---
slug: "/skills/software-testing/api-testing"
title: 'API testing'
author: 'Xiyun Zhang'
categories: ["software-testing"]
date: '2020-07-27'
---
## Table of Contents
```toc
# This code block gets replaced with the TOC
```

Before we talk about API testing, lets ask ourselves, what is API?

API is abbreviation for Application Programming Interface. It supports communication and data transfer between two independent software systems. A software system which implements api includes functions or sub program what can be executed by other software systems.

API testing is a sub area of software testing, is used to make sure the interactions among systems are going correctly, stably, and smoothly. It simulates client side, and send HTTP requests to server side. After receiving a response, the fake client side assures the formate and the content of the response is as expected.

## Classification of Skill

This is classified as technical skill

## Prerequisites for Skill

* understand the logic interaction among systems or different components
* understand the I/O of interfaces
* understand basic networking protocols, including data transfer mechanism, three hand shakes, HTTP request and response format, status code, URL definition
* know commonly used API testing tools, such as jmeter, postman, soapUI
* know basic database query
* understand commonly used data types such as char, string, int

## Related Software Engineering Area(s)

* Software Design
* Software Construction
* Software Maintenance
* Software Engineering Process
* Software Quality

## Rationale for Skill

API is used to retrieve and manipulate resources, and in most systems or products, recourses are usually the core of the products, for example the core resource of WhatsApp is contact relation and chat history etc, thus its necessary to test on resources.

Also, what is returned from API is relative simple, unlike web pages which contain complex, unstable, and variable UI stuffs. API testing has less noise thus its easier to perform.<br>

## Roles for Skill

* Software test engineer
* Software developer

## Work Related to Skill (Related Activities and Artifacts)

- Understand requirements, review api definition and many other details
- Decide testing strategy, there might be performance and security requirements as well. Design testing use cases according to these requirements
- Review the testing strategy and testing use cases with other stake holders
- Prepare testing data, testing tool and test cases
- Execute testing, report bugs
- Re-test on bug fixes
- Publish test reports, analysis and classify bugs
- Integrate automated api testing into build process
- If api definitions have changes, update test cases accordingly

## Real-World Example/Scenario of Skill (Text, Graphic, Audio, Video)

- Example 1
  - You go to a restaurant you sit at your table and you choose that you need ABC. You will have your waiter coming up and taking a note of what you want. You tell him that you want ABC. So, you are requesting ABC, the waiter responds back with ABC he gets in the kitchen and serves you the food. In this case, who is your interface in between you and the kitchen is your waiter. It’s his responsibility to carry the request from you to the kitchen, make sure it’s getting done, and you know once it is ready he gets back to you as a response.(Introduction to API Testing with Real-life Examples)

- Example 2
  - Kayak is the biggest online site for booking tickets. You enter your destination, once you select dates and click on search, what you get back are the results from different airlines. How is Kayak communicating with all these airlines? There must be some ways that these airlines are actually exposing some level of information to Kayak. That’s all the talking, it’s through API’s.(Introduction to API Testing with Real-life Examples)

- Example 3
  - Now open UBER and see. Once the site is loaded, it gives you an ability to log in or continue with Facebook and Google. In this case, Google and Facebook are also exposing some level of users’ information. There is an agreement between UBER and Google/Facebook that has already happened. That’s the reason it is letting you sign up with Google/ Facebook.(Introduction to API Testing with Real-life Examples)

## Role of Academia or Industry in Cultivating the Skill

- Academia
  - API testing are not so often discussed in academic courses. But the term "API" is. We learn fundamental concepts that's helping this skill at schools such as networking protocols, data transfer, programming languages, and the most importantly, problem solving and solution design thinking

- Industry
  - API is used everywhere in software industry. Experience in industry helps this skill grow better towards practical implementation because people start to learn and understand real business layer and logic. At school api are usually in form of client-server entry point, but in real industry there are multiple application of api. This will bring more in-depth understanding of this skill to people in software industry.

## Tools Supporting the Skill

- POSTMAN
  - Being originally a Chrome browser plugin, Postman now extends its solution with the native version for both Mac and Windows. Postman is a good choice for API testing for those who don’t want to deal with coding in an integrated development environment using the same language as the developers.
    - Easy-to-use REST client
    - A rich interface which makes it easy to use
    - Can be used for both automated and exploratory testing
    - Van be run on Mac, Windows, Linux & Chrome Apps
    - Has a bunch of integrations like support for Swagger & RAML formats
    - Doesn't require learning a new language
    - Enable users to easily share the knowledge with the team as they can package up all the requests and expected responses, then send to their colleagues

(Top 5 free API testing tools (New & updated tools))

- Soap UI
  - SoapUI is a headless functional testing tool dedicated to API testing, allowing users to test REST, SOAP APIs, and Web Services easily. SoapUI users can get the full source and build the preferred features. SoapUI key abilities include:
    - Create test quickly and easily with Drag-and-drop, Point-and-click
    - Reusability of Scripts: load tests and security scans can be reused for functional test cases in just several steps
    - Create custom code using Groovy
    - Powerful data-driven testing: Data is loaded from files, databases and Excel files to simulate how consumers interact with the APIs
    - Support native CI/CD integrations, asynchronous testing
    - Other advanced features, such as an assertion wizard for Xpath, a form editor, and SQL query builder

(Top 5 free API testing tools (New & updated tools))

## Skill Self-Assessment (My Skill Score (1 – 10) and Reasons for Self-Assigned Score)

7.

The code coverage I am able to achieve is around 70% - 80% during most of my projects

## References

[1]API testing skills: Why you need them. (2014, July 17). On Test Automation. https://www.ontestautomation.com/api-testing-skills-why-you-need-them/

[2]10 API Testing Tips for Beginners (SOAP & REST): Complete Guide. (2020, January 10). Retrieved from https://www.katalon.com/resources-center/blog/api-testing-tips/

[3]“Introduction to API Testing with Real-Life Examples.” Test Automation Resources, 22 Oct. 2018, https://www.testautomationresources.com/api-testing/introduction-api-testing-examples/

[4]Top 5 free API testing tools (New & updated tools) | Katalon studio. (2020, July 20). Katalon Solution. https://www.katalon.com/resources-center/blog/top-5-free-api-testing-tools/