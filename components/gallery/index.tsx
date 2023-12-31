'use client'
import { Image as ImageType } from "@/types";
import { Tab } from "@headlessui/react";
import React from "react";
import GalleryTab from "./GalleryTab";
import Image from "next/image";
const Gallery = ({ images }: { images: ImageType[] }) => {
  return (
    <Tab.Group as="div" className="flex flex-col-reverse">
      <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
        <Tab.List className="grid grid-cols-4 gap-6">
          {images.map((item) => (
            <GalleryTab key={item.id} image={item} />
          ))}
        </Tab.List>
      </div>
      <Tab.Panels className="aspect-square w-full">
        {images.map((item) => (
          <Tab.Panel key={item.id}>
            <div className="aspect-square relative h-full w-full sm:rounded-lg overflow-hidden">
              <Image
                fill
                alt=""
                src={item.url}
                className="object-cover object-center "
              />
            </div>
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
};
export default Gallery;
