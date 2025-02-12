import React, { useContext, useEffect, useState } from "react";
import mockData from "../../apis/mock-data";
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
  Badge,
  IconButton,
  Tooltip,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { GlobalContext } from "../../config/GlobalContext";
function ProductLayout() {
  const [visibleProducts, setVisibleProducts] = useState(24);
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);


  const handleShowMore = () => {
    setVisibleProducts(mockData.products.length);
  };

  const handleAddToCart = (productId) => {
    const updatedCart = [...cart];
    const existingItem = updatedCart.find(item => item.productId === productId);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      updatedCart.push({ productId, quantity: 1 });
    }

    // Lưu giỏ hàng vào localStorage
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
    window.location.reload();
  };

  const getTotalCartItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <Box sx={{ backgroundColor: "#f5f5f5", minHeight: "100vh", p: 2 }}>
      <Container maxWidth="lg">
        {/* Cart Icon with Badge */}
        <Box sx={{ position: "fixed", top: 80, right: 20, zIndex: 1000 }}>
          <Badge badgeContent={getTotalCartItems()} color="error">
            <IconButton
              sx={{
                bgcolor: "white",
                boxShadow: 2,
                "&:hover": { bgcolor: "#f5f5f5" },
              }}
            >
              <ShoppingCartIcon />
            </IconButton>
          </Badge>
        </Box>

        {/* Categories Paper */}
        <Paper sx={{ mb: 3, p: 2 }}>
          <Typography sx={{ pl: 2, mb: 2, color: "rgb(141, 141, 141)" }}>
            DANH MỤC
          </Typography>
          <Grid container>
            {mockData.categories.map((category) => (
              <Grid item xs={6} sm={4} md={3} lg={2} key={category.id}>
                <Box
                  sx={{
                    border: "1px solid #f0f0f0",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    p: 1,
                    cursor: "pointer",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.005)",
                      boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.15)",
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={category.imageUrl}
                    alt={category.name}
                    sx={{ width: 70, height: 70, mb: 1 }}
                  />
                  <Typography variant="caption" align="center">
                    {category.name}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Paper>

        {/* Featured Products Header */}
        <Paper sx={{ mb: 3, p: 2 }}>
          <Divider textAlign="center" sx={{ mb: 2 }}>
            SẢN PHẨM NỔI BẬT
          </Divider>
        </Paper>

        {/* Products Grid */}
        <Box sx={{ mb: 3 }}>
          <Grid container spacing={2}>
            {mockData.products.slice(0, visibleProducts).map((product) => (
              <Grid item xs={12} sm={6} md={4} lg={2} key={product.id}>
                <Card
                  sx={{
                    borderRadius: "0.1px",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    cursor: "pointer",
                    position: "relative",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.01)",
                      boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.15)",
                      "& .product-details": {
                        display: "flex",
                      },
                    },
                  }}
                >
                  <Box sx={{ position: "relative" }}>
                    <CardMedia
                      component="img"
                      height="200"
                      image={product.imageUrl}
                      alt={product.name}
                    />
                    <Chip
                      label="-10%"
                      size="small"
                      sx={{
                        borderRadius: "1px",
                        position: "absolute",
                        top: 0,
                        right: 0,
                        backgroundColor: "#ee4d2d",
                        color: "white",
                      }}
                    />
                  </Box>
                  <CardContent sx={{ flexGrow: 1, pb: 1 }}>
                    <Typography
                      variant="body2"
                      sx={{
                        height: 40,
                        overflow: "hidden",
                        mb: 1,
                      }}
                    >
                      {product.name}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Box>
                        <Typography
                          sx={{
                            color: "#ee4d2d",
                            fontWeight: "bold",
                          }}
                        >
                          ₫{product.price.toLocaleString()}
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{
                            textDecoration: "line-through",
                            color: "text.secondary",
                          }}
                        >
                          ₫{(product.price * 1.1).toLocaleString()}
                        </Typography>
                      </Box>
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 1 }}
                      >
                        <Typography variant="caption" color="text.secondary">
                          Đã bán {product.sold}
                        </Typography>
                        <Tooltip title="Thêm vào giỏ hàng">
                          <IconButton
                            size="small"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleAddToCart(product.id);
                            }}
                            sx={{
                              color: "#ee4d2d",
                              "&:hover": {
                                backgroundColor: "rgba(238, 77, 45, 0.04)",
                              },
                            }}
                          >
                            <AddShoppingCartIcon />
                          </IconButton>
                        </Tooltip>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Show More Button */}
        {visibleProducts < mockData.products.length && (
          <Box sx={{ textAlign: "center", m: 5 }}>
            <Button
              variant="contained"
              onClick={handleShowMore}
              sx={{
                backgroundColor: "white",
                color: "black",
                border: "1px solid #ccc",
                borderRadius: "5px",
                p: "8px 100px",
                boxShadow: "none",
                "&:hover": {
                  backgroundColor: "#f5f5f5",
                  boxShadow: "none",
                },
              }}
            >
              Xem thêm
            </Button>
          </Box>
        )}

        {/* Featured Stores */}
        <Paper sx={{ p: 2 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Cửa Hàng Nổi Bật
          </Typography>
          <Grid container spacing={2}>
            {mockData.stores.map((store) => (
              <Grid item xs={12} sm={6} md={4} key={store.id}>
                <Paper
                  variant="outlined"
                  sx={{
                    p: 2,
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.001)",
                      boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.15)",
                      cursor: "pointer",
                    },
                  }}
                >
                  <Box
                    component="img"
                    src="/api/placeholder/50/50"
                    alt={store.name}
                    sx={{
                      width: 50,
                      height: 50,
                      borderRadius: "50%",
                    }}
                  />
                  <Box>
                    <Typography variant="subtitle2">{store.name}</Typography>
                    <Typography variant="caption" color="text.secondary">
                      {
                        mockData.products.filter((p) => p.storeId === store.id)
                          .length
                      }{" "}
                      sản phẩm
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
}

export default ProductLayout;
