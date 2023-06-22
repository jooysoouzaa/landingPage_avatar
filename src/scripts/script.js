
  // Selecione o botão do trailer
  const trailerButton = document.getElementById('trailerButton');

  // Adicione um ouvinte de eventos de clique no botão
  trailerButton.addEventListener('click', function() {
    // Crie um elemento iframe para exibir o vídeo do YouTube
    const iframe = document.createElement('iframe');
    iframe.src = 'https://www.youtube.com/embed/x5pZI-DmtrE'; // Substitua VIDEO_ID pelo ID do vídeo do YouTube desejado
    iframe.width = '800';
    iframe.height = '500';
    iframe.allowFullscreen = true;

    // Crie um elemento div para envolver o iframe e criar o modal
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.appendChild(iframe);

    // Adicione o modal ao corpo do documento
    document.body.appendChild(modal);

    // Adicione um ouvinte de eventos de clique no modal para fechá-lo quando clicado fora do vídeo
    modal.addEventListener('click', function(event) {
      if (event.target === modal) {
        modal.remove();
      }
    });
  });

