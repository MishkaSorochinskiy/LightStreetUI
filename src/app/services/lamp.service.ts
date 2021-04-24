import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LampInfo } from '../models/lampInfo';
import { environment } from 'src/environments/environment';
import { LampInfoResult } from '../models/lampInfoResult';
import { DetectOutput } from '../models/detectOutput';

@Injectable({
  providedIn: 'root'
})
export class LampService {
  url:string = `${environment.api}/lamp`;

  analyse(data:LampInfo){
    return this.http.post<LampInfoResult>(`${this.url}/analyse`,data);
  }

  detect(file:File){
    let formData = new FormData();
    formData.append('file', file, file.name);
    return this.http.post<DetectOutput>(`${this.url}/detect`,formData);
  }

  constructor(private http:HttpClient) { }

}
