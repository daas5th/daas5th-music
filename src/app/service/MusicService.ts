import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class MusicService {

  constructor (private http: HttpClient) {

  }

  getTest(){
    let testUrl = "https://httpbin.org/get"
    return this.http.get(testUrl);
  }



}
