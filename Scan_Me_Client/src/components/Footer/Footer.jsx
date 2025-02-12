import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Paper,
  Chip,
  Divider,
  Button,
} from "@mui/material";

function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: "rgb(186, 91, 3)",
        }}
      >
        <Typography variant="caption" align="center">
          Chính sách bảo mật
        </Typography>
        <Typography variant="caption" align="center">
          Quy chế hoạt động
        </Typography>
        <Typography variant="caption" align="center">
          Chính sách vận chuyển
        </Typography>
        <Typography variant="caption" align="center">
          Chính sách trả hàng và hoàn tiền
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;
