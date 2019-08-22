import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from './material/material.module';
import {OnboardPolicyComponent} from './onboard-policy/onboard-policy.component';
import {OnboardUsersComponent} from './onboard-users/onboard-users.component';
import {CustomTableComponent} from './custom-table/custom-table.component';
import {DialogBoxComponent} from './dialog-box/dialog-box.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'onboard', pathMatch: 'full' },
  {path: 'onboard', component: OnboardPolicyComponent },
  {path: 'onboard/:guid', component: OnboardUsersComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    OnboardPolicyComponent,
    OnboardUsersComponent,
    CustomTableComponent,
    DialogBoxComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  entryComponents: [
    DialogBoxComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

