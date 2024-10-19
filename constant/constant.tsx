// navLinks.ts
import {
    IconClipboardCopy,
    IconFileBroken,
    IconSignature,
    IconTableColumn,
  } from "@tabler/icons-react";
  import { div } from "framer-motion/client";
  

const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
  );
  export const items = [
    {
      title: "",
      description: "",
      header: <Skeleton />,
      className: "md:col-span-2",
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
      image: "https://via.placeholder.com/300?text=Custom+Design", // Add your image URL here
    },
    {
      title: "",
      description: "",
      header: <Skeleton />,
      className: "md:col-span-1",
      icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
      image: "https://via.placeholder.com/300?text=Quality+Materials",
    },
    {
      title: "",
      description: "",
      header: <Skeleton />,
      className: "md:col-span-1",
      icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
      image: "https://via.placeholder.com/300?text=Art+of+Design",
    },
    {
      title: "",
      description: "",
      header: <Skeleton />,
      className: "md:col-span-2",
      icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
      image: "https://via.placeholder.com/300?text=Craftsmanship",
    },
  ];
  