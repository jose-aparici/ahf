export const findFolderIndexByName = (
  folderNames: string[],
  name: string,
): number => {
  const indexFound = folderNames.findIndex((folderName) => folderName === name);
  return indexFound >= 0 ? indexFound : 0;
};
