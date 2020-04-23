import { Component, OnInit, ViewChild, Input } from "@angular/core";

import * as models from "../../assets/models";
import * as utils from "../../assets/utils";

@Component({
  selector: "app-text",
  templateUrl: "./text.component.html",
  styleUrls: ["./text.component.scss"],
})
export class TextComponent implements OnInit {
  @ViewChild("target", { static: true }) target;

  @Input() text: models.Text;
  @Input() nbrItems: number;

  isVisible: boolean = false;

  constructor() {}

  ngOnInit() {
    utils.ifVisible(this, this.target.nativeElement, 80, this.activate);
  }

  activate() {
    this.isVisible = utils.activate();
  }
}
