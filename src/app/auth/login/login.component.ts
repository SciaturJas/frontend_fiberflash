import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isShowAlert: any = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  showSuccess() {
    this.isShowAlert = !this.isShowAlert;
    setTimeout(() => {
      this.router.navigate(['/auth/password']);
    }, 1500)
  }

}
