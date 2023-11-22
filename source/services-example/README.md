# ServicesExample

This project is an example of services in angular and how the services can be utilized in an angular application in components, services etc.
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## What is services in Angular
In Angular, services are a way to organize and share code across different parts of your application. Services in Angular are a special kind of object that can be injected into components, directives, and other services, providing a way to encapsulate functionality that can be reused and shared throughout the application.

## Why do we need services in angular
`Reusibility` - The main aim of angular services is to centralization. It help to reuse the code through out the application in various component, services.
`Dependency Injection` - Angular has a built-in dependency injection system that allows you to inject instances of services into components or other services
`Singletone` - By default, Angular services are singletons, meaning that there is only one instance of a service created and shared throughout the application
`Hierarchical` - It follows the concept of top to down object share. If your servives are already defined in the App module then we can use that same object in any services or components based on application need.

## What is dependency injection in Angular and usage
It is the concept of managing the components & services throughout the application. It is a way to provide a component with the services or other object it needs whenever it's required. 
`@Injectable` decorator is used to annotate a class so that Angular can identify it as a candidate for dependency injection. 

## What is Hirerchical injection in angular
Angular follows the hirerchical injection concept which means based on the application need we can share the sevices object through the application. For example if we want a single logging object should be shared through out the application then we can defined it in the root component like app-module then automitacally the child sub components and services will get the object reference of logging
So the hirerchical structure is - app-module --> app-component --> child components ...

## How to inject from service to service
Since service class does not contain the selector or do not have defination of the other services, so the best way to do is @injectable which helps to communicate between two services. 

## Injection between components
services injection can be achieve between two components. The service which both the components whats to share can define the EventEmmiter. Now one components can register the service another one can subscribe the event.
