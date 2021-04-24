import { Component, NgModule, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Jsonp } from '@angular/http';
import { LampInfo } from 'src/app/models/lampInfo';
import { LampService } from 'src/app/services/lamp.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  issubmitted:boolean = false;
  demoForm = new FormGroup({
    lightness : new FormControl("", [Validators.required, Validators.min(15), Validators.max(100)]),
    power: new FormControl("", [Validators.required, Validators.min(60), Validators.max(400)]),
    distance: new FormControl("", [Validators.required, Validators.min(0.5), Validators.max(25)]),
    type: new FormControl("", Validators.required),
    material: new FormControl("", Validators.required)
  });

  lampImg:string = "dark-lamp.png";
  detectImg:string = "../../../assets/images/upload.png";

  constructor(private lampService:LampService) { }

  ngOnInit() {
  }

  upload(){
    document.getElementById("upload").click();
  }

  handleUpload(files){
    this.lampService.detect(files[0]).subscribe(res => {
      this.detectImg = `data:image/jpeg;base64,${res.image64}`;
      this.demoForm.controls["lightness"].setValue(res.lightness);
    });
  }

  submitted(){
    this.issubmitted = true;
    if(this.demoForm.valid){
      this.issubmitted = false;
      this.lampService.analyse(this.mapToLampInfo(this.demoForm.value)).subscribe(res => {
        if(res.prediction == 1){
          this.lampImg = "light-lamp.png";
        }else{
          this.lampImg = "dark-lamp.png";
        }
      })
    }
  }

  private mapToLampInfo(data):LampInfo{
    return {
      lightness:`${data.lightness}`,
      distance:`${data.distance}`,
      power:data.power,
      type:Number.parseInt(data.type),
      material:Number.parseInt(data.material)
    } as LampInfo;
  }
}
