import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { generalPath, serverUrl, applicationUrl } from 'src/app/constants/generalConstants';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  aUrl = applicationUrl;
  sUrl = serverUrl;
  gPath = generalPath;
  role:any;
  constructor(private cookies: CookieService,private router: Router) { }

  ngOnInit(): void {
    if(localStorage.getItem("role") == "MANAGER")
    {
      this.role = "MANAGER";
    }

    if(localStorage.getItem("role") == "OWNER")
    {
      this.role = "OWNER";
    }

    if(localStorage.getItem("role") == "RECEPTIONIST")
    {
      this.role = "RECEPTIONIST";
    }
  }
  logout() {
    localStorage.removeItem("token");
    window.location.reload();
    this.router.navigateByUrl('/');
  }
}
