import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form !: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { this.buildForm(); }

  ngOnInit(): void {
  }

  login(event: Event): void{
    event.preventDefault();
    console.log(this.form.value);
    if (this.form.valid){
      const user = this.form.value;
      this.authService.login(user)
        .subscribe( user => {
          this.router.navigate(['./admin']);
        });
    }
  }

  private buildForm(): void{
    this.form = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }
}
