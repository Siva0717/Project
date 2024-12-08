import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-modules',
  standalone:true,
  imports: [],
  templateUrl: './modules.component.html',
  styleUrl: './modules.component.css'
})
export class ModulesComponent {
  constructor(private router: Router){}
  
    tran(){
      this.router.navigate(['user'])
    }
  }


