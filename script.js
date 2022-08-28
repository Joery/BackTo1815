walk(document.body);

function walk(node) {
  var child, next;

  switch (node.nodeType) {
    case 1:
    case 9:
    case 11:
      child = node.firstChild;
      while (child) {
        next = child.nextSibling;
        walk(child);
        child = next;
      }
      break;

    case 3:
      handleText(node);
      break;
  }
}

function handleText(textNode) {
  var v = textNode.nodeValue;

  // Dutch
  v = v.replace("België", "Zuid-Nederland");
  v = v.replace("Belgen", "Zuid-Nederlanders");
  v = v.replace("Belgische", "Zuid-Nederlandse");
  v = v.replace("Belgisch", "Zuid-Nederlands");
  // English
  v = v.replace("Belgium", "South-Netherlands");
  v = v.replace("Belgians", "South-Dutchmen");
  v = v.replace("Belgian", "South-Dutchman");
  // French
  v = v.replace("Belgique", "Sud des Pays-Bas");
  // German
  v = v.replace("Belgien", "Süd-Niederlande");

  textNode.nodeValue = v;
}
