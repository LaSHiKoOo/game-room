import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AuthenticationService } from '../services/authenticate.service';
import appData from '../appData';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent implements OnInit {
  pageType = 'login';

  @ViewChild('nameField') name: ElementRef;
  @ViewChild('surnameField') surname: ElementRef;
  @ViewChild('passField') password: ElementRef;
  data = appData;

  constructor(private authService: AuthenticationService) {}

  ngOnInit() {}

  authorize() {
    const name = this.name.nativeElement.value;
    const surname = this.surname.nativeElement.value;
    const password = this.password.nativeElement.value;
    console.warn(name, surname, password);

    this.authService.login(name, surname, password).subscribe(user => {
      this.data.data.userStatus = 'authorized';
      console.warn(this.data.data.user, user);
      location.reload();
    });
  }
}
