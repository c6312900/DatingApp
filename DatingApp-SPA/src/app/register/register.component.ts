import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 // @Input() valuesFromHome: any;
  @Output() cancleRegister = new EventEmitter();
  model: any = {};
  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  register() {
    this.auth.register(this.model).subscribe(() => {
     console.log('註冊成功!!!');
   }, error => {
     console.log(error);
   });
  }

  cancel() {
    this.cancleRegister.emit(false);
    console.log('取消');
  }

}
