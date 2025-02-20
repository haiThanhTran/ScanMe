import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box } from "@mui/material";

const banners = [
  {
    id: 1,
    image:
      "https://marketplace.canva.com/EAGLaWLteqY/2/0/1600w/canva-%E1%BA%A3nh-b%C3%ACa-facebook-sale-8.8-khuy%E1%BA%BFn-m%C3%A3i-%E1%BA%A5n-t%C6%B0%E1%BB%A3ng-hi%E1%BB%87n-%C4%91%E1%BA%A1i-%C4%91%E1%BB%8F-cam--ap_gXlsWcU.jpg",
    title: "Laz Trợ Giá",
    link: "/promotion/lazada",
  },
  {
    id: 2,
    image:
      "https://webmedia.com.vn/images/2020/05/banner-slide-laptop-moi-gia-re-nhat-quang-ninh.jpg",
    title: "Valentine Sale",
    link: "/promotion/valentine",
  },
  {
    id: 3,
    image:
      "https://olivo.cdn.vccloud.vn/wp-content/uploads/2024/01/Banner-web-ngang-K-LOGO-scaled.jpg",
    title: "LazMart Freeship",
    link: "/promotion/lazmart",
  },
  {
    id: 4,
    image:
      "https://png.pngtree.com/background/20210715/original/pngtree-black-friday-sale-banner-picture-image_1267522.jpg",
    title: "Shopee Nổi Hình",
    link: "/promotion/shopee",
  },
];

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

function BannerSliderVoucher() {
  return (
    <Box sx={{ width: "100vw", height: "50vh", mt: 2 }}>
      <Carousel
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        transitionDuration={1000}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        draggable
        swipeable
      >
        {banners.map((banner) => (
          <Box
            key={banner.id}
            component="a"
            href={banner.link}
            sx={{
              width: "100vw",
              height: "70vh",
              position: "relative",
              overflow: "hidden",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={banner.image}
              alt={banner.title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                position: "absolute",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                bottom: 10,
                left: 10,
                color: "white",
                backgroundColor: "rgba(0,0,0,0.5)",
                padding: "8px 12px",
                borderRadius: "5px",
                fontSize: "18px",
              }}
            >
              {banner.title}
            </Box>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
}

export default BannerSliderVoucher;
