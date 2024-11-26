import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
      <h3>Counter: {{ counter }}</h3>

      <button (click)=" increaseBy(1) ">+</button>
      <button (click)=" reset() ">Reset</button>
      <button (click)=" increaseBy(-1) ">-</button>
  `
})

export class CounterComponent {
  public counter: number = 0;

  increaseBy(number: number): void {
    this.counter += number;
  }

  reset(): void{
    this.counter = 0;
  }
}
