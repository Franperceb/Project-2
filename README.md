# Recipes4You

By Jorge & Mariana

## About :smiley:

Recipes4You is a **responsive** web app that allows users to browse for online recipes, while beign able to take care of their health, as each recipe contains health, diet and caution labels, as well as calorie amount. 

### The structure

Recipes4You has three models:

```
User.js
```
```
Recipe.js
```
```
Comment.js
```
The Comment model is related to the Recipe model.

---

Furthermore, our app uses controllers and a series of different routes (admin routes, auth routes and recipe routes).


### Log in and Sign up

This app uses passport to encrypt passwords and authenticate and authorize users.

- The users can also use their Google accounts to sign up and log in.

### Roles

Our app has two types of roles: USER role and ADMIN role. 
- The USER can search for recipes, access to the recipe's details and make comments.
- The ADMIN can search for recipes and read them, as well editing, creating and updating them. 

He have created two accounts for you to checkout the user and the admin functionalities.
- **User account:**
username: user
password: 123

- **Admin account:**
username: admin
password: 123

*Note: The navbar has a + symbol, which allows the admin to create a new recipe. In case a normal user click on it, it will only redirect them to the home page.*

## Deployment

Our app is deployed with heroku.

## Checkout the app!

You can access our app from you smartphone, tablet or computer! Click [here](https://damp-caverns-97997.herokuapp.com/).


## Acknowledgments

Thanks to our TA's and lead teachers for all their patience and help :) :heart:
