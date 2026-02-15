"use client";

import { Button } from "@/components/ui/button";
import { columns } from "../comp/table/column";
import { DataTable } from "../comp/table/data-table";

type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

export const paymentsData: Payment[] = [
  {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "489e1d42",
    amount: 125,
    status: "processing",
    email: "example@gmail.com",
  },
];

import { useState } from "react";

export default function Table() {
  const [selectedRows, setSelectedRows] = useState<any[]>([]);
  return (
    <div className="max-w-3xl mx-auto p-10">
      <DataTable
        columns={columns}
        data={paymentsData}
        onSelectedRowsChange={setSelectedRows}
      />

      <Button
        onClick={() => {
          console.log(selectedRows);
        }}
      >
        Hey
      </Button>
    </div>
  );
}
