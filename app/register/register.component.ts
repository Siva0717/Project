import { Component, NgModule } from '@angular/core';
import{FormBuilder, FormGroup, FormControl,FormControlName,FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  standalone:true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  form=new FormGroup({
    
      fullName:new FormControl ('', [Validators.required, Validators.minLength(3)]),
      email:new FormControl ('', [Validators.required, Validators.email]),
      password:new FormControl ('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl('', [Validators.required]),
      phone:new FormControl('', [Validators.required]),
    });
    constructor(private router:Router){}
    submit(){
      if(this.form.valid){
      localStorage.setItem("fullName",this.form.get('fillName')?.value as unknown as string)
      this.router.navigate(['/login'])
    }
    else{
      alert('Please fill the form correctly to proceed');
    }
  }
}
