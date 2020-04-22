import { Component, OnInit, ViewChild } from "@angular/core";
import { ContactService } from "../../assets/services";

import * as models from "../../assets/models";
import * as utils from "../../assets/utils";

@Component({
  selector: "app-license",
  templateUrl: "./license.component.html",
  styleUrls: ["./license.component.scss"],
})
export class LicenseComponent implements OnInit {
  @ViewChild("target", { static: true }) target;

  contact: models.Contact;
  isVisible: boolean = false;

  constructor(private contactService: ContactService) {}

  ngOnInit() {
    this.initContact();
    utils.ifVisible(this, this.target.nativeElement, 80, this.activate);
  }

  initContact() {
    this.contact = this.contactService.contact;
  }

  activate() {
    this.isVisible = utils.activate();
  }
}
