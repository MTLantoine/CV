import { Component, OnInit, Input } from "@angular/core";
import * as utils from "../../../assets/utils";

@Component({
  selector: "app-historical-item",
  templateUrl: "./historical-item.component.html",
  styleUrls: ["./historical-item.component.scss"],
})
export class HistoricalItemComponent implements OnInit {
  @Input() element;
  @Input() index;
  condition: boolean;
  private _isVisible: boolean;
  @Input() set isVisible(value: boolean) {
    this._isVisible = value;
    utils.isVisible(this, this._isVisible, true, this.activate);
  }

  constructor() {}

  ngOnInit() {}

  activate() {
    utils.waitXms(this, this.index, this.changeCondition);
  }

  changeCondition() {
    this.condition = utils.activate();
  }
}
