import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule  } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar'; 
import {MatListModule} from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';
import { MenuComponent } from './menu/menu.component';
import { DishDetailComponent } from './dish-detail/dish-detail.component';


import {  DishService } from './services/dish.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component'

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishDetailComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [DishService],  
  bootstrap: [AppComponent],
  
})
export class AppModule { }
