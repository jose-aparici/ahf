export interface Data {
  labels: string[];
  datasets: Dataset[];
}

export interface Dataset {
  data: number[];
  fill: boolean;
  backgroundColor: string;
  borderColor: string;
}
