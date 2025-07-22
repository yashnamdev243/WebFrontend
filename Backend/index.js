import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";
import helmet from "helmet";
import { connectToDB } from "./src/config/db.js";
import config from "./src/config/config.json" assert { type: "json" };
import fs from "fs/promises"; // Use fs/promises for ES module support
import adminRouter from "./src/routes/admin.route.js";
import moment from "moment-timezone";
import countries from "i18n-iso-countries";
import { getCountryCallingCode } from "libphonenumber-js";
const app = express();

// Enable CORS
app.use(cors());
app.use(express.json({ limit: "100mb" }));
app.use(express.urlencoded({ limit: "100mb", extended: true }));
app.use(
  helmet({
    crossOriginResourcePolicy: false,
    crossOriginEmbedderPolicy: false,
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        frameAncestors: ["*"],
      },
    },
  })
);

// Resolve __dirname using fileURLToPath
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pdfsFolder = path.resolve(__dirname, "pdfs");

app.use("/pdfs", express.static(pdfsFolder));

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/admin", adminRouter);

// Helper function to get base64 encoded image
const getBase64Image = async (filePath) => {
  try {
    const image = await fs.readFile(filePath);
    return `data:image/png;base64,${image.toString("base64")}`;
  } catch (error) {
    console.error("Error reading image file:", error);
    throw error;
  }
};

// Example route to check uploaded file
app.get("/images/:filename", (req, res) => {
  const { filename } = req.params;
  const filePath = path.join(__dirname, "src/public/images", filename);
  res.sendFile(filePath);
});

app.get("/documents/:filename", (req, res) => {
  const { filename } = req.params;
  const filePath = path.join(__dirname, "src/public/documents", filename);
  res.sendFile(filePath);
});

app.get("/api/countrycodes", (req, res) => {
  const countryList = countries.getNames("en"); // Get country names in English

  const countriesWithCodes = Object.keys(countryList).map((code) => {
    let callingCode = null;

    try {
      // Attempt to get the calling code
      callingCode = getCountryCallingCode(code);
    } catch (error) {
      // Handle countries that might not have calling codes (e.g., Antarctica)
      callingCode = "N/A"; // or you could set it to a default value
    }

    return {
      code: "+" + callingCode,
      name: countryList[code],
      isoCode: code, // ISO country code
    };
  });

  res.json({
    success: true,
    countries: countriesWithCodes,
  });
});

app.get("/api/timezones", (req, res) => {
  const timezones = moment.tz.names().map((tz) => {
    const offset = moment().tz(tz).utcOffset() / 60;
    const offsetFormatted = offset >= 0 ? `+${offset}` : offset;
    return { name: tz, utcOffset: `UTC${offsetFormatted}` };
  });
  res.json({
    success: true,
    timezones,
  });
});

const PORT = config.development.PORT || 4000;
app.listen(PORT, "0.0.0.0", async () => {
  try {
    await connectToDB();
    console.log(`Server is running on ${PORT}`);
  } catch (e) {
    console.log("Error in database connection", e);
  }
});

// Route to get all timezones

export { getBase64Image };
