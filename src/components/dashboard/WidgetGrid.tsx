"use client";

import { IoCartOutline } from "react-icons/io5";
import { SimpleWidget } from "./SimpleWidget";
import { useAppSelector } from "@/lib/hooks";

export const WidgetGrid = () => {
  const isCart = useAppSelector((state) => state.counter.count);

  return (
    <div className="flex flex-wrap p-2 items-center justify-center">
      <SimpleWidget
        title="Contador"
        subTitle="Productos en el carrito"
        href="/dashboard/counter"
        label={`${isCart}`}
        icon={<IoCartOutline size={70} className="text-blue-600" />}
      />
    </div>
  );
};
