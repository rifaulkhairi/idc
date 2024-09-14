import React from "react";

import Sidebar from "@/Components/admin/Sidebar/Sidebar";
import Header from "@/Components/admin/Header/Header";
import { Breadcrumbs, Button, TextField } from "@mui/material";

import { Head, Link, router, useForm } from "@inertiajs/react";
import { useState } from "react";

const EditProdi = ({ prodi }) => {
    const [namaProdi, setNamaProdi] = useState(prodi?.name || null);

    function submit(e) {
        e.preventDefault();
        router.post(`/admin/prodi/${prodi.id}`, {
            _method: "patch",
            name: namaProdi,
        });
    }
    const handleNamaChange = (e) => {
        setNamaProdi(e.target.value);
    };
    return (
        <section className="main flex">
            <Head title="Edit Prodi" />
            <div className="sidebarWrapper flex">
                <Sidebar tabId={1} />
            </div>
            <div className="flex w-full ml-72 flex-col">
                <Header></Header>
                <div className="space"></div>
                <div className="px-3">
                    <Breadcrumbs>
                        <Link href="/admin/daftarprodi">List Prodi</Link>
                        <Link>Edit Prodi</Link>
                    </Breadcrumbs>
                    <div className="flex w-full  py-2">
                        <form
                            className="flex flex-col gap-y-3 w-full"
                            onSubmit={submit}
                        >
                            <div className="flex w-96">
                                <TextField
                                    fullWidth
                                    value={namaProdi}
                                    onChange={(e) => handleNamaChange(e)}
                                ></TextField>
                            </div>
                            <div>
                                <Button variant="contained" type="submit">
                                    Submit
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EditProdi;
