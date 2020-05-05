import { Component, OnInit, ViewChild } from "@angular/core";
import { KnowledgeService } from "src/app/assets/services";

import * as models from "../../assets/models";
import * as utils from "../../assets/utils";

@Component({
  selector: "app-knowledge",
  templateUrl: "./knowledge.component.html",
  styleUrls: ["./knowledge.component.scss"],
})
export class KnowledgeComponent implements OnInit {
  @ViewChild("target", { static: true }) target;

  knowledges: models.Passion;
  isVisible: boolean = false;

  constructor(private knowledgeService: KnowledgeService) {}

  ngOnInit() {
    this.initKnowledge();
    utils.ifVisible(this, this.target.nativeElement, 80, this.activate);
  }

  initKnowledge() {
    this.knowledges = this.knowledgeService.connaissance;
  }

  activate() {
    this.isVisible = utils.activate();
  }
}
