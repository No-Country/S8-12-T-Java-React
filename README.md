<div align="right">
  
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/) [![Version](https://badge.fury.io/gh/tterb%2FHyde.svg)](https://badge.fury.io/gh/tterb%2FHyde)  [![GitHub pull requests](https://img.shields.io/github/issues-pr/cdnjs/cdnjs.svg?style=flat)]()  [![PR's Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat)](http://makeapullrequest.com)  [![GitHub contributors](https://img.shields.io/github/contributors/cdnjs/cdnjs.svg?style=flat)]()

</div>

<div align="center">
<br>
<img align="center" src="https://i.ibb.co/X4K9ScM/banner.png">
<br>
<h2>An app for job seekers who want to nail it. Get your resumes, job applications, and schedule organized with Carreer Watch.</h2>

  <br>
  
  ### Introducing Career Watch - your ultimate job search companion. With this game-changing project, you can take your job hunt to the next level and ensure you're on the right track.
 
  <br>
  
</div>

<p>
Career Watch empowers you to create impressive resumes, organize your job applications into stages, and take charge of your schedule. But it doesn't stop there. You have the freedom to add specific tasks to each application, such as sending emails to HR or studying key topics for interviews. Stay on top of your game with handy reminders that keep you focused and motivated.
<br><br>
But here's the real game-changer: Career Watch lets you measure your progress with powerful metrics. For instance, imagine you've submitted 50 applications, received interview calls from 5 companies, and made it to technical tests with 2 of them. These metrics provide valuable insights, helping you reassess and fine-tune your job search strategy based on real results.
<br><br>
Say goodbye to guesswork and hello to a data-driven approach to your job search. Career Watch revolutionizes the way you navigate the job market, helping you make informed decisions that bring you closer to your dream career. Get ready to unleash your potential and land that perfect job with Career Watch.
</p
<br>
</div>
<br><br>
  
## ✔ BackEnd

#### 👉🏻 Task List ✅

- Development of REST API with Java and Spring-Boot.
- Create Postgre Database on AWS RDS and configure in a Proxy RDS.
- Deploy API in API Gateway, with lambda proxy integration.
- Build specific lambda for register and autentication.
- Authorization procces through API gateway and lambda custom authorizer. 
- Users validation with JWT built and signed in the application, or Oauth2.0 from Google.
- Creating filters with regular expressions and JPA/Hibernate rules.
- API documentation on Swagger3.
- Endpoints and services fully tested. 
- Containerization in docker to run locally.

#### 👉🏻 Code Standards 📜
- Keep in mind rules from [Google Java Style Guide](https://google.github.io/styleguide/javaguide.html).
- Code must be in English.
- The controllers should finish with suffix "Controller". Example: UserController.
- The services should finish with suffix "Service". Example: UserService.
- The repositories should finish with suffix "Repository". Example: UserRepository.
- The implementations of interfaces should finish with suffix "Impl". Example: UserServiceImpl.
- The DTOs should finish with suffix "Dto". Example: UserDto, UserRequestDto.
- Usage of DTOs is a must. Can have DTOs for request and response.
- Package names are in singular.
- The names of attributes/fields from Java classes must be written using camel case. Example: firstName.
- The name of columns in the entities must be written using underscore and uppercase. Example: FIRST_NAME. The name of the tables is always in plural, but the entity name should be in singular.
- Exceptions should be handled by an implementation of ControllerAdvice. 
- Messages to user can't be hardcoded them should be handled. Some refs [here](https://looksok.wordpress.com/2014/07/05/string-externalization-in-spring-3-1-with-messagesource-no-web-xml/) and [here](https://zetcode.com/spring/messagesource/). 
- If you add a new endpoint, make sure to set the role access for it in the WebSecurity class.

#### 👉🏻 Documentation 📜
- You can read API docs <a href="#" target="_blank">here</a>.

#### 👉🏻 Built with 🛠️

![Java](https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=java&logoColor=white) 
![Spring](https://img.shields.io/badge/spring-%236DB33F.svg?style=for-the-badge&logo=spring&logoColor=white)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![Hibernate](https://img.shields.io/badge/Hibernate-59666C?style=for-the-badge&logo=Hibernate&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)
![Swagger](https://img.shields.io/badge/-Swagger-%23Clojure?style=for-the-badge&logo=swagger&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)

#### 👉🏻 Developers 👨🏻‍💻


## ✔ FrontEnd

#### 👉🏻 Task List ✅

-
-
-
-
-

#### 👉🏻 Code Standards 📜

-
-
-
-
-
-
-
-
-
-


#### 👉🏻 Built with 🛠️

#### 👉🏻 Developers 👨🏻‍💻

## ✔ WorkFlow 

#### 👉🏻 Commits Format 📜
- Always create the branch from develop 
- The branch name format is: `feature/{jiraTicket#}`.
- The pull request title format is: `{jiraTicket#}: {jiraTitle}`. 
- The commits format is: `{jiraTicket#}: {commitDescription}`, Small commits are a nice to have.
- The pull request has to contain only the changes related to the scope defined in the ticket.
- Pull request should always be from your current branch to develop.

#### 👉🏻 Branches Format 📜
In the current repository you will see three diferent branches
- `main` -> this branch is only for productive versions, it has official release history.
- `develop` -> this branch serves as an integration branch for features. All features must start from this branch and after it's finished it gets merged back into develop.
For understanding more about git and how to work with different branches, I recommend to read about Gitflow workflow. [Here](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow) you have a little explanation that can serve as introduction.

#### 👉🏻 Scrum 🤝
- Sprints last one week.
- Two mandatory meetings with team leader per sprint.
- The maximum duration of the daily meeting is 15 min.
- Tasks without an epic are not allowed.
- Epics have to be backed by user stories.
- Tasks have to be assigned according to estimate.

#### 👉🏻 Used software 🛠️
![Jira](https://img.shields.io/badge/jira-%230A0FFF.svg?style=for-the-badge&logo=jira&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)

#### 👉🏻 Team Leader 👨🏻‍💻

<br>
<hr>
<br><br>

