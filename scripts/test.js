$(document).ready(function () { // ← page ready event

    // ↓ action snippets ↓
    if (window.matchMedia("(max-width: 500)").matches) { // ← get browser width

        // ↓ action snippets (< width) ↓
        console.log("page ready");
        // ↑ action snippets (< width) ↑

    } else { // ← get browser width

        // ↓ action snippets (> width) ↓
        console.log("page ready");
        // ↑ action snippets (> width) ↑

    } // ← get browser width

    // ↑ action snippets ↑

}); // ← page ready event
