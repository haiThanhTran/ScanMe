import { Box, Button, ImageList, Typography } from "@mui/material";
import React, { useState } from "react";

const itemData = [
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Shopee-logo.jpg",
    name: "Shopee",
    quantity: 71,
  },
  {
    img: "https://banghieuviet.org/wp-content/uploads/2023/09/download-logo-lazada-vector.jpg",
    name: "Lazada",
    quantity: 71,
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/4/43/Logo_Tiki_2023.png",
    name: "Tiki",
    quantity: 71,
  },
  {
    img: "https://lh3.googleusercontent.com/wR4LAWuoUb5JsBQUzPpfRmwboEoHsFDu0zFJL92u0iWcsVkty-jZgR8riFztakwD6hvY7twf_g-zEeK409-Tx3NOs0bxWCsUeCQ-wBpriiVieFIQ24WOCn833xwyOewEvNlg0rU7",
    name: "Sendo",
    quantity: 71,
  },
];

const itemData2 = [
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Shopee-logo.jpg",
    name: "Shopee",
    time: "22/2",
    reduce: "10%",
    minimum: "100.000",
    note: "Mã áp dụng cho các cửa hàng về ăn uống",
  },
  {
    img: "https://banghieuviet.org/wp-content/uploads/2023/09/download-logo-lazada-vector.jpg",
    name: "Lazada",
    time: "22/2",
    reduce: "60K",
    minimum: "150.000",
    note: "Mã áp dụng cho các cửa hàng về mỹ phẩm",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/4/43/Logo_Tiki_2023.png",
    name: "Tiki",
    time: "22/2",
    reduce: "10K",
    minimum: "50.000",
    note: "Mã áp dụng cho sản phẩm về hoa",
  },
  {
    img: "https://lh3.googleusercontent.com/wR4LAWuoUb5JsBQUzPpfRmwboEoHsFDu0zFJL92u0iWcsVkty-jZgR8riFztakwD6hvY7twf_g-zEeK409-Tx3NOs0bxWCsUeCQ-wBpriiVieFIQ24WOCn833xwyOewEvNlg0rU7",
    name: "Sendo",
    time: "24/2",
    reduce: "5%",
    minimum: "99.000",
    note: "Mã áp dụng cho tất cả các cửa hàng",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Shopee-logo.jpg",
    name: "Shopee",
    time: "23/2",
    reduce: "15%",
    minimum: "200.000",
    note: "Mã áp dụng cho tất cả các cửa hàng",
  },
  {
    img: "https://lh3.googleusercontent.com/wR4LAWuoUb5JsBQUzPpfRmwboEoHsFDu0zFJL92u0iWcsVkty-jZgR8riFztakwD6hvY7twf_g-zEeK409-Tx3NOs0bxWCsUeCQ-wBpriiVieFIQ24WOCn833xwyOewEvNlg0rU7",
    name: "Sendo",
    time: "24/2",
    reduce: "5%",
    minimum: "99.000",
    note: "Mã áp dụng cho tất cả các cửa hàng",
  },
  {
    img: "https://lh3.googleusercontent.com/wR4LAWuoUb5JsBQUzPpfRmwboEoHsFDu0zFJL92u0iWcsVkty-jZgR8riFztakwD6hvY7twf_g-zEeK409-Tx3NOs0bxWCsUeCQ-wBpriiVieFIQ24WOCn833xwyOewEvNlg0rU7",
    name: "Sendo",
    time: "24/2",
    reduce: "5%",
    minimum: "99.000",
    note: "Mã áp dụng cho tất cả các cửa hàng",
  },
  {
    img: "https://lh3.googleusercontent.com/wR4LAWuoUb5JsBQUzPpfRmwboEoHsFDu0zFJL92u0iWcsVkty-jZgR8riFztakwD6hvY7twf_g-zEeK409-Tx3NOs0bxWCsUeCQ-wBpriiVieFIQ24WOCn833xwyOewEvNlg0rU7",
    name: "Sendo",
    time: "24/2",
    reduce: "5%",
    minimum: "99.000",
    note: "Mã áp dụng cho tất cả các cửa hàng",
  },
  {
    img: "https://lh3.googleusercontent.com/wR4LAWuoUb5JsBQUzPpfRmwboEoHsFDu0zFJL92u0iWcsVkty-jZgR8riFztakwD6hvY7twf_g-zEeK409-Tx3NOs0bxWCsUeCQ-wBpriiVieFIQ24WOCn833xwyOewEvNlg0rU7",
    name: "Sendo",
    time: "24/2",
    reduce: "5%",
    minimum: "99.000",
    note: "Mã áp dụng cho tất cả các cửa hàng",
  },
];

function MainVoucher() {
  const [items, setItems] = useState(6);
  const handleMoreVoucher = () => {
    setItems(items + 6);
  };
  return (
    <Box sx={{ backgroundColor: "#f5f5f5", minHeight: "100vh", p: 2 }}>
      <Box sx={{ marginTop: "150px", padding: "100px", paddingTop: "50px" }}>
        <Typography
          variant="h4"
          align="left"
          gutterBottom
          style={{ fontWeight: "bold" }}
        >
          Danh sách mã
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Box sx={{ width: "15%" }}>
            <Typography variant="h6" align="left" gutterBottom>
              Lọc theo
              <Typography
                component="span"
                sx={{ color: "red", fontWeight: "bold", marginLeft: "5px" }}
                variant="h6"
              >
                Sàn
              </Typography>
            </Typography>

            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", borderBottom: "1px solid black" }}
              gutterBottom
            />

            {itemData.map((item) => (
              <Box sx={{ display: "flex", flexDirection: "column" }} key={item}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "5px",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        width: 40,
                        height: 40,
                        backgroundImage: `url(${item.img})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        borderRadius: 100,
                      }}
                    />
                    <Typography
                      variant="h7"
                      align="left"
                      gutterBottom
                      style={{ fontWeight: "bold" }}
                    >
                      {item.name}
                    </Typography>
                  </Box>
                  <Typography
                    variant="h7"
                    align="left"
                    gutterBottom
                    style={{ fontWeight: "bold" }}
                  >
                    {item.quantity}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
          <Box sx={{ width: "85%" }}>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                padding: 8,
                paddingTop: 0,
                gap: 3,
              }}
            >
              {itemData2.slice(0, items).map((item) => (
                <Box
                  sx={{
                    padding: "20px",
                    backgroundColor: "white",
                    borderRadius: "20px",
                    height: "100%",
                  }}
                  key={item}
                >
                  <Box sx={{ display: "flex", flexDirection: "row" }}>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: "25%",
                        borderRight: "2px dashed gray",
                        borderImage:
                          "linear-gradient(to bottom, grey 60%, transparent 40%) 1 100%",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "3px",
                          alignItems: "center",
                        }}
                      >
                        <Box
                          sx={{
                            width: 40,
                            height: 40,
                            backgroundImage: `url(${item.img})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            borderRadius: 100,
                          }}
                        />
                        <Typography
                          variant="h7"
                          align="left"
                          gutterBottom
                          style={{ fontWeight: "bold" }}
                        >
                          {item.name}
                        </Typography>
                      </Box>
                      <Typography variant="h7" gutterBottom>
                        HSD: {item.time}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        paddingLeft: "20px",
                        paddingRight: "20px",
                      }}
                    >
                      <Typography
                        variant="h7"
                        align="left"
                        gutterBottom
                        style={{ fontWeight: "bold" }}
                      >
                        Giảm
                        <Typography
                          component="span"
                          variant="h4"
                          sx={{
                            marginLeft: "5px",
                            color: "red",
                            fontWeight: "bold",
                          }}
                        >
                          {item.reduce}
                        </Typography>
                      </Typography>
                      <Typography variant="h7" align="left" gutterBottom>
                        ĐH tối thiểu:
                        <Typography
                          component="span"
                          variant="h7"
                          sx={{
                            marginLeft: "5px",
                            fontWeight: "bold",
                          }}
                        >
                          {item.minimum}đ
                        </Typography>
                      </Typography>
                      <Typography
                        variant="h7"
                        align="left"
                        gutterBottom
                        sx={{ fontWeight: "bold", color: "red" }}
                      >
                        Lưu ý: {item.note}
                      </Typography>
                      <Button
                        variant="contained"
                        sx={{
                          mt: 1,
                          backgroundColor: "red",
                          color: "white",
                          "&:hover": { backgroundColor: "darkred" },
                        }}
                      >
                        Lấy mã
                      </Button>
                    </Box>
                  </Box>
                </Box>
              ))}
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                variant="contained"
                sx={{ mt: 1, backgroundColor: "red", color: "white" }}
                onClick={() => handleMoreVoucher()}
              >
                Xem thêm
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default MainVoucher;
