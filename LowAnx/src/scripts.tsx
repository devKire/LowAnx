export function splitTextIntoSpans(target: string): void {
    let elements = document.querySelectorAll(target) as NodeListOf<HTMLElement>;
    elements.forEach((element) => {
      element.classList.add('split-text');
      let text = element.innerText;
      let splitText = text
        .split(" ")
        .map(function (word) {
          let char = word.split('').map(char => {
            return `<span class="split-char">${char}</span>`;
          }).join('');
          return `<div class="split-word">${char}&nbsp</div>`;
        }).join('');
  
      element.innerHTML = splitText;
    });
  }
  