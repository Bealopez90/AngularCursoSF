import { Component } from '@angular/core';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent {

  public linkTheme = document.querySelector('#theme');

  constructor(){

  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }

  changeTheme(theme: string) {
    
    const url=`./assets/css/colors/${theme}.css`;


    this.linkTheme?.setAttribute('href', url);
    localStorage.setItem('theme', url);
  }
}
