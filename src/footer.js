const renderFooter = (() => {

  const render = () => {

    const footer = document.createElement('footer');

    const footerContent = document.createElement('div');
    footer.appendChild(footerContent);
    footerContent.innerHTML += 'Copyright &copy;';
    const script = document.createElement('script');
    script.textContent = `document.write(new Date().getFullYear());`;
    footerContent.appendChild(script);
    footerContent.innerHTML += `&nbsp; | &nbsp; Created by Hawk Dykes &nbsp; | &nbsp;`;
    const a = document.createElement('a');
    a.setAttribute('href', 'https://github.com/hd505495');
    a.setAttribute('target', '_blank');
    a.classList.add('github-link');
    const githubIcon = document.createElement('i');
    githubIcon.classList.add('fab');
    githubIcon.classList.add('fa-github');
    a.appendChild(githubIcon);
    a.innerHTML += ' hd505495 ';
    footerContent.appendChild(a);

    return footer;
  }

  return {render};

})();

export {renderFooter};