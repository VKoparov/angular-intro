import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ExampleService {

  constructor(private httpClient: HttpClient) {}

  async promiseAllMockData(id: number): Promise<any> {
    return await this.httpClient.get(`http://localhost:8080/${id}`)
      .toPromise();
  }

  observeAllMockData(id: number): any {
    let data = {};
    this.httpClient.get(`http://localhost:8080/${id}`)
      .subscribe(response => {
        data = response;
      });
    return data;
  }

  tapAllMockData(id: number): void {
    this.httpClient.get(`http://localhost:8080/${id}`)
      .pipe(
        tap(response => {
          console.log(response);
        })
      );
  }
}
