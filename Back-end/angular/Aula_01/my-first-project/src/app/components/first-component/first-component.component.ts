import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css'],
})
export class FirstComponentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  name: string = 'Harold';
  age: number = 22;
  profession: string = 'System Analytics';
  hobbies: string[] = ['run', 'read', 'play video-games'];
  characteristics = {
    hairColor: 'blond',
    height: 1.8
  }
}
