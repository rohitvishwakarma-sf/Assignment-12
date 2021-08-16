import { Component, OnInit } from '@angular/core';
import { Role, User } from './user.model';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'client-angular';
  loading = false;
  btnText = 'Load';
  users: User[] = [];
  constructor(private usersService: UsersService) {}
  ngOnInit() {
    this.usersService.usersChanged.subscribe((user) => {
      this.users = user;
    });
  }

  async btnLoadClick() {
    this.loading = true;
    this.btnText = 'Loading...';
    this.users = await this.usersService.getUsers();
    this.loading = false;
    console.log(this.users[0]);
    
    this.btnText = 'Refresh';
  }
}
