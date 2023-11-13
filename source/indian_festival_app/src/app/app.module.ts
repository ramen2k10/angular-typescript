import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FestivalsComponent } from './festivals/festivals.component';
import { SeasonalComponent } from './festivals/seasonal/seasonal.component';
import { FestivalListComponent } from './festivals/seasonal/festival-list/festival-list.component';
import { FestivalItemComponent } from './festivals/seasonal/festival-list/festival-item/festival-item.component';
import { RegionalComponent } from './festivals/regional/regional.component';
import { FestivalDetailsComponent } from './festivals/festival-details/festival-details.component';
import { ManageItemComponent } from './festivals/festival-details/manage-item/manage-item.component';
import { CustomFestivalComponent } from './custom-festival/custom-festival.component';
import { FormsModule } from '@angular/forms';
import { FestivalInMonthComponent } from './festivals/festival-in-month/festival-in-month.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FestivalsComponent,
    SeasonalComponent,
    FestivalListComponent,
    FestivalItemComponent,
    RegionalComponent,
    FestivalDetailsComponent,
    ManageItemComponent,
    CustomFestivalComponent,
    FestivalInMonthComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
