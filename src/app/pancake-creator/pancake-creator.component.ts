import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-pancake-creator',
  templateUrl: './pancake-creator.component.html',
  styleUrls: ['./pancake-creator.component.css']
})
export class PancakeCreatorComponent implements OnInit {
  firstFormGroup: FormGroup;

  searchParams = {
    foodPreferences: '',
    glutenFree: false,
    lactoseFree: false,
    typeOfFlour: [],
    noEggs: false,
    noMilk: false,
    sweetOrSavory: 'all'
  };

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      foodPreferences: ['', Validators.required]
    });
  }
}
