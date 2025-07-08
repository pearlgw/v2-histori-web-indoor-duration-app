"use client";
import React from "react";
import DecryptedImage from "./DecryptedImage";

type User = {
  uid: string;
  fullname: string;
  email: string;
  nim: string;
  address: string;
  token: string;
  image: string;
  roles: string;
  created_at: string;
};

type Props = {
  data: User[];
  sessionToken: string;
};

export default function UserList({ data, sessionToken }: Props) {
  return (
    <div className="w-full px-4">
      <h2 className="text-xl font-bold mb-6 text-center md:text-left">Daftar Asisten</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:md:grid-cols-2 gap-6">
        {data.map((user) => (
          <div
            key={user.uid}
            className="flex flex-col lg:flex-row gap-4 sm:gap-6 bg-white border rounded-xl p-4 shadow-sm hover:shadow-md transition"
          >
            {/* Avatar */}
            <div className="w-full sm:w-32 h-40 sm:h-32 rounded-lg overflow-hidden flex items-center justify-center bg-gray-100">
              <DecryptedImage
                filename={user.image}
                token={sessionToken}
                alt={`Foto ${user.fullname}`}
              />
            </div>

            {/* Info */}
            <div className="flex flex-col justify-between">
              <div className="space-y-1">
                <h3 className="text-lg font-semibold">{user.fullname}</h3>
                <p className="text-sm text-gray-600">{user.email}</p>
                <p className="text-xs text-gray-400">{user.nim}</p>
              </div>

              <div className="mt-3 space-y-1 text-sm text-gray-600">
                <p><span className="font-medium">Alamat:</span> {user.address}</p>
                <p><span className="font-medium">Token:</span> {user.token}</p>
                <p><span className="font-medium">Role:</span> {user.roles}</p>
                <p><span className="font-medium">Dibuat:</span> {new Date(user.created_at).toLocaleString()}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
