import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeadsComponent } from './leads/leads.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardComponent } from './dashboard.component';
import { BodyComponent } from './body/body.component';
import { ManageusersComponent } from './manageusers/manageusers.component';
import { TableComponent } from './manageusers/table/table.component';

const routes: Routes = [
  { 
    path: 'dashboard', component: DashboardComponent,
    children: [
      { path: 'leads', component: LeadsComponent },
      { path: 'body', component: BodyComponent },
      { path: 'sidenav', component: SidenavComponent },
      { path: 'manageusers', component: ManageusersComponent },
      { path: 'table', component: TableComponent },
    ]
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
