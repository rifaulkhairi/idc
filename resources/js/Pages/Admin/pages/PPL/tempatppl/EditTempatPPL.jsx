import React from "react";

import Sidebar from "@/Components/admin/Sidebar/Sidebar";
import Header from "@/Components/admin/Header/Header";
import MUIDataTable from "mui-datatables";
import {
    Autocomplete,
    Breadcrumbs,
    Button,
    IconButton,
    TextField,
} from "@mui/material";
import { Head, Link, router, useForm } from "@inertiajs/react";
import { useState } from "react";

const EditTempatPPL = ({ tempatppl, supervisordata }) => {
    const [name, setName] = useState(tempatppl?.name || null);
    const [idSupservisor, setIdSupervisor] = useState(
        tempatppl?.username_supervisor || null
    );
    const [selectedSupervisor, setSelectedSupervisor] = useState(
        supervisordata.find(
            (spv) => spv.username === tempatppl.username_supervisor
        )
    );
    function submit(e) {
        e.preventDefault();
        router.post(`/admin/tempatppl/${tempatppl.id}`, {
            _method: "patch",
            name: name,
            username_supervisor: idSupservisor,
        });
    }

    const handleNameChange = (e) => {
        setName(e.target.value);
    };
    const handleSupervisorChange = (e, value) => {
        setIdSupervisor(value.username);
    };

    return (
        <section className="main flex">
            <Head title="Edit Tempat PPL" />
            <div className="sidebarWrapper flex">
                <Sidebar tabId={3} />
            </div>
            <div className="flex w-full ml-72 flex-col">
                <Header></Header>
                <div className="space"></div>
                <div className="px-3">
                    <Breadcrumbs>
                        <Link>Daftar Tempat PPL</Link>
                        <Link>Import Tempat PPL</Link>
                    </Breadcrumbs>
                    <div className="flex w-full py-2">
                        <form
                            className="flex flex-col gap-y-3"
                            onSubmit={submit}
                        >
                            <TextField
                                label="Nama Sekolah"
                                value={name}
                                onChange={(e) => handleNameChange(e)}
                                sx={{ width: "300px" }}
                            />
                            <Autocomplete
                                value={selectedSupervisor}
                                options={supervisordata}
                                getOptionLabel={(op) => op.name}
                                onChange={(e, value) =>
                                    handleSupervisorChange(e, value)
                                }
                                renderInput={(params) => (
                                    <TextField {...params} label="Movie" />
                                )}
                            />
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

export default EditTempatPPL;
