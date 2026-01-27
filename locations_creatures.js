const LOCATION_CREATURES = {
  "Arid Wastes": [
    { name: "Orkarena", type: "Earth", images: { small: "CardImages/Creatures/Earth/Orkarena1.png" } },
    { name: "Hatchling", type: "Wind", images: { small: "CardImages/Creatures/Wind/Hatchling1.png" } },
    { name: "Sand Bear", type: "Earth", images: { small: "CardImages/Creatures/Earth/SandBear1.png" } },
    { name: "Ushi-oni", type: "Earth", images: { small: "CardImages/Creatures/Earth/Ushi-oni1.png" } },
    { name: "Ophiotaurus", type: "Earth", images: { small: "CardImages/Creatures/Earth/Ophiotauros1.png" } },
    { name: "The Behemoth", type: "Earth", images: { small: "CardImages/Creatures/Earth/TheBehemoth3.png" } },
    { name: "Strix Arenaeus", type: "Wind", images: { small: "CardImages/Creatures/Wind/StrixArenaeus3.png" } },
    { name: "Selkie", type: "Earth", images: { small: "CardImages/Creatures/Earth/Selkie1.png" } }
  ],
  "Astral Gate": [
    { name: "Cacus", type: "Fire", images: { small: "CardImages/Creatures/Fire/Cacus3.png" } },
    { name: "Phoenix, the Rising", type: "Fire", images: { small: "CardImages/Creatures/Fire/Phoenixthe-Rising3.png" } }
  ],
  "Bleached Dunes": [
    { name: "Dolphite", type: "Earth", images: { small: "CardImages/Creatures/Earth/Dolphite1.png" } },
    { name: "Djinn", type: "Light", images: { small: "CardImages/Creatures/Light/Djinn1.png" } },
    { name: "Lighzard", type: "Thunder", images: { small: "CardImages/Creatures/Thunder/Lighzard1.png" } },
    { name: "Selkie", type: "Earth", images: { small: "CardImages/Creatures/Earth/Selkie1.png" } }
  ],
  "Bog-lands": [
    { name: "Indus Worm", type: "Earth", images: { small: "CardImages/Creatures/Earth/IndusWorm1.png" } },
    { name: "Moss Golem", type: "Forest", images: { small: "CardImages/Creatures/Forest/Moss-Golem1.png" } },
    { name: "Aqua Imp", type: "Water", images: { small: "CardImages/Creatures/Water/AquaImp1.png" } },
    { name: "Shock Bug", type: "Thunder", images: { small: "CardImages/Creatures/Thunder/ShockBug1.png" } }
  ],
  "Cathedral of Aethelgrad": [
    { name: "Infinity Mage", type: "Light", images: { small: "CardImages/Creatures/Light/InfinityMage3.png" } },
    { name: "Infinity Apprentice", type: "Light", images: { small: "CardImages/Creatures/Light/InfinityApprentice3.png" } },
    { name: "Time Weaver", type: "Light", images: { small: "CardImages/Creatures/Light/TimeWeaver1.png" } }
  ],
  "Cinder-Plateau": [
    { name: "Aurora, the Paladin", type: "Light", images: { small: "CardImages/Creatures/Light/AurorathePaladin3.png" } },
    { name: "Billhelm", type: "Fire", images: { small: "CardImages/Creatures/Fire/Billhelm3.png" } },
    { name: "Hikaru, Thunderflame", type: "Fire", images: { small: "CardImages/Creatures/Fire/HikaruThunderflame3.png" } },
    { name: "The Pyroclasm Crew", type: "Fire", images: { small: "CardImages/Creatures/Fire/FlamingTerrors1.png" } }
  ],
  "Coasts of Jimbora": [
    { name: "Dragotort", type: "Wind", images: { small: "CardImages/Creatures/Wind/Dragotort3.png" } },
    { name: "Rann, the Wretched", type: "Water", images: { small: "CardImages/Creatures/Water/RanntheWretched3.png" } },
    { name: "Water Leaper", type: "Water", images: { small: "CardImages/Creatures/Water/WaterLeaper1.png" } },
    { name: "Kaia", type: "Forest", images: { small: "CardImages/Creatures/Forest/Kaia3.png" } },
    { name: "Avani", type: "Water", images: { small: "CardImages/Creatures/Water/Avani3.png" } },
    { name: "Soldier of Jimbora", type: "Light", images: { small: "CardImages/Creatures/Light/SoldierofJimbora1.png" } }
  ],
  "Cobalt Shoals": [
    { name: "Seaphira", type: "Water", images: { small: "CardImages/Creatures/Water/Seaphira1.png" } },
    { name: "Nereus", type: "Water", images: { small: "CardImages/Creatures/Water/SeaDragonThree1.png" } },
    { name: "Nereia", type: "Water", images: { small: "CardImages/Creatures/Water/SeaDragonTwo1.png" } },
    { name: "Nerion", type: "Water", images: { small: "CardImages/Creatures/Water/SeaDragonOne1.png" } },
    { name: "Marimira", type: "Water", images: { small: "CardImages/Creatures/Water/Marimira1.png" } },
    { name: "Mernatee", type: "Water", images: { small: "CardImages/Creatures/Water/Mernatee3.png" } }
  ],
  "Cypress-Hollows": [
    { name: "Resaix", type: "Thunder", images: { small: "CardImages/Creatures/Thunder/Resaix1.png" } },
    { name: "Divine Beast, Panterus", type: "Wind", images: { small: "CardImages/Creatures/Wind/Panterus3.png" } },
    { name: "Winged Beast Ra'zu", type: "Wind", images: { small: "CardImages/Creatures/Wind/WingedBeastRa’zu1.png" } },
    { name: "Winged Beast U'ru", type: "Wind", images: { small: "CardImages/Creatures/Wind/WingedBeastU'ru1.png" } },
    { name: "Winged Beast Wai'ku", type: "Wind", images: { small: "CardImages/Creatures/Wind/WingedBeastWai’ku3.png" } }
  ],
  "Dragon Tail Isles": [
    { name: "Baby Wyvern", type: "Wind", images: { small: "CardImages/Creatures/Wind/Wyvern1.png" } },
    { name: "Cyclone Drake", type: "Wind", images: { small: "CardImages/Creatures/Wind/CycloneDrake1.png" } },
    { name: "Dragon Tamer", type: "Wind", images: { small: "CardImages/Creatures/Wind/DragonTamer1.png" } },
    { name: "Zombified Dragon", type: "Wind", images: { small: "CardImages/Creatures/Wind/ZombifiedDragon3.png" } }
  ],
  "Drowning Coast": [
    { name: "Neptide", type: "Water", images: { small: "CardImages/Creatures/Water/Neptide1.png" } },
    { name: "Rann, the Wretched", type: "Water", images: { small: "CardImages/Creatures/Water/RanntheWretched3.png" } },
    { name: "Water Leaper", type: "Water", images: { small: "CardImages/Creatures/Water/WaterLeaper1.png" } }
  ],
  "Forbidden Archives": [
    { name: "Corbin, the Wise", type: "Light", images: { small: "CardImages/Creatures/Light/SoltheEnlightened1.png" } },
    { name: "Arcana Apprentice", type: "Dark", images: { small: "CardImages/Creatures/Dark/ArcanaApprentice3.png" } },
    { name: "Arcana Temptress", type: "Dark", images: { small: "CardImages/Creatures/Dark/ArcanaEnchantress3.png" } }
  ],
  "Forest of Nura": [
    { name: "Titan of Nura", type: "Forest", images: { small: "CardImages/Creatures/Forest/TitanofLostForest3.png" } },
    { name: "Eamonn", type: "Forest", images: { small: "CardImages/Creatures/Forest/Eamonn3.png" } },
    { name: "Ephemeral Empress", type: "Dark", images: { small: "CardImages/Creatures/Dark/EphemeralEmpress3.png" } },
    { name: "Plantling", type: "Forest", images: { small: "CardImages/Creatures/Forest/Plantling1.png" } },
    { name: "Sapling", type: "Forest", images: { small: "CardImages/Creatures/Forest/Sapling1.png" } },
    { name: "Moss Golem", type: "Forest", images: { small: "CardImages/Creatures/Forest/Moss-Golem1.png" } },
    { name: "Forest Elf", type: "Forest", images: { small: "CardImages/Creatures/Forest/ForestElf3.png" } },
    { name: "Nemean Lion", type: "Forest", images: { small: "CardImages/Creatures/Forest/NemeanLion3.png" } },
    { name: "Owlbear", type: "Forest", images: { small: "CardImages/Creatures/Forest/Redcap1.png" } },
    { name: "Owlbear Cub", type: "Forest", images: { small: "CardImages/Creatures/Forest/BabyRedcap1.png" } },
    { name: "Thwomp", type: "Forest", images: { small: "CardImages/Creatures/Forest/Thwomp1.png" } }
  ],
  "Forests of Noctu": [
    { name: "Isxóhe", type: "Earth", images: { small: "CardImages/Creatures/Earth/Isxóhe3.png" } },
    { name: "Bristleback", type: "Earth", images: { small: "CardImages/Creatures/Earth/Bristleback3.png" } },
    { name: "Plantling", type: "Forest", images: { small: "CardImages/Creatures/Forest/Plantling1.png" } },
    { name: "Sapling", type: "Forest", images: { small: "CardImages/Creatures/Forest/Sapling1.png" } },
    { name: "Moss Golem", type: "Forest", images: { small: "CardImages/Creatures/Forest/Moss-Golem1.png" } },
    { name: "Forest Elf", type: "Forest", images: { small: "CardImages/Creatures/Forest/ForestElf3.png" } },
    { name: "Peryton", type: "Wind", images: { small: "CardImages/Creatures/Wind/Peryton1.png" } },
    { name: "Delphora", type: "Dark", images: { small: "CardImages/Creatures/Dark/Delphora1.png" } },
    { name: "Bloodfang Vampire", type: "Dark", images: { small: "CardImages/Creatures/Dark/BloodfangVampire1.png" } },
    { name: "Rakshasa", type: "Dark", images: { small: "CardImages/Creatures/Dark/Pandarkness1.png" } },
    { name: "Shokimono", type: "Thunder", images: { small: "CardImages/Creatures/Thunder/Shokimono3.png" } },
    { name: "Wilderfang", type: "Thunder", images: { small: "CardImages/Creatures/Thunder/Wilderfang3.png" } }
  ],
  "Forests of Rehm": [
    { name: "Howlwing", type: "Forest", images: { small: "CardImages/Creatures/Forest/Howlwing1.png" } },
    { name: "Humbird", type: "Wind", images: { small: "CardImages/Creatures/Wind/Humbird1.png" } },
    { name: "Eamonn", type: "Forest", images: { small: "CardImages/Creatures/Forest/Eamonn3.png" } },
    { name: "Dark Siren of Rehm", type: "Dark", images: { small: "CardImages/Creatures/Dark/DarkSirenofRehm3.png" } },
    { name: "Chamilla", type: "Forest", images: { small: "CardImages/Creatures/Forest/Chamira1.png" } },
    { name: "Lilith, Forest Pixie", type: "Forest", images: { small: "CardImages/Creatures/Forest/LilithForestGuardian3.png" } },
    { name: "Mira", type: "Forest", images: { small: "CardImages/Creatures/Forest/Pixie1.png" } },
    { name: "Nixor", type: "Forest", images: { small: "CardImages/Creatures/Forest/Nixor1.png" } },
    { name: "Tyrax", type: "Forest", images: { small: "CardImages/Creatures/Forest/Tyrax1.png" } },
    { name: "Skwall", type: "Wind", images: { small: "CardImages/Creatures/Wind/Skwall1.png" } },
    { name: "Glitter Pixie", type: "Light", images: { small: "CardImages/Creatures/Light/GlitterPixie1.png" } },
    { name: "Plantling", type: "Forest", images: { small: "CardImages/Creatures/Forest/Plantling1.png" } },
    { name: "Sapling", type: "Forest", images: { small: "CardImages/Creatures/Forest/Sapling1.png" } },
    { name: "Moss Golem", type: "Forest", images: { small: "CardImages/Creatures/Forest/Moss-Golem1.png" } },
    { name: "Forest Elf", type: "Forest", images: { small: "CardImages/Creatures/Forest/ForestElf3.png" } }
  ],
  "Gale-Roost": [
    { name: "Ekek", type: "Wind", images: { small: "CardImages/Creatures/Wind/Ekek1.png" } },
    { name: "Sylph", type: "Wind", images: { small: "CardImages/Creatures/Wind/Sylph1.png" } }
  ],
  "Gloom-Hollow": [
    { name: "Luminous Wisp", type: "Light", images: { small: "CardImages/Creatures/Light/LuminousWisp1.png" } },
    { name: "Anansi", type: "Dark", images: { small: "CardImages/Creatures/Dark/Anansi1.png" } },
    { name: "Banshee", type: "Dark", images: { small: "CardImages/Creatures/Dark/Banshee1.png" } },
    { name: "Evela", type: "Dark", images: { small: "CardImages/Creatures/Dark/Evila1.png" } },
    { name: "Hex-Gargoyle", type: "Earth", images: { small: "CardImages/Creatures/Earth/GargoyleofSersura1.png" } },
    { name: "Jespa, the Broken", type: "Dark", images: { small: "CardImages/Creatures/Dark/JespatheBroken1.png" } },
    { name: "Sinister Imp", type: "Dark", images: { small: "CardImages/Creatures/Dark/SisteroftheImp1.png" } },
    { name: "Tenebris", type: "Forest", images: { small: "CardImages/Creatures/Forest/Tenebris3.png" } }
  ],
  "Golden Dunes": [
    { name: "Sphinx, the Noble", type: "Earth", images: { small: "CardImages/Creatures/Earth/SphinxtheNoble1.png" } },
    { name: "Serpopard", type: "Earth", images: { small: "CardImages/Creatures/Earth/Serpopard3.png" } },
    { name: "Selkie", type: "Earth", images: { small: "CardImages/Creatures/Earth/Selkie1.png" } }
  ],
  "Granalith": [
    { name: "Or'granutan", type: "Earth", images: { small: "CardImages/Creatures/Earth/Or’granutan1.png" } },
    { name: "Geogolem", type: "Earth", images: { small: "CardImages/Creatures/Earth/Geogolem1.png" } },
    { name: "Manticore", type: "Forest", images: { small: "CardImages/Creatures/Forest/Manticore1.png" } },
    { name: "Plazmuh", type: "Thunder", images: { small: "CardImages/Creatures/Thunder/Plazmuh1.png" } },
    { name: "Zhànhóu", type: "Light", images: { small: "CardImages/Creatures/Light/Zhànhóu1.png" } }
  ],
  "Gulf of Netuhsa": [
    { name: "Scylla", type: "Water", images: { small: "CardImages/Creatures/Water/Scylla3.png" } },
    { name: "Skwid", type: "Water", images: { small: "CardImages/Creatures/Water/Skwid1.png" } },
    { name: "Nereus", type: "Water", images: { small: "CardImages/Creatures/Water/SeaDragonThree1.png" } },
    { name: "Nerion", type: "Water", images: { small: "CardImages/Creatures/Water/SeaDragonOne1.png" } },
    { name: "Nereia", type: "Water", images: { small: "CardImages/Creatures/Water/SeaDragonTwo1.png" } }
  ],
  "Gulf of Wyrzel": [
    { name: "Scylla", type: "Water", images: { small: "CardImages/Creatures/Water/Scylla3.png" } },
    { name: "Skwid", type: "Water", images: { small: "CardImages/Creatures/Water/Skwid1.png" } },
    { name: "Nereus", type: "Water", images: { small: "CardImages/Creatures/Water/SeaDragonThree1.png" } },
    { name: "Nerion", type: "Water", images: { small: "CardImages/Creatures/Water/SeaDragonOne1.png" } },
    { name: "Nereia", type: "Water", images: { small: "CardImages/Creatures/Water/SeaDragonTwo1.png" } }
  ],
  "Infernal Keep": [
    { name: "Cerberus", type: "Fire", images: { small: "CardImages/Creatures/Fire/Cerberus3.png" } },
    { name: "Havok", type: "Dark", images: { small: "CardImages/Creatures/Dark/Havok1.png" } },
    { name: "Hellspawn", type: "Dark", images: { small: "CardImages/Creatures/Dark/Hellspawn1.png" } },
    { name: "Daemorus", type: "Dark", images: { small: "CardImages/Creatures/Dark/Daemorus3.png" } }
  ],
  "Ironwood Forest": [
    { name: "Emberling", type: "Fire", images: { small: "CardImages/Creatures/Fire/Emberling1.png" } },
    { name: "Pyronix", type: "Fire", images: { small: "CardImages/Creatures/Fire/Pyronix1.png" } },
    { name: "Plantling", type: "Forest", images: { small: "CardImages/Creatures/Forest/Plantling1.png" } },
    { name: "Sapling", type: "Forest", images: { small: "CardImages/Creatures/Forest/Sapling1.png" } },
    { name: "Moss Golem", type: "Forest", images: { small: "CardImages/Creatures/Forest/Moss-Golem1.png" } },
    { name: "Forest Elf", type: "Forest", images: { small: "CardImages/Creatures/Forest/ForestElf3.png" } },
    { name: "Tsiatko", type: "Forest", images: { small: "CardImages/Creatures/Forest/Tsiatko1.png" } }
  ],
  "Jimbora": [
    { name: "Tanuki", type: "Wind", images: { small: "CardImages/Creatures/Wind/Tanuki1.png" } },
    { name: "Soldier of Jimbora", type: "Light", images: { small: "CardImages/Creatures/Light/SoldierofJimbora1.png" } },
    { name: "Corbin, the Wise", type: "Light", images: { small: "CardImages/Creatures/Light/SoltheEnlightened1.png" } },
    { name: "Harpy, Storm Bringer", type: "Thunder", images: { small: "CardImages/Creatures/Thunder/HarpyStormBringer3.png" } },
    { name: "Raitei", type: "Water", images: { small: "CardImages/Creatures/Water/Raitei3.png" } },
    { name: "Win'doku", type: "Wind", images: { small: "CardImages/Creatures/Wind/Win’doku1.png" } },
    { name: "Raiden", type: "Thunder", images: { small: "CardImages/Creatures/Thunder/Raiden1.png" } },
    { name: "Avani", type: "Water", images: { small: "CardImages/Creatures/Water/Avani3.png" } }
  ],
  "Kuroseki": [
    { name: "Tetsu Yami", type: "Dark", images: { small: "CardImages/Creatures/Dark/TetsuYami3.png" } }
  ],
  "Lake Orath": [
    { name: "Skwid", type: "Water", images: { small: "CardImages/Creatures/Water/Skwid1.png" } },
    { name: "Water Leaper", type: "Water", images: { small: "CardImages/Creatures/Water/WaterLeaper1.png" } },
    { name: "Aqua Imp", type: "Water", images: { small: "CardImages/Creatures/Water/AquaImp1.png" } }
  ],
  "Lake Sivel": [
    { name: "Skwid", type: "Water", images: { small: "CardImages/Creatures/Water/Skwid1.png" } },
    { name: "Water Leaper", type: "Water", images: { small: "CardImages/Creatures/Water/WaterLeaper1.png" } },
    { name: "Aqua Imp", type: "Water", images: { small: "CardImages/Creatures/Water/AquaImp1.png" } }
  ],
  "Midnight Grove": [
    { name: "Pebblephant", type: "Earth", images: { small: "CardImages/Creatures/Earth/Pebblephant3.png" } },
    { name: "Bloodfang Vampire", type: "Dark", images: { small: "CardImages/Creatures/Dark/BloodfangVampire1.png" } },
    { name: "Ephemeral Empress", type: "Dark", images: { small: "CardImages/Creatures/Dark/EphemeralEmpress3.png" } },
    { name: "Psoglav", type: "Dark", images: { small: "CardImages/Creatures/Dark/Psoglav3.png" } }
  ],
  "Midnight Thicket": [
    { name: "Dracoleón", type: "Forest", images: { small: "CardImages/Creatures/Forest/Dracoleon3.png" } },
    { name: "Nemean Lion", type: "Forest", images: { small: "CardImages/Creatures/Forest/NemeanLion3.png" } },
    { name: "Owlbear", type: "Forest", images: { small: "CardImages/Creatures/Forest/Redcap1.png" } },
    { name: "Owlbear Cub", type: "Forest", images: { small: "CardImages/Creatures/Forest/BabyRedcap1.png" } },
    { name: "Thwomp", type: "Forest", images: { small: "CardImages/Creatures/Forest/Thwomp1.png" } },
    { name: "Psoglav", type: "Dark", images: { small: "CardImages/Creatures/Dark/Psoglav3.png" } }
  ],
  "Molten Basin": [
    { name: "Grimburn", type: "Fire", images: { small: "CardImages/Creatures/Fire/Grimburn1.png" } },
    { name: "Grimlin", type: "Dark", images: { small: "CardImages/Creatures/Dark/Grimlin1.png" } },
    { name: "Hellspawn", type: "Dark", images: { small: "CardImages/Creatures/Dark/Hellspawn1.png" } },
    { name: "Laviathron", type: "Earth", images: { small: "CardImages/Creatures/Earth/Laviathron3.png" } },
    { name: "Infernasaur", type: "Fire", images: { small: "CardImages/Creatures/Fire/Infernasaur1.png" } },
    { name: "Pyrocanthodes", type: "Fire", images: { small: "CardImages/Creatures/Fire/Pyrocanthodes1.png" } }
  ],
  "Mount Ilyeiad": [
    { name: "Kütralpun", type: "Fire", images: { small: "CardImages/Creatures/Fire/Kütralpun1.png" } },
    { name: "Penguilite", type: "Light", images: { small: "CardImages/Creatures/Light/Penguilite1.png" } },
    { name: "Baby Yeti", type: "Water", images: { small: "CardImages/Creatures/Water/Yeti1.png" } },
    { name: "Chillburr", type: "Water", images: { small: "CardImages/Creatures/Water/Chillburr1.png" } },
    { name: "Cryofrost", type: "Water", images: { small: "CardImages/Creatures/Water/Cryofrost1.png" } }
  ],
  "Mountains of Eurotha": [
    { name: "Mafistu", type: "Earth", images: { small: "CardImages/Creatures/Earth/Mafistu1.png" } },
    { name: "Chillburr", type: "Water", images: { small: "CardImages/Creatures/Water/Chillburr1.png" } },
    { name: "Or'granutan", type: "Earth", images: { small: "CardImages/Creatures/Earth/Or’granutan1.png" } },
    { name: "Gorgonite", type: "Dark", images: { small: "CardImages/Creatures/Dark/Gorgon1.png" } },
    { name: "Smaugom", type: "Dark", images: { small: "CardImages/Creatures/Dark/DragonofDeath1.png" } },
    { name: "Geogolem", type: "Earth", images: { small: "CardImages/Creatures/Earth/Geogolem1.png" } },
    { name: "Longma", type: "Fire", images: { small: "CardImages/Creatures/Fire/Longma3.png" } },
    { name: "Tsiatko", type: "Forest", images: { small: "CardImages/Creatures/Forest/Tsiatko1.png" } },
    { name: "Mountain Harpy", type: "Wind", images: { small: "CardImages/Creatures/Wind/MountainHarpy3.png" } },
    { name: "Zhànhóu", type: "Light", images: { small: "CardImages/Creatures/Light/Zhànhóu1.png" } }
  ],
  "Nile": [
    { name: "Anuket", type: "Earth", images: { small: "CardImages/Creatures/Earth/Anuket3.png" } },
    { name: "Serpopard", type: "Earth", images: { small: "CardImages/Creatures/Earth/Serpopard3.png" } }
  ],
  "Noxivar Black Sea": [
    { name: "Nereus", type: "Water", images: { small: "CardImages/Creatures/Water/SeaDragonThree1.png" } },
    { name: "Nerion", type: "Water", images: { small: "CardImages/Creatures/Water/SeaDragonOne1.png" } },
    { name: "Nereia", type: "Water", images: { small: "CardImages/Creatures/Water/SeaDragonTwo1.png" } }
  ],
  "Nura": [
    { name: "Bonewraith", type: "Light", images: { small: "CardImages/Creatures/Light/Shellaser1.png" } },
    { name: "Redeemer", type: "Light", images: { small: "CardImages/Creatures/Light/Redeemer1.png" } },
    { name: "Luminite", type: "Light", images: { small: "CardImages/Creatures/Light/Luminite1.png" } },
    { name: "Sunstrike", type: "Light", images: { small: "CardImages/Creatures/Light/Sunstrike1.png" } },
    { name: "Arcana Apprentice", type: "Dark", images: { small: "CardImages/Creatures/Dark/ArcanaApprentice3.png" } },
    { name: "Arcana Temptress", type: "Dark", images: { small: "CardImages/Creatures/Dark/ArcanaEnchantress3.png" } },
    { name: "Sylph", type: "Wind", images: { small: "CardImages/Creatures/Wind/Sylph1.png" } }
  ],
  "Obsidian City": [
    { name: "Cyra, the Emblazoned", type: "Fire", images: { small: "CardImages/Creatures/Fire/InfernalApprentice3.png" } },
    { name: "Billhelm", type: "Fire", images: { small: "CardImages/Creatures/Fire/Billhelm3.png" } },
    { name: "The Pyroclasm Crew", type: "Fire", images: { small: "CardImages/Creatures/Fire/FlamingTerrors1.png" } },
    { name: "Vaska", type: "Fire", images: { small: "CardImages/Creatures/Fire/Vaska1.png" } },
    { name: "Raiden", type: "Thunder", images: { small: "CardImages/Creatures/Thunder/Raiden1.png" } }
  ],
  "Oceans of Nimbitu": [
    { name: "Charybdis", type: "Water", images: { small: "CardImages/Creatures/Water/Charybdis3.png" } },
    { name: "Hydra", type: "Water", images: { small: "CardImages/Creatures/Water/Hydra3.png" } },
    { name: "Nereus", type: "Water", images: { small: "CardImages/Creatures/Water/SeaDragonThree1.png" } },
    { name: "Nerion", type: "Water", images: { small: "CardImages/Creatures/Water/SeaDragonOne1.png" } },
    { name: "Nereia", type: "Water", images: { small: "CardImages/Creatures/Water/SeaDragonTwo1.png" } },
    { name: "Aspidochelone", type: "Water", images: { small: "CardImages/Creatures/Water/Aspidochelone-3.png" } }
  ],
  "Plains of Akatah": [
    { name: "Qilin", type: "Thunder", images: { small: "CardImages/Creatures/Thunder/Qilin3.png" } },
    { name: "Werelephant", type: "Dark", images: { small: "CardImages/Creatures/Dark/Werelephant3.png" } },
    { name: "Chimera Cub", type: "Thunder", images: { small: "CardImages/Creatures/Thunder/ChimeraCub1.png" } },
    { name: "Ligora, the Chimera", type: "Thunder", images: { small: "CardImages/Creatures/Thunder/TriHeadChimera3.png" } },
    { name: "Tempestas", type: "Thunder", images: { small: "CardImages/Creatures/Thunder/Tempestas3.png" } },
    { name: "Thunder Tusk", type: "Thunder", images: { small: "CardImages/Creatures/Thunder/ThunderTusk1.png" } },
    { name: "Zunreus", type: "Earth", images: { small: "CardImages/Creatures/Earth/Minotaur1.png" } }
  ],
  "Port of Us'ah": [
    { name: "Soldier of Jimbora", type: "Light", images: { small: "CardImages/Creatures/Light/SoldierofJimbora1.png" } },
    { name: "Neptide", type: "Water", images: { small: "CardImages/Creatures/Water/Neptide1.png" } },
    { name: "Mernatee", type: "Water", images: { small: "CardImages/Creatures/Water/Mernatee3.png" } },
    { name: "Redeemer", type: "Light", images: { small: "CardImages/Creatures/Light/Redeemer1.png" } }
  ],
  "Rottide Swamp": [
    { name: "Yacurana", type: "Water", images: { small: "CardImages/Creatures/Water/Yacurana3.png" } },
    { name: "Moss Golem", type: "Forest", images: { small: "CardImages/Creatures/Forest/Moss-Golem1.png" } },
    { name: "Aqua Imp", type: "Water", images: { small: "CardImages/Creatures/Water/AquaImp1.png" } },
    { name: "Shock Bug", type: "Thunder", images: { small: "CardImages/Creatures/Thunder/ShockBug1.png" } },
    { name: "Water Leaper", type: "Water", images: { small: "CardImages/Creatures/Water/WaterLeaper1.png" } }
  ],
  "Rottenham": [
    { name: "Toaxic", type: "Earth", images: { small: "CardImages/Creatures/Earth/Toaxic1.png" } },
    { name: "Evela", type: "Dark", images: { small: "CardImages/Creatures/Dark/Evila1.png" } },
    { name: "Water Leaper", type: "Water", images: { small: "CardImages/Creatures/Water/WaterLeaper1.png" } }
  ],
  "Sanctuary of the Eclipsed Sun": [
    { name: "Kuroen", type: "Fire", images: { small: "CardImages/Creatures/Fire/Kuroen3.png" } },
    { name: "Luminite", type: "Light", images: { small: "CardImages/Creatures/Light/Luminite1.png" } },
    { name: "Sunstrike", type: "Light", images: { small: "CardImages/Creatures/Light/Sunstrike1.png" } },
    { name: "Eclipse", type: "Light", images: { small: "CardImages/Creatures/Light/Eclipse3.png" } }
  ],
  "Sanctum of Fractured Hours": [
    { name: "Infinity Apprentice", type: "Light", images: { small: "CardImages/Creatures/Light/InfinityApprentice3.png" } },
    { name: "Infinity Mage", type: "Light", images: { small: "CardImages/Creatures/Light/InfinityMage3.png" } },
    { name: "Time Weaver", type: "Light", images: { small: "CardImages/Creatures/Light/TimeWeaver1.png" } },
    { name: "Corbin, the Wise", type: "Light", images: { small: "CardImages/Creatures/Light/SoltheEnlightened1.png" } }
  ],
  "Scorchlands": [
    { name: "Flarepup", type: "Fire", images: { small: "CardImages/Creatures/Fire/Flarepup1.png" } },
    { name: "Ashenklaw", type: "Fire", images: { small: "CardImages/Creatures/Fire/Ashenklaw1.png" } },
    { name: "Growler", type: "Dark", images: { small: "CardImages/Creatures/Dark/Growler1.png" } },
    { name: "Infernocerus", type: "Fire", images: { small: "CardImages/Creatures/Fire/Pyrocerus1.png" } },
    { name: "Smol, the Titan", type: "Fire", images: { small: "CardImages/Creatures/Fire/Smol,theTitan1.png" } },
    { name: "Sunstrike", type: "Light", images: { small: "CardImages/Creatures/Light/Sunstrike1.png" } }
  ],
  "Seas of Aurelith": [
    { name: "Nereus", type: "Water", images: { small: "CardImages/Creatures/Water/SeaDragonThree1.png" } },
    { name: "Nerion", type: "Water", images: { small: "CardImages/Creatures/Water/SeaDragonOne1.png" } },
    { name: "Nereia", type: "Water", images: { small: "CardImages/Creatures/Water/SeaDragonTwo1.png" } },
    { name: "Neptunova", type: "Water", images: { small: "CardImages/Creatures/Water/Neptunova1.png" } }
  ],
  "Shattered Pole": [
    { name: "Kütralpun", type: "Fire", images: { small: "CardImages/Creatures/Fire/Kütralpun1.png" } },
    { name: "Penguilite", type: "Light", images: { small: "CardImages/Creatures/Light/Penguilite1.png" } },
    { name: "Asti-ni", type: "Light", images: { small: "CardImages/Creatures/Light/Asti-ni1.png" } },
    { name: "Cryofrost", type: "Water", images: { small: "CardImages/Creatures/Water/Cryofrost1.png" } }
  ],
  "Spires of Lumos": [
    { name: "Divinatria", type: "Light", images: { small: "CardImages/Creatures/Light/Divinatria3.png" } },
    { name: "Eclipse", type: "Light", images: { small: "CardImages/Creatures/Light/Eclipse3.png" } },
    { name: "Luminite", type: "Light", images: { small: "CardImages/Creatures/Light/Luminite1.png" } },
    { name: "Malum, the Damned", type: "Light", images: { small: "CardImages/Creatures/Light/MalumtheDamned3.png" } },
    { name: "Penelope", type: "Wind", images: { small: "CardImages/Creatures/Wind/Penelope1.png" } }
  ],
  "Star-Forge": [
    { name: "Foton", type: "Light", images: { small: "CardImages/Creatures/Light/Foton1.png" } },
    { name: "Tigris", type: "Thunder", images: { small: "CardImages/Creatures/Thunder/Tigris1.png" } }
  ],
  "Sunken Shelves": [
    { name: "Hippocampus", type: "Water", images: { small: "CardImages/Creatures/Water/Hippocampus1.png" } },
    { name: "Marimira", type: "Water", images: { small: "CardImages/Creatures/Water/Marimira1.png" } },
    { name: "Mernatee", type: "Water", images: { small: "CardImages/Creatures/Water/Mernatee3.png" } },
    { name: "Aspidochelone", type: "Water", images: { small: "CardImages/Creatures/Water/Aspidochelone-3.png" } },
    { name: "Neptide", type: "Water", images: { small: "CardImages/Creatures/Water/Neptide1.png" } },
    { name: "Neptunova", type: "Water", images: { small: "CardImages/Creatures/Water/Neptunova1.png" } },
    { name: "Rann, the Wretched", type: "Water", images: { small: "CardImages/Creatures/Water/RanntheWretched3.png" } }
  ],
  "Thaloryn Inner Sea": [
    { name: "Nereus", type: "Water", images: { small: "CardImages/Creatures/Water/SeaDragonThree1.png" } },
    { name: "Nerion", type: "Water", images: { small: "CardImages/Creatures/Water/SeaDragonOne1.png" } },
    { name: "Nereia", type: "Water", images: { small: "CardImages/Creatures/Water/SeaDragonTwo1.png" } }
  ],
  "Thaloryn Outer Sea": [
    { name: "Nereus", type: "Water", images: { small: "CardImages/Creatures/Water/SeaDragonThree1.png" } },
    { name: "Nerion", type: "Water", images: { small: "CardImages/Creatures/Water/SeaDragonOne1.png" } },
    { name: "Nereia", type: "Water", images: { small: "CardImages/Creatures/Water/SeaDragonTwo1.png" } },
    { name: "Aspidochelone", type: "Water", images: { small: "CardImages/Creatures/Water/Aspidochelone-3.png" } }
  ],
  "Thelsix": [
    { name: "Stormie", type: "Thunder", images: { small: "CardImages/Creatures/Thunder/Stormy3.png" } },
    { name: "Raiden", type: "Thunder", images: { small: "CardImages/Creatures/Thunder/Raiden1.png" } },
    { name: "Soldier of Jimbora", type: "Light", images: { small: "CardImages/Creatures/Light/SoldierofJimbora1.png" } },
    { name: "Bonewraith", type: "Light", images: { small: "CardImages/Creatures/Light/Shellaser1.png" } },
    { name: "Aqua Imp", type: "Water", images: { small: "CardImages/Creatures/Water/AquaImp1.png" } },
    { name: "Stormchaser", type: "Thunder", images: { small: "CardImages/Creatures/Thunder/Thunderbirdon1.png" } }
  ],
  "Vaelen Expanse": [
    { name: "Astraea", type: "Light", images: { small: "CardImages/Creatures/Light/Astraea3.png" } },
    { name: "Viarose", type: "Forest", images: { small: "CardImages/Creatures/Forest/Viarose3.png" } },
    { name: "Zyra", type: "Forest", images: { small: "CardImages/Creatures/Forest/Zyra1.png" } },
    { name: "Glitter Pixie", type: "Light", images: { small: "CardImages/Creatures/Light/GlitterPixie1.png" } },
    { name: "Majestic Unicorn", type: "Light", images: { small: "CardImages/Creatures/Light/MajesticUnicorn1.png" } },
    { name: "Pegasus", type: "Wind", images: { small: "CardImages/Creatures/Wind/Pegasus1.png" } },
    { name: "Penelope", type: "Wind", images: { small: "CardImages/Creatures/Wind/Penelope1.png" } },
    { name: "Sylph", type: "Wind", images: { small: "CardImages/Creatures/Wind/Sylph1.png" } }
  ],
  "Valhorian Peaks": [
    { name: "Amaterasu", type: "Light", images: { small: "CardImages/Creatures/Light/Amaterasu3.png" } },
    { name: "Smaugom", type: "Dark", images: { small: "CardImages/Creatures/Dark/DragonofDeath1.png" } },
    { name: "Divine Beast, Panterus", type: "Wind", images: { small: "CardImages/Creatures/Wind/Panterus3.png" } },
    { name: "Winged Beast Ra'zu", type: "Wind", images: { small: "CardImages/Creatures/Wind/WingedBeastRa’zu1.png" } },
    { name: "Winged Beast U'ru", type: "Wind", images: { small: "CardImages/Creatures/Wind/WingedBeastU'ru1.png" } },
    { name: "Winged Beast Wai'ku", type: "Wind", images: { small: "CardImages/Creatures/Wind/WingedBeastWai’ku3.png" } },
    { name: "Griffin, the Majestic", type: "Wind", images: { small: "CardImages/Creatures/Wind/GriffintheWise3.png" } },
    { name: "Cloudpiercer", type: "Wind", images: { small: "CardImages/Creatures/Wind/Cloudpiercer3.png" } },
    { name: "Iškugriff", type: "Thunder", images: { small: "CardImages/Creatures/Thunder/Iškugriff3.png" } },
    { name: "Voltara", type: "Thunder", images: { small: "CardImages/Creatures/Thunder/Voltara1.png" } },
    { name: "Pegasus", type: "Wind", images: { small: "CardImages/Creatures/Wind/Pegasus1.png" } },
    { name: "Mountain Harpy", type: "Wind", images: { small: "CardImages/Creatures/Wind/MountainHarpy3.png" } }
  ],
  "Velmora": [
    { name: "Stormie", type: "Thunder", images: { small: "CardImages/Creatures/Thunder/Stormy3.png" } },
    { name: "Raiden", type: "Thunder", images: { small: "CardImages/Creatures/Thunder/Raiden1.png" } },
    { name: "Soldier of Jimbora", type: "Light", images: { small: "CardImages/Creatures/Light/SoldierofJimbora1.png" } },
    { name: "Redeemer", type: "Light", images: { small: "CardImages/Creatures/Light/Redeemer1.png" } },
    { name: "Luminite", type: "Light", images: { small: "CardImages/Creatures/Light/Luminite1.png" } },
    { name: "Zamus", type: "Thunder", images: { small: "CardImages/Creatures/Thunder/Zamus1.png" } }
  ],
  "Viridian Scar": [
    { name: "Lizardfolk Whelp", type: "Earth", images: { small: "CardImages/Creatures/Earth/Catctus1.png" } },
    { name: "Wolfdrake", type: "Thunder", images: { small: "CardImages/Creatures/Thunder/Wolfdrake3.png" } },
    { name: "Chamilla", type: "Forest", images: { small: "CardImages/Creatures/Forest/Chamira1.png" } },
    { name: "Nixor", type: "Forest", images: { small: "CardImages/Creatures/Forest/Nixor1.png" } },
    { name: "Tyrax", type: "Forest", images: { small: "CardImages/Creatures/Forest/Tyrax1.png" } },
    { name: "Skwall", type: "Wind", images: { small: "CardImages/Creatures/Wind/Skwall1.png" } }
  ],
  "Volcanoes of Westura": [
    { name: "Growler", type: "Dark", images: { small: "CardImages/Creatures/Dark/Growler1.png" } },
    { name: "Laviathron", type: "Earth", images: { small: "CardImages/Creatures/Earth/Laviathron3.png" } },
    { name: "Infernasaur", type: "Fire", images: { small: "CardImages/Creatures/Fire/Infernasaur1.png" } },
    { name: "Infernocerus", type: "Fire", images: { small: "CardImages/Creatures/Fire/Pyrocerus1.png" } },
    { name: "Moltem", type: "Fire", images: { small: "CardImages/Creatures/Fire/Moltem1.png" } },
    { name: "Pyrocanthodes", type: "Fire", images: { small: "CardImages/Creatures/Fire/Pyrocanthodes1.png" } },
    { name: "Phoenic", type: "Wind", images: { small: "CardImages/Creatures/Wind/Phoenic1.png" } },
    { name: "Ignimia", type: "Fire", images: { small: "CardImages/Creatures/Fire/Ignimia3.png" } }
  ],
  "Vol-Darah": [
    { name: "Raijū", type: "Thunder", images: { small: "CardImages/Creatures/Thunder/Raiju1.png" } },
    { name: "Grimlin", type: "Dark", images: { small: "CardImages/Creatures/Dark/Grimlin1.png" } },
    { name: "Sparxle", type: "Thunder", images: { small: "CardImages/Creatures/Thunder/Sparxle1.png" } }
  ],
  "Wastelands": [
    { name: "Ashenklaw", type: "Fire", images: { small: "CardImages/Creatures/Fire/Ashenklaw1.png" } },
    { name: "Buckshot Bill", type: "Dark", images: { small: "CardImages/Creatures/Dark/Skriek,BountyHunter1.png" } },
    { name: "The Behemoth", type: "Earth", images: { small: "CardImages/Creatures/Earth/TheBehemoth3.png" } },
    { name: "Bonewraith", type: "Light", images: { small: "CardImages/Creatures/Light/Shellaser1.png" } },
    { name: "Vaska", type: "Fire", images: { small: "CardImages/Creatures/Fire/Vaska1.png" } },
    { name: "Fallen Angel", type: "Dark", images: { small: "CardImages/Creatures/Dark/FallenAngel1.png" } },
    { name: "Selkie", type: "Earth", images: { small: "CardImages/Creatures/Earth/Selkie1.png" } }
  ],
  "Weeping Thicket": [
    { name: "Yumi", type: "Light", images: { small: "CardImages/Creatures/Light/LightSeeker1.png" } },
    { name: "Fallen Angel", type: "Dark", images: { small: "CardImages/Creatures/Dark/FallenAngel1.png" } }
  ],
  "Zhien Po": [
    { name: "Serpopard", type: "Earth", images: { small: "CardImages/Creatures/Earth/Serpopard3.png" } },
    { name: "Sphinx, the Noble", type: "Earth", images: { small: "CardImages/Creatures/Earth/SphinxtheNoble1.png" } },
    { name: "Anuket", type: "Earth", images: { small: "CardImages/Creatures/Earth/Anuket3.png" } }
  ]
};