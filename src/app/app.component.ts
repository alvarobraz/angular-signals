import { Component, signal, computed, effect } from '@angular/core';
import { UpdateServiceService } from './services/update-service.service';

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

  public array = signal<Array<number>>([1])

  constructor(public updateServiceService: UpdateServiceService) {

    effect(()=>{})

    // effect(()=> {
    //   // console.log(this.firstName);
    //   if(this.array().length > 5) {
    //     alert('è recomendado interar até 5 números.')
    //   }
    // })

   }

  ngOnInit(): void {
  }

  public updateName() {
    // this.firstName.set('Jubisleia')
    this.firstName.update((oldValue) => {
      console.log(oldValue);
      return 'Cristine Schio'
    })
  }

  public updateArray() {
    this.array.mutate((oldValue)=>{
      console.log(oldValue);
      return oldValue.push(Number(oldValue.at(-1)) + 1)
    })
  }

  // public updateArray() {
  //   this.array.mutate((oldValue)=>{
  //     console.log(oldValue);
  //     return oldValue.push(2)
  //   })
  // }

  // public updateArray() {
  //   this.array.update((oldValue)=>{
  //     console.log(oldValue);
  //     return [...oldValue, 2]
  //   })
  // }


}
