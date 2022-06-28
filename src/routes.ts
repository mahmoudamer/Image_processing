import { Express } from "express-serve-static-core";
import imageRoutes from "./routes/image";
export default (app: Express) => {
  app.use("/api/images", imageRoutes);
};
