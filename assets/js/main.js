const dropItems = document.getElementById('drop-items');

new Sortable(dropItems, {
    animation: 300,
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
});