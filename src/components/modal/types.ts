import { IWithChildren, IWithClass } from "@/types";
import { LegacyRef } from "react";

export interface IModal extends IWithChildren, IWithClass {
  title?: string;
  isModalOpen: boolean;
  handleCloseModal: () => void;
}
