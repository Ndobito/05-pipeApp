import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {

  public nameLower: string = 'Alejandro';
  public nameUpper: string = 'Fernando';
  public fullName: string = 'AleJAnDro cUElLar';

  public customDate: Date = new Date();

}
