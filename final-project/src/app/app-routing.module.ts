import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProgramListComponent } from './program-list/program-list.component';
import { ProgramCreateComponent } from './program-create/program-create.component';

const routes: Routes = [
  { path: 'listProgram', component: ProgramListComponent },
  { path: 'createProgram/:programName', component: ProgramCreateComponent },
  { path: 'createProgram', component: ProgramCreateComponent },
  { path: '', redirectTo: '/listProgram', pathMatch: 'full' },
  { path: '**', redirectTo: '/listProgram', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
