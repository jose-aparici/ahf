import { FOLDER_QUERY_PARAM } from './navigation.constants';

export const extractFolderIndex = (queryParams: URLSearchParams): number => {
  const folderQueryParam = queryParams.get(FOLDER_QUERY_PARAM);
  if (folderQueryParam !== null && !isNaN(+folderQueryParam)) {
    return +folderQueryParam;
  } else {
    return 0;
  }
};
