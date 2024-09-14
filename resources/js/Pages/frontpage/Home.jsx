import {
    Alert,
    Avatar,
    BottomNavigation,
    BottomNavigationAction,
    Box,
    Button,
    Snackbar,
    Tab,
    Tabs,
} from "@mui/material";
import PropTypes from "prop-types";

import { styled, ThemeProvider, createTheme } from "@mui/material/styles";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import React, { useEffect, useState } from "react";
import PlaceIcon from "@mui/icons-material/Place";
import SubjectIcon from "@mui/icons-material/Subject";
import { AcademicCapIcon } from "@heroicons/react/24/outline";
import { data_tempat_ppl } from "../../data";
import { Head, router } from "@inertiajs/react";
import { PiListStarBold } from "react-icons/pi";
import Header from "@/Components/frontpage/Header";

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3, bgcolor: "#fcfcfc" }}>{children}</Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

const theme = createTheme({
    palette: {
        primary: {
            main: "#008a01",
            light: "#66b967",
            dark: "#006e01",
            contrastText: "fff",
        },
    },
});

const Frontpage = ({ lowongan_ppl, flash, auth }) => {
    const [value, setValue] = useState(0);

    return (
        <ThemeProvider theme={theme}>
            <Head title="Home" />
            <Header />
            <main className="flex justify-center flex-col items-center w-full px-6  lg:px-10">
                <div className="container">
                    <div className="h-32"></div>

                    <section className="bg-white w-full rounded-md px-4 pt-3">
                        <div className="">
                            <p className="text-neutral-600 font-bold text-lg">
                                Selamat Datang
                            </p>
                            <p className="text-neutral-600 font-normal text-xs">
                                {`Welcome back, ${auth.user.name} We've missed you 👋`}
                            </p>
                            <hr className="my-5" />
                        </div>
                        <div className="w-full pb-8">
                            Kegiatan PPL Sedang berlangsung silakan cek berkala
                            untuk mengetahui nilainya
                        </div>
                    </section>
                </div>
            </main>
            <footer className="z-[100] ">
                <Box
                    sx={{
                        width: "100%",
                        position: "fixed",
                        bottom: 0,
                        boxShadow: "10",
                    }}
                    className="shadow-md "
                >
                    <BottomNavigation
                        showLabels
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                    >
                        <BottomNavigationAction
                            label="Home"
                            icon={<PlaceIcon />}
                        />

                        <BottomNavigationAction
                            color="primary"
                            label="Nilai"
                            onClick={() => router.visit("nilai")}
                            icon={<PiListStarBold />}
                        />
                        <BottomNavigationAction
                            label="Profil"
                            onClick={() => router.visit("profil")}
                            icon={<PermIdentityIcon />}
                        />
                    </BottomNavigation>
                </Box>
            </footer>
        </ThemeProvider>
    );
};

export default Frontpage;
