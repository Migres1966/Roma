# Art etrusc i romà · Web per a GitHub Pages

Web estàtica en valencià, preparada per a publicar-se sense instal·lar dependències ni executar cap procés de compilació.

## Publicació

1. Descomprimix el ZIP.
2. Puja **el contingut** de la carpeta `roma-web-github` al repositori que utilitzaràs. `index.html`, `obres-pau.html`, `.nojekyll` i `assets/` han de quedar al mateix nivell.
3. En el repositori, entra en **Settings → Pages**.
4. En **Build and deployment → Source**, selecciona **Deploy from a branch**.
5. Tria la branca on has pujat els fitxers (habitualment `main`) i la carpeta **/(root)**. Guarda amb **Save**.
6. GitHub mostrarà l’adreça publicada en eixa mateixa pantalla.

Si el repositori ja conté una web, pots posar estos fitxers en una subcarpeta, conservant-ne l’estructura. La ruta d’accés serà la d’eixa subcarpeta. Les rutes de les imatges, dels fulls d’estil i dels scripts són relatives.

[Instruccions oficials de GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## Contingut i navegació

- Huit capítols amb el text complet del dossier, conservat en el mateix orde.
- Nové apartat amb les 13 obres PAU, els comentaris i les galeries del recurs anterior.
- Tres mapes de context: Etrúria, Imperi romà i Hispània.
- Fotografies, plantes i detalls integrats al costat del text corresponent.
- Visor d’imatges: clic per a ampliar; fletxes per a canviar d’imatge; ampliació addicional 2×; `Esc` per a tancar.
- Índex lateral en ordinador i menú «Índex» en mòbil.
- Cercador i filtres en el catàleg PAU.
- Estils d’impressió i accés al PDF original.

## Fitxers principals

- `index.html`: web completa.
- `obres-pau.html`: recurs anterior complet com a pàgina independent.
- `assets/css/site.css`: disseny general i adaptació a mòbil i impressió.
- `assets/css/pau.css`: estils del catàleg i del visor.
- `assets/js/site.js`: índex mòbil, apartat actiu i indicador de lectura.
- `assets/js/galeries-pau.js`: visor, galeries, cercador i desplegables.
- `assets/img/`: 45 imatges locals, compartides pels apartats per a evitar duplicacions.
- `assets/docs/dossier-original.pdf`: document de referència.
- `CREDITS.md`: procedència, autoria i llicència de les imatges.
- `.nojekyll`: indica que els fitxers s’han de servir directament.

## Edició

El text és en l’HTML; els blocs del dossier tenen `class="dossier-text"` i un atribut `data-block` per a facilitar-ne la localització. Les imatges s’organitzen en figures amb peus descriptius. Es poden modificar colors, tipografia, amplàries i espaiats a `assets/css/site.css`.

Totes les imatges estan incloses en `assets/img/`. La consulta del contingut i les ampliacions funcionen localment i sense connexió quan es conserva la carpeta completa. Els enllaços a fonts externes necessiten Internet.

S’han conservat les formulacions i les dades del dossier original. Les imatges, els peus, la navegació i la presentació s’han afegit per a esta edició digital. No s’han incorporat activitats ni preguntes.

## Comprovacions

S’ha verificat la correspondència completa dels 116 blocs de text amb el cos del PDF (pàgines 3–15), inclosos els paràgrafs que continuen en la pàgina següent. S’han comprovat els recursos locals, la sintaxi de JavaScript, el disseny en ordinador i mòbil, l’índex i el visor.
