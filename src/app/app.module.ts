import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { RestuarentdashComponent } from './restuarentdash/restuarentdash.component';
import { HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component'
import {MatCardModule} from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialComponent } from './material/material.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { NgxPaginationModule } from 'ngx-pagination';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { NgToastModule } from 'ng-angular-popup';




@NgModule({
  declarations: [
    AppComponent,
    RestuarentdashComponent,
    LoginComponent,
    SignupComponent,
    MaterialComponent,
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    FilterPipeModule,
    NgToastModule
    
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
