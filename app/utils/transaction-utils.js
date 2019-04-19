// mongo connect
const mongoose = require('mongoose');
var options = { keepAlive: 1, useNewUrlParser: true };
const prices = require('../constants/prices.constants');
mongoose.connect('mongodb://localhost:27017/invoice_calculations', options);

// import model
const Transaction = require('../models/transaction.model');
const listTransactions = async () => {
  let pr = await Transaction.groupByCompaniesAndTypes().exec(
    async (err, res) => {
      const trs = [];
      const result = await res;
      result.forEach(elt => {
        trs.push(elt);
      });
      console.log(trs);
      return result;
    }
  );
  return pr;
};
// get the sales of agreculter
const listSalesAgr = async () => {
  let tab = [];
  let sa = await Transaction.getSalesOfAgr();
  sa.map(a => {
    tab.push([a._id], a.total_ear_tags, a.earTagSum);
  });
  console.log(tab);
};
// get the buys of agreculter
const listBuysAgr = async () => {
  let tab = [];
  let sa = await Transaction.getBuysOfAgr();
  sa.map(a => {
    tab.push([a._id], a.total_ear_tags, a.total_ear_tags.length);
  });
  console.log(tab);
};
// get the birth of agreculter
const listBirthAgr = async () => {
  let tab = [];
  let sa = await Transaction.getBirthOfAgr();
  sa.map(a => {
    tab.push([a._id], a.total_ear_tags, a.total_ear_tags.length);
  });
  console.log(tab);
};
// get the death of agreculter
const listDeathAgr = async () => {
  let tab = [];
  let sa = await Transaction.getDeathOfAgr();
  sa.map(a => {
    tab.push([a._id], a.total_ear_tags, a.total_ear_tags.length);
  });
  console.log(tab);
};
// get the incoming of agreculter
const listIncomAgr = async () => {
  let tab = [];
  let sa = await Transaction.getIncomeOfAgr();
  sa.map(a => {
    tab.push([a._id], a.total_ear_tags, a.total_ear_tags.length);
  });
  console.log(tab);
};
// get the Antibiotics of agreculter
const listAntibAgr = async () => {
  let tab = [];
  let sa = await Transaction.getAntibOfAgr();
  sa.map(a => {
    tab.push([a._id], a.total_ear_tags, a.total_ear_tags.length);
  });
  console.log(tab);
};
// get the sell of trader
const listSalesTrd = async () => {
  let tab = [];
  console.log('===========+>', prices.unit_price_agr_1_20);
  let sa = await Transaction.getSalesOfTrd();
  sa.map(a => {
    tab.push(
      [a._id],
      a.total_ear_tags,
      a.earTagSum,
      a.earTagSum * prices.unit_price_trd_1_500
    );
  });
  console.log(tab);
};

// get the buys of trader
const listBuysTrd = async () => {
  let tab = [];
  let sa = await Transaction.getBuysOfTrd();
  sa.map(a => {
    tab.push(
      [a._id],
      a.total_ear_tags,
      a.earTagSum
      // a.earTagSum * unit_price_trd_1_500
    );
  });
  console.log(tab);
};
//get the comapny ids of agrs
const agrIds1 = async () => {
  let tab = [];
  let ai = await Transaction.findByCompanyId1();
  ai.map(a => {
    tab.push(a._id);
  });
  console.log(tab);
};
//get the comapny ids of agrs
const agrIds2 = async () => {
  let tab = [];
  let ai = await Transaction.findByCompanyId2();
  ai.map(a => {
    tab.push(a._id);
  });
  console.log(tab);
};

//get the list of agr transactions by date

const listCompanyDates = async () => {
  let tab = [];
  let sa = await Transaction.getCompanyDates();
  sa.map(a => {
    tab.push(a._id, a.total_ear_tags, a.earTagSum);
  });
  console.log(tab);
};
module.exports = Object.assign(
  {},
  {
    listTransactions,
    listSalesAgr,
    listSalesTrd,
    listBirthAgr,
    listDeathAgr,
    listIncomAgr,
    listAntibAgr,
    listBuysAgr,
    listBuysTrd,
    agrIds1,
    agrIds2,
    listCompanyDates
  }
);
