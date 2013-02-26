reload_css
==========

A bookmarklet to reload a page's CSS without reloading the entire page.

Here's the bookmarklet-ized version (created with [this handy tool](http://ted.mielczarek.org/code/mozilla/bookmarklet.html)):

    javascript:(function()%20%7Bvar%20links%20=%20document.getElementsByTagName(%22link%22);for%20(var%20i%20=%200;%20i%20%3C%20links.length;%20i++)%20%7Bif%20(links%5Bi%5D.rel%20===%20%22stylesheet%22)%20%7Bif%20(links%5Bi%5D.href.indexOf(%22?%22)%20===%20-1)%20%7Blinks%5Bi%5D.href%20+=%20%22?%22;%7Dlinks%5Bi%5D.href%20+=%20%22x%22;%7D%7D%7D)()

Create a new bookmark in your browser and drag that code in. Unfortunately, I can't figure
out how to create a nice draggable bookmarklet link in Markdown.