const equipos = [
    {
      nombre: "Mercedes-AMG Petronas F1 Team",
      color: "#101820",
      pilotos: [
        {
          nombre: "George Russell",
          edad: 27,
          nacimiento: "15 de febrero de 1998",
          debut: 2019,
          numero: 63,
          pais: "Reino Unido",
          podios: 15,
          foto: "https://soymotor.com/sites/default/files/2025-03/grussell_2025.png"
        },
        {
          nombre: "Andrea Kimi Antonelli",
          edad: 18,
          nacimiento: "25 de agosto de 2006",
          debut: 2025,
          numero: 12,
          pais: "Italia",
          podios: 0,
          foto: "https://soymotor.com/sites/default/files/2025-03/kantonelli_2025.png"
        }
      ]
    },
    {
      nombre: "Aston Martin F1 Team",
      color: "#00665E",
      pilotos: [
        {
          nombre: "Fernando Alonso",
          edad: 43,
          nacimiento: "29 de julio de 1981",
          debut: 2001,
          numero: 14,
          pais: "España",
          podios: 106,
          foto: "https://soymotor.com/sites/default/files/2025-03/falonso_2025.png"
        },
        {
          nombre: "Lance Stroll",
          edad: 26,
          nacimiento: "29 de octubre de 1998",
          debut: 2017,
          numero: 18,
          pais: "Canadá",
          podios: 3,
          foto: "https://soymotor.com/sites/default/files/2025-03/lstroll_2025.png"
        }
      ]
    },
    {
      nombre: "Alpine F1 Team",
      color: "#FF87BC",
      pilotos: [
        {
          nombre: "Pierre Gasly",
          edad: 29,
          nacimiento: "7 de febrero de 1996",
          debut: 2017,
          numero: 10,
          pais: "Francia",
          podios: 5,
          foto: "https://soymotor.com/sites/default/files/2025-03/pgasly_2025.png"
        },
        {
          nombre: "Jack Doohan",
          edad: 22,
          nacimiento: "20 de enero de 2003",
          debut: 2025,
          numero: 7,
          pais: "Australia",
          podios: 0,
          foto: "https://soymotor.com/sites/default/files/2025-03/jdoohan_2025.png"
        }
      ]
    },
    {
      nombre: "Haas F1 Team",
      color: "#B6BABD",
      pilotos: [
        {
          nombre: "Esteban Ocon",
          edad: 28,
          nacimiento: "17 de septiembre de 1996",
          debut: 2016,
          numero: 31,
          pais: "Francia",
          podios: 4,
          foto: "https://soymotor.com/sites/default/files/2025-03/eocon_2025.png"
        },
        {
          nombre: "Oliver Bearman",
          edad: 19,
          nacimiento: "8 de mayo de 2005",
          debut: 2023,
          numero: 50,
          pais: "Reino Unido",
          podios: 0,
          foto: "https://soymotor.com/sites/default/files/2025-03/obearman_2025.png"
        }
      ]
    },
    {
      nombre: "Williams Racing",
      color: "#0085C7",
      pilotos: [
        {
          nombre: "Alexander Albon",
          edad: 29,
          nacimiento: "23 de marzo de 1996",
          debut: 2019,
          numero: 23,
          pais: "Tailandia",
          podios: 2,
          foto: "https://soymotor.com/sites/default/files/2025-03/aalbon_2025.png"
        },
        {
          nombre: "Carlos Sainz Jr.",
          edad: 30,
          nacimiento: "1 de septiembre de 1994",
          debut: 2015,
          numero: 55,
          pais: "España",
          podios: 18,
          foto: "https://soymotor.com/sites/default/files/2025-03/csainz_2025.png"
        }
      ]
    },
    {
      nombre: "Kick Sauber F1 Team",
      color: "#00E701",
      pilotos: [
        {
          nombre: "Nico Hülkenberg",
          edad: 37,
          nacimiento: "19 de agosto de 1987",
          debut: 2010,
          numero: 27,
          pais: "Alemania",
          podios: 0,
          foto: "https://soymotor.com/sites/default/files/2025-03/nhulkenberg_2025.png"
        },
        {
          nombre: "Gabriel Bortoleto",
          edad: 20,
          nacimiento: "14 de octubre de 2004",
          debut: 2025,
          numero: 5,
          pais: "Brasil",
          podios: 0,
          foto: "https://soymotor.com/sites/default/files/2025-03/gbortoleto_2025.png"
        }
      ]
    },
    {
      nombre: "Red Bull Racing",
      color: "#1E41FF",
      pilotos: [
        {
          nombre: "Max Verstappen",
          edad: 27,
          nacimiento: "30 de septiembre de 1997",
          debut: 2015,
          numero: 1,
          pais: "Países Bajos",
          podios: 112,
          foto: "https://soymotor.com/sites/default/files/2025-03/mverstappen_2025.png"
        },
        {
          nombre: "Yuki Tsunoda",
          edad: 24,
          nacimiento: "11 de mayo de 2000",
          debut: 2021,
          numero: 22,
          pais: "Japón",
          podios: 0,
          foto: "https://soymotor.com/sites/default/files/2025-03/yuki-tsunoda-red-bull-2025.png"
        }
      ]
    },
    {
      nombre: "Racing Bulls",
      color: "#00205B",
      pilotos: [
        {
          nombre: "Liam Lawson",
          edad: 23,
          nacimiento: "11 de febrero de 2002",
          debut: 2023,
          numero: 30,
          pais: "Nueva Zelanda",
          podios: 0,
          foto: "https://soymotor.com/sites/default/files/2025-03/liam-lawson-racing-bulls-2025.png"
        },
        {
          nombre: "Isack Hadjar",
          edad: 20,
          nacimiento: "28 de septiembre de 2004",
          debut: 2025,
          numero: 6,
          pais: "Francia",
          podios: 0,
          foto: "https://soymotor.com/sites/default/files/2025-03/ihadjar_2025.png"
        }
      ]
    },
    {
      nombre: "Ferrari",
      color: "#DC0000",
      pilotos: [
        {
          nombre: "Charles Leclerc",
          edad: 26,
          nacimiento: "16 de octubre de 1997",
          debut: 2018,
          numero: 16,
          pais: "Mónaco",
          podios: 20,
          foto: "https://soymotor.com/sites/default/files/2025-03/cleclerc_2025.png"
        },
        {
          nombre: "Lewis Hamilton",
          edad: 38,
          nacimiento: "7 de enero de 1985",
          debut: 2007,
          numero: 44,
          pais: "Reino Unido",
          podios: 103,
          foto: "https://soymotor.com/sites/default/files/2025-03/lhamilton_2025.png"
        }
      ]
    },
    {
      nombre: "McLaren F1 Team",
      color: "#FF8700",
      pilotos: [
        {
          nombre: "Lando Norris",
          edad: 24,
          nacimiento: "13 de noviembre de 1999",
          debut: 2019,
          numero: 4,
          pais: "Reino Unido",
          podios: 6,
          foto: "https://soymotor.com/sites/default/files/2025-03/lnorris_2025.png"
        },
        {
          nombre: "Oscar Piastri",
          edad: 22,
          nacimiento: "6 de abril de 2001",
          debut: 2023,
          numero: 81,
          pais: "Australia",
          podios: 0,
          foto: "https://soymotor.com/sites/default/files/2025-03/opiastri_2025.png"
        }
      ]
    }
  ];
  
  // Exportar como función para usar en rutas
  exports.listarEquiposConPilotos = (req, res) => {
    res.json(equipos);
  };
  
  