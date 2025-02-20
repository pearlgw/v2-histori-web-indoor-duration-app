"use client";

import * as React from "react";
import { Input } from "@/components/ui/input";
import { HiMagnifyingGlass } from "react-icons/hi2";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export type DetectedUser = {
  id: string;
  name: string;
  totalDurasi: number;
  status: "Indoor" | "Outdoor";
  createdAt: string;
};

const data: DetectedUser[] = [
  {
    id: "1",
    name: "Rizky",
    totalDurasi: 30,
    status: "Indoor",
    createdAt: "2021-10-10",
  },
  {
    id: "2",
    name: "Alya",
    totalDurasi: 45,
    status: "Outdoor",
    createdAt: "2021-10-12",
  },
  {
    id: "3",
    name: "Budi",
    totalDurasi: 25,
    status: "Indoor",
    createdAt: "2021-10-15",
  },
  {
    id: "4",
    name: "Budi",
    totalDurasi: 25,
    status: "Indoor",
    createdAt: "2021-10-15",
  },
  {
    id: "5",
    name: "Budi",
    totalDurasi: 25,
    status: "Indoor",
    createdAt: "2021-10-15",
  },
  {
    id: "6",
    name: "Budi",
    totalDurasi: 25,
    status: "Indoor",
    createdAt: "2021-10-15",
  },
  {
    id: "7",
    name: "Budi",
    totalDurasi: 25,
    status: "Indoor",
    createdAt: "2021-10-15",
  },
];

export function DataTableDemo() {
  const [filter, setFilter] = React.useState("");

  const filteredData = data.filter((user) =>
    user.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="container mx-auto">
      <div className="mx-14 py-4">
        <h1 className="text-2xl font-semibold">Cek Asistenmu!</h1>
        <div className="flex items-center justify-between py-4">
          <p>Kamu bisa mencari asistenmu apakah sudah berada di ruangan atau belum!</p>
          <div className="relative flex items-center">
            <HiMagnifyingGlass className="absolute left-3 text-gray-500" />
            <Input
              placeholder="Search..."
              value={filter}
              onChange={(event) => setFilter(event.target.value)}
              className="max-w-sm pl-10"
            />
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden">
          <Table>
            <TableHeader className="bg-primary">
              <TableRow>
                <TableHead className="text-center text-white py-4">No</TableHead>
                <TableHead className="text-center text-white">Nama</TableHead>
                <TableHead className="text-center text-white">Total Durasi (menit)</TableHead>
                <TableHead className="text-center text-white">Status</TableHead>
                <TableHead className="text-center text-white">Created At</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredData.length > 0 ? (
                filteredData.map((user, index) => (
                  <TableRow key={user.id}>
                    <TableCell className="py-4 text-center">{index + 1}</TableCell>
                    <TableCell className="text-center" >{user.name}</TableCell>
                    <TableCell className="text-center" >{user.totalDurasi} menit</TableCell>
                    <TableCell className="text-center" >
                      <span
                        className={
                          user.status === "Indoor"
                            ? "text-green-600"
                            : "text-red-600"
                        }
                      >
                        {user.status}
                      </span>
                    </TableCell>
                    <TableCell className="text-center">{user.createdAt}</TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-4">
                    No data found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
