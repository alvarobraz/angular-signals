import { Component, signal, computed } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public firstName = signal('Álvaro')
  public lastName = signal('Braz')

  public fullName = computed(()=> {
    return this.firstName() + ' '+ this.lastName()
  })

  public array = [1]

  constructor() { }

  ngOnInit(): void {
  }

  public updateName() {
    this.firstName.set('Jubisleia')
  }

  public updateArray() {}


}
