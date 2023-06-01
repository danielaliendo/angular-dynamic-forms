import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CountriesService} from "../../services/countries.service";
import {Region} from "../../interfaces/country.interfaces";

@Component({
  selector: 'country-selector-page',
  templateUrl: './selector-page.component.html',
  styleUrls: ['./selector-page.component.css']
})

export class SelectorPageComponent implements OnInit {

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
  }

  get regions(): Region[] {
    return this.countriesService.regions
  }

  onRegionChange(): void {
    this.form.get('region')?.valueChanges
      .subscribe((region: Region) => {
        console.log(region)
      })
  }

}
