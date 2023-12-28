"use client";
import Button from "@/components/ui/Button";
import IconButton from "@/components/ui/IconButton";
import { Color, Size } from "@/types";
import { Dialog } from "@headlessui/react";
import { Plus, X } from "lucide-react";
import React, { useState } from "react";
import Filter from "./Filter";
interface ModalFilter {
  colors: Color[];
  sizes: Size[];
}
const ModalFilter = ({ colors, sizes }: ModalFilter) => {
  const [open, setOpen] = useState(false);
  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);
  return (
    <>
      <Button onClick={onOpen} className="flex items-center gap-x-2 lg:hidden">
        Filter
        <Plus size={20} />
      </Button>
      <Dialog onClose={onClose} open={open}>
        {/* Dialog background */}
        <div className="fixed inset-0 flex items-center bg-black bg-opacity-25" />

        {/* Dialog position */}
        <div className="fixed inset-0 z-40 flex">
          <Dialog.Panel
            className="ml-auto bg-white h-full w-full max-w-xs relative
           flex flex-col overflow-y-auto shadow-xl py-4 pb-6"
          >
            {/* Button Close */}
            <div className="flex items-center justify-end px-4">
              <IconButton icon={<X size={15} />} onClick={onClose} />
            </div>
            {/* Render the filter */}
            <div className="p-4">
              <Filter valueKey="sizeId" name="Size" data={sizes} />
              <Filter valueKey="colorId" name="Color" data={colors} />
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default ModalFilter;
