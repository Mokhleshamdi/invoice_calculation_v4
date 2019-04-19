const docDefinition = {

    footer: {
        columns: [

            [{
                text: 'Kontakt \n',
                fontSize: 11,
                bold: true,
                margin: [50, -60, 0, 0]
            }, {
                text: 'Tel.: +49 89 62240455 \n Fax: +49 89 62240461  \n E-Mail: rechnung@agrabiz.de \n Web: www.agrabiz.de',
                fontSize: 9,
                margin: [50, 0, 0, 0]
            }],
            [{
                text: 'Bankverbindung \n',
                fontSize: 11,
                bold: true,
                margin: [50, -60, 0, 0]
            }, {
                text: ' Postbank München \n Konto-Nr. 616288807 \n BLZ 70010080 \n IBAN DE33 7001 0080 0616 2888 07 ',
                fontSize: 9,
                margin: [50, 0, 0, 0]
            }],
            [{
                text: 'Gerichtsstand \n',
                fontSize: 11,
                bold: true,
                margin: [50, -60, 0, 0]
            }, {
                text: 'München \n HRB: 212650 \n Steuer-Nr.: 1431 9411 314 \n USt-IdNr. DE29 5475 897',
                fontSize: 9,
                margin: [50, 0, 0, 0]
            }],

        ],
        style: 'footer'
    },
    content: [{
            columns: [
                [{
                        text: 'RECHNUNG\n',
                        style: 'title_head'
                    },
                    {
                        text: 'Yanogo GmbH - Rainer-Werner-Fassbinder-Platz 2 - 80636 München\n\n\n\n\n\n',
                        style: 'title_sub'
                    }
                ],
                {
                    image: 'logo.png',
                    width: 150,
                    height: 40,
                }

            ],
            style: 'header_container'
        },


        {
            columns: [
                [{
                    columns: [
                        [{
                                text: 'Firma',
                                margin: [0, 30, 0, 5],
                                color: '#413e3e'
                            },
                            {
                                text: 'Attenberger Fleisch GmbH',
                                margin: [0, 0, 0, 5],
                                color: '#413e3e'
                            },
                            {
                                text: 'Zenettistr. 10',
                                margin: [0, 0, 0, 5],
                                color: '#413e3e'
                            },
                            {
                                text: '80337 München\n\n',
                                margin: [0, 0, 0, 60],
                                color: '#413e3e'
                            }
                        ],
                        {}


                    ],
                    style: 'company_right'
                }, ],
                [{
                    columns: [
                        [{
                                columns: [{
                                        text: 'Betriebsnummer:',

                                        bold: true,
                                        alignment: 'right',
                                        margin: [0, 0, 0, 2]
                                    },
                                    {
                                        text: '12312338',
                                        margin: [15, 0, 0, 0]
                                    }
                                ]
                            },
                            {
                                columns: [{
                                        text: 'Rechnungsnr:',

                                        bold: true,
                                        alignment: 'right',
                                        margin: [0, 0, 0, 2]
                                    },
                                    {
                                        text: '7362472342',
                                        margin: [15, 0, 0, 0]
                                    }
                                ]
                            },
                            {
                                columns: [{
                                        text: 'Rechnungsdatum:',

                                        bold: true,
                                        alignment: 'right',
                                        margin: [0, 0, 0, 2]
                                    },
                                    {
                                        text: '01.02.2019',
                                        margin: [15, 0, 0, 0]
                                    }
                                ]
                            },
                            {
                                columns: [{
                                        text: 'Leistungszeitraum von:',
                                        bold: true,
                                        alignment: 'right',
                                        margin: [0, 0, 0, 2]
                                    },
                                    {
                                        text: '01.01.2019',
                                        margin: [15, 0, 0, 0]
                                    }
                                ]
                            },
                            {
                                columns: [{
                                        text: 'Bis:',

                                        bold: true,
                                        alignment: 'right',
                                        margin: [0, 0, 0, 2]
                                    },
                                    {
                                        text: '31.01.2019',
                                        margin: [15, 0, 0, 0]
                                    }
                                ]
                            }
                        ],
                        {}


                    ],
                    style: 'company_right_top'
                }, ]

            ],
            style: 'header_container'
        },


        {
            text: 'Agrabiz Dienstleistungen im Leistungszeitraum 01/2019',
            style: 'subheader'
        },


        {
            style: 'table_overview_first',
            table: {
                widths: [25, 200, '*', '*', '*'],
                headerRows: 0,
                body: [
                    [{
                        text: 'Pos.',
                        bold: true,
                        alignment: 'center',
                        style: 'tableHeader'
                    }, {
                        text: 'Beschreibung',
                        bold: true,
                        style: 'tableHeader'
                    }, {
                        text: 'Menge Einheit',
                        bold: true,
                        style: 'tableHeader'
                    }, {
                        text: 'Einzelpreis netto',
                        bold: true,
                        alignment: 'right',
                        style: 'tableHeader'
                    }, {
                        text: 'Gesamtpreis netto',
                        bold: true,
                        alignment: 'right',
                        style: 'tableHeader'
                    }],
                    [{
                        text: '1',
                        alignment: 'center'
                    }, 'Agrabiz Abonnement "Standard"', '1 Pauschale', {
                        text: '9,99 €',
                        alignment: 'right'
                    }, {
                        text: '9,99 €',
                        alignment: 'right'
                    }],
                    [{
                        text: '2',
                        alignment: 'center'
                    }, 'Transaktionsgebühr Kauf / Geburt', '412 Zugänge', {
                        text: '0,08 €',
                        alignment: 'right'
                    }, {
                        text: '32,96 €',
                        alignment: 'right'
                    }],
                    [{
                        text: '3',
                        alignment: 'center'
                    }, 'Transaktionsgebühr Verkauf', '389 Abgänge', {
                        text: '0,08 €',
                        alignment: 'right'
                    }, {
                        text: '31,96 €',
                        alignment: 'right'
                    }],
                    ['', '', '', '', ''],
                ],

            },
            layout: 'lightHorizontalLines'
        },
        {
            style: 'table_overview_second',
            table: {
                headerRows: 0,
                body: [
                    ['Zwischensumme', '74,07 €'],
                    ['zzgl. 19 % MwSt.', '14,07 €'],

                ]
            },
            layout: 'noBorders'

        },
        {
            style: 'table_overview_second_bottom',
            table: {
                widths: [90, '*'],
                body: [
                    [{
                        text: 'Endsumme',
                        bold: true
                    }, {
                        text: '88,14 €',
                        bold: true
                    }],
                ]
            },
            layout: {
                hLineWidth: () => {
                    return (1)
                },
                vLineWidth: () => {
                    return 0;
                },
            }

        },
        {
            text: 'Die Abrechnung erfolgt auf Basis der Agrabiz Nutzungsbedingungen und der aktuell gültigen Preisliste.',
            style: 'sub_subheader'
        }, {
            text: 'Die Berechnung ergibt sich aus monatlicher Basispauschale und der durch Sie getätigten Zu- und Abgänge im Leistungszeitraum. Im Anhang finden Sie eine detaillierte Aufstellung der in Anspruch genommenen Leistungen.',
            style: 'sub_subheader'
        },
        {
            text: 'Die Abbuchung erfolgt in den nächsten Tagen von Ihrer Kreditkarte mit der Nummer XXXXXXXXXXXX9671.',
            style: 'sub_subheader'
        },
        {
            text: 'Der Rechnungsbetrag ist sofort fällig.',
            style: 'sub_subheader'
        },
        {
            text: 'Agrabiz Dienstleistungen im Leistungszeitraum 01/2019',
            style: 'subheader_second_part'
        },
        {
            text: 'Detailaufstellung Transaktionsgebühren Kauf / Geburt',
            style: 'subheader_second_part_sub'
        },
        {
            style: 'table_overview_first',
            table: {
                headerRows: 0,
                widths: [20, 110, 260, 80],
                body: [
                    [{
                        text: 'Pos.',
                        bold: true,
                        alignment: 'center',
                        style: 'tableHeader'
                    }, {
                        text: 'Beschreibung',
                        bold: true,
                        style: 'tableHeader'
                    }, {
                        text: 'Ohrmarken',
                        bold: true,
                        style: 'tableHeader'
                    }, {
                        text: 'Anzahl Transaktionen',
                        bold: true,
                        alignment: 'right',
                        style: 'tableHeader'
                    }],
                    [{
                            text: '1',
                            alignment: 'center'
                        }, 'Gemeldete Zugänge 01.01.2019',
                        'DE1298527673, DE2873283634, DE2873283634, DE6481928141, DE2873283634, DE2873283634',

                        {
                            text: '28',
                            alignment: 'center'
                        }
                    ],
                    [{
                            text: '2',
                            alignment: 'center'
                        }, 'Gemeldete Zugänge 03.01.2019',
                        'DE1298527673, DE2873283634, DE2873283634, DE6481928141, DE2873283634, DE2873283634',

                        {
                            text: '19',
                            alignment: 'center'
                        }
                    ],
                    [{
                            text: '3',
                            alignment: 'center'
                        }, 'Gemeldete Zugänge 03.01.2019',
                        'DE1298527673, DE2873283634, DE2873283634, DE6481928141, DE2873283634, DE2873283634',

                        {
                            text: '17',
                            alignment: 'center'
                        }
                    ],
                    [{
                            text: '4',
                            alignment: 'center'
                        }, 'Gemeldete Zugänge 04.01.2019',
                        'DE1298527673, DE2873283634, DE2873283634, DE6481928141, DE2873283634, DE2873283634',

                        {
                            text: '22',
                            alignment: 'center'
                        }
                    ],
                    ['', '', '', '']

                ],

            },
            layout: 'lightHorizontalLines'
        },
        {
            style: 'table_overview_second',
            table: {
                headerRows: 0,
                body: [
                    [{
                        text: 'Transaktionen gesamt',
                        bold: true
                    }, {
                        text: '94',
                        bold: true
                    }],
                    ['', '']
                ]
            },
            layout: 'lightHorizontalLines'
        },
        {
            text: 'Detailaufstellung Transaktionsgebühren Verkauf',
            style: 'subheader_second_part_sub'
        },
        {
            style: 'table_overview_first',
            table: {
                headerRows: 0,
                widths: [20, 110, 260, 80],
                body: [
                    [{
                        text: 'Pos.',
                        bold: true,
                        alignment: 'center',
                        style: 'tableHeader'
                    }, {
                        text: 'Beschreibung',
                        bold: true,
                        style: 'tableHeader'
                    }, {
                        text: 'Ohrmarken',
                        bold: true,
                        style: 'tableHeader'
                    }, {
                        text: 'Anzahl Transaktionen',
                        bold: true,
                        alignment: 'right',
                        style: 'tableHeader'
                    }],
                    [{
                            text: '1',
                            alignment: 'center'
                        }, 'Gemeldete Zugänge 01.01.2019',
                        'DE1298527673, DE2873283634, DE2873283634, DE6481928141, DE2873283634, DE2873283634',

                        {
                            text: '28',
                            alignment: 'center'
                        }
                    ],
                    [{
                            text: '2',
                            alignment: 'center'
                        }, 'Gemeldete Zugänge 03.01.2019',
                        'DE1298527673, DE2873283634, DE2873283634, DE6481928141, DE2873283634, DE2873283634',

                        {
                            text: '19',
                            alignment: 'center'
                        }
                    ],
                    [{
                            text: '3',
                            alignment: 'center'
                        }, 'Gemeldete Zugänge 03.01.2019',
                        'DE1298527673, DE2873283634, DE2873283634, DE6481928141, DE2873283634, DE2873283634',

                        {
                            text: '17',
                            alignment: 'center'
                        }
                    ],

                    ['', '', '', '']

                ],

            },
            layout: 'lightHorizontalLines'
        },
        {
            style: 'table_overview_second',
            table: {
                headerRows: 0,
                body: [
                    [{
                        text: 'Transaktionen gesamt',
                        bold: true
                    }, {
                        text: '55',
                        bold: true
                    }],
                    ['', '']
                ]
            },
            layout: 'lightHorizontalLines'
        },






    ],
    styles: {
        title_head: {
            fontSize: 14,
            bold: true,
            italics: true,
            color: '#949894',
            margin: [0, 10, 0, 7]
        },
        title_sub: {
            fontSize: 9,
            color: '#504f4d'
        },
        quote: {
            italics: true
        },
        small: {
            fontSize: 8
        },
        header_container: {},
        company_right: {

        },
        subheader: {
            fontSize: 15,
            color: '#2f2f2e',
            margin: [0, 0, 0, 40]
        },
        sub_subheader: {
            fontSize: 12,
            margin: [0, 0, 0, 20]
        },
        table_overview_second: {
            margin: [365, 0, 0, 0],
        },
        subheader_second_part: {
            fontSize: 15,
            color: '#2f2f2e',
            margin: [0, 60, 0, 0]
        },
        subheader_second_part_sub: {
            fontSize: 13,
            color: '#2f2f2e',
            margin: [0, 15, 0, 40]
        },
        company_right_top: {
            margin: [0, 25, -70, 0]
        },
        table_overview_second_bottom: {
            margin: [365, 0, 0, 30]
        },
        footerLeft: {
            fontSize: 9,
            margin: [50, -60, 0, 0]
        },
        footerMiddle: {
            fontSize: 9,
            margin: [40, -60, 0, 0]
        },
        footerRight: {
            fontSize: 9,
            margin: [50, -60, 0, 0]
        },


    }

};

export default docDefinition;