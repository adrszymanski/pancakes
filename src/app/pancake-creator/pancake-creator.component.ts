import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';

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

  ngOnInit(): void {
  }
}
