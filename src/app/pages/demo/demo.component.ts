import { Component, NgModule, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  demoForm = new FormGroup({
    lightness : new FormControl("", [Validators.required, Validators.min(15), Validators.max(100)]),
    power: new FormControl("", [Validators.required, Validators.min(60), Validators.max(400)]),
    distance: new FormControl("", [Validators.required, Validators.min(0.5), Validators.max(25)]),
    type: new FormControl("", Validators.required),
    material: new FormControl("", Validators.required)
  });

  constructor() { }

  ngOnInit() {
  }

  upload(){
    document.getElementById("upload").click();
  }

  handleUpload(files){
    console.log(files);
  }

  submitted(){
    console.log(this.demoForm.value);
  }

}
