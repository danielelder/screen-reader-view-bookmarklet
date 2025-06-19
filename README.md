# screen-reader-view-bookmarklet
Bookmarklet to visually show the effect of aria-hidden and visually hidden content on gov.uk webpages

## How to use

Make a new bookmark in your browser (right-click on the bookmarks bar and click `Add Page...`)

Enter a suitable "Name", for example "Screen reader view".

Copy the code block below and paste this into the "Location" of the new bookmark.

```
javascript:(function(){document.head.insertAdjacentHTML("beforeend", `<style>.govuk-visually-hidden{all:unset !important;}*[aria-hidden]{display:none !important;}</style>`)})();
```

## What does this do?

Activating the bookmark will apply the following CSS styles to the current webpage:

```
.govuk-visually-hidden {
  all: unset !important;
}

*[aria-hidden] {
  display: none !important;
}
```
