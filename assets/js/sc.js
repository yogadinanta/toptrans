  const scrollContent = document.getElementById("scrollContent");
  const template = document.getElementById("logoGroup");
  
  for (let i = 0; i < 2; i++) {
    const clone = template.content.cloneNode(true);
    scrollContent.appendChild(clone);
  }