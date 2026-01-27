const PROMO_CARDS = [
  {
    "id": 5001,
    "name": "Tetsu of Kuroseki",
    "supertype": "Creature",
    "types": ["Dark", "Earth"],
    "level": 10,
    "hp": 9500,
    "rarity": "Promo",
    "images": {"small": "CardImages/Promos/TetsuofKuroseki3"},
    "setCode": "PROMO",
    "abilities": [
      {
        "name": "Warrior's Soul",
        "trigger": "Passive",
        "effectText": "Tetsu of Kuroseki can only be summoned by sacrificing any level 8 or higher Dark or Earth type Creature. Tetsu of Kuroseki gains +1000 attack for every Earth and Dark Power card in your Discard Pile.",
        "usableFromBench": false,
        "prerequisites": [{"type": "SacrificeCreature", "criteria": {"minLevel": 8, "types": ["Dark", "Earth"]}}],
        "structuredEffects": [
          {
            "type": "ModifyStats",
            "category": "StatBoost",
            "target": "Self",
            "modification": {
              "stat": "Attack",
              "amountPerCondition": 1000,
              "condition": {
                "type": "CountCardsInDiscard", 
                "cardType": "Power", 
                "powerTypes": ["Dark", "Earth"]
              }
            }
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Blade's Wrath",
        "cost": [{"PowerType": "Dark", "count": 2}, {"PowerType": "Earth", "count": 2}],
        "damage": null,
        "effectText": "Damage is determined by the Warrior's Soul ability.",
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Wind", "multiplier": 3}],
    "resistances": [],
    "convertedRetreatCost": 4,
    "collectionNumber": "xxx/xxx",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 5002,
    "name": "Alarin",
    "supertype": "Creature",
    "types": ["Forest"],
    "level": 10,
    "hp": 9500,
    "rarity": "Promo",
    "images": {"small": "CardImages/Promos/Alarin3"},
    "setCode": "PROMO",
    "abilities": [
      {
        "name": "Savior",
        "trigger": "OnSummon",
        "effectText": "To summon, you must sacrifice any level 8 or higher Forest type Creature. Once summoned, shuffle all level 3 and lower Creatures from your Discard Pile back into your Deck.",
        "usableFromBench": false,
        "prerequisites": [{"type": "SacrificeCreature", "criteria": {"minLevel": 8, "types": ["Forest"]}}],
        "structuredEffects": [
          {
            "type": "ShuffleFromDiscardToDeck",
            "category": "CardManipulation",
            "target": "PlayerSelf",
            "amount": "All",
            "cardCriteria": {
              "cardSuperType": "Creature",
              "maxLevel": 3
            }
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Forest's Hero",
        "cost": [{"PowerType": "Forest", "count": 4}],
        "damage": 6500,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Dark", "multiplier": 3}],
    "resistances": [],
    "convertedRetreatCost": 2,
    "collectionNumber": "xxx/xxx",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 5003,
    "name": "Serenya Vale",
    "supertype": "Creature",
    "types": ["Dark", "Light"],
    "level": 10,
    "hp": null,
    "rarity": "Promo",
    "images": {"small": "CardImages/Promos/SerenyaVale3"},
    "setCode": "PROMO",
    "abilities": [
      {
        "name": "The Concordant",
        "trigger": "Passive",
        "effectText": "This Creature can be summoned by sacrificing any level 8 or higher Creature. Serenya Vale gains +1000 HP and +1000 attack for every Creature in your Discard Pile. (this Creature can use any Power cards)",
        "usableFromBench": false,
        "canUseAnyPower": true,
        "prerequisites": [{"type": "SacrificeCreature", "criteria": {"minLevel": 8, "anyType": true}}],
        "structuredEffects": [
          {
            "type": "ModifyStats",
            "category": "StatBoost",
            "target": "Self",
            "modification": {
              "stat": "HP",
              "amountPerCondition": 1000,
              "condition": {
                "type": "CountCardsInDiscard", 
                "cardSuperType": "Creature"
              }
            }
          },
          {
            "type": "ModifyStats",
            "category": "StatBoost",
            "target": "Self",
            "modification": {
              "stat": "Attack",
              "amountPerCondition": 1000,
              "condition": {
                "type": "CountCardsInDiscard", 
                "cardSuperType": "Creature"
              }
            }
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Last Hope",
        "cost": [{"PowerType": "ANY", "count": 4}],
        "damage": null,
        "effectText": "Damage is determined by The Concordant ability.",
        "structuredEffects": []
      }
    ],
    "weaknesses": [],
    "resistances": [],
    "convertedRetreatCost": 3,
    "collectionNumber": "xxx/xxx",
    "illustrator": "Mystik Creatures"
  }
];