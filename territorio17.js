// =============================
// === Territorio 17 ===
// =============================

var datosTerritorio17 = {
    id: "territorio17",
    numeroTerritorio: 17, // Número que se mostrará en el marcador principal
    poligonos: [
        {
            id: "Cuadra1_Territorio17",
            coords: [
                [[28.611474, -106.079081], [28.610608, -106.079728], [28.610351, -106.079277], [28.611218, -106.078626]]
            ],
            color: "blue",
            fillOpacity: 0.8,
            weight: 2,
            label: "1",
            link: "https://maps.app.goo.gl/F9LerT8FkfDYdTQm6"
        },
        {
            id: "Cuadra2_Territorio17",
            coords: [
                [[28.611181, -106.078585], [28.610329, -106.079218], [28.610090, -106.078753], [28.610926, -106.078134]]
            ],
            color: "blue",
            fillOpacity: 0.8,
            weight: 2,
            label: "2",
            link: "https://maps.app.goo.gl/DjAVtkseeDsGDYLV8"
        },
        {
            id: "Cuadra3_Territorio17",
            coords: [
                [[28.610889, -106.078071], [28.610057, -106.078690], [28.609820, -106.078255], [28.610649, -106.077640]]
            ],
            color: "blue",
            fillOpacity: 0.8,
            weight: 2,
            label: "3",
            link: "https://maps.app.goo.gl/VVo8CcDCe63mSTAP8"
        },
        {
            id: "Cuadra4_Territorio17",
            coords: [
                [[28.610611, -106.077579], [28.609788, -106.078199], [28.609538, -106.077762], [28.610377, -106.077157]]
            ],
            color: "blue",
            fillOpacity: 0.8,
            weight: 2,
            label: "4",
            link: "https://maps.app.goo.gl/NE9AYcRK3foXrC4J9"
        }
    ],
};

// ------------------------------
// Crear territorio con base
// ------------------------------
var territorio17Data = crearTerritorio(datosTerritorio17);
var territorio17 = territorio17Data.grupo;

// ------------------------------
// Crear marcador inicial del territorio (número)
// ------------------------------
var polFijo = datosTerritorio17.poligonos.find(p => p.id === "Cuadra3_Territorio17");
var centro = L.polygon(polFijo.coords).getBounds().getCenter();

var marcadorTerritorio17 = L.marker(centro, {
    icon: L.divIcon({
        className: "etiquetaTerritorio",
        html: `<b>${datosTerritorio17.numeroTerritorio}</b>`,
        iconSize: [20, 20]
    })
}).addTo(map);

// Guardamos la referencia en el grupo para poder ocultarla desde index
territorio17._marcadorTerritorio = marcadorTerritorio17;
