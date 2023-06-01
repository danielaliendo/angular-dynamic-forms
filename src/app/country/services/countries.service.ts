import {Injectable} from '@angular/core';
import {Country, Region, SmallCountry} from "../interfaces/country.interfaces";
import {combineLatest, map, Observable, of, tap} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class CountriesService {
  private baseUrl = 'https://restcountries.com/v3.1'

  private _regions: Region[] = [Region.Africa, Region.Asia, Region.Americas, Region.Europe, Region.Oceania]

  constructor(
    private http: HttpClient
  ) {
  }

  get regions(): Region[] {
    return [...this._regions]
  }

  public getCountriesByRegion(region: Region, fields = 'cca3,name,borders'): Observable<SmallCountry[]> {
    if (!region) return of([]);
    return this.http.get<Country[]>(`${this.baseUrl}/region/${region}?fields=${fields}`)
      .pipe(
        map(countries => countries.map(country => ({
          name: country.name.common,
          cca3: country.cca3,
          borders: country.borders ?? []
        })))
      )
  }

  public getCountryByAlphaCode(alphaCode: string, fields = 'cca3,name,borders'): Observable<SmallCountry> {
    return this.http.get<Country>(`${this.baseUrl}/alpha/${alphaCode}?fields=${fields}`)
      .pipe(
        map(country => ({
          name: country.name.common,
          cca3: country.cca3,
          borders: country.borders ?? []
        }))
      )
  }

  public getCountriesByCode(borders: string[]): Observable<SmallCountry[]> {
    if (!borders || borders.length === 0) return of([])

    const countriesRequests: Observable<SmallCountry>[] = []

    borders.forEach(code => {
      const request: Observable<any> = this.getCountryByAlphaCode(code);
      countriesRequests.push(request)
    })

    return combineLatest(countriesRequests)
  }

}
