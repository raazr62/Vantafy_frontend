import React, { useState } from "react";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  MoreVertical,
  Plus,
  CheckCircle2,
  Eye,
  Info,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import ConnectEmailModal from "@/components/DashboardComponent/ConnectEmailModal";

const data = [
  {
    email: "mario.john@outlook.com",
    status: "Active",
    sentCount: 0,
    totalLimit: 50,
  },
];

export default function EmailTable() {
  const [open, setOpen] = useState(false);

  const columns = [
    {
      accessorKey: "email",
      header: () => (
        <div className="flex items-center gap-1">
          EMAIL <Info className="w-3 h-3 text-slate-400" />
        </div>
      ),
      cell: ({ row }) => (
        <div className="flex items-center gap-2">
          {/* Microsoft Logo Mockup */}
          <div className="grid grid-cols-2 gap-0.5 w-3.5 h-3.5 shrink-0">
            <div className="bg-[#f25022] h-full w-full"></div>
            <div className="bg-[#7fbb00] h-full w-full"></div>
            <div className="bg-[#00a1f1] h-full w-full"></div>
            <div className="bg-[#ffbb00] h-full w-full"></div>
          </div>
          <span className="text-slate-600 font-medium truncate">
            {row.getValue("email")}
          </span>
          <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
        </div>
      ),
    },
    {
      accessorKey: "status",
      header: () => (
        <div className="flex items-center gap-1">
          SENDING <Info className="w-3 h-3 text-slate-400" />
        </div>
      ),
      cell: ({ row }) => (
        <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full font-medium">
          {row.getValue("status")}
        </span>
      ),
    },
    {
      accessorKey: "sentCount",
      header: () => (
        <div className="flex items-center gap-1">
          SENT <Info className="w-3 h-3 text-slate-400" />
        </div>
      ),
      cell: ({ row }) => (
        <div className="flex items-center gap-2 text-slate-500 text-sm">
          <span>
            {row.original.sentCount} of {row.original.totalLimit}
          </span>
        </div>
      ),
    },
    {
      id: "actions",
      header: () => (
        <div className="flex items-center gap-1">
          ACTIONS <Info className="w-3 h-3 text-slate-400" />
        </div>
      ),
      cell: () => (
        <div className="flex items-center gap-6">
          <button className="flex items-center gap-2 text-slate-500 text-sm hover:text-slate-700 transition-colors">
            <Eye className="w-4 h-4" />
            <span>Signature</span>
          </button>
          <button className="p-1.5 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
            <MoreVertical className="w-4 h-4 text-slate-400" />
          </button>
        </div>
      ),
    },
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="w-full rounded-2xl p-2 lg:p-8 bg-slate-50 ">
      <div className=" mx-auto space-y-4">
        {/* Top Action Button */}
        <div className="flex justify-end">
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button className="bg-primary hover:bg-secondary  cursor-pointer duration-300 ease-in-out text-white px-4 py-6 pr-6! rounded-lg flex items-center gap-2 text-sm font-medium transition-colors ">
                <Plus className="w-4 h-4" />
                Connect Email
              </Button>
            </DialogTrigger>

            <ConnectEmailModal setOpen={setOpen} />
          </Dialog>

          <button></button>
        </div>

        {/* Main Table Card */}
        <div className="bg-white rounded-xl border border-slate-200  overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                {table.getHeaderGroups().map((headerGroup) => (
                  <tr
                    key={headerGroup.id}
                    className="bg-slate-50/50 border-b border-slate-100"
                  >
                    {headerGroup.headers.map((header) => (
                      <th
                        key={header.id}
                        className="px-6 py-4 text-[10px] font-bold text-slate-500 tracking-wider"
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody>
                {table.getRowModel().rows.map((row) => (
                  <tr
                    key={row.id}
                    className="border-b border-slate-50 last:border-0 hover:bg-slate-50/30 transition-colors"
                  >
                    {row.getVisibleCells().map((cell) => (
                      <td key={cell.id} className="px-6 py-5 align-middle">
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Custom Pagination Bar */}
          <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between px-6 py-4 border-t border-slate-100">
            <p className="text-sm text-slate-400">Showing 1 - 1 of 1 results</p>

            <div className="flex items-center border border-slate-200 rounded-lg overflow-hidden">
              <button className="p-2 text-slate-300 hover:bg-slate-50 border-r border-slate-200">
                <ChevronsLeft className="w-4 h-4" />
              </button>
              <button className="px-4 py-2 text-sm cursor-pointer text-slate-500 hover:bg-slate-50 border-r border-slate-200 font-medium">
                Previous
              </button>
              <button className="px-4 py-2 text-sm bg-primary text-white font-medium border-r border-slate-200">
                1
              </button>
              <button className="px-4 py-2 text-sm cursor-pointer text-slate-500 hover:bg-slate-50 border-r border-slate-200 font-medium">
                Next
              </button>
              <button className="p-2 text-slate-300 hover:bg-slate-50">
                <ChevronsRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
