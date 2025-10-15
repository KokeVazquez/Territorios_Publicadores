// =============================
// === Territorio 22 ===
// =============================

var datosTerritorio22 = {
    id: "territorio22",
    numeroTerritorio: 22, // Número que se mostrará en el marcador principal
    poligonos: [
        {
            id: "Cuadra1_Territorio22",
            coords: [[28.614713, -106.083654], [28.614397, -106.084045], [28.613861, -106.083101], [28.614253, -106.082814]
            ],
            color: "rgb(64,224,208)",
            fillOpacity: 0.8,
            weight: 2,
            label: "1",
            link: "https://maps.app.goo.gl/hoyTFrhhk2V7nPiP6"
        },
        {
            id: "Cuadra2_Territorio22",
            coords: [[28.615082, -106.083185], [28.614794, -106.083663], [28.614307, -106.082772], [28.614694, -106.082512]
            ],
            color: "rgb(64,224,208)",
            fillOpacity: 0.8,
            weight: 2,
            label: "2",
            link: "https://maps.app.goo.gl/V1BBrFserrMeHjAE8"
        },
        {
            id: "Cuadra3_Territorio22",
            coords: [[28.615335, -106.082520], [28.615112, -106.083115], [28.614745, -106.082468], [28.615122, -106.082191]
            ],
            color: "rgb(64,224,208)",
            fillOpacity: 0.8,
            weight: 2,
            label: "3",
            link: "https://maps.app.goo.gl/6fPL7WCvwZxbWWkB9"
        },
        {
            id: "Cuadra4_Territorio22",
            coords: [[28.615476, -106.081943], [28.615361, -106.082441], [28.615179, -106.082159]
            ],
            color: "rgb(64,224,208)",
            fillOpacity: 0.8,
            weight: 2,
            label: "4",
            link: "https://maps.app.goo.gl/FamA74hNLsgjr1P36"
        }
    ],
};

// ------------------------------
// Crear territorio con base
// ------------------------------
var territorio22Data = crearTerritorio(datosTerritorio22);
var territorio22 = territorio22Data.grupo;

// ------------------------------
// Crear marcador inicial del territorio (número)
// ------------------------------
var polFijo = datosTerritorio22.poligonos.find(p => p.id === "Cuadra2_Territorio22");
var centro = L.polygon(polFijo.coords).getBounds().getCenter();

var marcadorTerritorio22 = L.marker(centro, {
    icon: L.divIcon({
        className: "etiquetaTerritorio",
        html: `<b>${datosTerritorio22.numeroTerritorio}</b>`,
        iconSize: [20, 20]
    })
}).addTo(map);

// Guardamos la referencia en el grupo para poder ocultarla desde index
territorio22._marcadorTerritorio = marcadorTerritorio22;
