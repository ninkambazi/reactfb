const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const multer = require("multer");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
const router = express.Router();
const path = require("path");

dotenv.config();

mongoose.connect(
  process.env.MONGO_URL||'mongodb://localhost/kickekoplus',
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to MongoDB");
  }
);

//app.use("/images", express.static(path.join(__dirname, "build/images")));
/*
// Serve static files from the React frontend app
//app.use(express.static(path.join(__dirname, '../frontend/build')))

// AFTER defining routes: Anything that doesn't match what's above, send back index.html; (the beginning slash ('/') in the string is important!)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/../client/build/index.html'))
})
*/
/*
if (process.env.NOD_ENV === 'production'){
  app.use(express.static(path.join(__dirname, 'client/build')));
  //app.use(express.static(path.resolve("client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
    //res.sendFile(path.resolve('/client/build/index.html'))
    //res.sendFile(path.resolve('client/build/index.html'))
  });
}
*/

if (process.env.NODE_ENV === 'production') {
  // Exprees will serve up production assets
  app.use(express.static(path.resolve('client/build')));

  // Express serve up index.html file if it doesn't recognize route
  
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    //res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
}
/*
if (process.env.NODE_ENV) {
  app.use(express.static(path.resolve(process.cwd(), 'client/build')))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(process.cwd(), 'client/build/index.html'))
  })
}
*/
//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

const PORT = process.env.PORT||8080;

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  try {
    return res.status(200).json("File uploded successfully");
  } catch (error) {
    console.error(error);
  }
});

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);

app.listen(PORT, () => {
  console.log("Backend server is running!");
});
