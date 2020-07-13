import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ClientFacade } from "../../facades/client.facade";
import { ClientStore } from "../../store/cliente.store";
import { ClientRequest } from "../../core/api-node/models/client-request";
import { Observable, of, Subject } from "rxjs";
import { distinctUntilChanged, takeUntil } from "rxjs/operators";

@Component({
  selector: "app-score-check",
  templateUrl: "./score-check.component.html",
  styleUrls: ["./score-check.component.css"],
})
export class ScoreCheckComponent implements OnInit, OnDestroy {
  public searchClient = new FormGroup({
    dni: new FormControl("", [
      Validators.required,
      Validators.minLength(7),
      Validators.maxLength(8),
      Validators.pattern("^[0-9]*$"),
    ]),
  });
  private unsubscribe = new Subject();
  public clientData: ClientRequest;
  public newSearch: boolean = true;
  public searchBtnClicked = false;

  constructor(
    private clientFacade: ClientFacade,
    private clientStore: ClientStore
  ) {}

  ngOnInit(): void {
    this.clientStore.client$
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((client) => {
        this.clientData = client;
      });
    this.searchClient.valueChanges
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((value) => {
        this.newSearch = true;
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  get searchingClient(): boolean {
    return this.clientFacade.searchingClient;
  }

  get clientSearchErrorMessage(): string {
    return this.clientFacade.clientSearchErrorMessage;
  }

  public search(): void {
    if (this.searchClient.invalid) {
      this.searchBtnClicked = true;
      return;
    }
    this.newSearch = false;
    this.searchBtnClicked = false;
    this.clientFacade.searchDni(this.searchClient.value.dni);
  }

  public formatCuit(cuit: number): string {
    let cuitString = cuit.toString();
    return (
      cuitString.slice(0, 2) +
      "-" +
      cuitString.slice(2, -1) +
      "-" +
      cuitString.slice(cuitString.length - 1)
    );
  }

  public formatDate(birthdate: string): string {
    let date = new Date(birthdate);
    let options = { year: "numeric", month: "long", day: "numeric" };
    let dateSpanish = date.toLocaleDateString("es-ES", options);
    return dateSpanish;
  }
}
