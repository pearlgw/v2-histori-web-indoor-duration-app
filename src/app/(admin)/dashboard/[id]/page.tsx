// app/dashboard/[id]/page.tsx
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getPersonDetail } from "@/lib/personService";
import DecryptedImage from "@/components/DecryptedImage";
import DetailTable from "@/components/Table/DetailTable";
import UserProfile from "@/components/UserProfile";
import { UserDetail } from "@/components/Table/DetailTable";

export default async function Page({ params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions);

  if (!session || !session.accessToken) {
    return <p>Akses ditolak. Anda harus login.</p>;
  }

  const data: UserDetail[] = await getPersonDetail(params.id, session.accessToken);

  if (!data || data.length === 0) {
    return <p>Data tidak ditemukan</p>;
  }

  // Ambil gambar terakhir berdasarkan end_time (null dianggap paling akhir)
  const latest = data.reduce((prev, current) => {
    if (!prev.end_time) return prev;
    if (!current.end_time) return current;

    return new Date(current.end_time) > new Date(prev.end_time) ? current : prev;
  });

  return (
    <div className="w-full py-6 bg-white">
      <div className="mx-4 md:mx-14">
        <UserProfile />
        <div className="flex w-full h-[400px] justify-between">
          <div className="flex justify-center items-center w-full h-full bg-white">
            <DecryptedImage
              filename={latest.labeled_image}
              token={session.accessToken}
              alt={latest.name}
            />
          </div>
          <div className="flex items-center w-full h-full p-4">
            <div>
              <p className="font-bold text-xl mb-2">Person Detail</p>
              <p><span className="font-semibold">Name:</span> {latest.name}</p>
              <p><span className="font-semibold">NIM:</span> {latest.nim}</p>
            </div>
          </div>
        </div>

        <DetailTable items={data} />
      </div>
    </div>
  );
}
