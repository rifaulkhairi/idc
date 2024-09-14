import {
    Avatar,
    Box,
    IconButton,
    Menu,
    MenuItem,
    Tooltip,
    Typography,
} from "@mui/material";
import React from "react";
import { deepOrange } from "@mui/material/colors";
import { router } from "@inertiajs/react";
const settings = ["Profile", "Logout"];

const Header = () => {
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = (e, value) => {
        setAnchorElUser(null);
        if (value === 0) {
        } else if (value === 1) {
            router.post("/logout");
        }
    };
    return (
        <header className="flex z-[100] w-full sticky top-0 shadow-md ">
            <div className="flex-grow"></div>

            <div className="flex w-full h-20 lg:px-20 md:px-5 bg-white shadow-md justify-between sm:px-2 items-center">
                <div className="flex py-3 items-center">
                    <div className="flex items-center">
                        <img
                            className="w-20 min-w-20"
                            src="https://upload.wikimedia.org/wikipedia/commons/a/af/Lambang_UIN_Ar-Raniry.png"
                            alt="logo"
                        ></img>
                    </div>

                    <div className="flex h-full items-center">
                        <span className="ml-3 text-2xl font-semibold">IDC</span>
                    </div>
                </div>
                <Box sx={{ flexGrow: 0 }}>
                    <Tooltip title="Open settings">
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                            <Avatar sx={{ bgcolor: deepOrange[500] }}>
                                RU
                            </Avatar>
                        </IconButton>
                    </Tooltip>
                    <Menu
                        sx={{ mt: "45px" }}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                            vertical: "top",
                            horizontal: "right",
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: "top",
                            horizontal: "right",
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                    >
                        {settings.map((setting, index) => (
                            <MenuItem
                                key={setting}
                                onClick={(e) => {
                                    handleCloseUserMenu(e, index);
                                }}
                            >
                                <Typography textAlign="center">
                                    {setting}
                                </Typography>
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>
            </div>
        </header>
    );
};

export default Header;
