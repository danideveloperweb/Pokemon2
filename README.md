<div align="center"><img width="650" alt="portadaPokemon" src="https://user-images.githubusercontent.com/91413466/227765846-d738e625-5133-457a-984c-63f84470af86.png"></div>

# Pokemon

## Description 

In this project, a SPA is being built in which only one page with Pokemon cards will be displayed. The cards are responsive using scss and bootstrap, and a navbar and footer component have also been created. The page has a multilanguage function. A fake database has been created in the module to assist the service that will inject the information.

## Main features

The Singleton design pattern is a creational pattern that guarantees that a class has only one instance and provides a global access point to it. In this project, this design pattern has been used because we load the services from the providers with a single instance.

The Factory Method pattern has also been used to introduce multilanguage functionality. In this case, the creation of the object is passed through a class, which in this case is HTTP. Behind the scenes, it has a static create method that creates a translate loader and an HTTP client. For the multilanguage, two JSON files were used to translate labels.

The card information is stored in two arrays, one in English and one in Spanish.

Mixin is being used in SCSS, which is a technique that allows for code reuse where a class incorporates methods and properties from another class without inheriting from it. Instead of inheriting from a single base class, a class can incorporate functionalities from one or several mixins, allowing the creation of classes with specific combinations of behaviors.

Bootstrap has been used to make the application responsive and aesthetically appealing.

# Access to the project

Clone this repository

`git clone https://github.com/danideveloperweb/Pokemon2.git`

Install dependencies

`npm install`

Run the app

 `ng serve -o`

Navigate to 

`http://localhost:4200/`

# As you can see

This gif shows what the project looks like visually.

![ezgif com](https://user-images.githubusercontent.com/91413466/228845959-b4b18f2a-a0ef-456b-9277-455680b2edba.gif)


## Access to the web Url

https://pokemon2-sepia.vercel.app/

## Technologies used

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.4.

TypeScript 64.6%

SCSS 25.0% , Mxins, Bootstrap.

HTML 10.4%

# License

©Danideveloperweb


