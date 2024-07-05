import {
    Autocomplete,
    Avatar,
    BottomNavigation,
    BottomNavigationAction,
    Box,
    Button,
    FormControl,
    MenuItem,
    Select,
    Tab,
    Tabs,
    TextField,
} from "@mui/material";
import PropTypes from "prop-types";
import InputLabel from "@mui/material/InputLabel";
import { provinsi, kabupaten, kecamatan, desa } from "daftar-wilayah-indonesia";

import { styled, ThemeProvider, createTheme } from "@mui/material/styles";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import React, { useState } from "react";
import PlaceIcon from "@mui/icons-material/Place";
import SubjectIcon from "@mui/icons-material/Subject";
import { AcademicCapIcon } from "@heroicons/react/24/outline";
import { data_tempat_ppl, data_prodi } from "../../data";
import { router } from "@inertiajs/react";
import { deepOrange, deepPurple } from "@mui/material/colors";

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

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
}

const StyledTabs = styled((props) => (
    <Tabs
        {...props}
        TabIndicatorProps={{
            children: <span className="MuiTabs-indicatorSpan" />,
        }}
    />
))({
    "& .MuiTabs-indicator": {
        display: "flex",
        justifyContent: "center",
        backgroundColor: "transparent",
    },
    "& .MuiTabs-indicatorSpan": {
        maxWidth: 40,
        width: "100%",
        backgroundColor: "#008A01",
    },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
    ({ theme }) => ({
        textTransform: "none",
        fontWeight: theme.typography.fontWeightRegular,
        fontSize: theme.typography.pxToRem(15),
        marginRight: theme.spacing(1),
        color: "#b2b2b2",
        "&.Mui-selected": {
            color: "#008A01",
        },
        "&.Mui-focusVisible": {
            backgroundColor: "#006e01",
        },
        "&:hover": {
            color: "#008A01",
            opacity: 1,
        },
    })
);

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

const Profil = () => {
    const [states, setStates] = useState([]);
    const [daftarProvinsi, setDaftarProvinsi] = useState([]);
    const [daftarKabupaten, setDaftarKab] = useState();
    const [daftarKec, setDaftarKec] = useState("");
    const [daftarDesa, setDaftarDesa] = useState("");

    const [value, setValue] = useState(2);
    const [tabValue, setTabValue] = useState(0);
    const [jenisKelamin, setJenisKelamin] = useState("");
    const [prodi, setProdi] = useState("");
    const [inputProdi, setInputProdi] = useState("");
    const [prov, setProv] = useState("");
    const [selectedProv, setSelectedProv] = useState();

    const [kab, setKab] = useState("Pilih Kabupaten");
    const [selectedKab, setSelectedKab] = useState("Pilih Kabupaten");
    const [kec, setKec] = useState("pilih kecamatan");
    const [selectedKec, setSelectedKec] = useState("");
    const [kelurahan, setKelurahan] = useState("pilihDesa");
    const [selectedDesa, setSelectedDesa] = useState("Pilih Kabupaten");

    const data = provinsi();

    const handleJKChange = (event, newValue) => {
        setJenisKelamin(event.target.value);
    };
    // console.log(data_prodi);

    // console.log(provinsi());

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };

    const changeCountry = (data) => {
        setDaftarKab(kabupaten(data.kode));
    };

    return (
        <ThemeProvider theme={theme}>
            <header className="fixed z-[100] flex w-full ">
                <div className="flex w-full h-20 lg:px-20 md:px-5 bg-white shadow-md justify-between sm:px-2 backdrop-blur-sm bg-opacity-50">
                    <div className="flex py-3">
                        <div className="flex items-center">
                            <img
                                className="w-20 min-w-20"
                                src="https://upload.wikimedia.org/wikipedia/commons/a/af/Lambang_UIN_Ar-Raniry.png"
                                alt="logo"
                            ></img>
                        </div>

                        <div className="w-[0.5px] bg-neutral-400"></div>
                        <div className="flex h-full items-center">
                            <span className="ml-3 text-xl font-semibold">
                                IDC
                            </span>
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <form>
                            <input
                                type="search"
                                placeholder="search"
                                className="ring-1 bg-secondary/5 ring-secondary rounded-md focus:ring-secondary focus:border-secondary"
                            ></input>
                        </form>
                    </div>
                </div>
            </header>
            <main className="flex justify-center flex-col items-center w-full px-6  lg:px-10">
                <div className="container">
                    <div className="h-32"></div>

                    <section className="bg-white w-full">
                        <div>
                            <p className="text-neutral-600 font-bold text-lg">
                                Profil
                            </p>

                            <hr className="my-5" />
                        </div>
                        <div className="shadow-md rounded-md w-full">
                            <Box sx={{ width: "100%" }}>
                                <Box
                                    sx={{
                                        borderBottom: 1,
                                        borderColor: "divider",
                                    }}
                                >
                                    <StyledTabs
                                        value={tabValue}
                                        onChange={handleTabChange}
                                    >
                                        <StyledTab
                                            label="Profil"
                                            {...a11yProps(0)}
                                        />
                                        <StyledTab
                                            label="Data PPKPM"
                                            {...a11yProps(0)}
                                        />
                                    </StyledTabs>
                                </Box>
                                <CustomTabPanel value={tabValue} index={0}>
                                    <form method="post" action="/updateprofil">
                                        <div className="flex h-full w-full flex-col gap-y-3">
                                            <div className="flex w-full justify-center items-center mb-4">
                                                <Avatar
                                                    sx={{
                                                        width: 100,
                                                        height: 100,
                                                        bgcolor:
                                                            deepOrange[500],
                                                    }}
                                                >
                                                    RU
                                                </Avatar>
                                            </div>
                                            <div className="gap-x-5 flex w-full">
                                                <TextField
                                                    required
                                                    id="outlined-required"
                                                    label="Nama"
                                                    defaultValue="Rifa Ulkhairi"
                                                    sx={{ width: "100%" }}
                                                />
                                                <TextField
                                                    required
                                                    id="outlined-required"
                                                    label="NIM"
                                                    sx={{ width: "100%" }}
                                                    defaultValue="200205002"
                                                />
                                            </div>
                                            <div className="gap-x-5 flex w-full">
                                                <TextField
                                                    required
                                                    id="outlined-required"
                                                    label="email"
                                                    defaultValue="200205002@student.ar-raniry.ac.id"
                                                    sx={{ width: "100%" }}
                                                />
                                                <TextField
                                                    required
                                                    id="outlined-required"
                                                    label="No HP/WA"
                                                    sx={{ width: "100%" }}
                                                    defaultValue="+62 895 0132 1609"
                                                />
                                            </div>
                                            <div>
                                                <Box sx={{ minWidth: 120 }}>
                                                    <FormControl fullWidth>
                                                        <InputLabel id="demo-simple-select-label">
                                                            Jenis Kelamin
                                                        </InputLabel>
                                                        <Select
                                                            labelId="demo-simple-select-label"
                                                            id="demo-simple-select"
                                                            value={jenisKelamin}
                                                            label="Jenis Kelamin"
                                                            onChange={
                                                                handleJKChange
                                                            }
                                                        >
                                                            <MenuItem
                                                                value={
                                                                    "Laki-laki"
                                                                }
                                                            >
                                                                Laki-laki
                                                            </MenuItem>
                                                            <MenuItem
                                                                value={
                                                                    "Perempuan"
                                                                }
                                                            >
                                                                Perempuan
                                                            </MenuItem>
                                                        </Select>
                                                    </FormControl>
                                                </Box>
                                            </div>
                                            <div>
                                                <Autocomplete
                                                    value={prodi}
                                                    onChange={(
                                                        event,
                                                        newValue
                                                    ) => {
                                                        setProdi(newValue);
                                                    }}
                                                    inputValue={inputProdi}
                                                    onInputChange={(
                                                        event,
                                                        newInputValue
                                                    ) => {
                                                        setInputProdi(
                                                            newInputValue
                                                        );
                                                    }}
                                                    id="prodi"
                                                    options={data_prodi}
                                                    getOptionLabel={
                                                        data_prodi.label
                                                    }
                                                    renderInput={(params) => (
                                                        <TextField
                                                            {...params}
                                                            label="prodi"
                                                        />
                                                    )}
                                                ></Autocomplete>
                                            </div>
                                            <div>
                                                <Autocomplete
                                                    id="provinsi"
                                                    value={prov}
                                                    inputValue={selectedProv}
                                                    onInputChange={(
                                                        event,
                                                        newInputValue
                                                    ) => {
                                                        setSelectedProv(
                                                            newInputValue
                                                            
                                                        );
                                                    }}
                                                    options={provinsi()}
                                                    getOptionLabel={(option) =>
                                                        option.nama
                                                    }
                                                    onChange={(
                                                        event,
                                                        value
                                                    ) => {
                                                        setProv(value);
                                                        setDaftarKab(
                                                            kabupaten(
                                                                value.kode
                                                            )
                                                        );
                                                    }}
                                                    renderInput={(params) => (
                                                        <TextField
                                                            {...params}
                                                            label="Provinsi"
                                                        />
                                                    )}
                                                ></Autocomplete>
                                            </div>
                                            <div>
                                                <Autocomplete
                                                    id="Kabupaten"
                                                    value={kab}
                                                    inputValue={selectedKab}
                                                    onInputChange={(
                                                        event,
                                                        newInputValue
                                                    ) => {
                                                        setSelectedKab(
                                                            newInputValue
                                                        );
                                                    }}
                                                    options={
                                                        daftarKabupaten == null
                                                            ? [""]
                                                            : daftarKabupaten
                                                    }
                                                    getOptionLabel={(option) =>
                                                        option.nama
                                                    }
                                                    onChange={(
                                                        event,
                                                        value
                                                    ) => {
                                                        setKab(value);
                                                        setDaftarKec(
                                                            kecamatan(
                                                                value.kode
                                                            )
                                                        );
                                                    }}
                                                    renderInput={(params) => (
                                                        <TextField
                                                            {...params}
                                                            label="Kabupaten"
                                                        />
                                                    )}
                                                ></Autocomplete>
                                            </div>
                                            <div>
                                                <Autocomplete
                                                    id="Kecamatan"
                                                    value={kec}
                                                    inputValue={selectedKec}
                                                    onInputChange={(
                                                        event,
                                                        newInputValue
                                                    ) => {
                                                        setSelectedKec(
                                                            newInputValue
                                                        );
                                                    }}
                                                    options={
                                                        daftarKec == null
                                                            ? [""]
                                                            : daftarKec
                                                    }
                                                    getOptionLabel={(option) =>
                                                        option.nama
                                                    }
                                                    onChange={(
                                                        event,
                                                        value
                                                    ) => {
                                                        setKec(value);

                                                        setDaftarDesa(
                                                            desa(value.kode)
                                                        );
                                                    }}
                                                    renderInput={(params) => (
                                                        <TextField
                                                            {...params}
                                                            label="kecamatan"
                                                        />
                                                    )}
                                                ></Autocomplete>
                                            </div>
                                            <div>
                                                <Autocomplete
                                                    id="desa"
                                                    value={kelurahan}
                                                    inputValue={selectedDesa}
                                                    onInputChange={(
                                                        event,
                                                        newInputValue
                                                    ) => {
                                                        setSelectedDesa(
                                                            newInputValue
                                                        );
                                                    }}
                                                    options={
                                                        daftarDesa == null
                                                            ? [""]
                                                            : daftarDesa
                                                    }
                                                    getOptionLabel={(option) =>
                                                        option.nama
                                                    }
                                                    onChange={(
                                                        event,
                                                        value
                                                    ) => {
                                                        setKelurahan(value);
                                                    }}
                                                    renderInput={(params) => (
                                                        <TextField
                                                            {...params}
                                                            label="Desa"
                                                        />
                                                    )}
                                                ></Autocomplete>
                                            </div>
                                        </div>
                                    </form>
                                    <div className="h-48"></div>
                                </CustomTabPanel>
                                <CustomTabPanel value={tabValue} index={1}>
                                    Item Two
                                </CustomTabPanel>
                            </Box>
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
                            label="PPKPM"
                            onClick={() => router.visit("/")}
                            icon={<PlaceIcon />}
                        />
                        <BottomNavigationAction
                            color="primary"
                            label="Lamaran ku"
                            onClick={() => router.visit("lamaranku")}
                            icon={<SubjectIcon />}
                        />
                        <BottomNavigationAction
                            label="Profil"
                            icon={<PermIdentityIcon />}
                        />
                    </BottomNavigation>
                </Box>
            </footer>
        </ThemeProvider>
    );
};

export default Profil;
