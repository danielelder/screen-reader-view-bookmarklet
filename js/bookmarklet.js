(function(){
  var ariaLabels = document.querySelectorAll("[aria-label]");
  ariaLabels.forEach((element) => {
    if (element.nodeName === "NAV") {
      return;
    }
    if (element.children.length > 0) {
      var children = element.children;
      for (const node of children) {
        node.style.display = "none";
      }
      element.insertAdjacentHTML("beforeend",`<span data-a11y-text>` + element.getAttribute('aria-label') + `</span>`);
    }
    else {
      element.innerText = element.getAttribute('aria-label');
    }
  });

  var observer = new MutationObserver(mutations => {
    mutations.forEach(record => {
      if (record.target.children.length > 0) {
        record.target.querySelector('[data-a11y-text]').innerText = record.target.getAttribute('aria-label');
      }
      else {
        record.target.innerText = record.target.getAttribute('aria-label');
      }
    });
  });

  observer.observe(document.body, {
    attributes: true,
    attributeFilter: ['aria-label'],
    subtree: true
  });
  
  document.head.insertAdjacentHTML("beforeend", `
    <style>
      .govuk-visually-hidden:not([style="display: none;"]) {
        all:unset !important;
      }
      *[aria-hidden] {
        display:none !important;
      }
    </style>`
  );
})();
