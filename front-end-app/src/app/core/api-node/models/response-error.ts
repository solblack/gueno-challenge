/* tslint:disable */
import { ValidationError } from './validation-error';

/**
 * Error description
 */
export interface ResponseError {
  developerMessage?: string;
  result?: string;
  status?: number;
  userMessage?: string;
  validationErrors?: Array<ValidationError>;
}
