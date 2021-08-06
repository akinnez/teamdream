import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  signUpCall(){
    alert('this is tumi')
  }
  signInCall(){
alert('i dont recognise tumilola')
  }
}
