const router = require("express").Router();

const pieChart = [
  { section: "Class 1", value: 400 },
  { section: "Class 2", value: 320 },
  { section: "Class 3", value: 210 },
  { section: "Class 4", value: 120 },
  { section: "Class 5", value: 500 },
];
const barChart = [
  { x: "Mon", y: 80 },
  { x: "Tue", y: 40 },
  { x: "Wed", y: 30 },
  { x: "Thu", y: 65 },
  { x: "Fri", y: 29 },
  { x: "Sat", y: 44 },
  { x: "Sun", y: 15 },
];
const lineChart = [
  { label: "Category A", value: 500 },
  { section: "Class 1", value: 400 },
  { section: "Class 2", value: 320 },
  { section: "Class 3", value: 210 },
  { section: "Class 4", value: 120 },
];

const tableData = [
  {
    no: "1",
    name: "Ajith",
    title: "Developer",
    status: "Active",
    role: "Admin",
  },
  {
    no: "2",
    name: "Manu",
    title: "Developer",
    status: "Active",
    role: "user",
  },
  {
    no: "3",
    name: "Alwin",
    title: "Developer",
    status: "Active",
    role: "user",
  },
  {
    no: "4",
    name: "Ajay",
    title: "Developer",
    status: "Active",
    role: "user",
  },
  {
    no: "5",
    name: "Binoy",
    title: "Developer",
    status: "Active",
    role: "user",
  },
  {
    no: "6",
    name: "Rajeev",
    title: "Developer",
    status: "Active",
    role: "user",
  },
];

router.get("/piechart", (req, res) => {
  res.status(200).json(pieChart);
});
router.get("/barchart", (req, res) => {
  res.status(200).json(barChart);
});
router.get("/table-data", (req, res) => {
  res.status(200).json(tableData);
});

module.exports = router;
