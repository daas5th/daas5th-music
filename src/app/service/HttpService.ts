/**
 * http 통신을 담당하는 Class
 */
import {HttpClient} from "@angular/common/http";


export class HttpService {


  constructor (private http: HttpClient){

  }



  // Get 호출
  public get(url: string, params?: any) {
    console.info(`[GET] ${url}`);
    return this.http.get(url);

  }

  // Post 호출
  public post(url: string, data: any) {
    console.info('post>>>>>>>>>>>>: ' + url);


  }


  // Put 호출
  public put(url: string, data: any) {
    console.info('put>>>>>>>>>>>>: ' + url);

  }

  // Delete 호출
  public delete(url: string) {
    console.info('delete>>>>>>>>>>>>: ' + url);

  }

}
