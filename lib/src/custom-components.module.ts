import { NgModule } from '@angular/core';
import { ButtonComponent } from './components/button/button.component';
import { CustomComponentsComponent } from './custom-components.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    CustomComponentsComponent,
    ButtonComponent
  ],
  imports: [
    FontAwesomeModule
  ],
  exports: [
    ButtonComponent
  ]
})
export class CustomComponentsModule { }
