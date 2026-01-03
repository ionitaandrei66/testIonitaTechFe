import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {AuthService} from '../../services/auth.service';
import {take} from 'rxjs';
import {Router, Routes} from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;

  constructor(private _fb: FormBuilder, private auth: AuthService, private route: Router) {
  }

  public ngOnInit() {
    this.loginForm = this._fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  public logIn(): void {
    this.auth.login({
      email: this.loginForm.controls['email'].value,
      password: this.loginForm.controls['password'].value
    }).pipe(take(1)).subscribe(
      () => {
        this.route.navigateByUrl('products')
      }
    )
  }

}
