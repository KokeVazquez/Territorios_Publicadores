// =============================
// === Territorio 23 ===
// =============================

var datosTerritorio23 = {
    id: "territorio23",
    numeroTerritorio: 23, // Número que se mostrará en el marcador principal
    poligonos: [
        {
            id: "Cuadra1_Territorio23",
            coords: [
                [[28.614650, -106.082449], [28.613828, -106.083035], [28.613589, -106.082607], [28.614425, -106.081997]]
            ],
            color: "blue",
            fillOpacity: 0.8,
            weight: 2,
            label: "1",
            link: "https://maps.app.goo.gl/y9aQW9JDVyAvwHzZ8"
        },
        {
            id: "Cuadra2_Territorio23",
            coords: [
                [[28.614384, -106.081927], [28.613548, -106.082541], [28.613321, -106.082142], [28.614161, -106.081525]]
            ],
            color: "blue",
            fillOpacity: 0.8,
            weight: 2,
            label: "2",
            link: "https://maps.app.goo.gl/H2v7TQUYxwxLG6WC6"
        },
        {
            id: "Cuadra3_Territorio23",
            coords: [
                [[28.614103, -106.081416], [28.613256, -106.082037], [28.613046, -106.081667], [28.613886, -106.081071]]
            ],
            color: "blue",
            fillOpacity: 0.8,
            weight: 2,
            label: "3",
            link: "https://maps.app.goo.gl/NMLZFhmPgTbmLhEn7"
        },
        {
            id: "Cuadra4_Territorio23",
            coords: [
                [[28.613864, -106.081003], [28.613009, -106.081605], [28.612794, -106.081223], [28.613625, -106.080585]]
            ],
            color: "blue",
            fillOpacity: 0.8,
            weight: 2,
            label: "4",
            link: "https://maps.app.goo.gl/n6R6gppbAg7mBCPs9"
        }
    ],
};

// ------------------------------
// Crear territorio con base
// ------------------------------
var territorio23Data = crearTerritorio(datosTerritorio23);
var territorio23 = territorio23Data.grupo;

// ------------------------------
// Crear marcador inicial del territorio (número)
// ------------------------------
var polFijo = datosTerritorio23.poligonos.find(p => p.id === "Cuadra3_Territorio23");
var centro = L.polygon(polFijo.coords).getBounds().getCenter();

var marcadorTerritorio23 = L.marker(centro, {
    icon: L.divIcon({
        className: "etiquetaTerritorio",
        html: `<b>${datosTerritorio23.numeroTerritorio}</b>`,
        iconSize: [20, 20]
    })
}).addTo(map);

// Guardamos la referencia en el grupo para poder ocultarla desde index
territorio23._marcadorTerritorio = marcadorTerritorio23;
