import { Injectable } from '@angular/core';
import { Region, SmallCountry } from "../interfaces/country.interfaces";

@Injectable({
  providedIn: 'root'
})

export class CountriesService {

  private  _regions: Region[] = [Region.Africa, Region.Asia, Region.Americas, Region.Europe, Region.Oceania]

  constructor() { }

  get regions(): Region[] {
    return [...this._regions]
  }

  public getCountriesByRegion(region: Region) : SmallCountry[] {
    return []
  }

}
