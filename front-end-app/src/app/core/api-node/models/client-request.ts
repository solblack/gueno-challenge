/* tslint:disable */
export interface ClientRequest {
  birthday?: string;
  name?: string;
  surname?: string;
  scoring?: { confidence?: number; approved?: boolean };
  cuit?: number;
}
