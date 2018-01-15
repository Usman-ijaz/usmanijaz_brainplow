import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
// import {FormBuilder, FormGroup, Validators} from '@angular/forms';


import { NgModule } from '@angular/core';
import { RouterModule, Route} from '@angular/router';

import { AppComponent } from './app.component';
import { MyDataService } from './my-data.service';
import { HeroesComponent } from './heroes/heroes.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessageService } from './message.service';
import { MessagesComponent } from './messages/messages.component';
import { HeroService } from './hero.service';
import { ProductComponent } from './product/product.component';
import { MembersComponent } from './members/members.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import {DialogOverviewExampleDialogComponent, FormComponent} from './form/form.component';
import {MatCheckboxModule} from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatStepperModule} from '@angular/material/stepper';




import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import 'hammerjs';

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
    ContactComponent,
    FormComponent,
    DialogOverviewExampleDialogComponent

  ],
  imports: [
    MatButtonModule, MatCheckboxModule, MatInputModule, MatDialogModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatSelectModule,
    FormsModule,
    MatRadioModule,
    MatGridListModule,
    MatGridListModule,
    MatStepperModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
 path: '',
 component: HomeComponent
    },
    {
      path: 'about',
      component: AboutComponent
         },
         {
          path: 'form',
          component: FormComponent
             },
             {
              path: 'home',
              component:  HomeComponent
                 }

    ])
  ],
  providers: [MyDataService],
  bootstrap: [AppComponent],
  entryComponents: [DialogOverviewExampleDialogComponent]
})
export class AppModule {

}
