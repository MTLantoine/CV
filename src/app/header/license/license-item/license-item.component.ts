import { Component, OnInit, Input } from "@angular/core";
import * as utils from "../../../assets/utils";

@Component({
  selector: "app-license-item",
  templateUrl: "./license-item.component.html",
  styleUrls: ["./license-item.component.scss"],
})
export class LicenseItemComponent implements OnInit {
  @Input() license;
  @Input() index;
  private _isVisible: boolean;
  @Input() set isVisible(value: boolean) {
    this._isVisible = value;
    utils.isVisible(this, this._isVisible, true, this.activate);
  }

  condition: boolean = false;

  constructor() {}

  ngOnInit() {}

  activate() {
    utils.waitXms(this, this.index, this.changeCondition);
  }

  changeCondition() {
    this.condition = utils.activate();
  }
}
