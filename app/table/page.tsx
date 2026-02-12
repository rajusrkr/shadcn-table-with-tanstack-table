import { Card, CardContent } from "@/components/ui/card";
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

export default function Table() {
  return (
    <div className="max-w-3xl mx-auto p-10">
      <DataTable columns={columns} data={paymentsData} />
    </div>
  );
}
