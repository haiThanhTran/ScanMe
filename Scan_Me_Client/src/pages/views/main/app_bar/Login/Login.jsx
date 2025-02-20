import React, { useContext } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  Paper,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast as showToast, ToastContainer } from "react-toastify"; // Renamed to avoid conflict
import { UserContext } from "../../../../../ultils/userContext";

import "react-toastify/dist/ReactToastify.css";
import mockData from "../../../../../apis/mock-data";
import GoogleIcon from "@mui/icons-material/Google";
import { useNavigate } from "react-router";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
const LoginForm = () => {
  const { handleLoginSuccess } = useContext(UserContext);

  const { users } = mockData;
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      remember: false,
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Sai định dạng email")
        .required("Không được để trống"),
      password: Yup.string().required("Không được để trống"),
    }),
    onSubmit: (values) => {
      const user = users.find(
        (u) => u.email === values.email && u.password === values.password
      );
      if (user) {
        handleLoginSuccess(user);

        if (user?.role === "shop") {
          navigate("/adminfunction/dashboard");
          showToast.success("Login successful!");
        } else {
          navigate("/");
        }
      } else {
        showToast.error("Sai tài khoản hoặc mật khẩu");
      }
    },
  });
  const toast = (content) => {
    showToast.error(content);
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#8C8EF1",
      }}
    >
      <ToastContainer />
      <Paper
        elevation={3}
        sx={{ padding: 4, width: 400, textAlign: "center", borderRadius: 2 }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mb: 2,
            "&:hover": {
              cursor: "pointer",
              color: "#115293",
            },
          }}
          onClick={() => navigate("/")}
        >
          <ArrowBackIosIcon />
          <Typography textAlign={"left"} sx={{}}>
            {" "}
            Trở về trang chủ
          </Typography>
        </Box>
        <Box
          component="img"
          src="https://play-lh.googleusercontent.com/G56PYaL36H1-DHDDpvNBup6Ihf-gPkEXGiYhxWq_u8kHizhM2ZDa7DFRFtacydBPuH6P"
          alt="Blog giảm giá"
          sx={{ width: 150 }}
        />
        <Typography variant="h5" fontWeight={600} gutterBottom>
          Welcome back
        </Typography>
        <Typography variant="body2" color="textSecondary" gutterBottom>
          TK: customer@gmail.com || shop@gmail.com
        </Typography>
        <Typography variant="body2" color="textSecondary" gutterBottom>
          MK: 12345678
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            fullWidth
            id="email"
            name="email"
            label="Email address"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            margin="normal"
          />
          <TextField
            fullWidth
            id="password"
            name="password"
            label="Password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            margin="normal"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="remember"
                checked={formik.values.remember}
                onChange={formik.handleChange}
              />
            }
            label="Remember for 30 days"
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            type="submit"
            sx={{ mt: 2, mb: 1 }}
          >
            Sign in
          </Button>
          <Button
            fullWidth
            variant="outlined"
            onClick={() => toast("Chức năng đang được phát triển")}
            startIcon={<GoogleIcon />}
            sx={{ mt: 1, textTransform: "none" }}
          >
            Sign in with Google
          </Button>
        </form>
        <Typography variant="body2" sx={{ mt: 2 }}>
          Don’t have an account?{" "}
          <a href="#" onClick={() => toast("Chức năng đang được phát triển")}>
            Sign up
          </a>
        </Typography>
      </Paper>
    </Box>
  );
};

export default LoginForm;
