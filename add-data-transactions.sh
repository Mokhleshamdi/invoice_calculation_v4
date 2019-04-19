mongo --port 27017 <<EOF
use invoice_calculations;
db.usetransactions.deleteMany({});
db.transactions.insertMany([
  {
    _id: new ObjectId(),
    type: "buy",
    companyId: "5b897e77d2f87f1fa1af5e99",
    businessType: "2",
    earTags: [
      {
        is_registered: true,
        messages: ["Ihre PIN ist abgelaufen und muss sofort geändert werden."],
        _id: new ObjectId(),
        ear_tag: "DE 1298527673"
      },
      {
        is_registered: false,
        messages: ["Ihre PIN ist abgelaufen und muss sofort geändert werden."],
        _id: new ObjectId(),
        ear_tag: "DE 2873283634"
      },
      {
    _id: new ObjectId(),
    type: "buy",
    companyId: "5b897e77d2f87f1fa1af5e99",
    businessType: "1",
    earTags: 
      {
        is_registered: true,
        messages: ["Ihre PIN ist abgelaufen und muss sofort geändert werden."],
        _id: new ObjectId(),
        ear_tag: "DE 1298527673"
      },
      {
        is_registered: false,
        messages: ["Ihre PIN ist abgelaufen und muss sofort geändert werden."],
        _id: new ObjectId(),
        ear_tag: "DE 2873283634"
      },
      {
        is_registered: true,
        messages: ["Ihre PIN ist abgelaufen und muss sofort geändert werden."],
        _id: new ObjectId(),
        ear_tag: "DE 1298527673"
      }
    ,
    createdAt: ISODate("2019-04-13T15:50:49.862+0000"),
    updatedAt: ISODate("2019-04-13T15:50:49.862+0000")
  }, {
    _id: new ObjectId(),
    type: "sell",
    companyId: "5b897e77d2f87f1fa1af5e99",
    businessType: "2",
    earTags: [
      {
        is_registered: true,
        messages: ["Ihre PIN ist abgelaufen und muss sofort geändert werden."],
        _id: new ObjectId(),
        ear_tag: "DE 1298527673"
      },
      {
        is_registered: false,
        messages: ["Ihre PIN ist abgelaufen und muss sofort geändert werden."],
        _id: new ObjectId(),
        ear_tag: "DE 2873283634"
      },
      {
        is_registered: true,
        messages: ["Ihre PIN ist abgelaufen und muss sofort geändert werden."],
        _id: new ObjectId(),
        ear_tag: "DE 1298527673"
      }
    ],
    createdAt: ISODate("2019-04-13T15:50:49.862+0000"),
    updatedAt: ISODate("2019-04-13T15:50:49.862+0000")
  },
  {
    _id: new ObjectId(),
    type: "sell",
    companyId: "5b897e77d2f87f1fa1af5e99",
    businessType: "2",
    earTags: [
      {
        is_registered: true,
        messages: ["Ihre PIN ist abgelaufen und muss sofort geändert werden."],
        _id: new ObjectId(),
        ear_tag: "DE 2873283666,"
      },
      {
        is_registered: false,
        messages: ["Ihre PIN ist abgelaufen und muss sofort geändert werden."],
        _id: new ObjectId(),
        ear_tag: "DE 1255527673,"
      },
      {
        is_registered: true,
        messages: ["Ihre PIN ist abgelaufen und muss sofort geändert werden."],
        _id: new ObjectId(),
        ear_tag: "DE 2873553634,"
      }
    ],
    createdAt: ISODate("2019-04-17T15:50:49.862+0000"),
    updatedAt: ISODate("2019-04-17T15:50:49.862+0000")
  },
  {
    _id: new ObjectId(),
    type: "death",
    companyId: "5b897ed4d2f87f1fa1af5eba",
    businessType: "1",
    earTags: [
      {
        is_registered: true,
        messages: ["Ihre PIN ist abgelaufen und muss sofort geändert werden."],
        _id: new ObjectId(),
        ear_tag: "DE 6481928141"
      },
      {
        is_registered: false,
        messages: ["Ihre PIN ist abgelaufen und muss sofort geändert werden."],
        _id: new ObjectId(),
        ear_tag: "DE 6481928141"
      },
      {
        is_registered: true,
        messages: ["Ihre PIN ist abgelaufen und muss sofort geändert werden."],
        _id: new ObjectId(),
        ear_tag: "DE 6481928141"
      }
    ],
    createdAt: ISODate("2019-04-14T15:50:49.862+0000"),
    updatedAt: ISODate("2019-04-14T15:50:49.862+0000")
  },
  {
    _id: new ObjectId(),
    type: "sell",
    companyId: "5b897fe4d2f87f1fa1af5f1b",
    businessType: "1",
    earTags: [
      {
        is_registered: true,
        messages: ["Ihre PIN ist abgelaufen und muss sofort geändert werden."],
        _id: new ObjectId(),
        ear_tag: "DE 1298527673"
      },
      {
        is_registered: false,
        messages: ["Ihre PIN ist abgelaufen und muss sofort geändert werden."],
        _id: new ObjectId(),
        ear_tag: "DE 2873283634"
      },
      {
        is_registered: true,
        messages: ["Ihre PIN ist abgelaufen und muss sofort geändert werden."],
        _id: new ObjectId(),
        ear_tag: "DE 2873283634"
      }
    ],
    createdAt: ISODate("2019-04-12T15:50:49.862+0000"),
    updatedAt: ISODate("2019-04-12T15:50:49.862+0000")
  },
  {
    _id: new ObjectId(),
    type: "sell",
    companyId: "5b89814bd2f87f1fa1af5f87",
    businessType: "1",
    earTags: [
      {
        is_registered: true,
        messages: ["Ihre PIN ist abgelaufen und muss sofort geändert werden."],
        _id: new ObjectId(),
        ear_tag: "DE 6481928141"
      },
      {
        is_registered: false,
        messages: ["Ihre PIN ist abgelaufen und muss sofort geändert werden."],
        _id: new ObjectId(),
        ear_tag: "DE 2873283634"
      },
      {
        is_registered: true,
        messages: ["Ihre PIN ist abgelaufen und muss sofort geändert werden."],
        _id: new ObjectId(),
        ear_tag: "DE 2873283634"
      }
    ],
    createdAt: ISODate("2019-04-12T15:50:49.862+0000"),
    updatedAt: ISODate("2019-04-12T15:50:49.862+0000")
  },
  {
    _id: new ObjectId(),
    type: "birth",
    companyId: "5b89814bd2f87f1fa1af5f87",
    businessType: "1",
    earTags: [
      {
        is_registered: true,
        messages: ["Ihre PIN ist abgelaufen und muss sofort geändert werden."],
        _id: new ObjectId(),
        ear_tag: "DE 6481928141"
      },
      {
        is_registered: false,
        messages: ["Ihre PIN ist abgelaufen und muss sofort geändert werden."],
        _id: new ObjectId(),
        ear_tag: "DE 2873283634"
      },
      {
        is_registered: true,
        messages: ["Ihre PIN ist abgelaufen und muss sofort geändert werden."],
        _id: new ObjectId(),
        ear_tag: "DE 2873283634"
      }
    ],
    createdAt: ISODate("2019-04-12T15:50:49.862+0000"),
    updatedAt: ISODate("2019-04-12T15:50:49.862+0000")
  },
  {
    _id: new ObjectId(),
    type: "incoming",
    companyId: "5b89814bd2f87f1fa1af5f87",
    businessType: "1",
    earTags: [
      {
        is_registered: true,
        messages: ["Ihre PIN ist abgelaufen und muss sofort geändert werden."],
        _id: new ObjectId(),
        ear_tag: "DE 6481928141"
      },
      {
        is_registered: false,
        messages: ["Ihre PIN ist abgelaufen und muss sofort geändert werden."],
        _id: new ObjectId(),
        ear_tag: "DE 2873283634"
      },
      {
        is_registered: true,
        messages: ["Ihre PIN ist abgelaufen und muss sofort geändert werden."],
        _id: new ObjectId(),
        ear_tag: "DE 2873283634"
      }
    ],
    createdAt: ISODate("2019-04-12T15:50:49.862+0000"),
    updatedAt: ISODate("2019-04-12T15:50:49.862+0000")
  },
  {
    _id: new ObjectId(),
    type: "incoming",
    companyId: "5b89814bd2f87f1fa1af5f87",
    businessType: "1",
    earTags: [
      {
        is_registered: true,
        messages: ["Ihre PIN ist abgelaufen und muss sofort geändert werden."],
        _id: new ObjectId(),
        ear_tag: "DE 6481928141"
      },
      {
        is_registered: false,
        messages: ["Ihre PIN ist abgelaufen und muss sofort geändert werden."],
        _id: new ObjectId(),
        ear_tag: "DE 2873283634"
      },
      {
        is_registered: true,
        messages: ["Ihre PIN ist abgelaufen und muss sofort geändert werden."],
        _id: new ObjectId(),
        ear_tag: "DE 2873283634"
      }
    ],
    createdAt: ISODate("2019-04-12T15:50:49.862+0000"),
    updatedAt: ISODate("2019-04-12T15:50:49.862+0000")
  },
  {
    _id: new ObjectId(),
    type: "death",
    companyId: "5b89814bd2f87f1fa1af5f87",
    businessType: "1",
    earTags: [
      {
        is_registered: true,
        messages: ["Ihre PIN ist abgelaufen und muss sofort geändert werden."],
        _id: new ObjectId(),
        ear_tag: "DE 6481928141"
      },
      {
        is_registered: false,
        messages: ["Ihre PIN ist abgelaufen und muss sofort geändert werden."],
        _id: new ObjectId(),
        ear_tag: "DE 2873283634"
      },
      {
        is_registered: true,
        messages: ["Ihre PIN ist abgelaufen und muss sofort geändert werden."],
        _id: new ObjectId(),
        ear_tag: "DE 2873283634"
      }
    ],
    createdAt: ISODate("2019-04-12T15:50:49.862+0000"),
    updatedAt: ISODate("2019-04-12T15:50:49.862+0000")
  },
  {
    _id: new ObjectId(),
    type: "antibiotics",
    companyId: "5b89814bd2f87f1fa1af5f87",
    businessType: "1",
    earTags: [
      {
        is_registered: true,
        messages: ["Ihre PIN ist abgelaufen und muss sofort geändert werden."],
        _id: new ObjectId(),
        ear_tag: "DE 6481928141"
      },
      {
        is_registered: false,
        messages: ["Ihre PIN ist abgelaufen und muss sofort geändert werden."],
        _id: new ObjectId(),
        ear_tag: "DE 2873283634"
      },
      {
        is_registered: true,
        messages: ["Ihre PIN ist abgelaufen und muss sofort geändert werden."],
        _id: new ObjectId(),
        ear_tag: "DE 2873283634"
      }
    ],
    createdAt: ISODate("2019-04-12T15:50:49.862+0000"),
    updatedAt: ISODate("2019-04-12T15:50:49.862+0000")
  }
]);
EOF;