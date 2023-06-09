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

<div align="center">
  
  <br>
  
  <img style="width:700px;"  src="https://i.ibb.co/CwXvnDP/2.png">
  <img style="width:700px;" src="https://i.ibb.co/CMq9ZsJ/1347-743.png">
  
  <br><br>
  <img style="width:350px; height:660px;" src="https://i.ibb.co/gW78QqQ/325-662.png">
  <img style="width:350px; height:660px;" src="https://i.ibb.co/pWR2Vm4/z.png">

  <h3 align="center"><b>You can check out our webpage here:</b></h3>
  <h3 align="center"><a href="https://career-watch.web.app/" target="_blank" rel="noopener noreferrer"> :bar_chart: Career Watch :memo: </a></h3>
  <p  align="center"><a href="#" target="_blank" rel="noopener noreferrer"> <img src="https://img.shields.io/badge/Video Preview%20-%23FF0000.svg?&style=for-the-badge&logo=YouTube&logoColor=white"/></a></p>
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

- You can read API docs <a href="http://cwapidocs.s3-website-us-east-1.amazonaws.com/" target="_blank">here</a>.

#### 👉🏻 Serverless Architecture ☁️

- The application is modularized into three lambda functions, by means of cloud formation using SAM. <br>
- The <b>first lambda</b> executes the registration and authentication of new users and returns a JWT.<br> 
- The <b>second lambda</b> is in charge of authorization , which verifies the existence of the token in the "Authorization" header and its validity, which can be generated by the registration lambda or come from a third party provider such as Google through Oauth2.0, and generates an IAM policy to allow the execution of the third lambda.<br>
- The <b>third lambda</b> works under proxy protocol, and is where the application endpoints that call the business logic are located, which in turn communicates with a Postgre database in RDS through a RDS proxy.<br>
- The three lambdas generate the logs in CloudWatch and their environment variables are managed by the AWS secrets manager.<br>

<br>

<img src="https://docs.aws.amazon.com/images/apigateway/latest/developerguide/images/custom-auth-workflow.png">

#### 👉🏻 Built with 🛠️

![IntelliJ IDEA](https://img.shields.io/badge/IntelliJIDEA-000000.svg?style=for-the-badge&logo=intellij-idea&logoColor=white)
![Java](https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=java&logoColor=white) 
![Spring](https://img.shields.io/badge/spring-%236DB33F.svg?style=for-the-badge&logo=spring&logoColor=white)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![Hibernate](https://img.shields.io/badge/Hibernate-59666C?style=for-the-badge&logo=Hibernate&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)
![Swagger](https://img.shields.io/badge/-Swagger-%23Clojure?style=for-the-badge&logo=swagger&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)

#### 👉🏻 Developers 👨🏻‍💻

| <img src="https://avatars.githubusercontent.com/u/83373185?s=400&u=8a6f208010656f54fe828ab92cfebbe430e9f019&v=4" width=100>| <img src="https://avatars.githubusercontent.com/u/93452642?v=4" width=100>| 
|:-:|:-:|
| **Emiliano Escobedo**| **Brayan Rodallega**|
| <a href="https://github.com/EmilianoEscobedo"><img src="https://img.shields.io/badge/github-%23121011.svg?&style=for-the-badge&logo=github&logoColor=white"/></a> <a href="https://www.linkedin.com/in/emiliano-escobedo/"><img src="https://img.shields.io/badge/linkedin%20-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white"/></a> | <a href="https://github.com/brayanrodallega"><img src="https://img.shields.io/badge/github-%23121011.svg?&style=for-the-badge&logo=github&logoColor=white"/></a> <a href="https://www.linkedin.com/in/brayanrodallega/"><img src="https://img.shields.io/badge/linkedin%20-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white"/></a> 

<br><br>

## ✔ FrontEnd

#### 👉🏻 Task List ✅

- Development of front-end reactive React app.
- Implementation of UX/UI designs.
- Implementation of security architecture with JWT interceptors.
- Connection with REST API.
- Deployed in Firebase hosting.

#### 👉🏻 Code Standards 📜
    
- Name React components using PascalCase. For example: UserCard, LoginForm.
- Use meaningful and descriptive names for variables, functions, and components.
- Separate concerns and maintain a modular structure for your code. Each component should have its own file.
- Organize components into logical folders based on their functionality or feature.
- Use camelCase for variable and function names. For example: firstName, getUserData().
- Utilize reusable components whenever possible to avoid code duplication.
- Follow the recommended file structure for React projects, separating components, styles, and other resources into their respective directories.
- Utilize React hooks and functional components for new development whenever possible.
- Ensure responsive design and cross-browser compatibility for a consistent user experience.
- Optimize performance by following best practices such as lazy loading, code splitting, and efficient rendering techniques.
- Prioritize code readability and maintain a consistent coding style throughout the project.
- Handle errors and exceptions gracefully, providing helpful error messages to users when necessary.
- Use localization techniques for handling strings and messages that need to be translated or externalized.

#### 👉🏻 Built with 🛠️

![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![React](https://img.shields.io/badge/react-%23202⭐⭐⭐2a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Firebase](https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase)

#### 👉🏻 Developers 👨🏻‍💻

| <img src="https://avatars.githubusercontent.com/u/84945745?v=4" width=100>| <img src="https://avatars.githubusercontent.com/u/60641358?v=4" width=100>| <img src="https://avatars.githubusercontent.com/u/62000049?v=4" width=100>|
|:-:|:-:|:-:|
| **Nicolas Roberto**| **Facundo Ramirez**|**Agustin Soleti**|
| <a href="https://github.com/nicolasroberto"><img src="https://img.shields.io/badge/github-%23121011.svg?&style=for-the-badge&logo=github&logoColor=white"/></a> <a href="https://www.linkedin.com/in/nicol%C3%A1s-roberto/"><img src="https://img.shields.io/badge/linkedin%20-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white"/></a> | <a href="https://github.com/Jiao-lin"><img src="https://img.shields.io/badge/github-%23121011.svg?&style=for-the-badge&logo=github&logoColor=white"/></a> <a href="https://www.linkedin.com/in/facundo-ramirez-cambareri-4a426b1a5/"><img src="https://img.shields.io/badge/linkedin%20-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white"/></a> | <a href="https://github.com/aguusoleti"><img src="https://img.shields.io/badge/github-%23121011.svg?&style=for-the-badge&logo=github&logoColor=white"/></a> <a href="https://www.linkedin.com/in/aguusoleti/"><img src="https://img.shields.io/badge/linkedin%20-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white"/></a> |
<br>

## ✔ Testing 

#### 👉🏻 Task List ✅

- Perform design and integration testing 
- Testing REST API endpoints
- Testing front end components and back end integration

#### 👉🏻 Documentation 📜

- You can read testing docs <a href="https://daleman.notion.site/Test-Template-18af0cb0011a4dd4afdb8a729824f315?pvs=4" target="_blank">here</a>.

#### 👉🏻 Tested with 🛠️

![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)
![Selenium](https://img.shields.io/badge/-selenium-%43B02A?style=for-the-badge&logo=selenium&logoColor=white)

#### 👉🏻 Testers 👨🏻‍💻

| <img src="https://avatars.githubusercontent.com/u/85188798?v=4" width=100>|
|:-:|
| **Dolores Alemán**|
| <a href="https://github.com/dolores91"><img src="https://img.shields.io/badge/github-%23121011.svg?&style=for-the-badge&logo=github&logoColor=white"/></a> <a href="https://www.linkedin.com/in/dolores-aleman/"><img src="https://img.shields.io/badge/linkedin%20-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white"/></a> |
<br>

## ✔ UX/UI Design

#### 👉🏻 Task List ✅

- Design brand identity and logos
- Design low quality prototypes and mockups
- Define colors, fonts and styles
- Move to medium quality and develop components
- Copy-writing

#### 👉🏻 Built with 🛠️

![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)
![Adobe Illustrator](https://img.shields.io/badge/adobe%20illustrator-%23FF9A00.svg?style=for-the-badge&logo=adobe%20illustrator&logoColor=white)
![Adobe Photoshop](https://img.shields.io/badge/adobe%20photoshop-%2331A8FF.svg?style=for-the-badge&logo=adobe%20photoshop&logoColor=white)
![Canva](https://img.shields.io/badge/Canva-%2300C4CC.svg?style=for-the-badge&logo=Canva&logoColor=white)

#### 👉🏻 Designers 👨🏻‍💻

| <img src="https://ca.slack-edge.com/T032Y55Q6VC-U04F9DLU37U-365a35d22506-512" width=100>|
|:-:|
| **Gerardo Vargas**|
| <a href="https://www.behance.net/geravargas"><img src="https://img.shields.io/badge/Behance-1769ff?style=for-the-badge&logo=behance&logoColor=white"/></a> <a href="https://www.linkedin.com/in/geravargas/"><img src="https://img.shields.io/badge/linkedin%20-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white"/></a> |

<br>

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

| <img src="https://avatars.githubusercontent.com/u/75045716?v=4" width=100>|
|:-:|
| **Billy Campagnoli**|
| <a href="https://www.linkedin.com/in/billy-campagnoli-221621223/"><img src="https://img.shields.io/badge/github-%23121011.svg?&style=for-the-badge&logo=github&logoColor=white"/></a> <a href="https://www.linkedin.com/in/billy-campagnoli-221621223/"><img src="https://img.shields.io/badge/linkedin%20-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white"/></a> |
<br>
<hr>
<br><br>

