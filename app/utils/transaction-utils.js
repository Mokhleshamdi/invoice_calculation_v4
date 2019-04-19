// mongo connect
const mongoose = require('mongoose');
var options = { keepAlive: 1, useNewUrlParser: true };

mongoose.connect('mongodb://localhost:27017/invoice_calculations', options);

// import model
const Transaction = require('../models/transaction.model');
// pricing for different comapnies
const unit_price_agr_1_20 = 0.99;
const unit_price_agr_21_50 = 0.89;
const unit_price_agr_51_100 = 0.79;
const unit_price_agr_from_101 = 0.69;
const unit_price_agr_all = 0.05;
const unit_price_trd_1_500 = 0.09;
const unit_price_trd_501_1000 = 0.08;
const unit_price_trd_1001_2000 = 0.07;
const unit_price_trd_2001_3000 = 0.06;
const unit_price_trd_from_3001 = 0.05;
const unit_price_abt_1_4000 = 0.19;
const unit_price_abt_4001_8000 = 0.18;
const unit_price_abt_8001_12000 = 0.17;
const unit_price_abt_from_12001 = 0.16;
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
  let sa = await Transaction.getSalesOfTrd();
  sa.map(a => {
    tab.push(
      [a._id],
      a.total_ear_tags,
      a.earTagSum,
      a.earTagSum * unit_price_trd_1_500
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
      a.earTagSum,
      a.earTagSum * unit_price_trd_1_500
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

//get the list of agr sales by date

const listSalesAgrbd = async () => {
  let tab = [];
  let sa = await Transaction.getSalesOfAgrByDate();
  sa.map(a => {
    tab.push([a._id], a.total_ear_tags, a.total_ear_tags.length);
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
    listSalesAgrbd
  }
);
