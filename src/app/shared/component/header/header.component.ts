import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  action:string='Login'


  triggerAction(ActionName:string){
    this.action=ActionName
  }

  
}
