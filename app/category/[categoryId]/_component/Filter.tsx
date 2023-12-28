"use client";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { Color, Size } from "@/types";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import React from "react";
interface FilterProps {
  valueKey: string;
  name: string;
  data: (Size | Color)[];
  onClose?:()=>void
}
const Filter = ({ valueKey, name, data,onClose }: FilterProps) => {
  const router = useRouter();
  const params = useParams();
  const searchParams = useSearchParams();
  const selectValue = searchParams.get(valueKey);
  const onClick = (id: string) => {
  
    const url = new URLSearchParams(searchParams);
    if (url.get(valueKey)) {
      if (url.get(valueKey) == id) {
        url.delete(valueKey);
      } else {
        url.set(valueKey, id);
      }
    } else {
      url.append(valueKey, id);
    }
    const URl = `${window.location.origin}/category/${params.categoryId}?${url}`;
    router.push(URl);
  };
  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold">{name}</h3>
      <hr className="my-4" />
      <div className="flex flex-wrap gap-2">
        {data.map((item) => (
          <div key={item.id} className="flex items-center">
            <Button
              onClick={() => onClick(item.id)}
              className={cn(
                "rounded-md text-sm text-gray-800 p-2 bg-white border border-gray-300",
                selectValue == item.id
                  ? "bg-black text-white"
                  : "text-black bg-white"
              )}
            >
              {item.name}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
