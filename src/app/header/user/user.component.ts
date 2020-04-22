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
  condition1: boolean = false;
  condition2: boolean = false;
  condition3: boolean = false;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.initUser();
    utils.ifVisible(this, this.target.nativeElement, 80, this.activate);
    utils.ifElseVisible(
      this,
      this.target.nativeElement,
      70,
      this.easterEggOff,
      this.easterEggOn
    );
  }
  initUser() {
    this.user = this.userService.user;
  }

  activate() {
    utils.waitXms(this, 0, () => (this.condition1 = utils.activate()));
    utils.waitXms(this, 1, () => (this.condition2 = utils.activate()));
  }

  easterEggOn() {
    this.condition3 = true;
  }

  easterEggOff() {
    this.condition3 = false;
  }
}
