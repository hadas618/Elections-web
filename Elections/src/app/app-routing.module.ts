import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './_guards/auth.guard';
import { VotingCodeComponent } from './voting-code/voting-code.component';
import { VotersListComponent } from './voters-list/voters-list.component';
import { VotingBoardComponent } from './voting-board/voting-board.component';
import { VotingCardChosenComponent } from './voting-card-chosen/voting-card-chosen.component';
import { ElectionsResultsComponent } from './elections-results/elections-results.component';

const routes: Routes = [
  // { path: 'login', component: LoginComponent, canActivate: [AuthGuard]--put attantion to remove the guard if not used},
  { path: 'login', component: LoginComponent },
  { path: 'voting-code', component: VotingCodeComponent },
  { path: 'voters-list', component: VotersListComponent },
  { path: 'voting-board', component: VotingBoardComponent/*, children: [
     { path: ':votingLetter', component: VotingCardChosenComponent}
] */},
  { path: 'elections-results', component: ElectionsResultsComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
