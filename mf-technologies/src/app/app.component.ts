import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mf-technologies';
  rightbuttonURL= "https://cdn4.iconfinder.com/data/icons/essential-app-2/16/next-right-arrow-botton-256.png";
  leftbuttonURL="https://cdn4.iconfinder.com/data/icons/essential-app-2/16/back-left-arrow-botton-512.png";
  tecnos= [
    {id: 1, name: 'Angular', image:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png'},
    {id: 2, name: 'NodeJS', image:'https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_f0b606abb6d19089febc9faeeba5bc05/nodejs-development-services.png'},
    {id: 3, name: '.NET core', image:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/.NET_Core_Logo.svg/2048px-.NET_Core_Logo.svg.png'},
    {id: 4, name: 'Postman', image:'https://user-images.githubusercontent.com/7853266/44114706-9c72dd08-9fd1-11e8-8d9d-6d9d651c75ad.png'},
    {id: 5, name: 'SQL', image:'https://www.freeiconspng.com/thumbs/sql-server-icon-png/sql-server-icon-png-29.png'},
    {id: 6, name: 'MongoDB', image:'https://www.pngall.com/wp-content/uploads/13/Mongodb-PNG-Image-HD.png'},
    {id: 7, name: 'GitHub', image:'https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png'},
    {id: 8, name: 'Java', image:'https://icon-library.com/images/java-icon-png/java-icon-png-15.jpg'}
  ];

  index=0;

  nextTech(){
    this.index=(this.index+1)%this.tecnos.length;
  }

  previousTech(){
    if (this.index <1) {
      this.index=(this.tecnos.length-1);
      
    }else{
      this.index=(this.index-1)%this.tecnos.length;
    }
  }
    
}
