import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box } from "@mui/material";
import slide1 from "../../../../assets/images/slide1.jpg";
import slide2 from "../../../../assets/images/slide2.jpg";
import slide3 from "../../../../assets/images/slide3.jpg";
import slide4 from "../../../../assets/images/slide4.jpg";

const banners = [
  {
    id: 1,
    image: slide1,
    title: "Laz Trợ Giá",
    link: "/promotion/lazada",
  },
  {
    id: 2,
    image: slide2,
    title: "Valentine Sale",
    link: "/promotion/valentine",
  },
  {
    id: 3,
    image: slide3,
    title: "LazMart Freeship",
    link: "/promotion/lazmart",
  },
  {
    id: 4,
    image: slide4,
    title: "Shopee Nổi Hình",
    link: "/promotion/shopee",
  },
  {
    id: 5,
    image: slide1,
    title: "Laz Trợ Giá",
    link: "/promotion/lazada",
  },
  {
    id: 6,
    image: slide2,
    title: "Valentine Sale",
    link: "/promotion/valentine",
  },
  {
    id: 7,
    image: slide3,
    title: "LazMart Freeship",
    link: "/promotion/lazmart",
  },
  {
    id: 8,
    image: slide4,
    title: "Shopee Nổi Hình",
    link: "/promotion/shopee",
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const BannerSlider = () => {
  const handleDragStart = (e) => e.preventDefault();
  return (
    <Box sx={{ mt: 8 }}>
      <Carousel
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="transform 500ms ease-in-out"
        transitionDuration={100}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        draggable={true}
        swipeable={true}
      >
        {banners.map((banner) => (
          <Box
            key={banner.id}
            component="a"
            href={banner.link}
            sx={{
              width: "80%",
              height: "80%",
              borderRadius: "10px",
              marginTop: "30px",
              marginRight: "30px",
              marginLeft: "30px",
              position: "relative",
              overflow: "hidden",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "black",
              "&:hover img": {
                transform: "scale(1.05)",
              },
            }}
          >
            <img
              onDragStart={handleDragStart}
              src={banner.image}
              alt={banner.title}
              style={{
                width: "100%",
                height: "auto",
                objectFit: "contain",
                transition: "transform 0.3s ease",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                bottom: 20,
                left: 20,
                color: "white",
                backgroundColor: "rgba(0,0,0,0.5)",
                padding: 1,
                borderRadius: 1,
              }}
            >
              {banner.title}
            </Box>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default BannerSlider;
