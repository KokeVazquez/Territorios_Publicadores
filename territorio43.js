// =============================
// === Territorio 43 ===
// =============================

var datosTerritorio43 = {
    id: "territorio43",
    numeroTerritorio: 43, // Número que se mostrará en el marcador principal
    poligonos: [
        {
            id: "Cuadra1_Territorio43",
            coords: [
                [[28.609567, -106.068893], [28.609313, -106.068465], [28.608444, -106.069106], [28.608683, -106.069517]]
            ],
            color: "rgba(255, 7, 7, 1)",
            fillOpacity: 0.8,
            weight: 2,
            label: "1",
            link: "https://maps.app.goo.gl/fiqvHUKxksNnxL6Y7"
        },
        {
            id: "Cuadra2_Territorio43",
            coords: [
                [[28.609274, -106.068406], [28.609009, -106.067942], [28.608144, -106.068587], [28.608404, -106.069050]]
            ],
            color: "rgba(255, 7, 7, 1)",
            fillOpacity: 0.8,
            weight: 2,
            label: "2",
            link: "https://maps.app.goo.gl/XyJKyKLFGDjRQfsP8"
        },
        {
            id: "Cuadra3_Territorio43",
            coords: [
                [[28.608972, -106.067880], [28.608700, -106.067433], [28.607833, -106.068053], [28.608104, -106.068527]]
            ],
            color: "rgba(255, 7, 7, 1)",
            fillOpacity: 0.8,
            weight: 2,
            label: "3",
            link: "https://maps.app.goo.gl/fAexJ5BF6x6iv1dw8"
        },
        {
            id: "Cuadra4_Territorio43",
            coords: [
                [[28.608662, -106.067369], [28.608408, -106.066951], [28.607555, -106.067561], [28.607795, -106.067992]]
            ],
            color: "rgba(255, 7, 7, 1)",
            fillOpacity: 0.8,
            weight: 2,
            label: "4",
            link: "https://maps.app.goo.gl/L3yQUabiYvvNYAbT7"
        }
    ],
};

// ------------------------------
// Crear territorio con base
// ------------------------------
var territorio43Data = crearTerritorio(datosTerritorio43);
var territorio43 = territorio43Data.grupo;

// ------------------------------
// Crear marcador inicial del territorio (número)
// ------------------------------
var polFijo = datosTerritorio43.poligonos.find(p => p.id === "Cuadra3_Territorio43");
var centro = L.polygon(polFijo.coords).getBounds().getCenter();

var marcadorTerritorio43 = L.marker(centro, {
    icon: L.divIcon({
        className: "etiquetaTerritorio",
        html: `<b>${datosTerritorio43.numeroTerritorio}</b>`,
        iconSize: [20, 20]
    })
}).addTo(map);

// Guardamos la referencia en el grupo para poder ocultarla desde index
territorio43._marcadorTerritorio = marcadorTerritorio43;
