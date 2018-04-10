# QUIKSTARTER
[Quikstarter live app](https://quikstarter.herokuapp.com/#/)

Quikstarter is a single-page app made to clone features from kickstarter.com.  It utilizes a React\Redux frontend, Ruby on Rails backend, and a PostgreSQL database.  The app uses JS ES6, BCrypt for password salting and hashing, and Webpack for bundling.

![Home Page](https://raw.githubusercontent.com/afarahmand/kicks/master/Wireframes/screenshots/home_page.png)

## Features

### Home Page
The home page will filter the displayed projects by category based on the clicked tab.

### Project Creation
Signed in users are allowed to create projects.  Users not signed in are redirected away to the home page.

![New Project Page1](https://raw.githubusercontent.com/afarahmand/kicks/master/Wireframes/screenshots/new_project_page1.png)

![New Project Page2](https://raw.githubusercontent.com/afarahmand/kicks/master/Wireframes/screenshots/new_project_page2.png)

### Project Update
The new project page and the edit project page share the same project form component.  The component will dynamically render appropriate fields for a new project or when editing a project.  Only the user who created the project is able to edit it, other users, whether signed in or not, are redirected away.

![Project Show w/user creator](https://raw.githubusercontent.com/afarahmand/kicks/master/Wireframes/screenshots/project_show_edit_delete.png)

### Project Show
On the project show page, users can view details for a project.  If a user is the creator of the project and signed in, the page renders buttons for project edit and deletion.

![Project Show w/o user creator](https://raw.githubusercontent.com/afarahmand/kicks/master/Wireframes/screenshots/project_show.png)

### Project Deletion
On the project show page, a signed in user who created the shown project, is presented a delete button.

### Discover
On the discover page, a user can use dropdown text boxes to show projects from a specific category and to sort those projects in accordance with a criteria of their choice.

![Discover page](https://raw.githubusercontent.com/afarahmand/kicks/master/Wireframes/screenshots/discover_page.png)

### Search
I utilized a live search feature that automatically issues AJAX requests to receive search results from the backend whenever the user releases a key.  It works well for this app but would normally be too resource intensive.  A more computationally efficient way to implement this would be to send an AJAX request when a keypress has not been detected within a certain amount of time.

![Search page](https://raw.githubusercontent.com/afarahmand/kicks/master/Wireframes/screenshots/search.png)

## Future Features
* user profile
* user can back projects and be eligible for rewards

* user show page: shows backed projects
* new reward page
* backings controller [create, index?]
* rewards controller [create]
* Fix project show page img size
* Fix some jbuilder views
