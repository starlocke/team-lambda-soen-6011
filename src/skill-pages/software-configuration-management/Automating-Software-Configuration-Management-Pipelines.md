---
slug: "/skills/software-configuration-management/automating-SCM-pipelines"
title: 'Automating Software Configuration Management (SCM) Pipelines'
author: 'Victor Yap'
categories: ["software-configuration-management"]
date: '2020-07-26'
---

## Name of Skill

Automating Software Configuration Management (SCM) Pipelines

- Designing, Developing, Maintaining and Managing Pipelines for:
  - Software Builds
  - Software Tests
  - and Software Artifacts (also known as "Deliverables")

## Classification of Skill

- Technical Skills: 10
- Human Relation Skills: 8
- Conceptual Skills: 10

![A polar area chart showing the classification mixture for the skill of Automation of Software Configuration Management Pipelines](https://image-charts.com/chart?chco=EA469E66%7C03A9F466%7CFFC00C66&chd=a%3A10%2C8%2C10&chdl=Technical%20Skills%7CHuman%20Relations%20Skills%7CConceptual%20Skills&chdls=000000%2C14&chs=640x480&cht=pa&chts=000000%2C32&chtt=Automation%20of%20SCM%20Pipelines&chxr=0%2C0%2C100&chxt=y)

## Prerequisites for Skill

- In-depth knowledge of at least one SCM automation system
- In-depth knowledge of each operating system involved
- ...

## Related Software Engineering Area(s)

...

## Rationale for Skill

As software products and their development teams become increasingly complex,
the importance of automating aspects of software configuration management also
increases. That is because teams are often formed with members having somewhat
disjoint skills and specialities and it is rare to have members who are experts
in literally all aspects of sufficiently complex projects. Every member of such
a team may have a very limited idea of what the whole project entails, but they
each might also have extremely detailed understanding of aspects of the project
that they are individually specializing in. By committing all of the concerns
from each team member into automation systems, the whole team benefits and is
more efficient overall.

It is possible to view the whole of automating SCM pipelines as working to solve
issues along 3 orthogonal dimensions: versions, platforms, scale. In versioning,
the concern is with changes over time. In platforming, the concern is with being
able to make use of the same software on computer systems having differing
foundations (for example: ARM vs x86 architectures; macOS vs Windows). In scaling,
the concern is with operating the same software concurrently over multiple computer systems (for example: 1 ARM-based server vs 1000 ARM-based servers).

This article will explore these concerns with a focus on relatively mature and/or
sufficiently complex software projects.

### SCM of Versions

When SCM is concerned over the handling of multiple versions of a software in a
mature and/or complex project, there must be processes in place to enable a
version identifier to the produced software. These can be entirely manual to
entirely automated.

In automated systems, the version identifiers can be: serial increments,
mathematical hashes, or, maybe even random based on some novel heuristics.

Whatever the case may be, the software engineering responsible for implementing
the automation system would have provide a sufficient software service that will
provision those version per the project's requirements.

The possibility of a hybrid between manual and automated version identifiers is
entirely plausible, too.

### SCM of Platforms

For the concerns of SCM, a platform is defined as a particular hardware
and software combination that supports a software project. It is entirely possible
that there is overlap between "the platform" and "the product".

Example

> We are developing a mobile game for the iPhone X or newer, leverage those models'
> 3D facial-recognition cameras.

Example

> We are developing a point-of-sale, credit-card reader application for iPhones
> and iPads newer than 2015; we can sell the app, the card-reader and the
> phones/tablets together as bundles to business looking for turn-key solutions.
> For security reasons, they must be operating on iOS version 9 or newer.

Example

> We are developing a cross-platform ebook application that can run on
> multiple different computers (ARM, x86, etc) and operating systems (macOS,
> Windows, Linux, Android, iOS, etc).

Traditionally, it would be incumbent on dedicated IT personnel to administer
the physical and logical platforms on which software would run. In many situations,
that is still in fact the case due to constraints about accessing modern solutions
and resources. In many of those situations where software projects are produced
with limited resources, those charged with handling the SCM for the project would
become the de-facto, informal leadership and may fill in the gap left by IT. IT
departments are frequently found to be uninterested in project-specific issues.

Increasingly, SCM experts embedded in software project teams would be called upon
to provision platform-as-a-service to the primary software development members of
the projects. On the classical end of the spectrum, a set of hands-on computing
resources would need to be managed en-mass in automated fashion. On the modern end
of the spectrum, it could be a set of in-the-cloud computing resources. Naturally,
hybrid solutions are viable, too.

At the bare minimum, one specific platform needs to be consistently targetted
throughout the software development lifecycle (example: the Mars Rover Curiosity).
There also exist situations where a vast array of different specific platforms
must be targeted (example: a cross-platform, mass-market application).

When automating SCM, there is a need to become familar with handling all sorts
of different hardware and software configurations in a disciplined, planned,
rigorous manner such that building, running and testing of the software product
would be reliable and reproducible over the lifetime of the project. The goal
of automating the software configuration management of platforms is to alieviate
the operation of intensely tedious mappings and remappings of platform-specific
nuances, leaving developers to focus primarily on their software development
instead of platform-specific issues.

### SCM of Scale

When the nature of a sofware project is such that the development team must also
operate the software, then, the software configuration management of scale becomes
a particularly interesting affair. This is typical of massive, cloud-based
services like social media platforms.

## Roles for Skill

Some of the primary roles for the skill of automating software configuration
management pipelines include:

- DevSecOps/CICD Developer/Engineer
- Software Release Developer/Engineer

Generalists may also be tasked with various components of automating SCM to
some degree:

- Software Developer/Engineer (general-purpose)

Some roles are less likely to be responsible for the automation of a project's
software configuration management pipelines, but there must certainly be cases
where it's a core function of their job. These include roles like:

- Software Architect
- System Administrator

## Work Related to Skill (Related Activities and Artifacts)

In the course of executing the automation of software configuration management
pipelines, a large variety of supporting work and skills tend to become necessary.
Here is an exposition of some typically experienced work for pracitioners of
SCM automation, with brief additional insights.

- Software Architecture
  - The SCM Automator need to be assemble together various systems into a smooth,
    reliable operation. Doing so requires the knowledge, skills and experience to
    perform a complex degree of software architecture on a daily basis.
- System Administration
  - More than merely having knowledge of how to assemble systems together, it is
    often crucial that the SCM automator has sufficient familiarity with administering
    systems in the same fashion as a typical IT system administrator.
- Evaluation
  - Options between all kinds of things must constantly be evaluated.
- Purchasing
  - Making recommendations for purchases tends to come into play when building up
    the infrastuctures and resources for SCM automation. Sometimes, outright
    being responsible for the purchase execution occurs; typically in small-businesses.
- Estimation
  - Having enough experience with all relevant processes, systems and technical
    matters to regularly provide reliable estimates is crutial to many aspects of
    automating an SCM for the other stakeholders.
- System Operation
  - Similar in line with "System Administraion" skills, the nuance is subtle and
    not of great importance.
- Testing
  - An SCM automator must continuously test the results of their pipelines,
    lest something newly introduced by a team member (even himself or herself)
    cause their pipelines to start failing over too long a period.
- Developing
  - It is best practice to produce "infrastructure as code", and so, those who
    implement SCM automation would be very wise to commit everything they do
    into code repositories of good reliability. The very nature of automating
    SCM involves writing a lot of scripts, tools, test, and whatever else is
    needed to take the burden off team members.
- Debugging
  - With software devleopment and testing comes debugging, of course.
- Technical Writing
  - Documentation, documentation, documentation!
  - The skill of being able to produce excellent documentation is of utmost
    importance when passing on the legacy of the pipelines that have been created.
- Mentoring/Teaching
  - Always having a succession plan is a good plan.
- Studying/Researching
  - Always be curious.
- Advocating/Evangelizing
  - The SCM automation developer/engineer should always be prepared to advocate
    for novel solutions that would be of benefir to their projects.
- Negotiating
  - A life skill. Don't leave home without it.
- Managing
  - The whole point of automating SCM is to get a hold on managing software
    configuration.

## Real-World Example/Scenario of Skill (Text, Graphic, Audio, Video)

...

## Role of Academia or Industry in Cultivating the Skill

...

## Tools Supporting the Skill

There are many tools that contribute towards software configuration management,
from low-tech things all the way to complex hardware-software systems and processes.

In the low-tech realm, simple things such sticky notes would be legitimate tools
for keep track of certain goals, tasks, targets, or whatever else might be needed.
The humble sticky note is even commonly used in agile methodologies during
various ceremonies and activities - notably in Kanban boards.

For the sake of brevity, this article will go into more detail about just a few
of the higher level tools that feature prominently at the heart of the automation
of software configuration management.

### Code Repositories

Code repositories are likely the most crucial component of any automated SCM
system. They commonly provide the essential solution for keep track of history
and multiple versions of a software project. In formal projects, it is of the
utmost importance to be able to store the project's history, share that amongst
collaborators, and be able to work on any particular commit as a starting
point. The automated computer systems that operate in continuous integration
and continuous deployment rely o **(work in progress!!)**

- Git
- Subversion (SVN)
- Mercurial
- Perforce

### Automation of SCM

- Jenkins

## Skill Self-Assessment (My Skill Score (1 – 10) and Reasons for Self-Assigned Score)

...

## References

...