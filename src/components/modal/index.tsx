import { useEffect, useRef } from "react";
import classNames from "classnames";
import Image from "next/image";

import { IModal } from "./types";

const Modal: React.FC<IModal> = ({
  title,
  children,
  className,
  isModalOpen,
  handleCloseModal,
}) => {
  const modalRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    const modalElement = modalRef.current;
    if (modalElement) {
      if (isModalOpen) {
        modalElement.showModal();
      } else {
        modalElement.close();
      }
    }
  }, [isModalOpen]);

  return (
    <dialog
      className={classNames("bg-white p-5 shadow-xl rounded-md", className)}
      ref={modalRef}
    >
      <div className="flex justify-between mb-8">
        <h3 className="font-semibold text-xl">{title}</h3>
        <Image
          className="cursor-pointer"
          onClick={handleCloseModal}
          src="/close.svg"
          style={{ width: 24, height: 24 }}
          height={24}
          width={24}
          alt=""
        />
      </div>
      {children}
    </dialog>
  );
};

export default Modal;
