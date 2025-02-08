import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
} from "@mui/material";
import { useNavigate } from "react-router";

const Header = () => {
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState("/");

  const menuItems = [
    { text: "Trang chủ", path: "/" },
    { text: "Mã giảm giá", path: "/vouchers" },
    { text: "Tin khuyến mãi", path: "/promotions" },
    { text: "Trung tâm hỗ trợ", path: "/support" },
    { text: "Tích điểm đổi quà", path: "/rewards" },
  ];

  const handleNavigation = (path) => {
    setActiveItem(path);
    navigate(path);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ bgcolor: "white", boxShadow: 1 }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* Logo */}
            <Box
              component="img"
              src="https://play-lh.googleusercontent.com/G56PYaL36H1-DHDDpvNBup6Ihf-gPkEXGiYhxWq_u8kHizhM2ZDa7DFRFtacydBPuH6P"
              alt="Blog giảm giá"
              sx={{
                width: 70,
                height: 70,
                cursor: "pointer",
                mr: 4,
              }}
              onClick={() => handleNavigation("/")}
            />

            {/* Menu Items */}
            <Box sx={{ flexGrow: 1, display: "flex", gap: 3 }}>
              {menuItems.map((item) => (
                <Typography
                  key={item.path}
                  onClick={() => handleNavigation(item.path)}
                  sx={{
                    color:
                      activeItem === item.path
                        ? "primary.main"
                        : "text.primary",
                    cursor: "pointer",
                    position: "relative",
                    fontWeight: 500,
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      width: activeItem === item.path ? "100%" : "0",
                      height: "2px",
                      bottom: -2,
                      left: "50%",
                      transform: "translateX(-50%)",
                      backgroundColor: "primary.main",
                      transition: "width 0.3s ease-in-out",
                    },
                    "&:hover::after": {
                      width: "100%",
                    },
                    "&:hover": {
                      color: "primary.main",
                    },
                  }}
                >
                  {item.text}
                </Typography>
              ))}
            </Box>

            {/* Login Button */}
            <Button
              variant="contained"
              sx={{
                bgcolor: "primary.main",
                "&:hover": {
                  bgcolor: "primary.dark",
                },
                textTransform: "none",
                px: 3,
              }}
              onClick={() => handleNavigation("/login")}
            >
              Đăng nhập
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Header;
