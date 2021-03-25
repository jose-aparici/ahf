import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AhfContext } from 'store/context';

interface Props {
  deviceId: string;
}

export const AhfDeviceContainer: React.FC<Props> = ({ deviceId }: Props) => {
  const { state } = useContext(AhfContext);

  return (
    <>
      <div>This is the home page of device {deviceId} </div>
      <Link
        to={`${deviceId}/folder/${
          state.devices[+deviceId].structure.FolderNames[0]
        }`}
      >
        Got to the first folder
      </Link>
    </>
  );
};
