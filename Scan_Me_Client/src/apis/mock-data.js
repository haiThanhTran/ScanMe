const mockData = {
  users: [
    {
      id: "user-01",
      username: "khachhang",
      email: "customer@gmail.com",
      password: "12345678",
      fullName: "Nguyễn Văn A",
      phoneNumber: "0901234567",
      address: "123 Đường A, Quận B, TP. Hà Nội",
      role:"customer"
    },
    {
      id: "user-02",
      username: "tranthib",
      email: "tranthib@example.com",
      password: "hashed_password_2",
      fullName: "Trần Thị B",
      phoneNumber: "0902345678",
      address: "456 Đường C, Quận D, TP. Hồ Chí Minh",
    },
    // Thêm người dùng khác nếu cần
  ],
  userVouchers: [
    {
      userId: "user-01",
      voucherId: "voucher-01",
      status: "unused",
      savedDate: "2025-02-05T00:00:00",
    },
  ],
  stores: [
    {
      id: "store-01",
      name: "Thời Trang ABC",
      description: "Chuyên cung cấp quần áo thời trang nam nữ.",
      address: "789 Đường E, Quận F, TP. Đà Nẵng",
      phoneNumber: "0903456789",
      email: "abcfashion@example.com",
    },
    {
      id: "store-02",
      name: "Phụ Kiện XYZ",
      description: "Cửa hàng phụ kiện thời trang cao cấp.",
      address: "321 Đường G, Quận H, TP. Cần Thơ",
      phoneNumber: "0904567890",
      email: "xyzaccessories@example.com",
    },
    // Thêm cửa hàng khác nếu cần
    {
      id: "store-03",
      name: "Điện Máy 123",
      description: "Cung cấp các sản phẩm điện máy gia dụng.",
      address: "123 Nguyễn Văn Linh, Đà Nẵng",
      phoneNumber: "0905123456",
      email: "dienmay123@example.com",
    },
    {
      id: "store-04",
      name: "Sách Hay Mỗi Ngày",
      description: "Cửa hàng sách online và offline.",
      address: "456 Lê Duẩn, Hà Nội",
      phoneNumber: "0906234567",
      email: "sachhay@example.com",
    },
    {
      id: "store-05",
      name: "Thực Phẩm An Toàn",
      description: "Cung cấp các loại thực phẩm tươi sống, đảm bảo an toàn.",
      address: "789 Cách Mạng Tháng Tám, TP.HCM",
      phoneNumber: "0907345678",
      email: "thucphamantoan@example.com",
    },
    {
      id: "store-06",
      name: "Nội Thất Đẹp",
      description: "Cửa hàng nội thất cao cấp, thiết kế tinh tế.",
      address: "321 Trần Phú, Nha Trang",
      phoneNumber: "0908456789",
      email: "noithatdep@example.com",
    },
    {
      id: "store-07",
      name: "Đồ Chơi Trẻ Em",
      description: "Thế giới đồ chơi an toàn, sáng tạo cho bé.",
      address: "123 Hai Bà Trưng, Huế",
      phoneNumber: "0909567890",
      email: "dochoitreem@example.com",
    },
    {
      id: "store-08",
      name: "Điện Thoại Giá Rẻ",
      description: "Chuyên cung cấp các dòng điện thoại chính hãng giá tốt.",
      address: "456 Hùng Vương, Quy Nhơn",
      phoneNumber: "0901678901",
      email: "dienthoaigiare@example.com",
    },
    {
      id: "store-09",
      name: "Mỹ Phẩm Xách Tay",
      description: "Mỹ phẩm chính hãng từ các thương hiệu nổi tiếng.",
      address: "789 Nguyễn Huệ, Vũng Tàu",
      phoneNumber: "0902789012",
      email: "myphamxachtay@example.com",
    },
    {
      id: "store-10",
      name: "Giày Dép Thời Trang",
      description: "Cửa hàng giày dép nam nữ, đa dạng mẫu mã.",
      address: "321 Ngô Quyền, Đà Lạt",
      phoneNumber: "0903890123",
      email: "giaydepthoitrang@example.com",
    },
    {
      id: "store-11",
      name: "Văn Phòng Phẩm",
      description: "Chuyên cung cấp các mặt hàng văn phòng phẩm giá rẻ.",
      address: "123 Pasteur, Cần Thơ",
      phoneNumber: "0904901234",
      email: "vanphongpham@example.com",
    },
  ],
  products: [
    {
      id: "product-01",
      storeId: "store-01",
      name: "Áo Sơ Mi Nam Trắng",
      description: "Áo sơ mi nam chất liệu cotton cao cấp.",
      price: 350000,
      category: "Thời trang nam",
      stock: 50,
      imageUrl:
        "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lf96yzqqr4ay63@resize_w450_nl.webp",
      sold: 20, // Added 'sold' property
    },
    {
      id: "product-02",
      storeId: "store-02",
      name: "Dây Chuyền Bạc Nữ",
      description: "Dây chuyền bạc 925 thiết kế tinh tế.",
      price: 500000,
      category: "Phụ kiện nữ",
      stock: 30,
      imageUrl:
        "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m5v88wnkro7rbc@resize_w450_nl.webp",
      sold: 15, // Added 'sold' property
    },
    // Thêm sản phẩm khác nếu cần
    {
      id: "product-03",
      storeId: "store-03",
      name: "Tivi LED Samsung 55 inch",
      description: "Tivi LED 55 inch, độ phân giải 4K.",
      price: 12000000,
      category: "Điện máy",
      stock: 20,
      imageUrl:
        "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lyxdkpxhap4165@resize_w450_nl.webp",
      sold: 8, // Added 'sold' property
    },
    {
      id: "product-04",
      storeId: "store-04",
      name: "Đắc Nhân Tâm",
      description: "Sách Đắc Nhân Tâm - Dale Carnegie",
      price: 80000,
      category: "Sách",
      stock: 100,
      imageUrl:
        "https://down-vn.img.susercontent.com/file/vn-11134201-7ras8-m3a4guov37qkcf@resize_w450_nl.webp",
      sold: 60, // Added 'sold' property
    },
    {
      id: "product-05",
      storeId: "store-05",
      name: "Gạo ST25",
      description: "Gạo thơm ST25, 5kg",
      price: 120000,
      category: "Thực phẩm",
      stock: 80,
      imageUrl:
        "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-llzwjmszz10f88@resize_w450_nl.webp",
      sold: 45, // Added 'sold' property
    },
    {
      id: "product-06",
      storeId: "store-06",
      name: "Ghế Sofa Da",
      description: "Ghế sofa da cao cấp, kiểu dáng hiện đại.",
      price: 8500000,
      category: "Nội thất",
      stock: 10,
      imageUrl:
        "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lwmokz46lr6h8a@resize_w450_nl.webp",
      sold: 3, // Added 'sold' property
    },
    {
      id: "product-07",
      storeId: "store-08",
      name: "Bộ Xếp Hình LEGO",
      description: "Bộ xếp hình LEGO cho bé từ 5 tuổi.",
      price: 600000,
      category: "Đồ chơi",
      stock: 40,
      imageUrl:
        "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lfc2wgcqmf794d@resize_w450_nl.webp",
      sold: 28, // Added 'sold' property
    },
    {
      id: "product-08",
      storeId: "store-08",
      name: "Điện Thoại iPhone 15",
      description: "Điện thoại iPhone 15, 128GB",
      price: 25000000,
      category: "Điện thoại",
      stock: 15,
      imageUrl:
        "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-llm05p5nrfloa9@resize_w450_nl.webp",
      sold: 10, // Added 'sold' property
    },
    {
      id: "product-09",
      storeId: "store-09",
      name: "Kem Chống Nắng",
      description: "Kem chống nắng SPF50+, bảo vệ da.",
      price: 280000,
      category: "Mỹ phẩm",
      stock: 60,
      imageUrl:
        "https://down-vn.img.susercontent.com/file/vn-11134201-7ras8-m601g2ig4ml38c@resize_w450_nl.webp",
      sold: 35, // Added 'sold' property
    },
    {
      id: "product-10",
      storeId: "store-10",
      name: "Giày Sneaker Adidas",
      description: "Giày sneaker Adidas, phong cách thể thao.",
      price: 1500000,
      category: "Giày dép",
      stock: 25,
      imageUrl:
        "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m0hb5ycxh4svb3@resize_w450_nl.webp",
      sold: 18, // Added 'sold' property
    },
    {
      id: "product-11",
      storeId: "store-11",
      name: "Bút Bi Thiên Long",
      description: "Bút bi Thiên Long ngòi 0.5mm.",
      price: 5000,
      category: "Văn phòng phẩm",
      stock: 200,
      imageUrl:
        "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lmefmw2y16u796@resize_w450_nl.webp",
      sold: 110, // Added 'sold' property
    },
    {
      id: "product-12",
      storeId: "store-01",
      name: "Áo Thun Polo",
      description: "Áo thun polo nam, chất liệu cotton thoáng mát.",
      price: 280000,
      category: "Thời trang nam",
      stock: 45,
      imageUrl:
        "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-ljkugs5xha5w80@resize_w450_nl.webp",
      sold: 22, // Added 'sold' property
    },
    {
      id: "product-13",
      storeId: "store-02",
      name: "Bông Tai Nữ",
      description: "Bông tai nữ thiết kế độc đáo.",
      price: 400000,
      category: "Phụ kiện nữ",
      stock: 35,
      imageUrl:
        "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lf9l7u7fkbbrff@resize_w450_nl.webp",
      sold: 17, // Added 'sold' property
    },
    {
      id: "product-14",
      storeId: "store-03",
      name: "Tủ Lạnh Sharp",
      description: "Tủ lạnh Sharp 2 cánh, dung tích 300L.",
      price: 7800000,
      category: "Điện máy",
      stock: 18,
      imageUrl:
        "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m4pvwh6hogogbd@resize_w450_nl.webp",
      sold: 6, // Added 'sold' property
    },
    {
      id: "product-15",
      storeId: "store-04",
      name: "Totto-chan Bên Cửa Sổ",
      description: "Sách Totto-chan Bên Cửa Sổ - Tetsuko Kuroyanagi.",
      price: 65000,
      category: "Sách",
      stock: 90,
      imageUrl:
        "https://down-vn.img.susercontent.com/file/fe004e3833274318f800fd13162a4f15@resize_w450_nl.webp",
      sold: 50, // Added 'sold' property
    },
    {
      id: "product-16",
      storeId: "store-05",
      name: "Trứng Gà",
      description: "Trứng gà tươi, 10 quả.",
      price: 30000,
      category: "Thực phẩm",
      stock: 120,
      imageUrl:
        "https://down-vn.img.susercontent.com/file/53a7655e501f7db7f58a1c7e7b89a167@resize_w450_nl.webp",
      sold: 75, // Added 'sold' property
    },
    {
      id: "product-17",
      storeId: "store-06",
      name: "Bàn Ăn Gỗ Sồi",
      description: "Bàn ăn gỗ sồi tự nhiên, sang trọng.",
      price: 5500000,
      category: "Nội thất",
      stock: 8,
      imageUrl:
        "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m5wqlh0ln7p4f1@resize_w450_nl.webp",
      sold: 2, // Added 'sold' property
    },
    {
      id: "product-18",
      storeId: "store-07",
      name: "Búp Bê Barbie",
      description: "Búp bê Barbie xinh xắn cho bé gái.",
      price: 320000,
      category: "Đồ chơi",
      stock: 50,
      imageUrl:
        "https://down-vn.img.susercontent.com/file/sg-11134201-7rbnh-ll6ynqzeg11121@resize_w450_nl.webp",
      sold: 30, // Added 'sold' property
    },
    {
      id: "product-19",
      storeId: "store-08",
      name: "Điện Thoại Xiaomi",
      description: "Điện thoại Xiaomi Redmi Note 13, 64GB",
      price: 5000000,
      category: "Điện thoại",
      stock: 20,
      imageUrl:
        "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m4vngba9368n45@resize_w450_nl.webp",
      sold: 12, // Added 'sold' property
    },
    {
      id: "product-20",
      storeId: "store-09",
      name: "Son Môi",
      description: "Son môi L'Oreal, nhiều màu sắc.",
      price: 220000,
      category: "Mỹ phẩm",
      stock: 70,
      imageUrl:
        "https://down-vn.img.susercontent.com/file/vn-11134201-7ras8-m5co5gbetf3s2b@resize_w450_nl.webp",
      sold: 40, // Added 'sold' property
    },
    {
      id: "product-21",
      storeId: "store-10",
      name: "Giày Cao Gót",
      description: "Giày cao gót nữ, kiểu dáng thanh lịch.",
      price: 800000,
      category: "Giày dép",
      stock: 30,
      imageUrl:
        "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lnwpsg0ma2ul1e@resize_w450_nl.webp",
      sold: 15, // Added 'sold' property
    },
    {
      id: "product-22",
      storeId: "store-11",
      name: "Giấy A4",
      description: "Giấy A4 Double A, 500 tờ.",
      price: 45000,
      category: "Văn phòng phẩm",
      stock: 150,
      imageUrl:
        "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m4k6ef2xj0934c@resize_w450_nl.webp",
      sold: 90, // Added 'sold' property
    },
    {
      id: "product-23",
      storeId: "store-01",
      name: "Quần Jeans Nam",
      description: "Quần jeans nam phong cách bụi bặm.",
      price: 420000,
      category: "Thời trang nam",
      stock: 38,
      imageUrl:
        "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lz02r6m8vyodc8@resize_w450_nl.webp",
      sold: 19, // Added 'sold' property
    },
    {
      id: "product-24",
      storeId: "store-02",
      name: "Vòng Tay Đá",
      description: "Vòng tay đá phong thủy.",
      price: 650000,
      category: "Phụ kiện nữ",
      stock: 22,
      imageUrl:
        "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m6205h2q1j435f@resize_w450_nl.webp",
      sold: 11, // Added 'sold' property
    },
    {
      id: "product-25",
      storeId: "store-03",
      name: "Máy Giặt Electrolux",
      description: "Máy giặt Electrolux cửa trước, 8kg.",
      price: 9500000,
      category: "Điện máy",
      stock: 12,
      imageUrl:
        "https://down-vn.img.susercontent.com/file/5bc55d56b101a5a3a86ad662b5f6ead4@resize_w450_nl.webp",
      sold: 5, // Added 'sold' property
    },
    {
      id: "product-26",
      storeId: "store-04",
      name: "Tôi Thấy Hoa Vàng Trên Cỏ Xanh",
      description: "Sách Tôi Thấy Hoa Vàng Trên Cỏ Xanh - Nguyễn Nhật Ánh.",
      price: 75000,
      category: "Sách",
      stock: 75,
      imageUrl:
        "https://down-vn.img.susercontent.com/file/sg-11134201-7rbmn-lmjp510cphsbe0.webp",
      sold: 38, // Added 'sold' property
    },
    {
      id: "product-27",
      storeId: "store-05",
      name: "Thịt Heo Ba Chỉ",
      description: "Thịt heo ba chỉ tươi ngon, 500g.",
      price: 85000,
      category: "Thực phẩm",
      stock: 95,
      imageUrl:
        "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lshwhvh43dtw00@resize_w450_nl.webp",
      sold: 55, // Added 'sold' property
    },
    {
      id: "product-28",
      storeId: "store-06",
      name: "Tủ Quần Áo Gỗ",
      description: "Tủ quần áo gỗ công nghiệp, 3 cánh.",
      price: 6200000,
      category: "Nội thất",
      stock: 5,
      imageUrl:
        "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m1f8mqy2jgbca5@resize_w450_nl.webp",
      sold: 1, // Added 'sold' property
    },
    {
      id: "product-29",
      storeId: "store-07",
      name: "Ô Tô Đồ Chơi",
      description: "Ô tô đồ chơi điều khiển từ xa.",
      price: 450000,
      category: "Đồ chơi",
      stock: 60,
      imageUrl:
        "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lqgnkvi6ukoned@resize_w450_nl.webp",
      sold: 32, // Added 'sold' property
    },
    {
      id: "product-30",
      storeId: "store-08",
      name: "Ốp Lưng Điện Thoại",
      description: "Ốp lưng điện thoại iPhone, nhiều mẫu mã.",
      price: 80000,
      category: "Điện thoại",
      stock: 100,
      imageUrl:
        "https://down-vn.img.susercontent.com/file/sg-11134201-7rd5z-lwzf00e5mc4p56@resize_w450_nl.webp",
      sold: 60, // Added 'sold' property
    },
    {
      id: "product-31",
      storeId: "store-09",
      name: "Nước Hoa",
      description: "Nước hoa Chanel, hương thơm quyến rũ.",
      price: 1800000,
      category: "Mỹ phẩm",
      stock: 45,
      imageUrl:
        "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lzpvpxz7411pd8@resize_w450_nl.webp",
      sold: 25, // Added 'sold' property
    },
    {
      id: "product-32",
      storeId: "store-10",
      name: "Dép Sandal",
      description: "Dép sandal nữ, kiểu dáng thời trang.",
      price: 250000,
      category: "Giày dép",
      stock: 55,
      imageUrl:
        "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-libc04oprlzg39@resize_w450_nl.webp",
      sold: 30, // Added 'sold' property
    },
    {
      id: "product-33",
      storeId: "store-11",
      name: "Sổ Tay",
      description: "Sổ tay bìa da, gáy còng.",
      price: 35000,
      category: "Văn phòng phẩm",
      stock: 180,
      imageUrl:
        "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m0fh82yuy1gt76@resize_w450_nl.webp",
      sold: 100, // Added 'sold' property
    },
    {
      id: "product-34",
      storeId: "store-01",
      name: "Áo Khoác Nam",
      description: "Áo khoác nam ấm áp cho mùa đông.",
      price: 550000,
      category: "Thời trang nam",
      stock: 30,
      imageUrl:
        "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lmttsfaxyztrad@resize_w450_nl.webp",
      sold: 16, // Added 'sold' property
    },
    {
      id: "product-35",
      storeId: "store-02",
      name: "Kính Mát Nữ",
      description: "Kính mát nữ thời trang.",
      price: 380000,
      category: "Phụ kiện nữ",
      stock: 28,
      imageUrl:
        "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m1ry5is3cddr73@resize_w450_nl.webp",
      sold: 14, // Added 'sold' property
    },
    {
      id: "product-36",
      storeId: "store-03",
      name: "Máy Lạnh Panasonic",
      description: "Máy lạnh Panasonic Inverter, 1.5HP.",
      price: 8200000,
      category: "Điện máy",
      stock: 10,
      imageUrl:
        "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m0opeebz98r354@resize_w450_nl.webp",
      sold: 4, // Added 'sold' property
    },
    {
      id: "product-37",
      storeId: "store-04",
      name: "Mắt Biếc",
      description: "Sách Mắt Biếc - Nguyễn Nhật Ánh.",
      price: 70000,
      category: "Sách",
      stock: 85,
      imageUrl:
        "https://down-vn.img.susercontent.com/file/67d0ef3d3fc8897213c9a1f84ee561e1@resize_w450_nl.webp",
      sold: 42, // Added 'sold' property
    },
    {
      id: "product-38",
      storeId: "store-05",
      name: "Rau Xanh",
      description: "Rau xanh các loại, tươi ngon mỗi ngày.",
      price: 25000,
      category: "Thực phẩm",
      stock: 150,
      imageUrl:
        "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m5atl6l08d8j8f@resize_w450_nl.webp",
      sold: 90, // Added 'sold' property
    },
    {
      id: "product-39",
      storeId: "store-06",
      name: "Giường Ngủ",
      description: "Giường ngủ gỗ công nghiệp, thiết kế đơn giản.",
      price: 4800000,
      category: "Nội thất",
      stock: 7,
      imageUrl:
        "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m3r7rcn4h8709e@resize_w450_nl.webp",
      sold: 3, // Added 'sold' property
    },
    {
      id: "product-40",
      storeId: "store-07",
      name: "Đồ Chơi Gỗ",
      description: "Đồ chơi gỗ an toàn cho bé.",
      price: 280000,
      category: "Đồ chơi",
      stock: 55,
      imageUrl:
        "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m1l6ny7nv5q715@resize_w450_nl.webp",
      sold: 33, // Added 'sold' property
    },
    {
      id: "product-41",
      storeId: "store-08",
      name: "Tai Nghe",
      description: "Tai nghe Bluetooth, chất lượng âm thanh tốt.",
      price: 350000,
      category: "Điện thoại",
      stock: 40,
      imageUrl:
        "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m622r7zp9dme60@resize_w450_nl.webp",
      sold: 24, // Added 'sold' property
    },
    {
      id: "product-42",
      storeId: "store-09",
      name: "Sữa Rửa Mặt",
      description: "Sữa rửa mặt dịu nhẹ, làm sạch sâu.",
      price: 180000,
      category: "Mỹ phẩm",
      stock: 80,
      imageUrl:
        "https://down-vn.img.susercontent.com/file/vn-11134201-7ras8-m5onhwyrwc8z9c@resize_w450_nl.webp",
      sold: 48, // Added 'sold' property
    },
    {
      id: "product-43",
      storeId: "store-10",
      name: "Giày Thể Thao",
      description: "Giày thể thao nam nữ, phong cách trẻ trung.",
      price: 950000,
      category: "Giày dép",
      stock: 40,
      imageUrl:
        "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m4zuedprkncma5@resize_w450_nl.webp",
      sold: 20, // Added 'sold' property
    },
    {
      id: "product-44",
      storeId: "store-11",
      name: "Bìa Hồ Sơ",
      description: "Bìa hồ sơ cứng, nhiều màu sắc.",
      price: 8000,
      category: "Văn phòng phẩm",
      stock: 250,
      imageUrl:
        "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lw6pxcyoe8d7d0@resize_w450_nl.webp",
      sold: 150, // Added 'sold' property
    },
    {
      id: "product-45",
      storeId: "store-01",
      name: "Áo Vest Nam",
      description: "Áo vest nam lịch lãm, phong cách công sở.",
      price: 750000,
      category: "Thời trang nam",
      stock: 25,
      imageUrl:
        "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m60m1vuy4k5fa8@resize_w450_nl.webp",
      sold: 13, // Added 'sold' property
    },
    {
      id: "product-46",
      storeId: "store-02",
      name: "Túi Xách Nữ",
      description: "Túi xách nữ da thật, nhiều kiểu dáng.",
      price: 1200000,
      category: "Phụ kiện nữ",
      stock: 15,
      imageUrl:
        "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lrchaqqwv1cp06@resize_w450_nl.webp",
      sold: 7, // Added 'sold' property
    },
    {
      id: "product-47",
      storeId: "store-03",
      name: "Bàn Ủi",
      description: "Bàn ủi hơi nước, chức năng ủi khô và ủi hơi.",
      price: 480000,
      category: "Điện máy",
      stock: 30,
      imageUrl:
        "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-loxhzltrznfff5@resize_w450_nl.webp",
      sold: 18, // Added 'sold' property
    },
    {
      id: "product-48",
      storeId: "store-04",
      name: "Hoàng Tử Bé",
      description: "Sách Hoàng Tử Bé - Antoine de Saint-Exupéry.",
      price: 90000,
      category: "Sách",
      stock: 65,
      imageUrl:
        "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m3r6ha8tcdd43f@resize_w450_nl.webp",
      sold: 32, // Added 'sold' property
    },
    {
      id: "product-49",
      storeId: "store-05",
      name: "Rau Cải Xanh",
      description: "Rau cải xanh tươi, đảm bảo chất lượng.",
      price: 20000,
      category: "Thực phẩm",
      stock: 180,
      imageUrl:
        "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lgzzltuabub6d9@resize_w450_nl.webp",
      sold: 110, // Added 'sold' property
    },
    {
      id: "product-50",
      storeId: "store-06",
      name: "Đèn Trang Trí",
      description: "Đèn trang trí phòng khách, kiểu dáng độc đáo.",
      price: 700000,
      category: "Nội thất",
      stock: 12,
      imageUrl:
        "https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m1ha9lpj6a8jc1@resize_w450_nl.webp",
      sold: 6, // Added 'sold' property
    }
  ],
  vouchers: [
    {
      id: "voucher-01",
      code: "FASHION50",
      discountPercentage: 50,
      quantity: 100,
      validFrom: "2025-02-08T10:00:00",
      validTo: "2025-02-08T12:00:00",
      description: "Giảm 50% cho các sản phẩm thời trang trong khung giờ vàng.",
      type: "category",
      category: "Thời trang",
      productIds: null,
    },
    {
      id: "voucher-02",
      code: "AOSOMI20",
      discountPercentage: 20,
      quantity: 50,
      validFrom: "2025-02-09T14:00:00",
      validTo: "2025-02-09T16:00:00",
      description: "Giảm 20% cho áo sơ mi trắng.",
      type: "product",
      category: null,
      productIds: ["product-01"],
    },
    // Thêm voucher khác nếu cần
  ],
  orders: [
    {
      id: "order-01",
      userId: "user-01",
      storeId: "store-01",
      products: [
        {
          productId: "product-01",
          quantity: 2,
          price: 350000,
          originalPrice: 350000,
          finalPrice: 315000, // Đã giảm 10%
          voucher: {
            code: "SALE15",
            discountPercent: 10, // Giảm giá 10% cho sản phẩm này
            platformCommissionPercent: 5, // Hoa hồng nền tảng 5%
          },
          platformCommission: 35000, // 5% của (2 * 350,000)
        },
        {
          productId: "product-02",
          quantity: 1,
          price: 500000,
          originalPrice: 500000,
          finalPrice: 500000, // Không giảm giá
          voucher: null, // Không áp dụng voucher
          platformCommission: 25000, // Hoa hồng nền tảng 5%
        },
        // Thêm các sản phẩm khác trong đơn hàng nếu cần
      ],
      totalPlatformCommission: 60000, // Tổng hoa hồng nền tảng cho đơn hàng
      status: "confirmed", // Trạng thái đơn hàng đã được cửa hàng xác nhận
      createdAt: "2025-02-05T10:00:00Z",
      // Các thông tin khác của đơn hàng
    },
    // Thêm các đơn hàng khác nếu cần
  ],

  categories: [
    {
      id: "category-01",
      name: "Thời trang nam",
      imageUrl:
        "https://down-vn.img.susercontent.com/file/687f3967b7c2fe6a134a2c11894eea4b@resize_w320_nl.webp",
    },
    {
      id: "category-02",
      name: "Thời trang nữ",
      imageUrl:
        "https://down-vn.img.susercontent.com/file/75ea42f9eca124e9cb3cde744c060e4d@resize_w320_nl.webp",
    },
    {
      id: "category-03",
      name: "Phụ kiện",
      imageUrl:
        "https://down-vn.img.susercontent.com/file/8e71245b9659ea72c1b4e737be5cf42e@resize_w320_nl.webp",
    },
    // Thêm danh mục khác nếu cần
    {
      id: "category-04",
      name: "Điện máy",
      imageUrl:
        "https://down-vn.img.susercontent.com/file/7abfbfee3c4844652b4a8245e473d857@resize_w320_nl.webp",
    },
    {
      id: "category-05",
      name: "Sách",
      imageUrl:
        "https://down-vn.img.susercontent.com/file/36013311815c55d303b0e6c62d6a8139@resize_w320_nl.webp",
    },
    {
      id: "category-06",
      name: "Thực phẩm",
      imageUrl:
        "https://png.pngtree.com/element_our/png/20180930/food-icon-design-vector-png_120564.jpg",
    },
    {
      id: "category-07",
      name: "Nội thất",
      imageUrl: "https://cdn-icons-png.flaticon.com/512/148/148188.png",
    },
    {
      id: "category-08",
      name: "Đồ chơi",
      imageUrl:
        "https://down-vn.img.susercontent.com/file/ce8f8abc726cafff671d0e5311caa684@resize_w320_nl.webp",
    },
    {
      id: "category-09",
      name: "Điện thoại",
      imageUrl:
        "https://down-vn.img.susercontent.com/file/31234a27876fb89cd522d7e3db1ba5ca@resize_w320_nl.webp",
    },
    {
      id: "category-10",
      name: "Mỹ phẩm",
      imageUrl:
        "https://down-vn.img.susercontent.com/file/ef1f336ecc6f97b790d5aae9916dcb72@resize_w320_nl.webp",
    },
    {
      id: "category-11",
      name: "Giày dép",
      imageUrl:
        "https://down-vn.img.susercontent.com/file/74ca517e1fa74dc4d974e5d03c3139de@resize_w320_nl.webp",
    },
    {
      id: "category-12",
      name: "Văn phòng phẩm",
      imageUrl:
        "https://down-vn.img.susercontent.com/file/36013311815c55d303b0e6c62d6a8139@resize_w320_nl.webp",
    },
  ],
  reviews: [
    {
      id: "review-01",
      productId: "product-01",
      userId: "user-02",
      rating: 4,
      comment: "Áo đẹp, chất liệu tốt nhưng giao hàng hơi chậm.",
      reviewDate: "2025-02-07T09:30:00",
    },
    // Thêm đánh giá khác nếu cần
  ],
  cart: [
    {
      userId: "user-01",
      items: [
        {
          productId: "product-02",
          quantity: 1,
        },
      ],
    },
    // Thêm giỏ hàng khác nếu cần
  ],
};

export default mockData;
