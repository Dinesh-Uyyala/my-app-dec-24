import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { EmployeeComponent } from './employee/employee.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent,children:[
    {path:'home',component:HomeComponent},
    {path:'data-binding',component:DataBindingComponent},
    {path:'directives',component:DirectivesComponent},
    {path:'employee',component:EmployeeComponent},
    {path:'vehicle',component:VehicleComponent},
    {path:'create-vehicle',component:CreateVehicleComponent},
  ]},
  {path:'**',component:ErrorComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
