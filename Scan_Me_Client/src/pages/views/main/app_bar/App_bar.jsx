import React, { useContext, useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  Avatar,
  TextField,
  IconButton,
  Tabs,
  Tab,
  Popover,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router";
import { toast as showToast, ToastContainer } from "react-toastify";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { GlobalContext } from "../../../../config/GlobalContext";
import { Badge } from "@mui/material";

const Header = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState(0);
  const [userInfo, setUserInfo] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null); // State for Popover anchor element
  const savedCart = localStorage.getItem("cart");

  useEffect(() => {
    // Lấy thông tin người dùng từ localStorage
    const user = JSON.parse(localStorage.getItem("authenticatedUser"));
    if (user) {
      setUserInfo(user);
    }

    // Lấy giỏ hàng từ localStorage
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
    console.log("cartItems", cartItems);
  }, [savedCart]);

  const menuItems = [
    { text: "Trang chủ", path: "/" },
    { text: "Mã giảm giá", path: "/vouchers" },
    { text: "Tin khuyến mãi", path: "/promotions" },
    { text: "Trung tâm hỗ trợ", path: "/support" },
    { text: "Tích điểm đổi quà", path: "/rewards" },
  ];
  const handleLogout = () => {
    // Clear localStorage
    localStorage.clear();
    window.location.reload();
  };

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("authenticatedUser"));
    if (user) {
      setUserInfo(user);
    }
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleNavigation = (path) => {
    navigate(path);
  };
  const getTotalCartItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };
  const toast = (content) => {
    showToast.error(content);
  };
  return (
    <Box sx={{ backgroundColor: "#FB5532" }}>
      <ToastContainer />
      <AppBar position="fixed">
        {/* Top toolbar with utility links */}
        <Container
          maxWidth="2xl"
          sx={{
            backgroundColor: "#D52220",
            height: "30px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              gap: 2,
              display: "flex",
              alignItems: "center",
            }}
            onClick={() => navigate("/")}
          >
            <Typography
              sx={{
                fontSize: "13px",
                fontWeight: "600",
                "&:hover": {
                  cursor: "pointer",
                  color: "#e7e3e3",
                },
              }}
              onClick={() => showToast.error("Cái này e chưa làm 🥲")}
            >
              Tải ứng dụng
            </Typography>
            <Typography
              sx={{
                fontSize: "13px",
                fontWeight: "600",
                "&:hover": {
                  cursor: "pointer",
                  color: "#e7e3e3",
                },
              }}
              onClick={() => showToast.error("Cái này e chưa làm 🥲")}
            >
              Chăm sóc khách hàng
            </Typography>
            <Typography
              sx={{
                fontSize: "13px",
                fontWeight: "600",
                "&:hover": {
                  cursor: "pointer",
                  color: "#e7e3e3",
                },
              }}
              onClick={() => showToast.error("Cái này e chưa làm 🥲")}
            >
              Nhà cung cấp
            </Typography>
          </Box>
        </Container>

        {/* Main header with logo, search, and navigation */}
        <Container maxWidth="2xl" sx={{ backgroundColor: "#EE2624" }}>
          <Toolbar>
            <Box
              component="img"
              src="https://play-lh.googleusercontent.com/G56PYaL36H1-DHDDpvNBup6Ihf-gPkEXGiYhxWq_u8kHizhM2ZDa7DFRFtacydBPuH6P"
              alt="Blog giảm giá"
              sx={{ width: 100, height: 100, mr: 2 }}
              onClick={() => handleNavigation("/")}
            />

            <Box
              sx={{
                display: "flex",
                flexGrow: 1,
                alignItems: "center",
                gap: 0.5,
              }}
            >
              <TextField
                size="small"
                placeholder="Tìm trên ScanMe"
                variant="outlined"
                sx={{
                  flexGrow: 1,
                  backgroundColor: "white",
                  borderRadius: "4px",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#ccc", // Màu border mặc định
                    },
                    "&:hover fieldset": {
                      borderColor: "#aaa", // Không đổi outline khi hover
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#d32f2f", // Màu khi focus
                    },
                  },
                }}
              />

              <Button
                variant="contained"
                color="secondary"
                sx={{
                  minWidth: "40px",
                  padding: "8px",
                  backgroundColor: "#fff",
                  color: "#636D76",
                  "&:hover": {
                    backgroundColor: "#e7e3e3",
                  },
                }}
              >
                <SearchIcon />
              </Button>
            </Box>
            <Box sx={{ m: 2 }}>
              <IconButton onClick={() => handleNavigation("/cart")}>
                <Badge badgeContent={cartItems?.length} color="secondary">
                  <ShoppingCartIcon
                    sx={{
                      fontSize: "30px",
                      color: "#fff",
                      "&:hover": {
                        cursor: "pointer",
                      },
                    }}
                  />
                </Badge>
              </IconButton>
            </Box>

            <Box sx={{ ml: 2 }}>
              {userInfo ? (
                <Avatar onClick={handlePopoverOpen} sx={{ cursor: "pointer" }}>
                  {userInfo?.fullName[0]}
                </Avatar>
              ) : (
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => handleNavigation("/login")}
                  sx={{
                    fontWeight: 600,
                    backgroundColor: "#fff",
                    color: "#636D76",
                    "&:hover": {
                      backgroundColor: "#e7e3e3",
                    },
                  }}
                >
                  Đăng nhập
                </Button>
              )}
            </Box>
          </Toolbar>

          <Tabs
            value={value}
            onChange={handleChange}
            variant="fullWidth"
            textColor="inherit"
            indicatorColor="secondary"
            sx={{
              "& .MuiTab-root": {
                fontSize: "1rem",
                minHeight: 48,
                fontWeight: 600,
                textTransform: "none",
              },
              "& .MuiTabs-indicator": {
                backgroundColor: "#FFFF", // Màu vàng cho border bottom
                height: "3px", // Tăng độ dày đường viền
              },
            }}
          >
            {menuItems.map((item) => (
              <Tab
                key={item.path}
                label={item.text}
                onClick={() => handleNavigation(item.path)}
                sx={{
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: "#F1514F",
                  },
                }}
              />
            ))}
          </Tabs>
        </Container>
      </AppBar>
      <Toolbar />

      <Box height={100} />
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handlePopoverClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Button
          onClick={handleLogout}
          sx={{
            padding: "10px 20px",
            backgroundColor: "#d32f2f",
            color: "#fff",
          }}
        >
          Đăng xuất
        </Button>
      </Popover>
    </Box>
  );
};

export default Header;
