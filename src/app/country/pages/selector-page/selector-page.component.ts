import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CountriesService} from "../../services/countries.service";
import {Region, SmallCountry} from "../../interfaces/country.interfaces";
import {filter, switchMap, tap} from "rxjs";

@Component({
  selector: 'country-selector-page',
  templateUrl: './selector-page.component.html',
  styleUrls: ['./selector-page.component.css']
})

export class SelectorPageComponent implements OnInit {

  public countriesByRegion: SmallCountry[] = []
  public borders: SmallCountry[] | [] = []

  public form: FormGroup = this.fb.group({
    region: ['', Validators.required],
    country: ['', Validators.required],
    borders: ['', Validators.required]
  })

  constructor(
    private fb: FormBuilder,
    private countriesService: CountriesService
  ) {
  }

  ngOnInit(): void {
    this.onRegionChange();
    this.onCountryChanged();
  }

  get regions(): Region[] {
    return this.countriesService.regions
  }

  onRegionChange(): void {
    this.form.get('region')?.valueChanges
      .pipe(
        tap(() => this.form.get('country')?.setValue('')),
        tap(() => this.borders = []),
        switchMap(region => this.countriesService.getCountriesByRegion(region)),
      )
      .subscribe((countries) => {
        this.countriesByRegion = countries
      })
  }

  onCountryChanged(): void {
    this.form.get('country')?.valueChanges
      .pipe(
        tap(() => this.form.get('border')?.setValue('')),
        tap(() => this.borders = []),
        filter((value: string): boolean => value.length >= 1),
        switchMap((alphaCode: string) => this.countriesService.getCountryByAlphaCode(alphaCode)),
        switchMap(country => this.countriesService.getCountriesByCode(country?.borders ?? [])),
      )
      .subscribe((countries: SmallCountry[]): void => {
        this.borders = countries
      })
  }

}
