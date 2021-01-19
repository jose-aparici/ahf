import { Action, Payload } from 'store/actions';

import {
  Action as FolderAction,
  Payload as FolderPayload,
} from 'modules/folders/folder/store/actions';

export type AhfAction = Action | FolderAction;

export type AhfPayload = Payload | FolderPayload;
