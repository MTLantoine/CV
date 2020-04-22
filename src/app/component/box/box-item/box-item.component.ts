import { Component, OnInit, Input } from "@angular/core";
import * as utils from "../../../assets/utils";

@Component({
  selector: "app-box-item",
  templateUrl: "./box-item.component.html",
  styleUrls: ["./box-item.component.scss"],
})
export class BoxItemComponent implements OnInit {
  @Input() item;
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
    utils.waitXms(this, this.index / 3, this.changeCondition);
  }

  changeCondition() {
    this.condition = utils.activate();
  }
}
