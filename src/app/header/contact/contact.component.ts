import { Component, OnInit, ViewChild } from "@angular/core";
import { ContactService } from "../../assets/services";

import * as models from "../../assets/models";
import * as utils from "../../assets/utils";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"],
})
export class ContactComponent implements OnInit {
  @ViewChild("target", { static: true }) target;

  contact: models.Contact;
  conditionConst: boolean = false;
  conditionVariable: boolean = false;

  constructor(private contactService: ContactService) {}

  ngOnInit() {
    this.initContact();
    utils.ifVisible(this, this.target.nativeElement, 80, this.activate);
  }

  initContact() {
    this.contact = this.contactService.contact;
  }

  activate() {
    utils.waitXms(this, 0, () => (this.conditionConst = utils.activate()));
    utils.waitXms(this, 1, () => (this.conditionVariable = utils.activate()));
  }
}
