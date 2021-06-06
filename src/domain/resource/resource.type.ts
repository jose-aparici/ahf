import { Folder } from 'domain/folder/folder.types';

export type Resource = {
  folder: Folder;
  currentParamIndex: number | undefined;
};

export type ResourcePayload = Resource;

export enum ResourceCommand {
  RESOURCE_CHANGE = 'RESOURCE_CHANGE',
}
