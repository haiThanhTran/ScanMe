import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  IconButton,
  Button,
  Box,
  Divider,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

// Import mock data
import mockData from "../../apis/mock-data";

const ShoppingCart = () => {
  const initialCart = [
    { productId: "product-06", quantity: 2 },
    { productId: "product-03", quantity: 1 },
    { productId: "product-01", quantity: 1 },
    { productId: "product-02", quantity: 1 },
  ];
  const [cartItems, setCartItems] = useState(initialCart);
  const [groupedCartItems, setGroupedCartItems] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);

  // Hàm lấy thông tin sản phẩm từ mockData dựa trên productId
  const getProductDetails = (productId) => {
    return mockData.products.find((product) => product.id === productId);
  };

  // Hàm lấy thông tin cửa hàng từ mockData dựa trên storeId
  const getStoreDetails = (storeId) => {
    return mockData.stores.find((store) => store.id === storeId);
  };

  useEffect(() => {
    // Nhóm sản phẩm theo cửa hàng và tính tổng tiền
    const groupedItems = {};
    let totalPriceCalculation = 0;

    cartItems.forEach((cartItem) => {
      const productDetails = getProductDetails(cartItem.productId);
      if (productDetails) {
        const storeId = productDetails.storeId;
        if (!groupedItems[storeId]) {
          groupedItems[storeId] = {
            store: getStoreDetails(storeId),
            products: [],
          };
        }
        const itemTotal = productDetails.price * cartItem.quantity;
        totalPriceCalculation += itemTotal;
        groupedItems[storeId].products.push({
          ...productDetails,
          quantity: cartItem.quantity,
          itemTotal,
        });
      }
    });

    setGroupedCartItems(groupedItems);
    setTotalPrice(totalPriceCalculation);
  }, [cartItems]);

  // Hàm tăng giảm số lượng sản phẩm
  const handleQuantityChange = (productId, change) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.productId === productId) {
        const newQuantity = Math.max(1, item.quantity + change); // Đảm bảo số lượng không nhỏ hơn 1
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCartItems(updatedCartItems);
    // Cập nhật localStorage ở đây nếu cần
  };

  // Hàm xóa sản phẩm khỏi giỏ hàng
  const handleRemoveFromCart = (productId) => {
    const updatedCartItems = cartItems.filter(
      (item) => item.productId !== productId
    );
    setCartItems(updatedCartItems);
    // Cập nhật localStorage ở đây nếu cần
  };

  return (
    <div style={{ marginBottom: "100px" }}>
      {/* Navbar */}
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontWeight: "bold", color: "secondary.main" }}
          >
            ScanMe
          </Typography>
          <TextField
            variant="outlined"
            size="small"
            placeholder="Tìm sản phẩm, thương hiệu và shop"
            sx={{ width: 300, marginRight: 2 }}
          />
          <Typography variant="subtitle1" component="div">
            Giỏ Hàng
          </Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ mt: 2 }}>
        <Paper
          elevation={0}
          sx={{ border: "1px solid #e0e0e0", borderRadius: 1, p: 2 }}
        >
          <Grid container alignItems="center" spacing={2}>
            <Grid item xs={6}>
              <FormControlLabel
                control={<Checkbox />}
                label="Chọn Tất Cả (12)"
              />
            </Grid>
            <Grid item xs={6} sx={{ textAlign: "right" }}>
              <Button variant="text" color="error" size="small">
                Xóa
              </Button>
            </Grid>
          </Grid>
          <Divider sx={{ my: 2 }} />

          {/* Hiển thị sản phẩm theo từng cửa hàng */}
          {Object.entries(groupedCartItems).map(([storeId, storeGroup]) => (
            <Box
              key={storeId}
              sx={{
                mb: 3,
                mt: 2,
                border: "1px solid #e0e0e0",
                borderRadius: 1,
                p: 2,
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Checkbox />
                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: "bold", ml: 1 }}
                >
                  {storeGroup.store.name}
                </Typography>
              </Box>
              <TableContainer>
                <Table aria-label="shopping cart table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Sản phẩm</TableCell>
                      <TableCell align="right">Đơn giá</TableCell>
                      <TableCell align="center">Số lượng</TableCell>
                      <TableCell align="right">Số tiền</TableCell>
                      <TableCell align="center">Thao tác</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {storeGroup.products.map((product) => (
                      <TableRow key={product.id}>
                        <TableCell component="th" scope="row">
                          <Box sx={{ display: "flex", alignItems: "center" }}>
                            <Checkbox />
                            <img
                              src={
                                product.imageUrl ||
                                "https://via.placeholder.com/50x50"
                              }
                              alt={product.name}
                              width="50"
                              height="50"
                              style={{ marginRight: 10 }}
                            />
                            <Typography>{product.name}</Typography>
                          </Box>
                        </TableCell>
                        <TableCell align="right">
                          {product.price.toLocaleString()} VNĐ
                        </TableCell>
                        <TableCell align="center">
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <IconButton
                              size="small"
                              onClick={() =>
                                handleQuantityChange(product.id, -1)
                              }
                            >
                              <RemoveIcon />
                            </IconButton>
                            <TextField
                              variant="outlined"
                              size="small"
                              value={product.quantity}
                              onChange={(e) => {
                                // Bạn có thể thêm xử lý input trực tiếp ở đây nếu muốn
                                // Ví dụ: cập nhật số lượng khi người dùng nhập số
                              }}
                              inputProps={{
                                style: { textAlign: "center", width: 50 },
                              }}
                            />
                            <IconButton
                              size="small"
                              onClick={() =>
                                handleQuantityChange(product.id, 1)
                              }
                            >
                              <AddIcon />
                            </IconButton>
                          </Box>
                        </TableCell>
                        <TableCell align="right">
                          {product.itemTotal.toLocaleString()} VNĐ
                        </TableCell>
                        <TableCell align="center">
                          <IconButton
                            onClick={() => handleRemoveFromCart(product.id)}
                            color="error"
                          >
                            <DeleteIcon />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <Divider sx={{ my: 2 }} />
              <Box sx={{ textAlign: "right" }}>
                <Button variant="outlined" size="small">
                  Tìm sản phẩm tương tự
                </Button>
              </Box>
            </Box>
          ))}
        </Paper>

        {/* Footer thanh toán */}
        <Paper
          elevation={0}
          sx={{ border: "1px solid #e0e0e0", borderRadius: 1, p: 2, mt: 2 }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <FormControlLabel control={<Checkbox />} label="ScanMe Voucher" />
            <Button variant="outlined" size="small">
              Chọn hoặc nhập mã
            </Button>
          </Box>
          <Divider sx={{ my: 2 }} />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="subtitle1">
              Tổng thanh toán (2 sản phẩm):
            </Typography>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", color: "error.main" }}
            >
              {totalPrice.toLocaleString()} VNĐ
            </Typography>
          </Box>
          <Box sx={{ mt: 2, textAlign: "right" }}>
            <Button variant="contained" color="primary" size="large">
              Mua Hàng
            </Button>
          </Box>
        </Paper>
      </Container>
    </div>
  );
};

export default ShoppingCart;
