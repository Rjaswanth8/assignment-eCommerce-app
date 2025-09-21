import React, { useEffect, useState } from "react";
import {
  FiPlus,
  FiFilter,
  FiMoreHorizontal,
  FiCalendar,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import { BiSortAlt2 } from "react-icons/bi";
import "./Orders.css";

const Orders = ({ darkMode }) => {
  const [orders, setOrders] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(5); // fixed 5 pages for demo
  const [sortAsc, setSortAsc] = useState(true);
  const [showFilter, setShowFilter] = useState(false);
  const [filterStatus, setFilterStatus] = useState("");
  const [filterDate, setFilterDate] = useState("");

  const limit = 5; // items per page

  useEffect(() => {
    fetch(
      `https://dummyjson.com/products?limit=${limit}&skip=${(page - 1) * limit}`
    )
      .then((res) => res.json())
      .then((data) => {
        const mapped = data.products.map((item, index) => ({
          id: `#CM${9801 + (page - 1) * limit + index}`,
          user: [
            "Natali Craig",
            "Kate Morrison",
            "Drew Cano",
            "Orlando Diggs",
            "Andi Lane",
          ][index % 5],
          avatar: `https://i.pravatar.cc/150?img=${(index + page) * 3}`,
          project: item.title,
          address: item.brand,
          date: [
            "Just now",
            "A minute ago",
            "1 hour ago",
            "Yesterday",
            "Feb 2, 2023",
          ][index % 5],
          status: [
            "In Progress",
            "Complete",
            "Pending",
            "Approved",
            "Rejected",
          ][index % 5],
        }));
        setOrders(mapped);
      });
  }, [page]);

  const handleSearch = (e) => setSearch(e.target.value);

  // ✅ Sorting logic
  const handleSort = () => {
    const sorted = [...orders].sort((a, b) => {
      if (a.user < b.user) return sortAsc ? -1 : 1;
      if (a.user > b.user) return sortAsc ? 1 : -1;
      return 0;
    });
    setOrders(sorted);
    setSortAsc(!sortAsc);
  };

  // ✅ Filtering logic
  const filteredOrders = orders
    .filter(
      (o) =>
        o.user.toLowerCase().includes(search.toLowerCase()) ||
        o.project.toLowerCase().includes(search.toLowerCase()) ||
        o.id.toLowerCase().includes(search.toLowerCase())
    )
    .filter((o) => (filterStatus ? o.status === filterStatus : true))
    .filter((o) => (filterDate ? o.date === filterDate : true));

  return (
    <div className={`order ${darkMode ? "dark" : "light"}`}>
      <div className="orders-main">
        <h2 className="orders-title">Order List</h2>
        <div className="orders-controls">
          <div className="controls-left">
            <button>
              <FiPlus />
            </button>
            <button onClick={() => setShowFilter(!showFilter)}>
              <FiFilter />
            </button>
            <button onClick={handleSort}>
              <BiSortAlt2 />
            </button>
          </div>
          <div className="controls-right">
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={handleSearch}
            />
          </div>
        </div>

        {/* ✅ Filter dropdown */}
        {showFilter && (
          <div className="filter-panel">
            <label>
              Status:
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
              >
                <option value="">All</option>
                <option value="In Progress">In Progress</option>
                <option value="Complete">Complete</option>
                <option value="Pending">Pending</option>
                <option value="Approved">Approved</option>
                <option value="Rejected">Rejected</option>
              </select>
            </label>
            <label>
              Date:
              <select
                value={filterDate}
                onChange={(e) => setFilterDate(e.target.value)}
              >
                <option value="">All</option>
                <option value="Just now">Just now</option>
                <option value="A minute ago">A minute ago</option>
                <option value="1 hour ago">1 hour ago</option>
                <option value="Yesterday">Yesterday</option>
                <option value="Feb 2, 2023">Feb 2, 2023</option>
              </select>
            </label>
          </div>
        )}

        <div className="orders-container">
          <table className="orders-table">
            <thead>
              <tr>
                <th>
                  <input type="checkbox" />
                </th>
                <th>Order ID</th>
                <th>User</th>
                <th>Project</th>
                <th>Address</th>
                <th>Date</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.map((order, idx) => (
                <tr key={idx}>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>{order.id}</td>
                  <td className="user-cell">
                    <img
                      src={order.avatar}
                      alt={order.user}
                      className="avatar"
                    />
                    {order.user}
                  </td>
                  <td>{order.project}</td>
                  <td>{order.address}</td>
                  <td className="date-cell">
                    <span className="calendar-icon">
                      <FiCalendar />
                    </span>
                    {order.date}
                  </td>
                  <td>
                    <span
                      className={`status ${order.status
                        .replace(" ", "")
                        .toLowerCase()}`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td>
                    <FiMoreHorizontal />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="pagination">
            <button
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
              className="page-btn"
            >
              <FiChevronLeft />
            </button>

            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                className={`page-btn ${page === i + 1 ? "active" : ""}`}
                onClick={() => setPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}

            <button
              disabled={page === totalPages}
              onClick={() => setPage(page + 1)}
              className="page-btn"
            >
              <FiChevronRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
