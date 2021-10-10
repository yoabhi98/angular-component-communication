import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hello',
  template: `<p>HelloComponent</p>
  {{comp}}
  <br>
  {{number1+30}}
  <br>
  <input type="text" (change)="triggerEvent()"/>`,
})
export class HelloComponent {
  @Input() comp;
  @Input() number1;

  @Output() myEvent: EventEmitter<string> = new EventEmitter<string>();

  triggerEvent() {
    this.myEvent.emit('Event emitted');
  }
}
