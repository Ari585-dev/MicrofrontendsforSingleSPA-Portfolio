import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mf-blogsandprojects';
  rightbuttonURL= "https://cdn4.iconfinder.com/data/icons/essential-app-2/16/next-right-arrow-botton-256.png";
  leftbuttonURL="https://cdn4.iconfinder.com/data/icons/essential-app-2/16/back-left-arrow-botton-512.png";

  proys= [
    {id:2 ,name:"CommonHttpProtocols-with-ASPdotNetCore" , src:"https://user-images.githubusercontent.com/129306585/261101998-232b9242-7a3d-4d5a-9b29-907f26dd8edc.gif" },
    {id:3 ,name:"Scraping" , src:"https://user-images.githubusercontent.com/129306585/259843125-cde8e559-e415-4daf-8fac-b51ec01f9ff2.gif" },
    {id:4 ,name:"NodeJS-GamesCRUD" , src:"https://user-images.githubusercontent.com/129306585/259836670-57aa41c2-96a3-45fb-8f92-4466ea749564.gif" },
    /* {id:5 ,name:"SingleSPA-Portfolio " , src: "" }, */
    
  ];

  blogs=[
    {id:1, name:"SERVICIOS Y ARRAYS EN ANGULAR" , desc: "Creation of services in angular and special care with arrays." },
    {id:2, name:"Single SPA con Angular 15" , desc: "Spanish blog where I wrote about how to create a SPA application with angular 15."},

  ];

  index=0;

  nextProy(){
    this.index=(this.index+1)%this.proys.length;
  }

  previousProy(){
    if (this.index <1) {
      this.index=(this.proys.length-1);
      
    }else{
      this.index=(this.index-1)%this.proys.length;
    }
  }
}
