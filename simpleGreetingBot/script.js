// ==========================================
// ربات احوال پرسی ساده

function greeting(keyWord = "salam") {
  if (keyWord == "salam" || keyWord == "dooroud") {
    console.log("dooroud");
  } else if (keyWord == "chetori" || keyWord == "chetori?") {
    console.log("shokre khoda. to chetori?");
  } else if (keyWord == "che khabar" || keyWord == "che khabar?") {
    console.log("salamati");
  } else if (keyWord == "che mikoni" || keyWord == "che mikoni?") {
    console.log("ba shoma harf miznm");
  } else {
    console.log("sharmande. dar in had balad nistm");
  }
}

greeting("salam");

