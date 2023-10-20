const createPdf = () => {

  // Verifique se jsPDF está definido no escopo global
  if (typeof jsPDF !== "undefined") {

    const doc = new jsPDF({
      orientation: "portrait",
      format: 'a4',
    });

    // Obtenha uma referência ao elemento HTML
    const HTMLData = document.getElementById('conteudo');

    // Obtenha uma referência ao elemento HTML da imagem (ou você pode carregar a imagem de uma URL)
    const img = document.getElementById('meuLogo'); // Substitua pelo URL da sua imagem

    // Obtenha o conteúdo de texto do elemento HTML
    const text = HTMLData.textContent;

    // Define a posição inicial do texto
    const x = 10;
    let y = 10;

    // Define a largura máxima permitida para o texto
    const maxWidth = 190; // Ajuste esse valor conforme necessário

    // Função para criar novas páginas, se necessário
    const newPage = () => {
      doc.addPage("a4", "portrait");
      y = 10; // Reinicie a posição vertical na nova página
    }

    // Função para inserir o html na página PDF
    const addTextToPdf = (text) => {
      
      // dividir o texto em várias partes com quebras de linha
      const splitText = doc.splitTextToSize(text, maxWidth);

      // Adicione o texto ao PDF em linhas separadas
      for(const line of splitText) {
        
        // Verifique se o texto se encaixa na página atual, se não, cria nova página
        if( y + 10 > doc.internal.pageSize.height) {
          newPage()
        }
        doc.text(line, x, y); // adiciona o html como texto no documento pdf
        y += 10; // Ajuste o valor de espaço vertical entre as linhas conforme necessário
      }

    }

    // Função para adicionar uma imagem no início de cada página
    const addLogoToPdf = () => {
      doc.addImage(img, 'PNG', 10, 10, 30, 10); // Ajuste as coordenadas e as dimensões conforme necessário
    }

    // Função para inserir logo no PDF
    addLogoToPdf();

    // Chame a função para adicionar o texto ao PDF
    addTextToPdf(text);

    // // Gere a URL do PDF
    // const pdfDataUri = doc.output('datauristring');

    // // Abra uma nova janela para visualização
    // const previewWindow = window.open();
    // previewWindow.document.write('<iframe width="100%" height="100%" src="' + pdfDataUri + '"></iframe>');

    doc.save("estimativa.pdf");

  } else {
    console.error("A biblioteca jsPDF não foi carregada corretamente.");
  }
};