

import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable()
export class HealthCheckService {

  constructor (private http: HttpClient) {

  }

  getEmployeeHealth(){
    return this.http.get('/api/employee/actuator/health');
  }

  getDepartmentHealth(){
    return this.http.get('/api/department/actuator/health');
  }

  getOrganizationHealth(){
    return this.http.get('/api/organization/actuator/health');
  }



}
