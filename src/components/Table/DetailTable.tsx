// components/Table/DetailTable.tsx
"use client";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export type UserDetail = {
  uid: string;
  name: string;
  nim: string;
  labeled_image: string;
  name_track_id: string;
  start_time: string;
  end_time: string | null;
  person_duration_uid: string;
};

const DetailTable = ({ items }: { items: UserDetail[] }) => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const rowsPerPage = 10;
  const [filter, setFilter] = React.useState("");

  const filteredData = [...items]
  .filter((user) =>
    user.name.toLowerCase().includes(filter.toLowerCase())
  )
  .sort((a, b) => new Date(b.start_time).getTime() - new Date(a.start_time).getTime());


  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const paginatedData = filteredData.slice(startIndex, startIndex + rowsPerPage);

  const formatDateTime = (iso: string | null) => {
    if (!iso) return "-";
    const date = new Date(iso);
    return `${date.toISOString().split("T")[0]} pukul ${date.toTimeString().split(" ")[0]}`;
  };

  return (
    <>
      <div className="rounded-xl overflow-hidden">
        <Table>
          <TableHeader className="bg-primary">
            <TableRow>
              <TableHead className="text-center text-white">No</TableHead>
              <TableHead className="text-center text-white">Track ID</TableHead>
              <TableHead className="text-center text-white">Awal Terdeteksi</TableHead>
              <TableHead className="text-center text-white">Terakhir Terdeteksi</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedData.length > 0 ? (
              paginatedData.map((user, index) => (
                <TableRow key={user.uid}>
                  <TableCell className="text-center">{startIndex + index + 1}</TableCell>
                  <TableCell className="text-center">{user.name_track_id}</TableCell>
                  <TableCell className="text-center">{formatDateTime(user.start_time)}</TableCell>
                  <TableCell className="text-center">{formatDateTime(user.end_time)}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={4} className="text-center py-4">
                  Data tidak ditemukan
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {totalPages > 1 && (
        <Pagination className="mt-4 py-4">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              />
            </PaginationItem>
            {[...Array(totalPages)].map((_, index) => (
              <PaginationItem key={index}>
                <PaginationLink
                  isActive={currentPage === index + 1}
                  onClick={() => setCurrentPage(index + 1)}
                >
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </>
  );
};

export default DetailTable;
