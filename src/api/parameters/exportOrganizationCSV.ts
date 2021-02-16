export interface ExportOrganizationCSV {
  /** The ID or name of the team */
  id: string;
  /** Whether the CSV should include attachments or not. */
  attachments?: boolean;
}
