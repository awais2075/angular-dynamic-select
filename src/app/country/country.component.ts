import { Component, OnInit } from '@angular/core';
import {ICountry} from './country';
import {CountryService} from './country.service';
@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  constructor(private service:CountryService) { }
  countries = [];

  selectedCountries:String[] = [];
  ngOnInit() {

    this.getCountry("alpha/pak");
    // this.getCountry("alpha/aus");
  }


  getCountry(parameter:String) {
    this.service.getCountry(parameter).subscribe(
      suc => {
        // console.log(suc);
        var country = { isDisabled : false, value: suc};
        this.countries.push(country);

      },
      err => {
        console.log(err );
      });

  }


  onOptionSelectedListener(countryName:String, country) {
    country.value.isDisabled = true;
    // console.log(country.value);
    this.getCountry('alpha/'+countryName);

    this.selectedCountries.push(countryName);

    console.log(this.selectedCountries);
  }

}