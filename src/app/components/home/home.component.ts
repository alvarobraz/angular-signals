import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public firstName = "Álvaro"
  public lastName = "Braz"

  public fullName = this.firstName + this.lastName
  public array = [1]

  constructor() { }

  ngOnInit(): void {
  }

  public updateName() {}

  public updateArray() {}

}
