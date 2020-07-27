## Name of Skill

Test Driven Development Testing

## Classification of Skill

- Hard skill
> - Definition 1 – “Because, it is technical knowledge or training that you have gained through any life experience, including in your career or education.”
>
> - Definition 2 - “Hard skills are learned abilities acquired and enhanced through practice, repetition, and education. Hard skills are important because they increase employee productivity and efficiency and subsequently improve employee satisfaction.”

- Technical skill
> - Definition 1 – “Because, it is the ability to carry out a task associated with technical roles such as IT, engineering, mechanics, science or finance.”
> 
> - Definition 2 – “Technical skills are sets of abilities or knowledge used to perform practical tasks in the areas of mechanics, science, mathematics and information technology.”

## Prerequisites for Skill

- Requirements are main part that should be known in advance to ignite the work.

- Proper knowledge required for testing as well as for coding.

- Code should be work last long for readable and maintainable purposes.

## Related Software Engineering Area(s)
- We can divide skill in 4 parts and think as scientific process.
> - Question
> - Prediction
> - Experiment
> - Subject
- “With TDD, instead of learning things about the world, we’re creating a new world that should conform to our specifications.” 
- So, questions are like actual requirements.
- Thus, **Software Requirements** are related to TDD.
> - As maintained in prerequisites, requirements are necessary before development.
> - We can narrow down Software Requirements area to **Requirements Elicitation**. 
- Then, prediction is about predicting output of failed test case.
- Experiment is like actual test.
- So, it is related with **Software Testing**.
> - The skill can be related with various techniques of testing because initially requirements are build as wrong implementation to see exact fault.
> - This process will continue until the expected output do not match.
> - This area go down to **Test Techniques** and **Software Testing Tools**.
- Once you know the fault via experiment in terms of test assertion, you can move forward with the requirement/feature for the development.
- At last, subject is alike code implementation that can be related to **Software Construction**.
> - Narrow down to **Practical Considerations**, **Construction Technologies**, **Software Construction Tools**.

Scientific Method | TDD | Software Engineering Area
---------------------|-------|---------------------
Question|Requirement|Software Requirements
Prediction|Expected Output|----------------------------
Experiment|Test Assertion|Software Testing
Subject|Implementation Code|Software Construction

## Rationale for Skill

- Good skill to create highly usable software.

- Refactoring to previous code due to change in requirements or increase code quality is safe.

- Provide quick visualization for the code base to eliminate functional deficiencies.

- Code quality metric generation is easy and swift.

- It will prevent to forget write test cases.

## Roles for Skill

- Tester
> - They will think first how their failing test cases will look like.
> 
> - After getting failed, he/she will exact requirements and features.
> 
> - They will think exactly what will be the edge of features.
> 
> - At last, he/she will do correct test cases and refactor part to complete their role.

## Work Related to Skill (Related Activities and Artifacts)

- Write failing test code which failed due to the mismatch of the code with the expected test behavior. (RED box in Image 1)

- Then, just focus on writing code to pass the test. (GREEN box in Image 1)

- Now, test the code again and make sure with functionality. (REFACTOR box in Image 1)

- At the end, commit your code in repository and integrate with other code. (INTEGRATE box in Image 1)
! [Image 1](https://www.google.com/search?q=tdd+images&rlz=1C1CHBF_enCA864CA864&sxsrf=ALeKk00DtzvqdX_J5qRnXy9-D3L6yp5YSA:1595450188413&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiAsvKN2-HqAhVthHIEHV_mCqoQ_AUoAXoECA0QAw&biw=1396&bih=686#imgrc=uLvSVrYmp416RM "Life-cycle of TDD")


## Real-World Example/Scenario of Skill (Text, Graphic, Audio, Video)

- Example 1 –
> - Video related scenario and unit testing for customer log in.
> 
> - https://www.youtube.com/watch?time_continue=142&v=lj5nnGa_DIw&feature=emb_logo
- Example 2 –
> - C# code test case (Image 2)
> ! [Image 2](https://www.google.com/search?q=unit+test+code+example+toptal+isPalimdrome&tbm=isch&ved=2ahUKEwjfhr2I3eHqAhUR06wKHVTzBTcQ2-cCegQIABAA&oq=unit+test+code+example+toptal+isPalimdrome&gs_lcp=CgNpbWcQA1D4uQNY8tADYI3UA2gAcAB4AIABe4gB5wmSAQM5LjSYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=WaUYX5_2N5GmswXU5pe4Aw&bih=686&biw=1396&rlz=1C1CHBF_enCA864CA864#imgrc=2sGnlccUQJz73M "Unit testing")

## Role of Academia or Industry in Cultivating the Skill

- Academia
> - It helps in programming course for grading every size of projects automatically.
> 
> - So that, learning process is more abstract and efficient.
> 
> - Moreover, it helps students as any time feedback for their current progress.
> 
> - With continue process, it builds analytical and comprehension skills which are much needed for student growth.

- Industry
> - Most important, creates a lot of test cases which results in lower defect rates that also save from a big fluctuation in cost estimation.
> 
> - When test cases fail, you will know exact defect or error.
> 
> - It increases confidence between team members.

## Tools Supporting the Skill

- Mockito
> - Java based framework for testing as an open source.
> 
> - It allows automated unit test cases to create test double objects for test-driven development.
> 
> - Moreover allows developers to verify the behavior of the system under test (SUT) without establishing expectations beforehand.
> 
> - The test code is tightly coupled with the system under test.

- Junit
> - Popular Java unit testing framework.
> 
> - Very important for test-driven development and also known as xUnit which came from SUnit.
> 
> - A research survey performed in 2013 across 10,000 Java projects hosted on GitHub found that JUnit (in a tie with slf4j-api), was the most commonly included external library.

- NuGet
> - Mainly designed for the Microsoft development platform as an open source and free of cost.
> 
> - One type of Visual Studio extension.
> 
> - Furthermore, it is merged with SharpDevelop.
> 
> - NuGet can also be used from the command line and automated with scripts.

## Skill Self-Assessment (My Skill Score (1 – 10) and Reasons for Self-Assigned Score)

- 6
- I read some articles based on TDD to gain some level of basic as well as intermediate knowledge.
- Primarily, I used this skill in my academia mainly in projects.
- Especially in the subject APP (Advanced Programming Practices), project RISK game development, I tried TDD testing skill.
- From that, I earned basic coding experience in JAVA language in general and Junit in particular.
- With that testing support, I modified code to develop actual requirement of fortification (one requirement).
- However, I didn’t face any real-world experience yet.

## References

- https://www.guru99.com/test-driven-development.html

- https://en.wikipedia.org/wiki/Test-driven_development#:~:text=TDD%20is%20primarily%20a%20developer's,TDD%20requires%20test%20automation.

- https://www.agilemania.com/blog/role-tester-test-driven-development-tdd/

- https://www.xenonstack.com/insights/what-is-test-driven-development/#:~:text=Mockito%20allows%20programmers%20to%20create,other%20tools%20and%20frameworks%20available.

- https://www.guru99.com/unit-testing-guide.html

- https://nugetmusthaves.com/Tag/tdd

- https://junit.org/junit4/

- https://medium.com/@joantolos/6-tools-to-help-you-do-tdd-with-nodejs-70d19a9ca041

- https://en.wikipedia.org/wiki/Mockito

- https://en.wikipedia.org/wiki/JUnit

- https://en.wikipedia.org/wiki/NuGet

- https://en.wikipedia.org/wiki/Mocha_(JavaScript_framework)

- file:///C:/Users/hardi/Downloads/Applying_Test-driven_Development_to_Eval.pdf

- https://digitalcommons.calpoly.edu/cgi/viewcontent.cgi?referer=https://www.google.com/&httpsredir=1&article=1036&context=csse_fac

- https://www.industriallogic.com/blog/tdd-purposes-and-practices/

- https://www.indeed.com/career-advice/resumes-cover-letters/hard-skills-vs-soft-skills#:~:text=Hard%20skills%20are%20related%20to,and%20advance%20in%20most%20jobs.

- https://www.wikijob.co.uk/content/interview-advice/competencies/technical-skills

- https://www.investopedia.com/terms/h/hard-skills.asp#:~:text=Hard%20skills%20are%20learned%20abilities,and%20subsequently%20improve%20employee%20satisfaction.

- https://www.investopedia.com/terms/t/technical-skills.asp#:~:text=Technical%20skills%20are%20sets%20of,science%2C%20mathematics%20and%20information%20technology.

- https://www.departmentofproduct.com/blog/writing-bdd-test-scenarios/#:~:text=Test%20driven%20development%20is%20primarily,specific%20parts%20of%20your%20application.&text=All%20tests%20are%20written%20before%20the%20code

- https://www.toptal.com/qa/how-to-write-testable-code-and-why-it-matters

- https://devops.com/the-benefits-of-test-driven-development/#:~:text=TDD%20Benefits&text=Because%20put%20in%20its%20simplest,user%20interfaces%20to%20achieve%20that.

- https://dev.to/hudsonburgess7/7-reasons-you-should-be-using-test-driven-development

- https://medium.com/javascript-scene/testing-software-what-is-tdd-459b2145405c
