import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css']
})
export class VehicleDetailsComponent implements OnInit{
  vehicle:any=[];
  id:number=0;
  constructor( private _activatedRoute:ActivatedRoute,private _vehicleService:VehicleService){}
  ngOnInit(): void {
    this.getId();
    this.getVehicleData();
  }

  getId(){
    this._activatedRoute.params.subscribe(
      (data:any)=>{
        console.log(data.id);
        this.id=data.id;
      }
    )
  }

  getVehicleData(){
    this._vehicleService.getVehicle(this.id).subscribe(
      (data:any)=>{
        this.vehicle=data;
        console.log("data:",data);
      }
    )
  }
}
