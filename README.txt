Winston & Almira - Wedding Invitation Website
=============================================
Open index.html in a browser (or use the "Live Server" extension in VS Code).

Files
  index.html       page content (names, venues, dates, text)
  css/style.css    all colors and layout (colors are variables at the top, see :root)
  js/script.js     countdown, calendar, envelope opening, interactions
  images/          flowers, envelope layers, invitation card, wax seal
  fonts/           bundled fonts (Ballet, Pinyon Script, Cormorant Garamond)

Easy edits
  Wedding date/countdown : search "2027-01-21" in js/script.js
  Names, venues, text    : index.html
  Colors                 : :root block in css/style.css
Fonts are bundled in the fonts/ folder, so the invitation works offline.

Type system
  Names + subheadings : Ballet
  Section headings    : Pinyon Script
  Body text, dates    : Cormorant Garamond

Envelope
  Seal position       : .seal (top/left) in css/style.css
  Card rise height    : #env.opening .invite (translateY) in css/style.css
