import React from "react";

import Sidebar from "@/Components/admin/Sidebar/Sidebar";
import Header from "@/Components/admin/Header/Header";
import MUIDataTable from "mui-datatables";
import { Link, router } from "@inertiajs/react";
import { Button, IconButton } from "@mui/material";
import { MdDelete, MdOpenInNew } from "react-icons/md";
import { GrFormView } from "react-icons/gr";
import { AiOutlineEye } from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";
import { TiEdit } from "react-icons/ti";

const columns = [
    {
        name: "No",
        label: "No",
        options: {
            filter: false,
            sort: false,
            customBodyRender: (value, tableMeta) => {
                return tableMeta.rowIndex + 1;
            },
        },
    },
    {
        name: "nama_lowongan",
        label: "Nama Lowongan",
        options: {
            filter: false,
            sort: false,
            customBodyRender: (value, tableMeta) => {
                return `PPL ${value}`;
            },
        },
    },
    { name: "nama_sekolah", label: "Nama Sekolah" },

    {
        name: "id",
        label: "Action",
        options: {
            customBodyRender: (value) => (
                <div className="flex flex-row justify-center items-center gap-x-2">
                    <ul className="flex flex-row justify-center items-center text-lg">
                        <li
                            className="bg-green-500 text-white p-1 rounded-l-md cursor-pointer hover:scale-[1.1]"
                            onClick={(e) => handleOnViewClick(e, value)}
                        >
                            <MdOpenInNew />
                        </li>
                        <li
                            className="p-1 bg-yellow-500 text-white cursor-pointer hover:scale-[1.1]"
                            onClick={(e) => handleOnEditClick(e, value)}
                        >
                            <TiEdit />
                        </li>
                        <li
                            className="text-white bg-red-500 p-1  rounded-r-md cursor-pointer hover:scale-[1.1] "
                            onClick={(e) => handleOnDeleteClick(e, value)}
                        >
                            <MdDelete />
                        </li>
                    </ul>
                </div>
            ),
            filter: false,
            sort: false,
        },
    },
];

const options = {
    filterType: "multiselect",
    selectableRows: false,
};

const ListLowonganPPL = ({ daftarlowonganppl }) => {
    // console.log(tempat_ppl);
    return (
        <section className="main flex">
            <div className="sidebarWrapper flex">
                <Sidebar tabId={3} />
            </div>
            <div className="flex w-full ml-72 flex-col">
                <Header></Header>
                <div className="space"></div>
                <div className="px-3">
                    <div className="flex w-full  py-2">
                        <Button
                            variant="contained"
                            onClick={(e) => {
                                e.preventDefault();
                                router.visit("/admin/addlowonganppl");
                            }}
                        >
                            Tambah
                        </Button>
                    </div>
                    <MUIDataTable
                        title={"Daftar Lowongan PPL"}
                        data={daftarlowonganppl}
                        columns={columns}
                        options={options}
                    />
                </div>
            </div>
        </section>
    );
};

export default ListLowonganPPL;
