const createPdf = () => {

  // Verify if jsPDF is defined
  if (typeof jsPDF !== "undefined") {

    const doc = new jsPDF({
      orientation: "portrait",
      format: 'a4',
      unit: "mm"
    });

    // Variables
    {

      // get pdf width and height
      // var pageWidth = doc.internal.pageSize.getWidth();
      var pageHeight = doc.internal.pageSize.getHeight();

      // Defines initial text position
      var x = 10;
      var y = 20;
      
      // Define a largura máxima permitida para o texto
      var maxWidth = 190; // Ajuste esse valor conforme necessário

      // Obtenha uma referência ao elemento HTML
      var HTMLData = document.getElementById('conteudo');
  
      // Obtenha o conteúdo de texto do elemento HTML
      var HtmlText = HTMLData.textContent;

      // Obtenha uma referência ao elemento HTML da imagem (ou você pode carregar a imagem de uma URL)
      var img = document.getElementById('meuLogo'); // Substitua pelo URL da sua imagem
    }

    // img function
    {
      // Função para adicionar uma imagem no início de cada página
      const addLogoToPdf = () => {
        doc.addImage(img, 'JPG', 10, 10, 30, 10); // Ajuste as coordenadas e as dimensões conforme necessário
      }
  
      // Função para inserir logo no PDF
      addLogoToPdf();
    }

    // text function
    {
      const addNewPage = () => {
        doc.addPage();
        y = 10;
      }
  
      // Função para inserir o html na página PDF
      const addTextToPdf = (text) => {
      
        // dividir o texto em várias partes com quebras de linha
        const splitText = doc.splitTextToSize(text, maxWidth);
  
        // Adicione o texto ao PDF em linhas separadas
        for(const line of splitText) {
          
          // Verifique se o texto se encaixa na página atual, se não, cria nova página
          if( y + 10 > pageHeight ) {
            addNewPage()
          }
          doc.text(line, x, y); // adiciona o html como texto no documento pdf
          y += 10; // Ajuste o valor de espaço vertical entre as linhas conforme necessário
        }
        
      }
      
      // Chame a função para adicionar o texto ao PDF
      addTextToPdf(HtmlText);
    }

    // Gere a URL do PDF
    const pdfDataUri = doc.output('datauristring');

    // Abra uma nova janela para visualização
    const previewWindow = window.open();
    previewWindow.document.write('<iframe width="100%" height="100%" src="' + pdfDataUri + '"></iframe>');

    // doc.save("estimativa.pdf");

  } else {
    console.error("jsPDF lib is not loaded correctly.");
  }
};