// components/CustomAccordion.tsx
import * as Accordion from "@radix-ui/react-accordion";
import { motion } from "framer-motion";
import { Plus, X } from "lucide-react";
import { useState } from "react";

type CustomAccordionProps = {
  items: {
    id: number;
    title: string;
    subtitle?: string;
    content: string;
  }[];
};

export default function CustomAccordion({ items }: CustomAccordionProps) {
  return (
    <Accordion.Root type="single" collapsible className="w-full">
      {items.map((item, index) => (
        <AccordionItem
          key={item.id}
          item={item}
          isFirst={index === 0}
          isLast={index === items.length - 1}
        />
      ))}
    </Accordion.Root>
  );
}

type AccordionItemProps = {
  item: {
    id: number;
    title: string;
    subtitle?: string;
    content: string;
  };
  isFirst: boolean;
  isLast: boolean;
};

const AccordionItem = ({ item, isFirst, isLast }: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Accordion.Item
      value={`item-${item.id}`}
      className={`border-gray-100 
      ${isFirst ? "border-t-0" : "border-t"} 
      ${isLast ? "border-b-0" : "border-b"}
    `}
    >
      <Accordion.Header className="w-full">
        <Accordion.Trigger
          className="flex justify-between w-full py-4"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="text-left">
            <div className="flex space-x-5">
            <p className="text-blue-600 font-semibold">0{item.id}</p>
            <p className="text-lg font-medium text-tintblue">{item.title}</p>
            </div>
            {item.subtitle && (
              <p className="text-sm text-gray-500 ml-5">{item.subtitle}</p>
            )}
          </div>
          <div className="text-blue-600 text-xl">{isOpen ? <X size={16}/> : <Plus size={16}/>}</div>
        </Accordion.Trigger>
      </Accordion.Header>

      <Accordion.Content forceMount>
        <motion.div
          initial={isOpen ? { opacity: 0, height: 0 } : false}
          animate={isOpen ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="py-4 pl-9 text-gray-700">{item.content}</div>
        </motion.div>
      </Accordion.Content>
    </Accordion.Item>
  );
};
