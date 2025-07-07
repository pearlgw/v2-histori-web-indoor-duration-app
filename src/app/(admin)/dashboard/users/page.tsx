"use client";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import UserList from "@/components/UserList";
import { getAllUsers } from "@/lib/adminService";
import { toast } from "react-hot-toast";

const page = () => {
  const { data: session } = useSession();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUsers() {
      try {
        if (!session?.accessToken) return;

        const userList = await getAllUsers(session.accessToken);
        console.log(userList)
        setUsers(userList);
      } catch (error: any) {
        toast.error("Gagal mengambil data user");
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, [session]);

  if (loading) return <p className="p-6">Loading...</p>;

  return (
    <div className='w-full py-6 bg-white'>
      <div className='mx-4 md:mx-14'>
        <UserList data={users} sessionToken={session?.accessToken ?? ""} />
      </div>
    </div>
  )
}

export default page