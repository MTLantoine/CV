import { Component, OnInit } from "@angular/core";
import { LanguageService } from "../../assets/services";

import * as models from "../../assets/models";

@Component({
  selector: "app-language",
  templateUrl: "./language.component.html",
  styleUrls: ["./language.component.scss"],
})
export class LanguageComponent implements OnInit {
  languages: models.Competence;

  constructor(private languageService: LanguageService) {}

  ngOnInit() {
    this.initLanguage();
  }

  initLanguage() {
    this.languages = this.languageService.language;
  }
}
