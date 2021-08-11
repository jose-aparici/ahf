import { Folder } from 'domain/folder/folder.types';
import { Channel } from 'domain/oscilloscope-settings/oscilloscope-settings.types';
import { getParamsByFolderId } from 'domain/oscilloscope-settings/oscilloscope-settings.utils';

export const getChannelsByDevice = (
  rootFolder: Folder,
  folderId: string,
  currentLanguage: number,
): Channel[] | undefined => {
  const params = getParamsByFolderId(rootFolder, folderId);
  if (params === undefined) {
    return undefined;
  } else {
    return params.map((param) => ({
      id: param.paramId,
      name: param.name[currentLanguage],
    }));
  }
};
