// =============================
// === Territorio 18 ===
// =============================

var datosTerritorio18 = {
    id: "territorio18",
    numeroTerritorio: 18, // Número que se mostrará en el marcador principal
    poligonos: [
        {
            id: "Cuadra1_Territorio18",
            coords: [
                [[28.610344, -106.077095], [28.609504, -106.077705], [28.609219, -106.077221], [28.610064, -106.076630]]
            ],
            color: "fuchsia",
            fillOpacity: 0.8,
            weight: 2,
            label: "1",
            link: "https://maps.app.goo.gl/mYZBBLUZQ6YrXP9V9"
        },
        {
            id: "Cuadra2_Territorio18",
            coords: [
                [[28.610029, -106.076565], [28.609181, -106.077161], [28.608902, -106.076682], [28.609744, -106.076071]]
            ],
            color: "fuchsia",
            fillOpacity: 0.8,
            weight: 2,
            label: "2",
            link: "https://maps.app.goo.gl/2TcF3S7v13MYGDvm9"
        },
        {
            id: "Cuadra3_Territorio18",
            coords: [
                [[28.609715, -106.076014], [28.608868, -106.076620], [28.608601, -106.076189], [28.609459, -106.075570]]
            ],
            color: "fuchsia",
            fillOpacity: 0.8,
            weight: 2,
            label: "3",
            link: "https://maps.app.goo.gl/dn9ytiLhg3KkkpeS7"
        },
        {
            id: "Cuadra4_Territorio18",
            coords: [
                [[28.609422, -106.075510], [28.608566, -106.076134], [28.608321, -106.075711], [28.609168, -106.075078]]
            ],
            color: "fuchsia",
            fillOpacity: 0.8,
            weight: 2,
            label: "4",
            link: "https://maps.app.goo.gl/TvZSeFAJVM9DoXKy5"
        }
    ],
};

// ------------------------------
// Crear territorio con base
// ------------------------------
var territorio18Data = crearTerritorio(datosTerritorio18);
var territorio18 = territorio18Data.grupo;

// ------------------------------
// Crear marcador inicial del territorio (número)
// ------------------------------
var polFijo = datosTerritorio18.poligonos.find(p => p.id === "Cuadra3_Territorio18");
var centro = L.polygon(polFijo.coords).getBounds().getCenter();

var marcadorTerritorio18 = L.marker(centro, {
    icon: L.divIcon({
        className: "etiquetaTerritorio",
        html: `<b>${datosTerritorio18.numeroTerritorio}</b>`,
        iconSize: [20, 20]
    })
}).addTo(map);

// Guardamos la referencia en el grupo para poder ocultarla desde index
territorio18._marcadorTerritorio = marcadorTerritorio18;
