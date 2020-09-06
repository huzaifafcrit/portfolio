import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { ToastrModule } from 'ngx-toastr';

import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { SidebarComponent } from './core/sidebar/sidebar.component';
import { InfoWrapperComponent } from './components/info-wrapper/info-wrapper.component';
import { AreasOfInterestComponent } from './components/info-wrapper/areas-of-interest/areas-of-interest.component';
import { ContactComponent } from './components/info-wrapper/contact/contact.component';
import { TechnicalSkillsComponent } from './components/info-wrapper/technical-skills/technical-skills.component';
import { AboutMeComponent } from './components/info-wrapper/about-me/about-me.component';
import { UserInfoComponent } from './components/info-wrapper/user-info/user-info.component';
import { TimelineComponent } from './components/info-wrapper/timeline/timeline.component';
import { TimelineDetailsComponent } from './components/info-wrapper/templates/timeline-details/timeline-details.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ProjectsComponent } from './components/info-wrapper/projects/projects.component';
import { CertificatesComponent } from './components/info-wrapper/certificates/certificates.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    InfoWrapperComponent,
    AreasOfInterestComponent,
    ContactComponent,
    TechnicalSkillsComponent,
    AboutMeComponent,
    UserInfoComponent,
    TimelineComponent,
    TimelineDetailsComponent,
    ProjectsComponent,
    CertificatesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatInputModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatIconModule,
    ToastrModule.forRoot(),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
