import PdfMakePrinter from 'pdfmake/src/printer';

const fs = require('fs');

const fonts = {
	Roboto: {
		normal: 'fonts/Roboto-Regular.ttf',
		bold: 'fonts/Roboto-Medium.ttf',
		italics: 'fonts/Roboto-Italic.ttf',
		bolditalics: 'fonts/Roboto-MediumItalic.ttf'
	}
};

const generatePdf = (docDefinition, callback) => {
    try {
      const printer = new PdfMakePrinter(fonts);
      const doc = printer.createPdfKitDocument(docDefinition);
      const chunks = [];

      doc.on('data', (chunk) => {
        chunks.push(chunk);
      });

      doc.pipe(
        fs.createWriteStream('../../public/pdfs/invoice-final.pdf')
      );

      doc.on('end', () => {
        const result = Buffer.concat(chunks);
        callback(`data:application/pdf;base64,${result.toString('base64')}`);
      });

      doc.end();
    } catch (err) {
      throw (err);
    }
};

  export default generatePdf;