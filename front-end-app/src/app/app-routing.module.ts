import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ScoreCheckComponent } from "./components/score-check/score-check.component";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "credit-score",
  },
  {
    path: "credit-score",
    component: ScoreCheckComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
