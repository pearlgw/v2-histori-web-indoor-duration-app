"use client";

import * as React from "react";
import { Input } from "@/components/ui/input";
import { HiMagnifyingGlass } from "react-icons/hi2";
import dayjs from "dayjs"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Pagination, PaginationContent, PaginationItem, PaginationPrevious, PaginationNext, PaginationLink } from "@/components/ui/pagination";
import Link from "next/link";
import { getPersonDuration, PersonDuration } from "@/lib/personService";
import Image from "next/image";

interface DataTableDemoProps {
  title?: boolean;
  subtitle?: boolean;
  refreshSignal?: number;
  isAdmin?: boolean;
}



const DataTableDemo: React.FC<DataTableDemoProps> = ({ title, subtitle, refreshSignal = 0, isAdmin }) => {
  const [filter, setFilter] = React.useState("");
  const [currentPage, setCurrentPage] = React.useState(1);
  const rowsPerPage = 10;
  

  const [data, setData] = React.useState<PersonDuration[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getPersonDuration();
        setData(result);
      } catch (err: any) {
        setError(err.message || 'Error fetching data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [refreshSignal]);

  const filteredData = data.filter((user) =>
    user.name.toLowerCase().includes(filter.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const paginatedData = filteredData.slice(startIndex, startIndex + rowsPerPage);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-48">
        <Image src={"loading.svg"} width={50} height={50} alt=""/>
      </div>
    );
  }

  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <div className="mx-auto w-full">
      <div>
        {title && (
          <h1 className="text-2xl font-semibold">Cek Asistenmu!</h1>
        )}
        <div className="flex items-center justify-between py-4">
          {subtitle && (
            <p className="hidden xl:block">Kamu bisa mencari asistenmu apakah sudah berada di ruangan atau belum!</p>
          )}

          {/* Search */}
          <div className="relative flex items-center gap-5">
            <HiMagnifyingGlass className="absolute left-3 text-gray-500" />
            <Input
              placeholder="Cari Asisten..."
              value={filter}
              onChange={(event) => {
                setFilter(event.target.value);
                setCurrentPage(1);
              }}
              className="max-w-sm pl-10 border-gray-300"
            />
          </div>
        </div>

        {/* Table */}
        <div className="rounded-xl overflow-hidden">
          <Table>
            <TableHeader className="bg-primary">
              <TableRow>
                <TableHead className="text-center text-white py-4">No</TableHead>
                <TableHead className="text-center text-white">Nama</TableHead>
                <TableHead className="text-center text-white">Total Durasi</TableHead>
                <TableHead className="text-center text-white">Status</TableHead>
                <TableHead className="text-center text-white">Tanggal</TableHead>
                {isAdmin && (
                  <TableHead className="text-center text-white">Aksi</TableHead>
                )}
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedData.length > 0 ? (
                paginatedData.map((user, index) => (
                  <TableRow key={user.uid}>
                    <TableCell className="py-4 text-center">{startIndex + index + 1}</TableCell>
                    <TableCell className="text-center">{user.name}</TableCell>
                    <TableCell className="text-center">{user.total_duration}</TableCell>
                    <TableCell className="text-center">
                      <span className={user.status === "indoor" ? "text-green-600" : "text-red-600"}>
                        {user.status}
                      </span>
                    </TableCell>
                    <TableCell className="text-center">{dayjs(user.created_at).format('YYYY-MM-DD')}</TableCell>
                    {isAdmin && (
                      <TableCell className="text-center">
                        <Link href={`/dashboard/${user.uid}`} className="text-blue-500 hover:underline">
                          View Details
                        </Link>
                      </TableCell>
                    )}
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
      </div>
    </div>
  );
}

export default DataTableDemo;
