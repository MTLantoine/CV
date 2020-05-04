import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-sign-in",
  templateUrl: "./sign-in.component.html",
  styleUrls: ["./sign-in.component.scss"],
})
export class SignInComponent implements OnInit {
  signInForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.signInForm = this.formBuilder.group({
      mail: "",
      pwd: "",
    });
  }

  onSubmitForm() {
    const formValue = this.signInForm.value;
    console.log(formValue);
    // const newUser = new User(
    //   formValue['firstName'],
    //   formValue['lastName'],
    //   formValue['email'],
    //   formValue['drinkPreference']
    // );
    // this.userService.addUser(newUser);
    // this.router.navigate(['/users']);
  }
}
