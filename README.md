# Project Name

## Description

App to help NFP recycle tins and bottles.

## User Stories

-  **404:** As an anon/user I can see a 404 page if I try to reach a page that does not exist so that I know it's my fault
-  **Signup:** As an anon I can sign up in the platform so that I can start saving favorite restaurants
-  **Login:** As a user I can login to the platform
-  **Logout:** As a user I can logout from the platform so no one else can use it
-  **Add Donation** As a user I can add a donation of garbage, and somebody can come to pick them
-  **Pick Garbage** As a user I can reserve a certain collection
-  **Search Garbage** As a user I want to search garbage
-  **See storages** As a user I want to see where i can take the garbage to be recycled

## Backlog

User profile:
- see my profile
- upload my profile picture
- see other users profile
- list items the user is collected/donated
- list of events created by the user

Geo Location:
- add geolocation
- show collection points in a map
- show all storages in a map in the garbage list page

Appraisal:
- Show user all the actions that have improved the enviroment thanks to him

Events:
- Add Events with date and place where you need help to do something
- Confirm assistance of users


# Server

## Models

User model

```
username - String // required
email - String // required & unique
password - String // required
location - String // required
```

Garbage model

```
donator_name - String // required
name - String // required
number - Number // required
location - String //
status - String // default pending
```

Collection model

```
volunteer_name - String // required & unique
garbage - { type: Schema.Types.ObjectId, ref: 'Garbage' },
```

## API Endpoints (backend routes)

- GET /auth/me
  - 404 if no user in session
  - 200 with user object
- POST /auth/signup
  - 401 if user logged in
  - body:
    - username
    - email
    - password
  - validation
    - fields not empty (422)
    - user not exists (409)
  - create user with encrypted password
  - store user in session
  - 200 with user object
- POST /auth/login
  - 401 if user logged in
  - body:
    - username
    - password
  - validation
    - fields not empty (422)
    - user exists (404)
    - password matches (404)
  - store user in session
  - 200 with user object
- POST /auth/logout
  - body: (empty)
  - 204
- POST /donate
  - (500) server error
  - body:
    - username
    - name
    - number
    - location
    - status
- POST /collections
  - change status in garbage
  - body: (empty)
- GET /collections
  - body:
    - [donations with status pending]


## Links

### Trello/Kanban

[Link to your trello board](https://trello.com/b/WYgAmhr4/final-boss) or picture of your physical board

### Git

The url to your repository and to your deployed project

[Client repository Link](http://github.com)
[Server repository Link](http://github.com)

[Deploy Link](http://heroku.com)

### Slides

The url to your presentation slides

[Slides Link](http://slides.com)