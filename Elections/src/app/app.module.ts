import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { VotingCodeComponent } from './voting-code/voting-code.component';
import { VotersListComponent } from './voters-list/voters-list.component';
import { VotingBoardComponent } from './voting-board/voting-board.component';
import { AlertComponent } from './alert/alert.component';
import { VotingCardComponent } from './voting-card/voting-card.component';
import { VotingCardChosenComponent } from './voting-card-chosen/voting-card-chosen.component';
import { MatDialogModule } from '@angular/material/dialog';
import { SearchFieldsComponent } from './search-fields/search-fields.component';
import { SingleSearchFieldComponent } from './single-search-field/single-search-field.component';
import { OptionsButtonsComponent } from './options-buttons/options-buttons.component';
import { SearchResultsComponent } from './search-results/search-results.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    VotingCodeComponent,
    VotersListComponent,
    VotingBoardComponent,
    AlertComponent,
    VotingCardComponent,
    VotingCardChosenComponent,
    SearchFieldsComponent,
    SingleSearchFieldComponent,
    OptionsButtonsComponent,
    SearchResultsComponent
  ],
  entryComponents: [
    VotingCardChosenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
