import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { ClientRequest } from "../core/api-node/models/client-request";
import { distinctUntilChanged } from "rxjs/operators";

@Injectable()
export class ClientStore {
  clientBS = new BehaviorSubject<ClientRequest>(null);
  constructor() {}

  set setClient(client: ClientRequest) {
    this.clientBS.next(client);
  }

  get client$() {
    return this.clientBS.asObservable().pipe(distinctUntilChanged());
  }

  get client() {
    return this.clientBS.getValue();
  }
}
