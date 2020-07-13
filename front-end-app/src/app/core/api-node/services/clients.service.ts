/* tslint:disable */
import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpRequest,
  HttpResponse,
  HttpHeaders,
} from "@angular/common/http";
import { BaseService as __BaseService } from "../base-service";
import { ApiConfiguration as __Configuration } from "../api-configuration";
import { StrictHttpResponse as __StrictHttpResponse } from "../strict-http-response";
import { Observable as __Observable } from "rxjs";
import { map as __map, filter as __filter } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
class ClientsService extends __BaseService {
  static readonly getClientPath = "/api/clients/{dni}";

  constructor(config: __Configuration, http: HttpClient) {
    super(config, http);
  }

  /**
   * Returns client data by DNI
   * @param dni Client DNI
   * @return Success
   */
  getClientResponse(dni: number): __Observable<__StrictHttpResponse<any>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/api/clients/${encodeURIComponent(dni)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: "json",
      }
    );

    return this.http.request<any>(req).pipe(
      __filter((_r) => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<any>;
      })
    );
  }
  /**
   * Returns client data by DNI
   * @param dni Client DNI
   * @return Success
   */
  getClient(dni: number): __Observable<any> {
    return this.getClientResponse(dni).pipe(__map((_r) => _r.body as any));
  }
}

module ClientsService {}

export { ClientsService };
