import { Component, OnInit } from "@angular/core";

import * as utils from "../assets/utils";

@Component({
  selector: "app-app-core",
  templateUrl: "./app-core.component.html",
  styleUrls: ["./app-core.component.scss"],
})
export class AppCoreComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    utils.initSwiper();
  }
}
