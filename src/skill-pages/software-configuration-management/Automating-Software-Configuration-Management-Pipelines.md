---
slug: "/skills/software-configuration-management/automating-SCM-pipelines"
title: 'Automating Software Configuration Management (SCM) Pipelines'
author: 'Victor Yap'
categories: ["software-configuration-management"]
date: '2020-07-26'
---

Automating Software Configuration Management (SCM) Pipelines.

The art of designing, developing, maintaining and managing pipelines for:

  - Software Builds
  - Software Tests
  - and Software Artifacts (also known as "Deliverables")

## Classification of Skill

- Technical Skills: 10
- Human Relation Skills: 8
- Conceptual Skills: 10

![A polar area chart showing the classification mixture for the skill of Automation of Software Configuration Management Pipelines](https://image-charts.com/chart?chco=EA469E66%7C03A9F466%7CFFC00C66&chd=a%3A10%2C8%2C10&chdl=Technical%20Skills%7CHuman%20Relations%20Skills%7CConceptual%20Skills&chdls=000000%2C14&chs=640x480&cht=pa&chts=000000%2C32&chtt=Automation%20of%20SCM%20Pipelines&chxr=0%2C0%2C100&chxt=y)

The reasons for these scores will be explained when analyzing the prequisites
for this skill.

## Prerequisites for Skill

Presented here is a limited estimation of what may the most fundamental prerequisites
needed to be skilled at automating software configuration management. The details
of the foundations are left to the reader to explore in further detail, as each
one requires a significant investment in terms of its breadth and depth.

### Foundations: Configuration Management Knowledge, Experience, and Skill

Whether through formal or informal training, one should have sufficient knowledge
of general configuration management concepts to begin becoming skilled at its
automation in the context of a project at the scale of software engineering.

The [IEEE Standard for Configuration Management in Systems and Software Engineering](https://ieeexplore.ieee.org/servlet/opac?punumber=6170933)
demonstrates that configuration management is crucial to engineering
projects, and lies are the heart of supporting practically all parts of a project's
life cycle.

In-depth familiarity with some of configuration management's concerns would be a
minimum prerequisite to being able to automate software configuration management.
Purely analyzing the full breadth of software configuration management, though,
it becomes clear that having a lot experience, knowledge, and skill in all
the related software engineering areas of knowledge would be most beneficial.

Pathways to acquiring a sufficient amount of know-how in configuration management
may be studies (formal or informal) in: computer science, software engineering,
and/or information systems.

This provides the 10 out of 10 classification of this skill in the technical domain.

### Foundations: A Propensity for Problem Solving

While IEEE Standard 828 offers a blueprint for many of the necessary concerns needing
coverage in software configuration management, it does so only in a shallow, generalized
form. Put another way, given that each project is unique, it is necessary to have
individuals providing the lower-level services of either manually doing all of the
configuration management, or, finding clever ways to automate as much of those tasks
as possible.

It takes a lot more detailed knowledge and enough experience in order to tailor
solutions out of the rough guidelines of what goes into an automated software configuration
management system, let alone a manually operated one.

The basis for acquiring the first degree of experience would be a personal drive
(whether internally realized or externally mandated) to solve complex problems,
especially along multiple dimensions of concern as shall be discussed later. The
basis to remain employed in software configuration management would be consistently
delivering positive results by solving a practically never-ending series of challenges
needing solutions.

An illustrative example of this would be about "time". Suppose there is a relatively
simple software project involving client-server communications secured using
an algorithm that incorporates the current time (+/- some margin) for security. Initially, an
automated software configuration management system works brilliantly. Then,
suddenly, all of its alerts fire off. The culprit? The clocks between the systems
under test have been drifting apart slowly until the day the "surprise bomb"
causes chaos in an otherwise perfectly functioning system. Without having ever
seen or heard about "clock drift" interference before, it would take some
tenacious problem solving skill to discern the root cause of the issue and
resolve it. An overview of more clock issues is provided by Marco Platania's
"[Clock Synchronization](http://www.cnds.jhu.edu/~platania/index_files/clock_sync.pdf)"
presentation.

Of course, there are also many problems in SCM that operate on multiple facets
and concerns. For instance, making trade-offs between "perfect" and "good enough"
solutions in order to meet various pressures like contracted delivery dates,
economics, societal expectations, best practices, professionalism, etc.

For these reasons, essentially the constant need to get some grasp on the "big
picture" (ex: communications are secure) of the project while concurrently solving many
"small detail" issues (ex: clocks are synchronized), this skill is marked 10 out
of 10 as a conceptual skill.

### Foundations: People Skills

In performing the skill automating software configuration management systems,
there is fundamentally always a give-and-take negotiation between indivuals requesting
filling up the "problems" stack, and those chipping away at that with "solutions".
Being on the "solution" side of the equation, it is of the utmost importance
for a practioner of SCM automation to be mindful of the _expectations_ being
set. SCM has been highlighted as crucial to the success of systems and software
engineering projects. Consequently, an SCM automation practioner will certainly
be center stage when things go positively or negatively. To chart a respectable
course and continuously build positive relationships no matter the results would
require a fairly significant amount of negotation know-how.

Negotiation is just one soft skill required, among many others, for success in
SCM automation. There is a lot of human relationship management required when in
a role focused automating SCM.

Because of its critically to a team often consisting of many different specialists
having many different concerns, the practioner of automating software configuration
management really needs a high degree of people human relation skills, getting
it an 8 out of 10 score in that domain. A fairly high order because of its
potential impact if relationships are soured, but, not maxxed out because most
of the active working time is spent "in the trenches" performing software development
towards making the automations a reality.

### Specialities: Software Development Skill

The automation of software configuration management is essentially a form of meta-project
that supports the primary project. Seen this way, individuals tasked with producing
the automated software configuration management need to be software developers themselves.

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
the concern is with operating the same software concurrently over multiple computer
systems (for example: 1 ARM-based server vs 1000 ARM-based servers).

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

- Dev(Sec)Ops/CICD Developer/Engineer
- Software Release Developer/Engineer

Generalists may also be tasked with various components of automating SCM to
some degree:

- Software Developer/Engineer (general-purpose)

Some roles are less likely to be responsible for the automation of a project's
software configuration management pipelines, but there must certainly be cases
where it's a core function of their job, depending on their organization's
attribution of responsibilities to job titles. These include roles like:

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

"Integrated devops toolchain for continuous integration/continuous delivery with Jenkins"
is a representative example of a small-scale demonstrative of the central ideas
behind automating software configuration management.

<iframe width="560" height="315" src="https://www.youtube.com/embed/ZUmPMXfHtVo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Role of Academia or Industry in Cultivating the Skill

### In Academia

It can be said that academia's services to society may be subdivided into
theoretical and practical curriculums. This is evidenced by the existence
of: traditional progressions through "high school", "bachelor degree",
"master degree", and "doctorate" (theoretical track); and, focused "trade school" programs with
diplomas; and, even apprenticeship systems (practical track) -- at least for
_Western World_ societies. Other forms of modern academia shall be excluded as
they are presently foreign to this author.

The blending of traditional and practical academia can be recognized, too. This
separation into two categories is to showcase two ends of a spectrum towards
cultivating the skill of automating software configuration management.

#### Theoretical Track

The theoretical academic world's role in cultivating this skill would largely
be focused on research, analysis, and documentation of what the practices of
automating SCM entail. This skill would generally not a primary topic of concern
in a general-purpose, software engineering curriculum and it may even be hard
to find courses directly focused on software configuration management. Neither
Concordia University, McGill University, University of Waterloo, nor MIT presently
have courses specially focused on SCM. However, there are plenty of books in
their libraries about the various "commercial grade" tools typically employed
in software configuration management. Why is that so?

One might suppose that the craft of SCM itself is presently in flux with a
plethora of competing tools and philosophies available. Every so often, a brand
new, shiny utility is born and competes for market share. It may be that the
lack of absolute, unwavering "best practice" in SCM subjects is leaving the topic
generally untouched as teachable/testable course.

That stated, however, it can be suggested that traditional academia's role, then,
could be further research and develop the art of scm; and even more specifically,
its automation. Maybe, academia can take cues from industry and take steps towards
applying automated software configuration management into how it manages its
ever-growing library of virtual courses in an "eat your own dogfood" fashion.

#### Practical Track

In the practical academic realm, and, towards its most extreme implementation,
the role of the academic institutions would be to merely have its students
learn the use of specifically selected SCM tools, test their capability to
craft solutions to prepared problems, stamp their attestations, and send them
off into the world armed with their latest and greatest gadgets, ready to
tactically diagnose puzzles and disarm them with deftly practiced, perfectly precise,
prescribed solutions. Of course, that's largely the same of what we expect from
medical doctors for most of our common ails. For the rest, society may choose
to rely on maintaining a complementary arm of theoretical researchers ever-working
on cutting-edge issues in the domain of SCM.

### In Industry

It almost goes without saying that any software-intensive industry would do well
to immediately employ automated SCM. The often-envisioned future of automation,
coupled with the increasing reliance on software to drive that automation, rather
than a reliance on strictly hardware, is simply driving society in that general
direction.

By and large, many of the largest players in the industrial world are already
advocating a multitude of options towards automating SCM. It is typical to find
the likes of [IBM touting](https://www.ibm.com/topics/automation) guides and tutorials
on specific SCM tools and methods. That is, rather obviously, because they aim to
maintain and advance their own positions as market leaders.

Whereas automating physical processes produced the
[industrial revolution](https://en.wikipedia.org/wiki/Industrial_Revolution),
we can confidently say that the automation of software processes will further
propel the information revolution, also known as [Industry 4.0](https://en.wikipedia.org/wiki/Fourth_Industrial_Revolution),
that society is currently building up. That is because given the explosion
of information available, novel software solutions will be needed to handle
sifting through all of that for us. The production of the most complex of
those software would require relying even more on automated software configuration
management to orchestrate their creating, testing, maintenance and even their
shut down -- imagine a scenario where a software fundamental to society needs
to be terminated and a changeover to a newer, better system must be executed
without fail; for instance, involving a nuclear power plant and its risk of
producing a catastrophic disaster if it goes through a meltdown; or, some kind
of digital currency system that becomes the de-facto norm and cannot tolerate
accounting faults at large-scale, hypothetically.

## Tools Supporting the Skill

There are many tools that contribute towards software configuration management,
from low-tech things all the way to complex hardware-software systems and processes.

In the low-tech realm, simple things such sticky notes would be legitimate tools
for keep track of certain goals, tasks, targets, or whatever else might be needed.
The humble sticky note is even commonly used in agile methodologies during
various ceremonies and activities - notably in [Kanban boards](https://www.atlassian.com/agile/kanban/boards).

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
and continuous deployment rely on code repositories as a source of truth.

A sampling of commonly employed repository software follows:

- [Git](https://git-scm.com/)
  - Arguably the finest repository system.
- [Mercurial](https://www.mercurial-scm.org/)
  - May be an alternative to Git.
- [Perforce](https://www.perforce.com/)
  - Has a claim to fame in handling "binary" files.
- [Subversion (SVN)](http://subversion.apache.org/)
  - Arguably one of the worst repository systems. It is advised that
    effort should be spent into convincing any SVN advocates to change their
    mind and learn to use better tools.

### Automation of SCM

- [Jenkins](https://www.jenkins.io/)
  - Free; open-source; self-hosted; packaged as a cloud service, too.
- [TravisCI](https://travis-ci.com/)
  - Primarily an expensive cloud service.
- [GitLab CI/CD](https://about.gitlab.com/stages-devops-lifecycle/continuous-integration/)
  - Integrated CICD packed along with a web frontend to Git repositories and more.

### Everything Else

There is also an very large domain of supporting tools involved in the information
technology aspects of SCM. Without naming specific tools, we can at least outline
some samples of additional, typical concerns:

- Backup and Disaster Recovery
- Testing
- Project Management
- Documentation
- Translation
- Monitoring
- Alerting
- Data Mining
- Business Intelligence
- Archiving, Long Term and Short Term
- Release Management
- Marketing
- Sales
- Inventory
- Logistics
- _... and more!_

In short, if it's something worthwhile automating as part of software configuration
management, it will become a cross-functional utility to plug into the project.

## Skill Self-Assessment (My Skill Score (1 – 10) and Reasons for Self-Assigned Score)

...

## References

...