import React from "react";

import TableTempatPPL from "./TableTempatPPL";
import Sidebar from "@/Components/admin/Sidebar/Sidebar";
import Header from "@/Components/admin/Header/Header";

const TempatPPL = ({tempat_ppl}) => {
    console.log(tempat_ppl);
    return (
        <section className="main flex">
            <div className="sidebarWrapper w-[15%]">
                <Sidebar tabId={2} />
            </div>
            <div className="content-right w-[85%] px-3">
                <Header></Header>
                <div className="space"></div>
                <div>
                    <TableTempatPPL tempat_ppl={tempat_ppl}/>
                </div>
            </div>
        </section>
    );
};

export default TempatPPL;
