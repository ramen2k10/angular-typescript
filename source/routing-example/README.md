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
const appRoutes: Route[] = [
  {path: '', component: HomeComponent},
  {path: 'users', component: UserComponent},
  {path: 'servers', component: ServersComponent},
]
```

## What is Router link
The router link in angular is used to create the navigation link in your appliation. It's part of the Angular Router module and allows you to define links that navigate to different views within your application. The routerLink directive is typically applied to HTML anchor (`<a>`) 
### Example: 
```javascript
    <a routerLink="/servers">Servers</a>
    or
    <a [routerLink]="['users']">Users</a>
    also we can use 
    <a [routerLink]="['/user', userId]">Users</a>
    userId is a variable in your component.
```

## What is routerLinkActive property
In Angular, the routerLinkActive directive is used to apply a CSS class to an HTML element when the associated router link is active. It provides a way to visually highlight or style the link corresponding to the current route.
[routerLinkActiveOptions]="{exact:true}": This is an optional part that provides additional configuration options for routerLinkActive. In this case, it is specifying that the "active" class should only be applied when the route is an exact match. The {exact: true} option ensures that the "active" class is added only if the route is exactly equal to the specified routerLink. Without this option, a parent route would also activate the "active" class for its child routes
### Example:
```javascript
<li role="presentation" routerLinkActive="active"
        [routerLinkActiveOptions]="{exact:true}">
          <a routerLink="/">Home</a></li>
<li role="presentation" routerLinkActive="active"><a routerLink="/servers">Servers</a></li>
```


## Programatically navigate from one component to anothr using Router
Programatically we can provide the navigation in our application with the help of `Router Service`.
### Exmample:
```javascript
HomePage
<h4>Welcome to Server Manager 4.0</h4>
<p>Manage your Servers and Users.</p>
<button class="btn btn-primary" (click)="onNavigateServer()">NavigateServer</button>

HomePage component
constructor(private route: Router) { }

onNavigateServer(){
    this.route.navigate(['/servers']);
}
so witb the help of router servive we can navigate to any router link in our component

```
## Example of using the relative path dynamically in angular
Programatically we can use the relative path as well for navigation
```javascript
import { Router } from '@angular/router';
export class YourComponent {
  constructor(private router: Router) {}
  navigateToRelativePath() {
    this.router.navigate(['./servers'], { relativeTo: this.route });
  }
}
// this.route will provide the current selected path
```
## example of absolute and relative path example in Angular
The example of absolute path `<a routerLink="/home">Home</a>`  where as example of a relative path is like `<a routerLink="./user/123">User Profile (Relative)</a>`.
#### ./user 
Relative path refers to the currently loaded path
#### ../user
Relative path refers to the one level up from the currently loaded path

## Use route parameter dynamically
We can pass the parameter dynamically in the route link also
### Example:
```javascript
 {path: 'users/:id/:name', component: UserComponent},
 // http://localhost:4200/users/2/Ram - in this uri link the id is 2 and the name is Ram
```

## Fetch the parameter value in angular 
We can fetch the route parameter value in Angular using ActivatedRoute. It is a service that provides information about the route associated with a component that is loaded in an outlet. It contains information about the route, its parameters, data, and the URL segments
### Example:
```javascript
constructor(private route: ActivatedRoute) {
  this.route.params.subscribe(params => {
    const id = params['id'];
    // Do something with the id
  });
}

another one - UserComponent

export class UserComponent implements OnInit {
  user: {id: number, name: string};

  constructor(private router: ActivatedRoute) { }
  ngOnInit() {
    this.user = {
      id: this.router.snapshot.params['id'],
      name: this.router.snapshot.params['name']
    };
  }
}
UserComponentTemplate
<p>User with ID {{user.id}} loaded.</p>
<p>User name is {{user.name}}</p>
```
## Pass the query params in angular route
As same like `[RouterLink]` we also can use similar for query parameter and fragment
### Example
```html
App route:
{path: 'servers/:id/edit', component: EditServerComponent},

Html template(ServerComponent):
<a
    [routerLink]="['/servers',5,'edit']"
    [queryParams]="{allowEdit:'1'}"
    fragment="loading"
        href="#"
        class="list-group-item"
        *ngFor="let server of servers">
        {{ server.name }}
</a>
example Link - http://localhost:4200/servers/5/edit?allowEdit=1#loading
so here the link added with query parameter and also the fragment
```

## Featch quary parameter and fragment
We can use the query and fragment to navigate dynamically from one component to another
### Example:
```javascript
Home component template:
<button class="btn btn-primary" (click)="onNavigateServer(1)">NavigateServer</button>

Home Component:
export class HomeComponent implements OnInit {

  constructor(private route: Router) { }


  onNavigateServer(id: number){
    this.route.navigate(['/servers', id, 'edit'], {queryParams:{allowEdit:'1'}, fragment:'loading'});
  }
}
In this example we are trying to get a server details by sending the id as query parameter and a dummy fragment details.
```