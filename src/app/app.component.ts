import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<p>AppComponent</p>
  {{company}}
 <app-hello comp={{company}} [number1]="num1" (myEvent)=changeValue($event);></app-hello><br>
  Value of variablec "value" is: {{value}}`,
})
export class AppComponent {
  company: string = 'Wipro';
  num1: number = 10;
  value:string="";

  changeValue(val:string)
  {
    this.value=val;
  }
}
