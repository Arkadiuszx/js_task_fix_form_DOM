document.querySelectorAll("form input").forEach(function(e){var t=document.createElement("label");t.setAttribute("for",e.id),t.classList.add("field-label"),t.textContent=e.name.replace(/([A-Z])/g," $1").replace(/^./,function(e){return e.toUpperCase()}),e.parentNode.insertBefore(t,e),e.placeholder=t.textContent});
//# sourceMappingURL=index.bfc45315.js.map
