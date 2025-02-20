import React, { useEffect, useState, useContext } from "react";
import "./Dashboard.css";
import { useNavigate, Routes, Route } from "react-router-dom";
import mockData from "../../../../apis/mock-data"; // Import mockData
import { FiTrendingUp, FiTrendingDown } from "react-icons/fi";
import { UserContext } from "../../../../ultils/userContext";
import OrderChart from "./orderChart/OrderChart";
import UserChart from "./userChart/UserChart";
// import Payment from "./Payment"; // Keep Payment import if you are using it

import totalOrderIcon from "../../../../assets/images/totalOrderIcon.png";
import customerIcon from "../../../../assets/images/customerIcon.png";
import revenueIcon from "../../../../assets/images/revenueIcon.png";
import productIcon from "../../../../assets/images/productIcon.png";

import starIcon from "../../../../assets/images/starIcon.png";
import moneyBook from "../../../../assets/images/moneyBook.png";

const Dashboard = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const [currentMonthYear, setCurrentMonthYear] = useState("");
  const monthNamesVietnamese = [
    "Tháng Một",
    "Tháng Hai",
    "Tháng Ba",
    "Tháng Tư",
    "Tháng Năm",
    "Tháng Sáu",
    "Tháng Bảy",
    "Tháng Tám",
    "Tháng Chín",
    "Tháng Mười",
    "Tháng Mười Một",
    "Tháng Mười Hai",
  ];

  // Lấy dữ liệu từ mockData
  const [orders, setOrders] = useState(mockData.orders);
  const [products, setProducts] = useState(mockData.products);
  const [users, setUsers] = useState(mockData.users);
  const [storePlatformDebt, setStorePlatformDebt] = useState(0);
  const loggedInUser = JSON.parse(localStorage.getItem("user"));
  const storeId = mockData.users.find(
    (u) => u.email === loggedInUser.email
  )?.storeId;

  // State cho các chỉ số dashboard
  const [totalOrders, setTotalOrders] = useState(0);
  const [orderPercentageChange, setOrderPercentageChange] = useState(0);
  const [isOrderChangePositive, setIsOrderChangePositive] = useState(true);

  const [newCustomers, setNewCustomers] = useState(0); // Using total customers count
  const [customerPercentageChange, setCustomerPercentageChange] = useState(0);
  const [isCustomerChangePositive, setIsCustomerChangePositive] =
    useState(true);

  const [totalRevenue, setTotalRevenue] = useState(0);
  const [revenuePercentageChange, setRevenuePercentageChange] = useState(0);
  const [isRevenueChangePositive, setIsRevenueChangePositive] = useState(true);

  const [topRatedProducts, setTopRatedProducts] = useState([]);
  const [topSellingProducts, setTopSellingProducts] = useState([]);

  const [monthlyOrdersData, setMonthlyOrdersData] = useState([]);
  const [monthlyRevenueData, setMonthlyRevenueData] = useState([]); // Changed to monthlyRevenueData

  useEffect(() => {
    if (!user || user.role !== "shop") {
      navigate("/signin");
    }

    const now = new Date();
    const monthIndex = now.getMonth();
    const year = now.getFullYear();
    setCurrentMonthYear(`${monthNamesVietnamese[monthIndex]} ${year}`);

    // Fetch platform debt from mockData
    if (storeId) {
      const currentStore = mockData.stores.find((s) => s.id === storeId);
      if (currentStore) {
        setStorePlatformDebt(currentStore.platformDebt);
      }
      // Calculate dashboard metrics AFTER storeId is available
      calculateDashboardMetrics(storeId);
    }
  }, [user, navigate, storeId]);

  const calculateDashboardMetrics = (currentStoreId) => {
    // Receive storeId as argument
    if (!currentStoreId) return;

    const now = new Date();
    const currentMonth = now.getMonth();
    const currentYear = now.getFullYear();

    // **1. Đơn hàng (Total Orders):**
    const currentMonthOrders = orders.filter((order) => {
      const orderDate = new Date(order.createdAt);
      return (
        orderDate.getMonth() === currentMonth &&
        orderDate.getFullYear() === currentYear &&
        order.storeId === currentStoreId
      ); // Filter by storeId
    });
    setTotalOrders(currentMonthOrders.length);

    // Tính phần trăm thay đổi đơn hàng so với tháng trước
    const lastMonthOrdersCount = orders.filter((order) => {
      const orderDate = new Date(order.createdAt);
      return (
        orderDate.getMonth() === currentMonth - 1 &&
        orderDate.getFullYear() === currentYear &&
        order.storeId === currentStoreId
      ); // Filter by storeId
    }).length;
    const orderChangePercent = calculatePercentageChange(
      lastMonthOrdersCount,
      currentMonthOrders.length
    );
    setOrderPercentageChange(orderChangePercent);
    setIsOrderChangePositive(orderChangePercent >= 0);

    // **2. Khách hàng (Customers):** // Using total customers count -  No store filter needed as customers are platform-wide
    const currentMonthCustomers = users.filter(
      (user) => user.role === "customer"
    ); // Count all customer users
    setNewCustomers(currentMonthCustomers.length);

    // Tính phần trăm thay đổi khách hàng (ví dụ đơn giản)
    const lastMonthCustomersCount = 0;
    const customerChangePercent = calculatePercentageChange(
      lastMonthCustomersCount,
      currentMonthCustomers.length
    );
    setCustomerPercentageChange(customerChangePercent);
    setIsCustomerChangePositive(customerChangePercent >= 0);

    // **3. Tổng doanh thu (Total Revenue):**
    const currentMonthRevenue = currentMonthOrders.reduce(
      (sum, order) => sum + order.orderValue,
      0
    );
    setTotalRevenue(currentMonthRevenue);

    // Tính phần trăm thay đổi doanh thu
    const lastMonthRevenue = orders
      .filter((order) => {
        const orderDate = new Date(order.createdAt);
        return (
          orderDate.getMonth() === currentMonth - 1 &&
          orderDate.getFullYear() === currentYear &&
          order.storeId === currentStoreId
        ); // Filter by storeId
      })
      .reduce((sum, order) => sum + order.orderValue, 0);
    const revenueChangePercent = calculatePercentageChange(
      lastMonthRevenue,
      currentMonthRevenue
    );
    setRevenuePercentageChange(revenuePercentageChange);
    setIsRevenueChangePositive(revenueChangePercent >= 0);

    // **4. Sản phẩm được đánh giá cao nhất (Top Rated Products):**
    const storeProducts = products.filter(
      (product) => product.storeId === currentStoreId
    ); // Filter products by storeId
    const sortedProductsByRating = [...storeProducts].sort(
      (a, b) => (b.rating || 0) - (a.rating || 0)
    );
    setTopRatedProducts(sortedProductsByRating.slice(0, 1));

    // **5. Sản phẩm bán chạy nhất (Top Selling Products):**
    const sortedProductsBySold = [...storeProducts].sort(
      (a, b) => b.sold - a.sold
    ); // Filtered storeProducts already used
    setTopSellingProducts(sortedProductsBySold.slice(0, 5));

    // **6. Dữ liệu Chart (Monthly Orders & Revenue):** // Updated Chart Data
    const monthlyOrderCounts = calculateMonthlyOrderCounts(currentStoreId);
    setMonthlyOrdersData(monthlyOrderCounts);
    const monthlyRevenueData = calculateMonthlyRevenueCounts(currentStoreId); // Call revenue function
    setMonthlyRevenueData(monthlyRevenueData); // Set monthlyRevenueData state
  };

  const calculatePercentageChange = (previousValue, currentValue) => {
    if (previousValue === 0) {
      return currentValue > 0 ? 100 : 0;
    }
    return ((currentValue - previousValue) / previousValue) * 100;
  };

  const calculateMonthlyOrderCounts = (currentStoreId) => {
    const monthlyData = [];
    for (let i = 0; i < 12; i++) {
      const month = new Date().getMonth() - i;
      const year = new Date().getFullYear() - (month < 0 ? 1 : 0);
      const monthIndex = (month + 12) % 12;

      const monthOrders = orders.filter((order) => {
        const orderDate = new Date(order.createdAt);
        return (
          orderDate.getMonth() === monthIndex &&
          orderDate.getFullYear() === year &&
          order.storeId === currentStoreId
        ); // Filter by storeId
      });
      monthlyData.unshift({
        month: monthNamesVietnamese[monthIndex],
        orders: monthOrders.length,
        value: monthOrders.length, // Value for chart
      });
    }
    return monthlyData;
  };

  const calculateMonthlyRevenueCounts = (currentStoreId) => { // calculateMonthlyRevenueCounts function
    const monthlyData = [];
    for (let i = 0; i < 12; i++) {
      const month = new Date().getMonth() - i;
      const year = new Date().getFullYear() - (month < 0 ? 1 : 0);
      const monthIndex = (month + 12) % 12;

      const monthOrders = orders.filter((order) => {
        const orderDate = new Date(order.createdAt);
        return (
          orderDate.getMonth() === monthIndex &&
          orderDate.getFullYear() === year &&
          order.storeId === currentStoreId
        ); // Filter by storeId
      });
      const monthlyRevenue = monthOrders.reduce(
        (sum, order) => sum + order.orderValue,
        0
      );
      monthlyData.unshift({
        month: monthNamesVietnamese[monthIndex],
        revenue: monthlyRevenue, // Revenue data
        value: monthlyRevenue, // Value for chart
      });
    }
    return monthlyData;
  };

  return (
    <div className="dashboard">
      <Routes>
        {/* <Route path="payment" element={<Payment />} /> */}
        <Route
          path="/"
          element={
            <>
              <div className="top-metrics">
                <div className="metric">
                  <img
                    src={totalOrderIcon}
                    alt="Total Orders"
                    className="metric-icon"
                  />
                  <div className="metric-info">
                    <div className="metric-title">
                      Tổng đơn hàng {currentMonthYear}
                    </div>
                    <div className="metric-value">{totalOrders} đơn</div>
                    <div
                      className={`metric-change ${
                        isOrderChangePositive
                          ? "positive-change"
                          : "negative-change"
                      }`}
                    >
                      {isOrderChangePositive ? (
                        <FiTrendingUp />
                      ) : (
                        <FiTrendingDown />
                      )}{" "}
                      {orderPercentageChange.toFixed(2)}% so với tháng trước
                    </div>
                  </div>
                  <div className="metric-view">
                    <button
                      className="view-btn pay-now-btn"
                      onClick={() => navigate("dashboardorder")}
                    >
                      Xem chi tiết
                    </button>
                  </div>
                </div>

                <div className="metric">
                  <img
                    src={customerIcon}
                    alt="Customers"
                    className="metric-icon"
                  />
                  <div className="metric-info">
                    <div className="metric-title">
                      Khách hàng {currentMonthYear}
                    </div>
                    <div className="metric-value">
                      {newCustomers} khách hàng
                    </div>
                    <div
                      className={`metric-change ${
                        isCustomerChangePositive
                          ? "positive-change"
                          : "negative-change"
                      }`}
                    >
                      {isCustomerChangePositive ? (
                        <FiTrendingUp />
                      ) : (
                        <FiTrendingDown />
                      )}{" "}
                      {customerPercentageChange.toFixed(2)}% so với tháng trước
                    </div>
                  </div>
                  <div className="metric-view">
                    <button
                      className="view-btn pay-now-btn"
                      onClick={() => navigate("dashboardborrower")}
                    >
                      Xem chi tiết
                    </button>
                  </div>
                </div>

                <div className="metric">
                  <img
                    src={revenueIcon}
                    alt="Total Revenue"
                    className="metric-icon"
                  />
                  <div className="metric-info">
                    <div className="metric-title">
                      Tổng doanh thu {currentMonthYear}
                    </div>
                    <div className="metric-value">
                      {Intl.NumberFormat().format(totalRevenue.toFixed(0))} VND
                    </div>
                    <div
                      className={`metric-change ${
                        isRevenueChangePositive
                          ? "positive-change"
                          : "negative-change"
                      }`}
                    >
                      {isRevenueChangePositive ? (
                        <FiTrendingUp />
                      ) : (
                        <FiTrendingDown />
                      )}{" "}
                      {revenuePercentageChange.toFixed(2)}% so với tháng trước
                    </div>
                  </div>
                  <div className="metric-view ">
                    <button
                      className="view-btn pay-now-btn"
                      onClick={() => navigate("moneydashboard")}
                    >
                      Xem chi tiết
                    </button>
                  </div>
                </div>
              </div>

              <div className="bottom-metrics">
                <div className="metric">
                  <div className="metric-info">
                    <div className="metric-title">
                      Sản phẩm được đánh giá cao nhất {currentMonthYear}
                      <img
                        src={starIcon}
                        alt="Star Icon"
                        className="metric-icon starIcon"
                      />
                    </div>
                    {topRatedProducts.length > 0 ? (
                      topRatedProducts.map((product) => (
                        <div
                          key={product.id}
                          className="most-voted-book-details"
                        >
                          <div className="book-image-container">
                            <img
                              src={product.imageUrl}
                              alt={product.name}
                              className="book-image"
                            />
                            <div className="book-voted">
                              {product.rating}
                              <img
                                src={starIcon}
                                alt="Star Icon"
                                className="star-icon"
                              />
                            </div>
                          </div>
                          <div className="book-details">
                            <div className="book-name">{product.name}</div>
                            <div className="book-publisher">
                              Danh mục: {product.category}
                            </div>
                            <div className="book-category">
                              Giá: {Intl.NumberFormat().format(product.price)}{" "}
                              VND
                            </div>
                          </div>
                          {/* No Edit Button for Top Rated Products in Shop Dashboard */}
                        </div>
                      ))
                    ) : (
                      <p>Không có sản phẩm nào được đánh giá.</p>
                    )}
                  </div>
                </div>
                <div className="metric">
                  <div className="metric-info">
                    <div className="metric-title">
                      Sản phẩm được đánh giá cao nhất {currentMonthYear}
                      <img
                        src={starIcon}
                        alt="Star Icon"
                        className="metric-icon starIcon"
                      />
                    </div>
                    {topRatedProducts.length > 0 ? (
                      topRatedProducts.map((product) => (
                        <div
                          key={product.id}
                          className="most-voted-book-details"
                        >
                          <div className="book-image-container">
                            <img
                              src={product.imageUrl}
                              alt={product.name}
                              className="book-image"
                            />
                            <div className="book-voted">
                              {product.rating}
                              <img
                                src={starIcon}
                                alt="Star Icon"
                                className="star-icon"
                              />
                            </div>
                          </div>
                          <div className="book-details">
                            <div className="book-name">{product.name}</div>
                            <div className="book-publisher">
                              Danh mục: {product.category}
                            </div>
                            <div className="book-category">
                              Giá: {Intl.NumberFormat().format(product.price)}{" "}
                              VND
                            </div>
                          </div>
                          {/* No Edit Button for Top Rated Products in Shop Dashboard */}
                        </div>
                      ))
                    ) : (
                      <p>Không có sản phẩm nào được đánh giá.</p>
                    )}
                  </div>
                </div>
                <div className="metric">
                  <img
                    src={moneyBook}
                    alt="platform fee icon"
                    className="metric-icon"
                  />
                  <div className="metric-info">
                    <div className="metric-title">Thanh toán phí nền tảng</div>
                    <div className="metric-value">
                      {Intl.NumberFormat().format(storePlatformDebt)} VND
                    </div>
                    {storePlatformDebt > 0 && (
                      <div className="metric-change">
                        <button
                          className="view-btn pay-now-btn"
                          onClick={() => navigate("payment")}
                        >
                          Thanh toán ngay
                        </button>
                      </div>
                    )}
                    {storePlatformDebt <= 0 && (
                      <div className="metric-change positive-change">
                        Đã thanh toán
                      </div>
                    )}
                  </div>
                  {/* No "Xem" button for payment metric */}
                </div>
              </div>

              <div className="products-and-customers">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    flex: 2,
                    gap: "20px",
                  }}
                >
                  <div className="chart-container">
                    <OrderChart className="chart" data={monthlyOrdersData} /> {/* Order chart now displays monthlyOrdersData */}
                  </div>
                  <div className="new-chart-container">
                    <UserChart className="chart" data={monthlyRevenueData} /> {/* User chart now displays monthlyRevenueData */}
                  </div>
                </div>
                <div className="top-selling-products">
                  <div className="metric-info">
                    <div className="metric-title">
                      Sản phẩm bán chạy nhất {currentMonthYear}
                      <img
                        src={productIcon}
                        alt="Product Icon"
                        className="metric-icon starIcon"
                      />
                    </div>
                    <table className="top-products-table">
                      <thead>
                        <tr>
                          <th>ID sản phẩm</th>
                          <th>Tên sản phẩm</th>
                          <th>Ảnh</th>
                          <th>Đã bán</th>
                        </tr>
                      </thead>
                      <tbody>
                        {topSellingProducts.map((product) => (
                          <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>
                              <img
                                className="book-top5-image"
                                src={product.imageUrl}
                                alt={product.name}
                              />
                            </td>
                            <td>{product.sold}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </>
          }
        />
      </Routes>
    </div>
  );
};

export default Dashboard;