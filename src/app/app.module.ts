import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

import {
  CompetenceService,
  ContactService,
  ExperienceService,
  FormationService,
  IntroService,
  LanguageService,
  PassionService,
  UserService,
  GithubService,
  KnowledgeService,
  AboutMeService,
} from "./assets/services";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { LicenseComponent } from "./header/license/license.component";
import { LicenseItemComponent } from "./header/license/license-item/license-item.component";
import { UserComponent } from "./header/user/user.component";
import { CopyrightComponent } from "./header/copyright/copyright.component";
import { ContactComponent } from "./header/contact/contact.component";
import { IntroComponent } from "./body/intro/intro.component";
import { BodyComponent } from "./body/body.component";
import { FooterComponent } from "./footer/footer.component";
import { GraphComponent } from "./component/graph/graph.component";
import { CompetenceComponent } from "./body/competence/competence.component";
import { GraphItemComponent } from "./component/graph/graph-item/graph-item.component";
import { LanguageComponent } from "./body/language/language.component";
import { HistoricalComponent } from "./component/historical/historical.component";
import { HistoricalItemComponent } from "./component/historical/historical-item/historical-item.component";
import { FormationComponent } from "./body/formation/formation.component";
import { TitleComponent } from "./component/title/title.component";
import { ExperienceComponent } from "./body/experience/experience.component";
import { PassionComponent } from "./body/passion/passion.component";
import { BoxComponent } from "./component/box/box.component";
import { BoxItemComponent } from "./component/box/box-item/box-item.component";
import { CvComponent } from "./app-core/cv/cv.component";
import { AppCoreComponent } from "./app-core/app-core.component";
import { NotFoundComponent } from "./component/not-found/not-found.component";
import { GithubComponent } from "./footer/github/github.component";
import { TextComponent } from "./component/text/text.component";
import { TextItemComponent } from "./component/text/text-item/text-item.component";
import { MentionsLegalesComponent } from "./component/mentions-legales/mentions-legales.component";
import { KnowledgeComponent } from "./body/knowledge/knowledge.component";
import { AboutMeComponent } from "./body/about-me/about-me.component";

const appRoutes: Routes = [
  { path: "", component: AppCoreComponent },
  { path: "cv", redirectTo: "" },
  { path: "mentions-legales", component: MentionsLegalesComponent },
  { path: "404", component: NotFoundComponent },
  { path: "**", redirectTo: "/404" },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LicenseComponent,
    LicenseItemComponent,
    UserComponent,
    CopyrightComponent,
    ContactComponent,
    IntroComponent,
    BodyComponent,
    FooterComponent,
    GraphComponent,
    CompetenceComponent,
    GraphItemComponent,
    LanguageComponent,
    HistoricalComponent,
    HistoricalItemComponent,
    FormationComponent,
    TitleComponent,
    ExperienceComponent,
    PassionComponent,
    BoxComponent,
    BoxItemComponent,
    CvComponent,
    AppCoreComponent,
    NotFoundComponent,
    GithubComponent,
    TextComponent,
    TextItemComponent,
    MentionsLegalesComponent,
    KnowledgeComponent,
    AboutMeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
  ],
  providers: [
    CompetenceService,
    ContactService,
    ExperienceService,
    FormationService,
    IntroService,
    LanguageService,
    PassionService,
    UserService,
    GithubService,
    KnowledgeService,
    AboutMeService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
