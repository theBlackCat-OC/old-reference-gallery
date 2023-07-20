document.addEventListener('DOMContentLoaded', () => {
    const copyButton = document.querySelector('.copy-button');
    const codeSnippet = document.querySelector('code');
  
    copyButton.addEventListener('click', () => {
      const codeText = codeSnippet.textContent;
  
      navigator.clipboard.writeText(codeText)
        .then(() => {
          console.log('Code copied to clipboard');
        })
        .catch((err) => {
          console.error('Failed to copy code: ', err);
        });
    });
  });
  
  