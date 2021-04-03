import { useSocketHook } from 'hooks/socket-hook';
import React, { useEffect } from 'react';

interface Props {
  deviceId: string;
}

export const AhfDeviceContainer: React.FC<Props> = ({ deviceId }: Props) => {
  const { update } = useSocketHook();

  useEffect(() => {
    update(deviceId, 'Active Harmonic Filter');
  }, [deviceId, update]);

  return (
    <>
      <div>device container {deviceId}</div>
    </>
  );
};
