import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { User } from 'src/app/_models/user';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from '_services/alertify.service';
import { NgForm } from '@angular/forms';
import { UserService } from '_services/user.service';
import { AuthService } from '_services/auth.service';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css']
})
export class MemberEditComponent implements OnInit {
  @ViewChild('editForm', {static: true}) editForm: NgForm;
  user: User;
  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any) {
      if (this.editForm.dirty) {
          $event.returnValue = true;
      }
  }

  constructor(private route: ActivatedRoute, private alterfy: AlertifyService,
              private userService: UserService, private authService: AuthService) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
        this.user = data['user'];
    });
  }

  updateUser() {
   this.userService.updateUser(this.authService.decodeToken.nameid, this.user).subscribe(next => {
    this.alterfy.success('修改成功');
    this.editForm.reset(this.user);
   }, error => {
     this.alterfy.error(error);
   });
  }

}
