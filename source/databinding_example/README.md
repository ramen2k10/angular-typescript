# DatabindingExample

Example of Angular data binding & custome event using @Input() and @Output().
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.9.  

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Project Desc
-> Create and store the a server and it's blue print
-> Mainly contains three component cookpit, server-element and app-module
-> For a list of server the server-element info will be display in the web page
-> When a new server info will be available the cookpit will pass it to the app-module

## Angular use case
-> The app-module component will loop over the entire server list and deliver details to the server-element component. `@Input() used to pass the info from parent component to child component`
-> app-cookpit component contains two event. when any event will be occour it will emit the event data to the app-module component using @Output.
->  `@Output() used to pass the info from child component to parent component`

## Angular local reference in template
Local reference - In angular if you want to refer any element reference to other element in the HTML template then we can use the concept the local reference concept. The use this reference value inside the type script file we can simply use `HTMLInputElement` object. 
`#ReferenceName` is used to define any reference in the template
`example --> <input type="text" class="form-control" #serverNameReference>`

## @ViewChild('elementRef) : 
`@ViewChild` is a decorator in Angular, it is used to access and interact with a child component or directive from a parent component. 
Example: `server-type component` class contains info about the server types. To use it in app module component we can create a ElementRef in the app-module HTML template. @ViewChild('elementRef') through this we can access the types. `@ViewChild('serverTypes') serverTypeElements: ServerTypeComponent;`