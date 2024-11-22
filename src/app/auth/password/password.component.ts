import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent implements OnInit {
  isShowAlert: any = false;
  showpass: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goback() {
    this.router.navigate(['/auth/login']);
  }
  submitPassword() {
    this.isShowAlert = !this.isShowAlert;
    setTimeout(() => {
      this.router.navigate(['/onboarding/default']);
    }, 1500)
  }


  viewpassword() {
    this.showpass = !this.showpass;
  }
}
