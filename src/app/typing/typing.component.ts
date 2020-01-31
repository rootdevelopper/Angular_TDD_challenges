import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-typing',
  templateUrl: './typing.component.html',
  styleUrls: ['./typing.component.scss']
})
export class TypingComponent implements OnInit {
  randomText = 'lorem sentence';
  enteredText = '';

  constructor() {}

  ngOnInit() {}

  newLetter(input: string) {
    this.enteredText = input;
  }
}
