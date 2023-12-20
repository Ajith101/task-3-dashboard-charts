import React from "react";
import useFetchData from "../hooks/fetchData";

const Table = () => {
  const tableData = useFetchData("/api/table-data");
  return (
    <div className="flex w-full h-fit justify-center items-center py-4">
      <div className="max-w-[450px] shadows rounded-[10px] justify-center items-center h-full overflow-hidden">
        <table className="w-full text-sm leading-4 h-full rounded-[10px]">
          <thead className="bg-white">
            <tr>
              <th className="py-3 border px-4 text-left font-medium text-gray-600">
                No
              </th>
              <th className="py-3 border px-4 text-left font-medium text-gray-600">
                Name
              </th>
              <th className="py-3 border px-4 text-left font-medium text-gray-600">
                Title
              </th>
              <th className="py-3 border px-4 text-left font-medium text-gray-600">
                Status
              </th>
              <th className="py-3 border px-4 text-left font-medium text-gray-600">
                Role
              </th>
            </tr>
          </thead>
          <tbody className=" [&>*:nth-child(odd)]:bg-gray-300 [&>*:nth-child(even)]:bg-white">
            {tableData?.length &&
              tableData?.map((item, id) => (
                <tr key={id}>
                  <td className="py-3 px-4 text-left font-medium text-gray-600 border">
                    {item.no}
                  </td>
                  <td className="py-3 px-4 text-left border">{item.name}</td>
                  <td className="py-3 px-4 text-left border">{item.title}</td>
                  <td className="py-3 px-4 text-left border">{item.status}</td>
                  <td className="py-3 px-4 text-left border">{item.role}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
