import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

interface IUser {
  unserName: string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  registerUser!: FormGroup;
  user: IUser

  constructor() {
    this.user = {} as IUser
  }


  ngOnInit(): void {
    this.registerUser = new FormGroup({
      userName: new FormControl('',[
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(5)
      ])
    })
  }

  get userName() {
    return this.registerUser.get('userName')!;
  }

  /**
   * Validate
 : void  */
  public Validate(): void {
    if (this.registerUser.invalid) {
      return;
    }

    this.user = this.registerUser.value
  }

}
