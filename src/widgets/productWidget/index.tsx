"use client";

import { useEffect, useState } from "react";

import Input from "@/components/input";
import { useDebounce } from "@/shared/hooks/debounce";
import { ReadyForTableType, sortDataForTable } from "@/shared/helpers";
import Button from "@/components/button";
import Modal from "@/components/modal";
import { JSONArr } from "@/types";

import StandartTable from "../tables/standartTable";

interface WidgetWithTableAndFilter {
  inputData: JSONArr;
  label: string;
}

const WidgetWithTableAndFilter: React.FC<WidgetWithTableAndFilter> = ({
  inputData,
  label,
}) => {
  const [filter, setFilter] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [valueForModal, setvalueForModal] = useState<string>("");
  const [idForModal, setIdForMOdal] = useState<number | null>(null);
  const [data, setData] = useState(sortDataForTable(inputData));
  const [filterData, setFilterData] = useState<ReadyForTableType>(
    sortDataForTable(inputData)
  );
  const debounceFilterValue = useDebounce(filter);

  useEffect(() => {
    setFilterData(() => {
      const newArr = data.values.filter((item) => {
        const find = Object.entries(item).find((item) =>
          item[1]?.toString().includes(debounceFilterValue)
        );
        return find;
      });
      const newData = { ...data, values: [...newArr] };
      return newData;
    });
  }, [debounceFilterValue, data]);

  const handleCloseModal = () => {
    setvalueForModal("");
    setIsModalOpen(false);
  };

  const handleEditRowName = () => {
    setData((data) => {
      const newValues = data.values.map((value) => {
        if (value.id === idForModal && valueForModal) {
          return { ...value, name: valueForModal };
        }
        return value;
      });
      return { ...data, values: newValues };
    });

    setIsModalOpen(false);
    setvalueForModal("");
    setIdForMOdal(null);
  };

  const handleOpenModal = (id: number) => {
    setIdForMOdal(id);
    setIsModalOpen(true);
  };

  const handleFilterOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  const handleChangeEditVelue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setvalueForModal(e.target.value);
  };

  return (
    <div>
      <div className="flex justify-between items-center my-2">
        <h1 className="ml-5 font-bold text-xl">{label}</h1>
        <Input
          placeholder="Search"
          value={filter}
          onChange={handleFilterOnChange}
        />
      </div>
      <StandartTable
        data={filterData}
        onEdit={handleOpenModal}
        empty={filterData.values.length === 0}
      />
      <Modal
        className="w-[700px] pb-12"
        isModalOpen={isModalOpen}
        handleCloseModal={handleCloseModal}
        title="Edit"
      >
        <form
          className="flex flex-col gap-4 items-center"
          onSubmit={handleEditRowName}
        >
          <Input
            className="w-full"
            label="Name"
            value={valueForModal}
            onChange={handleChangeEditVelue}
          />
          <Button formMethod="dialog" text="Save" />
        </form>
      </Modal>
    </div>
  );
};

export default WidgetWithTableAndFilter;
