import { Component } from '@angular/core';
import { UpdateServiceService } from '../services/update-service.service';

@Component({
  selector: 'app-novo-item',
  templateUrl: './novo-item.component.html',
  styleUrls: ['./novo-item.component.scss']
})
export class NovoItemComponent {

  constructor(public updateServiceService: UpdateServiceService){}

}
