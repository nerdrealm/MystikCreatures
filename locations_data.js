const PLANET_LOCATIONS = [
  {
    name: "Arid Wastes",
    image: "CardImages/Locations/Arid Wastes.png"
  },
  {
    name: "Astral Gate",
    image: "CardImages/Locations/Astral Gate.png"
  },
  {
    name: "Bleached Dunes",
    image: "CardImages/Locations/Bleached Dunes.png"
  },
  {
    name: "Cathedral of Aethelgrad",
    image: "CardImages/Locations/Cathedral of Aethelgrad.png"
  },
  {
    name: "Cinder-Plateau",
    image: "CardImages/Locations/Cinder-Plateau.png"
  },
  {
    name: "Coasts of Jimbora",
    image: "CardImages/Locations/Coasts of Jimbora.png"
  },
  {
    name: "Cobalt Shoals",
    image: "CardImages/Locations/Cobalt Shoals.png"
  },
  {
    name: "Cypress-Hollows",
    image: "CardImages/Locations/Cypress-Hollows.png"
  },
  {
    name: "Dragon Tail Isles",
    image: "CardImages/Locations/Dragon Tail Isles.png"
  },
  {
    name: "Drowning Coast",
    image: "CardImages/Locations/Drowning Coast.png"
  },
  {
    name: "Forbidden Archives",
    image: "CardImages/Locations/Forbidden Archives.png"
  },
  {
    name: "Forest of Nura",
    image: "CardImages/Locations/Forest of Nura.png"
  },
  {
    name: "Forests of Rehm",
    image: "CardImages/Locations/Forests of Rehm.png"
  },
  {
    name: "Forests of Noctu",
    image: "CardImages/Locations/Forests of Noctu.png"
  },
  {
    name: "Gale-Roost",
    image: "CardImages/Locations/Gale-Roost.png"
  },
  {
    name: "Gloom-Hollow",
    image: "CardImages/Locations/Gloom-Hollow.png"
  },
  {
    name: "Golden Dunes",
    image: "CardImages/Locations/Golden Dunes.png"
  },
  {
    name: "Granalith",
    image: "CardImages/Locations/Granalith.png"
  },
  {
    name: "Infernal Keep",
    image: "CardImages/Locations/Infernal Keep.png"
  },
  {
    name: "Ironwood Forest",
    image: "CardImages/Locations/Ironwood Forest.png"
  },
  {
    name: "Jimbora",
    image: "CardImages/Locations/Jimbora.png"
  },
  {
    name: "Kuroseki",
    image: "CardImages/Locations/Kuroseki.png"
  },
  {
    name: "Gulf of Wyrzel",
    image: "CardImages/Locations/Gulf of Wyrzel.png"
  },
  {
    name: "Midnight Grove",
    image: "CardImages/Locations/Midnight Grove.png"
  },
  {
    name: "Midnight Thicket",
    image: "CardImages/Locations/Midnight Thicket.png"
  },
  {
    name: "Molten Basin",
    image: "CardImages/Locations/Molten Basin.png"
  },
  {
    name: "Mountains of Eurotha",
    image: "CardImages/Locations/Mountains of Eurotha.png"
  },
  {
    name: "Volcanoes of Westura",
    image: "CardImages/Locations/Volcanoes of Westura.png"
  },
  {
    name: "Noxivar Black Sea",
    image: "CardImages/Locations/Noxivar Black Sea.png"
  },
  {
    name: "Nura",
    image: "CardImages/Locations/Nura.png"
  },
  {
    name: "Obsidian City",
    image: "CardImages/Locations/Obsidian City.png"
  },
  {
    name: "Oceans of Nimbitu",
    image: "CardImages/Locations/Oceans of Nimbitu.png"
  },
  {
    name: "Plains of Akatah",
    image: "CardImages/Locations/Plains of Akatah.png"
  },
  {
    name: "Rottide Swamp",
    image: "CardImages/Locations/Rottide Swamp.png"
  },
  {
    name: "Rottenham",
    image: "CardImages/Locations/Rottenham.png"
  },
  {
    name: "Sanctuary of the Eclipsed Sun",
    image: "CardImages/Locations/Sanctuary of the Eclipsed Sun.png"
  },
  {
    name: "Sanctum of Fractured Hours",
    image: "CardImages/Locations/Sanctum of Fractured Hours.png"
  },
  {
    name: "Scorchlands",
    image: "CardImages/Locations/Scorchlands.png"
  },
  {
    name: "Seas of Aurelith",
    image: "CardImages/Locations/Seas of Aurelith.png"
  },
  {
    name: "Shattered Pole",
    image: "CardImages/Locations/Shattered Pole.png"
  },
  {
    name: "Spires of Lumos",
    image: "CardImages/Locations/Spires of Lumos.png"
  },
  {
    name: "Star-Forge",
    image: "CardImages/Locations/Star-Forge.png"
  },
  {
    name: "Zhien Po",
    image: "CardImages/Locations/Zhien Po.png"
  },
  {
    name: "Sunken Shelves",
    image: "CardImages/Locations/Sunken Shelves.png"
  },
  {
    name: "Thaloryn Inner Sea",
    image: "CardImages/Locations/Thaloryn Inner Sea.png"
  },
  {
    name: "Vaelen Expanse",
    image: "CardImages/Locations/Vaelen Expanse.png"
  },
  {
    name: "Valhorian Peaks",
    image: "CardImages/Locations/Valhorian Peaks.png"
  },
  {
    name: "Velmora",
    image: "CardImages/Locations/Velmora.png"
  },
  {
    name: "Viridian Scar",
    image: "CardImages/Locations/Viridian Scar.png"
  },
  {
    name: "Vol-Darah",
    image: "CardImages/Locations/Vol-Darah.png"
  },
  {
    name: "Weeping Thicket",
    image: "CardImages/Locations/Weeping Thicket.png"
  },
  {
    name: "Lake Sivel",
    image: "CardImages/Locations/Lake Sivel.png"
  },
  {
    name: "Lake Orath",
    image: "CardImages/Locations/Lake Orath.png"
  },
  {
    name: "Nile",
    image: "CardImages/Locations/Nile.png"
  },
  {
    name: "Gulf of Netuhsa",
    image: "CardImages/Locations/Gulf of Netuhsa.png"
  },
  {
    name: "Thaloryn Outer Sea",
    image: "CardImages/Locations/Thaloryn Outer Sea.png"
  },
  {
    name: "Mount Ilyeiad",
    image: "CardImages/Locations/Mount Ilyeiad.png"
  },
  {
    name: "Wastelands",
    image: "CardImages/Locations/Wastelands.png"
  },
  {
    name: "Bog-lands",
    image: "CardImages/Locations/Bog-lands.png"
  },
  {
    name: "Port of Us'ah",
    image: "CardImages/Locations/Port of Us'ah.png"
  },
  {
    name: "Thelsix",
    image: "CardImages/Locations/Thelsix.png"
  }
];