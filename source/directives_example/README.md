# DirectivesExample

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Difference between structural and attribute directives
Structural directives change the structure of the DOM by adding, removing, or manipulating elements. They are typically used with an asterisk (*) prefix in the HTML template. `Examples: *ngIf, *ngFor, and *ngSwitch.`
Attribute directives change the appearance or behavior of an element, component, or another directive `Example: [ngClass]="{code}" or [ngStyle="{code}"]`

## Create you own Attribute directive
To create a custom attribute directive follow the steps -
`-> Create a Directive class and provide the selecto which is basically the attribute directive name`
`-> define the behaviour of the directive either in constructor or OnInt`
`-> Example - this.elementReference.nativeElement.style.backgroundColor = 'pink'`
`-> Where the elementReference is the object of ElementRef present in Angular core`
`-> Now use the directive - <p appBasicHighlight>This is the custom irective</p>`

## Creating the directive from CLI
A Attribute directive can be created via Angular CLI using the command `ng g d better-highlight/better-highlight --skip-tests`

## @HostBinding
@HostBinding is used to bind a directive property to a host element property. It allows you to dynamically set properties of the host element based on changes in the directive.

## Binding to a directive properties
We can bind the directive properties with the help of @HostBinding and @HostListener. In the Better-highlight.directive class I have implamented a directive property binding where we can set the color dynamically by setting the property to our custom directive.

## Custom structural directive
We can create the structural directive as same like Attribute directive the only difference is the structural directive needs to access the DOM so we have to get the object of TemplateRef and ViewContainerRef. In the custom-highlight.directive I have created a custom directive which is used for handling the condition of odd and even based on that the list will be visiable.
