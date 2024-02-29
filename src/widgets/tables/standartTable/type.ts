import { ReadyForTableType } from "@/shared/helpers";

export interface StandartTableProps {
  data: ReadyForTableType;
  loading?: boolean;
  onEdit: (id: number) => void;
  empty: boolean;
}
