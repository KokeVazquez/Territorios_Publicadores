// =============================
// === Territorio 28 ===
// =============================

var datosTerritorio28 = {
    id: "territorio28",
    numeroTerritorio: 28, // Número que se mostrará en el marcador principal
    poligonos: [
        {
            id: "Cuadra1_Territorio28",
            coords: [
                [[28.608635, -106.071880], [28.608891, -106.072342], [28.608051, -106.072945], [28.607774, -106.072468]]
            ],
            color: "rgb(64,224,208)",
            fillOpacity: 0.8,
            weight: 2,
            label: "1",
            link: "https://maps.app.goo.gl/XmjTo9vzTVBuWhKw7"
        },
        {
            id: "Cuadra2_Territorio28",
            coords: [
                [[28.608609, -106.071828], [28.607750, -106.072423], [28.607501, -106.071967], [28.608344, -106.071366]]
            ],
            color: "rgb(64,224,208)",
            fillOpacity: 0.8,
            weight: 2,
            label: "2",
            link: "https://maps.app.goo.gl/jdFw2594AtK8r9wG8"
        },
        {
            id: "Cuadra3_Territorio28",
            coords: [
                [[28.608315, -106.071316], [28.607460, -106.071927], [28.607197, -106.071442], [28.608043, -106.070825]]
            ],
            color: "rgb(64,224,208)",
            fillOpacity: 0.8,
            weight: 2,
            label: "3",
            link: "https://maps.app.goo.gl/jdFw2594AtK8r9wG8"
        },
        {
            id: "Cuadra4_Territorio28",
            coords: [
                [[28.608018, -106.070770], [28.607167, -106.071397], [28.606909, -106.070921], [28.607770, -106.070304]]
            ],
            color: "rgb(64,224,208)",
            fillOpacity: 0.8,
            weight: 2,
            label: "4",
            link: "https://maps.app.goo.gl/cLoQPAbPnuMbFb6x9"
        }
    ],
};

// ------------------------------
// Crear territorio con base
// ------------------------------
var territorio28Data = crearTerritorio(datosTerritorio28);
var territorio28 = territorio28Data.grupo;

// ------------------------------
// Crear marcador inicial del territorio (número)
// ------------------------------
var polFijo = datosTerritorio28.poligonos.find(p => p.id === "Cuadra3_Territorio28");
var centro = L.polygon(polFijo.coords).getBounds().getCenter();

var marcadorTerritorio28 = L.marker(centro, {
    icon: L.divIcon({
        className: "etiquetaTerritorio",
        html: `<b>${datosTerritorio28.numeroTerritorio}</b>`,
        iconSize: [20, 20]
    })
}).addTo(map);

// Guardamos la referencia en el grupo para poder ocultarla desde index
territorio28._marcadorTerritorio = marcadorTerritorio28;
