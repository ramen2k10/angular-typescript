# RoutingExample

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## What is Angular Router
In angular `Router` is a powerful component that enables the navigation between the different parts of an angular application. Key features of angular router is - 
### Routes
Routes define the mapping between URLs and components. Each route specifies a component to display when the URL matches a certain pattern
### Router Outlet
The `<router-outlet>` directive acts as a placeholder where the router can dynamically insert the component associated with the current route
### RouterLink
This directive is used to create navigation links in your templates.
### Router Service
The router service is used for programmatic navigation within your Angular application
### Router Guards
Router guards allow you to run code before or after navigating to a route. For example, you can use a route guard to prevent access to a certain route unless certain conditions are met.

## Understanding of Routes in Angular with example
Routes define the mapping between URLs and components. Each route specifies a component to display when the URL matches a certain pattern. To do so we need to define the routes in our components let say app-module. Once we have defined the routes for out application then it is required to registered the routes.
### Example:
In app-module component we have defined the array `appRoutes` which contains the routes for our application. An it is registered with `RouterModule.forRoot(appRoutes)` specific code added in import.

```javascript
function example() {
  console.log("Hello, World!");
}
```

## What is Router link

## What is routerLinkActive property

## Programatically navigate from one component to anothr using Router

## example of absolute and relative path example in Angular

## Fetch route parameter dynamically

## What is observable

## Quary parameter and fragment in Angular

## Featch quary parameter and fragment
