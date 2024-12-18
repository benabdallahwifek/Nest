import { Resource } from '../enums/resource.enum';
import { Action } from '../enums/action.enum';

export class Permission {
  resource: Resource;
  actions: Action[];
}

  