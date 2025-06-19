# screen-reader-view-bookmarklet
Bookmarklet to visually show the effect of aria-hidden and visually hidden content on gov.uk webpages

## How to use

Make a new bookmark in your browser (right-click on the bookmarks bar and click `Add Page...`)

Enter a suitable "Name", for example "Screen reader view".

Copy the code block below and paste this into the "Location" of the new bookmark.

```
javascript:var x=document.querySelectorAll("[aria-label]");x.forEach((e)=>{e.text=e.getAttribute('aria-label');});(function(){document.head.insertAdjacentHTML("beforeend", `<style>.govuk-visually-hidden{all:unset !important;}*[aria-hidden]{display:none !important;}</style>`);})();
```

## What does this do?

Activating the bookmark will:

1. Apply the following CSS styles to the current webpage:

```
.govuk-visually-hidden {
  all: unset !important;
}

*[aria-hidden] {
  display: none !important;
}
```

2. Replace any text node content with theeir defined aria-label alternative:

```
const ariaLabels = document.querySelectorAll("[aria-label]");

ariaLabels.forEach((element) => {  
  element.text = element.getAttribute('aria-label');
});
```

const x=document.querySelectorAll("[aria-label]");x.forEach((e)=>{e.text=e.getAttribute('aria-label');});
