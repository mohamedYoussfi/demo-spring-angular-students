import {Component, OnInit} from '@angular/core';
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-admin-template',
  templateUrl: './admin-template.component.html',
  styleUrl: './admin-template.component.css'
})
export class AdminTemplateComponent implements OnInit{
  constructor(public authService : AuthService) {
  }
  ngOnInit() {

  }

  logout() {
    this.authService.logout()
  }
}
