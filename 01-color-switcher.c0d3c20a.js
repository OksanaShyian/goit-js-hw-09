!function(){var t=document.querySelector("body"),e=document.querySelector("button[data-start]"),n=document.querySelector("button[data-stop]"),o=null;e.addEventListener("click",(function(){o=setInterval((function(){t.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3,e.setAttribute("disabled",!0))})),n.addEventListener("click",(function(){clearInterval(o),e.removeAttribute("disabled",!0)}))}();
//# sourceMappingURL=01-color-switcher.c0d3c20a.js.map