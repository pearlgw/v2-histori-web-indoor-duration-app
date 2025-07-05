import React from 'react'
import { Pagination, PaginationContent, PaginationItem, PaginationPrevious, PaginationNext, PaginationLink } from "@/components/ui/pagination";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export type UserHistory = {
  id: string;
  action: string;
  fullname: string;
  created_at: string;
};

const data: UserHistory[] = [
  { id: "1", fullname: "Dzawil Uqul", action: "login", created_at: "2021-10-10" },
  { id: "2", fullname: "Najma Amira Mumtaz", action: "logout", created_at: "2021-10-12" },
  { id: "3", fullname: "Budi", action: "login", created_at: "2021-10-15" },
  { id: "4", fullname: "Ali", action: "logout", created_at: "2021-10-18" },
  { id: "5", fullname: "Siti", action: "login", created_at: "2021-10-19" },
  { id: "6", fullname: "Rudi", action: "logout", created_at: "2021-10-20" },
  { id: "7", fullname: "Rina", action: "login", created_at: "2021-10-22" },
  { id: "8", fullname: "Roni", action: "logout", created_at: "2021-10-25" },
  { id: "9", fullname: "Rina", action: "login", created_at: "2021-10-26" },
  { id: "10", fullname: "Roni", action: "logout", created_at: "2021-10-27" },
  { id: "11", fullname: "Rina", action: "login", created_at: "2021-10-29" },
  { id: "12", fullname: "Roni", action: "logout", created_at: "2021-10-30" },
  { id: "13", fullname: "Rina", action: "login", created_at: "2021-11-01" },
  { id: "14", fullname: "Roni", action: "logout", created_at: "2021-11-02" },
  { id: "15", fullname: "Rina", action: "login", created_at: "2021-11-03" },
  { id: "16", fullname: "Roni", action: "logout", created_at: "2021-11-05" },
  { id: "17", fullname: "Rina", action: "login", created_at: "2021-11-06" },
  { id: "18", fullname: "Roni", action: "logout", created_at: "2021-11-08" },
  { id: "19", fullname: "Rina", action: "login", created_at: "2021-11-09" },
];

const DetailTable = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const rowsPerPage = 10;
  const [filter, setFilter] = React.useState("");

  const filteredData = data.filter((user) =>
    user.fullname.toLowerCase().includes(filter.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const paginatedData = filteredData.slice(startIndex, startIndex + rowsPerPage);

  return (
    <>
      {/* Table */}
      <div className="rounded-xl overflow-hidden">
        <Table>
          <TableHeader className="bg-primary">
            <TableRow>
              <TableHead className="text-center text-white py-4">No</TableHead>
              <TableHead className="text-center text-white">Nama</TableHead>
              <TableHead className="text-center text-white">Aksi</TableHead>
              <TableHead className="text-center text-white">Tanggal</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedData.length > 0 ? (
              paginatedData.map((user, index) => (
                <TableRow key={user.id}>
                  <TableCell className="py-4 text-center">{startIndex + index + 1}</TableCell>
                  <TableCell className="text-center">{user.fullname}</TableCell>
                  <TableCell className="text-center">
                    <span className={user.action === "Indoor" ? "text-green-600" : "text-red-600"}>
                      {user.action}
                    </span>
                  </TableCell>
                  <TableCell className="text-center">{user.created_at}</TableCell>
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
    {totalPages > 1 && (
      <Pagination className="mt-4 py-4">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              aria-disabled={currentPage === 1}
              className="cursor-pointer hover:bg-gray-200"
            />
          </PaginationItem>
          {[...Array(totalPages)].map((_, index) => (
            <PaginationItem key={index}>
              <PaginationLink
                isActive={currentPage === index + 1}
                onClick={() => setCurrentPage(index + 1)}
                className="cursor-pointer"
              >
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              aria-disabled={currentPage === totalPages}
              className="cursor-pointer hover:bg-gray-200"
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    )}
    </>
  )
}

export default DetailTable