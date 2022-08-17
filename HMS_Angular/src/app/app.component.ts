import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { generalPath, serverUrl, applicationUrl } from 'src/app/constants/generalConstants';
import { CookieService } from 'ngx-cookie-service';
import Swal from 'sweetalert2';
import { AdminService } from './service/admin.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'HMS';
  loginCheck: any = 0;
  aUrl = applicationUrl;
  sUrl = serverUrl;
  gPath = generalPath;
  role:any = "OWNER";



  constructor(private formBuilder: FormBuilder, private activeroute: ActivatedRoute, private router: Router, private cookies: CookieService, private AdminService: AdminService) { }

  ngOnInit() {
    if (localStorage.getItem("token")) {
      if(localStorage.getItem("role") == "MANAGER")
      {
        this.loginCheck = "2";
        this.loadscript();
      }

      if(localStorage.getItem("role") == "OWNER")
      {
        this.loginCheck = "1";
        this.loadscript();
      }
     
      if(localStorage.getItem("role") == "RECEPTIONIST")
      {
        this.loginCheck = "3";
        this.loadscript();
      }
    }
  }

  public loadExternalScript(url: string) {
    const body = <HTMLDivElement>document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = true;
    script.defer = true;
    body.appendChild(script);

  }

  loadscript() {
    this.loadExternalScript(this.aUrl + this.gPath + "assets/assets/js/initailize.js");
  }

  async login(loginForm: NgForm) {
    let json: any = {};
    json.username = loginForm.value.username;
    json.password = loginForm.value.password;
    json.role = loginForm.value.role;

    this.AdminService.adminlogin(json).subscribe(data => {
      localStorage.setItem("token", data);
      localStorage.setItem("role", loginForm.value.role);

      if(loginForm.value.role == "OWNER")
      {
        this.loginCheck = 1;
        this.router.navigate(['/dashboard']);
      }

      if(loginForm.value.role == "MANAGER")
      {
        this.loginCheck = 2;
        this.router.navigate(['/dashboard']);
      }
      
      if(loginForm.value.role == "RECEPTIONIST")
      {
        this.loginCheck = 3;
        this.router.navigate(['/dashboard']);
      }
    })

  }
}
