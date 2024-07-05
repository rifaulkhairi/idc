import React, { useState } from "react";

import Sidebar from "@/Components/admin/Sidebar/Sidebar";
import Header from "@/Components/admin/Header/Header";
import {
    Autocomplete,
    Breadcrumbs,
    MenuItem,
    Select,
    TextField,
    Typography,
} from "@mui/material";
import { Link } from "@inertiajs/react";

const AddTempatPPL = () => {
    const [prov, setProv] = useState("");
    const [kab, setKab] = useState("");
    const [kec, setKec] = useState("");
    const [kel, setKel] = useState("");

    return (
        <section className="main flex">
            <div className="sidebarWrapper w-[15%]">
                <Sidebar tabId={2} />
            </div>
            <div className="content-right w-[85%] px-3">
                <Header></Header>
                <div className="space"></div>
                <div>
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link href="/admin/tempatppl">Tempat PPL</Link>
                        <Typography>Tambah Tempat PPL</Typography>
                    </Breadcrumbs>
                    <div className="mt-3 flex">
                        <form className="flex flex-col w-full gap-y-4">
                            <TextField
                                id="name"
                                label="Nama"
                                required
                            ></TextField>
                            <Autocomplete
                                id="prov"
                                
                                renderInput={(params) => (
                                    <TextField {...params} label="Movie" />
                                )}
                            ></Autocomplete>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddTempatPPL;
