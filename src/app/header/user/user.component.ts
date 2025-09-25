import { Component, OnInit, ViewChild } from "@angular/core";
import { UserService } from "src/app/assets/services";

import * as models from "../../assets/models";
import * as utils from "../../assets/utils";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"],
})
export class UserComponent implements OnInit {
  @ViewChild("target", { static: true }) target;

  user: models.User;
  userAge: number;
  condition1: boolean = false;
  condition2: boolean = false;
  condition3: boolean = false;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.initUser();
    utils.ifVisible(this, this.target.nativeElement, 80, this.activate);
    // Disabled easter egg for the moment
    if (false) {
      utils.ifElseVisible(
        this,
        this.target.nativeElement,
        70,
        this.easterEggOff,
        this.easterEggOn
      );
    }
  }
  initUser() {
    this.user = this.userService.user;
    this.userAge = this.calculateAge(this.user.birthDate);
  }

  activate() {
    utils.waitXms(this, 0, () => (this.condition1 = utils.activate()));
    utils.waitXms(this, 1, () => (this.condition2 = utils.activate()));
  }

  calculateAge(birthDate: Date): number {
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    return age;
  }

  easterEggOn() {
    this.condition3 = true;
  }

  easterEggOff() {
    this.condition3 = false;
  }
}
