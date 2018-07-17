import {Component, OnInit, ViewChild} from '@angular/core';
import {PancakeForm} from '../models/pancakeForm';
import ParamsHandler from '../ParamsHandler';

@Component({
  selector: 'app-pancake-creator',
  templateUrl: './pancake-creator.component.html',
  styleUrls: ['./pancake-creator.component.css']
})
export class PancakeCreatorComponent implements OnInit {
  @ViewChild('stepper') stepper;
  pancake: PancakeForm;
  paramsHandler: ParamsHandler;

  typesOfFlour = [
    {label: 'Pszenna', value: 0},
    {label: 'Gryczana', value: 1},
    {label: 'Orkiszowa', value: 2},
    {label: 'Pełnoziarnista', value: 3},
    {label: 'Zytnia', value: 4}
  ];

  ngOnInit(): void {
    this.paramsHandler = new ParamsHandler();
    const params = this.paramsHandler.getParams();
    this.pancake = new PancakeForm(params);
    this.stepper.selectedIndex = params.step || 0;
  }

  // flourTypeClick(event: any) {
  //   if (event.target.checked) {
  //     this.pancake.typeOfFlour.push(event.target.value);
  //   } else {
  //     const index = this.pancake.typeOfFlour.indexOf(event.target.value);
  //     if (index > -1) {
  //       this.pancake.typeOfFlour.splice(index, 1);
  //     }
  //   }
  //   console.log(this.pancake);
  // }

  formReset() {
    this.pancake = new PancakeForm();
    this.pushParams();
  }

  pushParams() {
    const step = this.stepper.selectedIndex;
    this.paramsHandler.pushParams(this.pancake, step);
  }
}
