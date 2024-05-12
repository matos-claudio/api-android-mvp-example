import express from "express";
import exampleRoutes from "./routes/example/example-routes";
import authRoutes from "./routes/auth/auth-routes";
import studentRoutes from "./routes/student/student-routes";

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/ping", exampleRoutes);
app.use("/auth", authRoutes);
app.use("/student", studentRoutes);

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on port ${PORT}`);
});
