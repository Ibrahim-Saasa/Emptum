import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useState } from "react";

// Function to generate random order ID
function generateOrderId() {
  return "ORD-" + Math.random().toString(36).substr(2, 9).toUpperCase();
}

// Function to generate random payment ID
function generatePaymentId() {
  return "PAY-" + Math.random().toString(36).substr(2, 8).toUpperCase();
}

// Function to generate random order date
function generateOrderDate() {
  const start = new Date(2024, 0, 1); // Jan 1, 2024
  const end = new Date(); // Current date
  const randomDate = new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
  return randomDate.toISOString().split("T")[0]; // Format: YYYY-MM-DD
}

// Function to generate order status
function generateOrderStatus() {
  const statuses = [
    "Delivered",
    "In Transit",
    "Processing",
    "Shipped",
    "Pending",
  ];
  return statuses[Math.floor(Math.random() * statuses.length)];
}

function createData(productName, orderTotal) {
  const trackingEvents = [
    "Order Placed",
    "Payment Confirmed",
    "Item Picked from Warehouse",
    "Shipped from Facility",
    "Out for Delivery",
    "Delivered",
  ];

  const generateTrackingInfo = () => {
    const numEvents = Math.floor(Math.random() * 4) + 3; // 3-6 events
    const events = [];
    const baseDate = new Date(generateOrderDate());

    for (let i = 0; i < numEvents; i++) {
      const eventDate = new Date(baseDate);
      eventDate.setDate(baseDate.getDate() + i);

      events.push({
        date: eventDate.toISOString().split("T")[0],
        time: `${Math.floor(Math.random() * 12) + 1}:${Math.floor(
          Math.random() * 60
        )
          .toString()
          .padStart(2, "0")} ${Math.random() > 0.5 ? "AM" : "PM"}`,
        event: trackingEvents[i] || "In Transit",
        location:
          i < 2
            ? "Processing Center"
            : i < 4
            ? `Facility - ${
                ["NY", "CA", "TX", "FL"][Math.floor(Math.random() * 4)]
              }`
            : "Local Delivery Hub",
      });
    }
    return events;
  };

  return {
    orderId: generateOrderId(),
    paymentId: generatePaymentId(),
    productName,
    orderDate: generateOrderDate(),
    orderStatus: generateOrderStatus(),
    orderTotal: orderTotal || (Math.random() * 200 + 20).toFixed(2),
    tracking: generateTrackingInfo(),
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.orderId}
        </TableCell>
        <TableCell align="center">{row.paymentId}</TableCell>
        <TableCell align="center">{row.productName}</TableCell>
        <TableCell align="center">{row.orderDate}</TableCell>
        <TableCell align="center">{row.orderStatus}</TableCell>
        <TableCell align="center">${row.orderTotal}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Order Tracking
              </Typography>
              <Table size="small" aria-label="order tracking">
                <TableHead>
                  <TableRow align="center">
                    <TableCell>Date</TableCell>
                    <TableCell>Time</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Location</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.tracking.map((trackingEvent, index) => (
                    <TableRow key={`${trackingEvent.date}-${index}`}>
                      <TableCell component="th" scope="row">
                        {trackingEvent.date}
                      </TableCell>
                      <TableCell>{trackingEvent.time}</TableCell>
                      <TableCell>{trackingEvent.event}</TableCell>
                      <TableCell>{trackingEvent.location}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    orderId: PropTypes.string.isRequired,
    paymentId: PropTypes.string.isRequired,
    productName: PropTypes.string.isRequired,
    orderDate: PropTypes.string.isRequired,
    orderStatus: PropTypes.string.isRequired,
    orderTotal: PropTypes.string.isRequired,
    tracking: PropTypes.arrayOf(
      PropTypes.shape({
        date: PropTypes.string.isRequired,
        time: PropTypes.string.isRequired,
        event: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

const rows = [
  createData("Victorinox Watch", "159.99"),
  createData("Leather Bag", "89.50"),
  createData("Yoga Mat", "45.99"),
  createData("Microwave Oven", "189.99"),
  createData("Running Shoes", "129.99"),
  createData("Bluetooth Speaker", "79.99"),
  createData("Coffee Maker", "149.99"),
];

export default function CollapsibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell align="center">Order ID</TableCell>
            <TableCell align="center">Payment ID</TableCell>
            <TableCell align="center">Product</TableCell>
            <TableCell align="center">Order Date</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="center">Total Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <Row key={`${row.orderId}-${index}`} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
