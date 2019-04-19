const mongoose = require('mongoose');
const types = require('./types');

const Schema = mongoose.Schema;

/**
 * Transaction schema
 */

const TransactionSchema = new Schema(
  {
    companyId: {
      type: String,
      match: /^(?=[a-f\d]{24}$)(\d+[a-f]|[a-f]+\d)/i,
      required: true,
      trim: true,
      index: true
    },
    businessType: {
      type: String,
      required: true,
      trim: true
    },
    type: {
      type: String,
      enum: types,
      default: 'registration'
    },
    earTags: [
      {
        ear_tag: {
          type: String,
          trim: true
        },
        is_registered: {
          type: Boolean,
          default: true
        },
        messages: [
          {
            type: String,
            trim: true
          }
        ]
      }
    ]
  },
  {
    timestamps: true
  }
);

class TransactionClass {
  getEartagSum() {
    const goupedTrs = Transaction.groupByCompaniesAndTypes();
    return goupedTrs;
  }

  static groupByCompaniesAndTypes() {
    const gct = Transaction.aggregate([
      {
        $group: {
          _id: {
            companyId: '$companyId',
            // updatedAt: '$updatedAt',
            type: '$type'
          },
          transactions: {
            $push: '$$ROOT'
          },
          earTags: {
            $addToSet: '$earTags'
          },
          earTagSum: {
            $sum: 1
          }
        }
      }
    ]);
    return gct;
  }
  // get the sales of the agr
  static getSalesOfAgr() {
    const gsoa = Transaction.aggregate([
      { $match: { businessType: '1', type: 'buy' } },
      {
        $group: {
          _id: '$companyId',
          total_ear_tags: { $addToSet: '$earTags.ear_tag' },
          earTagSum: { $sum: { $size: '$earTags' } }
        }
      }
    ]);
    return gsoa;
  }
  //get the buys of agr
  static getBuysOfAgr() {
    const gboa = Transaction.aggregate([
      { $match: { businessType: '1', type: 'buy' } },
      {
        $group: {
          _id: '$companyId',
          total_ear_tags: { $addToSet: '$earTags.ear_tag' },
          earTagSum: { $sum: { $size: '$earTags' } }
        }
      }
    ]);
    return gboa;
  }
  //get the birth animals of agr
  static getBirthOfAgr() {
    const gbioa = Transaction.aggregate([
      { $match: { businessType: '1', type: 'birth' } },
      {
        $group: {
          _id: '$companyId',
          total_ear_tags: { $addToSet: '$earTags.ear_tag' },
          earTagSum: { $sum: { $size: '$earTags' } }
        }
      }
    ]);
    return gbioa;
  }
  //get the birth animals of agr
  static getDeathOfAgr() {
    const gdoa = Transaction.aggregate([
      { $match: { businessType: '1', type: 'death' } },
      {
        $group: {
          _id: '$companyId',
          total_ear_tags: { $addToSet: '$earTags.ear_tag' },
          earTagSum: { $sum: { $size: '$earTags' } }
        }
      }
    ]);
    return gdoa;
  }
  //get the birth animals of agr
  static getIncomeOfAgr() {
    const gioa = Transaction.aggregate([
      { $match: { businessType: '1', type: 'incoming' } },
      {
        $group: {
          _id: '$companyId',
          total_ear_tags: { $addToSet: '$earTags.ear_tag' },
          earTagSum: { $sum: { $size: '$earTags' } }
        }
      }
    ]);
    return gioa;
  }
  //get the birth animals of agr
  static getAntibOfAgr() {
    const gaoa = Transaction.aggregate([
      { $match: { businessType: '1', type: 'antibiotics' } },
      {
        $group: {
          _id: '$companyId',
          total_ear_tags: { $addToSet: '$earTags.ear_tag' },
          earTagSum: { $sum: { $size: '$earTags' } }
        }
      }
    ]);
    return gaoa;
  }
  //get the sales of trd
  static getSalesOfTrd() {
    const gsot = Transaction.aggregate([
      { $match: { businessType: '2', type: 'sell' } },
      {
        $group: {
          _id: '$companyId',
          total_ear_tags: { $addToSet: '$earTags.ear_tag' },
          earTagSum: { $sum: { $size: '$earTags' } }
        }
      }
    ]);
    return gsot;
  }
  //get the buys of trd
  static getBuysOfTrd() {
    const gbot = Transaction.aggregate([
      { $match: { businessType: '2', type: 'buy' } },
      {
        $group: {
          _id: '$companyId',
          total_ear_tags: { $addToSet: '$earTags.ear_tag' },
          earTagSum: { $sum: { $size: '$earTags' } }
        }
      }
    ]);
    return gbot;
  }
  static getSalesOfAgrByDate() {
    const gsoabd = Transaction.aggregate([
      {
        $match: {
          businessType: '2',
          transactionDate: {
            createdAt: {
              $gte: new Date(14, 4, 2019, 17, 50, 49.862).toISOString()
            }
          },
          type: 'sell'
        }
      },
      {
        $group: {
          _id: '$companyId',
          total_ear_tags: { $addToSet: '$earTags.ear_tag' },
          earTagSum: { $sum: { $size: '$earTags' } }
        }
      }
    ]);
    return gsoabd;
  }
  //find company by business type== 1 agr
  static findByCompanyId1() {
    const fbci1 = Transaction.aggregate([
      { $match: { businessType: '1' } },
      {
        $group: {
          _id: '$companyId'
        }
      }
    ]);
    return fbci1;
  }
  //find company by business type== 2 trd
  static findByCompanyId2() {
    const fbci2 = Transaction.aggregate([
      { $match: { businessType: '2' } },
      {
        $group: {
          _id: '$companyId'
        }
      }
    ]);
    return fbci2;
  }
}

TransactionSchema.loadClass(TransactionClass);

const Transaction = mongoose.model('Transaction', TransactionSchema);
module.exports = Transaction;
