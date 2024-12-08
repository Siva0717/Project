import { Component } from '@angular/core';

import{FormBuilder, FormGroup, FormControl,FormControlName,FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone:true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  form=new FormGroup({
    
    fullName:new FormControl ('', [Validators.required, Validators.minLength(3)]),
    email:new FormControl ('', [Validators.required, Validators.email]),
    password:new FormControl ('', [Validators.required, Validators.minLength(6)]),

  });
  constructor(private router:Router){}
  submit(){
    if(this.form.valid){
    this.router.navigate(['/home']);
    }
    else{
      alert("Please enter valid credentials");
    }

  }
}

