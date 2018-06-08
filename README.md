## Stash App
A multiuser authenticated system for cataloging and categorizing makeup items and their uses.

## Motivation

          Lauren is a hobbyist who buys every red lipstick on impulse... not realizing
            she has backups for her backups in herotext makeup kit at home.

         Leah is professional on-site with a client who wants to recreate a stunning
            look from six months ago, but ...what was the shade she used in the socket that
            made everything pop?

         They both need StashApp to catalog their collections and looks for easy
            on-the-go access.
 
## Screenshots
![Welcome Page](https://i.imgur.com/uSJrkWW.png "Welcome Page")
![Onboarding Guide](https://imgur.com/qCpNkPm "On boarding guide")
![Registration](https://i.imgur.com/4rUSysw.png "Registration")
![Log In](https://i.imgur.com/dt2jRXE.png "Log In")
![Main Products View](https://i.imgur.com/cXQdQu0.png "Main products view")
![Products Search](https://i.imgur.com/xkkTULx.png "Products search")
![Product details with delete warning](https://i.imgur.com/BiZYfOd.png "Product details and delete warning")
![Add product form](https://i.imgur.com/FWrs6GQ.png "Add a product form")
![Edit product form](https://i.imgur.com/dAYyeQY.png "Edit product form")
![Look details](https://i.imgur.com/ocdm4ii.png "Looks details")
![Edit a look form](https://i.imgur.com/OvZo0CR.png "Edit a look form")

## Tech/framework used
Ex. -

<b>Front-End Built with</b>
- [React](https://reactjs.org)
- [Redux](https://reduxjs.org)

<b>Back-End</b>
- [Node.js](https://nodejs.org)
- [MongoDB](https://www.mongodb.com/)

Check out the backend code [on Github](https://github.com/katharinemc/stashApp)

## Features
- Server-side validation ensures identical duplicate products cannot be added.
- Users can view and search other user's content.
- Attempting to delete a product used in a look triggers a warning message. If user chooses to delete, the product will be removed from any Looks in which it is included.

Demo user is Katharine with password "password."  Can view data for user Cecilia.

## Code Example

Components are stored in two main folders.  LandingPage contains all components for unAuthenticated views of the application and UserDash contains the components which are viewed after authentication.  CSS files are contained in the component folders. Actions and reducers have separate foldres as seen in the skeleton structure below:

```
stashAppClient/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico

  src/
     actions/        
    landingPage/
    reducers/
    userDash/

    App.css
    App.js
    index.css
    index.js
```

