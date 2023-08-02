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
    {id:1 ,name:"PaymentReminder" , src:"" },
    {id:2 ,name:"CommonHttpProtocols-with-ASPdotNetCore" , src:"" },
    {id:3 ,name:"Scraping" , src:"" },
    {id:4 ,name:"NodeJS-GamesCRUD" , src:"" },
    {id:5 ,name:"SingleSPA-Portfolio " , src: "" },
    
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
