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

const exportAllDocumentation = (req, res, next) => {
  Export.getAllDocumentation((err, results) => {
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
          `${todayFormatYYYYMMDD}-Zomato-Quiz-Documentation.csv`
        );
      });
  });
};

const exportAllQuizzes = (req, res, next) => {
  Export.getAllQuizzes((err, results) => {
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
          `${todayFormatYYYYMMDD}-Zomato-Quiz-Quizzes.csv`
        );
      });
  });
};

const exportAllUsers = (req, res, next) => {
  Export.getAllUsers((err, results) => {
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
          `${todayFormatYYYYMMDD}-Zomato-Quiz-Users.csv`
        );
      });
  });
};

const exportAllRestaurants = (req, res, next) => {
  Export.getAllRestaurants((err, results) => {
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
          `${todayFormatYYYYMMDD}-Zomato-Quiz-Restaurants.csv`
        );
      });
  });
};

const exportAllProducts = (req, res, next) => {
  Export.getAllProducts((err, results) => {
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
          `${todayFormatYYYYMMDD}-Zomato-Quiz-Products.csv`
        );
      });
  });
};

const exportAllFaqs = (req, res, next) => {
  Export.getAllFaqs((err, results) => {
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
          `${todayFormatYYYYMMDD}-Zomato-Quiz-Faqs.csv`
        );
      });
  });
};

module.exports = {
  exportAllResults,
  exportAllQuizzes,
  exportAllDocumentation,
  exportAllUsers,
  exportAllRestaurants,
  exportAllProducts,
  exportAllFaqs
};
