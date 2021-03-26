import React from 'react';

interface Props {
  deviceId: string;
}

export const AhfDeviceContainer: React.FC<Props> = ({ deviceId }: Props) => {
  return (
    <>
      <div>device container {deviceId}</div>
    </>
  );
};
