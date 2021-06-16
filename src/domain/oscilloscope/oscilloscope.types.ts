export interface Channel {
  id: number;
  label: string[];
}

export interface Settings {
  channels: Channel[];
}

export interface Oscilloscope {
  settings: Settings;
}
