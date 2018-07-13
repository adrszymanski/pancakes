import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-pancake-creator',
  templateUrl: './pancake-creator.component.html',
  styleUrls: ['./pancake-creator.component.css']
})
export class PancakeCreatorComponent implements OnInit {
  firstFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      foodPreferences: ['', Validators.required]
    });
  }
}
