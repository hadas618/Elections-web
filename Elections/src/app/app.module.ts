import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { VotersListComponent } from './voters-list/voters-list.component';
import { VotingBoardComponent } from './voting-board/voting-board.component';
import { AlertComponent } from './alert/alert.component';
import { VotingCardComponent } from './voting-card/voting-card.component';
import { VotingCardChosenComponent } from './voting-card-chosen/voting-card-chosen.component';
import { MatDialogModule } from '@angular/material/dialog';
import { OptionsButtonsComponent } from './options-buttons/options-buttons.component';
import { SearchResultsComponent } from './search-results/search-results.component';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import { ExitVotingComponent } from './exit-voting/exit-voting.component';
import { UpdateVoterComponent } from './update-voter/update-voter.component';
import { ElectionsResultsComponent } from './elections-results/elections-results.component';
import { VotingCardResultsComponent } from './voting-card-results/voting-card-results.component';
import { DetailsElectionsResultsComponent } from './details-elections-results/details-elections-results.component';
import { GraphElectionsResultsComponent } from './graph-elections-results/graph-elections-results.component';
import { VotingCardsListComponent } from './voting-cards-list/voting-cards-list.component';
import { WarningComponent } from './warning/warning.component';
import {AccordionModule} from 'primeng/accordion';
import {ChartModule} from 'primeng/chart';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    VotersListComponent,
    VotingBoardComponent,
    AlertComponent,
    VotingCardComponent,
    VotingCardChosenComponent,
    OptionsButtonsComponent,
    SearchResultsComponent,
    ExitVotingComponent,
    UpdateVoterComponent,
    ElectionsResultsComponent,
    VotingCardResultsComponent,
    DetailsElectionsResultsComponent,
    GraphElectionsResultsComponent,
    VotingCardsListComponent,
    WarningComponent
  ],
  entryComponents: [
    VotingCardChosenComponent,
    UpdateVoterComponent,
    WarningComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    AccordionModule,
    ChartModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
