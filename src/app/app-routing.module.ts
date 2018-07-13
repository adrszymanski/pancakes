import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PancakeCreatorComponent} from './pancake-creator/pancake-creator.component';

const routes: Routes = [
  { path: 'pancakeCreator', component: PancakeCreatorComponent}
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule {}
