import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ScoreCheckComponent } from "./components/score-check/score-check.component";
import { HeaderComponent } from "./components/header/header.component";
import { ClientFacade } from "./facades/client.facade";
import { ClientStore } from "./store/cliente.store";
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  declarations: [AppComponent, ScoreCheckComponent, HeaderComponent, SpinnerComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [ClientFacade, ClientStore],
  bootstrap: [AppComponent],
})
export class AppModule {}
