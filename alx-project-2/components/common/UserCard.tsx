import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, address, phone, website, company }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
      <h2 className="text-lg font-bold text-gray-800">{name}</h2>
      <p className="text-gray-600">{email}</p>
      <p className="text-sm text-gray-500">
        {address.street}, {address.suite}, {address.city}
      </p>
      <p className="text-sm text-gray-500 mt-2">
        📞 {phone} | 🌐 <a href={`http://${website}`} target="_blank" className="text-blue-500 underline">{website}</a>
      </p>
      <p className="text-sm text-gray-500 mt-1">
        🏢 {company.name}
      </p>
    </div>
  );
};

export default UserCard;
