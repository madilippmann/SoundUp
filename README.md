# SoundUp
 
## Link to live site

Hosted on Heroku: [SoundUp](https://soundup-app.herokuapp.com/)

## Description

Inspired by OpenTable, SoundUp is a platform where users can explore and hire musicians for gigs and events.

## Index
| [Features List](https://github.com/madilippmann/SoundUp/wiki/features-list) | [Database Schema](https://github.com/madilippmann/SoundUp/wiki/database-schema) | [Backend API Routes](https://github.com/madilippmann/SoundUp/wiki/backend-api-routes) | [Frontend Routes](https://github.com/madilippmann/SoundUp/wiki/frontend-routes) | [Redux Store](https://github.com/madilippmann/SoundUp/wiki/redux-store-state) | [User Stories](https://github.com/madilippmann/SoundUp/wiki/user-stories) | [Wireframes](https://github.com/madilippmann/SoundUp/wiki/wireframes) |




## Technologies

SoundUp was built using the following technologies:
<br>
<br>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" style="width:60px;" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" style="width:60px;" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" style="width:60px;" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" style="width:60px;" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" style="width:60px;" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlalchemy/sqlalchemy-original.svg" style="width:60px;" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg" style="width:60px;" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg" style="width:60px;" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" style="width:60px;" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original-wordmark.svg" style="width:60px;" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain-wordmark.svg" style="width:60px;" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain-wordmark.svg" style="width:60px;" />
<!-- <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" style="width:60px;" /> -->



## Getting Started
To see SoundUp live, please click the link provided above.
To run SoundUp locally, please follow these steps:
<!-- DISCLAIMER: you must be able to create an AWS S3 bucket in order to properly store images/audio files that are uploaded to the site. Upload functionality will not work without it -->
  <li>Clone the repository with  </li> 
  
    git clone https://github.com/madilippmann/SoundUp.git
    
  <li>Create a database and database user. If using psql, the commands would be</li>
  
    psql
    CREATE USER soundup_app WITH PASSWORD <password> CREATEDB;
    CREATE DATABASE soundup_dev WITH OWNER soundup_app;
    
  <li>Navigate to the backend folder and install python packages </li>
  
    pipenv install
    pipenv shell
  
  <li>Create and seed database with </li>
  
    flask db upgrade
    flask seed all
    
  <li>Start the server with </li>
  
    flask run
    
  <li>Next, navigate to the react-app folder and run </li>
  
    npm install
    
  <li>Start the app with </li>
  
    npm start
    
  

  
