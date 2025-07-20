const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

let quotes = [
  "The best way to predict the future is to invent it.",
  "Life is 10% what happens to us and 90% how we react to it.",
  "The only limit to our realization of tomorrow is our doubts of today.",
  "Do not wait to strike till the iron is hot; but make it hot by striking."
];

//GET all quotes
app.get("/api/quotes", (req, res) => {
  res.json({ quotes });
});

//GET a random quote
app.get("/api/quotes/random", (req, res) => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  res.json({ quote: quotes[randomIndex] });
});

//POST a new item to in-memory list
app.post("/api/quotes", (req, res) => {
  const { quote } = req.body;

  if (!quote || typeof quote !== "string") {
    return res.status(400).json({ error: "Missing or invalid 'name' field." });
  }
  quotes.push(quote);

  res.status(201).json({
    message: "Item added successfully.",
    quote: quote
  });
});

//GET all posted items
app.get("/api/quotes", (req, res) => {
  res.json({ items: data });
});

//404 handler
app.use((req, res) => {
  res.status(404).json({ error: "Endpoint not found." });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});