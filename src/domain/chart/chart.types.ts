import { OscilloscopeMode } from 'domain/oscilloscope-settings/oscilloscope-settings.types';

export type Chart = Record<OscilloscopeMode, Data>;

/* export interface Data {
  labels: string[];
  datasets: Dataset[];
} */

export interface Dataset {
  label: string;
  data: number[];
  fill: boolean;
  backgroundColor: string;
  borderColor: string;
  tension: number;
  borderWidth: number;
  radius: number;
}

export interface Data {
  labels: string[];
  datasets: Dataset[];
}
