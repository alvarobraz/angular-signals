import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UpdateServiceService {

  public comida = signal('Feijoada')

  constructor() { }

  public updateComida(value: string) {
    this.comida.set(value)
  }


}
