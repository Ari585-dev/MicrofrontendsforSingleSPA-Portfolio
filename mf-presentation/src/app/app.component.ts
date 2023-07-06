import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import AOS from 'aos';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'mf-presentation';
  linkedin:string='https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png';
  urllinked:string='https://www.linkedin.com/in/sergio-alejandro-giraldo-alzate-423021259/';
  github:string='https://img.freepik.com/free-icon/github_318-566791.jpg?w=360';
  urlgit:string='https://github.com/Ari585-dev';
  gmail:string='https://logos-world.net/wp-content/uploads/2020/11/Gmail-Logo.png';
  urlgmail:string='seragial@gmail.com';
  universidad:string='https://cdn.icon-icons.com/icons2/2397/PNG/512/microsoft_office_outlook_logo_icon_145721.png';
  urluniversidad:string='sagiraldoa@udistrital.edu.co';

  ngOnInit(): void {
    AOS.init();
  }
}
