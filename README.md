NotesApp, ohjeet ja toiminnot

---

VAADITTAVAT:
"@reduxjs/toolkit": "^2.4.0",
"axios": "^1.7.8",
"react": "^18.3.1",
"react-dom": "^18.3.1",
"react-redux": "^9.1.2",
"react-router-dom": "^7.0.2"

Tyyleissä käytetty TailwindCSS:ää

Asentuvat antamalla komennon "npm install"

Kehitysversio käynnistyy komennolla "npm run dev"

---

TOIMINNOT:

Navigointi onnistuu yläosan linkeistä

Muistiinpanojen lisääminen:
-Valittuna kurssi ja mp:n pituus > 0

Muistiinpanojen listaaminen:
-Alasvetovalikosta valitaan kurssi, jonka muistiinpanot halutaan nähdä
-Yksittäisen kurssin poistaminen onnistuu "poista" painikkeesta

Kurssien lisääminen:
-Lisätään antamalla kursin nimi ja painamalla "Lisää kurssi" painiketta
-Uuden kurssin nimen pituus > 0
-Mp:n lisääminen lukitsee kurssin, uusi sessio painikkeesta "Uusi sessio" tai poistumalla ja palaamalla sivulle

---

Muistiinpanot ja kurssit haetaan APIsta
Uudet muistiinpanot ja kurssit tallennetaan Redux Toolkit sliceihin
