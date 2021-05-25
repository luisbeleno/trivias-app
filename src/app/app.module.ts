import { DashboardModule } from './components/dashboard/dashboard.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AppRoutingModule } from './app-routing.module';
import { environment } from './../environments/environment';
import { SharedModule } from './components/shared/shared.module';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//// Components
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';



@NgModule({
  declarations: [
    AppComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    BrowserAnimationsModule,
    DashboardModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
