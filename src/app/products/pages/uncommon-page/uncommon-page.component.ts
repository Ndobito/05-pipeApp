import { interval, tap, Observable } from 'rxjs';
import { Component } from '@angular/core';


@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  // i18nSelect
  public name: string = 'Alejandro';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  }

  changeClient():void{
    this.name = 'Sofia';
    this.gender = 'female';
  }

  // i18nPlural Pipe
  public clients:string[] = ['Maria', 'Pedro', 'Fernando', 'Mario', 'Melissa', 'Natalia', 'Sofia'];
  public clientsMap =  {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos # cliente esperando.',
    '=2': 'tenemos # clientes esperando.',
    'other': 'tenemos # clientes esperando.',
  }

  deleteClient():void{
    this.clients.shift();
  }

  // KeyValue Pipe

  public person:object = {
    name: 'Alejandro',
    age: 36,
    addres: 'Paicol, Huila',
  }

  // Async Pipe

  public myObservableTimer:Observable<number> = interval(2000).pipe(
    tap( value => console.log('tap:', value)
    )
  );

  public promeseValue:Promise<string> = new Promise((resolve, reject) =>{
    setTimeout(()=>{
      resolve('Tenemos data en la promesa');
    }, 3500)
  })

}
