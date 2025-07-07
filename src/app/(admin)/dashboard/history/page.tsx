"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { toast } from "react-hot-toast";
import { getLogHistory } from "@/lib/adminService"; // kamu harus punya fungsi ini
import LogList from "@/components/LogList";

const HistoryPage = () => {
  const { data: session } = useSession();
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchLogs() {
      try {
        if (!session?.accessToken) return;

        const res = await getLogHistory(session.accessToken);
        console.log(res.data)
        setLogs(res.data);
      } catch (error) {
        toast.error("Gagal mengambil riwayat log");
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchLogs();
  }, [session]);

  if (loading) return <p className="p-6">Loading logs...</p>;

  return (
    <div className="w-full py-6 bg-gray-50 min-h-screen">
      <div className="mx-4 md:mx-14">
        <LogList logs={logs} />
      </div>
    </div>
  );
};

export default HistoryPage;
