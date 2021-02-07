export interface Export {
  id?: string;
  status?: {
    attempts?: number;
    finished?: boolean;
    stage?: string;
  };
  startedAt?: string;
  size?: string;
  exportUrl?: string;
}
