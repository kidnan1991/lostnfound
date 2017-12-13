import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { LocationStrategy, HashLocationStrategy, APP_BASE_HREF } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule, Route } from '@angular/router';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MenubarModule, InputTextModule, ButtonModule, DropdownModule, InputTextareaModule, CalendarModule } from 'primeng/primeng';

import { AppComponent } from './app.component';
import { LfNavBarComponent } from './lf-nav-bar/lf-nav-bar.component';
import { LfFooterComponent } from './lf-footer/lf-footer.component';
import { LfLostFormComponent } from './lf-lost-form/lf-lost-form.component';
import { LfFoundFormComponent } from './lf-found-form/lf-found-form.component';
import { LfFoundBrowserComponent } from './lf-found-browser/lf-found-browser.component';
import { LfLostBrowserComponent } from './lf-lost-browser/lf-lost-browser.component';
import { LfHomeComponent } from './lf-home/lf-home.component';
import { LfAboutComponent } from './lf-about/lf-about.component';
import { LfItemDetailViewComponent } from './lf-item-detail-view/lf-item-detail-view.component';
import { LfReplaceErrPbuttonComponent } from './lf-replace-err-pbutton/lf-replace-err-pbutton.component';

const routes: Route[] = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: LfHomeComponent },
  { path: 'lost-regist', component: LfLostFormComponent },
  { path: 'found-regist', component: LfFoundFormComponent },
  { path: 'about', component: LfAboutComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    LfNavBarComponent,
    LfFooterComponent,
    LfLostFormComponent,
    LfFoundFormComponent,
    LfFoundBrowserComponent,
    LfLostBrowserComponent,
    LfHomeComponent,
    LfAboutComponent,
    LfItemDetailViewComponent,
    LfReplaceErrPbuttonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FlexLayoutModule,
    MenubarModule,
    ButtonModule,
    InputTextModule,
    DropdownModule,
    InputTextareaModule,
    CalendarModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: APP_BASE_HREF, useValue: '/' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
