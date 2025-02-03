import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
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
import { HooksComponent } from './hooks/hooks.component';
import { Sibling1Component } from './sibling1/sibling1.component';
import { Sibling2Component } from './sibling2/sibling2.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { AboutCeoComponent } from './about-us/about-ceo/about-ceo.component';
import { AboutCompanyComponent } from './about-us/about-company/about-company.component';
import { DummyComponent } from './dummy/dummy.component';

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
    {path:'hooks',component:HooksComponent,canActivate:[AuthenticationGuard]},
    {path:'sibling1',component:Sibling1Component},
    {path:'sibling2',component:Sibling2Component},
    {path:'parent',component:ParentComponent},
    {path:'child',component:ChildComponent},
    {path:'about-ceo',component:AboutCeoComponent},
    {path:'about-company',component:AboutCompanyComponent},
    { 
      path: 'payment', 
      loadChildren: () => import('./payment/payment.module').then(m => m.PaymentModule)
    }

  ]},
  {path:'dummy',component:DummyComponent},
  {path:'**',component:ErrorComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
