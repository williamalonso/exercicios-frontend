function converte() {
  const bloco = document.getElementById('content');
  const element = document.getElementById('navbar');
  const pdfContainer = document.getElementById('pdfContainer');
  const pdfViewer = document.getElementById('pdfViewer');

  html2pdf()
      .from(content) // Adicione o elemento "navbar"
      .outputPdf()
      .then(pdf => {
          // Gere um URL de objeto (data URL) para o PDF
          const pdfDataUrl = 'data:application/pdf;base64,' + btoa(pdf);

          // Exibe o PDF no <iframe>
          pdfViewer.src = pdfDataUrl;

          // Mostra o contêiner do PDF
          pdfContainer.style.display = 'block';
      });
}
