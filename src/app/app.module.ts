import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Route} from '@angular/router';

import { AppComponent } from './app.component';
import { MyDataService } from './my-data.service';
import { HeroesComponent } from './heroes/heroes.component';

import{ FormsModule} from '@angular/forms';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessageService } from './message.service';
import { MessagesComponent } from './messages/messages.component';
import { HeroService } from './hero.service';
import { ProductComponent } from './product/product.component';
import { MembersComponent } from './members/members.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    ProductComponent,
    MembersComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
 path: 'home',
 component: HomeComponent
    },
    {
      path: 'about',
      component: AboutComponent
         },
         {
          path: 'contact',
          component:ContactComponent
             }

    ])
  ],
  providers: [MyDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
