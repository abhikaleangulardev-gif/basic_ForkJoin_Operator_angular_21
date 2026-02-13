import { Component, OnInit } from '@angular/core';
import { Shared } from '../../service/shared';

@Component({
  selector: 'app-forkjoin',
  standalone: false,
  templateUrl: './forkjoin.html',
  styleUrl: './forkjoin.css',
})
export class Forkjoin implements OnInit{
   constructor(private sharedService:Shared){}

   ngOnInit(): void {
     this.sharedService.getAllDetailsList().subscribe({
      next:(_resp:any)=>{
          console.log(_resp);
          console.log(_resp.users);
          console.log(_resp.comments);
          console.log(_resp.albums);
      }
     })
   }
} 
