import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError, Subject } from 'rxjs';

import { Ad } from 'src/app/Interface';

@Injectable({
  providedIn: 'root'
})
export class AdServicesService {
  private readonly apiURL = "https://localhost:12340/api/";
  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  }
  public selectedAd = new Subject<any>();
  // public specificSelectedAd = new Subject<any>();

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.httpClient.get(this.apiURL + "Anuncio/allAds")
      .pipe(catchError(this.errorHandler));
  }

  getAnAd(id: number): Observable<any> {
    return this.httpClient.get(this.apiURL + "Anuncio/adId/" + id)
      .pipe(catchError(this.errorHandler));
  }

  getByType(index: number): Observable<any> {
    return this.httpClient.get(this.apiURL + "Anuncio/type/" + index)
      .pipe(catchError(this.errorHandler));
  }

  create(ad: Ad) {
    return this.httpClient.post(
      this.apiURL + "Anuncio/newAd",
      JSON.stringify(ad),
      this.httpOptions
    )
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: any) {
    let errorMessage = "";
    if (error.error instanceof ErrorEvent)//erro de um evento que aqui é ir obter dados
      errorMessage = error.error.message;
    else
      errorMessage = " Error code: " + error.status + "\nMessage: " + error.message;
    return throwError(() => error)
  }

}
