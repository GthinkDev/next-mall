import { ChartAreaInteractive } from "@/components/chart-area-interactive";
import { DataTable } from "@/components/data-table";
import type { FC } from "react";
import React, { memo } from "react";
import data from "../../../dashboard/data.json";
import { SectionCards } from "@/components/section-cards";

const Page: FC = () => {
  return (
    <section className="flex flex-col gap-2 w-full ">
      <SectionCards />
      <ChartAreaInteractive />
      <div className="cardBase overflow-auto">
        <DataTable data={data} />
      </div>
    </section>
  );
};

export default memo(Page);
