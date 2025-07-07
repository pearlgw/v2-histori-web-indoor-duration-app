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
    <div className="w-full">
      <h2 className="text-xl font-bold mb-4">Daftar Asisten</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data.map((user) => (
          <div
            key={user.uid}
            className="flex gap-10 border rounded-lg p-4 shadow-sm hover:shadow-md transition"
          >
            {/* Avatar placeholder */}
            <div className="w-40 h-40 rounded-lg flex items-center justify-center text-xl font-bold text-gray-500">
              <DecryptedImage filename={user.image} token={sessionToken} alt=""/>
            </div>
            <div className="flex-row">
              <div className="flex items-center gap-4">
                <div className="flex flex-col">
                  <h3 className="text-lg font-semibold">{user.fullname}</h3>
                  <p className="text-sm text-gray-500">{user.email}</p>
                  <p className="text-xs text-gray-400">{user.nim}</p>
                </div>
              </div>
              <div className="mt-3 text-sm text-gray-600">
                <p><strong>Alamat:</strong> {user.address}</p>
                <p><strong>Token:</strong> {user.token}</p>
                <p><strong>Role:</strong> {user.roles}</p>
                <p><strong>Dibuat:</strong> {new Date(user.created_at).toLocaleString()}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
