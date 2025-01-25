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
import { CreateUserComponent } from './create-user/create-user.component';
import { AuthenticationGuard } from './authentication.guard';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'',component:LoginComponent},
  {path:'dashboard',canActivate:[AuthenticationGuard] ,component:DashboardComponent,children:[
    {path:'home',canActivate:[AuthenticationGuard],component:HomeComponent},
    {path:'data-binding',canActivate:[AuthenticationGuard],component:DataBindingComponent},
    {path:'directives',canActivate:[AuthenticationGuard],component:DirectivesComponent},
    {path:'employee',canActivate:[AuthenticationGuard],component:EmployeeComponent},
    {path:'vehicle',canActivate:[AuthenticationGuard],component:VehicleComponent},
    {path:'create-vehicle',canActivate:[AuthenticationGuard],component:CreateVehicleComponent},
    {path:'create-user',canActivate:[AuthenticationGuard],component:CreateUserComponent},
    {path:'vehicle-details/:id',canActivate:[AuthenticationGuard],component:VehicleDetailsComponent},
    {path:'edit-vehicle/:id',component:CreateVehicleComponent,canActivate:[AuthenticationGuard]},

  ]},
  {path:'**',component:ErrorComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
