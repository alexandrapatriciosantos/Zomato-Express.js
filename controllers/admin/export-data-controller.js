const Export = require("../../models/ExportData");

const csv = require("fast-csv");
const path = require("path");
const fs = require("fs");
const ws = fs.createWriteStream("./mysql-export-files/out.csv");

var todayFormatYYYYMMDD = new Date().toISOString().split("T")[0];

const exportAllResults = (req, res, next) => {
  Export.getAllResults((err, results) => {
    if (err) return next(err);

    csv
      .writeToPath(path.resolve("./mysql-export-files/out.csv"), results, {
        headers: true
      })
      .on("error", err => console.error(err))
      .on("finish", () => {
        console.log("Done writing.");
        path.resolve("./out.csv");
        return res.download(
          "./mysql-export-files/out.csv",
          `${todayFormatYYYYMMDD}-Zomato-Quiz-Results.csv`
        );
      });
  });
};

module.exports = {
  exportAllResults
};
