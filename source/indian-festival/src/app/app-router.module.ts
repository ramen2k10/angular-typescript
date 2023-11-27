import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { AppModule } from "./app.module";
import { HomeComponent } from "./home/home.component";
import { FestivalsComponent } from "./festival/festivals/festivals.component";

const appRouters: Route[]=[
    {path:'', redirectTo:'home', pathMatch:'full'},
    {path:'home', component:HomeComponent},
    {path:'festival', component:FestivalsComponent}
]

@NgModule({
    imports:[
        RouterModule.forRoot(appRouters)
    ],
    exports:[
        RouterModule
    ]
})

export class AppRouterModule{}