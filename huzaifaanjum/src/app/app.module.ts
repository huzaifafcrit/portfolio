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
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressBarModule } from '@angular/material/progress-bar';

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
import { CertificateTemplateComponent } from './components/info-wrapper/templates/certificate-template/certificate-template.component';
import { ProjectDetailsTemplateComponent } from './components/info-wrapper/templates/project-details-template/project-details-template.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { SkillsComponent } from './components/info-wrapper/about-me/skills/skills.component';


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
    CertificatesComponent,
    CertificateTemplateComponent,
    ProjectDetailsTemplateComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatInputModule,
    MatChipsModule,
    MatToolbarModule,
    MatDialogModule,
    MatFormFieldModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatIconModule,
    ToastrModule.forRoot(),
    NgbModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
