import { Injectable } from "@angular/core";
import { ClientStore } from "../store/cliente.store";
import { ClientsService } from "../core/api-node/services/clients.service";

@Injectable()
export class ClientFacade {
  public searchingClient: boolean = false;
  public clientSearchErrorMessage: string = "";
  constructor(
    private clientStore: ClientStore,
    private clientService: ClientsService
  ) {}

  public searchDni(dni: number): void {
    this.searchingClient = true;
    this.clientService.getClient(dni).subscribe(
      (res) => {
        if (res.status == "200") {
          this.clientStore.setClient = res.data;
        }
        this.searchingClient = false;
      },
      (err) => {
        this.clientStore.setClient = null;
        this.clientSearchErrorMessage =
          err.status == "400"
            ? "No se encontró un cliente con el DNI ingresado."
            : "Hubo un problema al buscar los datos del cliente. Intente más tarde.";

        this.searchingClient = false;
      }
    );
    // this.clientStore.setClient = client;
  }
}
