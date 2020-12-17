function app(): HTMLElement { 
  const element = document.createElement('p');
  element.innerHTML = "Hello TypeScript!!"
  return element;
}

export default app;