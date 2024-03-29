import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form !: FormGroup;

  constructor(
    private formBuild: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) { this.buildForm(); }

  ngOnInit(): void {
  }

  register(event: Event): void{
    event.preventDefault();
    if (this.form.valid){
      const user = this.form.value;
      this.authService.register(user)
        .subscribe( newUser => {
          this.router.navigate(['./auth/login']);
        });
    }
  }

  private buildForm(): void{
    this.form = this.formBuild. group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      password_confirmation: ['', [Validators.required]]
    });
  }

}
