import {Component, OnInit} from '@angular/core';
import {ConnectorService} from '../../services/connector/connector.service';
import {Patient} from "../../models/Patient";
import {getCountries, getStates} from "country-state-picker";
import {Country} from "../../models/Country";
import scus from 'state-counties-us';
import {State} from "../../models/State";
import {Route, Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {AlertHelper, Util} from "../../util/Utilities";

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss']
})
export class FormInputComponent implements OnInit {
  patient: Patient = {
    address: "",
    appointment_time: "",
    birthday: new Date(),
    cell_number: "",
    city: "",
    county: "",
    email: "",
    ethnicity: "",
    fever: false,
    form_filled_date: new Date(),
    gender: "",
    id: null,
    insurance_group_id: "",
    insurance_patient_id: "",
    insured: false,
    name: "",
    persistent_cough: false,
    race: "",
    shortness_of_breath: false,
    social_security: "",
    state: "",
    sure_exposure: false,
    suspected_exposure: false,
    zipcode: ""
  };

  genders: string[] = ['Male', 'Female', 'Other', 'Prefer not to say'];
  appointmentTimes: string[] = ['10:00 am', '11:00 am', '12:00 pm', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm'];
  races: string[] = ['American Indian or Alaska Native', 'Asian', 'Black or African American', 'Native Hawaiian or Pacific Islander', 'White'];
  ethnicities: string[] = ['Hispanic or Latino', 'Not Hispanic or Latino'];
  insuredOptions: string[] = ['Yes', 'No'];
  counties: string[] = [];
  cities: string[] = [];
  countries: Country[];
  selectedCountry: Country;
  stateNames: string[];
  states: State[] = [];
  countyPlaceholder = 'Please select a state.';
  maxDate: Date;
  alertHelper: AlertHelper;

  constructor(private connector: ConnectorService, private route: Router, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.alertHelper = new AlertHelper(this.snackBar);
    this.maxDate = new Date();
    this.countries = getCountries();
    this.selectedCountry = this.countries.filter(country => country.code === 'us')[0];
    this.stateNames = getStates(this.selectedCountry.code);
    const countyStates = scus.getStates();
    this.stateNames.splice(11, 0, 'Guam');
    for (let i = 0; i < countyStates.length; i++) {
      this.states.push({
        name: this.stateNames[i],
        code: countyStates[i]
      });
    }
  }

  createPatient(patient: Patient) {
    this.connector.submitForm(patient).subscribe(data => {
      console.log('created patient', data);
      Util.goodToast(this.alertHelper,'Signed up successfully.');
      this.route.navigate(['/']).catch(err => {
        console.error('error navigating back to homepage');
      });
    }, error => {
      console.log("Error creating patient!", error);
      Util.errorToast(this.alertHelper, 'Error signing up!');
      this.route.navigate(['/']).catch(err => {
        console.error('error navigating back to homepage');
      });
    });
  }

  stateSelected(e: any): void {
    this.patient.state = e;
    const code = this.states.filter(state => state.name === e)[0].code;
    this.counties = scus.getCountiesByState(code);
  }

  setCough(): void {
    try {
      // @ts-ignore
      this.patient.persistent_cough = document.getElementById("persistent-cough").checked;
    } catch (err: any) { }
  }

  setShortness(): void {
    try {
      // @ts-ignore
      this.patient.shortness_of_breath = document.getElementById("breath-shortness").checked;
    } catch (err: any) { }
  }

  setFever(): void {
    try {
      // @ts-ignore
      this.patient.fever = document.getElementById("fever").checked;
    } catch (err: any) { }
  }

  setExposed(): void {
    try {
      // @ts-ignore
      this.patient.sure_exposure = document.getElementById("sure-exposure").checked;
    } catch (err: any) { }
  }

  setSuspectedExposure(): void {
    try {
      // @ts-ignore
      this.patient.suspected_exposure = document.getElementById("suspected-exposure").checked;
    } catch (err: any) { }
  }
}
