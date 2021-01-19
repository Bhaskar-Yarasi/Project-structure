import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  left='13%';
  new=[
    {id:1, name:'HOME', path:'/two',
    subPages: [
      { title1: 'About1',  name1: 'about1' },
      { title1: 'About2',  name1: 'about2'  },
      { title1: 'About3', name1: 'about3'  },
  ]
  },
    {id:2, name:'Create', path:'/one' },
    {id:3, name:'Library', path:'/three' },
    {id:4, name:'Engage', path:'/three' },
    {id:5, name:'Shared', path:'/three' },
    {id:6, name:'Exports', path:'/three' },
    {id:6, name:'Reports', path:'/three' },
    {id:6, name:'Trash', path:'/three' },
    {id:6, name:'Content', path:'/three' },
    
];
  
  selectedindex: any;
  show:boolean=true;
  ngOnInit(): void {
    
  }
  demo(item:any,i:any){
    debugger;
    this.selectedindex=i;
    
      }
      drag(){
this.show=!this.show;
this.show==true?this.left='13%':this.left='0%';
      }
      
  


 
 
  
  
}

