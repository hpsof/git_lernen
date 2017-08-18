
function oeffnen(liste) {
    var index = liste.options.selectedIndex;
    console.log("index:" + index);
    if (index == 0) {
        return null ;   /* nothing to do */
    }
    document.getElementById("liste").selectedIndex = 0; /* auswahl resetten */
	var auswahl = liste.options[index];
	var text = auswahl.text;
	var value = auswahl.value;

	window.open(value);  /* echte wahl: link oeffnen in neuem tab */
}