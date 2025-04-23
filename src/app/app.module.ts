import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatSidenavModule,} from '@ngular/material/sidenav';
import {MatGridListModule,} from '@ngular/material/grid-list';
import {MatMenuModule,} from '@ngular/material/menu';
import {MatButtonModule,} from '@ngular/material/sidenav';
import {MatCardModule,} from '@ngular/material/sidenav';
import {MatIconModule,} from '@ngular/material/sidenav';
import {MatExpansionModule,} from '@ngular/material/sidenav';
import {MatListModule,} from '@ngular/material/sidenav';
import {MatToolbarModule,} from '@ngular/material/sidenav';
import {MatSnackBarModule,} from '@ngular/material/sidenav';
import {MatTableModule,} from '@ngular/material/sidenav';
import {MatBadgeModule,} from '@ngular/material/sidenav';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatGridListModule,
    MatMenuModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatExpansionModule,
    MatListModule,
    MatToolbarModule,
    MatTableModule,
    MatBadgeModule,
    MatSnackBarModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
