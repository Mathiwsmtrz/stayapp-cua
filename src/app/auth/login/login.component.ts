import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  constructor(
    private router: Router,
    private fb: FormBuilder,
  ) {
    this.buildForm();
  }

  ngOnInit() {
  }

  buildForm() {
    this.form = this.fb.group({
      type: ['2', [Validators.required]],
      user: ['', [Validators.required]],
      pass: ['', [Validators.required]],
    });
  }

  login() {
    const form = Object.assign({}, this.form.getRawValue());
    this.router.navigate([`/${Number(form.type) === 1 ? 'client' : 'user'}`]);
  }
}
