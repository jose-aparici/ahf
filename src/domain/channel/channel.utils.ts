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
    const channels = params.map((param) => ({
      id: param.paramId,
      name: param.name[currentLanguage],
    }));

    channels.unshift({ id: 0, name: '---' });

    return channels;
  }
};
