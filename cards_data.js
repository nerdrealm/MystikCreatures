const CARDS = [
 
  {
    "id": 1,
    "name": "Anansi",
    "supertype": "Creature",
    "types": ["Dark"],
    "level": 4,
    "hp": 4000,
    "rarity": "Uncommon",
    "images": {"small": "CardImages/Creatures/Dark/Anansi1"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Trickster's Cunning",
        "trigger": "OnOpponentCreatureDestroyedByThis",
        "effectText": "When this Creature destroys your opponent's Creature. Randomly discard one card from your opponent's Hand.",
        "usableFromBench": false,
        "prerequisites": [],
        "structuredEffects": [
          {
            "type": "DiscardCardsFromHand",
            "target": "PlayerOpponent",
            "amount": 1,
            "discardMethod": "Random"
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Web Shot",
        "cost": [{"PowerType": "Dark", "count": 2}],
        "damage": 2500,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Light", "multiplier": 2}],
    "resistances": [{"PowerType": "Fire", "reduction": 500}],
    "retreatCost": [{"PowerType": "Dark", "count": 1}],
    "convertedRetreatCost": 1,
    "collectionNumber": "062/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 2,
    "name": "Arcana Apprentice",
    "supertype": "Creature",
    "types": ["Dark"],
    "level": 8,
    "hp": 6500,
    "rarity": "Rare",
    "images": {"small": "CardImages/Creatures/Dark/ArcanaApprentice1"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Arcane Blast",
        "cost": [{"PowerType": "Dark", "count": 2}],
        "damage": 4000,
        "effectText": null,
        "structuredEffects": []
      },
      {
        "name": "Magical Strike",
        "cost": [{"PowerType": "Dark", "count": 3}],
        "damage": 4500,
        "effectText": "Flip the main coin. If the result is heads, increase Arcana Apprentice's health by +1000 HP.",
        "structuredEffects": [
          {
            "type": "ConditionalEffect",
            "category": "Utility",
            "target": "Self",
            "condition": {
              "type": "CoinFlip",
              "comparison": "EqualTo",
              "stringValue": "Heads"
            },
            "trueEffects": [
              {
                "type": "ModifyHP",
                "category": "Healing",
                "target": "Self",
                "amount": 1000
              }
            ],
            "falseEffects": []
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Light", "multiplier": 2}],
    "resistances": [{"PowerType": "Fire", "reduction": 1500}],
    "retreatCost": [{"PowerType": "Dark", "count": 2}],
    "convertedRetreatCost": 2,
    "collectionNumber": "151/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 2000,
    "name": "Arcana Apprentice",
    "supertype": "Creature",
    "types": ["Dark"],
    "level": 8,
    "hp": 6500,
    "rarity": "HiddenRare",
    "images": {"small": "CardImages/Creatures/Dark/ArcanaApprentice2"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Arcane Blast",
        "cost": [{"PowerType": "Dark", "count": 2}],
        "damage": 4000,
        "effectText": null,
        "structuredEffects": []
      },
      {
        "name": "Magical Strike",
        "cost": [{"PowerType": "Dark", "count": 3}],
        "damage": 4500,
        "effectText": "Flip the main coin. If the result is heads, increase Arcana Apprentice's health by +1000 HP.",
        "structuredEffects": [
          {
            "type": "ConditionalEffect",
            "category": "Utility",
            "target": "Self",
            "condition": {
              "type": "CoinFlip",
              "comparison": "EqualTo",
              "stringValue": "Heads"
            },
            "trueEffects": [
              {
                "type": "ModifyHP",
                "category": "Healing",
                "target": "Self",
                "amount": 1000
              }
            ],
            "falseEffects": []
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Light", "multiplier": 2}],
    "resistances": [{"PowerType": "Fire", "reduction": 1500}],
    "retreatCost": [{"PowerType": "Dark", "count": 2}],
    "convertedRetreatCost": 2,
    "collectionNumber": "356/311",
    "illustrator": "Mystik Creatures"
  },  
  {
    "id": 3,
    "name": "Arcana Apprentice",
    "supertype": "Creature",
    "types": ["Dark"],
    "level": 8,
    "hp": 6500,
    "rarity": "Borderless",
    "images": {"small": "CardImages/Creatures/Dark/ArcanaApprentice3"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Arcane Blast",
        "cost": [{"PowerType": "Dark", "count": 2}],
        "damage": 4000,
        "effectText": null,
        "structuredEffects": []
      },
      {
        "name": "Magical Strike",
        "cost": [{"PowerType": "Dark", "count": 3}],
        "damage": 4500,
        "effectText": "Flip the main coin. If the result is heads, increase Arcana Apprentice's health by +1000 HP.",
        "structuredEffects": [
          {
            "type": "ConditionalEffect",
            "category": "Utility",
            "target": "Self",
            "condition": {
              "type": "CoinFlip",
              "comparison": "EqualTo",
              "stringValue": "Heads"
            },
            "trueEffects": [
              {
                "type": "ModifyHP",
                "category": "Healing",
                "target": "Self",
                "amount": 1000
              }
            ],
            "falseEffects": []
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Light", "multiplier": 2}],
    "resistances": [{"PowerType": "Fire", "reduction": 1500}],
    "retreatCost": [{"PowerType": "Dark", "count": 2}],
    "convertedRetreatCost": 2,
    "collectionNumber": "356/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 4,
    "name": "Arcana Temptress",
    "supertype": "Creature",
    "types": ["Dark"],
    "level": 10,
    "hp": 8500,
    "rarity": "UltraRare",
    "images": {"small": "CardImages/Creatures/Dark/ArcanaEnchantress1"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Divine Presence",
        "trigger": "Passive",
        "effectText": "This Creature can only be summoned by sacrificing Arcana Apprentice. Arcana Temptress gains +1000 attack for each Dark Power card in your Discard Pile.",
        "usableFromBench": false,
        "prerequisites": [{"type": "SacrificeSpecificCreature", "creatureName": "Arcana Apprentice"}],
        "structuredEffects": [
          {
            "type": "ModifyStats",
            "category": "StatBoost",
            "target": "Self",
            "modification": {
                "stat": "Attack",
                "amountPerCondition": 1000,
                "condition": {"type": "CountCardsInDiscard", "cardType": "Power", "powerType": "Dark"}
            }
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Enfeebling Curse",
        "cost": [{"PowerType": "Dark", "count": 4}],
        "damage": null,
        "effectText": "Roll the main dice. If the result is even, draw three cards. If odd, your opponent draws three cards.",
        "structuredEffects": [
          {
            "type": "ConditionalEffect",
            "category": "CardManipulation",
            "condition": {"type": "DiceRoll", "comparison": "IsEven"},
            "trueEffects": [{"type": "DrawCards", "target": "PlayerSelf", "amount": 3}],
            "falseEffects": [{"type": "DrawCards", "target": "PlayerOpponent", "amount": 3}]
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Light", "multiplier": 2}],
    "resistances": [],
    "retreatCost": [{"PowerType": "Dark", "count": 2}],
    "convertedRetreatCost": 2,
    "collectionNumber": "159/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 5,
    "name": "Arcana Temptress",
    "supertype": "Creature",
    "types": ["Dark"],
    "level": 10,
    "hp": 8500,
    "rarity": "HiddenRare",
    "images": {"small": "CardImages/Creatures/Dark/ArcanaEnchantress2"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Divine Presence",
        "trigger": "Passive",
        "effectText": "This Creature can only be summoned by sacrificing Arcana Apprentice. Arcana Temptress gains +1000 attack for each Dark Power card in your Discard Pile.",
        "usableFromBench": false,
        "prerequisites": [{"type": "SacrificeSpecificCreature", "creatureName": "Arcana Apprentice"}],
        "structuredEffects": [
          {
            "type": "ModifyStats",
            "category": "StatBoost",
            "target": "Self",
            "modification": {
                "stat": "Attack",
                "amountPerCondition": 1000,
                "condition": {"type": "CountCardsInDiscard", "cardType": "Power", "powerType": "Dark"}
            }
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Enfeebling Curse",
        "cost": [{"PowerType": "Dark", "count": 4}],
        "damage": null,
        "effectText": "Roll the main dice. If the result is even, draw three cards. If odd, your opponent draws three cards.",
        "structuredEffects": [
          {
            "type": "ConditionalEffect",
            "category": "CardManipulation",
            "condition": {"type": "DiceRoll", "comparison": "IsEven"},
            "trueEffects": [{"type": "DrawCards", "target": "PlayerSelf", "amount": 3}],
            "falseEffects": [{"type": "DrawCards", "target": "PlayerOpponent", "amount": 3}]
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Light", "multiplier": 3}],
    "resistances": [],
    "retreatCost": [],
    "convertedRetreatCost": 0,
    "collectionNumber": "369/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 6,
    "name": "Arcana Temptress",
    "supertype": "Creature",
    "types": ["Dark"],
    "level": 10,
    "hp": 8500,
    "rarity": "Borderless",
    "images": {"small": "CardImages/Creatures/Dark/ArcanaEnchantress3"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Divine Presence",
        "trigger": "Passive",
        "effectText": "This Creature can only be summoned by sacrificing Arcana Apprentice. Arcana Temptress gains +1000 attack for each Dark Power card in your Discard Pile.",
        "usableFromBench": false,
        "prerequisites": [{"type": "SacrificeSpecificCreature", "creatureName": "Arcana Apprentice"}],
        "structuredEffects": [
          {
            "type": "ModifyStats",
            "category": "StatBoost",
            "target": "Self",
            "modification": {
                "stat": "Attack",
                "amountPerCondition": 1000,
                "condition": {"type": "CountCardsInDiscard", "cardType": "Power", "powerType": "Dark"}
            }
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Enfeebling Curse",
        "cost": [{"PowerType": "Dark", "count": 4}],
        "damage": null,
        "effectText": "Roll the main dice. If the result is even, draw three cards. If odd, your opponent draws three cards.",
        "structuredEffects": [
          {
            "type": "ConditionalEffect",
            "category": "CardManipulation",
            "condition": {"type": "DiceRoll", "comparison": "IsEven"},
            "trueEffects": [{"type": "DrawCards", "target": "PlayerSelf", "amount": 3}],
            "falseEffects": [{"type": "DrawCards", "target": "PlayerOpponent", "amount": 3}]
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Light", "multiplier": 3}],
    "resistances": [],
    "retreatCost": [],
    "convertedRetreatCost": 0,
    "collectionNumber": "369/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 7,
    "name": "Banshee",
    "supertype": "Creature",
    "types": ["Dark"],
    "level": 6,
    "hp": 5500,
    "rarity": "Uncommon",
    "images": {"small": "CardImages/Creatures/Dark/Banshee1"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Omen of Death",
        "trigger": "OnDestroyedByOpponentCreature",
        "effectText": "When this is destroyed by your opponent's Creature, randomly discard one card from your opponent's Hand.",
        "usableFromBench": false,
        "prerequisites": [],
        "structuredEffects": [
          {
            "type": "DiscardCard",
            "category": "Disruption",
            "target": "OpponentHandRandom",
            "amount": 1
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Deathly Wail",
        "cost": [{"PowerType": "Dark", "count": 2}],
        "damage": 2500,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Light", "multiplier": 2}],
    "resistances": [{"PowerType": "Fire", "reduction": 1000}],
    "retreatCost": [{"PowerType": "Dark", "count": 2}],
    "convertedRetreatCost": 2,
    "collectionNumber": "010/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 8,
    "name": "Bloodfang Vampire",
    "supertype": "Creature",
    "types": ["Dark"],
    "level": 5,
    "hp": 3500,
    "rarity": "Uncommon",
    "images": {"small": "CardImages/Creatures/Dark/BloodfangVampire1"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Deadly Hunt",
        "cost": [{"PowerType": "Dark", "count": 1}],
        "damage": 2000,
        "effectText": null,
        "structuredEffects": []
      },
      {
        "name": "Blood Drain",
        "cost": [{"PowerType": "Dark", "count": 1}],
        "damage": null,
        "effectText": "Roll the main dice. Bloodfang Vampire gains HP equal to the result x500. (this move cannot be used twice in a row)",
        "structuredEffects": [
          {
            "type": "DiceRollDependentEffect",
            "category": "Healing",
            "target": "Self",
            "effectPattern": {
              "type": "ModifyHP",
              "multiplier": 500,
              "basedOn": "DiceResult"
            },
            "usageRestriction": "CannotBeUsedTwiceInARow"
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Light", "multiplier": 2}],
    "resistances": [{"PowerType": "Fire", "reduction": 1000}],
    "retreatCost": [{"PowerType": "Dark", "count": 1}],
    "convertedRetreatCost": 1,
    "collectionNumber": "061/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 9,
    "name": "Buckshot Bill",
    "supertype": "Creature",
    "types": ["Dark"],
    "level": 2,
    "hp": 2000,
    "rarity": "Common",
    "images": {"small": "CardImages/Creatures/Dark/Skriek,BountyHunter1"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Bounty-a-Plenty",
        "cost": [{"PowerType": "Dark", "count": 1}],
        "damage": 1000,
        "effectText": "Roll the main dice. If the result is even, remove one Power card from your opponent's Creature. If odd, remove two Power cards.",
        "structuredEffects": [
          {
            "type": "ConditionalEffect",
            "category": "Disruption",
            "condition": {"type": "DiceRoll", "comparison": "IsEven"},
            "trueEffects": [{"type": "RemovePowerCard", "target": "OpponentCreatureActive", "amount": 1, "criteria": "Any"}],
            "falseEffects": [{"type": "RemovePowerCard", "target": "OpponentCreatureActive", "amount": 2, "criteria": "Any"}]
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Forest", "multiplier": 1}],
    "resistances": [{"PowerType": "Earth", "reduction": 500}],
    "retreatCost": [{"PowerType": "Dark", "count": 1}],
    "convertedRetreatCost": 1,
    "collectionNumber": "117/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 10,
    "name": "Daemorus",
    "supertype": "Creature",
    "types": ["Dark"],
    "level": 9,
    "hp": 7000,
    "rarity": "Rare",
    "images": {"small": "CardImages/Creatures/Dark/Daemorus1"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Devilish Ambition",
        "cost": [{"PowerType": "Dark", "count": 2}],
        "damage": 4000,
        "effectText": null,
        "structuredEffects": []
      },
      {
        "name": "Hellbound",
        "cost": [{"PowerType": "Dark", "count": 3}],
        "damage": null,
        "effectText": "Roll the main dice. If the result is odd, deal +6500 damage to your opponent's Creature. If even, this attack does nothing.",
        "structuredEffects": [
          {
            "type": "ConditionalEffect",
            "category": "Damage",
            "condition": {"type": "DiceRoll", "comparison": "IsOdd"},
            "trueEffects": [{"type": "DealDamage", "target": "OpponentCreatureActive", "amount": 6500}],
            "falseEffects": []
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Light", "multiplier": 2}],
    "resistances": [{"PowerType": "Fire", "reduction": 2000}],
    "retreatCost": [{"PowerType": "Dark", "count": 2}],
    "convertedRetreatCost": 2,
    "collectionNumber": "070/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 11,
    "name": "Daemorus",
    "supertype": "Creature",
    "types": ["Dark"],
    "level": 9,
    "hp": 7000,
    "rarity": "HiddenRare",
    "images": {"small": "CardImages/Creatures/Dark/Daemorus2"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Devilish Ambition",
        "cost": [{"PowerType": "Dark", "count": 2}],
        "damage": 4000,
        "effectText": null,
        "structuredEffects": []
      },
      {
        "name": "Hellbound",
        "cost": [{"PowerType": "Dark", "count": 3}],
        "damage": null,
        "effectText": "Roll the main dice. If the result is odd, deal +6500 damage to your opponent's Creature. If even, this attack does nothing.",
        "structuredEffects": [
          {
            "type": "ConditionalEffect",
            "category": "Damage",
            "condition": {"type": "DiceRoll", "comparison": "IsOdd"},
            "trueEffects": [{"type": "DealDamage", "target": "OpponentCreatureActive", "amount": 6500}],
            "falseEffects": []
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Light", "multiplier": 2}],
    "resistances": [{"PowerType": "Fire", "reduction": 2000}],
    "retreatCost": [{"PowerType": "Dark", "count": 2}],
    "convertedRetreatCost": 2,
    "collectionNumber": "330/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 12,
    "name": "Daemorus",
    "supertype": "Creature",
    "types": ["Dark"],
    "level": 9,
    "hp": 7000,
    "rarity": "Borderless",
    "images": {"small": "CardImages/Creatures/Dark/Daemorus3"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Devilish Ambition",
        "cost": [{"PowerType": "Dark", "count": 2}],
        "damage": 4000,
        "effectText": null,
        "structuredEffects": []
      },
      {
        "name": "Hellbound",
        "cost": [{"PowerType": "Dark", "count": 3}],
        "damage": null,
        "effectText": "Roll the main dice. If the result is odd, deal +6500 damage to your opponent's Creature. If even, this attack does nothing.",
        "structuredEffects": [
          {
            "type": "ConditionalEffect",
            "category": "Damage",
            "condition": {"type": "DiceRoll", "comparison": "IsOdd"},
            "trueEffects": [{"type": "DealDamage", "target": "OpponentCreatureActive", "amount": 6500}],
            "falseEffects": []
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Light", "multiplier": 2}],
    "resistances": [{"PowerType": "Fire", "reduction": 2000}],
    "retreatCost": [{"PowerType": "Dark", "count": 2}],
    "convertedRetreatCost": 2,
    "collectionNumber": "330/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 13,
    "name": "Dark Siren of Rehm",
    "supertype": "Creature",
    "types": ["Dark"],
    "level": 7,
    "hp": 6000,
    "rarity": "Rare",
    "images": {"small": "CardImages/Creatures/Dark/DarkSirenofRehm1"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Enchanting Voice",
        "trigger": "OnSummon",
        "effectText": "When this Creature is summoned onto the field of play. Your opponent's Creature is automatically Confused.",
        "usableFromBench": false,
        "prerequisites": [],
        "structuredEffects": [
          {
            "type": "ApplyStatus",
            "category": "Debuff",
            "target": "OpponentCreatureActive",
            "status": "Confused"
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Deadly Tune",
        "cost": [{"PowerType": "Dark", "count": 3}],
        "damage": 3500,
        "effectText": "Roll the main dice. If the result is a 2, 4, or 6, add +1000 HP to this Creature.",
        "structuredEffects": [
          {
            "type": "ConditionalEffect",
            "category": "Healing",
            "condition": {"type": "DiceRoll", "comparison": "ValueIn", "values": [2,4,6]},
            "trueEffects": [{"type": "ModifyHP", "target": "Self", "amount": 1000}],
            "falseEffects": []
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Forest", "multiplier": 2}],
    "resistances": [{"PowerType": "Earth", "reduction": 1000}],
    "retreatCost": [{"PowerType": "Dark", "count": 2}],
    "convertedRetreatCost": 2,
    "collectionNumber": "023/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 14,
    "name": "Dark Siren of Rehm",
    "supertype": "Creature",
    "types": ["Dark"],
    "level": 7,
    "hp": 6000,
    "rarity": "HiddenRare",
    "images": {"small": "CardImages/Creatures/Dark/DarkSirenofRehm2"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Enchanting Voice",
        "trigger": "OnSummon",
        "effectText": "When this Creature is summoned onto the field of play. Your opponent's Creature is automatically Confused.",
        "usableFromBench": false,
        "prerequisites": [],
        "structuredEffects": [
          {
            "type": "ApplyStatus",
            "category": "Debuff",
            "target": "OpponentCreatureActive",
            "status": "Confused"
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Deadly Tune",
        "cost": [{"PowerType": "Dark", "count": 3}],
        "damage": 3500,
        "effectText": "Roll the main dice. If the result is a 2, 4, or 6, add +1000 HP to this Creature.",
        "structuredEffects": [
          {
            "type": "ConditionalEffect",
            "category": "Healing",
            "condition": {"type": "DiceRoll", "comparison": "ValueIn", "values": [2,4,6]},
            "trueEffects": [{"type": "ModifyHP", "target": "Self", "amount": 1000}],
            "falseEffects": []
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Forest", "multiplier": 2}],
    "resistances": [{"PowerType": "Earth", "reduction": 1000}],
    "retreatCost": [{"PowerType": "Dark", "count": 2}],
    "convertedRetreatCost": 2,
    "collectionNumber": "339/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 15,
    "name": "Dark Siren of Rehm",
    "supertype": "Creature",
    "types": ["Dark"],
    "level": 7,
    "hp": 6000,
    "rarity": "Borderless",
    "images": {"small": "CardImages/Creatures/Dark/DarkSirenofRehm3"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Enchanting Voice",
        "trigger": "OnSummon",
        "effectText": "When this Creature is summoned onto the field of play. Your opponent's Creature is automatically Confused.",
        "usableFromBench": false,
        "prerequisites": [],
        "structuredEffects": [
          {
            "type": "ApplyStatus",
            "category": "Debuff",
            "target": "OpponentCreatureActive",
            "status": "Confused"
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Deadly Tune",
        "cost": [{"PowerType": "Dark", "count": 3}],
        "damage": 3500,
        "effectText": "Roll the main dice. If the result is a 2, 4, or 6, add +1000 HP to this Creature.",
        "structuredEffects": [
          {
            "type": "ConditionalEffect",
            "category": "Healing",
            "condition": {"type": "DiceRoll", "comparison": "ValueIn", "values": [2,4,6]},
            "trueEffects": [{"type": "ModifyHP", "target": "Self", "amount": 1000}],
            "falseEffects": []
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Forest", "multiplier": 2}],
    "resistances": [{"PowerType": "Earth", "reduction": 1000}],
    "retreatCost": [{"PowerType": "Dark", "count": 2}],
    "convertedRetreatCost": 2,
    "collectionNumber": "339/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 16,
    "name": "Delphora",
    "supertype": "Creature",
    "types": ["Dark"],
    "level": 8,
    "hp": 6500,
    "rarity": "Rare",
    "images": {"small": "CardImages/Creatures/Dark/Delphora1"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Lethal Strike",
        "cost": [{"PowerType": "Dark", "count": 2}],
        "damage": 3500,
        "effectText": null,
        "structuredEffects": []
      },
      {
        "name": "Nightmare",
        "cost": [{"PowerType": "Dark", "count": 3}],
        "damage": 4500,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Light", "multiplier": 2}],
    "resistances": [{"PowerType": "Fire", "reduction": 1500}],
    "retreatCost": [{"PowerType": "Dark", "count": 2}],
    "convertedRetreatCost": 2,
    "collectionNumber": "108/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 17,
    "name": "Ephemeral Empress",
    "supertype": "Creature",
    "types": ["Dark"],
    "level": 10,
    "hp": 9000,
    "rarity": "HiddenRare",
    "images": {"small": "CardImages/Creatures/Dark/EphemeralEmpress2"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Forest Requiem",
        "trigger": "OnSentToDiscardPile",
        "effectText": "Ephemeral Empress can only be summoned by sacrificing any level 8 or Higher Dark or Forest type Creature. When Ephemeral Empress is sent to the Discard Pile, send your opponent's active Creature to their Hand.",
        "usableFromBench": false,
        "prerequisites": [{"type": "SacrificeCreature", "criteria": {"minLevel": 8, "types": ["Dark", "Forest"]}}],
        "structuredEffects": [
          {
            "type": "ReturnToHand",
            "category": "Control",
            "target": "OpponentCreatureActive"
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Monarch's Malice",
        "cost": [{"PowerType": "Dark", "count": 2}, {"PowerType": "Forest", "count": 2}],
        "damage": 7000,
        "effectText": "Roll the main dice. If the result is odd, remove one Dark and one Forest Power card from this Creature.",
        "structuredEffects": [
          {
            "type": "ConditionalEffect",
            "category": "ResourceManagement",
            "condition": {"type": "DiceRoll", "comparison": "IsOdd"},
            "trueEffects": [
                {"type": "RemovePowerCard", "target": "Self", "amount": 1, "criteria": {"PowerType": "Dark"}},
                {"type": "RemovePowerCard", "target": "Self", "amount": 1, "criteria": {"PowerType": "Forest"}}
            ],
            "falseEffects": []
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Fire", "multiplier": 3}],
    "resistances": [],
    "retreatCost": [],
    "convertedRetreatCost": 0,
    "collectionNumber": "383/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 18,
    "name": "Ephemeral Empress",
    "supertype": "Creature",
    "types": ["Dark"],
    "level": 10,
    "hp": 9000,
    "rarity": "Borderless",
    "images": {"small": "CardImages/Creatures/Dark/EphemeralEmpress3"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Forest Requiem",
        "trigger": "OnSentToDiscardPile",
        "effectText": "Ephemeral Empress can only be summoned by sacrificing any level 8 or Higher Dark or Forest type Creature. When Ephemeral Empress is sent to the Discard Pile, send your opponent's active Creature to their Hand.",
        "usableFromBench": false,
        "prerequisites": [{"type": "SacrificeCreature", "criteria": {"minLevel": 8, "types": ["Dark", "Forest"]}}],
        "structuredEffects": [
          {
            "type": "ReturnToHand",
            "category": "Control",
            "target": "OpponentCreatureActive"
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Monarch's Malice",
        "cost": [{"PowerType": "Dark", "count": 2}, {"PowerType": "Forest", "count": 2}],
        "damage": 7000,
        "effectText": "Roll the main dice. If the result is odd, remove one Dark and one Forest Power card from this Creature.",
        "structuredEffects": [
          {
            "type": "ConditionalEffect",
            "category": "ResourceManagement",
            "condition": {"type": "DiceRoll", "comparison": "IsOdd"},
            "trueEffects": [
                {"type": "RemovePowerCard", "target": "Self", "amount": 1, "criteria": {"PowerType": "Dark"}},
                {"type": "RemovePowerCard", "target": "Self", "amount": 1, "criteria": {"PowerType": "Forest"}}
            ],
            "falseEffects": []
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Fire", "multiplier": 3}],
    "resistances": [],
    "retreatCost": [],
    "convertedRetreatCost": 0,
    "collectionNumber": "383/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 19,
    "name": "Evela",
    "supertype": "Creature",
    "types": ["Dark"],
    "level": 3,
    "hp": 2500,
    "rarity": "Common",
    "images": {"small": "CardImages/Creatures/Dark/Evila1"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Malice",
        "cost": [{"PowerType": "Dark", "count": 1}],
        "damage": 1000,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Light", "multiplier": 1}],
    "resistances": [{"PowerType": "Fire", "reduction": 500}],
    "retreatCost": [{"PowerType": "Dark", "count": 1}],
    "convertedRetreatCost": 1,
    "collectionNumber": "105/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 20,
    "name": "Fallen Angel",
    "supertype": "Creature",
    "types": ["Dark"],
    "level": 3,
    "hp": 2000,
    "rarity": "Common",
    "images": {"small": "CardImages/Creatures/Dark/FallenAngel1"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Cast Away",
        "cost": [{"PowerType": "Dark", "count": 1}],
        "damage": 1000,
        "effectText": null,
        "structuredEffects": []
      },
      {
        "name": "Disgraced",
        "cost": [{"PowerType": "Dark", "count": 1}],
        "damage": 1500,
        "effectText": "Remove one of your opponent's Spell cards from the field of play if applicable.",
        "structuredEffects": [
          { "type": "RemoveSpellCard", "target": "PlayerOpponent", "amount": 1 }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Light", "multiplier": 1}],
    "resistances": [{"PowerType": "Fire", "reduction": 500}],
    "retreatCost": [{"PowerType": "Dark", "count": 1}],
    "convertedRetreatCost": 1,
    "collectionNumber": "116/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 21,
    "name": "Gorgonite",
    "supertype": "Creature",
    "types": ["Dark"],
    "level": 2,
    "hp": 1500,
    "rarity": "Common",
    "images": {"small": "CardImages/Creatures/Dark/Gorgon1"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Petrifying Gaze",
        "cost": [{"PowerType": "Dark", "count": 1}],
        "damage": null,
        "effectText": "Roll the main dice. If the result is a 4 or lower, the opponent's Creature is Paralyzed.",
        "structuredEffects": [
          {
            "type": "ConditionalEffect",
            "category": "Debuff",
            "condition": {"type": "DiceRoll", "comparison": "LessThanOrEqualTo", "value": 4},
            "trueEffects": [{"type": "ApplyStatus", "target": "OpponentCreatureActive", "status": "Paralyzed"}],
            "falseEffects": []
          }
        ]
      },
      {
        "name": "Scorned",
        "cost": [{"PowerType": "Dark", "count": 1}],
        "damage": 500,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Light", "multiplier": 1}],
    "resistances": [{"PowerType": "Fire", "reduction": 500}],
    "retreatCost": [{"PowerType": "Dark", "count": 1}],
    "convertedRetreatCost": 1,
    "collectionNumber": "114/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 22,
    "name": "Grimlin",
    "supertype": "Creature",
    "types": ["Dark"],
    "level": 3,
    "hp": 2500,
    "rarity": "Common",
    "images": {"small": "CardImages/Creatures/Dark/Grimlin1"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Mischief Maker",
        "trigger": "OnSummon",
        "effectText": "When this Creature is summoned onto the field of play. Randomly discard one card from your opponent's Hand or remove one Spell card on your opponent's side of the field.",
        "usableFromBench": false,
        "prerequisites": [],
        "structuredEffects": [
          {
            "type": "ChoiceEffect",
            "stringParam": "Random",
            "options": [
              {
                "type": "DiscardCardsFromHand",
                "target": "PlayerOpponent",
                "amount": 1,
                "discardMethod": "Random"
              },
              {
                "type": "RemoveSpellCard",
                "target": "PlayerOpponent",
                "amount": 1
              }
            ]
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Shadow Slash",
        "cost": [{"PowerType": "Dark", "count": 1}],
        "damage": 1500,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Light", "multiplier": 1}],
    "resistances": [{"PowerType": "Fire", "reduction": 500}],
    "retreatCost": [{"PowerType": "Dark", "count": 1}],
    "convertedRetreatCost": 1,
    "collectionNumber": "021/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 23,
    "name": "Growler",
    "supertype": "Creature",
    "types": ["Dark"],
    "level": 1,
    "hp": 1000,
    "rarity": "Common",
    "images": {"small": "CardImages/Creatures/Dark/Growler1"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Snarl",
        "cost": [{"PowerType": "Dark", "count": 1}],
        "damage": 500,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Light", "multiplier": 1}],
    "resistances": [{"PowerType": "Fire", "reduction": 500}],
    "retreatCost": [{"PowerType": "Dark", "count": 1}],
    "convertedRetreatCost": 1,
    "collectionNumber": "005/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 24,
    "name": "Havok",
    "supertype": "Creature",
    "types": ["Dark"],
    "level": 1,
    "hp": 1000,
    "rarity": "Common",
    "images": {"small": "CardImages/Creatures/Dark/Havok1"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Impatient",
        "cost": [{"PowerType": "Dark", "count": 1}],
        "damage": null,
        "effectText": "Draw one card from the top of your Deck.",
        "structuredEffects": [
          {
            "type": "DrawCards",
            "category": "CardManipulation",
            "target": "PlayerSelf",
            "amount": 1
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Light", "multiplier": 1}],
    "resistances": [{"PowerType": "Fire", "reduction": 500}],
    "retreatCost": [{"PowerType": "Dark", "count": 1}],
    "convertedRetreatCost": 1,
    "collectionNumber": "052/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 25,
    "name": "Hellspawn",
    "supertype": "Creature",
    "types": ["Dark"],
    "level": 7,
    "hp": 6000,
    "rarity": "Rare",
    "images": {"small": "CardImages/Creatures/Dark/Hellspawn1"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Pure Fear",
        "cost": [{"PowerType": "Dark", "count": 1}],
        "damage": 3500,
        "effectText": null,
        "structuredEffects": []
      },
      {
        "name": "Utter Panic",
        "cost": [{"PowerType": "Dark", "count": 2}],
        "damage": 4000,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Light", "multiplier": 2}],
    "resistances": [{"PowerType": "Fire", "reduction": 1500}],
    "retreatCost": [{"PowerType": "Dark", "count": 2}],
    "convertedRetreatCost": 2,
    "collectionNumber": "071/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 26,
    "name": "Jespa, the Broken",
    "supertype": "Creature",
    "types": ["Dark"],
    "level": 6,
    "hp": 6000,
    "rarity": "Uncommon",
    "images": {"small": "CardImages/Creatures/Dark/JespatheBroken1"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Broken Heart",
        "cost": [{"PowerType": "Dark", "count": 1}],
        "damage": null,
        "effectText": "Roll the main dice. If the result is a 4 or higher, the opponent's Creature is Paralyzed and loses -2500 HP. (this attack does nothing if your opponent's Creature has a prior status effect)",
        "structuredEffects": [
          {
            "type": "ConditionalEffect",
            "category": "Debuff",
            "condition": {
              "type": "And",
              "conditions": [
                {
                  "type": "DiceRoll",
                  "comparison": "GreaterThanOrEqualTo",
                  "amount": 4
                },
                {
                  "type": "TargetHasStatusCondition",
                  "target": "OpponentActiveCreature",
                  "amount": 0
                }
              ]
            },
            "trueEffects": [
              {"type": "ApplyStatus", "target": "OpponentCreatureActive", "status": "Paralyzed"},
              {"type": "ModifyHP", "target": "OpponentCreatureActive", "amount": -2500, "category": "Damage"}
            ],
            "falseEffects": []
          }
        ]
      },
      {
        "name": "Lover's Fate",
        "cost": [{"PowerType": "Dark", "count": 1}],
        "damage": 3500,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Light", "multiplier": 2}],
    "resistances": [{"PowerType": "Fire", "reduction": 1000}],
    "retreatCost": [{"PowerType": "Dark", "count": 2}],
    "convertedRetreatCost": 2,
    "collectionNumber": "041/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 27,
    "name": "Psoglav",
    "supertype": "Creature",
    "types": ["Dark"],
    "level": 7,
    "hp": 6500,
    "rarity": "Rare",
    "images": {"small": "CardImages/Creatures/Dark/Psoglav1"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Dark Fangs",
        "cost": [{"PowerType": "Dark", "count": 2}],
        "damage": 3500,
        "effectText": null,
        "structuredEffects": []
      },
      {
        "name": "Shadow Drain",
        "cost": [{"PowerType": "Dark", "count": 2}],
        "damage": null,
        "effectText": "Discard one Power card from this Creature. Drain -1500 HP from your opponent's Creature and add +1500 HP to this Creature.",
        "structuredEffects": [
          {
            "type": "SequentialEffect",
            "subEffects": [
              {
                "type": "RemovePowerCardFromSelf",
                "amount": 1,
                "costEffect": true
              },
              {
                "type": "ModifyHP",
                "target": "OpponentActiveCreature",
                "amount": -1500
              },
              {
                "type": "ModifyHP",
                "target": "Self",
                "amount": 1500
              }
            ]
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Light", "multiplier": 2}],
    "resistances": [{"PowerType": "Fire", "reduction": 1000}],
    "retreatCost": [{"PowerType": "Dark", "count": 2}],
    "convertedRetreatCost": 2,
    "collectionNumber": "140/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 28,
    "name": "Psoglav",
    "supertype": "Creature",
    "types": ["Dark"],
    "level": 7,
    "hp": 6500,
    "rarity": "HiddenRare",
    "images": {"small": "CardImages/Creatures/Dark/Psoglav2"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Dark Fangs",
        "cost": [{"PowerType": "Dark", "count": 2}],
        "damage": 3500,
        "effectText": null,
        "structuredEffects": []
      },
      {
        "name": "Shadow Drain",
        "cost": [{"PowerType": "Dark", "count": 2}],
        "damage": null,
        "effectText": "Discard one Power card from this Creature. Drain -1500 HP from your opponent's Creature and add +1500 HP to this Creature.",
        "structuredEffects": [
          {
            "type": "SequentialEffect",
            "subEffects": [
              {
                "type": "RemovePowerCardFromSelf",
                "amount": 1,
                "costEffect": true
              },
              {
                "type": "ModifyHP",
                "target": "OpponentActiveCreature",
                "amount": -1500
              },
              {
                "type": "ModifyHP",
                "target": "Self",
                "amount": 1500
              }
            ]
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Light", "multiplier": 2}],
    "resistances": [{"PowerType": "Fire", "reduction": 1000}],
    "retreatCost": [{"PowerType": "Dark", "count": 2}],
    "convertedRetreatCost": 2,
    "collectionNumber": "321/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 29,
    "name": "Psoglav",
    "supertype": "Creature",
    "types": ["Dark"],
    "level": 7,
    "hp": 6500,
    "rarity": "Borderless",
    "images": {"small": "CardImages/Creatures/Dark/Psoglav3"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Dark Fangs",
        "cost": [{"PowerType": "Dark", "count": 2}],
        "damage": 3500,
        "effectText": null,
        "structuredEffects": []
      },
      {
        "name": "Shadow Drain",
        "cost": [{"PowerType": "Dark", "count": 2}],
        "damage": null,
        "effectText": "Discard one Power card from this Creature. Drain -1500 HP from your opponent's Creature and add +1500 HP to this Creature.",
        "structuredEffects": [
          {
            "type": "SequentialEffect",
            "subEffects": [
              {
                "type": "RemovePowerCardFromSelf",
                "amount": 1,
                "costEffect": true
              },
              {
                "type": "ModifyHP",
                "target": "OpponentActiveCreature",
                "amount": -1500
              },
              {
                "type": "ModifyHP",
                "target": "Self",
                "amount": 1500
              }
            ]
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Light", "multiplier": 2}],
    "resistances": [{"PowerType": "Fire", "reduction": 1000}],
    "retreatCost": [{"PowerType": "Dark", "count": 2}],
    "convertedRetreatCost": 2,
    "collectionNumber": "320/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 30,
    "name": "Rakshasa",
    "supertype": "Creature",
    "types": ["Dark"],
    "level": 5,
    "hp": 4500,
    "rarity": "Uncommon",
    "images": {"small": "CardImages/Creatures/Dark/Pandarkness1"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Shadow Paw",
        "cost": [{"PowerType": "Dark", "count": 1}],
        "damage": 3000,
        "effectText": "Roll the main dice. If the result is a 3, 5, or 6. Draw one card from the top of your Deck.",
        "structuredEffects": [
          {
            "type": "ConditionalEffect",
            "category": "CardManipulation",
            "condition": {"type": "DiceRoll", "comparison": "ValueIn", "values": [3,5,6]},
            "trueEffects": [{"type": "DrawCards", "target": "PlayerSelf", "amount": 1}],
            "falseEffects": []
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Light", "multiplier": 2}],
    "resistances": [{"PowerType": "Fire", "reduction": 500}],
    "retreatCost": [{"PowerType": "Dark", "count": 1}],
    "convertedRetreatCost": 1,
    "collectionNumber": "067/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 31,
    "name": "Sinister Imp",
    "supertype": "Creature",
    "types": ["Dark"],
    "level": 4,
    "hp": 3500,
    "rarity": "Uncommon",
    "images": {"small": "CardImages/Creatures/Dark/SisteroftheImp1"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Dark Magic",
        "trigger": "OnDestroyedByOpponentCreature",
        "effectText": "When this Creature is destroyed by your opponent's Creature, search your Deck for any two Secret cards. Show your opponent and place them in your Hand.",
        "usableFromBench": false,
        "prerequisites": [],
        "structuredEffects": [
          {
            "type": "SearchDeck",
            "category": "CardManipulation",
            "target": "PlayerSelf",
            "searchCriteria": {"cardSuperType": "Secret"},
            "amount": 2,
            "action": "AddToHandAndShow"
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Shadow Bolt",
        "cost": [{"PowerType": "Dark", "count": 1}],
        "damage": 2000,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Forest", "multiplier": 2}],
    "resistances": [{"PowerType": "Earth", "reduction": 500}],
    "retreatCost": [{"PowerType": "Dark", "count": 1}],
    "convertedRetreatCost": 1,
    "collectionNumber": "135/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 32,
    "name": "Smaugom",
    "supertype": "Creature",
    "types": ["Dark"],
    "level": 9,
    "hp": 7500,
    "rarity": "Rare",
    "images": {"small": "CardImages/Creatures/Dark/DragonofDeath1"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Necrotic Breath",
        "cost": [{"PowerType": "Dark", "count": 2}],
        "damage": 4500,
        "effectText": "Automatically Poison your opponent's Creature.",
        "structuredEffects": [
          {
            "type": "ApplyStatus",
            "category": "Debuff",
            "target": "OpponentCreatureActive",
            "status": "Poison"
          }
        ]
      },
      {
        "name": "Deadly Strike",
        "cost": [{"PowerType": "Dark", "count": 3}],
        "damage": 6000,
        "effectText": "Spell cards have no effect on this attack.",
        "attackProperties": {"immuneToSpellCards": true} 
      }
    ],
    "weaknesses": [{"PowerType": "Forest", "multiplier": 2}],
    "resistances": [{"PowerType": "Earth", "reduction": 2000}],
    "retreatCost": [{"PowerType": "Dark", "count": 3}],
    "convertedRetreatCost": 3,
    "collectionNumber": "007/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 33,
    "name": "Tetsu Yami",
    "supertype": "Creature",
    "types": ["Dark"],
    "level": 10,
    "hp": 8500,
    "rarity": "HiddenRare",
    "images": {"small": "CardImages/Creatures/Dark/TetsuYami2"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Shadow of the Earth",
        "trigger": "Passive",
        "effectText": "Tetsu Yami can only be summoned by sacrificing any level 8 or higher Dark or Earth type Creature. Tetsu Yami gains +1000 attack for every Earth type Creature on your Bench.",
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
                "condition": {"type": "CountCreaturesOnBench", "powerType": "Earth"}
            }
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Darkened Steel",
        "cost": [{"PowerType": "Dark", "count": 2}, {"PowerType": "Earth", "count": 2}],
        "damage": 5000,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Wind", "multiplier": 3}],
    "resistances": [],
    "retreatCost": [],
    "convertedRetreatCost": 0,
    "collectionNumber": "384/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 34,
    "name": "Tetsu Yami",
    "supertype": "Creature",
    "types": ["Dark"],
    "level": 10,
    "hp": 8500,
    "rarity": "Borderless",
    "images": {"small": "CardImages/Creatures/Dark/TetsuYami3"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Shadow of the Earth",
        "trigger": "Passive",
        "effectText": "Tetsu Yami can only be summoned by sacrificing any level 8 or higher Dark or Earth type Creature. Tetsu Yami gains +1000 attack for every Earth type Creature on your Bench.",
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
                "condition": {"type": "CountCreaturesOnBench", "powerType": "Earth"}
            }
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Darkened Steel",
        "cost": [{"PowerType": "Dark", "count": 2}, {"PowerType": "Earth", "count": 2}],
        "damage": 5000,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Wind", "multiplier": 3}],
    "resistances": [],
    "retreatCost": [],
    "convertedRetreatCost": 0,
    "collectionNumber": "384/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 35,
    "name": "Werelephant",
    "supertype": "Creature",
    "types": ["Dark"],
    "level": 10,
    "hp": 9500,
    "rarity": "UltraRare",
    "images": {"small": "CardImages/Creatures/Dark/Werelephant1"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Tusks of Terror",
        "trigger": "Passive", 
        "effectText": "To summon, you must play Moonlight Awakening and have Pebblephant in the field of play. Once summoned, your opponent cannot Sacrifice any Bench Creatures.",
        "usableFromBench": false,
        "prerequisites": [
            {"type": "PlaySpecificCard", "cardName": "Moonlight Awakening"},
            {"type": "SpecificCreatureInPlay", "creatureName": "Pebblephant"}
        ],
        "structuredEffects": [
          {
            "type": "PreventBenchSacrifice",
            "category": "Control",
            "target": "PlayerOpponent"
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Dark Stampede",
        "cost": [{"PowerType": "Dark", "count": 3}, {"PowerType": "Earth", "count": 1}],
        "damage": 6000,
        "effectText": "If your opponent's Creature is not destroyed by this attack. Remove two Power cards from your opponent's Creature.",
        "structuredEffects": [
          {
            "type": "ConditionalEffect",
            "category": "Disruption",
            "condition": {"type": "TargetNotDestroyedByAttack"},
            "trueEffects": [{"type": "RemovePowerCard", "target": "OpponentCreatureActive", "amount": 2, "criteria": "Any"}],
            "falseEffects": []
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Forest", "multiplier": 3}],
    "resistances": [],
    "retreatCost": [],
    "convertedRetreatCost": 0,
    "collectionNumber": "165/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 36,
    "name": "Werelephant",
    "supertype": "Creature",
    "types": ["Dark"],
    "level": 10,
    "hp": 9500,
    "rarity": "HiddenRare",
    "images": {"small": "CardImages/Creatures/Dark/Werelephant2"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Tusks of Terror",
        "trigger": "Passive",
        "effectText": "To summon, you must play Moonlight Awakening and have Pebblephant in the field of play. Once summoned, your opponent cannot Sacrifice any Bench Creatures.",
        "usableFromBench": false,
         "prerequisites": [
            {"type": "PlaySpecificCard", "cardName": "Moonlight Awakening"},
            {"type": "SpecificCreatureInPlay", "creatureName": "Pebblephant"}
        ],
        "structuredEffects": [
          {
            "type": "PreventBenchSacrifice",
            "category": "Control",
            "target": "PlayerOpponent"
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Dark Stampede",
        "cost": [{"PowerType": "Dark", "count": 3}, {"PowerType": "Earth", "count": 1}],
        "damage": 6000,
        "effectText": "If your opponent's Creature is not destroyed by this attack. Remove two Power cards from your opponent's Creature.",
        "structuredEffects": [
          {
            "type": "ConditionalEffect",
            "category": "Disruption",
            "condition": {"type": "TargetNotDestroyedByAttack"},
            "trueEffects": [{"type": "RemovePowerCard", "target": "OpponentCreatureActive", "amount": 2, "criteria": "Any"}],
            "falseEffects": []
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Forest", "multiplier": 3}],
    "resistances": [],
    "retreatCost": [],
    "convertedRetreatCost": 0,
    "collectionNumber": "359/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 2001,
    "name": "Werelephant",
    "supertype": "Creature",
    "types": ["Dark"],
    "level": 10,
    "hp": 9500,
    "rarity": "Borderless",
    "images": {"small": "CardImages/Creatures/Dark/Werelephant3"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Tusks of Terror",
        "trigger": "Passive",
        "effectText": "To summon, you must play Moonlight Awakening and have Pebblephant in the field of play. Once summoned, your opponent cannot Sacrifice any Bench Creatures.",
        "usableFromBench": false,
         "prerequisites": [
            {"type": "PlaySpecificCard", "cardName": "Moonlight Awakening"},
            {"type": "SpecificCreatureInPlay", "creatureName": "Pebblephant"}
        ],
        "structuredEffects": [
          {
            "type": "PreventBenchSacrifice",
            "category": "Control",
            "target": "PlayerOpponent"
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Dark Stampede",
        "cost": [{"PowerType": "Dark", "count": 3}, {"PowerType": "Earth", "count": 1}],
        "damage": 6000,
        "effectText": "If your opponent's Creature is not destroyed by this attack. Remove two Power cards from your opponent's Creature.",
        "structuredEffects": [
          {
            "type": "ConditionalEffect",
            "category": "Disruption",
            "condition": {"type": "TargetNotDestroyedByAttack"},
            "trueEffects": [{"type": "RemovePowerCard", "target": "OpponentCreatureActive", "amount": 2, "criteria": "Any"}],
            "falseEffects": []
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Forest", "multiplier": 3}],
    "resistances": [],
    "retreatCost": [],
    "convertedRetreatCost": 0,
    "collectionNumber": "359/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 38,
    "name": "Anuket",
    "supertype": "Creature",
    "types": ["Earth"],
    "level": 8,
    "hp": 7000,
    "rarity": "Rare",
    "images": {"small": "CardImages/Creatures/Earth/Anuket1"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Ankh Blast",
        "cost": [{"PowerType": "Earth", "count": 2}],
        "damage": 3500,
        "effectText": null,
        "structuredEffects": []
      },
      {
        "name": "Fury of the Nile",
        "cost": [{"PowerType": "Earth", "count": 2}, {"PowerType": "Water", "count": 1}],
        "damage": 4500,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Wind", "multiplier": 2}],
    "resistances": [{"PowerType": "Dark", "reduction": 1500}],
    "retreatCost": [{"PowerType": "Earth", "count": 2}],
    "convertedRetreatCost": 2,
    "collectionNumber": "153/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 39,
    "name": "Anuket",
    "supertype": "Creature",
    "types": ["Earth"],
    "level": 8,
    "hp": 7000,
    "rarity": "HiddenRare",
    "images": {"small": "CardImages/Creatures/Earth/Anuket2"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Ankh Blast",
        "cost": [{"PowerType": "Earth", "count": 2}],
        "damage": 3500,
        "effectText": null,
        "structuredEffects": []
      },
      {
        "name": "Fury of the Nile",
        "cost": [{"PowerType": "Earth", "count": 2}, {"PowerType": "Water", "count": 1}],
        "damage": 4500,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Wind", "multiplier": 2}],
    "resistances": [{"PowerType": "Dark", "reduction": 1500}],
    "retreatCost": [{"PowerType": "Earth", "count": 2}],
    "convertedRetreatCost": 2,
    "collectionNumber": "325/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 40,
    "name": "Anuket",
    "supertype": "Creature",
    "types": ["Earth"],
    "level": 8,
    "hp": 7000,
    "rarity": "Borderless",
    "images": {"small": "CardImages/Creatures/Earth/Anuket3"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Ankh Blast",
        "cost": [{"PowerType": "Earth", "count": 2}],
        "damage": 3500,
        "effectText": null,
        "structuredEffects": []
      },
      {
        "name": "Fury of the Nile",
        "cost": [{"PowerType": "Earth", "count": 2}, {"PowerType": "Water", "count": 1}],
        "damage": 4500,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Wind", "multiplier": 2}],
    "resistances": [{"PowerType": "Dark", "reduction": 1500}],
    "retreatCost": [{"PowerType": "Earth", "count": 2}],
    "convertedRetreatCost": 2,
    "collectionNumber": "325/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 41,
    "name": "Bristleback",
    "supertype": "Creature",
    "types": ["Earth"],
    "level": 10,
    "hp": 7000,
    "rarity": "HiddenRare",
    "images": {"small": "CardImages/Creatures/Earth/Bristleback2"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Titan of the Trees",
        "trigger": "Passive",
        "effectText": "Bristleback can only be summoned by sacrificing any level 8 or higher Earth or Forest type Creature. For each Earth and Forest type Creature on your Bench, add +500 HP to Bristleback.",
        "usableFromBench": false,
        "prerequisites": [{"type": "SacrificeCreature", "criteria": {"minLevel": 8, "types": ["Earth", "Forest"]}}],
        "structuredEffects": [
          {
            "type": "ModifyStats",
            "category": "StatBoost",
            "target": "Self",
            "modification": {
              "stat": "HP",
              "amountPerCondition": 500,
              "condition": {"type": "CountCreaturesOnBench", "types": ["Earth", "Forest"]}
            }
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Wrath of the Wild",
        "cost": [{"PowerType": "Earth", "count": 2}, {"PowerType": "Forest", "count": 2}],
        "damage": 8000,
        "effectText": "You cannot attack next turn.",
        "structuredEffects": [
          {
            "type": "ApplyTemporaryRestriction",
            "target": "Self",
            "stringParam": "CannotAttack",
            "duration": 2
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Fire", "multiplier": 3}],
    "resistances": [],
    "retreatCost": [],
    "convertedRetreatCost": 0,
    "collectionNumber": "374/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 42,
    "name": "Bristleback",
    "supertype": "Creature",
    "types": ["Earth"],
    "level": 10,
    "hp": 7000,
    "rarity": "Borderless",
    "images": {"small": "CardImages/Creatures/Earth/Bristleback3"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Titan of the Trees",
        "trigger": "Passive",
        "effectText": "Bristleback can only be summoned by sacrificing any level 8 or higher Earth or Forest type Creature. For each Earth and Forest type Creature on your Bench, add +500 HP to Bristleback.",
        "usableFromBench": false,
        "prerequisites": [{"type": "SacrificeCreature", "criteria": {"minLevel": 8, "types": ["Earth", "Forest"]}}],
        "structuredEffects": [
          {
            "type": "ModifyStats",
            "category": "StatBoost",
            "target": "Self",
            "modification": {
              "stat": "HP",
              "amountPerCondition": 500,
              "condition": {"type": "CountCreaturesOnBench", "types": ["Earth", "Forest"]}
            }
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Wrath of the Wild",
        "cost": [{"PowerType": "Earth", "count": 2}, {"PowerType": "Forest", "count": 2}],
        "damage": 8000,
        "effectText": "You cannot attack next turn.",
        "structuredEffects": [
          {
            "type": "ApplyTemporaryRestriction",
            "target": "Self",
            "stringParam": "CannotAttack",
            "duration": 2
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Fire", "multiplier": 3}],
    "resistances": [],
    "retreatCost": [],
    "convertedRetreatCost": 0,
    "collectionNumber": "374/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 43,
    "name": "Dolphite",
    "supertype": "Creature",
    "types": ["Earth"],
    "level": 1,
    "hp": 1000,
    "rarity": "Common",
    "images": {"small": "CardImages/Creatures/Earth/Dolphite1"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Sand Splash",
        "cost": [{"PowerType": "Earth", "count": 1}],
        "damage": 500,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Water", "multiplier": 1}],
    "resistances": [{"PowerType": "Forest", "reduction": 500}],
    "retreatCost": [{"PowerType": "Earth", "count": 1}],
    "convertedRetreatCost": 1,
    "collectionNumber": "034/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 44,
    "name": "Geogolem",
    "supertype": "Creature",
    "types": ["Earth"],
    "level": 2,
    "hp": 1000,
    "rarity": "Common",
    "images": {"small": "CardImages/Creatures/Earth/Geogolem1"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Rock Throw",
        "cost": [{"PowerType": "Earth", "count": 1}],
        "damage": 500,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Wind", "multiplier": 1}],
    "resistances": [{"PowerType": "Dark", "reduction": 500}],
    "retreatCost": [{"PowerType": "Earth", "count": 1}],
    "convertedRetreatCost": 1,
    "collectionNumber": "019/311",
    "illustrator": "Mystik Creatures"
  },
{
  "id": 45,
  "name": "Hex-Gargoyle",
  "supertype": "Creature",
  "types": ["Earth"],
  "level": 6,
  "hp": 5500,
  "rarity": "Uncommon",
  "images": {"small": "CardImages/Creatures/Earth/GargoyleofSersura1"},
  "setCode": "MC01",
  "abilities": [],
  "attacks": [
    {
      "name": "Waiting",
      "cost": [{"PowerType": "Earth", "count": 1}],
      "damage": null,
      "effectText": "On your next turn, inflict double damage when attacking with this Creature. (this move cannot be used twice in a row)",
      "structuredEffects": [
        {
          "type": "ApplyDoubleDamageNextTurn",
          "target": "Self"
        },
        {
          "type": "UsageRestriction",
          "restrictionType": "CannotBeUsedTwiceInARow"
        }
      ]
    },
    {
      "name": "Petrified",
      "cost": [{"PowerType": "Earth", "count": 1}],
      "damage": 2000,
      "effectText": "Flip the main coin. If the result is tails, Paralyze your opponent's Creature.",
      "structuredEffects": [
        {
          "type": "ConditionalEffect",
          "category": "Debuff",
          "condition": {"type": "CoinFlip", "comparison": "EqualTo", "stringValue": "Tails"},
          "trueEffects": [{"type": "ApplyStatus", "target": "OpponentCreatureActive", "status": "Paralyzed"}],
          "falseEffects": []
        }
      ]
    }
  ],
  "weaknesses": [{"PowerType": "Light", "multiplier": 2}],
  "resistances": [{"PowerType": "Wind", "reduction": 1000}],
  "retreatCost": [{"PowerType": "Earth", "count": 2}],
  "convertedRetreatCost": 2,
  "collectionNumber": "004/311",
  "illustrator": "Mystik Creatures"
},
  {
    "id": 46,
    "name": "Indus Worm",
    "supertype": "Creature",
    "types": ["Earth"],
    "level": 2,
    "hp": 1500,
    "rarity": "Common",
    "images": {"small": "CardImages/Creatures/Earth/IndusWorm1"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Stone Skin",
        "trigger": "OnAttacked",
        "effectText": "When this Creature is attacked, reduce the damage by -500.",
        "usableFromBench": false,
        "prerequisites": [],
        "structuredEffects": [
          {
            "type": "ReduceDamageTaken",
            "amount": 500
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Burrow",
        "cost": [{"PowerType": "Earth", "count": 1}],
        "damage": 500,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Wind", "multiplier": 1}],
    "resistances": [{"PowerType": "Dark", "reduction": 500}],
    "retreatCost": [{"PowerType": "Earth", "count": 1}],
    "convertedRetreatCost": 1,
    "collectionNumber": "094/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 47,
    "name": "Isxóhe",
    "supertype": "Creature",
    "types": ["Earth"],
    "level": 10,
    "hp": 9500,
    "rarity": "UltraRare",
    "images": {"small": "CardImages/Creatures/Earth/Isxóhe1"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Earthly Fury",
        "trigger": "Passive",
        "effectText": "To summon, you must play Spirit Guide. Isxóhe gains an additional +500 attack for every Forest Creature in your Discard Pile.",
        "usableFromBench": false,
        "prerequisites": [{"type": "PlaySpecificCard", "cardName": "Spirit Guide"}],
        "structuredEffects": [
          {
            "type": "ModifyStats",
            "category": "StatBoost",
            "target": "Self",
            "modification": {
              "stat": "Attack",
              "amountPerCondition": 500,
              "condition": {"type": "CountCreaturesInDiscard", "powerType": "Forest"}
            }
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Terra Claw",
        "cost": [{"PowerType": "Earth", "count": 3}, {"PowerType": "Forest", "count": 1}],
        "damage": 5000,
        "effectText": "Roll the main dice. If the result is even, remove one level 6 or lower Creature on your opponent's Bench and place it in their Discard Pile.",
        "structuredEffects": [
          {
            "type": "ConditionalEffect",
            "category": "Disruption",
            "condition": {"type": "DiceRoll", "comparison": "IsEven"},
            "trueEffects": [{"type": "RemoveCreatureFromBenchToDiscard", "target": "OpponentBench", "amount": 1, "criteria": {"maxLevel": 6}, "selection": "PlayerChoiceOpponentBench"}],
            "falseEffects": []
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Fire", "multiplier": 3}],
    "resistances": [],
    "retreatCost": [],
    "convertedRetreatCost": 0,
    "collectionNumber": "162/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 48,
    "name": "Isxóhe",
    "supertype": "Creature",
    "types": ["Earth"],
    "level": 10,
    "hp": 9500,
    "rarity": "Rare",
    "images": {"small": "CardImages/Creatures/Earth/Isxóhe2"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Earthly Fury",
        "trigger": "Passive",
        "effectText": "To summon, you must play Spirit Guide. Isxóhe gains an additional +500 attack for every Forest Creature in your Discard Pile.",
        "usableFromBench": false,
        "prerequisites": [{"type": "PlaySpecificCard", "cardName": "Spirit Guide"}],
        "structuredEffects": [
          {
            "type": "ModifyStats",
            "category": "StatBoost",
            "target": "Self",
            "modification": {
              "stat": "Attack",
              "amountPerCondition": 500,
              "condition": {"type": "CountCreaturesInDiscard", "powerType": "Forest"}
            }
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Terra Claw",
        "cost": [{"PowerType": "Earth", "count": 3}, {"PowerType": "Forest", "count": 1}],
        "damage": 5000,
        "effectText": "Roll the main dice. If the result is even, remove one level 6 or lower Creature on your opponent's Bench and place it in their Discard Pile.",
        "structuredEffects": [
          {
            "type": "ConditionalEffect",
            "category": "Disruption",
            "condition": {"type": "DiceRoll", "comparison": "IsEven"},
            "trueEffects": [{"type": "RemoveCreatureFromBenchToDiscard", "target": "OpponentBench", "amount": 1, "criteria": {"maxLevel": 6}, "selection": "PlayerChoiceOpponentBench"}],
            "falseEffects": []
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Fire", "multiplier": 3}],
    "resistances": [],
    "retreatCost": [],
    "convertedRetreatCost": 0,
    "collectionNumber": "361/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 49,
    "name": "Isxóhe",
    "supertype": "Creature",
    "types": ["Earth"],
    "level": 10,
    "hp": 9500,
    "rarity": "HiddenRare",
    "images": {"small": "CardImages/Creatures/Earth/Isxóhe2"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Earthly Fury",
        "trigger": "Passive",
        "effectText": "To summon, you must play Spirit Guide. Isxóhe gains an additional +500 attack for every Forest Creature in your Discard Pile.",
        "usableFromBench": false,
        "prerequisites": [{"type": "PlaySpecificCard", "cardName": "Spirit Guide"}],
        "structuredEffects": [
          {
            "type": "ModifyStats",
            "category": "StatBoost",
            "target": "Self",
            "modification": {
              "stat": "Attack",
              "amountPerCondition": 500,
              "condition": {"type": "CountCreaturesInDiscard", "powerType": "Forest"}
            }
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Terra Claw",
        "cost": [{"PowerType": "Earth", "count": 3}, {"PowerType": "Forest", "count": 1}],
        "damage": 5000,
        "effectText": "Roll the main dice. If the result is even, remove one level 6 or lower Creature on your opponent's Bench and place it in their Discard Pile.",
        "structuredEffects": [
          {
            "type": "ConditionalEffect",
            "category": "Disruption",
            "condition": {"type": "DiceRoll", "comparison": "IsEven"},
            "trueEffects": [{"type": "RemoveCreatureFromBenchToDiscard", "target": "OpponentBench", "amount": 1, "criteria": {"maxLevel": 6}, "selection": "PlayerChoiceOpponentBench"}],
            "falseEffects": []
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Fire", "multiplier": 3}],
    "resistances": [],
    "retreatCost": [],
    "convertedRetreatCost": 0,
    "collectionNumber": "361/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 2002,
    "name": "Isxóhe",
    "supertype": "Creature",
    "types": ["Earth"],
    "level": 10,
    "hp": 9500,
    "rarity": "Borderless",
    "images": {"small": "CardImages/Creatures/Earth/Isxóhe3"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Earthly Fury",
        "trigger": "Passive",
        "effectText": "To summon, you must play Spirit Guide. Isxóhe gains an additional +500 attack for every Forest Creature in your Discard Pile.",
        "usableFromBench": false,
        "prerequisites": [{"type": "PlaySpecificCard", "cardName": "Spirit Guide"}],
        "structuredEffects": [
          {
            "type": "ModifyStats",
            "category": "StatBoost",
            "target": "Self",
            "modification": {
              "stat": "Attack",
              "amountPerCondition": 500,
              "condition": {"type": "CountCreaturesInDiscard", "powerType": "Forest"}
            }
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Terra Claw",
        "cost": [{"PowerType": "Earth", "count": 3}, {"PowerType": "Forest", "count": 1}],
        "damage": 5000,
        "effectText": "Roll the main dice. If the result is even, remove one level 6 or lower Creature on your opponent's Bench and place it in their Discard Pile.",
        "structuredEffects": [
          {
            "type": "ConditionalEffect",
            "category": "Disruption",
            "condition": {"type": "DiceRoll", "comparison": "IsEven"},
            "trueEffects": [{"type": "RemoveCreatureFromBenchToDiscard", "target": "OpponentBench", "amount": 1, "criteria": {"maxLevel": 6}, "selection": "PlayerChoiceOpponentBench"}],
            "falseEffects": []
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Fire", "multiplier": 3}],
    "resistances": [],
    "retreatCost": [],
    "convertedRetreatCost": 0,
    "collectionNumber": "162/311",
    "illustrator": "Mystik Creatures"
  },  
  {
    "id": 50,
    "name": "King Gaom",
    "supertype": "Creature",
    "types": ["Earth"],
    "level": 3,
    "hp": 3000,
    "rarity": "Common",
    "images": {"small": "CardImages/Creatures/Earth/KingGaom1"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "New Toys",
        "trigger": "PassiveWhileActive",
        "effectText": "You may play one extra Magik card per turn while King Gaom is in the active field of play.",
        "usableFromBench": false,
        "prerequisites": [],
        "structuredEffects": [
          {
            "type": "PlayExtraMagikCard",
            "amount": 1
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Play Time",
        "cost": [{"PowerType": "Earth", "count": 1}],
        "damage": 1500,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Dark", "multiplier": 1}],
    "resistances": [{"PowerType": "Wind", "reduction": 500}],
    "retreatCost": [{"PowerType": "Earth", "count": 1}],
    "convertedRetreatCost": 1,
    "collectionNumber": "072/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 51,
    "name": "Laviathron",
    "supertype": "Creature",
    "types": ["Earth"],
    "level": 10,
    "hp": 8500,
    "rarity": "HiddenRare",
    "images": {"small": "CardImages/Creatures/Earth/Laviathron2"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Volcanic Vent",
        "trigger": "Passive",
        "effectText": "Laviathron can only be summoned by sacrificing any level 8 or higher Earth or Fire type Creature. Once summoned, Laviathron is not affected by negative Terrain effects.",
        "usableFromBench": false,
        "prerequisites": [{"type": "SacrificeCreature", "criteria": {"minLevel": 8, "types": ["Earth", "Fire"]}}],
        "structuredEffects": [
          {
            "type": "ApplyImmunity",
            "target": "Self",
            "stringParam": "NegativeTerrainEffects"
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Molten Fury",
        "cost": [{"PowerType": "Earth", "count": 2}, {"PowerType": "Fire", "count": 2}],
        "damage": 6500,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Water", "multiplier": 3}],
    "resistances": [],
    "retreatCost": [],
    "convertedRetreatCost": 0,
    "collectionNumber": "373/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 52,
    "name": "Laviathron",
    "supertype": "Creature",
    "types": ["Earth"],
    "level": 10,
    "hp": 8500,
    "rarity": "Borderless",
    "images": {"small": "CardImages/Creatures/Earth/Laviathron3"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Volcanic Vent",
        "trigger": "Passive",
        "effectText": "Laviathron can only be summoned by sacrificing any level 8 or higher Earth or Fire type Creature. Once summoned, Laviathron is not affected by negative Terrain effects.",
        "usableFromBench": false,
        "prerequisites": [{"type": "SacrificeCreature", "criteria": {"minLevel": 8, "types": ["Earth", "Fire"]}}],
        "structuredEffects": [
          {
            "type": "ApplyImmunity",
            "target": "Self",
            "stringParam": "NegativeTerrainEffects"
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Molten Fury",
        "cost": [{"PowerType": "Earth", "count": 2}, {"PowerType": "Fire", "count": 2}],
        "damage": 6500,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Water", "multiplier": 3}],
    "resistances": [],
    "retreatCost": [],
    "convertedRetreatCost": 0,
    "collectionNumber": "373/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 53,
    "name": "Lizardfolk Whelp",
    "supertype": "Creature",
    "types": ["Earth"],
    "level": 4,
    "hp": 2500,
    "rarity": "Uncommon",
    "images": {"small": "CardImages/Creatures/Earth/Catctus1"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Explorer",
        "cost": [{"PowerType": "Earth", "count": 1}],
        "damage": 1500,
        "effectText": "Remove one Spell card your opponent may have on the field and place it in their Discard Pile.",
        "structuredEffects": [
          {
            "type": "RemoveSpellCardToDiscard",
            "target": "OpponentField",
            "amount": 1,
            "selection": "Choice"
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Fire", "multiplier": 1}],
    "resistances": [{"PowerType": "Thunder", "reduction": 500}],
    "retreatCost": [{"PowerType": "Earth", "count": 1}],
    "convertedRetreatCost": 1,
    "collectionNumber": "074/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 54,
    "name": "Mafistu",
    "supertype": "Creature",
    "types": ["Earth"],
    "level": 5,
    "hp": 3500,
    "rarity": "Uncommon",
    "images": {"small": "CardImages/Creatures/Earth/Mafistu1"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Thrash",
        "cost": [{"PowerType": "Earth", "count": 2}],
        "damage": 1000,
        "effectText": "Flip the main coin three times. For each heads flipped, this attack deals an additional +1000 damage.",
        "structuredEffects": [
          {
            "type": "DamageModifierBasedOnCoinFlips",
            "numCoins": 3,
            "bonusPerHead": 1000,
            "target": "OpponentCreatureActive"
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Wind", "multiplier": 2}],
    "resistances": [{"PowerType": "Dark", "reduction": 500}],
    "retreatCost": [{"PowerType": "Earth", "count": 1}],
    "convertedRetreatCost": 1,
    "collectionNumber": "110/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 55,
    "name": "Ophiotaurus",
    "supertype": "Creature",
    "types": ["Earth"],
    "level": 8,
    "hp": 6500,
    "rarity": "Rare",
    "images": {"small": "CardImages/Creatures/Earth/Ophiotauros1"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Earthquake",
        "cost": [{"PowerType": "Earth", "count": 3}],
        "damage": 4000,
        "effectText": "Flip the main coin. If the result is heads, discard one Power card from your opponent's Creature.",
        "structuredEffects": [
          {
            "type": "ConditionalEffect",
            "category": "Disruption",
            "condition": {"type": "CoinFlip", "comparison": "EqualTo", "stringValue": "Heads"},
            "trueEffects": [{"type": "RemovePowerCard", "target": "OpponentCreatureActive", "amount": 1, "criteria": "Any"}],
            "falseEffects": []
          }
        ]
      },
      {
        "name": "Charged Up",
        "cost": [{"PowerType": "Earth", "count": 2}],
        "damage": 5500,
        "effectText": "(you cannot attack next turn after using this move)",
        "structuredEffects": [
          {
            "type": "ApplyTemporaryRestriction",
            "target": "Self",
            "stringParam": "CannotAttack",
            "duration": 2
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Fire", "multiplier": 2}],
    "resistances": [{"PowerType": "Thunder", "reduction": 1500}],
    "retreatCost": [{"PowerType": "Earth", "count": 3}],
    "convertedRetreatCost": 3,
    "collectionNumber": "047/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 56,
    "name": "Or'granutan",
    "supertype": "Creature",
    "types": ["Earth"],
    "level": 7,
    "hp": 6000,
    "rarity": "Rare",
    "images": {"small": "CardImages/Creatures/Earth/Or’granutan1"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Granite Grip",
        "cost": [{"PowerType": "Earth", "count": 2}],
        "damage": 3000,
        "effectText": null,
        "structuredEffects": []
      },
      {
        "name": "Rock Slide",
        "cost": [{"PowerType": "Earth", "count": 1}],
        "damage": 3500,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Wind", "multiplier": 2}],
    "resistances": [{"PowerType": "Dark", "reduction": 1000}],
    "retreatCost": [{"PowerType": "Earth", "count": 2}],
    "convertedRetreatCost": 2,
    "collectionNumber": "026/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 57,
    "name": "Orkarena",
    "supertype": "Creature",
    "types": ["Earth"],
    "level": 9,
    "hp": 7000,
    "rarity": "Rare",
    "images": {"small": "CardImages/Creatures/Earth/Orkarena1"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Veil of Sand",
        "cost": [{"PowerType": "Earth", "count": 2}],
        "damage": 4000,
        "effectText": "This Creature covers itself witha layer of sand that protects it from being attacked next turn. (this move cannot be used twice in a row)",
        "structuredEffects": [
          {
            "type": "ApplyCannotBeAttackedBuff",
            "target": "Self",
            "duration": 1
          }
        ],
        "usageRestriction": "CannotBeUsedTwiceInARow"
      },
      {
        "name": "Sand Blast",
        "cost": [{"PowerType": "Earth", "count": 3}],
        "damage": 5000,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Water", "multiplier": 2}],
    "resistances": [{"PowerType": "Forest", "reduction": 2000}],
    "retreatCost": [{"PowerType": "Earth", "count": 2}],
    "convertedRetreatCost": 2,
    "collectionNumber": "126/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 58,
    "name": "Pebblephant",
    "supertype": "Creature",
    "types": ["Earth"],
    "level": 8,
    "hp": 6500,
    "rarity": "Borderless",
    "images": {"small": "CardImages/Creatures/Earth/Pebblephant1"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Inner Darkness",
        "trigger": "OnAttacked",
        "effectText": "Search your Deck for a basic Dark Power card. Show your opponent and place it in your Hand.",
        "usableFromBench": false,
        "prerequisites": [],
        "structuredEffects": [
          {
            "type": "SearchDeck",
            "category": "CardManipulation",
            "target": "PlayerSelf",
            "searchCriteria": {
              "cardSuperType": "Power",
              "powerType": "Dark",
              "basic": true
            },
            "amount": 1,
            "action": "AddToHandAndShow"
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Crushing Blow",
        "cost": [{"PowerType": "Earth", "count": 1}, {"PowerType": "Dark", "count": 1}],
        "damage": 4000,
        "effectText": "Flip the main coin. If the result is heads, your opponent's Creature loses one of it's attached Power cards.",
        "structuredEffects": [
          {
            "type": "ConditionalEffect",
            "category": "Disruption",
            "condition": {
              "type": "CoinFlip",
              "comparison": "EqualTo",
              "stringValue": "Heads"
            },
            "trueEffects": [
              {
                "type": "RemovePowerCard",
                "target": "OpponentCreatureActive",
                "amount": 1,
                "criteria": "AttachedAny"
              }
            ],
            "falseEffects": []
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Forest", "multiplier": 2}],
    "resistances": [{"PowerType": "Light", "reduction": 1500}],
    "retreatCost": [{"PowerType": "Earth", "count": 1}],
    "convertedRetreatCost": 1,
    "collectionNumber": "001/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 59,
    "name": "Pebblephant",
    "supertype": "Creature",
    "types": ["Earth"],
    "level": 8,
    "hp": 6500,
    "rarity": "HiddenRare",
    "images": {"small": "CardImages/Creatures/Earth/Pebblephant2"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Inner Darkness",
        "trigger": "OnAttacked",
        "effectText": "Search your Deck for a basic Dark Power card. Show your opponent and place it in your Hand.",
        "usableFromBench": false,
        "prerequisites": [],
        "structuredEffects": [
          {
            "type": "SearchDeck",
            "category": "CardManipulation",
            "target": "PlayerSelf",
            "searchCriteria": {
              "cardSuperType": "Power",
              "powerType": "Dark",
              "basic": true
            },
            "amount": 1,
            "action": "AddToHandAndShow"
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Crushing Blow",
        "cost": [{"PowerType": "Earth", "count": 1}, {"PowerType": "Dark", "count": 1}],
        "damage": 4000,
        "effectText": "Flip the main coin. If the result is heads, your opponent's Creature loses one of it's attached Power cards.",
        "structuredEffects": [
          {
            "type": "ConditionalEffect",
            "category": "Disruption",
            "condition": {
              "type": "CoinFlip",
              "comparison": "EqualTo",
              "stringValue": "Heads"
            },
            "trueEffects": [
              {
                "type": "RemovePowerCard",
                "target": "OpponentCreatureActive",
                "amount": 1,
                "criteria": "AttachedAny"
              }
            ],
            "falseEffects": []
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Forest", "multiplier": 2}],
    "resistances": [{"PowerType": "Light", "reduction": 1500}],
    "retreatCost": [{"PowerType": "Earth", "count": 1}],
    "convertedRetreatCost": 1,
    "collectionNumber": "334/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 60,
    "name": "Pebblephant",
    "supertype": "Creature",
    "types": ["Earth"],
    "level": 8,
    "hp": 6500,
    "rarity": "Borderless",
    "images": {"small": "CardImages/Creatures/Earth/Pebblephant3"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Inner Darkness",
        "trigger": "OnAttacked",
        "effectText": "Search your Deck for a basic Dark Power card. Show your opponent and place it in your Hand.",
        "usableFromBench": false,
        "prerequisites": [],
        "structuredEffects": [
          {
            "type": "SearchDeck",
            "category": "CardManipulation",
            "target": "PlayerSelf",
            "searchCriteria": {
              "cardSuperType": "Power",
              "powerType": "Dark",
              "basic": true
            },
            "amount": 1,
            "action": "AddToHandAndShow"
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Crushing Blow",
        "cost": [{"PowerType": "Earth", "count": 1}, {"PowerType": "Dark", "count": 1}],
        "damage": 4000,
        "effectText": "Flip the main coin. If the result is heads, your opponent's Creature loses one of it's attached Power cards.",
        "structuredEffects": [
          {
            "type": "ConditionalEffect",
            "category": "Disruption",
            "condition": {
              "type": "CoinFlip",
              "comparison": "EqualTo",
              "stringValue": "Heads"
            },
            "trueEffects": [
              {
                "type": "RemovePowerCard",
                "target": "OpponentCreatureActive",
                "amount": 1,
                "criteria": "AttachedAny"
              }
            ],
            "falseEffects": []
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Forest", "multiplier": 2}],
    "resistances": [{"PowerType": "Light", "reduction": 1500}],
    "retreatCost": [{"PowerType": "Earth", "count": 1}],
    "convertedRetreatCost": 1,
    "collectionNumber": "334/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 61,
    "name": "Sand Bear",
    "supertype": "Creature",
    "types": ["Earth"],
    "level": 1,
    "hp": 1000,
    "rarity": "Common",
    "images": {"small": "CardImages/Creatures/Earth/SandBear1"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Scratch",
        "cost": [{"PowerType": "Earth", "count": 1}],
        "damage": 500,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Water", "multiplier": 1}],
    "resistances": [{"PowerType": "Forest", "reduction": 500}],
    "retreatCost": [{"PowerType": "Earth", "count": 1}],
    "convertedRetreatCost": 1,
    "collectionNumber": "029/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 62,
    "name": "Selkie",
    "supertype": "Creature",
    "types": ["Earth"],
    "level": 3,
    "hp": 2000,
    "rarity": "Common",
    "images": {"small": "CardImages/Creatures/Earth/Selkie1"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Sand Toss",
        "cost": [{"PowerType": "Earth", "count": 1}],
        "damage": 1000,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Wind", "multiplier": 1}],
    "resistances": [{"PowerType": "Dark", "reduction": 500}],
    "retreatCost": [{"PowerType": "Earth", "count": 1}],
    "convertedRetreatCost": 1,
    "collectionNumber": "045/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 63,
    "name": "Serpopard",
    "supertype": "Creature",
    "types": ["Earth"],
    "level": 10,
    "hp": 8000,
    "rarity": "UltraRare",
    "images": {"small": "CardImages/Creatures/Earth/Serpopard1"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Ancient Curse",
        "trigger": "Passive",
        "effectText": "You can only summon Serpopard by sacrificing Anuket and discarding one Earth Power card from your Hand. Serpopard gains +500 HP for every Earth Power card in your Discard Pile.",
        "usableFromBench": false,
        "prerequisites": [
          {"type": "SacrificeSpecificCreature", "creatureName": "Anuket"},
          {"type": "DiscardCardFromHand", "cardType": "Power", "powerType": "Earth", "amount": 1}
        ],
        "structuredEffects": [
          {
            "type": "ModifyStats",
            "category": "StatBoost",
            "target": "Self",
            "modification": {
              "stat": "HP",
              "amountPerCondition": 500,
              "condition": {"type": "CountCardsInDiscard", "cardType": "Power", "powerType": "Earth"}
            }
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Hybrid Havoc",
        "cost": [{"PowerType": "Earth", "count": 4}],
        "damage": 7000,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Wind", "multiplier": 3}],
    "resistances": [],
    "retreatCost": [],
    "convertedRetreatCost": 0,
    "collectionNumber": "157/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 64,
    "name": "Serpopard",
    "supertype": "Creature",
    "types": ["Earth"],
    "level": 10,
    "hp": 8000,
    "rarity": "HiddenRare",
    "images": {"small": "CardImages/Creatures/Earth/Serpopard2"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Ancient Curse",
        "trigger": "Passive",
        "effectText": "You can only summon Serpopard by sacrificing Anuket and discarding one Earth Power card from your Hand. Serpopard gains +500 HP for every Earth Power card in your Discard Pile.",
        "usableFromBench": false,
        "prerequisites": [
          {"type": "SacrificeSpecificCreature", "creatureName": "Anuket"},
          {"type": "DiscardCardFromHand", "cardType": "Power", "powerType": "Earth", "amount": 1}
        ],
        "structuredEffects": [
          {
            "type": "ModifyStats",
            "category": "StatBoost",
            "target": "Self",
            "modification": {
              "stat": "HP",
              "amountPerCondition": 500,
              "condition": {"type": "CountCardsInDiscard", "cardType": "Power", "powerType": "Earth"}
            }
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Hybrid Havoc",
        "cost": [{"PowerType": "Earth", "count": 4}],
        "damage": 7000,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Wind", "multiplier": 3}],
    "resistances": [],
    "retreatCost": [],
    "convertedRetreatCost": 0,
    "collectionNumber": "357/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 65,
    "name": "Serpopard",
    "supertype": "Creature",
    "types": ["Earth"],
    "level": 10,
    "hp": 8000,
    "rarity": "Borderless",
    "images": {"small": "CardImages/Creatures/Earth/Serpopard3"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Ancient Curse",
        "trigger": "Passive",
        "effectText": "You can only summon Serpopard by sacrificing Anuket and discarding one Earth Power card from your Hand. Serpopard gains +500 HP for every Earth Power card in your Discard Pile.",
        "usableFromBench": false,
        "prerequisites": [
          {"type": "SacrificeSpecificCreature", "creatureName": "Anuket"},
          {"type": "DiscardCardFromHand", "cardType": "Power", "powerType": "Earth", "amount": 1}
        ],
        "structuredEffects": [
          {
            "type": "ModifyStats",
            "category": "StatBoost",
            "target": "Self",
            "modification": {
              "stat": "HP",
              "amountPerCondition": 500,
              "condition": {"type": "CountCardsInDiscard", "cardType": "Power", "powerType": "Earth"}
            }
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Hybrid Havoc",
        "cost": [{"PowerType": "Earth", "count": 4}],
        "damage": 7000,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Wind", "multiplier": 3}],
    "resistances": [],
    "retreatCost": [],
    "convertedRetreatCost": 0,
    "collectionNumber": "357/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 66,
    "name": "Sphinx, the Noble",
    "supertype": "Creature",
    "types": ["Earth"],
    "level": 7,
    "hp": 6500,
    "rarity": "Rare",
    "images": {"small": "CardImages/Creatures/Earth/SphinxtheNoble1"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Trembling Earth",
        "cost": [{"PowerType": "Earth", "count": 2}],
        "damage": 3000,
        "effectText": null,
        "structuredEffects": []
      },
      {
        "name": "Pharaoh's Gaze",
        "cost": [{"PowerType": "Earth", "count": 3}],
        "damage": 3500,
        "effectText": "Automatically Paralyze your opponent's Creature.",
        "structuredEffects": [
          {
            "type": "ApplyStatus",
            "category": "Debuff",
            "target": "OpponentCreatureActive",
            "status": "Paralyzed"
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Wind", "multiplier": 2}],
    "resistances": [{"PowerType": "Dark", "reduction": 1500}],
    "retreatCost": [{"PowerType": "Earth", "count": 2}],
    "convertedRetreatCost": 2,
    "collectionNumber": "080/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 67,
    "name": "The Behemoth",
    "supertype": "Creature",
    "types": ["Earth"],
    "level": 9,
    "hp": 7500,
    "rarity": "Rare",
    "images": {"small": "CardImages/Creatures/Earth/TheBehemoth1"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Titanic Stomp",
        "cost": [{"PowerType": "Earth", "count": 2}],
        "damage": 4500,
        "effectText": null,
        "structuredEffects": []
      },
      {
        "name": "Earth Shake",
        "cost": [{"PowerType": "Earth", "count": 3}],
        "damage": 5500,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Wind", "multiplier": 2}],
    "resistances": [{"PowerType": "Dark", "reduction": 2000}],
    "retreatCost": [{"PowerType": "Earth", "count": 3}],
    "convertedRetreatCost": 3,
    "collectionNumber": "155/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 68,
    "name": "The Behemoth",
    "supertype": "Creature",
    "types": ["Earth"],
    "level": 9,
    "hp": 7500,
    "rarity": "HiddenRare",
    "images": {"small": "CardImages/Creatures/Earth/TheBehemoth2"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Titanic Stomp",
        "cost": [{"PowerType": "Earth", "count": 2}],
        "damage": 4500,
        "effectText": null,
        "structuredEffects": []
      },
      {
        "name": "Earth Shake",
        "cost": [{"PowerType": "Earth", "count": 3}],
        "damage": 5500,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Wind", "multiplier": 2}],
    "resistances": [{"PowerType": "Dark", "reduction": 2000}],
    "retreatCost": [{"PowerType": "Earth", "count": 3}],
    "convertedRetreatCost": 3,
    "collectionNumber": "337/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 69,
    "name": "The Behemoth",
    "supertype": "Creature",
    "types": ["Earth"],
    "level": 9,
    "hp": 7500,
    "rarity": "Borderless",
    "images": {"small": "CardImages/Creatures/Earth/TheBehemoth3"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Titanic Stomp",
        "cost": [{"PowerType": "Earth", "count": 2}],
        "damage": 4500,
        "effectText": null,
        "structuredEffects": []
      },
      {
        "name": "Earth Shake",
        "cost": [{"PowerType": "Earth", "count": 3}],
        "damage": 5500,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Wind", "multiplier": 2}],
    "resistances": [{"PowerType": "Dark", "reduction": 2000}],
    "retreatCost": [{"PowerType": "Earth", "count": 3}],
    "convertedRetreatCost": 3,
    "collectionNumber": "337/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 70,
    "name": "Toaxic",
    "supertype": "Creature",
    "types": ["Earth"],
    "level": 4,
    "hp": 3000,
    "rarity": "Uncommon",
    "images": {"small": "CardImages/Creatures/Earth/Toaxic1"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Toxic Skin",
        "trigger": "OnAttacked",
        "effectText": "When this Creature is attacked, your opponent's Creature is automatically Poisoned.",
        "usableFromBench": false,
        "prerequisites": [],
        "structuredEffects": [
          {
            "type": "ApplyStatus",
            "category": "Debuff",
            "target": "AttackingCreature",
            "status": "Poison"
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Poisonous Fangs",
        "cost": [{"PowerType": "Earth", "count": 1}],
        "damage": 2000,
        "effectText": "Roll the main dice. If you roll a 2, 4, or 5. Your opponent's Creature is Poisoned.",
        "structuredEffects": [
          {
            "type": "ConditionalEffect",
            "category": "Debuff",
            "condition": {"type": "DiceRoll", "comparison": "ValueIn", "values": [2,4,5]},
            "trueEffects": [{"type": "ApplyStatus", "target": "OpponentCreatureActive", "status": "Poison"}],
            "falseEffects": []
          }
        ]
      },
      {
        "name": "Mud Toss",
        "cost": [{"PowerType": "Earth", "count": 1}],
        "damage": 2000,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Fire", "multiplier": 1}],
    "resistances": [{"PowerType": "Thunder", "reduction": 500}],
    "retreatCost": [{"PowerType": "Earth", "count": 1}],
    "convertedRetreatCost": 1,
    "collectionNumber": "095/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 71,
    "name": "Ushi-oni",
    "supertype": "Creature",
    "types": ["Earth"],
    "level": 5,
    "hp": 3000,
    "rarity": "Uncommon",
    "images": {"small": "CardImages/Creatures/Earth/Ushi-oni1"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Spine Shot",
        "cost": [{"PowerType": "Earth", "count": 2}],
        "damage": 2000,
        "effectText": null,
        "structuredEffects": []
      },
      {
        "name": "Fiendish Bull",
        "cost": [{"PowerType": "Earth", "count": 1}],
        "damage": null,
        "effectText": "Trap your opponent's Creature preventing it from attacking or using it's abilities next turn. (you cannot use this move twice in a row)",
        "structuredEffects": [
          {
            "type": "ApplyStatusEffect",
            "statusToApply": "Trapped",
            "duration": 2,
            "target": "OpponentActiveCreature"
          }
        ],
        "usageRestriction": "CannotBeUsedTwiceInARow"
      }
    ],
    "weaknesses": [{"PowerType": "Wind", "multiplier": 1}],
    "resistances": [{"PowerType": "Dark", "reduction": 500}],
    "retreatCost": [{"PowerType": "Earth", "count": 1}],
    "convertedRetreatCost": 1,
    "collectionNumber": "055/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 72,
    "name": "Wandering Traveler",
    "supertype": "Creature",
    "types": ["Earth"],
    "level": 6,
    "hp": 5500,
    "rarity": "Rare",
    "images": {"small": "CardImages/Creatures/Earth/ElVagabundo1"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Thorn Burst",
        "cost": [{"PowerType": "Earth", "count": 1}],
        "damage": 3500,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Fire", "multiplier": 2}],
    "resistances": [{"PowerType": "Thunder", "reduction": 1000}],
    "retreatCost": [{"PowerType": "Earth", "count": 2}],
    "convertedRetreatCost": 2,
    "collectionNumber": "349/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 73,
    "name": "Wandering Traveler",
    "supertype": "Creature",
    "types": ["Earth"],
    "level": 6,
    "hp": 5500,
    "rarity": "HiddenRare",
    "images": {"small": "CardImages/Creatures/Earth/ElVagabundo2"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Spine Shot",
        "cost": [{"PowerType": "Earth", "count": 2}],
        "damage": 2000,
        "effectText": null,
        "structuredEffects": []
      },
      {
        "name": "Thorn Burst",
        "cost": [{"PowerType": "Earth", "count": 1}],
        "damage": 3500,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Fire", "multiplier": 2}],
    "resistances": [{"PowerType": "Thunder", "reduction": 1000}],
    "retreatCost": [{"PowerType": "Earth", "count": 2}],
    "convertedRetreatCost": 2,
    "collectionNumber": "349/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 74,
    "name": "Wandering Traveler",
    "supertype": "Creature",
    "types": ["Earth"],
    "level": 6,
    "hp": 5500,
    "rarity": "Borderless",
    "images": {"small": "CardImages/Creatures/Earth/ElVagabundo3"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Spine Shot",
        "cost": [{"PowerType": "Earth", "count": 2}],
        "damage": 2000,
        "effectText": null,
        "structuredEffects": []
      },
      {
        "name": "Thorn Burst",
        "cost": [{"PowerType": "Earth", "count": 1}],
        "damage": 3500,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Fire", "multiplier": 2}],
    "resistances": [{"PowerType": "Thunder", "reduction": 1000}],
    "retreatCost": [{"PowerType": "Earth", "count": 2}],
    "convertedRetreatCost": 2,
    "collectionNumber": "122/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 75,
    "name": "Zunreus",
    "supertype": "Creature",
    "types": ["Earth"],
    "level": 3,
    "hp": 2000,
    "rarity": "Common",
    "images": {"small": "CardImages/Creatures/Earth/Minotaur1"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Raging Bull",
        "cost": [{"PowerType": "Earth", "count": 1}],
        "damage": 1000,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Wind", "multiplier": 1}],
    "resistances": [{"PowerType": "Dark", "reduction": 500}],
    "retreatCost": [{"PowerType": "Earth", "count": 1}],
    "convertedRetreatCost": 1,
    "collectionNumber": "003/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 76,
    "name": "Ashenklaw",
    "supertype": "Creature",
    "types": ["Fire"],
    "level": 5,
    "hp": 4000,
    "rarity": "Uncommon",
    "images": {"small": "CardImages/Creatures/Fire/Ashenklaw1"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Fire Swipe",
        "cost": [{"PowerType": "Fire", "count": 2}],
        "damage": null,
        "effectText": "Flip the main coin. If the result is heads, deal +1500 damage to your opponent's Creature. If the result is tails, deal +500 damage to your opponent's Creature.",
        "structuredEffects": [
          {
            "type": "ConditionalEffect",
            "category": "Damage",
            "condition": {"type": "CoinFlip", "comparison": "EqualTo", "stringValue": "Heads"},
            "trueEffects": [{"type": "DealDamage", "target": "OpponentCreatureActive", "amount": 1500}],
            "falseEffects": [{"type": "DealDamage", "target": "OpponentCreatureActive", "amount": 500}]
          }
        ]
      },
      {
        "name": "Fury Claw",
        "cost": [{"PowerType": "Fire", "count": 1}],
        "damage": 2000,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Water", "multiplier": 2}],
    "resistances": [{"PowerType": "Thunder", "reduction": 500}],
    "retreatCost": [{"PowerType": "Fire", "count": 1}],
    "convertedRetreatCost": 1,
    "collectionNumber": "145/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 77,
    "name": "Billhelm",
    "supertype": "Creature",
    "types": ["Fire"],
    "level": 9,
    "hp": 7000,
    "rarity": "Rare",
    "images": {"small": "CardImages/Creatures/Fire/Billhelm1"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Passion for War",
        "cost": [{"PowerType": "Fire", "count": 3}],
        "damage": 5500,
        "effectText": "Flip the main coin. If the result is heads, you may choose to either draw a card from the top of your Deck or deal an additional +1000 damage to your opponent's Creature.",
        "structuredEffects": [
          {
            "type": "ConditionalEffect",
            "condition": {"type": "CoinFlip", "comparison": "EqualTo", "stringValue": "Heads"},
            "trueEffects": [
              {
                "type": "ChoiceEffect",
                "options": [
                  {"type": "DrawCards", "target": "PlayerSelf", "amount": 1},
                  {"type": "DealDamage", "target": "OpponentCreatureActive", "amount": 1000}
                ],
                "choiceMechanism": "PlayerChoice"
              }
            ],
            "falseEffects": []
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Water", "multiplier": 2}],
    "resistances": [{"PowerType": "Thunder", "reduction": 2000}],
    "retreatCost": [{"PowerType": "Fire", "count": 3}],
    "convertedRetreatCost": 3,
    "collectionNumber": "086/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 78,
    "name": "Billhelm",
    "supertype": "Creature",
    "types": ["Fire"],
    "level": 9,
    "hp": 7000,
    "rarity": "HiddenRare",
    "images": {"small": "CardImages/Creatures/Fire/Billhelm2"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Passion for War",
        "cost": [{"PowerType": "Fire", "count": 3}],
        "damage": 5500,
        "effectText": "Flip the main coin. If the result is heads, you may choose to either draw a card from the top of your Deck or deal an additional +1000 damage to your opponent's Creature.",
        "structuredEffects": [
          {
            "type": "ConditionalEffect",
            "condition": {"type": "CoinFlip", "comparison": "EqualTo", "stringValue": "Heads"},
            "trueEffects": [
              {
                "type": "ChoiceEffect",
                "options": [
                  {"type": "DrawCards", "target": "PlayerSelf", "amount": 1},
                  {"type": "DealDamage", "target": "OpponentCreatureActive", "amount": 1000}
                ],
                "choiceMechanism": "PlayerChoice"
              }
            ],
            "falseEffects": []
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Water", "multiplier": 2}],
    "resistances": [{"PowerType": "Thunder", "reduction": 2000}],
    "retreatCost": [{"PowerType": "Fire", "count": 3}],
    "convertedRetreatCost": 3,
    "collectionNumber": "328/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 79,
    "name": "Billhelm",
    "supertype": "Creature",
    "types": ["Fire"],
    "level": 9,
    "hp": 7000,
    "rarity": "Borderless",
    "images": {"small": "CardImages/Creatures/Fire/Billhelm3"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Passion for War",
        "cost": [{"PowerType": "Fire", "count": 3}],
        "damage": 5500,
        "effectText": "Flip the main coin. If the result is heads, you may choose to either draw a card from the top of your Deck or deal an additional +1000 damage to your opponent's Creature.",
        "structuredEffects": [
          {
            "type": "ConditionalEffect",
            "condition": {"type": "CoinFlip", "comparison": "EqualTo", "stringValue": "Heads"},
            "trueEffects": [
              {
                "type": "ChoiceEffect",
                "options": [
                  {"type": "DrawCards", "target": "PlayerSelf", "amount": 1},
                  {"type": "DealDamage", "target": "OpponentCreatureActive", "amount": 1000}
                ],
                "choiceMechanism": "PlayerChoice"
              }
            ],
            "falseEffects": []
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Water", "multiplier": 2}],
    "resistances": [{"PowerType": "Thunder", "reduction": 2000}],
    "retreatCost": [{"PowerType": "Fire", "count": 3}],
    "convertedRetreatCost": 3,
    "collectionNumber": "328/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 80,
    "name": "Cacus",
    "supertype": "Creature",
    "types": ["Fire"],
    "level": 9,
    "hp": 7500,
    "rarity": "Rare",
    "images": {"small": "CardImages/Creatures/Fire/Cacus1"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Blazing Sword",
        "cost": [{"PowerType": "Fire", "count": 2}],
        "damage": 4500,
        "effectText": null,
        "structuredEffects": []
      },
      {
        "name": "Infernal War",
        "cost": [{"PowerType": "Fire", "count": 3}],
        "damage": null,
        "effectText": "Roll the main dice. If the result is even, deal +6500 damage to your opponent's Creature. If odd, this attack does nothing.",
        "structuredEffects": [
          {
            "type": "ConditionalEffect",
            "category": "Damage",
            "condition": {"type": "DiceRoll", "comparison": "IsEven"},
            "trueEffects": [{"type": "DealDamage", "target": "OpponentCreatureActive", "amount": 6500}],
            "falseEffects": []
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Water", "multiplier": 2}],
    "resistances": [{"PowerType": "Thunder", "reduction": 2000}],
    "retreatCost": [{"PowerType": "Fire", "count": 3}],
    "convertedRetreatCost": 3,
    "collectionNumber": "120/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 81,
    "name": "Cacus",
    "supertype": "Creature",
    "types": ["Fire"],
    "level": 9,
    "hp": 7500,
    "rarity": "HiddenRare",
    "images": {"small": "CardImages/Creatures/Fire/Cacus2"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Blazing Sword",
        "cost": [{"PowerType": "Fire", "count": 2}],
        "damage": 4500,
        "effectText": null,
        "structuredEffects": []
      },
      {
        "name": "Infernal War",
        "cost": [{"PowerType": "Fire", "count": 3}],
        "damage": null,
        "effectText": "Roll the main dice. If the result is even, deal +6500 damage to your opponent's Creature. If odd, this attack does nothing.",
        "structuredEffects": [
          {
            "type": "ConditionalEffect",
            "category": "Damage",
            "condition": {"type": "DiceRoll", "comparison": "IsEven"},
            "trueEffects": [{"type": "DealDamage", "target": "OpponentCreatureActive", "amount": 6500}],
            "falseEffects": []
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Water", "multiplier": 2}],
    "resistances": [{"PowerType": "Thunder", "reduction": 2000}],
    "retreatCost": [{"PowerType": "Fire", "count": 3}],
    "convertedRetreatCost": 3,
    "collectionNumber": "350/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 82,
    "name": "Cacus",
    "supertype": "Creature",
    "types": ["Fire"],
    "level": 9,
    "hp": 7500,
    "rarity": "Borderless",
    "images": {"small": "CardImages/Creatures/Fire/Cacus3"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Blazing Sword",
        "cost": [{"PowerType": "Fire", "count": 2}],
        "damage": 4500,
        "effectText": null,
        "structuredEffects": []
      },
      {
        "name": "Infernal War",
        "cost": [{"PowerType": "Fire", "count": 3}],
        "damage": null,
        "effectText": "Roll the main dice. If the result is even, deal +6500 damage to your opponent's Creature. If odd, this attack does nothing.",
        "structuredEffects": [
          {
            "type": "ConditionalEffect",
            "category": "Damage",
            "condition": {"type": "DiceRoll", "comparison": "IsEven"},
            "trueEffects": [{"type": "DealDamage", "target": "OpponentCreatureActive", "amount": 6500}],
            "falseEffects": []
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Water", "multiplier": 2}],
    "resistances": [{"PowerType": "Thunder", "reduction": 2000}],
    "retreatCost": [{"PowerType": "Fire", "count": 3}],
    "convertedRetreatCost": 3,
    "collectionNumber": "350/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 83,
    "name": "Cerberus",
    "supertype": "Creature",
    "types": ["Fire"],
    "level": 8,
    "hp": 6500,
    "rarity": "Rare",
    "images": {"small": "CardImages/Creatures/Fire/Cerberus1"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Three-Headed Beast",
        "trigger": "OnDestroyed",
        "effectText": "When this Creature is destroyed. Heal Cerberus by +1000 HP for each of its heads. (3)",
        "usableFromBench": false,
        "prerequisites": [],
        "structuredEffects": [
          {
            "type": "ReviveSelf",
            "amount": 3000
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Scorched",
        "cost": [{"PowerType": "Fire", "count": 3}],
        "damage": 4500,
        "effectText": "Flip the main coin. If the result is heads, your opponent's Creature is Burned.",
        "structuredEffects": [
          {
            "type": "ConditionalEffect",
            "category": "Debuff",
            "condition": {"type": "CoinFlip", "comparison": "EqualTo", "stringValue": "Heads"},
            "trueEffects": [{"type": "ApplyStatus", "target": "OpponentCreatureActive", "status": "Burned"}],
            "falseEffects": []
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Water", "multiplier": 2}],
    "resistances": [{"PowerType": "Thunder", "reduction": 1500}],
    "retreatCost": [{"PowerType": "Fire", "count": 2}],
    "convertedRetreatCost": 2,
    "collectionNumber": "137/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 84,
    "name": "Cerberus",
    "supertype": "Creature",
    "types": ["Fire"],
    "level": 8,
    "hp": 6500,
    "rarity": "HiddenRare",
    "images": {"small": "CardImages/Creatures/Fire/Cerberus2"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Three-Headed Beast",
        "trigger": "OnDestroyed",
        "effectText": "When this Creature is destroyed. Heal Cerberus by +1000 HP for each of its heads. (3)",
        "usableFromBench": false,
        "prerequisites": [],
        "structuredEffects": [
          {
            "type": "ReviveSelf",
            "amount": 3000
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Scorched",
        "cost": [{"PowerType": "Fire", "count": 3}],
        "damage": 4500,
        "effectText": "Flip the main coin. If the result is heads, your opponent's Creature is Burned.",
        "structuredEffects": [
          {
            "type": "ConditionalEffect",
            "category": "Debuff",
            "condition": {"type": "CoinFlip", "comparison": "EqualTo", "stringValue": "Heads"},
            "trueEffects": [{"type": "ApplyStatus", "target": "OpponentCreatureActive", "status": "Burned"}],
            "falseEffects": []
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Water", "multiplier": 2}],
    "resistances": [{"PowerType": "Thunder", "reduction": 1500}],
    "retreatCost": [{"PowerType": "Fire", "count": 2}],
    "convertedRetreatCost": 2,
    "collectionNumber": "322/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 85,
    "name": "Cerberus",
    "supertype": "Creature",
    "types": ["Fire"],
    "level": 8,
    "hp": 6500,
    "rarity": "Borderless",
    "images": {"small": "CardImages/Creatures/Fire/Cerberus3"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Three-Headed Beast",
        "trigger": "OnDestroyed",
        "effectText": "When this Creature is destroyed. Heal Cerberus by +1000 HP for each of its heads. (3)",
        "usableFromBench": false,
        "prerequisites": [],
        "structuredEffects": [
          {
            "type": "ReviveSelf",
            "amount": 3000
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Scorched",
        "cost": [{"PowerType": "Fire", "count": 3}],
        "damage": 4500,
        "effectText": "Flip the main coin. If the result is heads, your opponent's Creature is Burned.",
        "structuredEffects": [
          {
            "type": "ConditionalEffect",
            "category": "Debuff",
            "condition": {"type": "CoinFlip", "comparison": "EqualTo", "stringValue": "Heads"},
            "trueEffects": [{"type": "ApplyStatus", "target": "OpponentCreatureActive", "status": "Burned"}],
            "falseEffects": []
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Water", "multiplier": 2}],
    "resistances": [{"PowerType": "Thunder", "reduction": 1500}],
    "retreatCost": [{"PowerType": "Fire", "count": 2}],
    "convertedRetreatCost": 2,
    "collectionNumber": "322/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 86,
    "name": "Cyra, the Emblazoned",
    "supertype": "Creature",
    "types": ["Fire"],
    "level": 5,
    "hp": 3500,
    "rarity": "Rare",
    "images": {"small": "CardImages/Creatures/Fire/InfernalApprentice1"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Blazing Magik",
        "trigger": "OnOpponentPlaysMagikCard",
        "effectText": "When your opponent plays any Magik card. Search your Deck for any Secret card. Show your opponent and place it in your Hand.",
        "usableFromBench": false,
        "prerequisites": [],
        "structuredEffects": [
          {
            "type": "SearchDeck",
            "category": "CardManipulation",
            "target": "PlayerSelf",
            "searchCriteria": {"cardSuperType": "Secret"},
            "amount": 1,
            "action": "AddToHandAndShow"
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Incinerate",
        "cost": [{"PowerType": "Fire", "count": 2}],
        "damage": 3000,
        "effectText": "Flip the main coin. If the result is heads, your opponent's Creature is Burned.",
        "structuredEffects": [
          {
            "type": "ConditionalEffect",
            "category": "Debuff",
            "condition": {"type": "CoinFlip", "comparison": "EqualTo", "stringValue": "Heads"},
            "trueEffects": [{"type": "ApplyStatus", "target": "OpponentCreatureActive", "status": "Burned"}],
            "falseEffects": []
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Earth", "multiplier": 2}],
    "resistances": [{"PowerType": "Light", "reduction": 1000}],
    "retreatCost": [{"PowerType": "Fire", "count": 1}],
    "convertedRetreatCost": 1,
    "collectionNumber": "056/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 87,
    "name": "Cyra, the Emblazoned",
    "supertype": "Creature",
    "types": ["Fire"],
    "level": 5,
    "hp": 3500,
    "rarity": "HiddenRare",
    "images": {"small": "CardImages/Creatures/Fire/InfernalApprentice2"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Blazing Magik",
        "trigger": "OnOpponentPlaysMagikCard",
        "effectText": "When your opponent plays any Magik card. Search your Deck for any Secret card. Show your opponent and place it in your Hand.",
        "usableFromBench": false,
        "prerequisites": [],
        "structuredEffects": [
          {
            "type": "SearchDeck",
            "category": "CardManipulation",
            "target": "PlayerSelf",
            "searchCriteria": {"cardSuperType": "Secret"},
            "amount": 1,
            "action": "AddToHandAndShow"
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Incinerate",
        "cost": [{"PowerType": "Fire", "count": 2}],
        "damage": 3000,
        "effectText": "Flip the main coin. If the result is heads, your opponent's Creature is Burned.",
        "structuredEffects": [
          {
            "type": "ConditionalEffect",
            "category": "Debuff",
            "condition": {"type": "CoinFlip", "comparison": "EqualTo", "stringValue": "Heads"},
            "trueEffects": [{"type": "ApplyStatus", "target": "OpponentCreatureActive", "status": "Burned"}],
            "falseEffects": []
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Earth", "multiplier": 2}],
    "resistances": [{"PowerType": "Light", "reduction": 1000}],
    "retreatCost": [{"PowerType": "Fire", "count": 1}],
    "convertedRetreatCost": 1,
    "collectionNumber": "323/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 88,
    "name": "Cyra, the Emblazoned",
    "supertype": "Creature",
    "types": ["Fire"],
    "level": 5,
    "hp": 3500,
    "rarity": "Borderless",
    "images": {"small": "CardImages/Creatures/Fire/InfernalApprentice3"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Blazing Magik",
        "trigger": "OnOpponentPlaysMagikCard",
        "effectText": "When your opponent plays any Magik card. Search your Deck for any Secret card. Show your opponent and place it in your Hand.",
        "usableFromBench": false,
        "prerequisites": [],
        "structuredEffects": [
          {
            "type": "SearchDeck",
            "category": "CardManipulation",
            "target": "PlayerSelf",
            "searchCriteria": {"cardSuperType": "Secret"},
            "amount": 1,
            "action": "AddToHandAndShow"
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Incinerate",
        "cost": [{"PowerType": "Fire", "count": 2}],
        "damage": 3000,
        "effectText": "Flip the main coin. If the result is heads, your opponent's Creature is Burned.",
        "structuredEffects": [
          {
            "type": "ConditionalEffect",
            "category": "Debuff",
            "condition": {"type": "CoinFlip", "comparison": "EqualTo", "stringValue": "Heads"},
            "trueEffects": [{"type": "ApplyStatus", "target": "OpponentCreatureActive", "status": "Burned"}],
            "falseEffects": []
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Earth", "multiplier": 2}],
    "resistances": [{"PowerType": "Light", "reduction": 1000}],
    "retreatCost": [{"PowerType": "Fire", "count": 1}],
    "convertedRetreatCost": 1,
    "collectionNumber": "323/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 89,
    "name": "Emberling",
    "supertype": "Creature",
    "types": ["Fire"],
    "level": 2,
    "hp": 1500,
    "rarity": "Common",
    "images": {"small": "CardImages/Creatures/Fire/Emberling1"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Ember Armor",
        "trigger": "OnAttacked",
        "effectText": "When this Creature is attacked. Roll the main dice, if the result is even, reduce the incoming damage by -500 HP.",
        "usableFromBench": false,
        "prerequisites": [],
        "structuredEffects": [
          {
            "type": "ConditionalEffect",
            "condition": {"type": "DiceRoll", "comparison": "IsEven"},
            "trueEffects": [{"type": "ReduceDamageTaken", "amount": 500}],
            "falseEffects": []
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Ember",
        "cost": [{"PowerType": "Fire", "count": 1}],
        "damage": 1000,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Water", "multiplier": 1}],
    "resistances": [{"PowerType": "Thunder", "reduction": 500}],
    "retreatCost": [{"PowerType": "Fire", "count": 1}],
    "convertedRetreatCost": 1,
    "collectionNumber": "032/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 90,
    "name": "FireFly",
    "supertype": "Creature",
    "types": ["Fire"],
    "level": 1,
    "hp": 500,
    "rarity": "Common",
    "images": {"small": "CardImages/Creatures/Fire/FireFly1"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Party of Three",
        "trigger": "Passive",
        "effectText": "This Creature must be destroyed a total of three times before it is sent to the Discard Pile.",
        "usableFromBench": false,
        "prerequisites": [],
        "structuredEffects": [
          {
            "type": "ModifyDurability",
            "lives": 3
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Fire Spark",
        "cost": [{"PowerType": "Fire", "count": 1}],
        "damage": 500,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Water", "multiplier": 1}],
    "resistances": [{"PowerType": "Thunder", "reduction": 500}],
    "retreatCost": [{"PowerType": "Fire", "count": 1}],
    "convertedRetreatCost": 1,
    "collectionNumber": "123/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 91,
    "name": "Flarepup",
    "supertype": "Creature",
    "types": ["Fire"],
    "level": 2,
    "hp": 1500,
    "rarity": "Common",
    "images": {"small": "CardImages/Creatures/Fire/Flarepup1"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Flame",
        "cost": [{"PowerType": "Fire", "count": 1}],
        "damage": 500,
        "effectText": "Flip the main coin. If the result is heads, your opponent's Creature is Burned.",
        "structuredEffects": [
          {
            "type": "ConditionalEffect",
            "category": "Debuff",
            "condition": {"type": "CoinFlip", "comparison": "EqualTo", "stringValue": "Heads"},
            "trueEffects": [{"type": "ApplyStatus", "target": "OpponentCreatureActive", "status": "Burned"}],
            "falseEffects": []
          }
        ]
      },
      {
        "name": "Ember Coat",
        "cost": [{"PowerType": "Fire", "count": 1}],
        "damage": 1000,
        "effectText": "Roll the main dice. If the result is even, Burn your opponent's Creature. If' odd, this Creature takes -500 damage.",
        "structuredEffects": [
          {
            "type": "ConditionalEffect",
            "condition": {"type": "DiceRoll", "comparison": "IsEven"},
            "trueEffects": [{"type": "ApplyStatus", "target": "OpponentCreatureActive", "status": "Burned"}],
            "falseEffects": [{"type": "ModifyHP", "target": "Self", "amount": -500, "category": "Damage"}]
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Water", "multiplier": 1}],
    "resistances": [{"PowerType": "Thunder", "reduction": 500}],
    "retreatCost": [{"PowerType": "Fire", "count": 1}],
    "convertedRetreatCost": 1,
    "collectionNumber": "049/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 92,
    "name": "Grimburn",
    "supertype": "Creature",
    "types": ["Fire"],
    "level": 4,
    "hp": 3000,
    "rarity": "Uncommon",
    "images": {"small": "CardImages/Creatures/Fire/Grimburn1"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Sinister Smile",
        "trigger": "PassiveWhileActive",
        "effectText": "When this Creature is on the field of play, Spell cards cannot be activated.",
        "usableFromBench": false,
        "prerequisites": [],
        "structuredEffects": [
          {
            "type": "PreventCardTypePlay",
            "target": "AllPlayers",
            "cardSuperTypeToSearch": "Secret",
            "cardSubTypeToSearch": "Spell"
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Torched",
        "cost": [{"PowerType": "Fire", "count": 1}],
        "damage": 2000,
        "effectText": "Roll the main dice. If you roll a 1 or 6, add +2000 damage to your opponent's Creature.",
        "structuredEffects": [
          {
            "type": "ConditionalEffect",
            "category": "Damage",
            "condition": {"type": "DiceRoll", "comparison": "ValueIn", "values": [1, 6]},
            "trueEffects": [{"type": "DealDamage", "target": "OpponentCreatureActive", "amount": 2000}],
            "falseEffects": []
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Water", "multiplier": 1}],
    "resistances": [{"PowerType": "Thunder", "reduction": 1000}],
    "retreatCost": [{"PowerType": "Fire", "count": 1}],
    "convertedRetreatCost": 1,
    "collectionNumber": "113/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 93,
    "name": "Hikaru, Thunderflame",
    "supertype": "Creature",
    "types": ["Fire"],
    "level": 10,
    "hp": 9000,
    "rarity": "HiddenRare",
    "images": {"small": "CardImages/Creatures/Fire/HikaruThunderflame2"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Ember Renewal",
        "trigger": "OnSummon",
        "effectText": "Hiukaru, Thunderflame can only be summoned by sacrificing any level 8 or higher Fire or Dark type Creature. Once summoned, search your Discard Pile for any five Power cards and place them in your Hand.",
        "usableFromBench": false,
        "prerequisites": [{"type": "SacrificeCreature", "criteria": {"minLevel": 8, "types": ["Fire", "Dark"]}}],
        "structuredEffects": [
          {
            "type": "ReturnCardsFromDiscardToHand",
            "target": "PlayerSelf",
            "amount": 5,
            "cardSuperTypeToSearch": "Power"
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Electrostatic-flame",
        "cost": [{"PowerType": "Fire", "count": 2}, {"PowerType": "Thunder", "count": 2}],
        "damage": 6500,
        "effectText": "Roll the main dice. If you roll a 1 or 6, add +2000 damage to your opponent's Creature.",
        "structuredEffects": [
          {
            "type": "ConditionalEffect",
            "category": "Damage",
            "condition": {"type": "DiceRoll", "comparison": "ValueIn", "values": [1, 6]},
            "trueEffects": [{"type": "DealDamage", "target": "OpponentCreatureActive", "amount": 2000}],
            "falseEffects": []
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Earth", "multiplier": 3}],
    "resistances": [],
    "retreatCost": [],
    "convertedRetreatCost": 0,
    "collectionNumber": "380/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 94,
    "name": "Hikaru, Thunderflame",
    "supertype": "Creature",
    "types": ["Fire"],
    "level": 10,
    "hp": 9000,
    "rarity": "Borderless",
    "images": {"small": "CardImages/Creatures/Fire/HikaruThunderflame3"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Ember Renewal",
        "trigger": "OnSummon",
        "effectText": "Hiukaru, Thunderflame can only be summoned by sacrificing any level 8 or higher Fire or Dark type Creature. Once summoned, search your Discard Pile for any five Power cards and place them in your Hand.",
        "usableFromBench": false,
        "prerequisites": [{"type": "SacrificeCreature", "criteria": {"minLevel": 8, "types": ["Fire", "Dark"]}}],
        "structuredEffects": [
          {
            "type": "ReturnCardsFromDiscardToHand",
            "target": "PlayerSelf",
            "amount": 5,
            "cardSuperTypeToSearch": "Power"
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Electrostatic-flame",
        "cost": [{"PowerType": "Fire", "count": 2}, {"PowerType": "Thunder", "count": 2}],
        "damage": 6500,
        "effectText": "Roll the main dice. If you roll a 1 or 6, add +2000 damage to your opponent's Creature.",
        "structuredEffects": [
          {
            "type": "ConditionalEffect",
            "category": "Damage",
            "condition": {"type": "DiceRoll", "comparison": "ValueIn", "values": [1, 6]},
            "trueEffects": [{"type": "DealDamage", "target": "OpponentCreatureActive", "amount": 2000}],
            "falseEffects": []
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Earth", "multiplier": 3}],
    "resistances": [],
    "retreatCost": [],
    "convertedRetreatCost": 0,
    "collectionNumber": "380/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 95,
    "name": "Ignimia",
    "supertype": "Creature",
    "types": ["Fire"],
    "level": 10,
    "hp": 8500,
    "rarity": "UltraRare",
    "images": {"small": "CardImages/Creatures/Fire/Ignimia1"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Flare Force",
        "trigger": "Activated",
        "effectText": "To summon, you must play Flames of Bahtu. Once per turn, you can declare an additional attack with this card, if you do, Ignimia takes -2500 damage.",
        "usableFromBench": false,
        "prerequisites": [{"type": "PlaySpecificCard", "cardName": "Flames of Bahtu"}],
        "structuredEffects": [
          {
            "type": "OptionalEffect",
            "stringParam": "Declare an additional attack? Ignimia takes -2500 damage.",
            "subEffects": [
              {
                "type": "GrantExtraAttack",
                "target": "PlayerSelf"
              },
              {
                "type": "ModifyHP",
                "target": "Self",
                "amount": -2500
              }
            ]
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Fireball Frenzy",
        "cost": [{"PowerType": "Fire", "count": 4}],
        "damage": 4000,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Water", "multiplier": 3}],
    "resistances": [],
    "retreatCost": [],
    "convertedRetreatCost": 0,
    "collectionNumber": "160/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 96,
    "name": "Ignimia",
    "supertype": "Creature",
    "types": ["Fire"],
    "level": 10,
    "hp": 8500,
    "rarity": "HiddenRare",
    "images": {"small": "CardImages/Creatures/Fire/Ignimia2"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Flare Force",
        "trigger": "Activated",
        "effectText": "To summon, you must play Flames of Bahtu. Once per turn, you can declare an additional attack with this card, if you do, Ignimia takes -2500 damage.",
        "usableFromBench": false,
        "prerequisites": [{"type": "PlaySpecificCard", "cardName": "Flames of Bahtu"}],
        "structuredEffects": [
          {
            "type": "OptionalEffect",
            "stringParam": "Declare an additional attack? Ignimia takes -2500 damage.",
            "subEffects": [
              {
                "type": "GrantExtraAttack",
                "target": "PlayerSelf"
              },
              {
                "type": "ModifyHP",
                "target": "Self",
                "amount": -2500
              }
            ]
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Fireball Frenzy",
        "cost": [{"PowerType": "Fire", "count": 4}],
        "damage": 4000,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Water", "multiplier": 3}],
    "resistances": [],
    "retreatCost": [],
    "convertedRetreatCost": 0,
    "collectionNumber": "366/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 97,
    "name": "Ignimia",
    "supertype": "Creature",
    "types": ["Fire"],
    "level": 10,
    "hp": 8500,
    "rarity": "Borderless",
    "images": {"small": "CardImages/Creatures/Fire/Ignimia3"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Flare Force",
        "trigger": "Activated",
        "effectText": "To summon, you must play Flames of Bahtu. Once per turn, you can declare an additional attack with this card, if you do, Ignimia takes -2500 damage.",
        "usableFromBench": false,
        "prerequisites": [{"type": "PlaySpecificCard", "cardName": "Flames of Bahtu"}],
        "structuredEffects": [
          {
            "type": "OptionalEffect",
            "stringParam": "Declare an additional attack? Ignimia takes -2500 damage.",
            "subEffects": [
              {
                "type": "GrantExtraAttack",
                "target": "PlayerSelf"
              },
              {
                "type": "ModifyHP",
                "target": "Self",
                "amount": -2500
              }
            ]
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Fireball Frenzy",
        "cost": [{"PowerType": "Fire", "count": 4}],
        "damage": 4000,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Water", "multiplier": 3}],
    "resistances": [],
    "retreatCost": [],
    "convertedRetreatCost": 0,
    "collectionNumber": "366/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 98,
    "name": "Infernasaur",
    "supertype": "Creature",
    "types": ["Fire"],
    "level": 7,
    "hp": 6000,
    "rarity": "Rare",
    "images": {"small": "CardImages/Creatures/Fire/Infernasaur1"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Firestorm Rampage",
        "trigger": "OnSummon",
        "effectText": "When Infernasaur is summoned onto the field of play. Draw one card from the top of your Deck.",
        "usableFromBench": false,
        "prerequisites": [],
        "structuredEffects": [
          {
            "type": "DrawCards",
            "category": "CardManipulation",
            "target": "PlayerSelf",
            "amount": 1
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Stampede",
        "cost": [{"PowerType": "Fire", "count": 1}],
        "damage": 200,
        "effectText": null,
        "structuredEffects": []
      },
      {
        "name": "Volcanic Maul",
        "cost": [{"PowerType": "Fire", "count": 2}],
        "damage": 3500,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Water", "multiplier": 2}],
    "resistances": [{"PowerType": "Thunder", "reduction": 1000}],
    "retreatCost": [{"PowerType": "Fire", "count": 2}],
    "convertedRetreatCost": 2,
    "collectionNumber": "012/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 99,
    "name": "Infernocerus",
    "supertype": "Creature",
    "types": ["Fire"],
    "level": 5,
    "hp": 3500,
    "rarity": "Uncommon",
    "images": {"small": "CardImages/Creatures/Fire/Pyrocerus1"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Fiery Rampage",
        "cost": [{"PowerType": "Fire", "count": 2}],
        "damage": 3000,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Water", "multiplier": 2}],
    "resistances": [{"PowerType": "Thunder", "reduction": 1000}],
    "retreatCost": [{"PowerType": "Fire", "count": 2}],
    "convertedRetreatCost": 2,
    "collectionNumber": "121/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 100,
    "name": "Kuroen",
    "supertype": "Creature",
    "types": ["Fire"],
    "level": 10,
    "hp": 8500,
    "rarity": "HiddenRare",
    "images": {"small": "CardImages/Creatures/Fire/Kuroen2"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Cinders of Dispair",
        "trigger": "Passive",
        "effectText": "Kuroen can only be summoned by sacrificing any level 8 or higher Fire or Dark type Creature. Once summoned, Burn all Creatures on your opponent's Bench.",
        "usableFromBench": false,
        "prerequisites": [{"type": "SacrificeCreature", "criteria": {"minLevel": 8, "types": ["Fire", "Dark"]}}],
        "structuredEffects": [
          {
            "type": "ApplyStatusToAll",
            "target": "OpponentBench",
            "status": "Burned"
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Shadowflame",
        "cost": [{"PowerType": "Fire", "count": 2}, {"PowerType": "Dark", "count": 2}],
        "damage": 7000,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Light", "multiplier": 3}],
    "resistances": [],
    "retreatCost": [],
    "convertedRetreatCost": 0,
    "collectionNumber": "379/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 101,
    "name": "Kuroen",
    "supertype": "Creature",
    "types": ["Fire"],
    "level": 10,
    "hp": 8500,
    "rarity": "Borderless",
    "images": {"small": "CardImages/Creatures/Fire/Kuroen3"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Cinders of Dispair",
        "trigger": "Passive",
        "effectText": "Kuroen can only be summoned by sacrificing any level 8 or higher Fire or Dark type Creature. Once summoned, Burn all Creatures on your opponent's Bench.",
        "usableFromBench": false,
        "prerequisites": [{"type": "SacrificeCreature", "criteria": {"minLevel": 8, "types": ["Fire", "Dark"]}}],
        "structuredEffects": [
          {
            "type": "ApplyStatusToAll",
            "target": "OpponentBench",
            "status": "Burned"
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Shadowflame",
        "cost": [{"PowerType": "Fire", "count": 2}, {"PowerType": "Dark", "count": 2}],
        "damage": 7000,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Light", "multiplier": 3}],
    "resistances": [],
    "retreatCost": [],
    "convertedRetreatCost": 0,
    "collectionNumber": "379/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 102,
    "name": "Kütralpun",
    "supertype": "Creature",
    "types": ["Fire"],
    "level": 8,
    "hp": 6500,
    "rarity": "Rare",
    "images": {"small": "CardImages/Creatures/Fire/Kütralpun1"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Flaming Crest",
        "cost": [{"PowerType": "Fire", "count": 2}],
        "damage": 3500,
        "effectText": null,
        "structuredEffects": []
      },
      {
        "name": "Arctic Flame",
        "cost": [{"PowerType": "Fire", "count": 3}],
        "damage": 4000,
        "effectText": "Automatically Freeze your opponent's Creature.",
        "structuredEffects": [
          {
            "type": "ApplyStatus",
            "category": "Debuff",
            "target": "OpponentCreatureActive",
            "status": "Frozen"
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Water", "multiplier": 2}],
    "resistances": [{"PowerType": "Thunder", "reduction": 1500}],
    "retreatCost": [{"PowerType": "Fire", "count": 2}],
    "convertedRetreatCost": 2,
    "collectionNumber": "099/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 103,
    "name": "Longma",
    "supertype": "Creature",
    "types": ["Fire"],
    "level": 7,
    "hp": 7000,
    "rarity": "Rare",
    "images": {"small": "CardImages/Creatures/Fire/Longma1"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Burning Passion",
        "cost": [{"PowerType": "Fire", "count": 2}],
        "damage": 3000,
        "effectText": "Your opponent's Creature is automatically Burned.",
        "structuredEffects": [
          {
            "type": "ApplyStatus",
            "category": "Debuff",
            "target": "OpponentCreatureActive",
            "status": "Burned"
          }
        ]
      },
      {
        "name": "Scorching Fury",
        "cost": [{"PowerType": "Fire", "count": 3}],
        "damage": 5500,
        "effectText": "Discard one Fire Power card from this Creature.",
        "structuredEffects": [
          {"type": "DiscardPowerCardFromSelf", "amount": 1, "criteria": {"PowerType": "Fire"}, "costEffect": true}
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Water", "multiplier": 2}],
    "resistances": [{"PowerType": "Thunder", "reduction": 1500}],
    "retreatCost": [{"PowerType": "Fire", "count": 3}],
    "convertedRetreatCost": 3,
    "collectionNumber": "077/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 104,
    "name": "Longma",
    "supertype": "Creature",
    "types": ["Fire"],
    "level": 7,
    "hp": 7000,
    "rarity": "HiddenRare",
    "images": {"small": "CardImages/Creatures/Fire/Longma2"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Burning Passion",
        "cost": [{"PowerType": "Fire", "count": 2}],
        "damage": 3000,
        "effectText": "Your opponent's Creature is automatically Burned.",
        "structuredEffects": [
          {
            "type": "ApplyStatus",
            "category": "Debuff",
            "target": "OpponentCreatureActive",
            "status": "Burned"
          }
        ]
      },
      {
        "name": "Scorching Fury",
        "cost": [{"PowerType": "Fire", "count": 3}],
        "damage": 5500,
        "effectText": "Discard one Fire Power card from this Creature.",
        "structuredEffects": [
          {"type": "DiscardPowerCardFromSelf", "amount": 1, "criteria": {"PowerType": "Fire"}, "costEffect": true}
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Water", "multiplier": 2}],
    "resistances": [{"PowerType": "Thunder", "reduction": 1500}],
    "retreatCost": [{"PowerType": "Fire", "count": 3}],
    "convertedRetreatCost": 3,
    "collectionNumber": "351/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 105,
    "name": "Longma",
    "supertype": "Creature",
    "types": ["Fire"],
    "level": 7,
    "hp": 7000,
    "rarity": "Borderless",
    "images": {"small": "CardImages/Creatures/Fire/Longma3"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Burning Passion",
        "cost": [{"PowerType": "Fire", "count": 2}],
        "damage": 3000,
        "effectText": "Your opponent's Creature is automatically Burned.",
        "structuredEffects": [
          {
            "type": "ApplyStatus",
            "category": "Debuff",
            "target": "OpponentCreatureActive",
            "status": "Burned"
          }
        ]
      },
      {
        "name": "Scorching Fury",
        "cost": [{"PowerType": "Fire", "count": 3}],
        "damage": 5500,
        "effectText": "Discard one Fire Power card from this Creature.",
        "structuredEffects": [
          {"type": "DiscardPowerCardFromSelf", "amount": 1, "criteria": {"PowerType": "Fire"}, "costEffect": true}
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Water", "multiplier": 2}],
    "resistances": [{"PowerType": "Thunder", "reduction": 1500}],
    "retreatCost": [{"PowerType": "Fire", "count": 3}],
    "convertedRetreatCost": 3,
    "collectionNumber": "351/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 106,
    "name": "Moltem",
    "supertype": "Creature",
    "types": ["Fire"],
    "level": 6,
    "hp": 5000,
    "rarity": "Rare",
    "images": {"small": "CardImages/Creatures/Fire/Moltem1"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Lava Punch",
        "cost": [{"PowerType": "Fire", "count": 1}],
        "damage": 2500,
        "effectText": null,
        "structuredEffects": []
      },
      {
        "name": "Magma Breath",
        "cost": [{"PowerType": "Fire", "count": 2}],
        "damage": 3500,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Water", "multiplier": 2}],
    "resistances": [{"PowerType": "Thunder", "reduction": 1000}],
    "retreatCost": [{"PowerType": "Fire", "count": 2}],
    "convertedRetreatCost": 2,
    "collectionNumber": "033/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 107,
    "name": "Phoenix, the Rising",
    "supertype": "Creature",
    "types": ["Fire"],
    "level": 10,
    "hp": 10000,
    "rarity": "UltraRare",
    "images": {"small": "CardImages/Creatures/Fire/Phoenixthe-Rising1"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Resurrection",
        "trigger": "OnSummon",
        "effectText": "To summon, Phoenix, the Rising must be in your Discard Pile and sacrifice Phoenic. Upon summoning, shuffle all Fire Power cards from your Discard Pile into your Hand.",
        "usableFromBench": false,
        "prerequisites": [
          {"type": "SelfInDiscardPile"},
          {"type": "SacrificeSpecificCreature", "creatureName": "Phoenic"}
        ],
        "structuredEffects": [
          {
            "type": "ReturnCardsFromDiscardToHand",
            "target": "PlayerSelf",
            "amount": 99,
            "cardSuperTypeToSearch": "Power",
            "cardPowerTypeToSearch": "Fire"
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Flaming Talons",
        "cost": [{"PowerType": "Fire", "count": 3}, {"PowerType": "Wind", "count": 1}],
        "damage": 6500,
        "effectText": "Your opponent's Creature is automatically Burned. Flip the main coin. If the result is tails, you cannot attack next turn.",
        "structuredEffects": [
          {"type": "ApplyStatus", "target": "OpponentCreatureActive", "status": "Burned"},
          {
            "type": "ConditionalEffect",
            "condition": {"type": "CoinFlip", "comparison": "EqualTo", "stringValue": "Tails"},
            "trueEffects": [{"type": "ApplyAttackRestriction", "target": "Self", "restriction": "CannotAttackNextTurn"}],
            "falseEffects": []
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Earth", "multiplier": 3}],
    "resistances": [],
    "retreatCost": [],
    "convertedRetreatCost": 0,
    "collectionNumber": "171/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 108,
    "name": "Phoenix, the Rising",
    "supertype": "Creature",
    "types": ["Fire"],
    "level": 10,
    "hp": 10000,
    "rarity": "HiddenRare",
    "images": {"small": "CardImages/Creatures/Fire/Phoenixthe-Rising2"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Resurrection",
        "trigger": "OnSummon",
        "effectText": "To summon, Phoenix, the Rising must be in your Discard Pile and sacrifice Phoenic. Upon summoning, shuffle all Fire Power cards from your Discard Pile into your Hand.",
        "usableFromBench": false,
        "prerequisites": [
          {"type": "SelfInDiscardPile"},
          {"type": "SacrificeSpecificCreature", "creatureName": "Phoenic"}
        ],
        "structuredEffects": [
          {
            "type": "ShuffleFromDiscardToHand",
            "cardType": "Power",
            "powerType": "Fire",
            "amount": "All"
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Flaming Talons",
        "cost": [{"PowerType": "Fire", "count": 3}, {"PowerType": "Wind", "count": 1}],
        "damage": 6500,
        "effectText": "Your opponent's Creature is automatically Burned. Flip the main coin. If the result is tails, you cannot attack next turn.",
        "structuredEffects": [
          {"type": "ApplyStatus", "target": "OpponentCreatureActive", "status": "Burned"},
          {
            "type": "ConditionalEffect",
            "condition": {"type": "CoinFlip", "comparison": "EqualTo", "stringValue": "Tails"},
            "trueEffects": [{"type": "ApplyAttackRestriction", "target": "Self", "restriction": "CannotAttackNextTurn"}],
            "falseEffects": []
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Earth", "multiplier": 3}],
    "resistances": [],
    "retreatCost": [],
    "convertedRetreatCost": 0,
    "collectionNumber": "371/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 109,
    "name": "Phoenix, the Rising",
    "supertype": "Creature",
    "types": ["Fire"],
    "level": 10,
    "hp": 10000,
    "rarity": "Borderless",
    "images": {"small": "CardImages/Creatures/Fire/Phoenixthe-Rising3"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Resurrection",
        "trigger": "OnSummon",
        "effectText": "To summon, Phoenix, the Rising must be in your Discard Pile and sacrifice Phoenic. Upon summoning, shuffle all Fire Power cards from your Discard Pile into your Hand.",
        "usableFromBench": false,
        "prerequisites": [
          {"type": "SelfInDiscardPile"},
          {"type": "SacrificeSpecificCreature", "creatureName": "Phoenic"}
        ],
        "structuredEffects": [
          {
            "type": "ShuffleFromDiscardToHand",
            "cardType": "Power",
            "powerType": "Fire",
            "amount": "All"
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Flaming Talons",
        "cost": [{"PowerType": "Fire", "count": 3}, {"PowerType": "Wind", "count": 1}],
        "damage": 6500,
        "effectText": "Your opponent's Creature is automatically Burned. Flip the main coin. If the result is tails, you cannot attack next turn.",
        "structuredEffects": [
          {"type": "ApplyStatus", "target": "OpponentCreatureActive", "status": "Burned"},
          {
            "type": "ConditionalEffect",
            "condition": {"type": "CoinFlip", "comparison": "EqualTo", "stringValue": "Tails"},
            "trueEffects": [{"type": "ApplyAttackRestriction", "target": "Self", "restriction": "CannotAttackNextTurn"}],
            "falseEffects": []
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Earth", "multiplier": 3}],
    "resistances": [],
    "retreatCost": [],
    "convertedRetreatCost": 0,
    "collectionNumber": "371/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 110,
    "name": "Pyrocanthodes",
    "supertype": "Creature",
    "types": ["Fire"],
    "level": 3,
    "hp": 1500,
    "rarity": "Common",
    "images": {"small": "CardImages/Creatures/Fire/Pyrocanthodes1"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Ember Splash",
        "cost": [{"PowerType": "Fire", "count": 1}],
        "damage": 1000,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Earth", "multiplier": 1}],
    "resistances": [{"PowerType": "Light", "reduction": 500}],
    "retreatCost": [{"PowerType": "Fire", "count": 1}],
    "convertedRetreatCost": 1,
    "collectionNumber": "016/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 111,
    "name": "Pyronix",
    "supertype": "Creature",
    "types": ["Fire"],
    "level": 1,
    "hp": 1000,
    "rarity": "Common",
    "images": {"small": "CardImages/Creatures/Fire/Pyronix1"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Flame Body",
        "trigger": "OnSummon",
        "effectText": "Once summoned onto the field of play. Search your Deck for three Fire Power cards, show your opponent and place them in your Hand.",
        "usableFromBench": false,
        "prerequisites": [],
        "structuredEffects": [
          {
            "type": "SearchDeck",
            "category": "CardManipulation",
            "target": "PlayerSelf",
            "searchCriteria": {"cardType": "Power", "powerType": "Fire"},
            "amount": 3,
            "action": "AddToHandAndShow"
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Fireball",
        "cost": [{"PowerType": "Fire", "count": 1}],
        "damage": 500,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Earth", "multiplier": 1}],
    "resistances": [{"PowerType": "Light", "reduction": 500}],
    "retreatCost": [{"PowerType": "Fire", "count": 1}],
    "convertedRetreatCost": 1,
    "collectionNumber": "017/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 112,
    "name": "Smol, the Titan",
    "supertype": "Creature",
    "types": ["Fire"],
    "level": 3,
    "hp": 2000,
    "rarity": "Common",
    "images": {"small": "CardImages/Creatures/Fire/Smol,theTitan1"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Blazing Fury",
        "cost": [{"PowerType": "Fire", "count": 1}],
        "damage": 1000,
        "effectText": "Your opponent's Creature is automatically Burned.",
        "structuredEffects": [
          {
            "type": "ApplyStatus",
            "category": "Debuff",
            "target": "OpponentCreatureActive",
            "status": "Burned"
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Earth", "multiplier": 1}],
    "resistances": [{"PowerType": "Light", "reduction": 500}],
    "retreatCost": [{"PowerType": "Fire", "count": 1}],
    "convertedRetreatCost": 1,
    "collectionNumber": "031/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 113,
    "name": "The Pyroclasm Crew",
    "supertype": "Creature",
    "types": ["Fire"],
    "level": 4,
    "hp": 3000,
    "rarity": "Uncommon",
    "images": {"small": "CardImages/Creatures/Fire/FlamingTerrors1"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Infernal Charge",
        "trigger": "PassiveWhileActive",
        "effectText": "When there are three or more Fire Creatures on the Bench, this Creature gains +1000 to its attack and HP.",
        "usableFromBench": false,
        "prerequisites": [],
        "structuredEffects": [
          {
            "type": "ConditionalStatBoost",
            "condition": {
              "type": "BenchCreatureCount",
              "powerTypeParam": "Fire",
              "comparison": "GreaterThanOrEqualTo",
              "amount": 3
            },
            "boosts": [
              {"stat": "Attack", "amount": 1000},
              {"stat": "HP", "amount": 1000}
            ]
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Flame Burst",
        "cost": [{"PowerType": "Fire", "count": 1}],
        "damage": 1500,
        "effectText": "Roll the main dice. If the result is even, deal +4000 damage to your opponent's Creature. If odd, this attack does nothing.",
        "structuredEffects": [
          {
            "type": "ConditionalEffect",
            "category": "Damage",
            "condition": {"type": "DiceRoll", "comparison": "IsEven"},
            "trueEffects": [{"type": "DealDamage", "target": "OpponentCreatureActive", "amount": 4000}],
            "falseEffects": []
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Water", "multiplier": 1}],
    "resistances": [{"PowerType": "Thunder", "reduction": 500}],
    "retreatCost": [{"PowerType": "Fire", "count": 1}],
    "convertedRetreatCost": 1,
    "collectionNumber": "030/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 114,
    "name": "Vaska",
    "supertype": "Creature",
    "types": ["Fire"],
    "level": 6,
    "hp": 5500,
    "rarity": "Uncommon",
    "images": {"small": "CardImages/Creatures/Fire/Vaska1"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Burning Embers",
        "cost": [{"PowerType": "Fire", "count": 2}],
        "damage": 3000,
        "effectText": null,
        "structuredEffects": []
      },
      {
        "name": "Fiery Fury",
        "cost": [{"PowerType": "Fire", "count": 1}],
        "damage": 1500,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Earth", "multiplier": 2}],
    "resistances": [{"PowerType": "Light", "reduction": 1000}],
    "retreatCost": [{"PowerType": "Fire", "count": 2}],
    "convertedRetreatCost": 2,
    "collectionNumber": "064/311",
    "illustrator": "Mystik Creatures"
  },
  {
  "id": 115,
    "name": "Chamilla",
    "supertype": "Creature",
    "types": ["Forest"],
    "level": 3,
    "hp": 2000,
    "rarity": "Uncommon",
    "images": {"small": "CardImages/Creatures/Forest/Chamira1"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Child of Nura",
        "cost": [{"PowerType": "Forest", "count": 1}],
        "damage": null,
        "effectText": "Draw one card from the top of your Deck, show your opponent. If the card is a Secret card or Power card, Poison your opponent's Creature.",
        "structuredEffects": [
          {
            "type": "SequentialEffect",
            "subEffects": [
              {
                "type": "DrawAndReveal",
                "target": "PlayerSelf",
                "amount": 1
              },
              {
                "type": "ConditionalEffect",
                "condition": {
                  "type": "Or",
                  "subConditions": [
                    {
                      "type": "LastDrawnCardIsType",
                      "superTypeParam": "Secret"
                    },
                    {
                      "type": "LastDrawnCardIsType",
                      "superTypeParam": "Power"
                    }
                  ]
                },
                "trueEffects": [
                  {
                    "type": "ApplyStatusEffect",
                    "statusToApply": "Poison",
                    "target": "OpponentActiveCreature"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "name": "Magical Forestry",
        "cost": [{"PowerType": "Forest", "count": 1}],
        "damage": 1000,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Fire", "multiplier": 1}],
    "resistances": [{"PowerType": "Water", "reduction": 500}],
    "retreatCost": [{"PowerType": "Forest", "count": 1}],
    "convertedRetreatCost": 1,
    "collectionNumber": "088/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 116,
    "name": "Dracoleón",
    "supertype": "Creature",
    "types": ["Forest"],
    "level": 10,
    "hp": 9500,
    "rarity": "UltraRare",
    "images": {"small": "CardImages/Creatures/Forest/Dracoleon1"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Heart of Lion",
        "trigger": "OnDestroyedByOpponentCreature",
        "effectText": "To summon, you must play Sacrificial Lamb and have Nemean Lion in the field of play. When Dracoleón is destroyed by your opponent's Creature, revive Dracoleón with +3000 HP. (this Ability can only be used once)",
        "usableFromBench": false,
        "prerequisites": [
            {"type": "PlaySpecificCard", "cardName": "Sacrificial Lamb"},
            {"type": "SpecificCreatureInPlay", "creatureName": "Nemean Lion"}
        ],
        "structuredEffects": [
          {
            "type": "ReviveSelf",
            "hpAmount": 3000,
            "usageRestriction": "OncePerGame"
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Soul of a Dragon",
        "cost": [{"PowerType": "Forest", "count": 3}, {"PowerType": "Dark", "count": 1}],
        "damage": 7000,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Light", "multiplier": 3}],
    "resistances": [],
    "retreatCost": [],
    "convertedRetreatCost": 0,
    "collectionNumber": "166/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 117,
    "name": "Dracoleón",
    "supertype": "Creature",
    "types": ["Forest"],
    "level": 10,
    "hp": 9500,
    "rarity": "HiddenRare",
    "images": {"small": "CardImages/Creatures/Forest/Dracoleon2"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Heart of Lion",
        "trigger": "OnDestroyedByOpponentCreature",
        "effectText": "To summon, you must play Sacrificial Lamb and have Nemean Lion in the field of play. When Dracoleón is destroyed by your opponent's Creature, revive Dracoleón with +3000 HP. (this Ability can only be used once)",
        "usableFromBench": false,
        "prerequisites": [
            {"type": "PlaySpecificCard", "cardName": "Sacrificial Lamb"},
            {"type": "SpecificCreatureInPlay", "creatureName": "Nemean Lion"}
        ],
        "structuredEffects": [
          {
            "type": "ReviveSelf",
            "hpAmount": 3000,
            "usageRestriction": "OncePerGame"
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Soul of a Dragon",
        "cost": [{"PowerType": "Forest", "count": 3}, {"PowerType": "Dark", "count": 1}],
        "damage": 7000,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Light", "multiplier": 3}],
    "resistances": [],
    "retreatCost": [],
    "convertedRetreatCost": 0,
    "collectionNumber": "363/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 118,
    "name": "Dracoleón",
    "supertype": "Creature",
    "types": ["Forest"],
    "level": 10,
    "hp": 9500,
    "rarity": "Borderless",
    "images": {"small": "CardImages/Creatures/Forest/Dracoleon3"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Heart of Lion",
        "trigger": "OnDestroyedByOpponentCreature",
        "effectText": "To summon, you must play Sacrificial Lamb and have Nemean Lion in the field of play. When Dracoleón is destroyed by your opponent's Creature, revive Dracoleón with +3000 HP. (this Ability can only be used once)",
        "usableFromBench": false,
        "prerequisites": [
            {"type": "PlaySpecificCard", "cardName": "Sacrificial Lamb"},
            {"type": "SpecificCreatureInPlay", "creatureName": "Nemean Lion"}
        ],
        "structuredEffects": [
          {
            "type": "ReviveSelf",
            "hpAmount": 3000,
            "usageRestriction": "OncePerGame"
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Soul of a Dragon",
        "cost": [{"PowerType": "Forest", "count": 3}, {"PowerType": "Dark", "count": 1}],
        "damage": 7000,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Light", "multiplier": 3}],
    "resistances": [],
    "retreatCost": [],
    "convertedRetreatCost": 0,
    "collectionNumber": "363/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 119,
    "name": "Eamonn",
    "supertype": "Creature",
    "types": ["Forest"],
    "level": 10,
    "hp": 8000,
    "rarity": "HiddenRare",
    "images": {"small": "CardImages/Creatures/Forest/Eamonn2"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Photosynthetic Surge",
        "trigger": "PassiveWhileActive",
        "effectText": "Eamonn can only be summoned by sacrificing any level 8 or higher Forest or Light type Creature. While on the active field of play, your opponent cannot use any Magik cards.",
        "usableFromBench": false,
        "prerequisites": [{"type": "SacrificeCreature", "criteria": {"minLevel": 8, "types": ["Forest", "Light"]}}],
        "structuredEffects": [
          {
            "type": "PreventCardTypePlay",
            "target": "PlayerOpponent",
            "cardSuperTypeToSearch": "Secret",
            "cardSubTypeToSearch": "Magik"
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Radiant Spores",
        "cost": [{"PowerType": "Forest", "count": 2}, {"PowerType": "Light", "count": 2}],
        "damage": 7000,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Dark", "multiplier": 3}],
    "resistances": [],
    "retreatCost": [],
    "convertedRetreatCost": 0,
    "collectionNumber": "387/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 120,
    "name": "Eamonn",
    "supertype": "Creature",
    "types": ["Forest"],
    "level": 10,
    "hp": 8000,
    "rarity": "Borderless",
    "images": {"small": "CardImages/Creatures/Forest/Eamonn3"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Photosynthetic Surge",
        "trigger": "PassiveWhileActive",
        "effectText": "Eamonn can only be summoned by sacrificing any level 8 or higher Forest or Light type Creature. While on the active field of play, your opponent cannot use any Magik cards.",
        "usableFromBench": false,
        "prerequisites": [{"type": "SacrificeCreature", "criteria": {"minLevel": 8, "types": ["Forest", "Light"]}}],
        "structuredEffects": [
          {
            "type": "PreventCardTypePlay",
            "target": "PlayerOpponent",
            "cardSuperTypeToSearch": "Secret",
            "cardSubTypeToSearch": "Magik"
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Radiant Spores",
        "cost": [{"PowerType": "Forest", "count": 2}, {"PowerType": "Light", "count": 2}],
        "damage": 7000,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Dark", "multiplier": 3}],
    "resistances": [],
    "retreatCost": [],
    "convertedRetreatCost": 0,
    "collectionNumber": "387/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 121,
    "name": "Forest Elf",
    "supertype": "Creature",
    "types": ["Forest"],
    "level": 6,
    "hp": 6500,
    "rarity": "Rare",
    "images": {"small": "CardImages/Creatures/Forest/ForestElf1"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Plants of Nura",
        "cost": [{"PowerType": "Forest", "count": 1}],
        "damage": 2500,
        "effectText": "Automatically Poison your opponent's Creature. (you cannot use this move twice in a row)",
        "structuredEffects": [
          {
            "type": "ApplyStatus",
            "category": "Debuff",
            "target": "OpponentCreatureActive",
            "status": "Poison",
            "usageRestriction": "CannotBeUsedTwiceInARow"
          }
        ]
      },
      {
        "name": "Elven Magik",
        "cost": [{"PowerType": "Forest", "count": 2}],
        "damage": 4000,
        "effectText": "Flip the main coin. If the result is heads, add +1000 HP to this Creature.",
        "structuredEffects": [
          {
            "type": "ConditionalEffect",
            "category": "Healing",
            "condition": {"type": "CoinFlip", "comparison": "EqualTo", "stringValue": "Heads"},
            "trueEffects": [{"type": "ModifyHP", "target": "Self", "amount": 1000}],
            "falseEffects": []
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Fire", "multiplier": 2}],
    "resistances": [{"PowerType": "Water", "reduction": 1000}],
    "retreatCost": [{"PowerType": "Forest", "count": 2}],
    "convertedRetreatCost": 2,
    "collectionNumber": "149/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 122,
    "name": "Forest Elf",
    "supertype": "Creature",
    "types": ["Forest"],
    "level": 6,
    "hp": 6500,
    "rarity": "HiddenRare",
    "images": {"small": "CardImages/Creatures/Forest/ForestElf2"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Plants of Nura",
        "cost": [{"PowerType": "Forest", "count": 1}],
        "damage": 2500,
        "effectText": "Automatically Poison your opponent's Creature. (you cannot use this move twice in a row)",
        "structuredEffects": [
          {
            "type": "ApplyStatus",
            "category": "Debuff",
            "target": "OpponentCreatureActive",
            "status": "Poison",
            "usageRestriction": "CannotBeUsedTwiceInARow"
          }
        ]
      },
      {
        "name": "Elven Magik",
        "cost": [{"PowerType": "Forest", "count": 2}],
        "damage": 4000,
        "effectText": "Flip the main coin. If the result is heads, add +1000 HP to this Creature.",
        "structuredEffects": [
          {
            "type": "ConditionalEffect",
            "category": "Healing",
            "condition": {"type": "CoinFlip", "comparison": "EqualTo", "stringValue": "Heads"},
            "trueEffects": [{"type": "ModifyHP", "target": "Self", "amount": 1000}],
            "falseEffects": []
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Fire", "multiplier": 2}],
    "resistances": [{"PowerType": "Water", "reduction": 1000}],
    "retreatCost": [{"PowerType": "Forest", "count": 2}],
    "convertedRetreatCost": 2,
    "collectionNumber": "338/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 123,
    "name": "Forest Elf",
    "supertype": "Creature",
    "types": ["Forest"],
    "level": 6,
    "hp": 6500,
    "rarity": "Borderless",
    "images": {"small": "CardImages/Creatures/Forest/ForestElf3"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Plants of Nura",
        "cost": [{"PowerType": "Forest", "count": 1}],
        "damage": 2500,
        "effectText": "Automatically Poison your opponent's Creature. (you cannot use this move twice in a row)",
        "structuredEffects": [
          {
            "type": "ApplyStatus",
            "category": "Debuff",
            "target": "OpponentCreatureActive",
            "status": "Poison",
            "usageRestriction": "CannotBeUsedTwiceInARow"
          }
        ]
      },
      {
        "name": "Elven Magik",
        "cost": [{"PowerType": "Forest", "count": 2}],
        "damage": 4000,
        "effectText": "Flip the main coin. If the result is heads, add +1000 HP to this Creature.",
        "structuredEffects": [
          {
            "type": "ConditionalEffect",
            "category": "Healing",
            "condition": {"type": "CoinFlip", "comparison": "EqualTo", "stringValue": "Heads"},
            "trueEffects": [{"type": "ModifyHP", "target": "Self", "amount": 1000}],
            "falseEffects": []
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Fire", "multiplier": 2}],
    "resistances": [{"PowerType": "Water", "reduction": 1000}],
    "retreatCost": [{"PowerType": "Forest", "count": 2}],
    "convertedRetreatCost": 2,
    "collectionNumber": "338/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 124,
    "name": "Howlwing",
    "supertype": "Creature",
    "types": ["Forest"],
    "level": 8,
    "hp": 7000,
    "rarity": "Rare",
    "images": {"small": "CardImages/Creatures/Forest/Howlwing1"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Screeching Strike",
        "cost": [{"PowerType": "Forest", "count": 2}],
        "damage": 4500,
        "effectText": null,
        "structuredEffects": []
      },
      {
        "name": "Howling Burst",
        "cost": [{"PowerType": "Forest", "count": 3}],
        "damage": 6000,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Fire", "multiplier": 2}],
    "resistances": [{"PowerType": "Water", "reduction": 1500}],
    "retreatCost": [{"PowerType": "Forest", "count": 2}],
    "convertedRetreatCost": 2,
    "collectionNumber": "141/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 125,
    "name": "Kaia",
    "supertype": "Creature",
    "types": ["Forest"],
    "level": 10,
    "hp": 9500,
    "rarity": "HiddenRare",
    "images": {"small": "CardImages/Creatures/Forest/Kaia2"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Island Embrace",
        "trigger": "OnDestroyedByOpponentCreature",
        "effectText": "Kaia can only be summoned by sacrificing any level 8 or higher Forest or Water type Creature. When Kaia is destroyed by your opponent's Creature, they do not claim any Prize Cards.",
        "usableFromBench": false,
        "prerequisites": [{"type": "SacrificeCreature", "criteria": {"minLevel": 8, "types": ["Forest", "Water"]}}],
        "structuredEffects": [
          {
            "type": "PreventPrizeClaim",
            "target": "PlayerOpponent"
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Pacific Pulse",
        "cost": [{"PowerType": "Forest", "count": 2}, {"PowerType": "Water", "count": 2}],
        "damage": null,
        "effectText": "Roll the main dice. Your attack is the result x1500.",
        "structuredEffects": [
          {
            "type": "DiceRollDependentDamage",
            "multiplier": 1500,
            "target": "OpponentCreatureActive"
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Thunder", "multiplier": 3}],
    "resistances": [],
    "retreatCost": [],
    "convertedRetreatCost": 0,
    "collectionNumber": "388/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 126,
    "name": "Kaia",
    "supertype": "Creature",
    "types": ["Forest"],
    "level": 10,
    "hp": 9500,
    "rarity": "Borderless",
    "images": {"small": "CardImages/Creatures/Forest/Kaia3"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Island Embrace",
        "trigger": "OnDestroyedByOpponentCreature",
        "effectText": "Kaia can only be summoned by sacrificing any level 8 or higher Forest or Water type Creature. When Kaia is destroyed by your opponent's Creature, they do not claim any Prize Cards.",
        "usableFromBench": false,
        "prerequisites": [{"type": "SacrificeCreature", "criteria": {"minLevel": 8, "types": ["Forest", "Water"]}}],
        "structuredEffects": [
          {
            "type": "PreventPrizeClaim",
            "target": "PlayerOpponent"
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Pacific Pulse",
        "cost": [{"PowerType": "Forest", "count": 2}, {"PowerType": "Water", "count": 2}],
        "damage": null,
        "effectText": "Roll the main dice. Your attack is the result x1500.",
        "structuredEffects": [
          {
            "type": "DiceRollDependentDamage",
            "multiplier": 1500,
            "target": "OpponentCreatureActive"
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Thunder", "multiplier": 3}],
    "resistances": [],
    "retreatCost": [],
    "convertedRetreatCost": 0,
    "collectionNumber": "388/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 127,
    "name": "Lilith, Forest Pixie",
    "supertype": "Creature",
    "types": ["Forest"],
    "level": 10,
    "hp": 8500,
    "rarity": "UltraRare",
    "images": {"small": "CardImages/Creatures/Forest/LilithForestGuardian1"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Nature's Resilience",
        "trigger": "OnSummon",
        "effectText": "To summon, you must play Lilith's Garden. When summoned, Lilith Forest Guardian gains +1000 HP for every Forest Creature on your Bench.",
        "usableFromBench": false,
        "prerequisites": [{"type": "PlaySpecificCard", "cardName": "Lilith's Garden"}],
        "structuredEffects": [
          {
            "type": "ModifyStats",
            "category": "StatBoost",
            "target": "Self",
            "modification": {
              "stat": "HP",
              "amountPerCondition": 1000,
              "condition": {"type": "CountCreaturesOnBench", "powerType": "Forest"}
            }
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Canopy of Life",
        "cost": [{"PowerType": "Forest", "count": 4}],
        "damage": 6000,
        "effectText": "Roll the main dice, if you roll a 1, 3, or 6 this attack does an additional +1500 damage. If you roll a 2, 4, or 5 this attack does -1500 less damage.",
        "structuredEffects": [
          {
            "type": "ConditionalDamageModifier",
            "conditions": [
              {"diceRollValues": [1,3,6], "damageModifier": 1500},
              {"diceRollValues": [2,4,5], "damageModifier": -1500}
            ],
            "target": "OpponentCreatureActive"
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Fire", "multiplier": 3}],
    "resistances": [],
    "retreatCost": [],
    "convertedRetreatCost": 0,
    "collectionNumber": "169/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 128,
    "name": "Lilith, Forest Pixie",
    "supertype": "Creature",
    "types": ["Forest"],
    "level": 10,
    "hp": 8500,
    "rarity": "HiddenRare",
    "images": {"small": "CardImages/Creatures/Forest/LilithForestGuardian2"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Nature's Resilience",
        "trigger": "OnSummon",
        "effectText": "To summon, you must play Lilith's Garden. When summoned, Lilith Forest Guardian gains +1000 HP for every Forest Creature on your Bench.",
        "usableFromBench": false,
        "prerequisites": [{"type": "PlaySpecificCard", "cardName": "Lilith's Garden"}],
        "structuredEffects": [
          {
            "type": "ModifyStats",
            "category": "StatBoost",
            "target": "Self",
            "modification": {
              "stat": "HP",
              "amountPerCondition": 1000,
              "condition": {"type": "CountCreaturesOnBench", "powerType": "Forest"}
            }
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Canopy of Life",
        "cost": [{"PowerType": "Forest", "count": 4}],
        "damage": 6000,
        "effectText": "Roll the main dice, if you roll a 1, 3, or 6 this attack does an additional +1500 damage. If you roll a 2, 4, or 5 this attack does -1500 less damage.",
        "structuredEffects": [
          {
            "type": "ConditionalDamageModifier",
            "conditions": [
              {"diceRollValues": [1,3,6], "damageModifier": 1500},
              {"diceRollValues": [2,4,5], "damageModifier": -1500}
            ],
            "target": "OpponentCreatureActive"
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Fire", "multiplier": 3}],
    "resistances": [],
    "retreatCost": [],
    "convertedRetreatCost": 0,
    "collectionNumber": "368/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 129,
    "name": "Lilith, Forest Pixie",
    "supertype": "Creature",
    "types": ["Forest"],
    "level": 10,
    "hp": 8500,
    "rarity": "Borderless",
    "images": {"small": "CardImages/Creatures/Forest/LilithForestGuardian3"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Nature's Resilience",
        "trigger": "OnSummon",
        "effectText": "To summon, you must play Lilith's Garden. When summoned, Lilith Forest Guardian gains +1000 HP for every Forest Creature on your Bench.",
        "usableFromBench": false,
        "prerequisites": [{"type": "PlaySpecificCard", "cardName": "Lilith's Garden"}],
        "structuredEffects": [
          {
            "type": "ModifyStats",
            "category": "StatBoost",
            "target": "Self",
            "modification": {
              "stat": "HP",
              "amountPerCondition": 1000,
              "condition": {"type": "CountCreaturesOnBench", "powerType": "Forest"}
            }
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Canopy of Life",
        "cost": [{"PowerType": "Forest", "count": 4}],
        "damage": 6000,
        "effectText": "Roll the main dice, if you roll a 1, 3, or 6 this attack does an additional +1500 damage. If you roll a 2, 4, or 5 this attack does -1500 less damage.",
        "structuredEffects": [
          {
            "type": "ConditionalDamageModifier",
            "conditions": [
              {"diceRollValues": [1,3,6], "damageModifier": 1500},
              {"diceRollValues": [2,4,5], "damageModifier": -1500}
            ],
            "target": "OpponentCreatureActive"
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Fire", "multiplier": 3}],
    "resistances": [],
    "retreatCost": [],
    "convertedRetreatCost": 0,
    "collectionNumber": "368/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 130,
    "name": "Manticore",
    "supertype": "Creature",
    "types": ["Forest"],
    "level": 6,
    "hp": 5500,
    "rarity": "Uncommon",
    "images": {"small": "CardImages/Creatures/Forest/Manticore1"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Earthbound Fury",
        "cost": [{"PowerType": "Forest", "count": 2}],
        "damage": 3000,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Dark", "multiplier": 2}],
    "resistances": [{"PowerType": "Wind", "reduction": 1000}],
    "retreatCost": [{"PowerType": "Forest", "count": 1}],
    "convertedRetreatCost": 1,
    "collectionNumber": "084/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 131,
    "name": "Mira",
    "supertype": "Creature",
    "types": ["Forest"],
    "level": 1,
    "hp": 500,
    "rarity": "Common",
    "images": {"small": "CardImages/Creatures/Forest/Pixie1"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Nature's Blessing",
        "trigger": "OnPlayerPlaysMagikCard",
        "effectText": "When you play a Magik card on the field while Mira is active in the field of play, add +1000 HP to this Creature.",
        "usableFromBench": false,
        "prerequisites": [],
        "structuredEffects": [
          {
            "type": "ModifyHP",
            "category": "Healing",
            "target": "Self",
            "amount": 1000
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Nature's Kiss",
        "cost": [{"PowerType": "Forest", "count": 1}],
        "damage": null,
        "effectText": "Roll the main dice. If the result is even, deal +500 damage to your opponent's Creature. If the result is odd, search your Deck for any Power card.",
        "structuredEffects": [
          {
            "type": "ConditionalEffect",
            "condition": {"type": "DiceRoll", "comparison": "IsEven"},
            "trueEffects": [{"type": "DealDamage", "target": "OpponentCreatureActive", "amount": 500}],
            "falseEffects": [{"type": "SearchDeck", "target": "PlayerSelf", "searchCriteria": {"cardSuperType": "Power", "anyType": true}, "amount": 1, "action": "AddToHand"}]
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Fire", "multiplier": 1}],
    "resistances": [{"PowerType": "Water", "reduction": 500}],
    "retreatCost": [{"PowerType": "Forest", "count": 1}],
    "convertedRetreatCost": 1,
    "collectionNumber": "102/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 132,
    "name": "Moss Golem",
    "supertype": "Creature",
    "types": ["Forest"],
    "level": 3,
    "hp": 2500,
    "rarity": "Common",
    "images": {"small": "CardImages/Creatures/Forest/Moss-Golem1"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Overgrowth",
        "cost": [{"PowerType": "Forest", "count": 1}],
        "damage": 1000,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Fire", "multiplier": 1}],
    "resistances": [{"PowerType": "Water", "reduction": 500}],
    "retreatCost": [{"PowerType": "Forest", "count": 1}],
    "convertedRetreatCost": 1,
    "collectionNumber": "146/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 133,
    "name": "Nemean Lion",
    "supertype": "Creature",
    "types": ["Forest"],
    "level": 7,
    "hp": 6000,
    "rarity": "Rare",
    "images": {"small": "CardImages/Creatures/Forest/NemeanLion1"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Unbreakable Hide",
        "trigger": "OnAttacked",
        "effectText": "When this Creature is attacked, Nemean Lion takes -1000 less damage.",
        "usableFromBench": false,
        "prerequisites": [],
        "structuredEffects": [
          {
            "type": "ReduceDamageTaken",
            "amount": 1000
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Fury of the Pride",
        "cost": [{"PowerType": "Forest", "count": 2}],
        "damage": 3500,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Dark", "multiplier": 2}],
    "resistances": [{"PowerType": "Wind", "reduction": 1500}],
    "retreatCost": [{"PowerType": "Forest", "count": 2}],
    "convertedRetreatCost": 2,
    "collectionNumber": "100/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 134,
    "name": "Nemean Lion",
    "supertype": "Creature",
    "types": ["Forest"],
    "level": 7,
    "hp": 6000,
    "rarity": "HiddenRare",
    "images": {"small": "CardImages/Creatures/Forest/NemeanLion2"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Unbreakable Hide",
        "trigger": "OnAttacked",
        "effectText": "When this Creature is attacked, Nemean Lion takes -1000 less damage.",
        "usableFromBench": false,
        "prerequisites": [],
        "structuredEffects": [
          {
            "type": "ReduceDamageTaken",
            "amount": 1000
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Fury of the Pride",
        "cost": [{"PowerType": "Forest", "count": 2}],
        "damage": 3500,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Dark", "multiplier": 2}],
    "resistances": [{"PowerType": "Wind", "reduction": 1500}],
    "retreatCost": [{"PowerType": "Forest", "count": 2}],
    "convertedRetreatCost": 2,
    "collectionNumber": "347/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 2004,
    "name": "Nemean Lion",
    "supertype": "Creature",
    "types": ["Forest"],
    "level": 7,
    "hp": 6000,
    "rarity": "Borderless",
    "images": {"small": "CardImages/Creatures/Forest/NemeanLion3"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Unbreakable Hide",
        "trigger": "OnAttacked",
        "effectText": "When this Creature is attacked, Nemean Lion takes -1000 less damage.",
        "usableFromBench": false,
        "prerequisites": [],
        "structuredEffects": [
          {
            "type": "ReduceDamageTaken",
            "amount": 1000
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Fury of the Pride",
        "cost": [{"PowerType": "Forest", "count": 2}],
        "damage": 3500,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Dark", "multiplier": 2}],
    "resistances": [{"PowerType": "Wind", "reduction": 1500}],
    "retreatCost": [{"PowerType": "Forest", "count": 2}],
    "convertedRetreatCost": 2,
    "collectionNumber": "347/311",
    "illustrator": "Mystik Creatures"
  },  
  {
    "id": 135,
    "name": "Nixor",
    "supertype": "Creature",
    "types": ["Forest"],
    "level": 5,
    "hp": 4000,
    "rarity": "Uncommon",
    "images": {"small": "CardImages/Creatures/Forest/Nixor1"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Fossil Fury",
        "cost": [{"PowerType": "Forest", "count": 1}],
        "damage": 2500,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Fire", "multiplier": 2}],
    "resistances": [{"PowerType": "Water", "reduction": 1000}],
    "retreatCost": [{"PowerType": "Forest", "count": 1}],
    "convertedRetreatCost": 1,
    "collectionNumber": "057/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 136,
    "name": "Owlbear",
    "supertype": "Creature",
    "types": ["Forest"],
    "level": 7,
    "hp": 6000,
    "rarity": "Rare",
    "images": {"small": "CardImages/Creatures/Forest/Redcap1"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Wisdom of the Ages",
        "trigger": "OnSummon",
        "effectText": "When summoned to the field of play, draw three cards from the top of your Deck.",
        "usableFromBench": false,
        "prerequisites": [],
        "structuredEffects": [
          {
            "type": "DrawCards",
            "category": "CardManipulation",
            "target": "PlayerSelf",
            "amount": 3
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Riddler",
        "cost": [{"PowerType": "Forest", "count": 2}],
        "damage": null,
        "effectText": "Roll the main dice. If the result is even, your opponent's Creature cannot attack or use abilites next turn. If odd, inflict +3500 damage to your opponent's Creature.",
        "structuredEffects": [
          {
            "type": "ConditionalEffect",
            "condition": {"type": "DiceRoll", "comparison": "IsEven"},
            "trueEffects": [{"type": "ApplyStatus", "target": "OpponentCreatureActive", "status": "AbilityLock", "effectDetail": "CannotAttackOrUseAbilitiesNextTurn"}],
            "falseEffects": [{"type": "DealDamage", "target": "OpponentCreatureActive", "amount": 3500}]
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Fire", "multiplier": 2}],
    "resistances": [{"PowerType": "Water", "reduction": 1000}],
    "retreatCost": [{"PowerType": "Forest", "count": 2}],
    "convertedRetreatCost": 2,
    "collectionNumber": "118/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 137,
    "name": "Owlbear Cub",
    "supertype": "Creature",
    "types": ["Forest"],
    "level": 3,
    "hp": 2000,
    "rarity": "Common",
    "images": {"small": "CardImages/Creatures/Forest/BabyRedcap1"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Youthful Wisdom",
        "trigger": "OnSummon",
        "effectText": "When this Creature is summoned onto the field of play, draw two cards from the top of your Deck.",
        "usableFromBench": false,
        "prerequisites": [],
        "structuredEffects": [
          {
            "type": "DrawCards",
            "category": "CardManipulation",
            "target": "PlayerSelf",
            "amount": 2
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Riddle",
        "cost": [{"PowerType": "Forest", "count": 1}],
        "damage": null,
        "effectText": "Roll the main dice. If the result is even, your opponent's Creature cannot attack or use abilites next turn. If odd, inflict +1000 damage to your opponent's Creature.",
        "structuredEffects": [
          {
            "type": "ConditionalEffect",
            "condition": {"type": "DiceRoll", "comparison": "IsEven"},
            "trueEffects": [{"type": "ApplyStatus", "target": "OpponentCreatureActive", "status": "AbilityLock", "effectDetail": "CannotAttackOrUseAbilitiesNextTurn"}],
            "falseEffects": [{"type": "DealDamage", "target": "OpponentCreatureActive", "amount": 1000}]
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Fire", "multiplier": 1}],
    "resistances": [{"PowerType": "Water", "reduction": 500}],
    "retreatCost": [{"PowerType": "Forest", "count": 1}],
    "convertedRetreatCost": 1,
    "collectionNumber": "053/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 138,
    "name": "Plantling",
    "supertype": "Creature",
    "types": ["Forest"],
    "level": 4,
    "hp": 2000,
    "rarity": "Uncommon",
    "images": {"small": "CardImages/Creatures/Forest/Plantling1"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Photosynthesizing",
        "trigger": "StartOfTurnWhileActive",
        "effectText": "At the start of each turn When this Creature is in the field of play, Plantling gains +1000 HP.",
        "usableFromBench": false,
        "prerequisites": [],
        "structuredEffects": [
          {
            "type": "ModifyHP",
            "category": "Healing",
            "target": "Self",
            "amount": 1000
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Vine Growth",
        "cost": [{"PowerType": "Forest", "count": 1}],
        "damage": null,
        "effectText": "Search you Deck for any Secret Card. Show your opponent and place it into your Hand.",
        "structuredEffects": [
          {
            "type": "SearchDeck",
            "category": "CardManipulation",
            "target": "PlayerSelf",
            "searchCriteria": {"cardSuperType": "Secret"},
            "amount": 1,
            "action": "AddToHandAndShow"
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Fire", "multiplier": 1}],
    "resistances": [{"PowerType": "Water", "reduction": 500}],
    "retreatCost": [{"PowerType": "Forest", "count": 1}],
    "convertedRetreatCost": 1,
    "collectionNumber": "107/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 139,
    "name": "Sapling",
    "supertype": "Creature",
    "types": ["Forest"],
    "level": 1,
    "hp": 500,
    "rarity": "Common",
    "images": {"small": "CardImages/Creatures/Forest/Sapling1"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Photosynthesis",
        "trigger": "StartOfTurnWhileActive",
        "effectText": "At the start of each turn When this Creature is in the field of play, Sapling gains +500 HP.",
        "usableFromBench": false,
        "prerequisites": [],
        "structuredEffects": [
          {
            "type": "ModifyHP",
            "category": "Healing",
            "target": "Self",
            "amount": 500
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Vine Sprout",
        "cost": [{"PowerType": "Forest", "count": 1}],
        "damage": null,
        "effectText": "Search you Deck for any Power Card. Show your opponent and place it into your Hand.",
        "structuredEffects": [
          {
            "type": "SearchDeck",
            "category": "CardManipulation",
            "target": "PlayerSelf",
            "searchCriteria": {"cardSuperType": "Power", "anyType": true},
            "amount": 1,
            "action": "AddToHandAndShow"
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Fire", "multiplier": 1}],
    "resistances": [{"PowerType": "Water", "reduction": 500}],
    "retreatCost": [{"PowerType": "Forest", "count": 1}],
    "convertedRetreatCost": 1,
    "collectionNumber": "009/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 140,
    "name": "Tenebris",
    "supertype": "Creature",
    "types": ["Forest"],
    "level": 9,
    "hp": 7500,
    "rarity": "Rare",
    "images": {"small": "CardImages/Creatures/Forest/Tenebris1"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Stealthy Strike",
        "cost": [{"PowerType": "Forest", "count": 2}],
        "damage": 5500,
        "effectText": null,
        "structuredEffects": []
      },
      {
        "name": "Haunted Path",
        "cost": [{"PowerType": "Forest", "count": 2}, {"PowerType": "Dark", "count": 1}],
        "damage": 6000,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Fire", "multiplier": 2}],
    "resistances": [{"PowerType": "Water", "reduction": 2000}],
    "retreatCost": [{"PowerType": "Forest", "count": 2}],
    "convertedRetreatCost": 2,
    "collectionNumber": "063/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 141,
    "name": "Tenebris",
    "supertype": "Creature",
    "types": ["Forest"],
    "level": 9,
    "hp": 7500,
    "rarity": "HiddenRare",
    "images": {"small": "CardImages/Creatures/Forest/Tenebris2"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Stealthy Strike",
        "cost": [{"PowerType": "Forest", "count": 2}],
        "damage": 5500,
        "effectText": null,
        "structuredEffects": []
      },
      {
        "name": "Haunted Path",
        "cost": [{"PowerType": "Forest", "count": 2}, {"PowerType": "Dark", "count": 1}],
        "damage": 6000,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Fire", "multiplier": 2}],
    "resistances": [{"PowerType": "Water", "reduction": 2000}],
    "retreatCost": [{"PowerType": "Forest", "count": 2}],
    "convertedRetreatCost": 2,
    "collectionNumber": "327/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 142,
    "name": "Tenebris",
    "supertype": "Creature",
    "types": ["Forest"],
    "level": 9,
    "hp": 7500,
    "rarity": "Borderless",
    "images": {"small": "CardImages/Creatures/Forest/Tenebris3"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Stealthy Strike",
        "cost": [{"PowerType": "Forest", "count": 2}],
        "damage": 5500,
        "effectText": null,
        "structuredEffects": []
      },
      {
        "name": "Haunted Path",
        "cost": [{"PowerType": "Forest", "count": 2}, {"PowerType": "Dark", "count": 1}],
        "damage": 6000,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Fire", "multiplier": 2}],
    "resistances": [{"PowerType": "Water", "reduction": 2000}],
    "retreatCost": [{"PowerType": "Forest", "count": 2}],
    "convertedRetreatCost": 2,
    "collectionNumber": "327/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 143,
    "name": "Thwomp",
    "supertype": "Creature",
    "types": ["Forest"],
    "level": 4,
    "hp": 3000,
    "rarity": "Uncommon",
    "images": {"small": "CardImages/Creatures/Forest/Thwomp1"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Sneak Attack",
        "cost": [{"PowerType": "Forest", "count": 1}],
        "damage": 2000,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Fire", "multiplier": 1}],
    "resistances": [{"PowerType": "Water", "reduction": 500}],
    "retreatCost": [{"PowerType": "Forest", "count": 1}],
    "convertedRetreatCost": 1,
    "collectionNumber": "091/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 144,
    "name": "Titan of Nura",
    "supertype": "Creature",
    "types": ["Forest"],
    "level": 9,
    "hp": 7500,
    "rarity": "Rare",
    "images": {"small": "CardImages/Creatures/Forest/TitanofLostForest1"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Unstoppable Force",
        "trigger": "OnOpponentCreatureDestroyedByThis",
        "effectText": "When this Creature destroys on of your opponent's Creatures. Increase Titan of Nura's base attack by +1500.",
        "usableFromBench": false,
        "prerequisites": [],
        "structuredEffects": [
          {
            "type": "ModifyStats",
            "target": "Self",
            "statToModify": "Attack",
            "amount": 1500,
            "duration": -1
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Fury of the Forest",
        "cost": [{"PowerType": "Forest", "count": 3}],
        "damage": 6000,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Dark", "multiplier": 2}],
    "resistances": [{"PowerType": "Wind", "reduction": 2000}],
    "retreatCost": [{"PowerType": "Forest", "count": 3}],
    "convertedRetreatCost": 3,
    "collectionNumber": "083/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 145,
    "name": "Titan of Nura",
    "supertype": "Creature",
    "types": ["Forest"],
    "level": 9,
    "hp": 7500,
    "rarity": "HiddenRare",
    "images": {"small": "CardImages/Creatures/Forest/TitanofLostForest2"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Unstoppable Force",
        "trigger": "OnOpponentCreatureDestroyedByThis",
        "effectText": "When this Creature destroys on of your opponent's Creatures. Increase Titan of Nura's base attack by +1500.",
        "usableFromBench": false,
        "prerequisites": [],
        "structuredEffects": [
          {
            "type": "ModifyStats",
            "target": "Self",
            "statToModify": "Attack",
            "amount": 1500,
            "duration": -1
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Fury of the Forest",
        "cost": [{"PowerType": "Forest", "count": 3}],
        "damage": 6000,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Dark", "multiplier": 2}],
    "resistances": [{"PowerType": "Wind", "reduction": 2000}],
    "retreatCost": [{"PowerType": "Forest", "count": 3}],
    "convertedRetreatCost": 3,
    "collectionNumber": "331/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 146,
    "name": "Titan of Nura",
    "supertype": "Creature",
    "types": ["Forest"],
    "level": 9,
    "hp": 7500,
    "rarity": "Borderless",
    "images": {"small": "CardImages/Creatures/Forest/TitanofLostForest3"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Unstoppable Force",
        "trigger": "OnOpponentCreatureDestroyedByThis",
        "effectText": "When this Creature destroys on of your opponent's Creatures. Increase Titan of Nura's base attack by +1500.",
        "usableFromBench": false,
        "prerequisites": [],
        "structuredEffects": [
          {
            "type": "ModifyStats",
            "target": "Self",
            "statToModify": "Attack",
            "amount": 1500,
            "duration": -1
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Fury of the Forest",
        "cost": [{"PowerType": "Forest", "count": 3}],
        "damage": 6000,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Dark", "multiplier": 2}],
    "resistances": [{"PowerType": "Wind", "reduction": 2000}],
    "retreatCost": [{"PowerType": "Forest", "count": 3}],
    "convertedRetreatCost": 3,
    "collectionNumber": "331/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 147,
    "name": "Tsiatko",
    "supertype": "Creature",
    "types": ["Forest"],
    "level": 2,
    "hp": 1500,
    "rarity": "Common",
    "images": {"small": "CardImages/Creatures/Forest/Tsiatko1"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Stone Throw",
        "cost": [{"PowerType": "Forest", "count": 1}, {"PowerType": "Earth", "count": 1}],
        "damage": 1000,
        "effectText": "Flip the main coin. If the result is heads, your opponent's Creature is Confused.",
        "structuredEffects": [
          {
            "type": "ConditionalEffect",
            "category": "Debuff",
            "condition": {"type": "CoinFlip", "comparison": "EqualTo", "stringValue": "Heads"},
            "trueEffects": [{"type": "ApplyStatus", "target": "OpponentCreatureActive", "status": "Confused"}],
            "falseEffects": []
          }
        ]
      },
      {
        "name": "Ground and Pound",
        "cost": [{"PowerType": "Forest", "count": 1}],
        "damage": 2000,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Dark", "multiplier": 1}],
    "resistances": [{"PowerType": "Wind", "reduction": 500}],
    "retreatCost": [{"PowerType": "Forest", "count": 1}],
    "convertedRetreatCost": 1,
    "collectionNumber": "130/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 148,
    "name": "Tyrax",
    "supertype": "Creature",
    "types": ["Forest"],
    "level": 8,
    "hp": 6000,
    "rarity": "Rare",
    "images": {"small": "CardImages/Creatures/Forest/Tyrax1"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Bone Crush",
        "cost": [{"PowerType": "Forest", "count": 2}],
        "damage": 4000,
        "effectText": null,
        "structuredEffects": []
      },
      {
        "name": "Jurassic Strike",
        "cost": [{"PowerType": "Forest", "count": 3}],
        "damage": 5000,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Fire", "multiplier": 2}],
    "resistances": [{"PowerType": "Water", "reduction": 1500}],
    "retreatCost": [{"PowerType": "Forest", "count": 2}],
    "convertedRetreatCost": 2,
    "collectionNumber": "022/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 149,
    "name": "Viarose",
    "supertype": "Creature",
    "types": ["Forest"],
    "level": 5,
    "hp": 4500,
    "rarity": "Uncommon",
    "images": {"small": "CardImages/Creatures/Forest/Viarose1"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Petal Slam",
        "cost": [{"PowerType": "Forest", "count": 1}],
        "damage": 2000,
        "effectText": null,
        "structuredEffects": []
      },
      {
        "name": "Petal Rush",
        "cost": [{"PowerType": "Forest", "count": 2}],
        "damage": 3500,
        "effectText": "Flip the main coin. If the result is heads, your opponent's Creature is Poisoned. If tails, your opponent's Creature is Paralyzed.",
        "structuredEffects": [
          {
            "type": "ConditionalEffect",
            "category": "Debuff",
            "condition": {"type": "CoinFlip", "comparison": "EqualTo", "stringValue": "Heads"},
            "trueEffects": [{"type": "ApplyStatus", "target": "OpponentCreatureActive", "status": "Poisoned"}],
            "falseEffects": [{"type": "ApplyStatus", "target": "OpponentCreatureActive", "status": "Paralyzed"}]
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Fire", "multiplier": 2}],
    "resistances": [{"PowerType": "Water", "reduction": 500}],
    "retreatCost": [{"PowerType": "Forest", "count": 1}],
    "convertedRetreatCost": 1,
    "collectionNumber": "079/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 150,
    "name": "Viarose",
    "supertype": "Creature",
    "types": ["Forest"],
    "level": 5,
    "hp": 4500,
    "rarity": "HiddenRare",
    "images": {"small": "CardImages/Creatures/Forest/Viarose2"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Petal Slam",
        "cost": [{"PowerType": "Forest", "count": 1}],
        "damage": 2000,
        "effectText": null,
        "structuredEffects": []
      },
      {
        "name": "Petal Rush",
        "cost": [{"PowerType": "Forest", "count": 2}],
        "damage": 3500,
        "effectText": "Flip the main coin. If the result is heads, your opponent's Creature is Poisoned. If tails, your opponent's Creature is Paralyzed.",
        "structuredEffects": [
          {
            "type": "ConditionalEffect",
            "category": "Debuff",
            "condition": {"type": "CoinFlip", "comparison": "EqualTo", "stringValue": "Heads"},
            "trueEffects": [{"type": "ApplyStatus", "target": "OpponentCreatureActive", "status": "Poisoned"}],
            "falseEffects": [{"type": "ApplyStatus", "target": "OpponentCreatureActive", "status": "Paralyzed"}]
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Fire", "multiplier": 2}],
    "resistances": [{"PowerType": "Water", "reduction": 500}],
    "retreatCost": [{"PowerType": "Forest", "count": 1}],
    "convertedRetreatCost": 1,
    "collectionNumber": "340/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 151,
    "name": "Viarose",
    "supertype": "Creature",
    "types": ["Forest"],
    "level": 5,
    "hp": 4500,
    "rarity": "Borderless",
    "images": {"small": "CardImages/Creatures/Forest/Viarose3"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Petal Slam",
        "cost": [{"PowerType": "Forest", "count": 1}],
        "damage": 2000,
        "effectText": null,
        "structuredEffects": []
      },
      {
        "name": "Petal Rush",
        "cost": [{"PowerType": "Forest", "count": 2}],
        "damage": 3500,
        "effectText": "Flip the main coin. If the result is heads, your opponent's Creature is Poisoned. If tails, your opponent's Creature is Paralyzed.",
        "structuredEffects": [
          {
            "type": "ConditionalEffect",
            "category": "Debuff",
            "condition": {"type": "CoinFlip", "comparison": "EqualTo", "stringValue": "Heads"},
            "trueEffects": [{"type": "ApplyStatus", "target": "OpponentCreatureActive", "status": "Poisoned"}],
            "falseEffects": [{"type": "ApplyStatus", "target": "OpponentCreatureActive", "status": "Paralyzed"}]
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Fire", "multiplier": 2}],
    "resistances": [{"PowerType": "Water", "reduction": 500}],
    "retreatCost": [{"PowerType": "Forest", "count": 1}],
    "convertedRetreatCost": 1,
    "collectionNumber": "340/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 152,
    "name": "Zyra",
    "supertype": "Creature",
    "types": ["Forest"],
    "level": 2,
    "hp": 1500,
    "rarity": "Common",
    "images": {"small": "CardImages/Creatures/Forest/Zyra1"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Pollenate",
        "cost": [{"PowerType": "Forest", "count": 1}],
        "damage": null,
        "effectText": "Draw one card from the top of your Deck.",
        "structuredEffects": [
          {
            "type": "DrawCards",
            "category": "CardManipulation",
            "target": "PlayerSelf",
            "amount": 1
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Fire", "multiplier": 1}],
    "resistances": [{"PowerType": "Water", "reduction": 500}],
    "retreatCost": [{"PowerType": "Forest", "count": 1}],
    "convertedRetreatCost": 1,
    "collectionNumber": "015/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 153,
    "name": "Amaterasu",
    "supertype": "Creature",
    "types": ["Light"],
    "level": 9,
    "hp": 7000,
    "rarity": "Rare",
    "images": {"small": "CardImages/Creatures/Light/Amaterasu1"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Sunburst",
        "cost": [{"PowerType": "Light", "count": 3}],
        "damage": 4500,
        "effectText": null,
        "structuredEffects": []
      },
      {
        "name": "Heavenly Blade",
        "cost": [{"PowerType": "Light", "count": 2}],
        "damage": 5500,
        "effectText": "Roll the main dice. If the result is a 1, 3, or 6 return any three cards from your Discard Pile back to your Deck, shuffling your Deck after.",
        "structuredEffects": [
          {
            "type": "ConditionalEffect",
            "condition": {"type": "DiceRoll", "comparison": "ValueIn", "values": [1,3,6]},
            "trueEffects": [{
              "type": "ReturnCardsFromDiscardToDeck",
              "target": "PlayerSelf",
              "amount": 3,
              "stringParam": "Any"
            }],
            "falseEffects": []
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Dark", "multiplier": 2}],
    "resistances": [{"PowerType": "Wind", "reduction": 2000}],
    "retreatCost": [{"PowerType": "Light", "count": 3}],
    "convertedRetreatCost": 3,
    "collectionNumber": "075/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 154,
    "name": "Amaterasu",
    "supertype": "Creature",
    "types": ["Light"],
    "level": 9,
    "hp": 7000,
    "rarity": "HiddenRare",
    "images": {"small": "CardImages/Creatures/Light/Amaterasu2"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Sunburst",
        "cost": [{"PowerType": "Light", "count": 3}],
        "damage": 4500,
        "effectText": null,
        "structuredEffects": []
      },
      {
        "name": "Heavenly Blade",
        "cost": [{"PowerType": "Light", "count": 2}],
        "damage": 5500,
        "effectText": "Roll the main dice. If the result is a 1, 3, or 6 return any three cards from your Discard Pile back to your Deck, shuffling your Deck after.",
        "structuredEffects": [
          {
            "type": "ConditionalEffect",
            "condition": {"type": "DiceRoll", "comparison": "ValueIn", "values": [1,3,6]},
            "trueEffects": [{
              "type": "ReturnCardsFromDiscardToDeck",
              "target": "PlayerSelf",
              "amount": 3,
              "stringParam": "Any"
            }],
            "falseEffects": []
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Dark", "multiplier": 2}],
    "resistances": [{"PowerType": "Wind", "reduction": 2000}],
    "retreatCost": [{"PowerType": "Light", "count": 3}],
    "convertedRetreatCost": 3,
    "collectionNumber": "345/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 155,
    "name": "Amaterasu",
    "supertype": "Creature",
    "types": ["Light"],
    "level": 9,
    "hp": 7000,
    "rarity": "Borderless",
    "images": {"small": "CardImages/Creatures/Light/Amaterasu3"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Sunburst",
        "cost": [{"PowerType": "Light", "count": 3}],
        "damage": 4500,
        "effectText": null,
        "structuredEffects": []
      },
      {
        "name": "Heavenly Blade",
        "cost": [{"PowerType": "Light", "count": 2}],
        "damage": 5500,
        "effectText": "Roll the main dice. If the result is a 1, 3, or 6 return any three cards from your Discard Pile back to your Deck, shuffling your Deck after.",
        "structuredEffects": [
          {
            "type": "ConditionalEffect",
            "condition": {"type": "DiceRoll", "comparison": "ValueIn", "values": [1,3,6]},
            "trueEffects": [{
              "type": "ReturnCardsFromDiscardToDeck",
              "target": "PlayerSelf",
              "amount": 3,
              "stringParam": "Any"
            }],
            "falseEffects": []
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Dark", "multiplier": 2}],
    "resistances": [{"PowerType": "Wind", "reduction": 2000}],
    "retreatCost": [{"PowerType": "Light", "count": 3}],
    "convertedRetreatCost": 3,
    "collectionNumber": "345/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 156,
    "name": "Asti-ni",
    "supertype": "Creature",
    "types": ["Light"],
    "level": 4,
    "hp": 3500,
    "rarity": "Uncommon",
    "images": {"small": "CardImages/Creatures/Light/Asti-ni1"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Aurora",
        "cost": [{"PowerType": "Light", "count": 1}],
        "damage": 1500,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Dark", "multiplier": 2}],
    "resistances": [{"PowerType": "Wind", "reduction": 500}],
    "retreatCost": [{"PowerType": "Light", "count": 1}],
    "convertedRetreatCost": 1,
    "collectionNumber": "050/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 157,
    "name": "Astraea",
    "supertype": "Creature",
    "types": ["Light"],
    "level": 10,
    "hp": 8500,
    "rarity": "HiddenRare",
    "images": {"small": "CardImages/Creatures/Light/Astraea2"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Fairy Light",
        "trigger": "Passive",
        "effectText": "Astraea can only be summoned by sacrificing any level 8 or higher Light or Wind type Creature. Astraea gains +500 attack for every Wind type Creature in your Discard Pile.",
        "usableFromBench": false,
        "prerequisites": [{"type": "SacrificeCreature", "criteria": {"minLevel": 8, "types": ["Light", "Wind"]}}],
        "structuredEffects": [
          {
            "type": "ModifyStats",
            "category": "StatBoost",
            "target": "Self",
            "modification": {
              "stat": "Attack",
              "amountPerCondition": 500,
              "condition": {"type": "CountCreaturesInDiscard", "powerType": "Wind"}
            }
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Flutter Wing",
        "cost": [{"PowerType": "Light", "count": 2}, {"PowerType": "Wind", "count": 2}],
        "damage": 4500,
        "effectText": "Flip the main coin. If the result is heads, inflict +500 damage to each of your opponent's Creatures on the Bench.",
        "structuredEffects": [
          {
            "type": "ConditionalEffect",
            "condition": {"type": "CoinFlip", "comparison": "EqualTo", "stringValue": "Heads"},
            "trueEffects": [{"type": "DealDamageToAll", "target": "OpponentBench", "amount": 500}],
            "falseEffects": []
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Forest", "multiplier": 3}],
    "resistances": [],
    "retreatCost": [],
    "convertedRetreatCost": 0,
    "collectionNumber": "376/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 158,
    "name": "Astraea",
    "supertype": "Creature",
    "types": ["Light"],
    "level": 10,
    "hp": 8500,
    "rarity": "Borderless",
    "images": {"small": "CardImages/Creatures/Light/Astraea3"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Fairy Light",
        "trigger": "Passive",
        "effectText": "Astraea can only be summoned by sacrificing any level 8 or higher Light or Wind type Creature. Astraea gains +500 attack for every Wind type Creature in your Discard Pile.",
        "usableFromBench": false,
        "prerequisites": [{"type": "SacrificeCreature", "criteria": {"minLevel": 8, "types": ["Light", "Wind"]}}],
        "structuredEffects": [
          {
            "type": "ModifyStats",
            "category": "StatBoost",
            "target": "Self",
            "modification": {
              "stat": "Attack",
              "amountPerCondition": 500,
              "condition": {"type": "CountCreaturesInDiscard", "powerType": "Wind"}
            }
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Flutter Wing",
        "cost": [{"PowerType": "Light", "count": 2}, {"PowerType": "Wind", "count": 2}],
        "damage": 4500,
        "effectText": "Flip the main coin. If the result is heads, inflict +500 damage to each of your opponent's Creatures on the Bench.",
        "structuredEffects": [
          {
            "type": "ConditionalEffect",
            "condition": {"type": "CoinFlip", "comparison": "EqualTo", "stringValue": "Heads"},
            "trueEffects": [{"type": "DealDamageToAll", "target": "OpponentBench", "amount": 500}],
            "falseEffects": []
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Forest", "multiplier": 3}],
    "resistances": [],
    "retreatCost": [],
    "convertedRetreatCost": 0,
    "collectionNumber": "376/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 159,
    "name": "Aurora, the Paladin",
    "supertype": "Creature",
    "types": ["Light"],
    "level": 10,
    "hp": 7500,
    "rarity": "HiddenRare",
    "images": {"small": "CardImages/Creatures/Light/AurorathePaladin2"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Light the Fuse",
        "trigger": "Passive",
        "effectText": "Aurora, the Paladin can only be summoned by sacrificing any level 8 or higher Light or Fire type Creature. For every Fire and Light type Creature on your Bench, add +500 Hp to Aurora, the Paladin.",
        "usableFromBench": false,
        "prerequisites": [{"type": "SacrificeCreature", "criteria": {"minLevel": 8, "types": ["Light", "Fire"]}}],
        "structuredEffects": [
          {
            "type": "ModifyStats",
            "category": "StatBoost",
            "target": "Self",
            "modification": {
              "stat": "HP",
              "amountPerCondition": 500,
              "condition": {"type": "CountCreaturesOnBench", "types": ["Fire", "Light"]}
            }
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Impact Burst",
        "cost": [{"PowerType": "Light", "count": 2}, {"PowerType": "Fire", "count": 2}],
        "damage": 6500,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Water", "multiplier": 3}],
    "resistances": [],
    "retreatCost": [],
    "convertedRetreatCost": 0,
    "collectionNumber": "375/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 160,
    "name": "Aurora, the Paladin",
    "supertype": "Creature",
    "types": ["Light"],
    "level": 10,
    "hp": 7500,
    "rarity": "Borderless",
    "images": {"small": "CardImages/Creatures/Light/AurorathePaladin3"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Light the Fuse",
        "trigger": "Passive",
        "effectText": "Aurora, the Paladin can only be summoned by sacrificing any level 8 or higher Light or Fire type Creature. For every Fire and Light type Creature on your Bench, add +500 Hp to Aurora, the Paladin.",
        "usableFromBench": false,
        "prerequisites": [{"type": "SacrificeCreature", "criteria": {"minLevel": 8, "types": ["Light", "Fire"]}}],
        "structuredEffects": [
          {
            "type": "ModifyStats",
            "category": "StatBoost",
            "target": "Self",
            "modification": {
              "stat": "HP",
              "amountPerCondition": 500,
              "condition": {"type": "CountCreaturesOnBench", "types": ["Fire", "Light"]}
            }
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Impact Burst",
        "cost": [{"PowerType": "Light", "count": 2}, {"PowerType": "Fire", "count": 2}],
        "damage": 6500,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Water", "multiplier": 3}],
    "resistances": [],
    "retreatCost": [],
    "convertedRetreatCost": 0,
    "collectionNumber": "375/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 161,
    "name": "Bonewraith",
    "supertype": "Creature",
    "types": ["Light"],
    "level": 3,
    "hp": 2000,
    "rarity": "Common",
    "images": {"small": "CardImages/Creatures/Light/Shellaser1"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Gnarled Slash",
        "cost": [{"PowerType": "Light", "count": 1}],
        "damage": 1000,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Dark", "multiplier": 1}],
    "resistances": [{"PowerType": "Wind", "reduction": 500}],
    "retreatCost": [{"PowerType": "Light", "count": 1}],
    "convertedRetreatCost": 1,
    "collectionNumber": "133/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 162,
    "name": "Corbin, the Wise",
    "supertype": "Creature",
    "types": ["Light"],
    "level": 6,
    "hp": 5000,
    "rarity": "Uncommon",
    "images": {"small": "CardImages/Creatures/Light/SoltheEnlightened1"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Illumination",
        "trigger": "OnSummon",
        "effectText": "When this Creature is summoned onto the Bench. Return any two Power cards from your Discard Pile back to your Hand.",
        "usableFromBench": true,
        "prerequisites": [],
        "structuredEffects": [
          {
            "type": "ReturnCardsFromDiscardToHand",
            "target": "PlayerSelf",
            "amount": 2,
            "cardCriteria": {"cardSuperType": "Power", "anyType": true}
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Radiant Light",
        "cost": [{"PowerType": "Light", "count": 2}],
        "damage": 3000,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Dark", "multiplier": 2}],
    "resistances": [{"PowerType": "Wind", "reduction": 1000}],
    "retreatCost": [{"PowerType": "Light", "count": 2}],
    "convertedRetreatCost": 2,
    "collectionNumber": "066/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 163,
    "name": "Divinatria",
    "supertype": "Creature",
    "types": ["Light"],
    "level": 9,
    "hp": 7500,
    "rarity": "Rare",
    "images": {"small": "CardImages/Creatures/Light/Divinatria1"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Divinity",
        "cost": [{"PowerType": "Light", "count": 3}],
        "damage": 4500,
        "effectText": null,
        "structuredEffects": []
      },
      {
        "name": "Holy Light",
        "cost": [{"PowerType": "Light", "count": 2}],
        "damage": null,
        "effectText": "Flip the main coin a total of three times. For each heads flipped, this attack does an additonal +3000 damage to your opponent's Creature.",
        "structuredEffects": [
          {
            "type": "DamageModifierBasedOnCoinFlips",
            "numCoins": 3,
            "bonusPerHead": 3000,
            "target": "OpponentCreatureActive"
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Dark", "multiplier": 2}],
    "resistances": [{"PowerType": "Wind", "reduction": 1500}],
    "retreatCost": [{"PowerType": "Light", "count": 2}],
    "convertedRetreatCost": 2,
    "collectionNumber": "152/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 164,
    "name": "Divinatria",
    "supertype": "Creature",
    "types": ["Light"],
    "level": 9,
    "hp": 7500,
    "rarity": "HiddenRare",
    "images": {"small": "CardImages/Creatures/Light/Divinatria2"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Divinity",
        "cost": [{"PowerType": "Light", "count": 3}],
        "damage": 4500,
        "effectText": null,
        "structuredEffects": []
      },
      {
        "name": "Holy Light",
        "cost": [{"PowerType": "Light", "count": 2}],
        "damage": null,
        "effectText": "Flip the main coin a total of three times. For each heads flipped, this attack does an additonal +3000 damage to your opponent's Creature.",
        "structuredEffects": [
          {
            "type": "DamageModifierBasedOnCoinFlips",
            "numCoins": 3,
            "bonusPerHead": 3000,
            "target": "OpponentCreatureActive"
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Dark", "multiplier": 2}],
    "resistances": [{"PowerType": "Wind", "reduction": 1500}],
    "retreatCost": [{"PowerType": "Light", "count": 2}],
    "convertedRetreatCost": 2,
    "collectionNumber": "333/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 165,
    "name": "Divinatria",
    "supertype": "Creature",
    "types": ["Light"],
    "level": 9,
    "hp": 7500,
    "rarity": "Borderless",
    "images": {"small": "CardImages/Creatures/Light/Divinatria3"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Divinity",
        "cost": [{"PowerType": "Light", "count": 3}],
        "damage": 4500,
        "effectText": null,
        "structuredEffects": []
      },
      {
        "name": "Holy Light",
        "cost": [{"PowerType": "Light", "count": 2}],
        "damage": null,
        "effectText": "Flip the main coin a total of three times. For each heads flipped, this attack does an additonal +3000 damage to your opponent's Creature.",
        "structuredEffects": [
          {
            "type": "DamageModifierBasedOnCoinFlips",
            "numCoins": 3,
            "bonusPerHead": 3000,
            "target": "OpponentCreatureActive"
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Dark", "multiplier": 2}],
    "resistances": [{"PowerType": "Wind", "reduction": 1500}],
    "retreatCost": [{"PowerType": "Light", "count": 2}],
    "convertedRetreatCost": 2,
    "collectionNumber": "333/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 166,
    "name": "Djinn",
    "supertype": "Creature",
    "types": ["Light"],
    "level": 7,
    "hp": 6000,
    "rarity": "Rare",
    "images": {"small": "CardImages/Creatures/Light/Djinn1"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Divine Blast",
        "cost": [{"PowerType": "Light", "count": 1}, {"PowerType": "Dark", "count": 1}],
        "damage": 3500,
        "effectText": null,
        "structuredEffects": []
      },
      {
        "name": "Divine Shield",
        "cost": [{"PowerType": "Light", "count": 2}],
        "damage": null,
        "effectText": "This Creature takes no damage from your opponent's Creature's next attack. (you cannot use this move twice in a row)",
        "structuredEffects": [
          {
            "type": "BlockAttack",
            "target": "Self",
            "amount": 99999,
            "duration": 1
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Forest", "multiplier": 2}],
    "resistances": [{"PowerType": "Earth", "reduction": 1000}],
    "retreatCost": [{"PowerType": "Light", "count": 2}],
    "convertedRetreatCost": 2,
    "collectionNumber": "144/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 167,
    "name": "Eclipse",
    "supertype": "Creature",
    "types": ["Light"],
    "level": 8,
    "hp": 7000,
    "rarity": "Rare",
    "images": {"small": "CardImages/Creatures/Light/Eclipse1"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Day and Night",
        "trigger": "PassiveWhileActive",
        "effectText": "If both Sunstrike and Luminite are on your Bench. Boost this Creature's HP and attack by +2000.",
        "usableFromBench": false,
        "prerequisites": [],
        "structuredEffects": [
          {
            "type": "ConditionalStatBoost",
            "target": "Self",
            "condition": {
              "type": "And",
              "conditions": [
                {"type": "SpecificCreatureOnBench", "stringParam": "Sunstrike"},
                {"type": "SpecificCreatureOnBench", "stringParam": "Luminite"}
              ]
            },
            "boosts": [
              {"stat": "HP", "amount": 2000},
              {"stat": "Attack", "amount": 2000}
            ]
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Cosmic Chaos",
        "cost": [{"PowerType": "Light", "count": 2}, {"PowerType": "Dark", "count": 1}],
        "damage": 3500,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Forest", "multiplier": 2}],
    "resistances": [{"PowerType": "Earth", "reduction": 1500}],
    "retreatCost": [{"PowerType": "Light", "count": 3}],
    "convertedRetreatCost": 3,
    "collectionNumber": "139/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 168,
    "name": "Eclipse",
    "supertype": "Creature",
    "types": ["Light"],
    "level": 8,
    "hp": 7000,
    "rarity": "HiddenRare",
    "images": {"small": "CardImages/Creatures/Light/Eclipse2"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Day and Night",
        "trigger": "PassiveWhileActive",
        "effectText": "If both Sunstrike and Luminite are on your Bench. Boost this Creature's HP and attack by +2000.",
        "usableFromBench": false,
        "prerequisites": [],
        "structuredEffects": [
          {
            "type": "ConditionalStatBoost",
            "target": "Self",
            "condition": {
              "type": "And",
              "conditions": [
                {"type": "SpecificCreatureOnBench", "stringParam": "Sunstrike"},
                {"type": "SpecificCreatureOnBench", "stringParam": "Luminite"}
              ]
            },
            "boosts": [
              {"stat": "HP", "amount": 2000},
              {"stat": "Attack", "amount": 2000}
            ]
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Cosmic Chaos",
        "cost": [{"PowerType": "Light", "count": 2}, {"PowerType": "Dark", "count": 1}],
        "damage": 3500,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Forest", "multiplier": 2}],
    "resistances": [{"PowerType": "Earth", "reduction": 1500}],
    "retreatCost": [{"PowerType": "Light", "count": 3}],
    "convertedRetreatCost": 3,
    "collectionNumber": "342/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 169,
    "name": "Eclipse",
    "supertype": "Creature",
    "types": ["Light"],
    "level": 8,
    "hp": 7000,
    "rarity": "Borderless",
    "images": {"small": "CardImages/Creatures/Light/Eclipse3"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Day and Night",
        "trigger": "PassiveWhileActive",
        "effectText": "If both Sunstrike and Luminite are on your Bench. Boost this Creature's HP and attack by +2000.",
        "usableFromBench": false,
        "prerequisites": [],
        "structuredEffects": [
          {
            "type": "ConditionalStatBoost",
            "target": "Self",
            "condition": {
              "type": "And",
              "conditions": [
                {"type": "SpecificCreatureOnBench", "stringParam": "Sunstrike"},
                {"type": "SpecificCreatureOnBench", "stringParam": "Luminite"}
              ]
            },
            "boosts": [
              {"stat": "HP", "amount": 2000},
              {"stat": "Attack", "amount": 2000}
            ]
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Cosmic Chaos",
        "cost": [{"PowerType": "Light", "count": 2}, {"PowerType": "Dark", "count": 1}],
        "damage": 3500,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Forest", "multiplier": 2}],
    "resistances": [{"PowerType": "Earth", "reduction": 1500}],
    "retreatCost": [{"PowerType": "Light", "count": 3}],
    "convertedRetreatCost": 3,
    "collectionNumber": "342/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 170,
    "name": "Foton",
    "supertype": "Creature",
    "types": ["Light"],
    "level": 2,
    "hp": 2000,
    "rarity": "Common",
    "images": {"small": "CardImages/Creatures/Light/Foton1"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Photon Cannon",
        "cost": [{"PowerType": "Light", "count": 1}],
        "damage": 1000,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Dark", "multiplier": 1}],
    "resistances": [{"PowerType": "Wind", "reduction": 500}],
    "retreatCost": [{"PowerType": "Light", "count": 1}],
    "convertedRetreatCost": 1,
    "collectionNumber": "039/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 171,
    "name": "Glitter Pixie",
    "supertype": "Creature",
    "types": ["Light"],
    "level": 2,
    "hp": 1500,
    "rarity": "Common",
    "images": {"small": "CardImages/Creatures/Light/GlitterPixie1"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Glitterdust",
        "cost": [{"PowerType": "Light", "count": 1}],
        "damage": 1000,
        "effectText": "Flip the main coin. If the result is tails, your opponent's Creature is Confused.",
        "structuredEffects": [
          {
            "type": "ConditionalEffect",
            "category": "Debuff",
            "condition": {"type": "CoinFlip", "comparison": "EqualTo", "stringValue": "Tails"},
            "trueEffects": [{"type": "ApplyStatus", "target": "OpponentCreatureActive", "status": "Confused"}],
            "falseEffects": []
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Dark", "multiplier": 1}],
    "resistances": [{"PowerType": "Wind", "reduction": 500}],
    "retreatCost": [{"PowerType": "Light", "count": 1}],
    "convertedRetreatCost": 1,
    "collectionNumber": "142/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 172,
    "name": "Infinity Apprentice",
    "supertype": "Creature",
    "types": ["Light"],
    "level": 8,
    "hp": 6500,
    "rarity": "Rare",
    "images": {"small": "CardImages/Creatures/Light/InfinityApprentice1"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Time Shift",
        "cost": [{"PowerType": "Light", "count": 2}],
        "damage": null,
        "effectText": "Flip the main coin. If heads, return two Secret cards from your Discard Pile back to your Hand. If tails, your opponent returns two Secret cards from their Discard Pile to their Hand. (you cannot use this move twice in a row)",
        "structuredEffects": [
          {
            "type": "ConditionalEffect",
            "condition": {"type": "CoinFlip", "comparison": "EqualTo", "stringValue": "Heads"},
            "trueEffects": [{"type": "ReturnCardsFromDiscardToHand", "target": "PlayerSelf", "amount": 2, "cardCriteria": {"cardSuperType": "Secret"}, "usageRestriction": "CannotBeUsedTwiceInARow"}],
            "falseEffects": [{"type": "ReturnCardsFromDiscardToHand", "target": "PlayerOpponent", "amount": 2, "cardCriteria": {"cardSuperType": "Secret"}, "usageRestriction": "CannotBeUsedTwiceInARow"}]
          }
        ]
      },
      {
        "name": "Magical Burst",
        "cost": [{"PowerType": "Light", "count": 3}],
        "damage": 4500,
        "effectText": "Flip the main coin. If the result is heads, increase Infinity Apprentice's health by +500 HP.",
        "structuredEffects": [
          {
            "type": "ConditionalEffect",
            "category": "Healing",
            "condition": {"type": "CoinFlip", "comparison": "EqualTo", "stringValue": "Heads"},
            "trueEffects": [{"type": "ModifyHP", "target": "Self", "amount": 500}],
            "falseEffects": []
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Dark", "multiplier": 2}],
    "resistances": [{"PowerType": "Wind", "reduction": 1500}],
    "retreatCost": [{"PowerType": "Light", "count": 3}],
    "convertedRetreatCost": 3,
    "collectionNumber": "150/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 173,
    "name": "Infinity Apprentice",
    "supertype": "Creature",
    "types": ["Light"],
    "level": 8,
    "hp": 6500,
    "rarity": "HiddenRare",
    "images": {"small": "CardImages/Creatures/Light/InfinityApprentice2"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Time Shift",
        "cost": [{"PowerType": "Light", "count": 2}],
        "damage": null,
        "effectText": "main coin. If heads, return two Secret cards from your Discard Pile back to your Hand. If tails, your opponent returns two Secret cards from their Discard Pile to their Hand. (you cannot use this move twice i",
        "structuredEffects": [
           {
            "type": "ConditionalEffect",
            "condition": {"type": "CoinFlip", "comparison": "EqualTo", "stringValue": "Heads"},
            "trueEffects": [{"type": "ReturnCardsFromDiscardToHand", "target": "PlayerSelf", "amount": 2, "cardCriteria": {"cardSuperType": "Secret"}, "usageRestriction": "CannotBeUsedTwiceInARow"}],
            "falseEffects": [{"type": "ReturnCardsFromDiscardToHand", "target": "PlayerOpponent", "amount": 2, "cardCriteria": {"cardSuperType": "Secret"}, "usageRestriction": "CannotBeUsedTwiceInARow"}]
          }
        ]
      },
      {
        "name": "Magical Burst",
        "cost": [{"PowerType": "Light", "count": 3}],
        "damage": 4500,
        "effectText": "Flip the main coin. If the result is heads, increase Infinity Apprentice's health by +500 HP.",
        "structuredEffects": [
          {
            "type": "ConditionalEffect",
            "category": "Healing",
            "condition": {"type": "CoinFlip", "comparison": "EqualTo", "stringValue": "Heads"},
            "trueEffects": [{"type": "ModifyHP", "target": "Self", "amount": 500}],
            "falseEffects": []
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Dark", "multiplier": 2}],
    "resistances": [{"PowerType": "Wind", "reduction": 1500}],
    "retreatCost": [{"PowerType": "Light", "count": 3}],
    "convertedRetreatCost": 3,
    "collectionNumber": "354/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 174,
    "name": "Infinity Apprentice",
    "supertype": "Creature",
    "types": ["Light"],
    "level": 8,
    "hp": 6500,
    "rarity": "Borderless",
    "images": {"small": "CardImages/Creatures/Light/InfinityApprentice3"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Time Shift",
        "cost": [{"PowerType": "Light", "count": 2}],
        "damage": null,
        "effectText": "Flip the main coin. If heads, return two Secret cards from your Discard Pile back to your Hand. If tails, your opponent returns two Secret cards from their Discard Pile to their Hand. (you cannot use this move twice in a",
        "structuredEffects": [
           {
            "type": "ConditionalEffect",
            "condition": {"type": "CoinFlip", "comparison": "EqualTo", "stringValue": "Heads"},
            "trueEffects": [{"type": "ReturnCardsFromDiscardToHand", "target": "PlayerSelf", "amount": 2, "cardCriteria": {"cardSuperType": "Secret"}, "usageRestriction": "CannotBeUsedTwiceInARow"}],
            "falseEffects": [{"type": "ReturnCardsFromDiscardToHand", "target": "PlayerOpponent", "amount": 2, "cardCriteria": {"cardSuperType": "Secret"}, "usageRestriction": "CannotBeUsedTwiceInARow"}]
          }
        ]
      },
      {
        "name": "Magical Burst",
        "cost": [{"PowerType": "Light", "count": 3}],
        "damage": 4500,
        "effectText": "Flip the main coin. If the result is heads, increase Infinity Apprentice's health by +500 HP.",
        "structuredEffects": [
          {
            "type": "ConditionalEffect",
            "category": "Healing",
            "condition": {"type": "CoinFlip", "comparison": "EqualTo", "stringValue": "Heads"},
            "trueEffects": [{"type": "ModifyHP", "target": "Self", "amount": 500}],
            "falseEffects": []
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Dark", "multiplier": 2}],
    "resistances": [{"PowerType": "Wind", "reduction": 1500}],
    "retreatCost": [{"PowerType": "Light", "count": 3}],
    "convertedRetreatCost": 3,
    "collectionNumber": "354/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 175,
    "name": "Infinity Mage",
    "supertype": "Creature",
    "types": ["Light"],
    "level": 10,
    "hp": 8500,
    "rarity": "UltraRare",
    "images": {"small": "CardImages/Creatures/Light/InfinityMage1"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Elapsed Time",
        "trigger": "Passive",
        "effectText": "This Creature can only be summoned by sacrificing Infinity Apprentice. Infinity Mage gains +1000 attack for each Light Power card in your Discard Pile.",
        "usableFromBench": false,
        "prerequisites": [{"type": "SacrificeSpecificCreature", "creatureName": "Infinity Apprentice"}],
        "structuredEffects": [
          {
            "type": "ModifyStats",
            "category": "StatBoost",
            "target": "Self",
            "modification": {
              "stat": "Attack",
              "amountPerCondition": 1000,
              "condition": {"type": "CountCardsInDiscard", "cardType": "Power", "powerType": "Light"}
            }
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Purified Magik",
        "cost": [{"PowerType": "Light", "count": 4}],
        "damage": null,
        "effectText": "Roll the main dice. If the result is odd, draw three cards from the top of their Deck. If even, you opponent draws three cards from the top of their Deck.",
        "structuredEffects": [
          {
            "type": "ConditionalEffect",
            "category": "CardManipulation",
            "condition": {"type": "DiceRoll", "comparison": "IsOdd"},
            "trueEffects": [{"type": "DrawCards", "target": "PlayerSelf", "amount": 3}],
            "falseEffects": [{"type": "DrawCards", "target": "PlayerOpponent", "amount": 3}]
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Dark", "multiplier": 3}],
    "resistances": [],
    "retreatCost": [],
    "convertedRetreatCost": 0,
    "collectionNumber": "158/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 176,
    "name": "Infinity Mage",
    "supertype": "Creature",
    "types": ["Light"],
    "level": 10,
    "hp": 8500,
    "rarity": "HiddenRare",
    "images": {"small": "CardImages/Creatures/Light/InfinityMage2"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Elapsed Time",
        "trigger": "Passive",
        "effectText": "This Creature can only be summoned by sacrificing Infinity Apprentice. Infinity Mage gains +1000 attack for each Light Power card in your Discard Pile.",
        "usableFromBench": false,
        "prerequisites": [{"type": "SacrificeSpecificCreature", "creatureName": "Infinity Apprentice"}],
        "structuredEffects": [
          {
            "type": "ModifyStats",
            "category": "StatBoost",
            "target": "Self",
            "modification": {
              "stat": "Attack",
              "amountPerCondition": 1000,
              "condition": {"type": "CountCardsInDiscard", "cardType": "Power", "powerType": "Light"}
            }
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Purified Magik",
        "cost": [{"PowerType": "Light", "count": 4}],
        "damage": null,
        "effectText": "Roll the main dice. If the result is odd, draw three cards from the top of your Deck. If even, you opponent draws three cards from the top of their Deck.",
        "structuredEffects": [
          {
            "type": "ConditionalEffect",
            "category": "CardManipulation",
            "condition": {"type": "DiceRoll", "comparison": "IsOdd"},
            "trueEffects": [{"type": "DrawCards", "target": "PlayerSelf", "amount": 3}],
            "falseEffects": [{"type": "DrawCards", "target": "PlayerOpponent", "amount": 3}]
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Dark", "multiplier": 3}],
    "resistances": [],
    "retreatCost": [],
    "convertedRetreatCost": 0,
    "collectionNumber": "362/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 177,
    "name": "Infinity Mage",
    "supertype": "Creature",
    "types": ["Light"],
    "level": 10,
    "hp": 8500,
    "rarity": "Borderless",
    "images": {"small": "CardImages/Creatures/Light/InfinityMage3"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Elapsed Time",
        "trigger": "Passive",
        "effectText": "This Creature can only be summoned by sacrificing Infinity Apprentice. Infinity Mage gains +1000 attack for each Light Power card in your Discard Pile.",
        "usableFromBench": false,
        "prerequisites": [{"type": "SacrificeSpecificCreature", "creatureName": "Infinity Apprentice"}],
        "structuredEffects": [
          {
            "type": "ModifyStats",
            "category": "StatBoost",
            "target": "Self",
            "modification": {
              "stat": "Attack",
              "amountPerCondition": 1000,
              "condition": {"type": "CountCardsInDiscard", "cardType": "Power", "powerType": "Light"}
            }
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Purified Magik",
        "cost": [{"PowerType": "Light", "count": 4}],
        "damage": null,
        "effectText": "Roll the main dice. If the result is odd, draw three cards from the top of your Deck. If even, you opponent draws three cards from the top of their Deck.",
        "structuredEffects": [
          {
            "type": "ConditionalEffect",
            "category": "CardManipulation",
            "condition": {"type": "DiceRoll", "comparison": "IsOdd"},
            "trueEffects": [{"type": "DrawCards", "target": "PlayerSelf", "amount": 3}],
            "falseEffects": [{"type": "DrawCards", "target": "PlayerOpponent", "amount": 3}]
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Dark", "multiplier": 3}],
    "resistances": [],
    "retreatCost": [],
    "convertedRetreatCost": 0,
    "collectionNumber": "362/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 178,
    "name": "Luminite",
    "supertype": "Creature",
    "types": ["Light"],
    "level": 3,
    "hp": 1500,
    "rarity": "Common",
    "images": {"small": "CardImages/Creatures/Light/Luminite1"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Luminate",
        "trigger": "OnSummon",
        "effectText": "When this Creature is summoned onto the Bench. Search your Deck for one Light Power card, show your opponent and place it in your Hand.",
        "usableFromBench": true,
        "prerequisites": [],
        "structuredEffects": [
          {
            "type": "SearchDeck",
            "category": "CardManipulation",
            "target": "PlayerSelf",
            "searchCriteria": {"cardType": "Power", "powerType": "Light"},
            "amount": 1,
            "action": "AddToHandAndShow"
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Moonbeam",
        "cost": [{"PowerType": "Light", "count": 1}],
        "damage": 1000,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Forest", "multiplier": 1}],
    "resistances": [{"PowerType": "Earth", "reduction": 500}],
    "retreatCost": [{"PowerType": "Light", "count": 1}],
    "convertedRetreatCost": 1,
    "collectionNumber": "087/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 179,
    "name": "Luminous Wisp",
    "supertype": "Creature",
    "types": ["Light"],
    "level": 1,
    "hp": 1000,
    "rarity": "Common",
    "images": {"small": "CardImages/Creatures/Light/LuminousWisp1"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Flash",
        "cost": [{"PowerType": "Light", "count": 1}],
        "damage": null,
        "effectText": "Draw one card from the top of your Deck.",
        "structuredEffects": [
          {
            "type": "DrawCards",
            "category": "CardManipulation",
            "target": "PlayerSelf",
            "amount": 1
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Dark", "multiplier": 1}],
    "resistances": [{"PowerType": "Wind", "reduction": 500}],
    "retreatCost": [{"PowerType": "Light", "count": 1}],
    "convertedRetreatCost": 1,
    "collectionNumber": "027/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 180,
    "name": "Majestic Unicorn",
    "supertype": "Creature",
    "types": ["Light"],
    "level": 5,
    "hp": 4500,
    "rarity": "Uncommon",
    "images": {"small": "CardImages/Creatures/Light/MajesticUnicorn1"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Celestial Charge",
        "cost": [{"PowerType": "Light", "count": 1}],
        "damage": 2000,
        "effectText": null,
        "structuredEffects": []
      },
      {
        "name": "Rainbow Beam",
        "cost": [{"PowerType": "Light", "count": 1}],
        "damage": 3000,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Dark", "multiplier": 2}],
    "resistances": [{"PowerType": "Wind", "reduction": 500}],
    "retreatCost": [{"PowerType": "Light", "count": 1}],
    "convertedRetreatCost": 1,
    "collectionNumber": "069/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 181,
    "name": "Malum, the Damned",
    "supertype": "Creature",
    "types": ["Light"],
    "level": 10,
    "hp": null,
    "rarity": "UltraRare",
    "images": {"small": "CardImages/Creatures/Light/MalumtheDamned1"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "End of Days",
        "trigger": "Passive",
        "effectText": "This Creature can only be summoned by playing Ritual of the Damned. Malum, the Damned gains +1000 HP and +1000 attack for every Power card in your Discard Pile. x2 cards count as one. ( this Creature can use any Power cards)",
        "usableFromBench": false,
        "prerequisites": [{"type": "PlaySpecificCard", "cardName": "Ritual of the Damned"}],
        "structuredEffects": [
          {
            "type": "ModifyStatsBasedOnDiscard",
            "target": "Self",
            "stat": "HP",
            "amountPerCondition": 1000,
            "condition": {"type": "CountCardsInDiscard", "cardType": "Power", "anyType": true},
            "countAs": 0.5
          },
          {
            "type": "ModifyStatsBasedOnDiscard",
            "target": "Self",
            "stat": "Attack",
            "amountPerCondition": 1000,
            "condition": {"type": "CountCardsInDiscard", "cardType": "Power", "anyType": true},
            "countAs": 0.5
          }
        ],
        "canUseAnyPower": true
      }
    ],
    "attacks": [
      {
        "name": "Obliterate",
        "cost": [{"PowerType": "ANY", "count": 4}],
        "damage": null,
        "effectText": "If this attack destroys your opponent's Creature, draw one additional Prize Card.",
        "structuredEffects": [
          {
            "type": "ConditionalEffect",
            "condition": {"type": "TargetDestroyedByAttack"},
            "trueEffects": [{"type": "TakePrizeCard", "target": "PlayerSelf", "amount": 1}],
            "falseEffects": []
          }
        ]
      }
    ],
    "weaknesses": [],
    "resistances": [],
    "retreatCost": [],
    "convertedRetreatCost": 0,
    "collectionNumber": "172/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 182,
    "name": "Malum, the Damned",
    "supertype": "Creature",
    "types": ["Light"],
    "level": 10,
    "hp": null,
    "rarity": "HiddenRare",
    "images": {"small": "CardImages/Creatures/Light/MalumtheDamned2"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "End of Days",
        "trigger": "Passive",
        "effectText": "This Creature can only be summoned by playing Ritual of the Damned. Malum, the Damned gains +1000 HP and +1000 attack for every Power card in your Discard Pile. x2 cards count as one. ( this Creature can use any Power cards)",
        "usableFromBench": false,
        "prerequisites": [{"type": "PlaySpecificCard", "cardName": "Ritual of the Damned"}],
        "structuredEffects": [
          {
            "type": "ModifyStatsBasedOnDiscard",
            "target": "Self",
            "stat": "HP",
            "amountPerCondition": 1000,
            "condition": {"type": "CountCardsInDiscard", "cardType": "Power", "anyType": true},
            "countAs": 0.5
          },
          {
            "type": "ModifyStatsBasedOnDiscard",
            "target": "Self",
            "stat": "Attack",
            "amountPerCondition": 1000,
            "condition": {"type": "CountCardsInDiscard", "cardType": "Power", "anyType": true},
            "countAs": 0.5
          }
        ],
        "canUseAnyPower": true
      }
    ],
    "attacks": [
      {
        "name": "Obliterate",
        "cost": [{"PowerType": "ANY", "count": 4}],
        "damage": null,
        "effectText": "If this attack destroys your opponent's Creature, draw one additional Prize Card.",
        "structuredEffects": [
          {
            "type": "ConditionalEffect",
            "condition": {"type": "TargetDestroyedByAttack"},
            "trueEffects": [{"type": "TakePrizeCard", "target": "PlayerSelf", "amount": 1}],
            "falseEffects": []
          }
        ]
      }
    ],
    "weaknesses": [],
    "resistances": [],
    "retreatCost": [],
    "convertedRetreatCost": 0,
    "collectionNumber": "372/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 183,
    "name": "Malum, the Damned",
    "supertype": "Creature",
    "types": ["Light"],
    "level": 10,
    "hp": null,
    "rarity": "Borderless",
    "images": {"small": "CardImages/Creatures/Light/MalumtheDamned3"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "End of Days",
        "trigger": "Passive",
        "effectText": "This Creature can only be summoned by playing Ritual of the Damned. Malum, the Damned gains +1000 HP and +1000 attack for every Power card in your Discard Pile. x2 cards count as one. ( this Creature can use any Power cards)",
        "usableFromBench": false,
        "prerequisites": [{"type": "PlaySpecificCard", "cardName": "Ritual of the Damned"}],
        "structuredEffects": [
          {
            "type": "ModifyStatsBasedOnDiscard",
            "target": "Self",
            "stat": "HP",
            "amountPerCondition": 1000,
            "condition": {"type": "CountCardsInDiscard", "cardType": "Power", "anyType": true},
            "countAs": 0.5
          },
          {
            "type": "ModifyStatsBasedOnDiscard",
            "target": "Self",
            "stat": "Attack",
            "amountPerCondition": 1000,
            "condition": {"type": "CountCardsInDiscard", "cardType": "Power", "anyType": true},
            "countAs": 0.5
          }
        ],
        "canUseAnyPower": true
      }
    ],
    "attacks": [
      {
        "name": "Obliterate",
        "cost": [{"PowerType": "ANY", "count": 4}],
        "damage": null,
        "effectText": "If this attack destroys your opponent's Creature, draw one additional Prize Card.",
        "structuredEffects": [
          {
            "type": "ConditionalEffect",
            "condition": {"type": "TargetDestroyedByAttack"},
            "trueEffects": [{"type": "TakePrizeCard", "target": "PlayerSelf", "amount": 1}],
            "falseEffects": []
          }
        ]
      }
    ],
    "weaknesses": [],
    "resistances": [],
    "retreatCost": [],
    "convertedRetreatCost": 0,
    "collectionNumber": "372/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 184,
    "name": "Penguilite",
    "supertype": "Creature",
    "types": ["Light"],
    "level": 1,
    "hp": 1000,
    "rarity": "Common",
    "images": {"small": "CardImages/Creatures/Light/Penguilite1"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Purified Light",
        "cost": [{"PowerType": "Light", "count": 1}],
        "damage": null,
        "effectText": "Draw one card from the top of your Deck.",
        "structuredEffects": [
          {
            "type": "DrawCards",
            "category": "CardManipulation",
            "target": "PlayerSelf",
            "amount": 1
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Forest", "multiplier": 1}],
    "resistances": [{"PowerType": "Earth", "reduction": 500}],
    "retreatCost": [{"PowerType": "Light", "count": 1}],
    "convertedRetreatCost": 1,
    "collectionNumber": "081/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 185,
    "name": "Redeemer",
    "supertype": "Creature",
    "types": ["Light"],
    "level": 6,
    "hp": 5000,
    "rarity": "Uncommon",
    "images": {"small": "CardImages/Creatures/Light/Redeemer1"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Angellic Grace",
        "trigger": "OnAttacked",
        "effectText": "When this Creature is attacked, flip the main coin twice. If heads both times, the opponent's Creature does no damage to Redeemer.",
        "usableFromBench": false,
        "prerequisites": [],
        "structuredEffects": [
          {
            "type": "ConditionalEffect",
            "condition": {
              "type": "CoinFlipsAllHeads",
              "amount": 2
            },
            "trueEffects": [{"type": "NegateDamage", "target": "Self"}]
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Heavenly Light",
        "cost": [{"PowerType": "Light", "count": 2}],
        "damage": 3000,
        "effectText": "Heal this Creature and all Creatures on the Bench by +1000 HP. (this move heals a Creatures HP up to its original base value)",
        "structuredEffects": [
          {
            "type": "HealToMax",
            "target": "SelfAndBench",
            "amount": 1000
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Dark", "multiplier": 2}],
    "resistances": [{"PowerType": "Wind", "reduction": 1000}],
    "retreatCost": [{"PowerType": "Light", "count": 1}],
    "convertedRetreatCost": 1,
    "collectionNumber": "128/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 186,
    "name": "Soldier of Jimbora",
    "supertype": "Creature",
    "types": ["Light"],
    "level": 4,
    "hp": 3000,
    "rarity": "Uncommon",
    "images": {"small": "CardImages/Creatures/Light/SoldierofJimbora1"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Flashbang",
        "cost": [{"PowerType": "Light", "count": 1}],
        "damage": 1500,
        "effectText": "Automatically Paralyze your opponent's Creature.",
        "structuredEffects": [
          {
            "type": "ApplyStatus",
            "category": "Debuff",
            "target": "OpponentCreatureActive",
            "status": "Paralyzed"
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Forest", "multiplier": 1}],
    "resistances": [{"PowerType": "Earth", "reduction": 500}],
    "retreatCost": [{"PowerType": "Light", "count": 1}],
    "convertedRetreatCost": 1,
    "collectionNumber": "127/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 187,
    "name": "Sunstrike",
    "supertype": "Creature",
    "types": ["Light"],
    "level": 3,
    "hp": 1500,
    "rarity": "Common",
    "images": {"small": "CardImages/Creatures/Light/Sunstrike1"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Illuminating Skies",
        "trigger": "OnSummon",
        "effectText": "When this Creature is summoned onto the Bench. Draw one card from the top of your Deck.",
        "usableFromBench": true,
        "prerequisites": [],
        "structuredEffects": [
          {
            "type": "DrawCards",
            "category": "CardManipulation",
            "target": "PlayerSelf",
            "amount": 1
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Sunshine",
        "cost": [{"PowerType": "Light", "count": 1}],
        "damage": 1000,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Dark", "multiplier": 1}],
    "resistances": [{"PowerType": "Wind", "reduction": 500}],
    "retreatCost": [{"PowerType": "Light", "count": 1}],
    "convertedRetreatCost": 1,
    "collectionNumber": "014/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 188,
    "name": "Time Weaver",
    "supertype": "Creature",
    "types": ["Light"],
    "level": 5,
    "hp": 5000,
    "rarity": "Uncommon",
    "images": {"small": "CardImages/Creatures/Light/TimeWeaver1"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Time Warp",
        "trigger": "OncePerTurn",
        "effectText": "Once per turn, while Time Weaver is on the Bench or field of play, return one Power card from your discard pile back to your Hand.",
        "usableFromBench": true,
        "prerequisites": [],
        "structuredEffects": [
          {
            "type": "ReturnCardsFromDiscardToHand",
            "target": "PlayerSelf",
            "amount": 1,
            "cardCriteria": {"cardSuperType": "Power", "anyType": true}
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Temporal Rift",
        "cost": [{"PowerType": "Light", "count": 2}],
        "damage": 2500,
        "effectText": "Flip the main coin. If heads, shuffle a card from your Hand back into your Deck and draw a new card from the top of the Deck. If tails, your opponent may do so.",
        "structuredEffects": [
          {
            "type": "ConditionalEffect",
            "condition": {"type": "CoinFlip", "comparison": "EqualTo", "stringValue": "Heads"},
            "trueEffects": [
              {"type": "ShuffleCardFromHandToDeck", "target": "PlayerSelf", "amount": 1, "selection": "PlayerChoiceHand"},
              {"type": "DrawCards", "target": "PlayerSelf", "amount": 1}
            ],
            "falseEffects": [
              {
                "type": "OptionalEffect",
                "target": "PlayerOpponent",
                "stringParam": "Shuffle a card from your Hand and draw a new one?",
                "subEffects": [
                  { "type": "ShuffleCardFromHandToDeck", "amount": 1 },
                  { "type": "DrawCards", "amount": 1 }
                ]
              }
            ]
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Dark", "multiplier": 2}],
    "resistances": [{"PowerType": "Earth", "reduction": 500}],
    "retreatCost": [{"PowerType": "Light", "count": 2}],
    "convertedRetreatCost": 2,
    "collectionNumber": "104/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 189,
    "name": "Yumi",
    "supertype": "Creature",
    "types": ["Light"],
    "level": 7,
    "hp": 6000,
    "rarity": "Rare",
    "images": {"small": "CardImages/Creatures/Light/LightSeeker1"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Dawn's Blessing",
        "trigger": "OnSummon",
        "effectText": "When this Creature is summoned onto the field of play, flip the main coin. If the result is heads, increase Light Seeker's HP by +1500.",
        "usableFromBench": false,
        "prerequisites": [],
        "structuredEffects": [
          {
            "type": "ConditionalEffect",
            "category": "Healing",
            "condition": {"type": "CoinFlip", "comparison": "EqualTo", "stringValue": "Heads"},
            "trueEffects": [{"type": "ModifyHP", "target": "Self", "amount": 1500}], 
            "falseEffects": []
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Dimming Light",
        "cost": [{"PowerType": "Light", "count": 3}],
        "damage": 1500,
        "effectText": "Your opponent's Creature is automatically Confused.",
        "structuredEffects": [
          {
            "type": "ApplyStatus",
            "category": "Debuff",
            "target": "OpponentCreatureActive",
            "status": "Confused"
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Dark", "multiplier": 2}],
    "resistances": [{"PowerType": "Wind", "reduction": 1000}],
    "retreatCost": [{"PowerType": "Light", "count": 2}],
    "convertedRetreatCost": 2,
    "collectionNumber": "101/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 190,
    "name": "Zhànhóu",
    "supertype": "Creature",
    "types": ["Light"],
    "level": 7,
    "hp": 6000,
    "rarity": "Rare",
    "images": {"small": "CardImages/Creatures/Light/Zhànhóu1"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Contender",
        "cost": [{"PowerType": "Light", "count": 2}],
        "damage": null,
        "effectText": "Roll the main dice. If the result is even, return two Light Power cards from your Discard Pile to your Hand. If odd, Paralyze your opponent's Creature. (this move cannot be used twice in a row)",
        "structuredEffects": [
          {
            "type": "ConditionalEffect",
            "condition": {"type": "DiceRoll", "comparison": "IsEven"},
            "trueEffects": [{"type": "ReturnCardsFromDiscardToHand", "target": "PlayerSelf", "amount": 2, "cardCriteria": {"cardType": "Power", "powerType": "Light"}, "usageRestriction": "CannotBeUsedTwiceInARow"}],
            "falseEffects": [{"type": "ApplyStatus", "target": "OpponentCreatureActive", "status": "Paralyzed", "usageRestriction": "CannotBeUsedTwiceInARow"}]
          }
        ]
      },
      {
        "name": "Knockout Blow",
        "cost": [{"PowerType": "Light", "count": 1}],
        "damage": 4500,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Forest", "multiplier": 2}],
    "resistances": [{"PowerType": "Earth", "reduction": 1000}],
    "retreatCost": [{"PowerType": "Light", "count": 2}],
    "convertedRetreatCost": 2,
    "collectionNumber": "131/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 191,
    "name": "Chimera Cub",
    "supertype": "Creature",
    "types": ["Thunder"],
    "level": 2,
    "hp": 2500,
    "rarity": "Common",
    "images": {"small": "CardImages/Creatures/Thunder/ChimeraCub1"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Charge",
        "trigger": "OncePerTurn",
        "effectText": "Once per turn you may activate this ability. If you choose to do so, both you and your opponent draw one card from the top of your Deck.",
        "usableFromBench": false,
        "prerequisites": [],
        "structuredEffects": [
          {
            "type": "OptionalEffect",
            "prompt": "Activate Charge? Both players draw 1 card.",
            "effectIfChosen": [
              {"type": "DrawCards", "target": "PlayerSelf", "amount": 1},
              {"type": "DrawCards", "target": "PlayerOpponent", "amount": 1}
            ]
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Ambition",
        "cost": [{"PowerType": "Thunder", "count": 1}],
        "damage": 2000,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Earth", "multiplier": 1}],
    "resistances": [{"PowerType": "Light", "reduction": 500}],
    "retreatCost": [{"PowerType": "Thunder", "count": 1}],
    "convertedRetreatCost": 1,
    "collectionNumber": "037/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 192,
    "name": "Harpy, Storm Bringer",
    "supertype": "Creature",
    "types": ["Thunder"],
    "level": 7,
    "hp": 6000,
    "rarity": "Rare",
    "images": {"small": "CardImages/Creatures/Thunder/HarpyStormBringer1"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Swooping Shock",
        "trigger": "OnAttackedByOpponentCreature",
        "effectText": "When this Creature is attacked by your opponent's Creature, automatically Paralyze it.",
        "usableFromBench": false,
        "prerequisites": [],
        "structuredEffects": [
          {
            "type": "ApplyStatus",
            "category": "Debuff",
            "target": "AttackingCreature",
            "status": "Paralyzed"
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Lightning Strike",
        "cost": [{"PowerType": "Thunder", "count": 2}],
        "damage": 4000,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Earth", "multiplier": 2}],
    "resistances": [{"PowerType": "Light", "reduction": 1000}],
    "retreatCost": [{"PowerType": "Thunder", "count": 2}],
    "convertedRetreatCost": 2,
    "collectionNumber": "038/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 193,
    "name": "Harpy, Storm Bringer",
    "supertype": "Creature",
    "types": ["Thunder"],
    "level": 7,
    "hp": 6000,
    "rarity": "HiddenRare",
    "images": {"small": "CardImages/Creatures/Thunder/HarpyStormBringer2"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Swooping Shock",
        "trigger": "OnAttackedByOpponentCreature",
        "effectText": "When this Creature is attacked by your opponent's Creature, automatically Paralyze it.",
        "usableFromBench": false,
        "prerequisites": [],
        "structuredEffects": [
          {
            "type": "ApplyStatus",
            "category": "Debuff",
            "target": "AttackingCreature",
            "status": "Paralyzed"
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Lightning Strike",
        "cost": [{"PowerType": "Thunder", "count": 2}],
        "damage": 4000,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Earth", "multiplier": 2}],
    "resistances": [{"PowerType": "Light", "reduction": 1000}],
    "retreatCost": [{"PowerType": "Thunder", "count": 2}],
    "convertedRetreatCost": 2,
    "collectionNumber": "355/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 194,
    "name": "Harpy, Storm Bringer",
    "supertype": "Creature",
    "types": ["Thunder"],
    "level": 7,
    "hp": 6000,
    "rarity": "Borderless",
    "images": {"small": "CardImages/Creatures/Thunder/HarpyStormBringer3"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Swooping Shock",
        "trigger": "OnAttackedByOpponentCreature",
        "effectText": "When this Creature is attacked by your opponent's Creature, automatically Paralyze it.",
        "usableFromBench": false,
        "prerequisites": [],
        "structuredEffects": [
          {
            "type": "ApplyStatus",
            "category": "Debuff",
            "target": "AttackingCreature",
            "status": "Paralyzed"
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Lightning Strike",
        "cost": [{"PowerType": "Thunder", "count": 2}],
        "damage": 4000,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Earth", "multiplier": 2}],
    "resistances": [{"PowerType": "Light", "reduction": 1000}],
    "retreatCost": [{"PowerType": "Thunder", "count": 2}],
    "convertedRetreatCost": 2,
    "collectionNumber": "355/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 195,
    "name": "Iškugriff",
    "supertype": "Creature",
    "types": ["Thunder"],
    "level": 10,
    "hp": 9500,
    "rarity": "UltraRare",
    "images": {"small": "CardImages/Creatures/Thunder/Iškugriff1"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Iškugriff's Blessing",
        "trigger": "OnDestroyedByOpponentCreature",
        "effectText": "To summon, you must play Storm of Reckoning. When Iškugriff is destroyed by your opponent's Creature, add +3000 HP and 1000 attack to your next Creature you summon on the field of play.",
        "usableFromBench": false,
        "prerequisites": [{"type": "PlaySpecificCard", "cardName": "Storm of Reckoning"}],
        "structuredEffects": [
          {
            "type": "BuffNextSummonedCreature",
            "buffs": [
              {"stat": "HP", "amount": 3000},
              {"stat": "Attack", "amount": 1000}
            ]
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Thundering Blitz",
        "cost": [{"PowerType": "Thunder", "count": 4}],
        "damage": 7500,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Earth", "multiplier": 3}],
    "resistances": [],
    "retreatCost": [],
    "convertedRetreatCost": 0,
    "collectionNumber": "167/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 196,
    "name": "Iškugriff",
    "supertype": "Creature",
    "types": ["Thunder"],
    "level": 10,
    "hp": 9500,
    "rarity": "HiddenRare",
    "images": {"small": "CardImages/Creatures/Thunder/Iškugriff2"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Iškugriff's Blessing",
        "trigger": "OnDestroyedByOpponentCreature",
        "effectText": "To summon, you must play Storm of Reckoning. When Iškugriff is destroyed by your opponent's Creature, add +3000 HP and 1000 attack to your next Creature you summon on the field of play.",
        "usableFromBench": false,
        "prerequisites": [{"type": "PlaySpecificCard", "cardName": "Storm of Reckoning"}],
        "structuredEffects": [
          {
            "type": "BuffNextSummonedCreature",
            "buffs": [
              {"stat": "HP", "amount": 3000},
              {"stat": "Attack", "amount": 1000}
            ]
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Thundering Blitz",
        "cost": [{"PowerType": "Thunder", "count": 4}],
        "damage": 7500,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Earth", "multiplier": 3}],
    "resistances": [],
    "retreatCost": [],
    "convertedRetreatCost": 0,
    "collectionNumber": "360/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 197,
    "name": "Iškugriff",
    "supertype": "Creature",
    "types": ["Thunder"],
    "level": 10,
    "hp": 9500,
    "rarity": "Borderless",
    "images": {"small": "CardImages/Creatures/Thunder/Iškugriff3"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Iškugriff's Blessing",
        "trigger": "OnDestroyedByOpponentCreature",
        "effectText": "To summon, you must play Storm of Reckoning. When Iškugriff is destroyed by your opponent's Creature, add +3000 HP and 1000 attack to your next Creature you summon on the field of play.",
        "usableFromBench": false,
        "prerequisites": [{"type": "PlaySpecificCard", "cardName": "Storm of Reckoning"}],
        "structuredEffects": [
          {
            "type": "BuffNextSummonedCreature",
            "buffs": [
              {"stat": "HP", "amount": 3000},
              {"stat": "Attack", "amount": 1000}
            ]
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Thundering Blitz",
        "cost": [{"PowerType": "Thunder", "count": 4}],
        "damage": 7500,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Earth", "multiplier": 3}],
    "resistances": [],
    "retreatCost": [],
    "convertedRetreatCost": 0,
    "collectionNumber": "360/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 198,
    "name": "Lighzard",
    "supertype": "Creature",
    "types": ["Thunder"],
    "level": 5,
    "hp": 4000,
    "rarity": "Uncommon",
    "images": {"small": "CardImages/Creatures/Thunder/Lighzard1"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Tail Shock",
        "cost": [{"PowerType": "Thunder", "count": 1}],
        "damage": 2000,
        "effectText": "Your opponent's Creature is automatically Confused.",
        "structuredEffects": [
          {
            "type": "ApplyStatus",
            "category": "Debuff",
            "target": "OpponentCreatureActive",
            "status": "Confused"
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Light", "multiplier": 2}],
    "resistances": [{"PowerType": "Fire", "reduction": 500}],
    "retreatCost": [{"PowerType": "Thunder", "count": 1}],
    "convertedRetreatCost": 1,
    "collectionNumber": "048/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 199,
    "name": "Ligora, the Chimera",
    "supertype": "Creature",
    "types": ["Thunder"],
    "level": 9,
    "hp": 7500,
    "rarity": "Rare",
    "images": {"small": "CardImages/Creatures/Thunder/TriHeadChimera1"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Triple Threat",
        "trigger": "OnDestroyedByOpponentCreature",
        "effectText": "When this Creature is destroyed by your opponent's Creature, deal +3000 damage back to your opponent's Creature.",
        "usableFromBench": false,
        "prerequisites": [],
        "structuredEffects": [
          {
            "type": "DealDamage",
            "category": "Retaliation",
            "target": "AttackingCreature",
            "amount": 3000
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Tri-Headed Blast",
        "cost": [{"PowerType": "Thunder", "count": 3}],
        "damage": null,
        "effectText": "Roll the main dice. Deal damage equal to the number rolled x1000 to your opponent's Creature.",
        "structuredEffects": [
          {
            "type": "DiceRollDependentDamage",
            "multiplier": 1000,
            "target": "OpponentCreatureActive"
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Earth", "multiplier": 2}],
    "resistances": [{"PowerType": "Light", "reduction": 1500}],
    "retreatCost": [{"PowerType": "Thunder", "count": 3}],
    "convertedRetreatCost": 3,
    "collectionNumber": "134/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 200,
    "name": "Ligora, the Chimera",
    "supertype": "Creature",
    "types": ["Thunder"],
    "level": 9,
    "hp": 7500,
    "rarity": "HiddenRare",
    "images": {"small": "CardImages/Creatures/Thunder/TriHeadChimera2"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Triple Threat",
        "trigger": "OnDestroyedByOpponentCreature",
        "effectText": "When this Creature is destroyed by your opponent's Creature, deal +3000 damage back to your opponent's Creature.",
        "usableFromBench": false,
        "prerequisites": [],
        "structuredEffects": [
          {
            "type": "DealDamage",
            "category": "Retaliation",
            "target": "AttackingCreature",
            "amount": 3000
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Tri-Headed Blast",
        "cost": [{"PowerType": "Thunder", "count": 3}],
        "damage": null,
        "effectText": "Roll the main dice. Deal damage equal to the number rolled x1000 to your opponent's Creature.",
        "structuredEffects": [
          {
            "type": "DiceRollDependentDamage",
            "multiplier": 1000,
            "target": "OpponentCreatureActive"
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Earth", "multiplier": 2}],
    "resistances": [{"PowerType": "Light", "reduction": 1500}],
    "retreatCost": [{"PowerType": "Thunder", "count": 3}],
    "convertedRetreatCost": 3,
    "collectionNumber": "346/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 201,
    "name": "Ligora, the Chimera",
    "supertype": "Creature",
    "types": ["Thunder"],
    "level": 9,
    "hp": 7500,
    "rarity": "Borderless",
    "images": {"small": "CardImages/Creatures/Thunder/TriHeadChimera3"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Triple Threat",
        "trigger": "OnDestroyedByOpponentCreature",
        "effectText": "When this Creature is destroyed by your opponent's Creature, deal +3000 damage back to your opponent's Creature.",
        "usableFromBench": false,
        "prerequisites": [],
        "structuredEffects": [
          {
            "type": "DealDamage",
            "category": "Retaliation",
            "target": "AttackingCreature",
            "amount": 3000
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Tri-Headed Blast",
        "cost": [{"PowerType": "Thunder", "count": 3}],
        "damage": null,
        "effectText": "Roll the main dice. Deal damage equal to the number rolled x1000 to your opponent's Creature.",
        "structuredEffects": [
          {
            "type": "DiceRollDependentDamage",
            "multiplier": 1000,
            "target": "OpponentCreatureActive"
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Earth", "multiplier": 2}],
    "resistances": [{"PowerType": "Light", "reduction": 1500}],
    "retreatCost": [{"PowerType": "Thunder", "count": 3}],
    "convertedRetreatCost": 3,
    "collectionNumber": "346/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 202,
    "name": "Plazmuh",
    "supertype": "Creature",
    "types": ["Thunder"],
    "level": 6,
    "hp": 5000,
    "rarity": "Uncommon",
    "images": {"small": "CardImages/Creatures/Thunder/Plazmuh1"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Plasma Ball",
        "cost": [{"PowerType": "Thunder", "count": 1}],
        "damage": 3500,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Light", "multiplier": 2}],
    "resistances": [{"PowerType": "Fire", "reduction": 1000}],
    "retreatCost": [{"PowerType": "Thunder", "count": 1}],
    "convertedRetreatCost": 1,
    "collectionNumber": "008/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 203,
    "name": "Qilin",
    "supertype": "Creature",
    "types": ["Thunder"],
    "level": 9,
    "hp": 7000,
    "rarity": "Rare",
    "images": {"small": "CardImages/Creatures/Thunder/Qilin1"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Thunderclap",
        "cost": [{"PowerType": "Thunder", "count": 2}],
        "damage": 4500,
        "effectText": null,
        "structuredEffects": []
      },
      {
        "name": "Torrential Storm",
        "cost": [{"PowerType": "Thunder", "count": 3}],
        "damage": 6000,
        "effectText": "Roll the main dice. If you roll a 1 or 6, shuffle your Hand back into your Deck and draw five new cards.",
        "structuredEffects": [
          {
            "type": "ConditionalEffect",
            "condition": {"type": "DiceRoll", "comparison": "ValueIn", "values": [1,6]},
            "trueEffects": [
              {"type": "ShuffleHandToDeck", "target": "PlayerSelf"},
              {"type": "DrawCards", "target": "PlayerSelf", "amount": 5}
            ],
            "falseEffects": []
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Earth", "multiplier": 2}],
    "resistances": [{"PowerType": "Light", "reduction": 2000}],
    "retreatCost": [{"PowerType": "Thunder", "count": 3}],
    "convertedRetreatCost": 3,
    "collectionNumber": "124/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 204,
    "name": "Qilin",
    "supertype": "Creature",
    "types": ["Thunder"],
    "level": 9,
    "hp": 7000,
    "rarity": "HiddenRare",
    "images": {"small": "CardImages/Creatures/Thunder/Qilin2"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Thunderclap",
        "cost": [{"PowerType": "Thunder", "count": 2}],
        "damage": 4500,
        "effectText": null,
        "structuredEffects": []
      },
      {
        "name": "Torrential Storm",
        "cost": [{"PowerType": "Thunder", "count": 3}],
        "damage": 6000,
        "effectText": "Roll the main dice. If you roll a 1 or 6, shuffle your Hand back into your Deck and draw five new cards.",
        "structuredEffects": [
          {
            "type": "ConditionalEffect",
            "condition": {"type": "DiceRoll", "comparison": "ValueIn", "values": [1,6]},
            "trueEffects": [
              {"type": "ShuffleHandToDeck", "target": "PlayerSelf"},
              {"type": "DrawCards", "target": "PlayerSelf", "amount": 5}
            ],
            "falseEffects": []
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Earth", "multiplier": 2}],
    "resistances": [{"PowerType": "Light", "reduction": 2000}],
    "retreatCost": [{"PowerType": "Thunder", "count": 3}],
    "convertedRetreatCost": 3,
    "collectionNumber": "336/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 205,
    "name": "Qilin",
    "supertype": "Creature",
    "types": ["Thunder"],
    "level": 9,
    "hp": 7000,
    "rarity": "Borderless",
    "images": {"small": "CardImages/Creatures/Thunder/Qilin3"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Thunderclap",
        "cost": [{"PowerType": "Thunder", "count": 2}],
        "damage": 4500,
        "effectText": null,
        "structuredEffects": []
      },
      {
        "name": "Torrential Storm",
        "cost": [{"PowerType": "Thunder", "count": 3}],
        "damage": 6000,
        "effectText": "Roll the main dice. If you roll a 1 or 6, shuffle your Hand back into your Deck and draw five new cards.",
        "structuredEffects": [
          {
            "type": "ConditionalEffect",
            "condition": {"type": "DiceRoll", "comparison": "ValueIn", "values": [1,6]},
            "trueEffects": [
              {"type": "ShuffleHandToDeck", "target": "PlayerSelf"},
              {"type": "DrawCards", "target": "PlayerSelf", "amount": 5}
            ],
            "falseEffects": []
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Earth", "multiplier": 2}],
    "resistances": [{"PowerType": "Light", "reduction": 2000}],
    "retreatCost": [{"PowerType": "Thunder", "count": 3}],
    "convertedRetreatCost": 3,
    "collectionNumber": "336/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 206,
    "name": "Raiden",
    "supertype": "Creature",
    "types": ["Thunder"],
    "level": 5,
    "hp": 4500,
    "rarity": "Uncommon",
    "images": {"small": "CardImages/Creatures/Thunder/Raiden1"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Shock Therapy",
        "cost": [{"PowerType": "Thunder", "count": 1}],
        "damage": 2000,
        "effectText": "Flip the main coin. If the result is heads, Paralyze your opponent's Creature.",
        "structuredEffects": [
          {
            "type": "ConditionalEffect",
            "category": "Debuff",
            "condition": {"type": "CoinFlip", "comparison": "EqualTo", "stringValue": "Heads"},
            "trueEffects": [{"type": "ApplyStatus", "target": "OpponentCreatureActive", "status": "Paralyzed"}],
            "falseEffects": []
          }
        ]
      },
      {
        "name": "Lightning Chain",
        "cost": [{"PowerType": "Thunder", "count": 2}],
        "damage": 2500,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Light", "multiplier": 2}],
    "resistances": [{"PowerType": "Fire", "reduction": 500}],
    "retreatCost": [{"PowerType": "Thunder", "count": 1}],
    "convertedRetreatCost": 1,
    "collectionNumber": "024/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 207,
    "name": "Raijū",
    "supertype": "Creature",
    "types": ["Thunder"],
    "level": 4,
    "hp": 2500,
    "rarity": "Uncommon",
    "images": {"small": "CardImages/Creatures/Thunder/Raiju1"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Thundering Roar",
        "cost": [{"PowerType": "Thunder", "count": 1}],
        "damage": 1500,
        "effectText": "Retrieve one Power card from your Discard Pile and attach it to one of your Benched Creatures.",
        "structuredEffects": [
          {
            "type": "RetrieveAndAttachPower",
            "from": "DiscardPile",
            "to": "PlayerBenchChoice",
            "amount": 1,
            "powerCriteria": "Any"
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Earth", "multiplier": 1}],
    "resistances": [{"PowerType": "Light", "reduction": 500}],
    "retreatCost": [{"PowerType": "Thunder", "count": 1}],
    "convertedRetreatCost": 1,
    "collectionNumber": "065/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 208,
    "name": "Resaix",
    "supertype": "Creature",
    "types": ["Thunder"],
    "level": 6,
    "hp": 5000,
    "rarity": "Uncommon",
    "images": {"small": "CardImages/Creatures/Thunder/Resaix1"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Thunderwave",
        "cost": [{"PowerType": "Thunder", "count": 2}],
        "damage": 3000,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Earth", "multiplier": 2}],
    "resistances": [{"PowerType": "Light", "reduction": 1000}],
    "retreatCost": [{"PowerType": "Thunder", "count": 2}],
    "convertedRetreatCost": 2,
    "collectionNumber": "097/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 209,
    "name": "Shock Bug",
    "supertype": "Creature",
    "types": ["Thunder"],
    "level": 3,
    "hp": 2000,
    "rarity": "Common",
    "images": {"small": "CardImages/Creatures/Thunder/ShockBug1"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Static Disharge",
        "trigger": "OnAttacked",
        "effectText": "When this Creature is attacked. Flip the main coin. If the result is heads, deal +500 damage back to your opponent's Creature.",
        "usableFromBench": false,
        "prerequisites": [],
        "structuredEffects": [
          {
            "type": "ConditionalEffect",
            "condition": {"type": "CoinFlip", "comparison": "EqualTo", "stringValue": "Heads"},
            "trueEffects": [{"type": "DealDamage", "category": "Retaliation", "target": "AttackingCreature", "amount": 500}],
            "falseEffects": []
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Electric Sting",
        "cost": [{"PowerType": "Thunder", "count": 1}],
        "damage": 1000,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Earth", "multiplier": 1}],
    "resistances": [{"PowerType": "Light", "reduction": 500}],
    "retreatCost": [{"PowerType": "Thunder", "count": 1}],
    "convertedRetreatCost": 1,
    "collectionNumber": "011/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 210,
    "name": "Shokimono",
    "supertype": "Creature",
    "types": ["Thunder"],
    "level": 1,
    "hp": 1000,
    "rarity": "Common",
    "images": {"small": "CardImages/Creatures/Thunder/Shokimono1"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Biolilluminescence",
        "cost": [{"PowerType": "Thunder", "count": 1}],
        "damage": 500,
        "effectText": "Draw one card from the top of your Deck.",
        "structuredEffects": [
          {
            "type": "DrawCards",
            "category": "CardManipulation",
            "target": "PlayerSelf",
            "amount": 1
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Light", "multiplier": 1}],
    "resistances": [{"PowerType": "Fire", "reduction": 500}],
    "retreatCost": [{"PowerType": "Thunder", "count": 1}],
    "convertedRetreatCost": 1,
    "collectionNumber": "348/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 211,
    "name": "Shokimono",
    "supertype": "Creature",
    "types": ["Thunder"],
    "level": 1,
    "hp": 1000,
    "rarity": "HiddenRare",
    "images": {"small": "CardImages/Creatures/Thunder/Shokimono2"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Biolilluminescence",
        "cost": [{"PowerType": "Thunder", "count": 1}],
        "damage": 500,
        "effectText": "Draw one card from the top of your Deck.",
        "structuredEffects": [
          {
            "type": "DrawCards",
            "category": "CardManipulation",
            "target": "PlayerSelf",
            "amount": 1
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Light", "multiplier": 1}],
    "resistances": [{"PowerType": "Fire", "reduction": 500}],
    "retreatCost": [{"PowerType": "Thunder", "count": 1}],
    "convertedRetreatCost": 1,
    "collectionNumber": "076/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 555,
    "name": "Shokimono",
    "supertype": "Creature",
    "types": ["Thunder"],
    "level": 1,
    "hp": 1000,
    "rarity": "Borderless",
    "images": {"small": "CardImages/Creatures/Thunder/Shokimono3"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Biolilluminescence",
        "cost": [{"PowerType": "Thunder", "count": 1}],
        "damage": 500,
        "effectText": "Draw one card from the top of your Deck.",
        "structuredEffects": [
          {
            "type": "DrawCards",
            "category": "CardManipulation",
            "target": "PlayerSelf",
            "amount": 1
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Light", "multiplier": 1}],
    "resistances": [{"PowerType": "Fire", "reduction": 500}],
    "retreatCost": [{"PowerType": "Thunder", "count": 1}],
    "convertedRetreatCost": 1,
    "collectionNumber": "076/311",
    "illustrator": "Mystik Creatures"
  },  
  {
    "id": 212,
    "name": "Sparxle",
    "supertype": "Creature",
    "types": ["Thunder"],
    "level": 1,
    "hp": 1000,
    "rarity": "Common",
    "images": {"small": "CardImages/Creatures/Thunder/Sparxle1"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Electro Dust",
        "trigger": "OnAttack",
        "effectText": "When attacking with this Creature. Roll the main dice, if the result is even, your opponent's Creature takes an additional +500 damage.",
        "usableFromBench": false,
        "prerequisites": [],
        "structuredEffects": [
          {
            "type": "ConditionalEffect",
            "condition": {"type": "DiceRoll", "comparison": "IsEven"},
            "trueEffects": [{"type": "DealDamage", "target": "OpponentCreatureActive", "amount": 500}],
            "falseEffects": []
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Light Beam",
        "cost": [{"PowerType": "Thunder", "count": 1}],
        "damage": 500,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Earth", "multiplier": 1}],
    "resistances": [{"PowerType": "Light", "reduction": 500}],
    "retreatCost": [{"PowerType": "Thunder", "count": 1}],
    "convertedRetreatCost": 1,
    "collectionNumber": "096/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 213,
    "name": "Stormchaser",
    "supertype": "Creature",
    "types": ["Thunder"],
    "level": 4,
    "hp": 3000,
    "rarity": "Uncommon",
    "images": {"small": "CardImages/Creatures/Thunder/Thunderbirdon1"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Thunderstrike",
        "cost": [{"PowerType": "Thunder", "count": 2}],
        "damage": 1500,
        "effectText": "Remove one Power card from your opponent's Creature.",
        "structuredEffects": [
          {
            "type": "RemovePowerCard",
            "target": "OpponentCreatureActive",
            "amount": 1,
            "criteria": "Any"
          }
        ]
      },
      {
        "name": "Shock Wave",
        "cost": [{"PowerType": "Thunder", "count": 1}],
        "damage": 1000,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Earth", "multiplier": 1}],
    "resistances": [{"PowerType": "Light", "reduction": 1000}],
    "retreatCost": [{"PowerType": "Thunder", "count": 2}],
    "convertedRetreatCost": 2,
    "collectionNumber": "109/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 214,
    "name": "Stormie",
    "supertype": "Creature",
    "types": ["Thunder"],
    "level": 4,
    "hp": 2500,
    "rarity": "Uncommon",
    "images": {"small": "CardImages/Creatures/Thunder/Stormy1"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "In Training",
        "cost": [{"PowerType": "Thunder", "count": 2}],
        "damage": null,
        "effectText": "Roll the main dice. If the result is a 1 or 6, deal +3500 damage to your opponent's Creature. If the result is a 2, 4, or 5 deal +1000 damage to your opponent's Creature.",
        "structuredEffects": [
          {
            "type": "DiceRollBranchingEffect",
            "branches": [
              {"values": [1,6], "effects": [{"type": "DealDamage", "target": "OpponentCreatureActive", "amount": 3500}]},
              {"values": [2,4,5], "effects": [{"type": "DealDamage", "target": "OpponentCreatureActive", "amount": 1000}]}
            ]
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Earth", "multiplier": 1}],
    "resistances": [{"PowerType": "Light", "reduction": 500}],
    "retreatCost": [{"PowerType": "Thunder", "count": 1}],
    "convertedRetreatCost": 1,
    "collectionNumber": "020/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 215,
    "name": "Stormie",
    "supertype": "Creature",
    "types": ["Thunder"],
    "level": 4,
    "hp": 2500,
    "rarity": "HiddenRare",
    "images": {"small": "CardImages/Creatures/Thunder/Stormy2"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "In Training",
        "cost": [{"PowerType": "Thunder", "count": 2}],
        "damage": null,
        "effectText": "Roll the main dice. If the result is a 1 or 6, deal +3500 damage to your opponent's Creature. If the result is a 2, 4, or 5 deal +1000 damage to your opponent's Creature.",
        "structuredEffects": [
          {
            "type": "DiceRollBranchingEffect",
            "branches": [
              {"values": [1,6], "effects": [{"type": "DealDamage", "target": "OpponentCreatureActive", "amount": 3500}]},
              {"values": [2,4,5], "effects": [{"type": "DealDamage", "target": "OpponentCreatureActive", "amount": 1000}]}
            ]
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Earth", "multiplier": 1}],
    "resistances": [{"PowerType": "Light", "reduction": 500}],
    "retreatCost": [{"PowerType": "Thunder", "count": 1}],
    "convertedRetreatCost": 1,
    "collectionNumber": "344/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 216,
    "name": "Stormie",
    "supertype": "Creature",
    "types": ["Thunder"],
    "level": 4,
    "hp": 2500,
    "rarity": "Borderless",
    "images": {"small": "CardImages/Creatures/Thunder/Stormy3"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "In Training",
        "cost": [{"PowerType": "Thunder", "count": 2}],
        "damage": null,
        "effectText": "Roll the main dice. If the result is a 1 or 6, deal +3500 damage to your opponent's Creature. If the result is a 2, 4, or 5 deal +1000 damage to your opponent's Creature.",
        "structuredEffects": [
          {
            "type": "DiceRollBranchingEffect",
            "branches": [
              {"values": [1,6], "effects": [{"type": "DealDamage", "target": "OpponentCreatureActive", "amount": 3500}]},
              {"values": [2,4,5], "effects": [{"type": "DealDamage", "target": "OpponentCreatureActive", "amount": 1000}]}
            ]
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Earth", "multiplier": 1}],
    "resistances": [{"PowerType": "Light", "reduction": 500}],
    "retreatCost": [{"PowerType": "Thunder", "count": 1}],
    "convertedRetreatCost": 1,
    "collectionNumber": "344/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 217,
    "name": "Stormtail",
    "supertype": "Creature",
    "types": ["Thunder"],
    "level": 2,
    "hp": 1500,
    "rarity": "Common",
    "images": {"small": "CardImages/Creatures/Thunder/Stormtail1"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Brewing Storm",
        "cost": [{"PowerType": "Thunder", "count": 1}],
        "damage": 500,
        "effectText": "Roll the main dice. If the result is a 4 or higher, deal +2500 damage to your opponent's Creature. If the result is lower Stormtail is Confused.",
        "structuredEffects": [
          {
            "type": "ConditionalEffect",
            "condition": {"type": "DiceRoll", "comparison": "GreaterThanOrEqualTo", "value": 4},
            "trueEffects": [{"type": "DealDamage", "target": "OpponentCreatureActive", "amount": 2500}],
            "falseEffects": [{"type": "ApplyStatus", "target": "Self", "status": "Confused"}]
          }
        ]
      },
      {
        "name": "Destruction",
        "cost": [{"PowerType": "Thunder", "count": 1}],
        "damage": null,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Earth", "multiplier": 1}],
    "resistances": [{"PowerType": "Light", "reduction": 500}],
    "retreatCost": [{"PowerType": "Thunder", "count": 1}],
    "convertedRetreatCost": 1,
    "collectionNumber": "035/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 218,
    "name": "Tempestas",
    "supertype": "Creature",
    "types": ["Thunder"],
    "level": 10,
    "hp": 8500,
    "rarity": "UltraRare",
    "images": {"small": "CardImages/Creatures/Thunder/Tempestas1"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Procella",
        "trigger": "OnFriendlyCreatureDestroyed",
        "criteria": {"types": ["Thunder", "Dark"], "location": "Field"},
        "effectText": "To summon, when a level 8 or higher Thunder or Dark Creature is destroyed on the field, you may summon Tempestas onto the field of play from your Hand. Tempestas gains +2000 HP upon summoning.",
        "usableFromBench": false,
        "prerequisites": [],
        "structuredEffects": [
           {"type": "SummonSelfFromHand"},
           {"type": "ModifyHP", "target": "Self", "amount": 2000, "category": "Healing"}
        ]
      }
    ],
    "attacks": [
      {
        "name": "Tempestuous Thunderstrike",
        "cost": [{"PowerType": "Thunder", "count": 3}, {"PowerType": "Dark", "count": 1}],
        "damage": 7000,
        "effectText": "Flip the main coin. If the result is tails, you cannot attack next turn.",
        "structuredEffects": [
          {
            "type": "ConditionalEffect",
            "condition": {"type": "CoinFlip", "comparison": "EqualTo", "stringValue": "Tails"},
            "trueEffects": [{"type": "ApplyAttackRestriction", "target": "Self", "restriction": "CannotAttackNextTurn"}],
            "falseEffects": []
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Earth", "multiplier": 3}],
    "resistances": [],
    "retreatCost": [],
    "convertedRetreatCost": 0,
    "collectionNumber": "163/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 219,
    "name": "Tempestas",
    "supertype": "Creature",
    "types": ["Thunder"],
    "level": 10,
    "hp": 8500,
    "rarity": "HiddenRare",
    "images": {"small": "CardImages/Creatures/Thunder/Tempestas2"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Procella",
        "trigger": "OnFriendlyCreatureDestroyed",
        "criteria": {"types": ["Thunder", "Dark"], "location": "Field"},
        "effectText": "To summon, when a level 8 or higher Thunder or Dark Creature is destroyed on the field, you may summon Tempestas onto the field of play from your Hand. Tempestas gains +2000 HP upon summoning.",
        "usableFromBench": false,
        "prerequisites": [],
        "structuredEffects": [
           {"type": "SummonSelfFromHand"},
           {"type": "ModifyHP", "target": "Self", "amount": 2000, "category": "Healing"}
        ]
      }
    ],
    "attacks": [
      {
        "name": "Tempestuous Thunderstrike",
        "cost": [{"PowerType": "Thunder", "count": 3}, {"PowerType": "Dark", "count": 1}],
        "damage": 7000,
        "effectText": "Flip the main coin. If the result is tails, you cannot attack next turn.",
        "structuredEffects": [
          {
            "type": "ConditionalEffect",
            "condition": {"type": "CoinFlip", "comparison": "EqualTo", "stringValue": "Tails"},
            "trueEffects": [{"type": "ApplyAttackRestriction", "target": "Self", "restriction": "CannotAttackNextTurn"}],
            "falseEffects": []
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Earth", "multiplier": 3}],
    "resistances": [],
    "retreatCost": [],
    "convertedRetreatCost": 0,
    "collectionNumber": "365/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 220,
    "name": "Tempestas",
    "supertype": "Creature",
    "types": ["Thunder"],
    "level": 10,
    "hp": 8500,
    "rarity": "Borderless",
    "images": {"small": "CardImages/Creatures/Thunder/Tempestas3"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Procella",
        "trigger": "OnFriendlyCreatureDestroyed",
        "criteria": {"types": ["Thunder", "Dark"], "location": "Field"},
        "effectText": "To summon, when a level 8 or higher Thunder or Dark Creature is destroyed on the field, you may summon Tempestas onto the field of play from your Hand. Tempestas gains +2000 HP upon summoning.",
        "usableFromBench": false,
        "prerequisites": [],
        "structuredEffects": [
           {"type": "SummonSelfFromHand"},
           {"type": "ModifyHP", "target": "Self", "amount": 2000, "category": "Healing"}
        ]
      }
    ],
    "attacks": [
      {
        "name": "Tempestuous Thunderstrike",
        "cost": [{"PowerType": "Thunder", "count": 3}, {"PowerType": "Dark", "count": 1}],
        "damage": 7000,
        "effectText": "Flip the main coin. If the result is tails, you cannot attack next turn.",
        "structuredEffects": [
          {
            "type": "ConditionalEffect",
            "condition": {"type": "CoinFlip", "comparison": "EqualTo", "stringValue": "Tails"},
            "trueEffects": [{"type": "ApplyAttackRestriction", "target": "Self", "restriction": "CannotAttackNextTurn"}],
            "falseEffects": []
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Earth", "multiplier": 3}],
    "resistances": [],
    "retreatCost": [],
    "convertedRetreatCost": 0,
    "collectionNumber": "365/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 221,
    "name": "Thunder Tusk",
    "supertype": "Creature",
    "types": ["Thunder"],
    "level": 3,
    "hp": 3000,
    "rarity": "Common",
    "images": {"small": "CardImages/Creatures/Thunder/ThunderTusk1"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Thunder Rush",
        "cost": [{"PowerType": "Thunder", "count": 1}],
        "damage": 1500,
        "effectText": "Your opponent's Creature is automatically Paralyzed.",
        "structuredEffects": [
          {
            "type": "ApplyStatus",
            "category": "Debuff",
            "target": "OpponentCreatureActive",
            "status": "Paralyzed"
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Earth", "multiplier": 1}],
    "resistances": [{"PowerType": "Light", "reduction": 500}],
    "retreatCost": [{"PowerType": "Thunder", "count": 1}],
    "convertedRetreatCost": 1,
    "collectionNumber": "078/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 222,
    "name": "Tigris",
    "supertype": "Creature",
    "types": ["Thunder"],
    "level": 7,
    "hp": 5500,
    "rarity": "Uncommon",
    "images": {"small": "CardImages/Creatures/Thunder/Tigris1"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Rebirth",
        "trigger": "OnDestroyedByOpponentCreature",
        "effectText": "When this Creature is destroyed by your opponent's Creature. Revive this Creature with +1500 HP and retain all Power cards attached to Tigris.",
        "usableFromBench": false,
        "prerequisites": [],
        "structuredEffects": [
          {
            "type": "ReviveSelf",
            "hpAmount": 1500,
            "retainPowerCards": true
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Thunder Fang",
        "cost": [{"PowerType": "Thunder", "count": 2}],
        "damage": 3500,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Earth", "multiplier": 2}],
    "resistances": [{"PowerType": "Light", "reduction": 1000}],
    "retreatCost": [{"PowerType": "Thunder", "count": 2}],
    "convertedRetreatCost": 2,
    "collectionNumber": "043/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 223,
    "name": "Voltara",
    "supertype": "Creature",
    "types": ["Thunder"],
    "level": 8,
    "hp": 6000,
    "rarity": "Rare",
    "images": {"small": "CardImages/Creatures/Thunder/Voltara1"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Rainy Day",
        "cost": [{"PowerType": "Thunder", "count": 2}],
        "damage": 3000,
        "effectText": null,
        "structuredEffects": []
      },
      {
        "name": "Passion Storm",
        "cost": [{"PowerType": "Thunder", "count": 2}],
        "damage": 4000,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Light", "multiplier": 2}],
    "resistances": [{"PowerType": "Fire", "reduction": 1000}],
    "retreatCost": [{"PowerType": "Thunder", "count": 2}],
    "convertedRetreatCost": 2,
    "collectionNumber": "060/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 224,
    "name": "Wilderfang",
    "supertype": "Creature",
    "types": ["Thunder"],
    "level": 10,
    "hp": 8500,
    "rarity": "HiddenRare",
    "images": {"small": "CardImages/Creatures/Thunder/Wilderfang2"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Forked Fury",
        "trigger": "OnSummon",
        "effectText": "Wilderfang can only be summoned by sacrificing any level 8 or higher Thunder or Forest type Creature. Once summoned, Wilderfang can attack twice by sending one attached Power card to the Discard Pile.",
        "usableFromBench": false,
        "prerequisites": [{"type": "SacrificeCreature", "criteria": {"minLevel": 8, "types": ["Thunder", "Forest"]}}],
        "structuredEffects": [
          {
            "type": "GrantExtraAttackWithCost",
            "target": "Self",
            "amount": 1,
            "cost": {"type": "DiscardAttachedPower", "amount": 1, "criteria": "Any"}
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Branching Bolt",
        "cost": [{"PowerType": "Thunder", "count": 2}, {"PowerType": "Forest", "count": 2}],
        "damage": 4000,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Fire", "multiplier": 3}],
    "resistances": [],
    "retreatCost": [],
    "convertedRetreatCost": 0,
    "collectionNumber": "386/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 225,
    "name": "Wilderfang",
    "supertype": "Creature",
    "types": ["Thunder"],
    "level": 10,
    "hp": 8500,
    "rarity": "Borderless",
    "images": {"small": "CardImages/Creatures/Thunder/Wilderfang3"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Forked Fury",
        "trigger": "OnSummon",
        "effectText": "Wilderfang can only be summoned by sacrificing any level 8 or higher Thunder or Forest type Creature. Once summoned, Wilderfang can attack twice by sending one attached Power card to the Discard Pile.",
        "usableFromBench": false,
        "prerequisites": [{"type": "SacrificeCreature", "criteria": {"minLevel": 8, "types": ["Thunder", "Forest"]}}],
        "structuredEffects": [
          {
            "type": "GrantExtraAttackWithCost",
            "target": "Self",
            "amount": 1,
            "cost": {"type": "DiscardAttachedPower", "amount": 1, "criteria": "Any"}
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Branching Bolt",
        "cost": [{"PowerType": "Thunder", "count": 2}, {"PowerType": "Forest", "count": 2}],
        "damage": 4000,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Fire", "multiplier": 3}],
    "resistances": [],
    "retreatCost": [],
    "convertedRetreatCost": 0,
    "collectionNumber": "386/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 226,
    "name": "Wolfdrake",
    "supertype": "Creature",
    "types": ["Thunder"],
    "level": 10,
    "hp": 8000,
    "rarity": "HiddenRare",
    "images": {"small": "CardImages/Creatures/Thunder/Wolfdrake2"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Stormscale Assault",
        "trigger": "OnAttackedByOpponentCreature",
        "effectText": "Wolfdrake can only be summoned by sacrificing any level 8 or higher Thunder or Wind type Creature. When Wolfdrake is attacked by your opponent's Creature, inflict +2000 damage back to your opponent's Creature.",
        "usableFromBench": false,
        "prerequisites": [{"type": "SacrificeCreature", "criteria": {"minLevel": 8, "types": ["Thunder", "Wind"]}}],
        "structuredEffects": [
          {
            "type": "DealDamage",
            "category": "Retaliation",
            "target": "AttackingCreature",
            "amount": 2000
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Gale Fang Barrage",
        "cost": [{"PowerType": "Thunder", "count": 2}, {"PowerType": "Wind", "count": 2}],
        "damage": 6000,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Forest", "multiplier": 3}],
    "resistances": [],
    "retreatCost": [],
    "convertedRetreatCost": 0,
    "collectionNumber": "385/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 227,
    "name": "Wolfdrake",
    "supertype": "Creature",
    "types": ["Thunder"],
    "level": 10,
    "hp": 8000,
    "rarity": "Borderless",
    "images": {"small": "CardImages/Creatures/Thunder/Wolfdrake3"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Stormscale Assault",
        "trigger": "OnAttackedByOpponentCreature",
        "effectText": "Wolfdrake can only be summoned by sacrificing any level 8 or higher Thunder or Wind type Creature. When Wolfdrake is attacked by your opponent's Creature, inflict +2000 damage back to your opponent's Creature.",
        "usableFromBench": false,
        "prerequisites": [{"type": "SacrificeCreature", "criteria": {"minLevel": 8, "types": ["Thunder", "Wind"]}}],
        "structuredEffects": [
          {
            "type": "DealDamage",
            "category": "Retaliation",
            "target": "AttackingCreature",
            "amount": 2000
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Gale Fang Barrage",
        "cost": [{"PowerType": "Thunder", "count": 2}, {"PowerType": "Wind", "count": 2}],
        "damage": 6000,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Forest", "multiplier": 3}],
    "resistances": [],
    "retreatCost": [],
    "convertedRetreatCost": 0,
    "collectionNumber": "385/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 228,
    "name": "Zamus",
    "supertype": "Creature",
    "types": ["Thunder"],
    "level": 8,
    "hp": 6000,
    "rarity": "Rare",
    "images": {"small": "CardImages/Creatures/Thunder/Zamus1"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Lightning Storm",
        "cost": [{"PowerType": "Thunder", "count": 2}],
        "damage": 3500,
        "effectText": "Automatically Paralyze your opponent's Creature.",
        "structuredEffects": [
          {
            "type": "ApplyStatus",
            "category": "Debuff",
            "target": "OpponentCreatureActive",
            "status": "Paralyzed"
          }
        ]
      },
      {
        "name": "Thunderous Pulse",
        "cost": [{"PowerType": "Thunder", "count": 3}],
        "damage": 4500,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Light", "multiplier": 2}],
    "resistances": [{"PowerType": "Fire", "reduction": 1500}],
    "retreatCost": [{"PowerType": "Thunder", "count": 3}],
    "convertedRetreatCost": 3,
    "collectionNumber": "025/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 229,
    "name": "Aqua Imp",
    "supertype": "Creature",
    "types": ["Water"],
    "level": 3,
    "hp": 2000,
    "rarity": "Common",
    "images": {"small": "CardImages/Creatures/Water/AquaImp1"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Splash",
        "cost": [{"PowerType": "Water", "count": 1}],
        "damage": 1000,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Thunder", "multiplier": 1}],
    "resistances": [{"PowerType": "Forest", "reduction": 500}],
    "retreatCost": [{"PowerType": "Water", "count": 1}],
    "convertedRetreatCost": 1,
    "collectionNumber": "013/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 230,
    "name": "Aspidochelone",
    "supertype": "Creature",
    "types": ["Water"],
    "level": 8,
    "hp": 6500,
    "rarity": "Rare",
    "images": {"small": "CardImages/Creatures/Water/Aspidochelone-1"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Moving Island",
        "trigger": "OnSummon",
        "effectText": "When summoned onto the field of play. Search your Deck for any three cards. Show your opponent and place them into your Hand.",
        "usableFromBench": false,
        "prerequisites": [],
        "structuredEffects": [
          {
            "type": "SearchDeck",
            "category": "CardManipulation",
            "target": "PlayerSelf",
            "searchCriteria": {"anyCard": true},
            "amount": 3,
            "action": "AddToHandAndShow"
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Provoked Wrath",
        "cost": [{"PowerType": "Water", "count": 2}, {"PowerType": "Earth", "count": 1}],
        "damage": 5500,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Thunder", "multiplier": 2}],
    "resistances": [{"PowerType": "Forest", "reduction": 1500}],
    "retreatCost": [{"PowerType": "Water", "count": 2}],
    "convertedRetreatCost": 2,
    "collectionNumber": "090/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 231,
    "name": "Aspidochelone",
    "supertype": "Creature",
    "types": ["Water"],
    "level": 8,
    "hp": 6500,
    "rarity": "HiddenRare",
    "images": {"small": "CardImages/Creatures/Water/Aspidochelone-2"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Moving Island",
        "trigger": "OnSummon",
        "effectText": "When summoned onto the field of play. Search your Deck for any three cards. Show your opponent and place them into your Hand.",
        "usableFromBench": false,
        "prerequisites": [],
        "structuredEffects": [
          {
            "type": "SearchDeck",
            "category": "CardManipulation",
            "target": "PlayerSelf",
            "searchCriteria": {"anyCard": true},
            "amount": 3,
            "action": "AddToHandAndShow"
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Provoked Wrath",
        "cost": [{"PowerType": "Water", "count": 2}, {"PowerType": "Earth", "count": 1}],
        "damage": 5500,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Thunder", "multiplier": 2}],
    "resistances": [{"PowerType": "Forest", "reduction": 1500}],
    "retreatCost": [{"PowerType": "Water", "count": 2}],
    "convertedRetreatCost": 2,
    "collectionNumber": "332/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 232,
    "name": "Aspidochelone",
    "supertype": "Creature",
    "types": ["Water"],
    "level": 8,
    "hp": 6500,
    "rarity": "Borderless",
    "images": {"small": "CardImages/Creatures/Water/Aspidochelone-3"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Moving Island",
        "trigger": "OnSummon",
        "effectText": "When summoned onto the field of play. Search your Deck for any three cards. Show your opponent and place them into your Hand.",
        "usableFromBench": false,
        "prerequisites": [],
        "structuredEffects": [
          {
            "type": "SearchDeck",
            "category": "CardManipulation",
            "target": "PlayerSelf",
            "searchCriteria": {"anyCard": true},
            "amount": 3,
            "action": "AddToHandAndShow"
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Provoked Wrath",
        "cost": [{"PowerType": "Water", "count": 2}, {"PowerType": "Earth", "count": 1}],
        "damage": 5500,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Thunder", "multiplier": 2}],
    "resistances": [{"PowerType": "Forest", "reduction": 1500}],
    "retreatCost": [{"PowerType": "Water", "count": 2}],
    "convertedRetreatCost": 2,
    "collectionNumber": "332/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 233,
    "name": "Avani",
    "supertype": "Creature",
    "types": ["Water"],
    "level": 10,
    "hp": 9000,
    "rarity": "HiddenRare",
    "images": {"small": "CardImages/Creatures/Water/Avani2"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Stone Grasp",
        "trigger": "PassiveWhileActive",
        "effectText": "Avani can only be summoned by sacrificing any level 8 or higher Water or Earth type Creature. While on the field of play, your opponent cannot perform any Creature sacrifice on their Bench.",
        "usableFromBench": false,
        "prerequisites": [{"type": "SacrificeCreature", "criteria": {"minLevel": 8, "types": ["Water", "Earth"]}}],
        "structuredEffects": [
          {
            "type": "PreventSacrifice",
            "target": "OpponentBench"
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Earth's Sorrow",
        "cost": [{"PowerType": "Water", "count": 2}, {"PowerType": "Earth", "count": 2}],
        "damage": 6000,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Wind", "multiplier": 3}],
    "resistances": [],
    "retreatCost": [],
    "convertedRetreatCost": 0,
    "collectionNumber": "377/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 234,
    "name": "Avani",
    "supertype": "Creature",
    "types": ["Water"],
    "level": 10,
    "hp": 9000,
    "rarity": "Borderless",
    "images": {"small": "CardImages/Creatures/Water/Avani3"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Stone Grasp",
        "trigger": "PassiveWhileActive",
        "effectText": "Avani can only be summoned by sacrificing any level 8 or higher Water or Earth type Creature. While on the field of play, your opponent cannot perform any Creature sacrifice on their Bench.",
        "usableFromBench": false,
        "prerequisites": [{"type": "SacrificeCreature", "criteria": {"minLevel": 8, "types": ["Water", "Earth"]}}],
        "structuredEffects": [
          {
            "type": "PreventSacrifice",
            "target": "OpponentBench"
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Earth's Sorrow",
        "cost": [{"PowerType": "Water", "count": 2}, {"PowerType": "Earth", "count": 2}],
        "damage": 6000,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Wind", "multiplier": 3}],
    "resistances": [],
    "retreatCost": [],
    "convertedRetreatCost": 0,
    "collectionNumber": "377/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 235,
    "name": "Baby Yeti",
    "supertype": "Creature",
    "types": ["Water"],
    "level": 6,
    "hp": 5500,
    "rarity": "Uncommon",
    "images": {"small": "CardImages/Creatures/Water/Yeti1"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Icebeam",
        "cost": [{"PowerType": "Water", "count": 1}],
        "damage": 2500,
        "effectText": null,
        "structuredEffects": []
      },
      {
        "name": "Frostbite",
        "cost": [{"PowerType": "Water", "count": 2}],
        "damage": 3500,
        "effectText": "Automatically Freeze your opponent's Creature.",
        "structuredEffects": [
          {
            "type": "ApplyStatus",
            "category": "Debuff",
            "target": "OpponentCreatureActive",
            "status": "Frozen"
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Fire", "multiplier": 2}],
    "resistances": [{"PowerType": "Wind", "reduction": 1000}],
    "retreatCost": [{"PowerType": "Water", "count": 1}],
    "convertedRetreatCost": 1,
    "collectionNumber": "111/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 236,
    "name": "Charybdis",
    "supertype": "Creature",
    "types": ["Water"],
    "level": 8,
    "hp": 6500,
    "rarity": "Rare",
    "images": {"small": "CardImages/Creatures/Water/Charybdis1"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Tidal Fury",
        "cost": [{"PowerType": "Water", "count": 2}],
        "damage": 4500,
        "effectText": null,
        "structuredEffects": []
      },
      {
        "name": "Maelstrom",
        "cost": [{"PowerType": "Water", "count": 3}],
        "damage": 6000,
        "effectText": "Remove all Power cards attached to this Creature.",
        "structuredEffects": [
          {"type": "RemovePowerCardFromSelf", "amount": "All", "criteria": "AttachedAny", "costEffect": true}
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Thunder", "multiplier": 2}],
    "resistances": [{"PowerType": "Forest", "reduction": 1500}],
    "retreatCost": [{"PowerType": "Water", "count": 3}],
    "convertedRetreatCost": 3,
    "collectionNumber": "138/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 237,
    "name": "Charybdis",
    "supertype": "Creature",
    "types": ["Water"],
    "level": 8,
    "hp": 6500,
    "rarity": "HiddenRare",
    "images": {"small": "CardImages/Creatures/Water/Charybdis2"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Tidal Fury",
        "cost": [{"PowerType": "Water", "count": 2}],
        "damage": 4500,
        "effectText": null,
        "structuredEffects": []
      },
      {
        "name": "Maelstrom",
        "cost": [{"PowerType": "Water", "count": 3}],
        "damage": 6000,
        "effectText": "Remove all Power cards attached to this Creature.",
        "structuredEffects": [
          {"type": "RemovePowerCardFromSelf", "amount": "All", "criteria": "AttachedAny", "costEffect": true}
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Thunder", "multiplier": 2}],
    "resistances": [{"PowerType": "Forest", "reduction": 1500}],
    "retreatCost": [{"PowerType": "Water", "count": 3}],
    "convertedRetreatCost": 3,
    "collectionNumber": "324/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 238,
    "name": "Charybdis",
    "supertype": "Creature",
    "types": ["Water"],
    "level": 8,
    "hp": 6500,
    "rarity": "Borderless",
    "images": {"small": "CardImages/Creatures/Water/Charybdis3"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Tidal Fury",
        "cost": [{"PowerType": "Water", "count": 2}],
        "damage": 4500,
        "effectText": null,
        "structuredEffects": []
      },
      {
        "name": "Maelstrom",
        "cost": [{"PowerType": "Water", "count": 3}],
        "damage": 6000,
        "effectText": "Remove all Power cards attached to this Creature.",
        "structuredEffects": [
          {"type": "RemovePowerCardFromSelf", "amount": "All", "criteria": "AttachedAny", "costEffect": true}
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Thunder", "multiplier": 2}],
    "resistances": [{"PowerType": "Forest", "reduction": 1500}],
    "retreatCost": [{"PowerType": "Water", "count": 3}],
    "convertedRetreatCost": 3,
    "collectionNumber": "324/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 239,
    "name": "Chillburr",
    "supertype": "Creature",
    "types": ["Water"],
    "level": 3,
    "hp": 2500,
    "rarity": "Common",
    "images": {"small": "CardImages/Creatures/Water/Chillburr1"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Icey Paws",
        "cost": [{"PowerType": "Water", "count": 1}],
        "damage": 1000,
        "effectText": "Automatically Freeze your opponent's Creature.",
        "structuredEffects": [
          {
            "type": "ApplyStatus",
            "category": "Debuff",
            "target": "OpponentCreatureActive",
            "status": "Frozen"
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Fire", "multiplier": 1}],
    "resistances": [{"PowerType": "Wind", "reduction": 500}],
    "retreatCost": [{"PowerType": "Water", "count": 1}],
    "convertedRetreatCost": 1,
    "collectionNumber": "051/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 240,
    "name": "Cryofrost",
    "supertype": "Creature",
    "types": ["Water"],
    "level": 4,
    "hp": 4000,
    "rarity": "Uncommon",
    "images": {"small": "CardImages/Creatures/Water/Cryofrost1"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Blizzard",
        "cost": [{"PowerType": "Water", "count": 1}],
        "damage": null,
        "effectText": "Roll the main dice. If the result is even, deal +3000 damage to your opponent's Creature. If odd, your opponent's Creature is Frozen.",
        "structuredEffects": [
          {
            "type": "ConditionalEffect",
            "condition": {"type": "DiceRoll", "comparison": "IsEven"},
            "trueEffects": [{"type": "DealDamage", "target": "OpponentCreatureActive", "amount": 3000}],
            "falseEffects": [{"type": "ApplyStatus", "target": "OpponentCreatureActive", "status": "Frozen"}]
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Fire", "multiplier": 2}],
    "resistances": [{"PowerType": "Wind", "reduction": 500}],
    "retreatCost": [{"PowerType": "Water", "count": 1}],
    "convertedRetreatCost": 1,
    "collectionNumber": "089/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 241,
    "name": "Hippocampus",
    "supertype": "Creature",
    "types": ["Water"],
    "level": 5,
    "hp": 4000,
    "rarity": "Uncommon",
    "images": {"small": "CardImages/Creatures/Water/Hippocampus1"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Aqua Jet",
        "cost": [{"PowerType": "Water", "count": 1}],
        "damage": 2500,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Thunder", "multiplier": 2}],
    "resistances": [{"PowerType": "Forest", "reduction": 500}],
    "retreatCost": [{"PowerType": "Water", "count": 1}],
    "convertedRetreatCost": 1,
    "collectionNumber": "098/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 242,
    "name": "Hydra",
    "supertype": "Creature",
    "types": ["Water"],
    "level": 10,
    "hp": 8000,
    "rarity": "UltraRare",
    "images": {"small": "CardImages/Creatures/Water/Hydra1"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Water's Call",
        "trigger": "Passive",
        "effectText": "To summon, you must sacrifice Nereus and discard one Water Power card from your Hand. For every Water Power card in your Dicard Pile, Hydra gains +500 HP.",
        "usableFromBench": false,
        "prerequisites": [
          {"type": "SacrificeSpecificCreature", "creatureName": "Nereus"},
          {"type": "DiscardCardFromHand", "cardType": "Power", "powerType": "Water", "amount": 1}
        ],
        "structuredEffects": [
          {
            "type": "ModifyStats",
            "category": "StatBoost",
            "target": "Self",
            "modification": {
              "stat": "HP",
              "amountPerCondition": 500,
              "condition": {"type": "CountCardsInDiscard", "cardType": "Power", "powerType": "Water"}
            }
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Tidal Waves",
        "cost": [{"PowerType": "Water", "count": 4}],
        "damage": 5000,
        "effectText": "Flip the main coin. If the result is heads, your opponent's Creature takes an additional +2000 damage.",
        "structuredEffects": [
          {
            "type": "ConditionalEffect",
            "condition": {"type": "CoinFlip", "comparison": "EqualTo", "stringValue": "Heads"},
            "trueEffects": [{"type": "DealDamage", "target": "OpponentCreatureActive", "amount": 2000}],
            "falseEffects": []
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Thunder", "multiplier": 3}],
    "resistances": [],
    "retreatCost": [],
    "convertedRetreatCost": 0,
    "collectionNumber": "164/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 243,
    "name": "Hydra",
    "supertype": "Creature",
    "types": ["Water"],
    "level": 10,
    "hp": 8000,
    "rarity": "HiddenRare",
    "images": {"small": "CardImages/Creatures/Water/Hydra2"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Water's Call",
        "trigger": "Passive",
        "effectText": "To summon, you must sacrifice Nereus and discard one Water Power card from your Hand. For every Water Power card in your Dicard Pile, Hydra gains +500 HP.",
        "usableFromBench": false,
        "prerequisites": [
          {"type": "SacrificeSpecificCreature", "creatureName": "Nereus"},
          {"type": "DiscardCardFromHand", "cardType": "Power", "powerType": "Water", "amount": 1}
        ],
        "structuredEffects": [
          {
            "type": "ModifyStats",
            "category": "StatBoost",
            "target": "Self",
            "modification": {
              "stat": "HP",
              "amountPerCondition": 500,
              "condition": {"type": "CountCardsInDiscard", "cardType": "Power", "powerType": "Water"}
            }
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Tidal Waves",
        "cost": [{"PowerType": "Water", "count": 4}],
        "damage": 5000,
        "effectText": "Flip the main coin. If the result is heads, your opponent's Creature takes an additional +2000 damage.",
        "structuredEffects": [
          {
            "type": "ConditionalEffect",
            "condition": {"type": "CoinFlip", "comparison": "EqualTo", "stringValue": "Heads"},
            "trueEffects": [{"type": "DealDamage", "target": "OpponentCreatureActive", "amount": 2000}],
            "falseEffects": []
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Thunder", "multiplier": 3}],
    "resistances": [],
    "retreatCost": [],
    "convertedRetreatCost": 0,
    "collectionNumber": "358/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 244,
    "name": "Hydra",
    "supertype": "Creature",
    "types": ["Water"],
    "level": 10,
    "hp": 8000,
    "rarity": "Borderless",
    "images": {"small": "CardImages/Creatures/Water/Hydra3"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Water's Call",
        "trigger": "Passive",
        "effectText": "To summon, you must sacrifice Nereus and discard one Water Power card from your Hand. For every Water Power card in your Dicard Pile, Hydra gains +500 HP.",
        "usableFromBench": false,
        "prerequisites": [
          {"type": "SacrificeSpecificCreature", "creatureName": "Nereus"},
          {"type": "DiscardCardFromHand", "cardType": "Power", "powerType": "Water", "amount": 1}
        ],
        "structuredEffects": [
          {
            "type": "ModifyStats",
            "category": "StatBoost",
            "target": "Self",
            "modification": {
              "stat": "HP",
              "amountPerCondition": 500,
              "condition": {"type": "CountCardsInDiscard", "cardType": "Power", "powerType": "Water"}
            }
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Tidal Waves",
        "cost": [{"PowerType": "Water", "count": 4}],
        "damage": 5000,
        "effectText": "Flip the main coin. If the result is heads, your opponent's Creature takes an additional +2000 damage.",
        "structuredEffects": [
          {
            "type": "ConditionalEffect",
            "condition": {"type": "CoinFlip", "comparison": "EqualTo", "stringValue": "Heads"},
            "trueEffects": [{"type": "DealDamage", "target": "OpponentCreatureActive", "amount": 2000}],
            "falseEffects": []
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Thunder", "multiplier": 3}],
    "resistances": [],
    "retreatCost": [],
    "convertedRetreatCost": 0,
    "collectionNumber": "358/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 245,
    "name": "Marimira",
    "supertype": "Creature",
    "types": ["Water"],
    "level": 6,
    "hp": 4500,
    "rarity": "Uncommon",
    "images": {"small": "CardImages/Creatures/Water/Marimira1"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Water Pool",
        "cost": [{"PowerType": "Water", "count": 1}],
        "damage": null,
        "effectText": "Discard one card from your Hand and deal +3000 damage to your opponent's Creature.",
        "structuredEffects": [
          {"type": "DiscardCardFromHand", "amount": 1, "selection": "PlayerChoiceHand", "costEffect": true},
          {"type": "DealDamage", "target": "OpponentCreatureActive", "amount": 3000}
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Thunder", "multiplier": 1}],
    "resistances": [{"PowerType": "Forest", "reduction": 1000}],
    "retreatCost": [{"PowerType": "Water", "count": 1}],
    "convertedRetreatCost": 1,
    "collectionNumber": "073/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 246,
    "name": "Mernatee",
    "supertype": "Creature",
    "types": ["Water"],
    "level": 7,
    "hp": 6500,
    "rarity": "Rare",
    "images": {"small": "CardImages/Creatures/Water/Mernatee1"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Aquatic Hymn",
        "cost": [{"PowerType": "Water", "count": 2}],
        "damage": 2500,
        "effectText": "Your opponent's Creature is automatically Confused.",
        "structuredEffects": [
          {
            "type": "ApplyStatus",
            "category": "Debuff",
            "target": "OpponentCreatureActive",
            "status": "Confused"
          }
        ]
      },
      {
        "name": "Sea Surf",
        "cost": [{"PowerType": "Water", "count": 1}],
        "damage": 3500,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Thunder", "multiplier": 2}],
    "resistances": [{"PowerType": "Forest", "reduction": 1000}],
    "retreatCost": [{"PowerType": "Water", "count": 2}],
    "convertedRetreatCost": 2,
    "collectionNumber": "059/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 247,
    "name": "Mernatee",
    "supertype": "Creature",
    "types": ["Water"],
    "level": 7,
    "hp": 6500,
    "rarity": "HiddenRare",
    "images": {"small": "CardImages/Creatures/Water/Mernatee2"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Aquatic Hymn",
        "cost": [{"PowerType": "Water", "count": 2}],
        "damage": 2500,
        "effectText": "Your opponent's Creature is automatically Confused.",
        "structuredEffects": [
          {
            "type": "ApplyStatus",
            "category": "Debuff",
            "target": "OpponentCreatureActive",
            "status": "Confused"
          }
        ]
      },
      {
        "name": "Sea Surf",
        "cost": [{"PowerType": "Water", "count": 1}],
        "damage": 3500,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Thunder", "multiplier": 2}],
    "resistances": [{"PowerType": "Forest", "reduction": 1000}],
    "retreatCost": [{"PowerType": "Water", "count": 2}],
    "convertedRetreatCost": 2,
    "collectionNumber": "335/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 248,
    "name": "Mernatee",
    "supertype": "Creature",
    "types": ["Water"],
    "level": 7,
    "hp": 6500,
    "rarity": "Borderless",
    "images": {"small": "CardImages/Creatures/Water/Mernatee3"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Aquatic Hymn",
        "cost": [{"PowerType": "Water", "count": 2}],
        "damage": 2500,
        "effectText": "Your opponent's Creature is automatically Confused.",
        "structuredEffects": [
          {
            "type": "ApplyStatus",
            "category": "Debuff",
            "target": "OpponentCreatureActive",
            "status": "Confused"
          }
        ]
      },
      {
        "name": "Sea Surf",
        "cost": [{"PowerType": "Water", "count": 1}],
        "damage": 3500,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Thunder", "multiplier": 2}],
    "resistances": [{"PowerType": "Forest", "reduction": 1000}],
    "retreatCost": [{"PowerType": "Water", "count": 2}],
    "convertedRetreatCost": 2,
    "collectionNumber": "335/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 249,
    "name": "Neptide",
    "supertype": "Creature",
    "types": ["Water"],
    "level": 2,
    "hp": 1000,
    "rarity": "Common",
    "images": {"small": "CardImages/Creatures/Water/Neptide1"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Drowning Grasp",
        "cost": [{"PowerType": "Water", "count": 1}],
        "damage": null,
        "effectText": "Roll the main dice. If the result is a 4 or higher, your opponent's Creature is Paralyzed.",
        "structuredEffects": [
          {
            "type": "ConditionalEffect",
            "category": "Debuff",
            "condition": {"type": "DiceRoll", "comparison": "GreaterThanOrEqualTo", "value": 4},
            "trueEffects": [{"type": "ApplyStatus", "target": "OpponentCreatureActive", "status": "Paralyzed"}],
            "falseEffects": []
          }
        ]
      },
      {
        "name": "Water Blast",
        "cost": [{"PowerType": "Water", "count": 1}],
        "damage": 500,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Thunder", "multiplier": 1}],
    "resistances": [{"PowerType": "Forest", "reduction": 500}],
    "retreatCost": [{"PowerType": "Water", "count": 1}],
    "convertedRetreatCost": 1,
    "collectionNumber": "044/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 250,
    "name": "Neptunova",
    "supertype": "Creature",
    "types": ["Water"],
    "level": 7,
    "hp": 6000,
    "rarity": "Rare",
    "images": {"small": "CardImages/Creatures/Water/Neptunova1"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Vortex Trap",
        "cost": [{"PowerType": "Water", "count": 1}],
        "damage": null,
        "effectText": "Roll the main dice. If the result is a 3 or 6, your oppponent's Creature is trapped in a vortex and cannot retreat for their next two turns. (you must wait for this cards effects to wear off before using again)",
        "structuredEffects": [
          {
            "type": "ConditionalEffect",
            "condition": {"type": "DiceRoll", "comparison": "ValueIn", "values": [3,6]},
            "trueEffects": [{"type": "ApplyStatus", "target": "OpponentCreatureActive", "status": "CannotRetreat", "duration": 2, "usageRestriction": "CannotBeUsedAgainUntilEffectWearsOff"}],
            "falseEffects": []
          }
        ]
      },
      {
        "name": "Drowning Wave",
        "cost": [{"PowerType": "Water", "count": 2}],
        "damage": 3500,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Thunder", "multiplier": 2}],
    "resistances": [{"PowerType": "Forest", "reduction": 1000}],
    "retreatCost": [{"PowerType": "Water", "count": 2}],
    "convertedRetreatCost": 2,
    "collectionNumber": "103/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 251,
    "name": "Nereia",
    "supertype": "Creature",
    "types": ["Water"],
    "level": 5,
    "hp": 4000,
    "rarity": "Uncommon",
    "images": {"small": "CardImages/Creatures/Water/SeaDragonTwo1"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Aid from Afar",
        "trigger": "OnSummon",
        "effectText": "When this Creature is summoned onto the field of play, search your Deck for Nereus and place it on your Bench. (must have an open space on your Bench)",
        "usableFromBench": false,
        "prerequisites": [{"type": "OpenBenchSpace"}],
        "structuredEffects": [
          {
            "type": "SearchDeckAndPlaceOnBench",
            "creatureName": "Nereus"
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Fury of the Sea",
        "cost": [{"PowerType": "Water", "count": 2}],
        "damage": 2500,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Thunder", "multiplier": 2}],
    "resistances": [{"PowerType": "Forest", "reduction": 1000}],
    "retreatCost": [{"PowerType": "Water", "count": 2}],
    "convertedRetreatCost": 2,
    "collectionNumber": "107/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 252,
    "name": "Nereus",
    "supertype": "Creature",
    "types": ["Water"],
    "level": 7,
    "hp": 6500,
    "rarity": "Rare",
    "images": {"small": "CardImages/Creatures/Water/SeaDragonThree1"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Vast Ocean",
        "trigger": "OnSummon",
        "effectText": "When this Creature is summoned onto the field of play, search your Deck for three Water Power Cards and place them on any three different Water Creatures on your Bench.",
        "usableFromBench": false,
        "prerequisites": [],
        "structuredEffects": [
          {
            "type": "SearchDeckAndAttachToBench",
            "cardType": "Power",
            "cardPowerTypeToSearch": "Water",
            "powerType": "Water",
            "amount": 3
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Fury of the Ocean",
        "cost": [{"PowerType": "Water", "count": 3}],
        "damage": 4500,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Thunder", "multiplier": 2}],
    "resistances": [{"PowerType": "Forest", "reduction": 1500}],
    "retreatCost": [{"PowerType": "Water", "count": 3}],
    "convertedRetreatCost": 3,
    "collectionNumber": "129/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 253,
    "name": "Nerion",
    "supertype": "Creature",
    "types": ["Water"],
    "level": 1,
    "hp": 1000,
    "rarity": "Common",
    "images": {"small": "CardImages/Creatures/Water/SeaDragonOne1"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Call for Backup",
        "trigger": "OnSummon",
        "effectText": "When this Creature is summoned onto the field of play, search your Deck for Nereia and place it on your Bench. (you must have an open space on your Bench)",
        "usableFromBench": false,
        "prerequisites": [{"type": "OpenBenchSpace"}],
        "structuredEffects": [
          {
            "type": "SearchDeckAndPlaceOnBench",
            "creatureName": "Nereia"
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Fury of the Lake",
        "cost": [{"PowerType": "Water", "count": 1}],
        "damage": 500,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Thunder", "multiplier": 1}],
    "resistances": [{"PowerType": "Forest", "reduction": 500}],
    "retreatCost": [{"PowerType": "Water", "count": 1}],
    "convertedRetreatCost": 1,
    "collectionNumber": "018/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 254,
    "name": "Raitei",
    "supertype": "Creature",
    "types": ["Water"],
    "level": 10,
    "hp": 7000,
    "rarity": "HiddenRare",
    "images": {"small": "CardImages/Creatures/Water/Raitei2"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Storm's Eye",
        "trigger": "Passive",
        "effectText": "Raitei can only be summoned by sacrificing any level 8 or higher Water or Thunder type Creature. Raitei gains +500 HP for every Thunder Power card in your Discard Pile.",
        "usableFromBench": false,
        "prerequisites": [{"type": "SacrificeCreature", "criteria": {"minLevel": 8, "types": ["Water", "Thunder"]}}],
        "structuredEffects": [
          {
            "type": "ModifyStats",
            "category": "StatBoost",
            "target": "Self",
            "modification": {
              "stat": "HP",
              "amountPerCondition": 500,
              "condition": {"type": "CountCardsInDiscard", "cardType": "Power", "powerType": "Thunder"}
            }
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Hydro-Electricity",
        "cost": [{"PowerType": "Water", "count": 2}, {"PowerType": "Thunder", "count": 2}],
        "damage": 7000,
        "effectText": "Flip the main coin. If the result is heads, you and your opponent may draw one card from the top of your Deck.",
        "structuredEffects": [
          {
            "type": "ConditionalEffect",
            "condition": {"type": "CoinFlip", "comparison": "EqualTo", "stringValue": "Heads"},
            "trueEffects": [
              {"type": "DrawCards", "target": "PlayerSelf", "amount": 1},
              {"type": "OptionalEffect", "target": "PlayerOpponent", "prompt": "Draw 1 card?", "effectIfChosen": [{"type": "DrawCards", "target": "PlayerOpponent", "amount": 1}]}
            ],
            "falseEffects": []
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Earth", "multiplier": 3}],
    "resistances": [],
    "retreatCost": [],
    "convertedRetreatCost": 0,
    "collectionNumber": "378/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 255,
    "name": "Raitei",
    "supertype": "Creature",
    "types": ["Water"],
    "level": 10,
    "hp": 7000,
    "rarity": "Borderless",
    "images": {"small": "CardImages/Creatures/Water/Raitei3"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Storm's Eye",
        "trigger": "Passive",
        "effectText": "Raitei can only be summoned by sacrificing any level 8 or higher Water or Thunder type Creature. Raitei gains +500 HP for every Thunder Power card in your Discard Pile.",
        "usableFromBench": false,
        "prerequisites": [{"type": "SacrificeCreature", "criteria": {"minLevel": 8, "types": ["Water", "Thunder"]}}],
        "structuredEffects": [
          {
            "type": "ModifyStats",
            "category": "StatBoost",
            "target": "Self",
            "modification": {
              "stat": "HP",
              "amountPerCondition": 500,
              "condition": {"type": "CountCardsInDiscard", "cardType": "Power", "powerType": "Thunder"}
            }
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Hydro-Electricity",
        "cost": [{"PowerType": "Water", "count": 2}, {"PowerType": "Thunder", "count": 2}],
        "damage": 7000,
        "effectText": "Flip the main coin. If the result is heads, you and your opponent may draw one card from the top of your Deck.",
        "structuredEffects": [
          {
            "type": "ConditionalEffect",
            "condition": {"type": "CoinFlip", "comparison": "EqualTo", "stringValue": "Heads"},
            "trueEffects": [
              {"type": "DrawCards", "target": "PlayerSelf", "amount": 1},
              {"type": "OptionalEffect", "target": "PlayerOpponent", "prompt": "Draw 1 card?", "effectIfChosen": [{"type": "DrawCards", "target": "PlayerOpponent", "amount": 1}]}
            ],
            "falseEffects": []
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Earth", "multiplier": 3}],
    "resistances": [],
    "retreatCost": [],
    "convertedRetreatCost": 0,
    "collectionNumber": "378/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 256,
    "name": "Rann, the Wretched",
    "supertype": "Creature",
    "types": ["Water"],
    "level": 10,
    "hp": 9000,
    "rarity": "UltraRare",
    "images": {"small": "CardImages/Creatures/Water/RanntheWretched1"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Lost at Sea",
        "trigger": "OnSummon",
        "effectText": "To summon, you must play Abandoned Ship. Once summoned onto the field of play, shuffle all Water Power cards in your Discard Pile back to your Deck.",
        "usableFromBench": false,
        "prerequisites": [{"type": "PlaySpecificCard", "cardName": "Abandoned Ship"}],
        "structuredEffects": [
          {
            "type": "ShuffleFromDiscardToDeck",
            "cardType": "Power",
            "powerType": "Water",
            "amount": "All"
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Ragnarok's Wrath",
        "cost": [{"PowerType": "Water", "count": 4}],
        "damage": 6500,
        "effectText": "Roll the main dice. If the result is odd, draw two cards from the top of your Deck.",
        "structuredEffects": [
          {
            "type": "ConditionalEffect",
            "category": "CardManipulation",
            "condition": {"type": "DiceRoll", "comparison": "IsOdd"},
            "trueEffects": [{"type": "DrawCards", "target": "PlayerSelf", "amount": 2}],
            "falseEffects": []
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Earth", "multiplier": 3}],
    "resistances": [],
    "retreatCost": [],
    "convertedRetreatCost": 0,
    "collectionNumber": "170/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 257,
    "name": "Rann, the Wretched",
    "supertype": "Creature",
    "types": ["Water"],
    "level": 10,
    "hp": 9000,
    "rarity": "HiddenRare",
    "images": {"small": "CardImages/Creatures/Water/RanntheWretched2"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Lost at Sea",
        "trigger": "OnSummon",
        "effectText": "To summon, you must play Abandoned Ship. Once summoned onto the field of play, shuffle all Water Power cards in your Discard Pile back to your Deck.",
        "usableFromBench": false,
        "prerequisites": [{"type": "PlaySpecificCard", "cardName": "Abandoned Ship"}],
        "structuredEffects": [
          {
            "type": "ShuffleFromDiscardToDeck",
            "cardType": "Power",
            "powerType": "Water",
            "amount": "All"
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Ragnarok's Wrath",
        "cost": [{"PowerType": "Water", "count": 4}],
        "damage": 6500,
        "effectText": "Roll the main dice. If the result is odd, draw two cards from the top of your Deck.",
        "structuredEffects": [
          {
            "type": "ConditionalEffect",
            "category": "CardManipulation",
            "condition": {"type": "DiceRoll", "comparison": "IsOdd"},
            "trueEffects": [{"type": "DrawCards", "target": "PlayerSelf", "amount": 2}],
            "falseEffects": []
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Earth", "multiplier": 3}],
    "resistances": [],
    "retreatCost": [],
    "convertedRetreatCost": 0,
    "collectionNumber": "370/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 258,
    "name": "Rann, the Wretched",
    "supertype": "Creature",
    "types": ["Water"],
    "level": 10,
    "hp": 9000,
    "rarity": "Borderless",
    "images": {"small": "CardImages/Creatures/Water/RanntheWretched3"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Lost at Sea",
        "trigger": "OnSummon",
        "effectText": "To summon, you must play Abandoned Ship. Once summoned onto the field of play, shuffle all Water Power cards in your Discard Pile back to your Deck.",
        "usableFromBench": false,
        "prerequisites": [{"type": "PlaySpecificCard", "cardName": "Abandoned Ship"}],
        "structuredEffects": [
          {
            "type": "ShuffleFromDiscardToDeck",
            "cardType": "Power",
            "powerType": "Water",
            "amount": "All"
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Ragnarok's Wrath",
        "cost": [{"PowerType": "Water", "count": 4}],
        "damage": 6500,
        "effectText": "Roll the main dice. If the result is odd, draw two cards from the top of your Deck.",
        "structuredEffects": [
          {
            "type": "ConditionalEffect",
            "category": "CardManipulation",
            "condition": {"type": "DiceRoll", "comparison": "IsOdd"},
            "trueEffects": [{"type": "DrawCards", "target": "PlayerSelf", "amount": 2}],
            "falseEffects": []
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Earth", "multiplier": 3}],
    "resistances": [],
    "retreatCost": [],
    "convertedRetreatCost": 0,
    "collectionNumber": "370/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 259,
    "name": "Scylla",
    "supertype": "Creature",
    "types": ["Water"],
    "level": 9,
    "hp": 7000,
    "rarity": "Rare",
    "images": {"small": "CardImages/Creatures/Water/Scylla1"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Ocean's Wrath",
        "trigger": "OnOpponentCreatureDestroyedByThis",
        "effectText": "When this Creature destroys one of your opponent's Creatures, add +1500 HP to Scylla's health.",
        "usableFromBench": false,
        "prerequisites": [],
        "structuredEffects": [
          {
            "type": "ModifyHP",
            "category": "Healing",
            "target": "Self",
            "amount": 1500
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Abyssal Fury",
        "cost": [{"PowerType": "Water", "count": 3}],
        "damage": 5500,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Thunder", "multiplier": 2}],
    "resistances": [{"PowerType": "Forest", "reduction": 2000}],
    "retreatCost": [{"PowerType": "Water", "count": 3}],
    "convertedRetreatCost": 3,
    "collectionNumber": "156/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 260,
    "name": "Scylla",
    "supertype": "Creature",
    "types": ["Water"],
    "level": 9,
    "hp": 7000,
    "rarity": "HiddenRare",
    "images": {"small": "CardImages/Creatures/Water/Scylla2"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Ocean's Wrath",
        "trigger": "OnOpponentCreatureDestroyedByThis",
        "effectText": "When this Creature destroys one of your opponent's Creatures, add +1500 HP to Scylla's health.",
        "usableFromBench": false,
        "prerequisites": [],
        "structuredEffects": [
          {
            "type": "ModifyHP",
            "category": "Healing",
            "target": "Self",
            "amount": 1500
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Abyssal Fury",
        "cost": [{"PowerType": "Water", "count": 3}],
        "damage": 5500,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Thunder", "multiplier": 2}],
    "resistances": [{"PowerType": "Forest", "reduction": 2000}],
    "retreatCost": [{"PowerType": "Water", "count": 3}],
    "convertedRetreatCost": 3,
    "collectionNumber": "329/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 261,
    "name": "Scylla",
    "supertype": "Creature",
    "types": ["Water"],
    "level": 9,
    "hp": 7000,
    "rarity": "Borderless",
    "images": {"small": "CardImages/Creatures/Water/Scylla3"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Ocean's Wrath",
        "trigger": "OnOpponentCreatureDestroyedByThis",
        "effectText": "When this Creature destroys one of your opponent's Creatures, add +1500 HP to Scylla's health.",
        "usableFromBench": false,
        "prerequisites": [],
        "structuredEffects": [
          {
            "type": "ModifyHP",
            "category": "Healing",
            "target": "Self",
            "amount": 1500
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Abyssal Fury",
        "cost": [{"PowerType": "Water", "count": 3}],
        "damage": 5500,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Thunder", "multiplier": 2}],
    "resistances": [{"PowerType": "Forest", "reduction": 2000}],
    "retreatCost": [{"PowerType": "Water", "count": 3}],
    "convertedRetreatCost": 3,
    "collectionNumber": "329/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 262,
    "name": "Seaphira",
    "supertype": "Creature",
    "types": ["Water"],
    "level": 2,
    "hp": 1500,
    "rarity": "Common",
    "images": {"small": "CardImages/Creatures/Water/Seaphira1"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Water Spray",
        "cost": [{"PowerType": "Water", "count": 1}],
        "damage": null,
        "effectText": "Remove one Power card from your opponent's Creature. (this move cannot be used twice in a row)",
        "structuredEffects": [
          {
            "type": "RemovePowerCard",
            "target": "OpponentCreatureActive",
            "amount": 1,
            "criteria": "Any",
            "usageRestriction": "CannotBeUsedTwiceInARow"
          }
        ]
      },
      {
        "name": "Waterspout",
        "cost": [{"PowerType": "Water", "count": 1}],
        "damage": null,
        "effectText": "Search your Deck for any Power card. Show your opponent and place it in your Hand.",
        "structuredEffects": [
          {
            "type": "SearchDeck",
            "category": "CardManipulation",
            "target": "PlayerSelf",
            "searchCriteria": {"cardSuperType": "Power", "anyType": true},
            "amount": 1,
            "action": "AddToHandAndShow"
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Thunder", "multiplier": 1}],
    "resistances": [{"PowerType": "Forest", "reduction": 500}],
    "retreatCost": [{"PowerType": "Water", "count": 1}],
    "convertedRetreatCost": 1,
    "collectionNumber": "125/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 263,
    "name": "Skwid",
    "supertype": "Creature",
    "types": ["Water"],
    "level": 4,
    "hp": 4500,
    "rarity": "Uncommon",
    "images": {"small": "CardImages/Creatures/Water/Skwid1"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Tentacle Slap",
        "cost": [{"PowerType": "Water", "count": 1}],
        "damage": 1500,
        "effectText": null,
        "structuredEffects": []
      },
      {
        "name": "Sticky Tentacels",
        "cost": [{"PowerType": "Water", "count": 2}],
        "damage": 3000,
        "effectText": "Remove one Power card from your opponent's Creature.",
        "structuredEffects": [
          {
            "type": "RemovePowerCard",
            "target": "OpponentCreatureActive",
            "amount": 1,
            "criteria": "Any"
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Thunder", "multiplier": 2}],
    "resistances": [{"PowerType": "Forest", "reduction": 500}],
    "retreatCost": [{"PowerType": "Water", "count": 1}],
    "convertedRetreatCost": 1,
    "collectionNumber": "148/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 264,
    "name": "Water Leaper",
    "supertype": "Creature",
    "types": ["Water"],
    "level": 1,
    "hp": 1000,
    "rarity": "Common",
    "images": {"small": "CardImages/Creatures/Water/WaterLeaper1"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Strategy",
        "trigger": "StartOfTurnWhileActive",
        "effectText": "At the start of your turn, while Water Leaper is on the field of play, draw one extra card.",
        "usableFromBench": false,
        "prerequisites": [],
        "structuredEffects": [
          {
            "type": "DrawCards",
            "category": "CardManipulation",
            "target": "PlayerSelf",
            "amount": 1
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Bubble Blast",
        "cost": [{"PowerType": "Water", "count": 1}],
        "damage": 500,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Thunder", "multiplier": 1}],
    "resistances": [{"PowerType": "Forest", "reduction": 500}],
    "retreatCost": [{"PowerType": "Water", "count": 1}],
    "convertedRetreatCost": 1,
    "collectionNumber": "054/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 265,
    "name": "Yacurana",
    "supertype": "Creature",
    "types": ["Water"],
    "level": 9,
    "hp": 7000,
    "rarity": "Rare",
    "images": {"small": "CardImages/Creatures/Water/Yacurana1"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Aquatic Paradise",
        "trigger": "OnSummon",
        "effectText": "When this Creature is summoned onto the field of play, negate all damage from your opponent's Creature's next attack.",
        "usableFromBench": false,
        "prerequisites": [],
        "structuredEffects": [
          {
            "type": "ApplyBuffToOpponent",
            "buff": "NegateNextAttackDamage",
            "duration": 1
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Ancient Waters",
        "cost": [{"PowerType": "Water", "count": 3}],
        "damage": null,
        "effectText": "Roll the main dice. Deal damage equal to the number rolled x1000 to your opponent's Creature.",
        "structuredEffects": [
          {
            "type": "DiceRollDependentDamage",
            "multiplier": 1000,
            "target": "OpponentCreatureActive"
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Thunder", "multiplier": 2}],
    "resistances": [{"PowerType": "Forest", "reduction": 1500}],
    "retreatCost": [{"PowerType": "Water", "count": 3}],
    "convertedRetreatCost": 3,
    "collectionNumber": "106/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 266,
    "name": "Yacurana",
    "supertype": "Creature",
    "types": ["Water"],
    "level": 9,
    "hp": 7000,
    "rarity": "HiddenRare",
    "images": {"small": "CardImages/Creatures/Water/Yacurana2"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Aquatic Paradise",
        "trigger": "OnSummon",
        "effectText": "When this Creature is summoned onto the field of play, negate all damage from your opponent's Creature's next attack.",
        "usableFromBench": false,
        "prerequisites": [],
        "structuredEffects": [
          {
            "type": "ApplyBuffToOpponent",
            "buff": "NegateNextAttackDamage",
            "duration": 1
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Ancient Waters",
        "cost": [{"PowerType": "Water", "count": 3}],
        "damage": null,
        "effectText": "Roll the main dice. Deal damage equal to the number rolled x1000 to your opponent's Creature.",
        "structuredEffects": [
          {
            "type": "DiceRollDependentDamage",
            "multiplier": 1000,
            "target": "OpponentCreatureActive"
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Thunder", "multiplier": 2}],
    "resistances": [{"PowerType": "Forest", "reduction": 1500}],
    "retreatCost": [{"PowerType": "Water", "count": 3}],
    "convertedRetreatCost": 3,
    "collectionNumber": "341/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 267,
    "name": "Yacurana",
    "supertype": "Creature",
    "types": ["Water"],
    "level": 9,
    "hp": 7000,
    "rarity": "Borderless",
    "images": {"small": "CardImages/Creatures/Water/Yacurana3"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Aquatic Paradise",
        "trigger": "OnSummon",
        "effectText": "When this Creature is summoned onto the field of play, negate all damage from your opponent's Creature's next attack.",
        "usableFromBench": false,
        "prerequisites": [],
        "structuredEffects": [
          {
            "type": "ApplyBuffToOpponent",
            "buff": "NegateNextAttackDamage",
            "duration": 1
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Ancient Waters",
        "cost": [{"PowerType": "Water", "count": 3}],
        "damage": null,
        "effectText": "Roll the main dice. Deal damage equal to the number rolled x1000 to your opponent's Creature.",
        "structuredEffects": [
          {
            "type": "DiceRollDependentDamage",
            "multiplier": 1000,
            "target": "OpponentCreatureActive"
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Thunder", "multiplier": 2}],
    "resistances": [{"PowerType": "Forest", "reduction": 1500}],
    "retreatCost": [{"PowerType": "Water", "count": 3}],
    "convertedRetreatCost": 3,
    "collectionNumber": "341/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 268,
    "name": "Baby Wyvern",
    "supertype": "Creature",
    "types": ["Wind"],
    "level": 6,
    "hp": 5000,
    "rarity": "Uncommon",
    "images": {"small": "CardImages/Creatures/Wind/Wyvern1"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Flame Burst",
        "cost": [{"PowerType": "Wind", "count": 2}],
        "damage": 2500,
        "effectText": "(Creatures weak to Fire types take double damage)",
        "attackProperties": {"dealsDoubleDamageToFireWeak": true}
      },
      {
        "name": "Wing Slash",
        "cost": [{"PowerType": "Fire", "count": 1}],
        "damage": 3000,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Water", "multiplier": 2}],
    "resistances": [{"PowerType": "Thunder", "reduction": 1000}],
    "retreatCost": [{"PowerType": "Wind", "count": 1}],
    "convertedRetreatCost": 1,
    "collectionNumber": "092/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 269,
    "name": "Cloudpiercer",
    "supertype": "Creature",
    "types": ["Wind"],
    "level": 10,
    "hp": 9000,
    "rarity": "HiddenRare",
    "images": {"small": "CardImages/Creatures/Wind/Cloudpiercer2"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Nightmare From Above",
        "trigger": "OnSummon",
        "effectText": "Cloudpiercer can only be summoned by sacrificing any level 8 or higher Wind or Water type Creature. Once summoned, remove one Power card from every Creatre opponent has on their Bench.",
        "usableFromBench": false,
        "prerequisites": [{"type": "SacrificeCreature", "criteria": {"minLevel": 8, "types": ["Wind", "Water"]}}],
        "structuredEffects": [
          {
            "type": "RemovePowerFromAll",
            "target": "OpponentBench",
            "amount": 1,
            "criteria": "Any"
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Whalefall",
        "cost": [{"PowerType": "Wind", "count": 2}, {"PowerType": "Water", "count": 2}],
        "damage": 8000,
        "effectText": "Remove two Wind Power cards from this Creature.",
        "structuredEffects": [
          {"type": "RemovePowerCardFromSelf", "amount": 2, "criteria": {"PowerType": "Wind"}, "costEffect": true}
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Thunder", "multiplier": 3}],
    "resistances": [],
    "retreatCost": [],
    "convertedRetreatCost": 0,
    "collectionNumber": "381/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 270,
    "name": "Cloudpiercer",
    "supertype": "Creature",
    "types": ["Wind"],
    "level": 10,
    "hp": 9000,
    "rarity": "Borderless",
    "images": {"small": "CardImages/Creatures/Wind/Cloudpiercer3"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Nightmare From Above",
        "trigger": "OnSummon",
        "effectText": "Cloudpiercer can only be summoned by sacrificing any level 8 or higher Wind or Water type Creature. Once summoned, remove one Power card from every Creatre opponent has on their Bench.",
        "usableFromBench": false,
        "prerequisites": [{"type": "SacrificeCreature", "criteria": {"minLevel": 8, "types": ["Wind", "Water"]}}],
        "structuredEffects": [
          {
            "type": "RemovePowerFromAll",
            "target": "OpponentBench",
            "amount": 1,
            "criteria": "Any"
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Whalefall",
        "cost": [{"PowerType": "Wind", "count": 2}, {"PowerType": "Water", "count": 2}],
        "damage": 8000,
        "effectText": "Remove two Wind Power cards from this Creature.",
        "structuredEffects": [
          {"type": "RemovePowerCardFromSelf", "amount": 2, "criteria": {"PowerType": "Wind"}, "costEffect": true}
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Thunder", "multiplier": 3}],
    "resistances": [],
    "retreatCost": [],
    "convertedRetreatCost": 0,
    "collectionNumber": "381/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 271,
    "name": "Cyclone Drake",
    "supertype": "Creature",
    "types": ["Wind"],
    "level": 8,
    "hp": 6500,
    "rarity": "Rare",
    "images": {"small": "CardImages/Creatures/Wind/CycloneDrake1"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Gate Force",
        "cost": [{"PowerType": "Wind", "count": 2}],
        "damage": 3500,
        "effectText": null,
        "structuredEffects": []
      },
      {
        "name": "Whirlwind",
        "cost": [{"PowerType": "Wind", "count": 3}],
        "damage": 3000,
        "effectText": "Discard one attached Power card from any of your opponent's Creatures. (this includes any Benched Creatures)",
        "structuredEffects": [
          {
            "type": "RemovePowerCard",
            "target": "OpponentAnyCreature",
            "amount": 1,
            "criteria": "AttachedAny",
            "selection": "PlayerChoice"
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Forest", "multiplier": 2}],
    "resistances": [{"PowerType": "Earth", "reduction": 1500}],
    "retreatCost": [{"PowerType": "Wind", "count": 3}],
    "convertedRetreatCost": 3,
    "collectionNumber": "136/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 272,
    "name": "Divine Beast, Panterus",
    "supertype": "Creature",
    "types": ["Wind"],
    "level": 10,
    "hp": 9500,
    "rarity": "UltraRare",
    "images": {"small": "CardImages/Creatures/Wind/Panterus1"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Divine Winged Beast",
        "trigger": "OnSummon",
        "effectText": "To summon, you must play Heavenly Hunter. Once summoned, Divine Beast Panterus gains +1000 attack for every Creature named Winged Beast ... on your Bench.",
        "usableFromBench": false,
        "prerequisites": [{"type": "PlaySpecificCard", "cardName": "Heavenly Hunter"}],
        "structuredEffects": [
          {
            "type": "ModifyStats",
            "category": "StatBoost",
            "target": "Self",
            "modification": {
              "stat": "Attack",
              "amountPerCondition": 1000,
              "condition": {"type": "CountSpecificNamedCreaturesOnBench", "creatureName": "Winged Beast"} 
            }
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Tornado Pounce",
        "cost": [{"PowerType": "Wind", "count": 3}, {"PowerType": "Light", "count": 1}],
        "damage": 5000,
        "effectText": "Deal 500 damage to all of your opponent's Benched Creatures.",
        "structuredEffects": [
          {
            "type": "ConditionalEffect",
            "category": "Damage",
            "condition": {"type": "Always"},
            "trueEffects": [
              {
                "type": "DealDamageToAll",
                "target": "OpponentBenchCreature",
                "amount": 500
              }
            ],
            "falseEffects": []
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Dark", "multiplier": 3}],
    "resistances": [],
    "retreatCost": [],
    "convertedRetreatCost": 0,
    "collectionNumber": "168/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 273,
    "name": "Divine Beast, Panterus",
    "supertype": "Creature",
    "types": ["Wind"],
    "level": 10,
    "hp": 9500,
    "rarity": "HiddenRare",
    "images": {"small": "CardImages/Creatures/Wind/Panterus2"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Divine Winged Beast",
        "trigger": "OnSummon",
        "effectText": "To summon, you must play Heavenly Hunter. Once summoned, Divine Beast Panterus gains +1000 attack for every Creature named Winged Beast ... on your Bench.",
        "usableFromBench": false,
        "prerequisites": [{"type": "PlaySpecificCard", "cardName": "Heavenly Hunter"}],
        "structuredEffects": [
          {
            "type": "ModifyStats",
            "category": "StatBoost",
            "target": "Self",
            "modification": {
              "stat": "Attack",
              "amountPerCondition": 1000,
              "condition": {"type": "CountSpecificNamedCreaturesOnBench", "creatureName": "Winged Beast"}
            }
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Tornado Pounce",
        "cost": [{"PowerType": "Wind", "count": 3}, {"PowerType": "Light", "count": 1}],
        "damage": 5000,
        "effectText": "Deal 500 damage to all of your opponent's Benched Creatures.",
        "structuredEffects": [
          {
            "type": "ConditionalEffect",
            "category": "Damage",
            "condition": {"type": "Always"},
            "trueEffects": [
              {
                "type": "DealDamageToAll",
                "target": "OpponentBenchCreature",
                "amount": 500
              }
            ],
            "falseEffects": []
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Dark", "multiplier": 3}],
    "resistances": [],
    "retreatCost": [],
    "convertedRetreatCost": 0,
    "collectionNumber": "364/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 274,
    "name": "Divine Beast, Panterus",
    "supertype": "Creature",
    "types": ["Wind"],
    "level": 10,
    "hp": 9500,
    "rarity": "Borderless",
    "images": {"small": "CardImages/Creatures/Wind/Panterus3"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Divine Winged Beast",
        "trigger": "OnSummon",
        "effectText": "To summon, you must play Heavenly Hunter. Once summoned, Divine Beast Panterus gains +1000 attack for every Creature named Winged Beast ... on your Bench.",
        "usableFromBench": false,
        "prerequisites": [{"type": "PlaySpecificCard", "cardName": "Heavenly Hunter"}],
        "structuredEffects": [
          {
            "type": "ModifyStats",
            "category": "StatBoost",
            "target": "Self",
            "modification": {
              "stat": "Attack",
              "amountPerCondition": 1000,
              "condition": {"type": "CountSpecificNamedCreaturesOnBench", "creatureName": "Winged Beast"}
            }
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Tornado Pounce",
        "cost": [{"PowerType": "Wind", "count": 3}, {"PowerType": "Light", "count": 1}],
        "damage": 5000,
        "effectText": "Deal 500 damage to all of your opponent's Benched Creatures.",
        "structuredEffects": [
          {
            "type": "ConditionalEffect",
            "category": "Damage",
            "condition": {"type": "Always"},
            "trueEffects": [
              {
                "type": "DealDamageToAll",
                "target": "OpponentBenchCreature",
                "amount": 500
              }
            ],
            "falseEffects": []
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Dark", "multiplier": 3}],
    "resistances": [],
    "retreatCost": [],
    "convertedRetreatCost": 0,
    "collectionNumber": "364/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 275,
    "name": "Dragon Tamer",
    "supertype": "Creature",
    "types": ["Wind"],
    "level": 9,
    "hp": 7000,
    "rarity": "Rare",
    "images": {"small": "CardImages/Creatures/Wind/DragonTamer1"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Dragon Bond",
        "cost": [{"PowerType": "Wind", "count": 2}],
        "damage": 4500,
        "effectText": null,
        "structuredEffects": []
      },
      {
        "name": "Dragon Call",
        "cost": [{"PowerType": "Wind", "count": 3}],
        "damage": 5500,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Earth", "multiplier": 2}],
    "resistances": [{"PowerType": "Light", "reduction": 1500}],
    "retreatCost": [{"PowerType": "Wind", "count": 2}],
    "convertedRetreatCost": 2,
    "collectionNumber": "036/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 276,
    "name": "Dragotort",
    "supertype": "Creature",
    "types": ["Wind"],
    "level": 9,
    "hp": 7500,
    "rarity": "Rare",
    "images": {"small": "CardImages/Creatures/Wind/Dragotort1"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Shell Smash",
        "cost": [{"PowerType": "Wind", "count": 2}],
        "damage": 4500,
        "effectText": null,
        "structuredEffects": []
      },
      {
        "name": "Hurricane",
        "cost": [{"PowerType": "Wind", "count": 2}, {"PowerType": "Water", "count": 1}],
        "damage": 5500,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Thunder", "multiplier": 2}],
    "resistances": [{"PowerType": "Light", "reduction": 2000}],
    "retreatCost": [{"PowerType": "Wind", "count": 2}],
    "convertedRetreatCost": 2,
    "collectionNumber": "119/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 277,
    "name": "Dragotort",
    "supertype": "Creature",
    "types": ["Wind"],
    "level": 9,
    "hp": 7500,
    "rarity": "HiddenRare",
    "images": {"small": "CardImages/Creatures/Wind/Dragotort2"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Shell Smash",
        "cost": [{"PowerType": "Wind", "count": 2}],
        "damage": 4500,
        "effectText": null,
        "structuredEffects": []
      },
      {
        "name": "Hurricane",
        "cost": [{"PowerType": "Wind", "count": 2}, {"PowerType": "Water", "count": 1}],
        "damage": 5500,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Thunder", "multiplier": 2}],
    "resistances": [{"PowerType": "Light", "reduction": 2000}],
    "retreatCost": [{"PowerType": "Wind", "count": 2}],
    "convertedRetreatCost": 2,
    "collectionNumber": "326/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 278,
    "name": "Dragotort",
    "supertype": "Creature",
    "types": ["Wind"],
    "level": 9,
    "hp": 7500,
    "rarity": "Borderless",
    "images": {"small": "CardImages/Creatures/Wind/Dragotort3"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Shell Smash",
        "cost": [{"PowerType": "Wind", "count": 2}],
        "damage": 4500,
        "effectText": null,
        "structuredEffects": []
      },
      {
        "name": "Hurricane",
        "cost": [{"PowerType": "Wind", "count": 2}, {"PowerType": "Water", "count": 1}],
        "damage": 5500,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Thunder", "multiplier": 2}],
    "resistances": [{"PowerType": "Forest", "reduction": 2000}],
    "retreatCost": [{"PowerType": "Wind", "count": 2}],
    "convertedRetreatCost": 2,
    "collectionNumber": "326/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 279,
    "name": "Ekek",
    "supertype": "Creature",
    "types": ["Wind"],
    "level": 6,
    "hp": 4500,
    "rarity": "Uncommon",
    "images": {"small": "CardImages/Creatures/Wind/Ekek1"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Death's Omen",
        "trigger": "OnDestroyedByOpponentCreature",
        "effectText": "When this Creature is destroyed by your opponent's Creature. Discard one random card from your opponent's Hand.",
        "usableFromBench": false,
        "prerequisites": [],
        "structuredEffects": [
          {
            "type": "DiscardCard",
            "category": "Disruption",
            "target": "OpponentHandRandom",
            "amount": 1
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Deathly Scream",
        "cost": [{"PowerType": "Wind", "count": 2}],
        "damage": 2500,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Forest", "multiplier": 2}],
    "resistances": [{"PowerType": "Earth", "reduction": 1000}],
    "retreatCost": [{"PowerType": "Wind", "count": 2}],
    "convertedRetreatCost": 2,
    "collectionNumber": "040/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 280,
    "name": "Griffin, the Majestic",
    "supertype": "Creature",
    "types": ["Wind"],
    "level": 9,
    "hp": 7000,
    "rarity": "Rare",
    "images": {"small": "CardImages/Creatures/Wind/GriffintheWise1"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Soaring Spirit",
        "trigger": "OnOpponentCreatureDestroyedByThis",
        "effectText": "When this Creature destroys one of your opponent's Creatures, add +2000 HP to Griffin, the Majestic's health.",
        "usableFromBench": false,
        "prerequisites": [],
        "structuredEffects": [
          {
            "type": "ModifyHP",
            "category": "Healing",
            "target": "Self",
            "amount": 2000
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Talon Strike",
        "cost": [{"PowerType": "Wind", "count": 3}],
        "damage": 5000,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Forest", "multiplier": 2}],
    "resistances": [{"PowerType": "Earth", "reduction": 1500}],
    "retreatCost": [{"PowerType": "Wind", "count": 3}],
    "convertedRetreatCost": 3,
    "collectionNumber": "147/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 281,
    "name": "Griffin, the Majestic",
    "supertype": "Creature",
    "types": ["Wind"],
    "level": 9,
    "hp": 7000,
    "rarity": "HiddenRare",
    "images": {"small": "CardImages/Creatures/Wind/GriffintheWise2"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Soaring Spirit",
        "trigger": "OnOpponentCreatureDestroyedByThis",
        "effectText": "When this Creature destroys one of your opponent's Creatures, add +2000 HP to Griffin, the Majestic's health.",
        "usableFromBench": false,
        "prerequisites": [],
        "structuredEffects": [
          {
            "type": "ModifyHP",
            "category": "Healing",
            "target": "Self",
            "amount": 2000
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Talon Strike",
        "cost": [{"PowerType": "Wind", "count": 3}],
        "damage": 5000,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Forest", "multiplier": 2}],
    "resistances": [{"PowerType": "Earth", "reduction": 1500}],
    "retreatCost": [{"PowerType": "Wind", "count": 3}],
    "convertedRetreatCost": 3,
    "collectionNumber": "353/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 282,
    "name": "Griffin, the Majestic",
    "supertype": "Creature",
    "types": ["Wind"],
    "level": 9,
    "hp": 7000,
    "rarity": "Borderless",
    "images": {"small": "CardImages/Creatures/Wind/GriffintheWise3"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Soaring Spirit",
        "trigger": "OnOpponentCreatureDestroyedByThis",
        "effectText": "When this Creature destroys one of your opponent's Creatures, add +2000 HP to Griffin, the Majestic's health.",
        "usableFromBench": false,
        "prerequisites": [],
        "structuredEffects": [
          {
            "type": "ModifyHP",
            "category": "Healing",
            "target": "Self",
            "amount": 2000
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Talon Strike",
        "cost": [{"PowerType": "Wind", "count": 3}],
        "damage": 5000,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Forest", "multiplier": 2}],
    "resistances": [{"PowerType": "Earth", "reduction": 1500}],
    "retreatCost": [{"PowerType": "Wind", "count": 3}],
    "convertedRetreatCost": 3,
    "collectionNumber": "353/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 283,
    "name": "Hatchling",
    "supertype": "Creature",
    "types": ["Wind"],
    "level": 1,
    "hp": 1000,
    "rarity": "Common",
    "images": {"small": "CardImages/Creatures/Wind/Hatchling1"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Swoop",
        "cost": [{"PowerType": "Wind", "count": 1}],
        "damage": null,
        "effectText": "Add one Power card from your Discard Pile back to your Hand. (this move cannot be used twice in a row)",
        "structuredEffects": [
          {
            "type": "ReturnCardsFromDiscardToHand",
            "target": "PlayerSelf",
            "amount": 1,
            "cardCriteria": {"cardSuperType": "Power", "anyType": true},
            "usageRestriction": "CannotBeUsedTwiceInARow"
          }
        ]
      },
      {
        "name": "Razor Wings",
        "cost": [{"PowerType": "Wind", "count": 1}],
        "damage": 500,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Forest", "multiplier": 1}],
    "resistances": [{"PowerType": "Earth", "reduction": 500}],
    "retreatCost": [{"PowerType": "Wind", "count": 1}],
    "convertedRetreatCost": 1,
    "collectionNumber": "042/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 284,
    "name": "Humbird",
    "supertype": "Creature",
    "types": ["Wind"],
    "level": 4,
    "hp": 3500,
    "rarity": "Uncommon",
    "images": {"small": "CardImages/Creatures/Wind/Humbird1"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Feather Dance",
        "cost": [{"PowerType": "Wind", "count": 1}],
        "damage": 1500,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Forest", "multiplier": 2}],
    "resistances": [{"PowerType": "Earth", "reduction": 500}],
    "retreatCost": [{"PowerType": "Wind", "count": 1}],
    "convertedRetreatCost": 1,
    "collectionNumber": "115/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 285,
    "name": "Mountain Harpy",
    "supertype": "Creature",
    "types": ["Wind"],
    "level": 7,
    "hp": 6000,
    "rarity": "Rare",
    "images": {"small": "CardImages/Creatures/Wind/MountainHarpy1"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Well Rested",
        "trigger": "OnSummon",
        "effectText": "When this Creature is summoned onto the field of play, flip the main coin. If the result is tails, add +2000 to your attack.",
        "usableFromBench": false,
        "prerequisites": [],
        "structuredEffects": [
          {
            "type": "ConditionalEffect",
            "condition": {"type": "CoinFlip", "comparison": "EqualTo", "stringValue": "Tails"},
            "trueEffects": [{"type": "ModifyStats", "target": "Self", "modification": {"stat": "Attack", "amount": 2000}}],
            "falseEffects": []
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Aerial Assault",
        "cost": [{"PowerType": "Wind", "count": 2}],
        "damage": 4000,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Forest", "multiplier": 2}],
    "resistances": [{"PowerType": "Earth", "reduction": 1000}],
    "retreatCost": [{"PowerType": "Wind", "count": 1}],
    "convertedRetreatCost": 1,
    "collectionNumber": "143/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 286,
    "name": "Mountain Harpy",
    "supertype": "Creature",
    "types": ["Wind"],
    "level": 7,
    "hp": 6000,
    "rarity": "HiddenRare",
    "images": {"small": "CardImages/Creatures/Wind/MountainHarpy2"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Well Rested",
        "trigger": "OnSummon",
        "effectText": "When this Creature is summoned onto the field of play, flip the main coin. If the result is tails, add +2000 to your attack.",
        "usableFromBench": false,
        "prerequisites": [],
        "structuredEffects": [
          {
            "type": "ConditionalEffect",
            "condition": {"type": "CoinFlip", "comparison": "EqualTo", "stringValue": "Tails"},
            "trueEffects": [{"type": "ModifyStats", "target": "Self", "modification": {"stat": "Attack", "amount": 2000}}],
            "falseEffects": []
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Aerial Assault",
        "cost": [{"PowerType": "Wind", "count": 2}],
        "damage": 4000,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Forest", "multiplier": 2}],
    "resistances": [{"PowerType": "Earth", "reduction": 1000}],
    "retreatCost": [{"PowerType": "Wind", "count": 1}],
    "convertedRetreatCost": 1,
    "collectionNumber": "352/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 287,
    "name": "Mountain Harpy",
    "supertype": "Creature",
    "types": ["Wind"],
    "level": 7,
    "hp": 6000,
    "rarity": "Borderless",
    "images": {"small": "CardImages/Creatures/Wind/MountainHarpy3"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Well Rested",
        "trigger": "OnSummon",
        "effectText": "When this Creature is summoned onto the field of play, flip the main coin. If the result is tails, add +2000 to your attack.",
        "usableFromBench": false,
        "prerequisites": [],
        "structuredEffects": [
          {
            "type": "ConditionalEffect",
            "condition": {"type": "CoinFlip", "comparison": "EqualTo", "stringValue": "Tails"},
            "trueEffects": [{"type": "ModifyStats", "target": "Self", "modification": {"stat": "Attack", "amount": 2000}}],
            "falseEffects": []
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Aerial Assault",
        "cost": [{"PowerType": "Wind", "count": 2}],
        "damage": 4000,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Forest", "multiplier": 2}],
    "resistances": [{"PowerType": "Earth", "reduction": 1000}],
    "retreatCost": [{"PowerType": "Wind", "count": 1}],
    "convertedRetreatCost": 1,
    "collectionNumber": "352/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 288,
    "name": "Pegasus",
    "supertype": "Creature",
    "types": ["Wind"],
    "level": 3,
    "hp": 3000,
    "rarity": "Common",
    "images": {"small": "CardImages/Creatures/Wind/Pegasus1"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Divine Light",
        "cost": [{"PowerType": "Wind", "count": 1}],
        "damage": null,
        "effectText": "Discard one card from your Hand and draw a new card from the top of your Deck.",
        "structuredEffects": [
          {"type": "DiscardCardFromHand", "amount": 1, "selection": "PlayerChoiceHand", "costEffect": true},
          {"type": "DrawCards", "target": "PlayerSelf", "amount": 1}
        ]
      },
      {
        "name": "Heavenly Kick",
        "cost": [{"PowerType": "Wind", "count": 1}],
        "damage": 2000,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Forest", "multiplier": 1}],
    "resistances": [{"PowerType": "Earth", "reduction": 500}],
    "retreatCost": [{"PowerType": "Wind", "count": 1}],
    "convertedRetreatCost": 1,
    "collectionNumber": "112/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 289,
    "name": "Penelope",
    "supertype": "Creature",
    "types": ["Wind"],
    "level": 2,
    "hp": 1500,
    "rarity": "Common",
    "images": {"small": "CardImages/Creatures/Wind/Penelope1"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Sprinkle Rush",
        "cost": [{"PowerType": "Wind", "count": 1}],
        "damage": 500,
        "effectText": "Automatically Confuse your opponent's Creature.",
        "structuredEffects": [
          {
            "type": "ApplyStatus",
            "category": "Debuff",
            "target": "OpponentCreatureActive",
            "status": "Confused"
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Forest", "multiplier": 1}],
    "resistances": [{"PowerType": "Earth", "reduction": 500}],
    "retreatCost": [{"PowerType": "Wind", "count": 1}],
    "convertedRetreatCost": 1,
    "collectionNumber": "085/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 290,
    "name": "Peryton",
    "supertype": "Creature",
    "types": ["Wind"],
    "level": 2,
    "hp": 1500,
    "rarity": "Common",
    "images": {"small": "CardImages/Creatures/Wind/Peryton1"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Ancient Antlers",
        "trigger": "OnSummon",
        "effectText": "When summoned onto the field of play. You and your opponent may search your Deck for any Magik card and any Spell card. Show each other and place them into your Hand.",
        "usableFromBench": false,
        "prerequisites": [],
        "structuredEffects": [
          {
            "type": "OptionalEffect",
            "target": "PlayerSelf",
            "prompt": "Search Deck for 1 Magik and 1 Spell card?",
            "effectIfChosen": [
              {"type": "SearchDeck", "target": "PlayerSelf", "searchCriteria": {"cardSuperType": "Magik"}, "amount": 1, "action": "AddToHandAndShow"},
              {"type": "SearchDeck", "target": "PlayerSelf", "searchCriteria": {"cardSuperType": "Spell"}, "amount": 1, "action": "AddToHandAndShow"}
            ]
          },
           {
            "type": "OptionalEffect",
            "target": "PlayerOpponent",
            "prompt": "Search Deck for 1 Magik and 1 Spell card?",
            "effectIfChosen": [
              {"type": "SearchDeck", "target": "PlayerOpponent", "searchCriteria": {"cardSuperType": "Magik"}, "amount": 1, "action": "AddToHandAndShow"},
              {"type": "SearchDeck", "target": "PlayerOpponent", "searchCriteria": {"cardSuperType": "Spell"}, "amount": 1, "action": "AddToHandAndShow"}
            ]
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Aerial Pounce",
        "cost": [{"PowerType": "Wind", "count": 1}],
        "damage": 1000,
        "effectText": "Remove one Power card from your opponent's Creature.",
        "structuredEffects": [
          {
            "type": "RemovePowerCard",
            "target": "OpponentCreatureActive",
            "amount": 1,
            "criteria": "Any"
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Forest", "multiplier": 1}],
    "resistances": [{"PowerType": "Earth", "reduction": 500}],
    "retreatCost": [{"PowerType": "Wind", "count": 1}],
    "convertedRetreatCost": 1,
    "collectionNumber": "006/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 291,
    "name": "Phoenic",
    "supertype": "Creature",
    "types": ["Wind"],
    "level": 8,
    "hp": 6500,
    "rarity": "Rare",
    "images": {"small": "CardImages/Creatures/Wind/Phoenic1"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Foresight",
        "trigger": "OnSummon",
        "effectText": "When Phoenic is summoned onto the field of play or Bench. Search your Deck for Phoenix, the Rising and place it in your Discard Pile.",
        "usableFromBench": true,
        "prerequisites": [],
        "structuredEffects": [
          {
            "type": "SearchDeckAndPlaceInDiscard",
            "cardName": "Phoenix, the Rising"
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Infernal Winds",
        "cost": [{"PowerType": "Wind", "count": 2}, {"PowerType": "Fire", "count": 1}],
        "damage": 4000,
        "effectText": "Flip the main coin. If the result is tails, your opponent's Creature is Burned.",
        "structuredEffects": [
          {
            "type": "ConditionalEffect",
            "category": "Debuff",
            "condition": {"type": "CoinFlip", "comparison": "EqualTo", "stringValue": "Tails"},
            "trueEffects": [{"type": "ApplyStatus", "target": "OpponentCreatureActive", "status": "Burned"}],
            "falseEffects": []
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Water", "multiplier": 2}],
    "resistances": [{"PowerType": "Thunder", "reduction": 1500}],
    "retreatCost": [{"PowerType": "Wind", "count": 2}],
    "convertedRetreatCost": 2,
    "collectionNumber": "082/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 292,
    "name": "Skwall",
    "supertype": "Creature",
    "types": ["Wind"],
    "level": 5,
    "hp": 4000,
    "rarity": "Uncommon",
    "images": {"small": "CardImages/Creatures/Wind/Skwall1"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Squawk",
        "cost": [{"PowerType": "Wind", "count": 2}, {"PowerType": "Fire", "count": 1}],
        "damage": 2000,
        "effectText": "Roll the main dice. If you roll a 1, remove one attached Power card from each of your opponent's Creatures. (this includes their Benched Creatures)",
        "structuredEffects": [
          {
            "type": "ConditionalEffect",
            "condition": {"type": "DiceRoll", "comparison": "EqualTo", "value": 1},
            "trueEffects": [{"type": "RemovePowerFromAll", "target": "OpponentAllCreatures", "amount": 1, "criteria": "AttachedAny"}],
            "falseEffects": []
          }
        ]
      },
      {
        "name": "Devasting Winds",
        "cost": [{"PowerType": "Wind", "count": 1}],
        "damage": null,
        "effectText": "Look at the top three cards of your opponent's Deck and return them in any order back to the top of their Deck. (you cannot use this move for the next turns)",
        "structuredEffects": [
          {
            "type": "LookAtOpponentDeckAndReorder",
            "numCards": 3,
            "usageRestriction": "CannotBeUsedNextTurns"
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Forest", "multiplier": 2}],
    "resistances": [{"PowerType": "Earth", "reduction": 500}],
    "retreatCost": [{"PowerType": "Wind", "count": 1}],
    "convertedRetreatCost": 1,
    "collectionNumber": "046/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 293,
    "name": "Strix Arenaeus",
    "supertype": "Creature",
    "types": ["Wind"],
    "level": 10,
    "hp": 8500,
    "rarity": "HiddenRare",
    "images": {"small": "CardImages/Creatures/Wind/StrixArenaeus2"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Wisdom of the Ancients",
        "trigger": "PassiveWhileActive",
        "effectText": "Strix Arenaeus can only be summoned by sacrificing any level 8 or higher Wind or Light type Creature. Once summoned, you may play one additional Magik card per turn while Strix Arenaeus is on the field of play.",
        "usableFromBench": false,
        "prerequisites": [{"type": "SacrificeCreature", "criteria": {"minLevel": 8, "types": ["Wind", "Light"]}}],
        "structuredEffects": [
          {
            "type": "ModifyPlayerState",
            "effect": "PlayExtraMagikCard",
            "amount": 1
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Featherweight",
        "cost": [{"PowerType": "Wind", "count": 2}, {"PowerType": "Light", "count": 2}],
        "damage": 6500,
        "effectText": "Your opponent's Creature is automatically Confused.",
        "structuredEffects": [
          {
            "type": "ApplyStatus",
            "category": "Debuff",
            "target": "OpponentCreatureActive",
            "status": "Confused"
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Dark", "multiplier": 3}],
    "resistances": [],
    "retreatCost": [],
    "convertedRetreatCost": 0,
    "collectionNumber": "382/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 294,
    "name": "Strix Arenaeus",
    "supertype": "Creature",
    "types": ["Wind"],
    "level": 10,
    "hp": 8500,
    "rarity": "Borderless",
    "images": {"small": "CardImages/Creatures/Wind/StrixArenaeus3"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Wisdom of the Ancients",
        "trigger": "PassiveWhileActive",
        "effectText": "Strix Arenaeus can only be summoned by sacrificing any level 8 or higher Wind or Light type Creature. Once summoned, you may play one additional Magik card per turn while Strix Arenaeus is on the field of play.",
        "usableFromBench": false,
        "prerequisites": [{"type": "SacrificeCreature", "criteria": {"minLevel": 8, "types": ["Wind", "Light"]}}],
        "structuredEffects": [
          {
            "type": "ModifyPlayerState",
            "effect": "PlayExtraMagikCard",
            "amount": 1
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Featherweight",
        "cost": [{"PowerType": "Wind", "count": 2}, {"PowerType": "Light", "count": 2}],
        "damage": 6500,
        "effectText": "Your opponent's Creature is automatically Confused.",
        "structuredEffects": [
          {
            "type": "ApplyStatus",
            "category": "Debuff",
            "target": "OpponentCreatureActive",
            "status": "Confused"
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Dark", "multiplier": 3}],
    "resistances": [],
    "retreatCost": [],
    "convertedRetreatCost": 0,
    "collectionNumber": "382/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 295,
    "name": "Sylph",
    "supertype": "Creature",
    "types": ["Wind"],
    "level": 1,
    "hp": 1000,
    "rarity": "Common",
    "images": {"small": "CardImages/Creatures/Wind/Sylph1"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Gust of Air",
        "trigger": "OnSummon",
        "effectText": "When this Creature is summoned onto the field of play. Look at your opponent's Deck. When finished, shuffle their Deck and return it to their side of the field.",
        "usableFromBench": false,
        "prerequisites": [],
        "structuredEffects": [
          {"type": "LookAtOpponentDeck"},
          {"type": "ShuffleOpponentDeck"}
        ]
      }
    ],
    "attacks": [
      {
        "name": "Aero Blast",
        "cost": [{"PowerType": "Wind", "count": 1}],
        "damage": 500,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Forest", "multiplier": 1}],
    "resistances": [{"PowerType": "Earth", "reduction": 500}],
    "retreatCost": [{"PowerType": "Wind", "count": 1}],
    "convertedRetreatCost": 1,
    "collectionNumber": "068/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 296,
    "name": "Tanuki",
    "supertype": "Creature",
    "types": ["Wind"],
    "level": 4,
    "hp": 3000,
    "rarity": "Uncommon",
    "images": {"small": "CardImages/Creatures/Wind/Tanuki1"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Mischievous Trickster",
        "trigger": "OnSummon",
        "effectText": "When this Creature is summoned onto the field of play. Search your Deck for any two Spell cards. Show your opponent and place them into your Hand.",
        "usableFromBench": false,
        "prerequisites": [],
        "structuredEffects": [
          {
            "type": "SearchDeck",
            "category": "CardManipulation",
            "target": "PlayerSelf",
            "searchCriteria": {"cardSuperType": "Spell"},
            "amount": 2,
            "action": "AddToHandAndShow"
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Wind Blast",
        "cost": [{"PowerType": "Wind", "count": 1}],
        "damage": 3000,
        "effectText": null,
        "structuredEffects": []
      },
      {
        "name": "Tail Winds",
        "cost": [{"PowerType": "Wind", "count": 1}],
        "damage": 2000,
        "effectText": "Flip the main coin. If the result is tails, your opponent's Creature is Paralyzed.",
        "structuredEffects": [
          {
            "type": "ConditionalEffect",
            "category": "Debuff",
            "condition": {"type": "CoinFlip", "comparison": "EqualTo", "stringValue": "Tails"},
            "trueEffects": [{"type": "ApplyStatus", "target": "OpponentCreatureActive", "status": "Paralyzed"}],
            "falseEffects": []
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Forest", "multiplier": 1}],
    "resistances": [{"PowerType": "Earth", "reduction": 500}],
    "retreatCost": [{"PowerType": "Wind", "count": 1}],
    "convertedRetreatCost": 1,
    "collectionNumber": "154/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 297,
    "name": "Win'doku",
    "supertype": "Creature",
    "types": ["Wind"],
    "level": 3,
    "hp": 3000,
    "rarity": "Common",
    "images": {"small": "CardImages/Creatures/Wind/Win’doku1"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Gust",
        "cost": [{"PowerType": "Wind", "count": 1}],
        "damage": 1000,
        "effectText": "Draw one card from the top of their Deck.",
        "structuredEffects": [
          {
            "type": "DrawCards",
            "category": "CardManipulation",
            "target": "PlayerSelf",
            "amount": 1
          }
        ]
      },
      {
        "name": "Windy Kick",
        "cost": [{"PowerType": "Wind", "count": 1}],
        "damage": 1500,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Forest", "multiplier": 1}],
    "resistances": [{"PowerType": "Earth", "reduction": 500}],
    "retreatCost": [{"PowerType": "Wind", "count": 1}],
    "convertedRetreatCost": 1,
    "collectionNumber": "058/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 298,
    "name": "Winged Beast Ra'zu",
    "supertype": "Creature",
    "types": ["Wind"],
    "level": 7,
    "hp": 6500,
    "rarity": "Rare",
    "images": {"small": "CardImages/Creatures/Wind/WingedBeastRa’zu1"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Sonic Howl",
        "cost": [{"PowerType": "Wind", "count": 1}, {"PowerType": "Thunder", "count": 1}],
        "damage": 2500,
        "effectText": "Your opponent's Creature is automatically Confused.",
        "structuredEffects": [
          {
            "type": "ApplyStatus",
            "category": "Debuff",
            "target": "OpponentCreatureActive",
            "status": "Confused"
          }
        ]
      },
      {
        "name": "Heavenly Bolt",
        "cost": [{"PowerType": "Wind", "count": 1}],
        "damage": 4000,
        "effectText": null,
        "structuredEffects": []
      }
    ],
    "weaknesses": [{"PowerType": "Forest", "multiplier": 2}],
    "resistances": [{"PowerType": "Earth", "reduction": 1000}],
    "retreatCost": [{"PowerType": "Wind", "count": 2}],
    "convertedRetreatCost": 2,
    "collectionNumber": "132/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 299,
    "name": "Winged Beast U'ru",
    "supertype": "Creature",
    "types": ["Wind"],
    "level": 3,
    "hp": 2000,
    "rarity": "Common",
    "images": {"small": "CardImages/Creatures/Wind/WingedBeastU'ru1"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Sonic Howl",
        "cost": [{"PowerType": "Wind", "count": 1}],
        "damage": 2500,
        "effectText": "Your opponent's Creature is automatically Confused.",
        "structuredEffects": [
          {
            "type": "ApplyStatus",
            "category": "Debuff",
            "target": "OpponentCreatureActive",
            "status": "Confused"
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Forest", "multiplier": 1}],
    "resistances": [{"PowerType": "Earth", "reduction": 500}],
    "retreatCost": [{"PowerType": "Wind", "count": 1}],
    "convertedRetreatCost": 1,
    "collectionNumber": "002/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 300,
    "name": "Winged Beast Wai'ku",
    "supertype": "Creature",
    "types": ["Wind"],
    "level": 5,
    "hp": 4500,
    "rarity": "Uncommon",
    "images": {"small": "CardImages/Creatures/Wind/WingedBeastWai’ku1"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Sonic Howl",
        "cost": [{"PowerType": "Wind", "count": 1}],
        "damage": 2500,
        "effectText": "Your opponent's Creature is automatically Confused.",
        "structuredEffects": [
          {
            "type": "ApplyStatus",
            "category": "Debuff",
            "target": "OpponentCreatureActive",
            "status": "Confused"
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Forest", "multiplier": 2}],
    "resistances": [{"PowerType": "Earth", "reduction": 1000}],
    "retreatCost": [{"PowerType": "Wind", "count": 1}],
    "convertedRetreatCost": 1,
    "collectionNumber": "028/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 301,
    "name": "Winged Beast Wai'ku",
    "supertype": "Creature",
    "types": ["Wind"],
    "level": 5,
    "hp": 4500,
    "rarity": "HiddenRare",
    "images": {"small": "CardImages/Creatures/Wind/WingedBeastWai’ku2"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Sonic Howl",
        "cost": [{"PowerType": "Wind", "count": 1}],
        "damage": 2500,
        "effectText": "Your opponent's Creature is automatically Confused.",
        "structuredEffects": [
          {
            "type": "ApplyStatus",
            "category": "Debuff",
            "target": "OpponentCreatureActive",
            "status": "Confused"
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Forest", "multiplier": 2}],
    "resistances": [{"PowerType": "Earth", "reduction": 1000}],
    "retreatCost": [{"PowerType": "Wind", "count": 1}],
    "convertedRetreatCost": 1,
    "collectionNumber": "343/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 302,
    "name": "Winged Beast Wai'ku",
    "supertype": "Creature",
    "types": ["Wind"],
    "level": 5,
    "hp": 4500,
    "rarity": "Borderless",
    "images": {"small": "CardImages/Creatures/Wind/WingedBeastWai’ku3"},
    "setCode": "MC01",
    "abilities": [],
    "attacks": [
      {
        "name": "Sonic Howl",
        "cost": [{"PowerType": "Wind", "count": 1}],
        "damage": 2500,
        "effectText": "Your opponent's Creature is automatically Confused.",
        "structuredEffects": [
          {
            "type": "ApplyStatus",
            "category": "Debuff",
            "target": "OpponentCreatureActive",
            "status": "Confused"
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Forest", "multiplier": 2}],
    "resistances": [{"PowerType": "Earth", "reduction": 1000}],
    "retreatCost": [{"PowerType": "Wind", "count": 1}],
    "convertedRetreatCost": 1,
    "collectionNumber": "343/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 303,
    "name": "Zombified Dragon",
    "supertype": "Creature",
    "types": ["Wind"],
    "level": 10,
    "hp": 8000,
    "rarity": "UltraRare",
    "images": {"small": "CardImages/Creatures/Wind/ZombifiedDragon1"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Unholy Resurrection",
        "trigger": "OnSummon",
        "effectText": "To summon, you must sacrifice Dragon Tamer. When Zombified Dragon is summoned, you may play one additional Magik card per turn.",
        "usableFromBench": false,
        "prerequisites": [{"type": "SacrificeSpecificCreature", "creatureName": "Dragon Tamer"}],
        "structuredEffects": [
          {
            "type": "ModifyPlayerState",
            "effect": "PlayExtraMagikCard",
            "amount": 1
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Necrotic Claws",
        "cost": [{"PowerType": "Wind", "count": 4}],
        "damage": 6500,
        "effectText": "Roll the main dice. If the result is even, Zombified Dragon gains +2000 HP. If odd, Zombified Dragon loses -2000 HP.",
        "structuredEffects": [
          {
            "type": "ConditionalEffect",
            "condition": {"type": "DiceRoll", "comparison": "IsEven"},
            "trueEffects": [{"type": "ModifyHP", "target": "Self", "amount": 2000, "category": "Healing"}],
            "falseEffects": [{"type": "ModifyHP", "target": "Self", "amount": -2000, "category": "Damage"}]
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Forest", "multiplier": 3}],
    "resistances": [],
    "retreatCost": [],
    "convertedRetreatCost": 0,
    "collectionNumber": "161/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 304,
    "name": "Zombified Dragon",
    "supertype": "Creature",
    "types": ["Wind"],
    "level": 10,
    "hp": 8000,
    "rarity": "HiddenRare",
    "images": {"small": "CardImages/Creatures/Wind/ZombifiedDragon2"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Unholy Resurrection",
        "trigger": "OnSummon",
        "effectText": "To summon, you must sacrifice Dragon Tamer. When Zombified Dragon is summoned, you may play one additional Magik card per turn.",
        "usableFromBench": false,
        "prerequisites": [{"type": "SacrificeSpecificCreature", "creatureName": "Dragon Tamer"}],
        "structuredEffects": [
          {
            "type": "ModifyPlayerState",
            "effect": "PlayExtraMagikCard",
            "amount": 1
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Necrotic Claws",
        "cost": [{"PowerType": "Wind", "count": 4}],
        "damage": 6500,
        "effectText": "Roll the main dice. If the result is even, Zombified Dragon gains +2000 HP. If odd, Zombified Dragon loses -2000 HP.",
        "structuredEffects": [
          {
            "type": "ConditionalEffect",
            "condition": {"type": "DiceRoll", "comparison": "IsEven"},
            "trueEffects": [{"type": "ModifyHP", "target": "Self", "amount": 2000, "category": "Healing"}],
            "falseEffects": [{"type": "ModifyHP", "target": "Self", "amount": -2000, "category": "Damage"}]
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Forest", "multiplier": 3}],
    "resistances": [],
    "retreatCost": [],
    "convertedRetreatCost": 0,
    "collectionNumber": "367/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 305,
    "name": "Zombified Dragon",
    "supertype": "Creature",
    "types": ["Wind"],
    "level": 10,
    "hp": 8000,
    "rarity": "Borderless",
    "images": {"small": "CardImages/Creatures/Wind/ZombifiedDragon3"},
    "setCode": "MC01",
    "abilities": [
      {
        "name": "Unholy Resurrection",
        "trigger": "OnSummon",
        "effectText": "To summon, you must sacrifice Dragon Tamer. When Zombified Dragon is summoned, you may play one additional Magik card per turn.",
        "usableFromBench": false,
        "prerequisites": [{"type": "SacrificeSpecificCreature", "creatureName": "Dragon Tamer"}],
        "structuredEffects": [
          {
            "type": "ModifyPlayerState",
            "effect": "PlayExtraMagikCard",
            "amount": 1
          }
        ]
      }
    ],
    "attacks": [
      {
        "name": "Necrotic Claws",
        "cost": [{"PowerType": "Wind", "count": 4}],
        "damage": 6500,
        "effectText": "Roll the main dice. If the result is even, Zombified Dragon gains +2000 HP. If odd, Zombified Dragon loses -2000 HP.",
        "structuredEffects": [
          {
            "type": "ConditionalEffect",
            "condition": {"type": "DiceRoll", "comparison": "IsEven"},
            "trueEffects": [{"type": "ModifyHP", "target": "Self", "amount": 2000, "category": "Healing"}],
            "falseEffects": [{"type": "ModifyHP", "target": "Self", "amount": -2000, "category": "Damage"}]
          }
        ]
      }
    ],
    "weaknesses": [{"PowerType": "Forest", "multiplier": 3}],
    "resistances": [],
    "retreatCost": [],
    "convertedRetreatCost": 0,
    "collectionNumber": "367/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 306,
    "name": "Abandoned Ship",
    "supertype": "Secret",
    "subtypes": ["Magik"],
    "rarity": "Rare",
    "images": {"small": "CardImages/Secrets/SECRET-M-RanntheWretched1"},
    "setCode": "MC01",
    "effectText": "You can only play this Magik card if you have a level 8 or higher Water Creature on the active field. Sacrifice the level 8 Creature and discard two Water Power cards from your Hand to Special Summon Rann, the Wretched from your Hand or Deck.",
    "structuredEffects": [
      {
        "type": "ConditionalSummon",
        "category": "Summoning",
        "target": "PlayerSelf",
        "condition": {
            "type": "And",
            "conditions": [
                {"type": "ActiveCreatureCheck", "minLevel": 8, "powerType": "Water"}
            ]
        },
        "costs": [
            {"type": "SacrificeActiveCreature", "minLevel": 8, "powerType": "Water"},
            {"type": "DiscardCardFromHand", "cardType": "Power", "powerType": "Water", "amount": 2}
        ],
        "summonTarget": {"name": "Rann, the Wretched", "from": ["Hand", "Deck"]}
      }
    ],
    "ruleText": "You may play only one Magik card during your turn (before your attack)",
    "collectionNumber": "212/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 307,
    "name": "Abandoned Ship",
    "supertype": "Secret",
    "subtypes": ["Magik"],
    "rarity": "HiddenRare",
    "images": {"small": "CardImages/Secrets/SECRET-M-RanntheWretched2"},
    "setCode": "MC01",
    "effectText": "You can only play this Magik card if you have a level 8 or higher Water Creature on the active field. Sacrifice the level 8 Creature and discard two Water Power cards from your Hand to Special Summon Rann, the Wretched from your Hand or Deck.",
    "structuredEffects": [
      {
        "type": "ConditionalSummon",
        "category": "Summoning",
        "target": "PlayerSelf",
        "condition": {
            "type": "And",
            "conditions": [
                {"type": "ActiveCreatureCheck", "minLevel": 8, "powerType": "Water"}
            ]
        },
        "costs": [
            {"type": "SacrificeActiveCreature", "minLevel": 8, "powerType": "Water"},
            {"type": "DiscardCardFromHand", "cardType": "Power", "powerType": "Water", "amount": 2}
        ],
        "summonTarget": {"name": "Rann, the Wretched", "from": ["Hand", "Deck"]}
      }
    ],
    "ruleText": "You may play only one Magik card during your turn (before your attack)",
    "collectionNumber": "319/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 308,
    "name": "Abandoned Ship",
    "supertype": "Secret",
    "subtypes": ["Magik"],
    "rarity": "Borderless",
    "images": {"small": "CardImages/Secrets/SECRET-M-RanntheWretched3"},
    "setCode": "MC01",
    "effectText": "You can only play this Magik card if you have a level 8 or higher Water Creature on the active field. Sacrifice the level 8 Creature and discard two Water Power cards from your Hand to Special Summon Rann, the Wretched from your Hand or Deck.",
    "structuredEffects": [
      {
        "type": "ConditionalSummon",
        "category": "Summoning",
        "target": "PlayerSelf",
        "condition": {
            "type": "And",
            "conditions": [
                {"type": "ActiveCreatureCheck", "minLevel": 8, "powerType": "Water"}
            ]
        },
        "costs": [
            {"type": "SacrificeActiveCreature", "minLevel": 8, "powerType": "Water"},
            {"type": "DiscardCardFromHand", "cardType": "Power", "powerType": "Water", "amount": 2}
        ],
        "summonTarget": {"name": "Rann, the Wretched", "from": ["Hand", "Deck"]}
      }
    ],
    "ruleText": "You may play only one Magik card during your turn (before your attack)",
    "collectionNumber": "319/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 309,
    "name": "Adaptive Recall",
    "supertype": "Secret",
    "subtypes": ["Magik"],
    "rarity": "Uncommon",
    "images": {"small": "CardImages/Secrets/SECRET-M-AdaptiveRecall"},
    "setCode": "MC01",
    "effectText": "Return any two level 1-5 Creature cards from your Discard Pile back to your Hand.",
    "structuredEffects": [
      {
        "type": "ReturnCardsFromDiscardToHand",
        "category": "CardManipulation",
        "target": "PlayerSelf",
        "amount": 2,
        "cardCriteria": {"cardSuperType": "Creature", "minLevel": 1, "maxLevel": 5}
      }
    ],
    "ruleText": "You may play only one Magik card during your turn (before your attack)",
    "collectionNumber": "309/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 310,
    "name": "Aetheric Replenishment",
    "supertype": "Secret",
    "subtypes": ["Magik"],
    "rarity": "Rare",
    "images": {"small": "CardImages/Secrets/SECRET-M-AethericReplenishment"},
    "setCode": "MC01",
    "effectText": "Choose any number of cards in your Hand and shuffle them back into your Deck. Then, draw the same number of cards from the top of your Deck.",
    "structuredEffects": [
      {
        "type": "ShuffleHandAndRedraw",
        "category": "CardManipulation",
        "target": "PlayerSelf"
      }
    ],
    "ruleText": "You may play only one Magik card during your turn (before your attack)",
    "collectionNumber": "307/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 311,
    "name": "Aquatic Conversion",
    "supertype": "Secret",
    "subtypes": ["Magik"],
    "rarity": "Uncommon",
    "images": {"small": "CardImages/Secrets/SECRET-M-AquaticConversion"},
    "setCode": "MC01",
    "effectText": "Change the type of your active Creature to Water. This Creature can now use any Water Power card regardless of its original type. (attach this card to the Creature until the Creature is destroyed)",
    "structuredEffects": [
      {
        "type": "ChangeCreatureTypeAndAttach",
        "category": "Transformation",
        "target": "OwnActiveCreature",
        "newType": "Water",
        "canUsePowerType": "Water",
        "attachmentDuration": "UntilDestroyed"
      }
    ],
    "ruleText": "You may play only one Magik card during your turn (before your attack)",
    "collectionNumber": "302/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 312,
    "name": "Astral Regeneration",
    "supertype": "Secret",
    "subtypes": ["Magik"],
    "rarity": "Common",
    "images": {"small": "CardImages/Secrets/SECRET-M-AstralRegeneration"},
    "setCode": "MC01",
    "effectText": "Choose any two Power cards that are in your Discard Pile and add them to your Hand.",
    "structuredEffects": [
      {
        "type": "ReturnCardsFromDiscardToHand",
        "category": "CardManipulation",
        "target": "PlayerSelf",
        "amount": 2,
        "cardCriteria": {"cardSuperType": "Power", "anyType": true}
      }
    ],
    "ruleText": "You may play only one Magik card during your turn (before your attack)",
    "collectionNumber": "301/311",
    "illustrator": "Mystik Creatures"
  },
{
    "id": 313,
    "name": "Blessings from Beyond",
    "supertype": "Secret",
    "subtypes": ["Magik"],
    "rarity": "Rare",
    "images": {"small": "CardImages/Secrets/SECRET-M-DivineBlessing"},
    "setCode": "MC01",
    "effectText": "This card increases your active Creature's attack by +2000 and adds +2500 HP to your Creature's health, however, the Creature cannot attack or use any abilities for this turn. (this Magik lasts until the Creature is destroyed. Only one Blessings from the Beyond card may be in your Deck and cannot be retrieved from the Discard",
    "structuredEffects": [
      {
        "type": "ApplyFieldEffect",
        "category": "Buff",
        "target": "OwnActiveCreature",
        "attachmentDurationRule": "UntilDestroyed",
        "subEffects": [
          {
            "type": "ModifyStats",
            "category": "StatModification",
            "target": "OwnActiveCreature",
            "statToModify": "Attack",
            "amount": 2000
          },
          {
            "type": "ModifyStats",
            "category": "StatModification",
            "target": "OwnActiveCreature",
            "statToModify": "HP",
            "amount": 2500
          }
        ]
      },
      {
        "type": "ApplyTemporaryRestriction",
        "category": "Disruption",
        "target": "OwnActiveCreature",
        "stringParam": "CannotAttackOrUseAbilities",
        "duration": 1
      }
    ],
    "ruleText": "You may play only one Magik card during your turn (before your attack)",
    "collectionNumber": "288/311",
    "illustrator": "Mystik Creatures",
    "deckLimit": 1,
    "cannotRetrieveFromDiscard": true
  },
  {
    "id": 314,
    "name": "Blinding Lights",
    "supertype": "Secret",
    "subtypes": ["Magik"],
    "rarity": "Rare",
    "images": {"small": "CardImages/Secrets/SECRET-M-BlindingLights"},
    "setCode": "MC01",
    "effectText": "Once activated, this Magik remains on the field for three full turns. At the end of your third turn, send this card to the Discard Pile. While this card is active, your opponent cannot attack. (you may not play any other Magik or Spell card blocking your opponent't moves immediately after this card's effects wear off)",
    "structuredEffects": [
      {
        "type": "ApplyFieldEffect",
        "duration": 3,
        "selfDestructsToDiscard": true,
        "subEffects": [
          { 
            "type": "PreventAttack", 
            "target": "AllOpponentCreatures", 
            "duration": 1 
          }
        ]
      }
    ],
    "ruleText": "You may play only one Magik card during your turn (before your attack)",
    "collectionNumber": "300/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 315,
    "name": "Calming Breeze",
    "supertype": "Secret",
    "subtypes": ["Magik"],
    "rarity": "Rare",
    "images": {"small": "CardImages/Secrets/SECRET-M-HealingBreeze"},
    "setCode": "MC01",
    "effectText": "Boost the health of all of your Creatures, Active and on the Bench, by +1000 HP. (this Magik can only be used if at least one of your Creatures has taken damage)",
    "structuredEffects": [
      {
        "type": "HealAllFriendly",
        "category": "Healing",
        "target": "PlayerSelf",
        "amount": 1000,
        "condition": {"type": "AnyFriendlyCreatureDamaged"}
      }
    ],
    "ruleText": "You may play only one Magik card during your turn (before your attack)",
    "collectionNumber": "256/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 316,
    "name": "Celestial Storm",
    "supertype": "Secret",
    "subtypes": ["Magik"],
    "rarity": "Uncommon",
    "images": {"small": "CardImages/Secrets/SECRET-M-CelestialStorm"},
    "setCode": "MC01",
    "effectText": "Change the type of your active Creature to Thunder. This Creature can now use any Thunder Power card regardless of its original type. (attach this card to the Creature until the Creature is destroyed)",
    "structuredEffects": [
      {
        "type": "ChangeCreatureTypeAndAttach",
        "category": "Transformation",
        "target": "OwnActiveCreature",
        "newType": "Thunder",
        "canUsePowerType": "Thunder",
        "attachmentDuration": "UntilDestroyed"
      }
    ],
    "ruleText": "You may play only one Magik card during your turn (before your attack)",
    "collectionNumber": "298/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 317,
    "name": "Chrono Exchange",
    "supertype": "Secret",
    "subtypes": ["Magik"],
    "rarity": "Common",
    "images": {"small": "CardImages/Secrets/SECRET-M-ChronoExchange"},
    "setCode": "MC01",
    "effectText": "Choose up to three cards in your Hand and shuffle them back into your Deck. Then, draw the same number of cards from the top of your Deck.",
    "structuredEffects": [
      {
        "type": "ShuffleHandAndRedraw",
        "target": "PlayerSelf"
      }
    ],
    "ruleText": "You may play only one Magik card during your turn (before your attack)",
    "collectionNumber": "297/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 318,
    "name": "Corrupt Evolution",
    "supertype": "Secret",
    "subtypes": ["Magik"],
    "rarity": "Uncommon",
    "images": {"small": "CardImages/Secrets/SECRET-M-CorruptEvolution"},
    "setCode": "MC01",
    "effectText": "Change the type of your active Creature to Dark. This Creature can now use any Dark Power card regardless of its original type. (attach this card to the Creature until the Creature is destroyed)",
    "structuredEffects": [
      {
        "type": "ChangeCreatureTypeAndAttach",
        "category": "Transformation",
        "target": "OwnActiveCreature",
        "newType": "Dark",
        "canUsePowerType": "Dark",
        "attachmentDuration": "UntilDestroyed"
      }
    ],
    "ruleText": "You may play only one Magik card during your turn (before your attack)",
    "collectionNumber": "296/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 319,
    "name": "Deck Diver",
    "supertype": "Secret",
    "subtypes": ["Magik"],
    "rarity": "Rare",
    "images": {"small": "CardImages/Secrets/SECRET-M-DeckDiver"},
    "setCode": "MC01",
    "effectText": "Look at the top five cards of your Deck. Return them back to the top of your Deck in any order. (you do not need to reshuffle you deck)",
    "structuredEffects": [
      {
        "type": "LookAtTopCardsOfDeck",
        "target": "PlayerSelf",
        "amount": 5,
        "reorderCount": 5,
        "allowPlayerChoice": true
      }
    ],
    "ruleText": "You may play only one Magik card during your turn (before your attack)",
    "collectionNumber": "295/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 320,
    "name": "Devouring Power",
    "supertype": "Secret",
    "subtypes": ["Magik"],
    "rarity": "Uncommon",
    "images": {"small": "CardImages/Secrets/SECRET-M-DevouringPower"},
    "setCode": "MC01",
    "effectText": "This Magik card heals your active Creature's HP equal to the number of Fire, Water, Thunder or Dark Power cards attached to it x500.",
    "structuredEffects": [
      {
        "type": "HealBasedOnAttachedPower",
        "target": "OwnActiveCreature",
        "filterPowerTypes": ["Fire", "Water", "Thunder", "Dark"],
        "amount": 500
      }
    ],
    "ruleText": "You may play only one Magik card during your turn (before your attack)",
    "collectionNumber": "294/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 321,
    "name": "Dimensional Reconfiguration",
    "supertype": "Secret",
    "subtypes": ["Magik"],
    "rarity": "Uncommon",
    "images": {"small": "CardImages/Secrets/SECRET-M-DimensionalReconfiguration"},
    "setCode": "MC01",
    "effectText": "Choose up to three cards in your Hand and send them to the Discard Pile. Then, draw the same number of cards you discarded from the top of your Deck.",
    "structuredEffects": [
      {
        "type": "SequentialEffect",
        "subEffects": [
          {"type": "DiscardAndDraw_DiscardPhase", "amount": 3},
          {"type": "DiscardAndDraw_DrawPhase", "amount": 3}
        ]
      }
    ],
    "ruleText": "You may play only one Magik card during your turn (before your attack)",
    "collectionNumber": "291/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 322,
    "name": "Divine Transformation",
    "supertype": "Secret",
    "subtypes": ["Magik"],
    "rarity": "Uncommon",
    "images": {"small": "CardImages/Secrets/SECRET-M-DivineTransformation"},
    "setCode": "MC01",
    "effectText": "Change the type of your active Creature to Light. This Creature can now use any Light Power card regardless of its original type. (attach this card to the Creature until the Creature is destroyed)",
    "structuredEffects": [
      {
        "type": "ChangeCreatureTypeAndAttach",
        "category": "Transformation",
        "target": "OwnActiveCreature",
        "newType": "Light",
        "canUsePowerType": "Light",
        "attachmentDuration": "UntilDestroyed"
      }
    ],
    "ruleText": "You may play only one Magik card during your turn (before your attack)",
    "collectionNumber": "287/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 323,
    "name": "Double Strike",
    "supertype": "Secret",
    "subtypes": ["Magik"],
    "rarity": "Common",
    "images": {"small": "CardImages/Secrets/SECRET-M-DoubleStrike"},
    "setCode": "MC01",
    "effectText": "Your Creature gains the Ability, Double Strike, allowing it to attack twice for this turn only. (this Magik card can only be used on a level 1-3 Creature)",
    "structuredEffects": [
      {
        "type": "GrantExtraAttack",
        "target": "PlayerSelf",
        "duration": 1,
        "condition": {"type": "TargetCreatureLevel", "minLevel": 1, "maxLevel": 3, "target": "OwnActiveCreature"}
      }
    ],
    "ruleText": "You may play only one Magik card during your turn (before your attack)",
    "collectionNumber": "283/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 324,
    "name": "Earth's Blessing",
    "supertype": "Secret",
    "subtypes": ["Magik"],
    "rarity": "Rare",
    "images": {"small": "CardImages/Secrets/SECRET-M-EarthsBlessing"},
    "setCode": "MC01",
    "effectText": "Discard any Creature on your Bench and increase your active Creature's HP by +2000.",
    "structuredEffects": [
      {
        "type": "DiscardBenchCreatureAndHealActive",
        "category": "Healing",
        "target": "PlayerSelf",
        "healAmount": 2000
      }
    ],
    "ruleText": "You may play only one Magik card during your turn (before your attack)",
    "collectionNumber": "282/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 325,
    "name": "Elemental Infusion",
    "supertype": "Secret",
    "subtypes": ["Magik"],
    "rarity": "Rare",
    "images": {"small": "CardImages/Secrets/SECRET-M-ElementalInfusion"},
    "setCode": "MC01",
    "effectText": "Change the type of your active Creature to any type of your choosing. This Creature can only use Power cards of the typing declared regardless of its original type. (attach this card to the Creature until the Creature is destroyed)",
    "structuredEffects": [
      {
        "type": "ChangeCreatureTypeToChosenAndAttach",
        "category": "Transformation",
        "target": "OwnActiveCreature",
        "attachmentDuration": "UntilDestroyed"
      }
    ],
    "ruleText": "You may play only one Magik card during your turn (before your attack)",
    "collectionNumber": "280/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 326,
    "name": "Elemental Restoration",
    "supertype": "Secret",
    "subtypes": ["Magik"],
    "rarity": "Uncommon",
    "images": {"small": "CardImages/Secrets/SECRET-M-ElementalRestoration"},
    "setCode": "MC01",
    "effectText": "Choose one of your Creatures and heal it by +1000 HP.",
    "structuredEffects": [
      {
        "type": "HealTargetCreature",
        "category": "Healing",
        "target": "PlayerChoiceFriendlyCreature",
        "amount": 1000
      }
    ],
    "ruleText": "You may play only one Magik card during your turn (before your attack)",
    "collectionNumber": "276/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 327,
    "name": "Energetic Plains",
    "supertype": "Secret",
    "subtypes": ["Magik"], 
    "rarity": "Uncommon",
    "images": {"small": "CardImages/Secrets/SECRET-M-EnergeticPlains"},
    "setCode": "MC01",
    "effectText": "Both Players Active Creature gains +1000 attack for their next two turns. (this card remains on the field until the end of your opponent's second turn)",
    "structuredEffects": [
      {
        "type": "ApplyFieldEffect",
        "duration": 2,
        "selfDestructsToDiscard": true,
        "subEffects": [
          { 
            "type": "ModifyStats",
            "statToModify": "Attack",
            "amount": 1000,
            "target": "AnyActiveCreature"
          }
        ]
      }
    ],
    "ruleText": "You may play only one Magik card during your turn (before your attack)",
    "collectionNumber": "274/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 328,
    "name": "Energy Transfer",
    "supertype": "Secret",
    "subtypes": ["Magik"],
    "rarity": "Common",
    "images": {"small": "CardImages/Secrets/SECRET-M-energyTransfer"},
    "setCode": "MC01",
    "effectText": "Choose a Power card attached to one of your Creatures and attach it to another one of your Creatures, either on the Bench or active field of play.",
    "structuredEffects": [
      {
        "type": "MoveAttachedPowerCard",
        "category": "ResourceManagement",
        "target": "PlayerSelf"
      }
    ],
    "ruleText": "You may play only one Magik card during your turn (before your attack)",
    "collectionNumber": "273/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 329,
    "name": "Ethereal Enhancement",
    "supertype": "Secret",
    "subtypes": ["Magik"],
    "rarity": "Common",
    "images": {"small": "CardImages/Secrets/SECRET-M-EtherealEnhancement"},
    "setCode": "MC01",
    "effectText": "Discard one card from your Hand, then search your Deck for one Power card.",
    "structuredEffects": [
      {
        "type": "SequentialEffect",
        "subEffects": [
          {
            "type": "DiscardCardsFromHand",
            "target": "PlayerSelf",
            "amount": 1,
            "discardMethod": "PlayerChooses"
          },
          {
            "type": "SearchDeck",
            "target": "PlayerSelf",
            "amount": 1,
            "cardSuperTypeToSearch": "Power",
            "stringParam": "AddToHandAndShow"
          }
        ]
      }
    ],
    "ruleText": "You may play only one Magik card during your turn (before your attack)",
    "collectionNumber": "270/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 330,
    "name": "Flames of Bah'tu",
    "supertype": "Secret",
    "subtypes": ["Magik"],
    "rarity": "Rare",
    "images": {"small": "CardImages/Secrets/SECRET-M-FlamesofBah'tu1"},
    "setCode": "MC01",
    "effectText": "You can only play this Magik card if you have a level 8 or higher Fire Creature on the active field and three or more Fire Creatures on your Bench. Sacrifice the level 8 Creature to Special Summon Ignimia from your Hand or Deck.",
    "structuredEffects": [
      {
        "type": "ConditionalSummon",
        "category": "Summoning",
        "target": "PlayerSelf",
        "condition": {
            "type": "And",
            "conditions": [
                {"type": "ActiveCreatureCheck", "minLevel": 8, "powerType": "Fire"},
                {"type": "BenchCreatureCount", "powerType": "Fire", "minCount": 3}
            ]
        },
        "costs": [
            {"type": "SacrificeActiveCreature", "minLevel": 8, "powerType": "Fire"}
        ],
        "summonTarget": {"name": "Ignimia", "from": ["Hand", "Deck"]}
      }
    ],
    "ruleText": "You may play only one Magik card during your turn (before your attack)",
    "collectionNumber": "269/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 331,
    "name": "Flames of Bah'tu",
    "supertype": "Secret",
    "subtypes": ["Magik"],
    "rarity": "HiddenRare",
    "images": {"small": "CardImages/Secrets/SECRET-M-FlamesofBah'tu2"},
    "setCode": "MC01",
    "effectText": "You can only play this Magik card if you have a level 8 or higher Fire Creature on the active field and three or more Fire Creatures on your Bench. Sacrifice the level 8 Creature to Special Summon Ignimia from your Hand or Deck.",
    "structuredEffects": [
      {
        "type": "ConditionalSummon",
        "category": "Summoning",
        "target": "PlayerSelf",
        "condition": {
            "type": "And",
            "conditions": [
                {"type": "ActiveCreatureCheck", "minLevel": 8, "powerType": "Fire"},
                {"type": "BenchCreatureCount", "powerType": "Fire", "minCount": 3}
            ]
        },
        "costs": [
            {"type": "SacrificeActiveCreature", "minLevel": 8, "powerType": "Fire"}
        ],
        "summonTarget": {"name": "Ignimia", "from": ["Hand", "Deck"]}
      }
    ],
    "ruleText": "You may play only one Magik card during your turn (before your attack)",
    "collectionNumber": "316/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 332,
    "name": "Flames of Bah'tu",
    "supertype": "Secret",
    "subtypes": ["Magik"],
    "rarity": "Borderless",
    "images": {"small": "CardImages/Secrets/SECRET-M-FlamesofBah'tu3"},
    "setCode": "MC01",
    "effectText": "You can only play this Magik card if you have a level 8 or higher Fire Creature on the active field and three or more Fire Creatures on your Bench. Sacrifice the level 8 Creature to Special Summon Ignimia from your Hand or Deck.",
    "structuredEffects": [
      {
        "type": "ConditionalSummon",
        "category": "Summoning",
        "target": "PlayerSelf",
        "condition": {
            "type": "And",
            "conditions": [
                {"type": "ActiveCreatureCheck", "minLevel": 8, "powerType": "Fire"},
                {"type": "BenchCreatureCount", "powerType": "Fire", "minCount": 3}
            ]
        },
        "costs": [
            {"type": "SacrificeActiveCreature", "minLevel": 8, "powerType": "Fire"}
        ],
        "summonTarget": {"name": "Ignimia", "from": ["Hand", "Deck"]}
      }
    ],
    "ruleText": "You may play only one Magik card during your turn (before your attack)",
    "collectionNumber": "316/311",
    "illustrator": "Mystik Creatures"
  },
{
  "id": 333,
  "name": "Forest's Fury",
  "supertype": "Secret",
  "subtypes": ["Magik"],
  "rarity": "Rare",
  "images": {"small": "CardImages/Secrets/SECRET-M-ForestsFury"},
  "setCode": "MC01",
  "effectText": "Draw one card from the top of your Deck. Show your opponent. If the card is a Power card, your Creature gains +1500 to its attack. If the card is a Secret card, boost your Creature's HP by +1500. This Magik does nothing if you draw a Creature card.",
  "structuredEffects": [
    {
      "type": "SequentialEffect",
      "subEffects": [
        {
          "type": "DrawCards",
          "target": "PlayerSelf",
          "amount": 1
        },
        {
          "type": "ConditionalEffect",
          "condition": {
            "type": "LastDrawnCardIsType",
            "superTypeParam": "Power"
          },
          "trueEffects": [
            {
              "type": "ModifyStats",
              "statToModify": "Attack",
              "amount": 1500,
              "target": "OwnActiveCreature"
            }
          ]
        },
        {
          "type": "ConditionalEffect",
          "condition": {
            "type": "LastDrawnCardIsType",
            "superTypeParam": "Secret"
          },
          "trueEffects": [
            {
              "type": "ModifyStats",
              "statToModify": "HP",
              "amount": 1500,
              "target": "OwnActiveCreature"
            }
          ]
        }
      ]
    }
  ],
  "ruleText": "You may play only one Magik card during your turn (before your attack)",
  "collectionNumber": "266/311",
  "illustrator": "Mystik Creatures"
},
  {
    "id": 334,
    "name": "Fortune's Favor",
    "supertype": "Secret",
    "subtypes": ["Magik"],
    "rarity": "Uncommon",
    "images": {"small": "CardImages/Secrets/SECRET-M-FortunesFavor"},
    "setCode": "MC01",
    "effectText": "Draw three cards from the top of your Deck.",
    "structuredEffects": [
      {
        "type": "DrawCards",
        "category": "CardManipulation",
        "target": "PlayerSelf",
        "amount": 3
      }
    ],
    "ruleText": "You may play only one Magik card during your turn (before your attack)",
    "collectionNumber": "262/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 335,
    "name": "Hand Refresh",
    "supertype": "Secret",
    "subtypes": ["Magik"],
    "rarity": "Common",
    "images": {"small": "CardImages/Secrets/SECRET-M-HandRefresh"},
    "setCode": "MC01",
    "effectText": "Shuffle three cards from your Hand back into your Deck. Then, draw three new cards from the top of your Deck.",
    "structuredEffects": [
      {
        "type": "ShuffleHandAndRedraw",
        "category": "CardManipulation",
        "target": "PlayerSelf",
        "cardsToShuffle": 3,
        "cardsToDraw": 3
      }
    ],
    "ruleText": "You may play only one Magik card during your turn (before your attack)",
    "collectionNumber": "260/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 336,
    "name": "Healing Spring",
    "supertype": "Secret",
    "subtypes": ["Magik"],
    "rarity": "Uncommon",
    "images": {"small": "CardImages/Secrets/SECRET-M-HealingSpring"},
    "setCode": "MC01",
    "effectText": "Restore your Active Creature's health to its original base HP value.",
    "structuredEffects": [
      {
        "type": "HealToMax",
        "category": "Healing",
        "target": "OwnActiveCreature",
        "amount": "FullToBaseHP"
      }
    ],
    "ruleText": "You may play only one Magik card during your turn (before your attack)",
    "collectionNumber": "255/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 337,
    "name": "Health Payment",
    "supertype": "Secret",
    "subtypes": ["Magik"],
    "rarity": "Rare",
    "images": {"small": "CardImages/Secrets/SECRET-M-HealingAura"},
    "setCode": "MC01",
    "effectText": "Discard one Creature on your Bench. Then, heal your active Creature by +2000 HP and remove any Status Effects it may have. (this Magik can only heal your Creature, damage must have been taken in order to play this card)",
    "structuredEffects": [
      {
        "type": "DiscardBenchAndHealActiveWithCleanse",
        "category": "Healing",
        "target": "PlayerSelf",
        "healAmount": 2000,
        "condition": {"type": "TargetCreatureDamaged", "targetCreature": "OwnActiveCreature"}
      }
    ],
    "ruleText": "You may play only one Magik card during your turn (before your attack)",
    "collectionNumber": "258/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 338,
    "name": "Infernal Transmutation",
    "supertype": "Secret",
    "subtypes": ["Magik"],
    "rarity": "Uncommon",
    "images": {"small": "CardImages/Secrets/SECRET-M-InfernalTransmutation"},
    "setCode": "MC01",
    "effectText": "Change the type of your active Creature to Fire. This Creature can now use any Fire Power card regardless of its original type. (attach this card to the Creature until the Creature is destroyed)",
    "structuredEffects": [
      {
        "type": "ChangeCreatureTypeAndAttach",
        "category": "Transformation",
        "target": "OwnActiveCreature",
        "newType": "Fire",
        "canUsePowerType": "Fire",
        "attachmentDuration": "UntilDestroyed"
      }
    ],
    "ruleText": "You may play only one Magik card during your turn (before your attack)",
    "collectionNumber": "253/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 339,
    "name": "Life Infusion",
    "supertype": "Secret",
    "subtypes": ["Magik"],
    "rarity": "Uncommon",
    "images": {"small": "CardImages/Secrets/SECRET-M-LifeInfusion"},
    "setCode": "MC01",
    "effectText": "Attach this Magik card to your active Creature. At the beginning of each turn, until this Creature is destroyed, add +500 HP to your Creature's health. (this card remains in play until the creature is destroyed)",
    "structuredEffects": [
      {
        "type": "ApplyFieldEffect",
        "target": "OwnActiveCreature",
        "attachmentDurationRule": "UntilDestroyed",
        "subEffects": [
          { "type": "Heal", "amount": 500, "target": "AttachedCreature" }
        ]
      }
    ],
    "ruleText": "You may play only one Magik card during your turn (before your attack)",
    "collectionNumber": "252/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 340,
    "name": "Magikal Disruption",
    "supertype": "Secret",
    "subtypes": ["Magik"],
    "rarity": "Common",
    "images": {"small": "CardImages/Secrets/SECRET-M-MysticalDisruption"},
    "setCode": "MC01",
    "effectText": "Choose a Power card that is attached to one of your opponent's Benched Creatures and send it to their Discard Pile.",
    "structuredEffects": [
      {
        "type": "RemovePowerCardFromOpponentBench",
        "category": "Disruption",
        "target": "OpponentBenchChoice",
        "amount": 1,
        "criteria": "AttachedAny"
      }
    ],
    "ruleText": "You may play only one Magik card during your turn (before your attack)",
    "collectionNumber": "232/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 341,
    "name": "Magikal Resistence",
    "supertype": "Secret",
    "subtypes": ["Magik"],
    "rarity": "Rare",
    "images": {"small": "CardImages/Secrets/SECRET-M-MagicalResistance"},
    "setCode": "MC01",
    "effectText": "Once activated, this Magik remains on the field for three full turns. At the end of your third turn, send this card to the Discard Pile. While this card is active, your opponent cannot play any Magik cards. (you may not play any other Magik or Spell card blocking your opponent't moves immediately after this card's effects wear",
    "structuredEffects": [
      {
        "type": "ApplyFieldEffect",
        "category": "Control",
        "effect": "OpponentCannotPlayMagik",
        "durationTurns": 3,
        "selfDestructsToDiscard": true,
        "playRestrictionAfter": "CannotPlayBlockingMagikOrSpellImmediately"
      }
    ],
    "ruleText": "You may play only one Magik card during your turn (before your attack)",
    "collectionNumber": "250/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 342,
    "name": "Malleable Energy",
    "supertype": "Secret",
    "subtypes": ["Magik"],
    "rarity": "Rare",
    "images": {"small": "CardImages/Secrets/SECRET-M-MalleableEnergy"},
    "setCode": "MC01",
    "effectText": "Remove all attached Power cards from your opponent's Active Creature.",
    "structuredEffects": [
      {
        "type": "RemoveAllPowerFromOpponentActive",
        "category": "Disruption",
        "target": "OpponentCreatureActive"
      }
    ],
    "ruleText": "You may play only one Magik card during your turn (before your attack)",
    "collectionNumber": "238/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 343,
    "name": "Memory Rewind",
    "supertype": "Secret",
    "subtypes": ["Magik"],
    "rarity": "Rare",
    "images": {"small": "CardImages/Secrets/SECRET-M-MemoryRewind"},
    "setCode": "MC01",
    "effectText": "Return all cards in your Hand to your deck and shuffle it. Then, draw five new cards from the top of your Deck.",
    "structuredEffects": [
      {
        "type": "ShuffleHandAndRedrawFixed",
        "category": "CardManipulation",
        "target": "PlayerSelf",
        "drawAmount": 5
      }
    ],
    "ruleText": "You may play only one Magik card during your turn (before your attack)",
    "collectionNumber": "236/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 344,
    "name": "Mystik Forestry",
    "supertype": "Secret",
    "subtypes": ["Magik"],
    "rarity": "Uncommon",
    "images": {"small": "CardImages/Secrets/SECRET-M-MysticForestry"},
    "setCode": "MC01",
    "effectText": "Change the type of your active Creature to Forest. This Creature can now use any Forest Power card regardless of its original type. (attach this card to the Creature until the Creature is destroyed)",
    "structuredEffects": [
    ],
    "ruleText": "You may play only one Magik card during your turn (before your attack)",
    "collectionNumber": "231/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 345,
    "name": "Nature's Touch",
    "supertype": "Secret",
    "subtypes": ["Magik"],
    "rarity": "Rare",
    "images": {"small": "CardImages/Secrets/SECRET-M-NaturesTouch"},
    "setCode": "MC01",
    "effectText": "Choose one of your Creatures and heal it by +2500 HP.",
    "structuredEffects": [
      {
        "type": "HealTargetCreature",
        "category": "Healing",
        "target": "PlayerChoiceFriendlyCreature",
        "amount": 2500
      }
    ],
    "ruleText": "You may play only one Magik card during your turn (before your attack)",
    "collectionNumber": "230/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 346,
    "name": "Nimble Reconstruction",
    "supertype": "Secret",
    "subtypes": ["Magik"],
    "rarity": "Common",
    "images": {"small": "CardImages/Secrets/SECRET-M-NimbleReconstruction"},
    "setCode": "MC01",
    "effectText": "Choose any level 1-3 Creature that is in your Discard Pile and add it to your Bench. (you must have an open space on your Bench to play this Magik card)",
    "structuredEffects": [
      {
        "type": "ReturnCreatureFromDiscardToBench",
        "category": "Summoning",
        "target": "PlayerSelf",
        "creatureCriteria": {"minLevel": 1, "maxLevel": 3},
        "condition": {"type": "OpenBenchSpace"}
      }
    ],
    "ruleText": "You may play only one Magik card during your turn (before your attack)",
    "collectionNumber": "229/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 347,
    "name": "Nourishing Light",
    "supertype": "Secret",
    "subtypes": ["Magik"],
    "rarity": "Uncommon",
    "images": {"small": "CardImages/Secrets/SECRET-M-NourishingLight"},
    "setCode": "MC01",
    "effectText": "This Magik card heals your active Creature's HP equal to the number of Forest, Earth, Wind or Light Power cards attached to it x500.",
    "structuredEffects": [
      {
        "type": "HealBasedOnAttachedPower",
        "category": "Healing",
        "target": "OwnActiveCreature",
        "powerTypes": ["Forest", "Earth", "Wind", "Light"],
        "multiplier": 500
      }
    ],
    "ruleText": "You may play only one Magik card during your turn (before your attack)",
    "collectionNumber": "225/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 348,
    "name": "Phoenix's Embrace",
    "supertype": "Secret",
    "subtypes": ["Magik"],
    "rarity": "Uncommon",
    "images": {"small": "CardImages/Secrets/SECRET-M-Phoenix'sEmbrace"},
    "setCode": "MC01",
    "effectText": "Choose any two Creatures from your Discard Pile and place them in your Hand. (cannot be a level 10 Creature)",
    "structuredEffects": [
      {
        "type": "ReturnCardsFromDiscardToHand",
        "category": "CardManipulation",
        "target": "PlayerSelf",
        "amount": 2,
        "cardCriteria": {"cardSuperType": "Creature", "maxLevel": 9}
      }
    ],
    "ruleText": "You may play only one Magik card during your turn (before your attack)",
    "collectionNumber": "222/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 349,
    "name": "Portal Home",
    "supertype": "Secret",
    "subtypes": ["Magik"],
    "rarity": "Uncommon",
    "images": {"small": "CardImages/Secrets/SECRET-M-Portal"},
    "setCode": "MC01",
    "effectText": "You and your Opponent return all cards in your Hand to the bottom of your Decks and draw five new cards. (if a player has less than five cards, they return the amount of cards they have and still draw five new cards)",
    "structuredEffects": [
      {
        "type": "ReturnHandToDeckAndRedraw",
        "category": "CardManipulation",
        "target": "BothPlayers",
        "drawAmount": 5
      }
    ],
    "ruleText": "You may play only one Magik card during your turn (before your attack)",
    "collectionNumber": "216/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 350,
    "name": "Power Lift",
    "supertype": "Secret",
    "subtypes": ["Magik"],
    "rarity": "Common",
    "images": {"small": "CardImages/Secrets/SECRET-M-PowerLift"},
    "setCode": "MC01",
    "effectText": "Remove one Power card that is attached to your opponent's Active Creature.",
    "structuredEffects": [
      {
        "type": "RemovePowerCard",
        "category": "Disruption",
        "target": "OpponentCreatureActive",
        "amount": 1,
        "criteria": "AttachedAny"
      }
    ],
    "ruleText": "You may play only one Magik card during your turn (before your attack)",
    "collectionNumber": "214/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 351,
    "name": "Primeval Mutation",
    "supertype": "Secret",
    "subtypes": ["Magik"],
    "rarity": "Uncommon",
    "images": {"small": "CardImages/Secrets/SECRET-M-PrimevalMutation"},
    "setCode": "MC01",
    "effectText": "Change the type of your active Creature to Earth. This Creature can now use any Earth Power card regardless of its original type. (attach this card to the Creature until the Creature is destroyed)",
    "structuredEffects": [
      {
        "type": "ChangeCreatureTypeAndAttach",
        "category": "Transformation",
        "target": "OwnActiveCreature",
        "newType": "Earth",
        "canUsePowerType": "Earth",
        "attachmentDuration": "UntilDestroyed"
      }
    ],
    "ruleText": "You may play only one Magik card during your turn (before your attack)",
    "collectionNumber": "213/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 352,
    "name": "Rejuvenating Boost",
    "supertype": "Secret",
    "subtypes": ["Magik"],
    "rarity": "Uncommon",
    "images": {"small": "CardImages/Secrets/SECRET-M-EkementalBoost"},
    "setCode": "MC01",
    "effectText": "Boost the attack of your Creature by +1000 for each different type of Power card attached that is attached to it.",
    "structuredEffects": [
      {
        "type": "ModifyStatsBasedOnAttachedPowerVariety",
        "category": "Buff",
        "target": "OwnActiveCreature",
        "stat": "Attack",
        "amountPerDifferentType": 1000
      }
    ],
    "ruleText": "You may play only one Magik card during your turn (before your attack)",
    "collectionNumber": "281/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 353,
    "name": "Replenishment",
    "supertype": "Secret",
    "subtypes": ["Magik"],
    "rarity": "Rare",
    "images": {"small": "CardImages/Secrets/SECRET-M-ElementalReplenishment"},
    "setCode": "MC01",
    "effectText": "Shuffle all Secret cards that are in your Discard Pile back into your Deck.",
    "structuredEffects": [
      {
        "type": "ShuffleCardsFromDiscardToDeck",
        "category": "CardManipulation",
        "target": "PlayerSelf",
        "cardCriteria": {"cardSuperType": "Secret"}
      }
    ],
    "ruleText": "You may play only one Magik card during your turn (before your attack)",
    "collectionNumber": "277/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 354,
    "name": "Revelation",
    "supertype": "Secret",
    "subtypes": ["Magik"],
    "rarity": "Rare",
    "images": {"small": "CardImages/Secrets/SECRET-M-Revelation"},
    "setCode": "MC01",
    "effectText": "Look at the top three cards of your opponent's Deck and return them in any order back to the top of their Deck.",
    "structuredEffects": [
      {
        "type": "ManipulateDeck",
        "category": "CardManipulation",
        "target": "PlayerOpponent",
        "action": "ViewAndReorderTopCards",
        "count": 3
      }
    ],
    "ruleText": "You may play only one Magik card during your turn (before your attack)",
    "collectionNumber": "211/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 355,
    "name": "Revitalizing Elixir",
    "supertype": "Secret",
    "subtypes": ["Magik"],
    "rarity": "Common",
    "images": {"small": "CardImages/Secrets/SECRET-M-RevitilazingElixir"},
    "setCode": "MC01",
    "effectText": "Add +1000 HP to your Active Creature.",
    "structuredEffects": [
      {
        "type": "ModifyHP",
        "category": "Healing",
        "target": "OwnActiveCreature",
        "amount": 1000
      }
    ],
    "ruleText": "You may play only one Magik card during your turn (before your attack)",
    "collectionNumber": "208/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 356,
    "name": "Revival",
    "supertype": "Secret",
    "subtypes": ["Magik"],
    "rarity": "Common",
    "images": {"small": "CardImages/Secrets/SECRET-M-Revive"},
    "setCode": "MC01",
    "effectText": "Return one Creature from your Discard Pile back to your Hand. (must be a level 1-5 Creature)",
    "structuredEffects": [
      {
        "type": "ReturnCardsFromDiscardToHand",
        "category": "CardManipulation",
        "target": "PlayerSelf",
        "amount": 1,
        "cardCriteria": {"cardSuperType": "Creature", "minLevel": 1, "maxLevel": 5}
      }
    ],
    "ruleText": "You may play only one Magik card during your turn (before your attack)",
    "collectionNumber": "206/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 357,
    "name": "Ritual of the Damned",
    "supertype": "Secret",
    "subtypes": ["Magik"],
    "rarity": "Rare",
    "images": {"small": "CardImages/Secrets/SECRET-M-RitualoftheDamned"},
    "setCode": "MC01",
    "effectText": "You can only play this Magik card if you have any level 10 Creature on the active field. Attach this card to that Creature for three full turns. After your third turn passes, Sacrifice the level 10 Creature to Special Summon Malum, the Damned from your Hand, Deck or Discard Pile. If the Creature is destroyed before your third turn, send this card to the Discard Pile.",
    "structuredEffects": [
      {
        "type": "DelayedConditionalSummon",
        "category": "Summoning",
        "target": "PlayerSelf",
        "condition": {"type": "ActiveCreatureCheck", "minLevel": 10, "maxLevel": 10},
        "attachmentDuration": "3 Turns",
        "sacrificeTarget": "AttachedCreature",
        "summonTarget": {"name": "Malum, the Damned", "from": ["Hand", "Deck", "DiscardPile"]},
        "ifDestroyedEarly": "SendToDiscard"
      }
    ],
    "ruleText": "You may play only one Magik card during your turn (before your attack)",
    "collectionNumber": "201/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 358,
    "name": "Ritual of the Damned",
    "supertype": "Secret",
    "subtypes": ["Magik"],
    "rarity": "HiddenRare",
    "images": {"small": "CardImages/Secrets/SECRET-M-RitualoftheDamned2"},  
    "setCode": "MC01",
    "effectText": "You can only play this Magik card if you have any level 10 Creature on the active field. Attach this card to that Creature for three full turns. After your third turn passes, Sacrifice the level 10 Creature to Special Summon Malum, the Damned from your Hand, Deck or Discard Pile. If the Creature is destroyed before your third turn, send this card to the Discard Pile.",
    "structuredEffects": [
      {
        "type": "DelayedConditionalSummon",
        "category": "Summoning",
        "target": "PlayerSelf",
        "condition": {"type": "ActiveCreatureCheck", "minLevel": 10, "maxLevel": 10},
        "attachmentDuration": "3 Turns",
        "sacrificeTarget": "AttachedCreature",
        "summonTarget": {"name": "Malum, the Damned", "from": ["Hand", "Deck", "DiscardPile"]},
        "ifDestroyedEarly": "SendToDiscard"
      }
    ],
    "ruleText": "You may play only one Magik card during your turn (before your attack)",
    "collectionNumber": "320/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 359,
    "name": "Ritual of the Damned",
    "supertype": "Secret",
    "subtypes": ["Magik"],
    "rarity": "Borderless",
    "images": {"small": "CardImages/Secrets/SECRET-M-RitualoftheDamned3"},
    "setCode": "MC01",
    "effectText": "You can only play this Magik card if you have any level 10 Creature on the active field. Attach this card to that Creature for three full turns. After your third turn passes, Sacrifice the level 10 Creature to Special Summon Malum, the Damned from your Hand, Deck or Discard Pile. If the Creature is destroyed before your third turn, send this card to the Discard Pile.",
    "structuredEffects": [
      {
        "type": "DelayedConditionalSummon",
        "category": "Summoning",
        "target": "PlayerSelf",
        "condition": {"type": "ActiveCreatureCheck", "minLevel": 10, "maxLevel": 10},
        "attachmentDuration": "3 Turns",
        "sacrificeTarget": "AttachedCreature",
        "summonTarget": {"name": "Malum, the Damned", "from": ["Hand", "Deck", "DiscardPile"]},
        "ifDestroyedEarly": "SendToDiscard"
      }
    ],
    "ruleText": "You may play only one Magik card during your turn (before your attack)",
    "collectionNumber": "320/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 360,
    "name": "Show and Tell",
    "supertype": "Secret",
    "subtypes": ["Magik"],
    "rarity": "Uncommon",
    "images": {"small": "CardImages/Secrets/SECRET-M-ShowandTell"},
    "setCode": "MC01",
    "effectText": "Reveal any Spell cards your opponent may have in play. Choose one and send it to their Discard Pile. Place any remaining Spell cards face down after.",
    "structuredEffects": [
      {
        "type": "RevealOpponentSpellsAndDiscardOne",
        "category": "Disruption",
        "target": "PlayerOpponent"
      }
    ],
    "ruleText": "You may play only one Magik card during your turn (before your attack)",
    "collectionNumber": "199/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 361,
    "name": "Show Off",
    "supertype": "Secret",
    "subtypes": ["Magik"],
    "rarity": "Common",
    "images": {"small": "CardImages/Secrets/SECRET-M-ShowOff"},
    "setCode": "MC01",
    "effectText": "Increase your Creature's attack by +500.",
    "structuredEffects": [
      {
        "type": "ModifyStats",
        "category": "Buff",
        "target": "OwnActiveCreature",
        "modification": {"stat": "Attack", "amount": 500}
      }
    ],
    "ruleText": "You may play only one Magik card during your turn (before your attack)",
    "collectionNumber": "198/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 362,
    "name": "Sneaky Psychic",
    "supertype": "Secret",
    "subtypes": ["Magik"],
    "rarity": "Rare",
    "images": {"small": "CardImages/Secrets/SECRET-M-SneakyPsychic"},
    "setCode": "MC01",
    "effectText": "Look through your opponent's Deck. Once done, shuffle their Deck and return it to their side of the field.",
    "structuredEffects": [
      {
        "type": "LookAtOpponentDeckAndShuffle",
        "category": "Information",
        "target": "PlayerOpponent"
      }
    ],
    "ruleText": "You may play only one Magik card during your turn (before your attack)",
    "collectionNumber": "194/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 363,
    "name": "Speed Up",
    "supertype": "Secret",
    "subtypes": ["Magik"],
    "rarity": "Uncommon",
    "images": {"small": "CardImages/Secrets/SECRET-M-SpeedUp"},
    "setCode": "MC01",
    "effectText": "Draw two cards from the top of your Deck.",
    "structuredEffects": [
      {
        "type": "DrawCards",
        "category": "CardManipulation",
        "target": "PlayerSelf",
        "amount": 2
      }
    ],
    "ruleText": "You may play only one Magik card during your turn (before your attack)",
    "collectionNumber": "193/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 364,
    "name": "Spiritual Protection",
    "supertype": "Secret",
    "subtypes": ["Magik"],
    "rarity": "Uncommon",
    "images": {"small": "CardImages/Secrets/SECRET-M-SpiritualProtection"},
    "setCode": "MC01",
    "effectText": "Once activated, this Magik remains on the field for two full turns. At the end of your second turn, send this card to the Discard Pile. While this card is active, your opponent cannot attack. (you may not play any other Magik or Spell card blocking your opponent's moves immediately after this card's effects wear off)",
    "structuredEffects": [
      {
        "type": "ApplyFieldEffect",
        "category": "Control",
        "effect": "OpponentCannotAttack",
        "durationTurns": 2,
        "selfDestructsToDiscard": true,
        "playRestrictionAfter": "CannotPlayBlockingMagikOrSpellImmediately"
      }
    ],
    "ruleText": "You may play only one Magik card during your turn (before your attack)",
    "collectionNumber": "192/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 365,
    "name": "Storm of Reckoning",
    "supertype": "Secret",
    "subtypes": ["Magik"],
    "rarity": "Rare",
    "images": {"small": "CardImages/Secrets/SECRET-M-StormofReckoning1"},
    "setCode": "MC01",
    "effectText": "You can only play this Magik card if you have a level 8 or higher Thunder Creature on the active field. Sacrifice the level 8 Creature and one Thunder Creature from your Bench to Special Summon Iškugriff from your Hand or Deck.",
    "structuredEffects": [
      {
        "type": "ConditionalSummon",
        "category": "Summoning",
        "target": "PlayerSelf",
        "condition": {"type": "ActiveCreatureCheck", "minLevel": 8, "powerType": "Thunder"},
        "costs": [
            {"type": "SacrificeActiveCreature", "minLevel": 8, "powerType": "Thunder"},
            {"type": "SacrificeBenchCreature", "powerType": "Thunder"}
        ],
        "summonTarget": {"name": "Iškugriff", "from": ["Hand", "Deck"]}
      }
    ],
    "ruleText": "You may play only one Magik card during your turn (before your attack)",
    "collectionNumber": "189/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 366,
    "name": "Storm of Reckoning",
    "supertype": "Secret",
    "subtypes": ["Magik"],
    "rarity": "HiddenRare",
    "images": {"small": "CardImages/Secrets/SECRET-M-StormofReckoning2"},
    "setCode": "MC01",
    "effectText": "You can only play this Magik card if you have a level 8 or higher Thunder Creature on the active field. Sacrifice the level 8 Creature and one Thunder Creature from your Bench to Special Summon Iškugriff from your Hand or Deck.",
    "structuredEffects": [
      {
        "type": "ConditionalSummon",
        "category": "Summoning",
        "target": "PlayerSelf",
        "condition": {"type": "ActiveCreatureCheck", "minLevel": 8, "powerType": "Thunder"},
        "costs": [
            {"type": "SacrificeActiveCreature", "minLevel": 8, "powerType": "Thunder"},
            {"type": "SacrificeBenchCreature", "powerType": "Thunder"}
        ],
        "summonTarget": {"name": "Iškugriff", "from": ["Hand", "Deck"]}
      }
    ],
    "ruleText": "You may play only one Magik card during your turn (before your attack)",
    "collectionNumber": "315/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 367,
    "name": "Storm of Reckoning",
    "supertype": "Secret",
    "subtypes": ["Magik"],
    "rarity": "Borderless",
    "images": {"small": "CardImages/Secrets/SECRET-M-StormofReckoning3"},
    "setCode": "MC01",
    "effectText": "You can only play this Magik card if you have a level 8 or higher Thunder Creature on the active field. Sacrifice the level 8 Creature and one Thunder Creature from your Bench to Special Summon Iškugriff from your Hand or Deck.",
    "structuredEffects": [
      {
        "type": "ConditionalSummon",
        "category": "Summoning",
        "target": "PlayerSelf",
        "condition": {"type": "ActiveCreatureCheck", "minLevel": 8, "powerType": "Thunder"},
        "costs": [
            {"type": "SacrificeActiveCreature", "minLevel": 8, "powerType": "Thunder"},
            {"type": "SacrificeBenchCreature", "powerType": "Thunder"}
        ],
        "summonTarget": {"name": "Iškugriff", "from": ["Hand", "Deck"]}
      }
    ],
    "ruleText": "You may play only one Magik card during your turn (before your attack)",
    "collectionNumber": "315/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 368,
    "name": "Sudden Death",
    "supertype": "Secret",
    "subtypes": ["Magik"],
    "rarity": "Rare",
    "images": {"small": "CardImages/Secrets/SECRET-M-SuddenDeath"},
    "setCode": "MC01",
    "effectText": "You can only play this card if you and your opponent have three Pirze Cards or less remaining. You and your opponent both draw a maximum of two of your Prize Cards, leaving one remaining. The Player who takes their last Prize Card wins the game.\n(if this card is activated when either player has only one (1) Prize Card left, this card has no effect for that player. This card can only be played once and cannot be retrieved from the Discard Pile)",
    "structuredEffects": [
      {
        "type": "ConditionalPrizeCardDraw",
        "category": "GameAltering",
        "target": "BothPlayers",
        "condition": {
          "type": "And",
          "conditions": [
            {
              "type": "PlayerPrizeCardCount",
              "stringParam": "Self",
              "comparison": "LessThanOrEqualTo",
              "amount": 3
            },
            {
              "type": "PlayerPrizeCardCount",
              "stringParam": "Opponent",
              "comparison": "LessThanOrEqualTo",
              "amount": 3
            }
          ]
        },
        "drawTo": 1,
        "specialWinCondition": "LastPrizeCard",
        "singlePrizeNoEffect": true,
        "usageRestriction": "OncePerGameAndNotRetrievable"
      }
    ],
    "ruleText": "You may play only one Magik card during your turn (before your attack)",
    "collectionNumber": "186/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 369,
    "name": "Sudden Death",
    "supertype": "Secret",
    "subtypes": ["Magik"],
    "rarity": "HiddenRare",
    "images": {"small": "CardImages/Secrets/SECRET-M-SuddenDeath2"},  
    "setCode": "MC01",
    "effectText": "You can only play this card if you and your opponent have three Pirze Cards or less remaining. You and your opponent both draw a maximum of two of your Prize Cards, leaving one remaining. The Player who takes their last Prize Card wins the game.\n(if this card is activated when either player has only one (1) Prize Card left, this card has no effect for that player. This card can only be played once and cannot be retrieved from the Discard Pile)",
    "structuredEffects": [
      {
        "type": "ConditionalPrizeCardDraw",
        "category": "GameAltering",
        "target": "BothPlayers",
        "condition": {
          "type": "And",
          "conditions": [
            {
              "type": "PlayerPrizeCardCount",
              "stringParam": "Self",
              "comparison": "LessThanOrEqualTo",
              "amount": 3
            },
            {
              "type": "PlayerPrizeCardCount",
              "stringParam": "Opponent",
              "comparison": "LessThanOrEqualTo",
              "amount": 3
            }
          ]
        },
        "drawTo": 1,
        "specialWinCondition": "LastPrizeCard",
        "singlePrizeNoEffect": true,
        "usageRestriction": "OncePerGameAndNotRetrievable"
      }
    ],
    "ruleText": "You may play only one Magik card during your turn (before your attack)",
    "collectionNumber": "312/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 370,
    "name": "Sudden Death",
    "supertype": "Secret",
    "subtypes": ["Magik"],
    "rarity": "Borderless",
    "images": {"small": "CardImages/Secrets/SECRET-M-SuddenDeath3"},
    "setCode": "MC01",
    "effectText": "You can only play this card if you and your opponent have three Pirze Cards or less remaining. You and your opponent both draw a maximum of two of your Prize Cards, leaving one remaining. The Player who takes their last Prize Card wins the game.\n(if this card is activated when either player has only one (1) Prize Card left, this card has no effect for that player. This card can only be played once and cannot be retrieved from the Discard Pile)",
    "structuredEffects": [
      {
        "type": "ConditionalPrizeCardDraw",
        "category": "GameAltering",
        "target": "BothPlayers",
        "condition": {
          "type": "And",
          "conditions": [
            {
              "type": "PlayerPrizeCardCount",
              "stringParam": "Self",
              "comparison": "LessThanOrEqualTo",
              "amount": 3
            },
            {
              "type": "PlayerPrizeCardCount",
              "stringParam": "Opponent",
              "comparison": "LessThanOrEqualTo",
              "amount": 3
            }
          ]
        },
        "drawTo": 1,
        "specialWinCondition": "LastPrizeCard",
        "singlePrizeNoEffect": true,
        "usageRestriction": "OncePerGameAndNotRetrievable"
      }
    ],
    "ruleText": "You may play only one Magik card during your turn (before your attack)",
    "collectionNumber": "312/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 371,
    "name": "Teleport",
    "supertype": "Secret",
    "subtypes": ["Magik"],
    "rarity": "Uncommon",
    "images": {"small": "CardImages/Secrets/SECRET-M-Teleport"},
    "setCode": "MC01",
    "effectText": "You and your opponent return three cards from your Hand to the bottom of your Decks and draw three new cards from the top of their Deck. (if a player has less than three cards in their hand, they return the amount of cards they have and still draw three new cards)",
    "structuredEffects": [
      {
        "type": "ReturnHandToDeckAndRedraw",
        "category": "CardManipulation",
        "target": "BothPlayers",
        "cardsToReturn": 3,
        "drawAmount": 3
      }
    ],
    "ruleText": "You may play only one Magik card during your turn (before your attack)",
    "collectionNumber": "179/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 372,
    "name": "Temporal Retreat",
    "supertype": "Secret",
    "subtypes": ["Magik"],
    "rarity": "Uncommon",
    "images": {"small": "CardImages/Secrets/SECRET-M-TemporalRetreat"},
    "setCode": "MC01",
    "effectText": "Your opponent cannot draw a card to start their next turn.",
    "structuredEffects": [
      {
        "type": "PreventDraw",
        "category": "Control",
        "target": "PlayerOpponent",
        "phase": "StartOfTurn",
        "durationTurns": 1
      }
    ],
    "ruleText": "You may play only one Magik card during your turn (before your attack)",
    "collectionNumber": "178/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 373,
    "name": "The Last Refuge",
    "supertype": "Secret",
    "subtypes": ["Magik"],
    "rarity": "Uncommon",
    "images": {"small": "CardImages/Secrets/SECRET-M-Illusion"},
    "setCode": "MC01",
    "effectText": "Your opponent's Creature is unable to attack for their next turn.",
    "structuredEffects": [
      {
        "type": "PreventAttack",
        "category": "Control",
        "target": "OpponentCreatureActive",
        "durationTurns": 1
      }
    ],
    "ruleText": "You may play only one Magik card during your turn (before your attack)",
    "collectionNumber": "254/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 374,
    "name": "Time Shift",
    "supertype": "Secret",
    "subtypes": ["Magik"],
    "rarity": "Common",
    "images": {"small": "CardImages/Secrets/SECRET-M-TimeShift"},
    "setCode": "MC01",
    "effectText": "Flip the main coin. If the result is heads, draw a card from the top of your Deck. If tails, return one Power card from your Discard Pile back to your Hand.",
    "structuredEffects": [
      {
        "type": "ConditionalEffect",
        "category": "CardManipulation",
        "condition": {"type": "CoinFlip", "comparison": "EqualTo", "stringValue": "Heads"},
        "trueEffects": [{"type": "DrawCards", "target": "PlayerSelf", "amount": 1}],
        "falseEffects": [{"type": "ReturnCardsFromDiscardToHand", "target": "PlayerSelf", "amount": 1, "cardCriteria": {"cardSuperType": "Power", "anyType": true}}]
      }
    ],
    "ruleText": "You may play only one Magik card during your turn (before your attack)",
    "collectionNumber": "175/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 375,
    "name": "Windy Metamorphosis",
    "supertype": "Secret",
    "subtypes": ["Magik"],
    "rarity": "Uncommon",
    "images": {"small": "CardImages/Secrets/SECRET-M-WindyMetamorphosis"},
    "setCode": "MC01",
    "effectText": "Change the type of your active Creature to Wind. This Creature can now use any Wind Power card regardless of its original type. (attach this card to the Creature until the Creature is destroyed)",
    "structuredEffects": [
      {
        "type": "ChangeCreatureTypeAndAttach",
        "category": "Transformation",
        "target": "OwnActiveCreature",
        "newType": "Wind",
        "canUsePowerType": "Wind",
        "attachmentDuration": "UntilDestroyed"
      }
    ],
    "ruleText": "You may play only one Magik card during your turn (before your attack)",
    "collectionNumber": "174/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 376,
    "name": "Wrong Way",
    "supertype": "Secret",
    "subtypes": ["Magik"],
    "rarity": "Uncommon",
    "images": {"small": "CardImages/Secrets/SECRET-M-SwapOut"},
    "setCode": "MC01",
    "effectText": "You may either switch your Active Creature with one on your Bench of equal or lesser level, or draw a card from the top of your Deck. If you switch Creatures, your opponent draws two cards from the top of their Deck. The switched Creature can attack this turn.",
    "structuredEffects": [
      {
        "type": "ChoiceEffect",
        "category": "Utility",
        "target": "PlayerSelf",
        "choiceOptions": [
          {
            "description": "Switch Active with Bench. Opponent draws 2.",
            "effectsToExecute": [
              {
                "type": "SwitchActiveWithBench",
                "target": "OwnActiveCreature",
                "opponentDrawAmount": 2,
                "retainPowerCardsOnSwitch": true
              }
            ]
          },
          {
            "description": "Draw 1 card.",
            "effectsToExecute": [
              {
                "type": "DrawCards",
                "target": "PlayerSelf",
                "amount": 1
              }
            ]
          }
        ]
      }
    ],
    "ruleText": "You may play only one Magik card during your turn (before your attack)",
    "collectionNumber": "181/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 377,
    "name": "Ambush",
    "supertype": "Secret",
    "subtypes": ["Spell"],
    "rarity": "Rare",
    "images": {"small": "CardImages/Secrets/SECRET-T-Ambush"},
    "setCode": "MC01",
    "effectText": "When your opponent's Creature attacks your Creature, you can activate this card. Negate their attack and have your Creature attack your opponent's Creature equal to your opponent's Creature's attack with five new cards. Your opponent draws five new cards.",
    "activationTrigger": "OnOpponentAttackDeclaration",
    "structuredEffects": [
      {
        "type": "NegateAttackAndCounter",
        "category": "Interruption",
        "counterAttackDamageType": "EqualToOpponentAttackStat",
        "playerDrawAmount": 5,
        "opponentDrawAmount": 5
      }
    ],
    "collectionNumber": "311/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 378,
    "name": "Aura Break",
    "supertype": "Secret",
    "subtypes": ["Spell"],
    "rarity": "Rare",
    "images": {"small": "CardImages/Secrets/SECRET-T-AuraBreak"},
    "setCode": "MC01",
    "effectText": "When your opponent's Creature attacks your Creature, you can activate this card. Both Players discard their Hand to the Discard Pile and draw five new cards. Your opponent's Creature must return as well as their next turn.",
    "activationTrigger": "OnOpponentAttackDeclaration",
    "structuredEffects": [
      {
        "type": "DiscardHandAndRedraw",
        "category": "Disruption",
        "target": "BothPlayers",
        "amount": 5
      },
      {
        "type": "ReturnToHand",
        "target": "OpponentCreatureActive"
      },
      {
        "type": "SkipTurn",
        "target": "OpponentCreatureActive",
        "duration": 1
      }
    ],
    "collectionNumber": "310/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 379,
    "name": "Barrier",
    "supertype": "Secret",
    "subtypes": ["Spell"],
    "rarity": "Rare",
    "images": {"small": "CardImages/Secrets/SECRET-T-Barrier"},
    "setCode": "MC01",
    "effectText": "When your opponent's Creature attacks your Creature, you can activate this card. Create a barrier that blocks your opponent's attack for this turn as well as their next turn. At the end of your opponent's next turn, send this card to the Discard Pile. (you may not play any other Magik or Spell card blocking your opponent's moves",
    "activationTrigger": "OnOpponentAttackDeclaration",
    "structuredEffects": [
      {
        "type": "BlockAttack",
        "category": "Defense",
        "durationTurns": 2,
        "selfDestructsToDiscard": true,
        "playRestrictionAfter": "CannotPlayBlockingMagikOrSpellImmediately"
      }
    ],
    "collectionNumber": "308/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 380,
    "name": "Beartrap",
    "supertype": "Secret",
    "subtypes": ["Spell"],
    "rarity": "Uncommon",
    "images": {"small": "CardImages/Secrets/SECRET-T-Beartrap"},
    "setCode": "MC01",
    "effectText": "When your opponent activates a Spell card, you may activate this card. Negate that Spell and send it to their Discard Pile. Then, draw one card from the top of your Deck and Poison your opponent's Creature.",
    "activationTrigger": "OnOpponentSpellActivation",
    "structuredEffects": [
      {"type": "NegateSpellAndDiscard", "target": "OpponentSpell"},
      {"type": "DrawCards", "target": "PlayerSelf", "amount": 1},
      {"type": "ApplyStatus", "target": "OpponentCreatureActive", "status": "Poison"}
    ],
    "collectionNumber": "306/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 381,
    "name": "Binding Spells",
    "supertype": "Secret",
    "subtypes": ["Spell"],
    "rarity": "Uncommon",
    "images": {"small": "CardImages/Secrets/SECRET-T-BindingSpells"},
    "setCode": "MC01",
    "effectText": "When your opponent activates a Spell card, you may activate this card. Negate that Spell and send it to their Discard Pile. Then, draw one card from the top of you",
    "activationTrigger": "OnOpponentSpellActivation",
    "structuredEffects": [
      {"type": "NegateSpellAndDiscard", "target": "OpponentSpell"},
      {"type": "DrawCards", "target": "PlayerSelf", "amount": 1}
    ],
    "collectionNumber": "305/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 382,
    "name": "Blinded",
    "supertype": "Secret",
    "subtypes": ["Spell"],
    "rarity": "Common",
    "images": {"small": "CardImages/Secrets/SECRET-T-BlindingLight"},
    "setCode": "MC01",
    "effectText": "When your opponent's Creature attacks your Creature, you can activate this card. Reduce the damage taken by -1000 HP.",
    "activationTrigger": "OnOpponentAttackDeclaration",
    "structuredEffects": [
      {
        "type": "ModifyDamage",
        "category": "Defense",
        "target": "OwnActiveCreature",
        "amount": -1000,
        "damageContext": "IncomingAttack"
      }
    ],
    "collectionNumber": "303/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 383,
    "name": "Brace Yourself",
    "supertype": "Secret",
    "subtypes": ["Spell"],
    "rarity": "Common",
    "images": {"small": "CardImages/Secrets/SECRET-T-BraceYourself"},
    "setCode": "MC01",
    "effectText": "When your opponent plays a Magik card, you may activate this card. Negate that Magik and send it to their Discard Pile.",
    "activationTrigger": "OnOpponentMagikPlay",
    "structuredEffects": [
      {"type": "NegateMagikAndDiscard", "target": "OpponentMagik"}
    ],
    "collectionNumber": "299/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 384,
    "name": "Bribery",
    "supertype": "Secret",
    "subtypes": ["Spell"],
    "rarity": "Common",
    "images": {"small": "CardImages/Secrets/SECRET-T-Bribery"},
    "setCode": "MC01",
    "effectText": "When your opponent activates a Spell card, you may activate this card. Choose one: Negate their Spell, sending it to your opponent's Discard Pile and they draw one card. Or, allow the Spell to resolve, and you draw two cards.",
    "activationTrigger": "OnOpponentSpellActivation",
    "structuredEffects": [
      {
        "type": "ChoiceEffect",
        "options": [
          {
            "description": "Negate their Spell. They draw 1 card.",
            "effectsToExecute": [
              {"type": "NegateSpellAndDiscard", "target": "OpponentPlayedCard"},
              {"type": "DrawCards", "target": "PlayerOpponent", "amount": 1}
            ]
          },
          {
            "description": "Allow their Spell to resolve. You draw 2 cards.",
            "effectsToExecute": [
              {"type": "DrawCards", "target": "PlayerSelf", "amount": 2}
            ]
          }
        ]
      }
    ],
    "collectionNumber": "293/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 385,
    "name": "Brighter Days",
    "supertype": "Secret",
    "subtypes": ["Spell"],
    "rarity": "Uncommon",
    "images": {"small": "CardImages/Secrets/SECRET-T-BrighterDays"},
    "setCode": "MC01",
    "effectText": "When your opponent's Creature attacks your Creature, you can activate this card. Negate their attack and Confuse your opponent's Creature.",
    "activationTrigger": "OnOpponentAttackDeclaration",
    "structuredEffects": [
      {"type": "NegateAttack"},
      {"type": "ApplyStatus", "target": "OpponentCreatureActive", "status": "Confused"}
    ],
    "collectionNumber": "292/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 386,
    "name": "Call to Action",
    "supertype": "Secret",
    "subtypes": ["Spell"],
    "rarity": "Common",
    "images": {"small": "CardImages/Secrets/SECRET-T-BlindingAmbition"},
    "setCode": "MC01",
    "effectText": "When your opponent's Creature attacks your Creature, you can activate this card. Your Creature takes no damage.",
    "activationTrigger": "OnOpponentAttackDeclaration",
    "structuredEffects": [
      {"type": "NegateDamage", "target": "OwnActiveCreature"}
    ],
    "collectionNumber": "304/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 387,
    "name": "Clipped Wings",
    "supertype": "Secret",
    "subtypes": ["Spell"],
    "rarity": "Rare",
    "images": {"small": "CardImages/Secrets/SECRET-T-ClippedWings"},
    "setCode": "MC01",
    "effectText": "When your opponent's Creature attacks your Creature, you can activate this card. Negate your opponent's attack and draw three cards from the top of your Deck.",
    "activationTrigger": "OnOpponentAttackDeclaration",
    "structuredEffects": [
      {"type": "NegateAttack"},
      {"type": "DrawCards", "target": "PlayerSelf", "amount": 3}
    ],
    "collectionNumber": "285/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 388,
    "name": "Corrosive Acid",
    "supertype": "Secret",
    "subtypes": ["Spell"],
    "rarity": "Uncommon",
    "images": {"small": "CardImages/Secrets/SECRET-T-CorrosiveAcid"},
    "setCode": "MC01",
    "effectText": "When your opponent's Creature attacks your Creature, you can activate this card. Reduce the damage taken by -1000 HP for the next two turns. At the end of your opponent's second turn, send this card to the Discard Pile.",
    "activationTrigger": "OnOpponentAttackDeclaration",
    "structuredEffects": [
      {
        "type": "ApplyFieldEffect",
        "duration": 2,
        "selfDestructsToDiscard": true,
        "subEffects": [
          {
            "type": "ReduceDamageTaken",
            "target": "OwnActiveCreature",
            "amount": 1000,
            "duration": 1
          }
        ]
      }
    ],
    "collectionNumber": "284/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 389,
    "name": "Counter Trap",
    "supertype": "Secret",
    "subtypes": ["Spell"],
    "rarity": "Common",
    "images": {"small": "CardImages/Secrets/SECRET-T-CounterTrap"},
    "setCode": "MC01",
    "effectText": "When your opponent activates a Spell card, you may activate this card. Negate that Spell and send it to their Discard Pile.",
    "activationTrigger": "OnOpponentSpellActivation",
    "structuredEffects": [
      {"type": "NegateSpellAndDiscard", "target": "OpponentSpell"}
    ],
    "collectionNumber": "278/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 390,
    "name": "Death's Shield",
    "supertype": "Secret",
    "subtypes": ["Spell"],
    "rarity": "Common",
    "images": {"small": "CardImages/Secrets/SECRET-T-MirrorShield"},
    "setCode": "MC01",
    "effectText": "When your Creature is destroyed by your opponent's Creature, you can activate this card. Search your Deck for any two Magik cards. Show your opponent and place the cards in your Hand.",
    "activationTrigger": "OnOwnCreatureDestroyedByOpponent",
    "structuredEffects": [
      {
        "type": "SearchDeck",
        "category": "CardManipulation",
        "target": "PlayerSelf",
        "searchCriteria": {"cardSuperType": "Magik"},
        "amount": 2,
        "action": "AddToHandAndShow"
      }
    ],
    "collectionNumber": "237/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 391,
    "name": "Deception",
    "supertype": "Secret",
    "subtypes": ["Spell"],
    "rarity": "Rare",
    "images": {"small": "CardImages/Secrets/SECRET-T-Deception"},
    "setCode": "MC01",
    "effectText": "When your opponent's Creature attacks your Creature, you can activate this card. Switch your opponent's Creature's HP with the HP of your Creature. This switch lasts until the end of your opponent's turn. (this Spell only works if your Active Creature is level 4 or higher)",
    "activationTrigger": "OnOpponentAttackDeclaration",
    "structuredEffects": [
      {
        "type": "SwapHP",
        "category": "Disruption",
        "targets": ["OwnActiveCreature", "OpponentCreatureActive"],
        "duration": "EndOfOpponentTurn",
        "condition": {"type": "ActiveCreatureCheck", "minLevel": 4, "targetCreature": "OwnActiveCreature"}
      }
    ],
    "collectionNumber": "275/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 392,
    "name": "Dimmed Lights",
    "supertype": "Secret",
    "subtypes": ["Spell"],
    "rarity": "Rare",
    "images": {"small": "CardImages/Secrets/SECRET-T-DimmedLights"},
    "setCode": "MC01",
    "effectText": "When your opponent's Creature attacks your Creature, you can activate this card. Reduce the damage taken by -3000 HP.",
    "activationTrigger": "OnOpponentAttackDeclaration",
    "structuredEffects": [
      {
        "type": "ModifyDamage",
        "category": "Defense",
        "target": "OwnActiveCreature",
        "amount": -3000,
        "damageContext": "IncomingAttack"
      }
    ],
    "collectionNumber": "272/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 393,
    "name": "Electrical Trap",
    "supertype": "Secret",
    "subtypes": ["Spell"],
    "rarity": "Uncommon",
    "images": {"small": "CardImages/Secrets/SECRET-T-ElectricalTrap"},
    "setCode": "MC01",
    "effectText": "When your opponent's Creature attacks your Creature, you can activate this card. Negate their attack and Paralyze your opponent's Creature.",
    "activationTrigger": "OnOpponentAttackDeclaration",
    "structuredEffects": [
      {"type": "NegateAttack"},
      {"type": "ApplyStatus", "target": "OpponentCreatureActive", "status": "Paralyzed"}
    ],
    "collectionNumber": "271/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 394,
    "name": "Elemental Break",
    "supertype": "Secret",
    "subtypes": ["Spell"],
    "rarity": "Rare",
    "images": {"small": "CardImages/Secrets/SECRET-T-ElementalBreak"},
    "setCode": "MC01",
    "effectText": "When your opponent's Creature attacks your Creature, you can activate this card. Negate their attack and change their Creature's type to a random one of your choice. This effect will last until the end of your opponent's next turn. (your opponent cannot attack next turn unless they meet the Power requirements of the new specified typing)",
    "activationTrigger": "OnOpponentAttackDeclaration",
    "structuredEffects": [
      {"type": "NegateAttack"},
      {
        "type": "ChangeOpponentCreatureTypeRandomChoice",
        "category": "Disruption",
        "durationTurns": 1,
        "attackRestriction": "UnlessPowerRequirementsMet"
      }
    ],
    "collectionNumber": "267/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 395,
    "name": "Fire Snare",
    "supertype": "Secret",
    "subtypes": ["Spell"],
    "rarity": "Uncommon",
    "images": {"small": "CardImages/Secrets/SECRET-T-FireSnare"},
    "setCode": "MC01",
    "effectText": "When your opponent's Creature attacks your Creature, you can activate this card. Negate their attack and Burn your opponent's Creature.",
    "activationTrigger": "OnOpponentAttackDeclaration",
    "structuredEffects": [
      {"type": "NegateAttack"},
      {"type": "ApplyStatus", "target": "OpponentCreatureActive", "status": "Burned"}
    ],
    "collectionNumber": "265/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 396,
    "name": "Fool's Magik",
    "supertype": "Secret",
    "subtypes": ["Spell"],
    "rarity": "Rare",
    "images": {"small": "CardImages/Secrets/SECRET-T-FoolsMagik"},
    "setCode": "MC01",
    "effectText": "When your opponent plays a Magik card, you may activate this card. Negate that Magik and send it to their Discard Pile. This card blocks both Players from playing any Magik cards for their next two full turns. At the end of your opponent's second turn, send this card to the Discard Pile. (keep this card on the field until its effects wear off)",
    "activationTrigger": "OnOpponentMagikPlay",
    "structuredEffects": [
      {
        "type": "NegateMagikAndDiscard",
        "target": "OpponentMagik"
      },
      {
        "type": "ApplyFieldEffect",
        "duration": 2,
        "selfDestructsToDiscard": true,
        "subEffects": [
          {
            "type": "PreventCardTypePlay",
            "target": "BothPlayers",
            "cardSuperTypeToSearch": "Secret",
            "cardSubTypeToSearch": "Magik"
          }
        ]
      }
    ],
    "collectionNumber": "264/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 397,
    "name": "Forgotten Spells",
    "supertype": "Secret",
    "subtypes": ["Spell"],
    "rarity": "Rare",
    "images": {"small": "CardImages/Secrets/SECRET-T-ForgottenSpell"},
    "setCode": "MC01",
    "effectText": "When your opponent activates a Spell card, you may activate this card. Negate that Spell and send it to their Discard Pile. This card blocks both Players from playing or activating any Spell cards for their next two full turns. At the end of your opponent's second turn, send this card to the Discard Pile. (keep this card on the field until its effects wear off)",
    "activationTrigger": "OnOpponentSpellActivation",
    "structuredEffects": [
      {"type": "NegateSpellAndDiscard", "target": "OpponentSpell"},
      {
        "type": "ApplyFieldEffect",
        "duration": 2,
        "selfDestructsToDiscard": true,
        "subEffects": [
          {
            "type": "PreventCardTypePlay",
            "target": "BothPlayers",
            "cardSuperTypeToSearch": "Secret",
            "cardSubTypeToSearch": "Spell"
          }
        ]
      }
    ],
    "collectionNumber": "263/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 398,
    "name": "Frozen Trap",
    "supertype": "Secret",
    "subtypes": ["Spell"],
    "rarity": "Uncommon",
    "images": {"small": "CardImages/Secrets/SECRET-T-FrozenTrap"},
    "setCode": "MC01",
    "effectText": "When your opponent's Creature attacks your Creature, you can activate this card. Negate their attack and Freeze your opponent's Creature.",
    "activationTrigger": "OnOpponentAttackDeclaration",
    "structuredEffects": [
      {"type": "NegateAttack"},
      {"type": "ApplyStatus", "target": "OpponentCreatureActive", "status": "Frozen"}
    ],
    "collectionNumber": "261/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 399,
    "name": "Gravity Well",
    "supertype": "Secret",
    "subtypes": ["Spell"],
    "rarity": "Common",
    "images": {"small": "CardImages/Secrets/SECRET-T-GravityWell"},
    "setCode": "MC01",
    "effectText": "When your opponent plays a Magik card, you may activate this card. Negate that Magik and send it to their Discard Pile. Then, reduce your opponent's attack by -1000 HP for this turn.",
    "activationTrigger": "OnOpponentMagikPlay",
    "structuredEffects": [
      {
        "type": "NegateMagikAndDiscard",
        "target": "OpponentMagik"
      },
      {
        "type": "ModifyStats",
        "target": "OpponentActiveCreature",
        "statToModify": "Attack",
        "amount": -1000,
        "duration": 1
      }
    ],
    "collectionNumber": "257/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 400,
    "name": "Hazardous Fog",
    "supertype": "Secret",
    "subtypes": ["Spell"],
    "rarity": "Common",
    "images": {"small": "CardImages/Secrets/SECRET-T-PoisonousFog"},
    "setCode": "MC01",
    "effectText": "When your opponent plays a Magik card or activates a Spell card, you can activate this card. Negate that Magik or Spell and send it to their Discard Pile.",
    "activationTrigger": "OnOpponentMagikOrSpellPlayOrActivation",
    "structuredEffects": [
      {"type": "NegateMagikOrSpellAndDiscard", "target": "OpponentPlayedCard"}
    ],
    "collectionNumber": "224/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 401,
    "name": "Heavenly Hunt",
    "supertype": "Secret",
    "subtypes": ["Spell"],
    "rarity": "Rare",
    "images": {"small": "CardImages/Secrets/SECRET-T-HeavenlyHunt1"},
    "setCode": "MC01",
    "effectText": "You can only activate this Spell card if you have a level 8 or higher Wind Creature on the active field and at least one Creature named Winged Beast ... on your Bench. When your opponent destroys your level 8 Creature, you may activate this card. Special Summon Divine Beast Panterus from your Hand or Deck.",
    "activationTrigger": "OnOwnSpecificCreatureDestroyed",
    "condition": {
      "type": "And",
      "conditions": [
        {"type": "ActiveCreatureCheck", "minLevel": 8, "powerType": "Wind"},
        {"type": "BenchCreatureCheck", "creatureName": "Winged Beast", "minCount": 1},
        {"type": "DestroyedCreatureCheck", "minLevel": 8}
      ]
    },
    "structuredEffects": [
      {
        "type": "SummonCreature",
        "category": "Summoning",
        "target": "PlayerSelf",
        "summonTarget": {"name": "Divine Beast Panterus", "from": ["Hand", "Deck"]}
      }
    ],
    "collectionNumber": "249/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 402,
    "name": "Heavenly Hunt",
    "supertype": "Secret",
    "subtypes": ["Spell"],
    "rarity": "HiddenRare",
    "images": {"small": "CardImages/Secrets/SECRET-T-HeavenlyHunt2"},
    "setCode": "MC01",
    "effectText": "You can only activate this Spell card if you have a level 8 or higher Wind Creature on the active field and at least one Creature named Winged Beast ... on your Bench. When your opponent destroys your level 8 Creature, you may activate this card. Special Summon Divine Beast Panterus from your Hand or Deck.",
    "activationTrigger": "OnOwnSpecificCreatureDestroyed",
    "condition": {
      "type": "And",
      "conditions": [
        {"type": "ActiveCreatureCheck", "minLevel": 8, "powerType": "Wind"},
        {"type": "BenchCreatureCheck", "creatureName": "Winged Beast", "minCount": 1},
        {"type": "DestroyedCreatureCheck", "minLevel": 8}
      ]
    },
    "structuredEffects": [
      {
        "type": "SummonCreature",
        "category": "Summoning",
        "target": "PlayerSelf",
        "summonTarget": {"name": "Divine Beast Panterus", "from": ["Hand", "Deck"]}
      }
    ],
    "collectionNumber": "318/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 403,
    "name": "Heavenly Hunt",
    "supertype": "Secret",
    "subtypes": ["Spell"],
    "rarity": "Borderless",
    "images": {"small": "CardImages/Secrets/SECRET-T-HeavenlyHunt3"},
    "setCode": "MC01",
    "effectText": "You can only activate this Spell card if you have a level 8 or higher Wind Creature on the active field and at least one Creature named Winged Beast ... on your Bench. When your opponent destroys your level 8 Creature, you may activate this card. Special Summon Divine Beast Panterus from your Hand or Deck.",
    "activationTrigger": "OnOwnSpecificCreatureDestroyed",
    "condition": {
      "type": "And",
      "conditions": [
        {"type": "ActiveCreatureCheck", "minLevel": 8, "powerType": "Wind"},
        {"type": "BenchCreatureCheck", "creatureName": "Winged Beast", "minCount": 1},
        {"type": "DestroyedCreatureCheck", "minLevel": 8}
      ]
    },
    "structuredEffects": [
      {
        "type": "SummonCreature",
        "category": "Summoning",
        "target": "PlayerSelf",
        "summonTarget": {"name": "Divine Beast Panterus", "from": ["Hand", "Deck"]}
      }
    ],
    "collectionNumber": "318/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 404,
    "name": "Hole in the Earth",
    "supertype": "Secret",
    "subtypes": ["Spell"],
    "rarity": "Uncommon",
    "images": {"small": "CardImages/Secrets/SECRET-T-HoleintheEarth"},
    "setCode": "MC01",
    "effectText": "When your opponent's Creature attacks your Creature, you can activate this card. Reduce the damage taken by -2000 HP.",
    "activationTrigger": "OnOpponentAttackDeclaration",
    "structuredEffects": [
      {
        "type": "ModifyDamage",
        "category": "Defense",
        "target": "OwnActiveCreature",
        "amount": -2000,
        "damageContext": "IncomingAttack"
      }
    ],
    "collectionNumber": "248/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 405,
    "name": "Life Leech",
    "supertype": "Secret",
    "subtypes": ["Spell"],
    "rarity": "Uncommon",
    "images": {"small": "CardImages/Secrets/SECRET-T-LifeLeech"},
    "setCode": "MC01",
    "effectText": "When your oppopnent's Creature attacks your Creature, you can activate this card. Reduce the damage taken by -2000 HP and apply +2000 damage to your opponent's Creature.",
    "activationTrigger": "OnOpponentAttackDeclaration",
    "structuredEffects": [
      {
        "type": "ModifyDamage",
        "category": "Defense",
        "target": "OwnActiveCreature",
        "amount": -2000,
        "damageContext": "IncomingAttack"
      },
      {
        "type": "DealDamage",
        "category": "Retaliation",
        "target": "OpponentCreatureActive",
        "amount": 2000
      }
    ],
    "collectionNumber": "247/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 406,
    "name": "Lifeline",
    "supertype": "Secret",
    "subtypes": ["Spell"],
    "rarity": "Rare",
    "images": {"small": "CardImages/Secrets/SECRET-T-Lifeline"},
    "setCode": "MC01",
    "effectText": "When your Creature is destroyed by your opponent's Creature, you can activate this card. Your opponent cannot draw any Prize Cards this turn.",
    "activationTrigger": "OnOwnCreatureDestroyedByOpponent",
    "structuredEffects": [
      {
        "type": "PreventPrizeClaim",
        "category": "Control",
        "target": "PlayerOpponent",
        "durationTurns": 1 
      }
    ],
    "collectionNumber": "246/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 407,
    "name": "Lilith's Garden",
    "supertype": "Secret",
    "subtypes": ["Spell"],
    "rarity": "Rare",
    "images": {"small": "CardImages/Secrets/SECRET-T-Lilith'sGarden1"},
    "setCode": "MC01",
    "effectText": "You can only activate this Spell card if you have a level 8 or higher Forest Creature on the active field and at least three or more Forest Creatures on your Bench. When your opponent destroys your level 8 Creature, you may activate this card. Special Summon Lilith, Forest Pixie from Deck. (Lilith, Forest Pixie must be in your Deck in order to be Special Summoned)",
    "activationTrigger": "OnOwnSpecificCreatureDestroyed",
    "condition": {
      "type": "And",
      "conditions": [
        {"type": "ActiveCreatureCheck", "minLevel": 8, "powerType": "Forest"},
        {"type": "BenchCreatureCount", "powerType": "Forest", "minCount": 3},
        {"type": "DestroyedCreatureCheck", "minLevel": 8},
        {"type": "CardInDeckCheck", "cardName": "Lilith, Forest Pixie"}
      ]
    },
    "structuredEffects": [
      {
        "type": "SummonCreature",
        "category": "Summoning",
        "target": "PlayerSelf",
        "summonTarget": {"name": "Lilith, Forest Pixie", "from": ["Deck"]}
      }
    ],
    "collectionNumber": "245/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 408,
    "name": "Lilith's Garden",
    "supertype": "Secret",
    "subtypes": ["Spell"],
    "rarity": "HiddenRare",
    "images": {"small": "CardImages/Secrets/SECRET-T-Lilith'sGarden2"},
    "setCode": "MC01",
    "effectText": "You can only activate this Spell card if you have a level 8 or higher Forest Creature on the active field and at least three or more Forest Creatures on your Bench. When your opponent destroys your level 8 Creature, you may activate this card. Special Summon Lilith, Forest Pixie from Deck. (Lilith, Forest Pixie must be in your Deck in order to be Special Summoned)",
    "activationTrigger": "OnOwnSpecificCreatureDestroyed",
    "condition": {
      "type": "And",
      "conditions": [
        {"type": "ActiveCreatureCheck", "minLevel": 8, "powerType": "Forest"},
        {"type": "BenchCreatureCount", "powerType": "Forest", "minCount": 3},
        {"type": "DestroyedCreatureCheck", "minLevel": 8},
        {"type": "CardInDeckCheck", "cardName": "Lilith, Forest Pixie"}
      ]
    },
    "structuredEffects": [
      {
        "type": "SummonCreature",
        "category": "Summoning",
        "target": "PlayerSelf",
        "summonTarget": {"name": "Lilith, Forest Pixie", "from": ["Deck"]}
      }
    ],
    "collectionNumber": "317/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 409,
    "name": "Lilith's Garden",
    "supertype": "Secret",
    "subtypes": ["Spell"],
    "rarity": "Borderless",
    "images": {"small": "CardImages/Secrets/SECRET-T-Lilith'sGarden3"},
    "setCode": "MC01",
    "effectText": "You can only activate this Spell card if you have a level 8 or higher Forest Creature on the active field and at least three or more Forest Creatures on your Bench. When your opponent destroys your level 8 Creature, you may activate this card. Special Summon Lilith, Forest Pixie from Deck. (Lilith, Forest Pixie must be in your Deck in order to be Special Summoned)",
    "activationTrigger": "OnOwnSpecificCreatureDestroyed",
    "condition": {
      "type": "And",
      "conditions": [
        {"type": "ActiveCreatureCheck", "minLevel": 8, "powerType": "Forest"},
        {"type": "BenchCreatureCount", "powerType": "Forest", "minCount": 3},
        {"type": "DestroyedCreatureCheck", "minLevel": 8},
        {"type": "CardInDeckCheck", "cardName": "Lilith, Forest Pixie"}
      ]
    },
    "structuredEffects": [
      {
        "type": "SummonCreature",
        "category": "Summoning",
        "target": "PlayerSelf",
        "summonTarget": {"name": "Lilith, Forest Pixie", "from": ["Deck"]}
      }
    ],
    "collectionNumber": "317/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 410,
    "name": "Masked Illusion",
    "supertype": "Secret",
    "subtypes": ["Spell"],
    "rarity": "Uncommon",
    "images": {"small": "CardImages/Secrets/SECRET-T-MaskedIllusion"},
    "setCode": "MC01",
    "effectText": "When your Creature is destroyed by your opponent's Creature, you can activate this card. Create an Illusion that blocks your opponent's attack for this turn as well as their next turn. At the end of your opponent's next turn, send this card to the Discard Pile. (keep this card on the field until its effects wear off)",
    "activationTrigger": "OnOwnCreatureDestroyedByOpponent",
    "structuredEffects": [
      {
        "type": "BlockAttack",
        "category": "Defense",
        "durationTurns": 2,
        "selfDestructsToDiscard": true,
        "remainsOnFieldDuration": "UntilEffectWearsOff"
      }
    ],
    "collectionNumber": "243/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 411,
    "name": "Meteor Shower",
    "supertype": "Secret",
    "subtypes": ["Spell"],
    "rarity": "Uncommon",
    "images": {"small": "CardImages/Secrets/SECRET-T-MeteorShower"},
    "setCode": "MC01",
    "effectText": "When your opponent activates a Spell card, you may activate this card. Negate that Spell and send it to their Discard Pile. Reveal any other Spell cards your opponent may have. Place them face down after.",
    "activationTrigger": "OnOpponentSpellActivation",
    "structuredEffects": [
      {"type": "NegateSpellAndDiscard", "target": "OpponentSpell"},
      {"type": "RevealOpponentSpellsAndSetFaceDown", "target": "PlayerOpponent"}
    ],
    "collectionNumber": "242/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 412,
    "name": "Mind Control",
    "supertype": "Secret",
    "subtypes": ["Spell"],
    "rarity": "Rare",
    "images": {"small": "CardImages/Secrets/SECRET-T-MindControl"},
    "setCode": "MC01",
    "effectText": "When your opponent's Creature attacks your Creature, you can activate this card. Negate their attack and remove all Power cards attached to your opponent's Creature.",
    "activationTrigger": "OnOpponentAttackDeclaration",
    "structuredEffects": [
      {"type": "NegateAttack"},
      {"type": "RemoveAllPowerFromOpponentActive"}
    ],
    "collectionNumber": "239/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 413,
    "name": "Misfit",
    "supertype": "Secret",
    "subtypes": ["Spell"],
    "rarity": "Uncommon",
    "images": {"small": "CardImages/Secrets/SECRET-T-Misfit"},
    "setCode": "MC01",
    "effectText": "When your Creature is attacked by your opponent's Creature, you can activate this card. Switch your Active Creature with a Benched Creature of equal or lower level. The switched-in Creature takes the damage from the attack instead.",
    "activationTrigger": "OnOwnCreatureAttackedByOpponent",
    "structuredEffects": [
      {
        "type": "SwitchOwnActiveWithBench",
        "category": "Defensive",
        "levelRestriction": "equalOrLower",
        "takesAttackDamage": true
      }
    ],
    "collectionNumber": "173/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 414,
    "name": "Molten Lava",
    "supertype": "Secret",
    "subtypes": ["Spell"],
    "rarity": "Uncommon",
    "images": {"small": "CardImages/Secrets/SECRET-T-MoltenLava"},
    "setCode": "MC01",
    "effectText": "When your opponent's Creature attacks your Creature, you can activate this card. Your Creature still takes damage, however, your opponent's Creature is Burned taking double Burn damage.",
    "activationTrigger": "OnOpponentAttackDeclaration",
    "structuredEffects": [
      {
        "type": "TakeDamageAndApplyBurn",
        "category": "Retaliation",
        "target": "OpponentCreatureActive",
        "burnDamageMultiplier": 2
      }
    ],
    "collectionNumber": "235/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 415,
    "name": "Moonlight Awakening",
    "supertype": "Secret",
    "subtypes": ["Spell"],
    "rarity": "Rare",
    "images": {"small": "CardImages/Secrets/SECRET-T-MoonlightAwakening1"},
    "setCode": "MC01",
    "effectText": "You can only activate this Spell card if you have Pebblephant on the active field. When your opponent destroys Pebblephant, you may activate this card. Special Summon Werelephant from your Hand or Deck.",
    "activationTrigger": "OnOwnSpecificCreatureDestroyed",
    "condition": {
      "type": "And",
      "conditions": [
        {"type": "ActiveCreatureCheck", "creatureName": "Pebblephant"},
        {"type": "DestroyedCreatureCheck", "creatureName": "Pebblephant"}
      ]
    },
    "structuredEffects": [
      {
        "type": "SummonCreature",
        "category": "Summoning",
        "target": "PlayerSelf",
        "summonTarget": {"name": "Werelephant", "from": ["Hand", "Deck"]}
      }
    ],
    "collectionNumber": "234/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 416,
    "name": "Moonlight Awakening",
    "supertype": "Secret",
    "subtypes": ["Spell"],
    "rarity": "HiddenRare",
    "images": {"small": "CardImages/Secrets/SECRET-T-MoonlightAwakening2"},
    "setCode": "MC01",
    "effectText": "You can only activate this Spell card if you have Pebblephant on the active field. When your opponent destroys Pebblephant, you may activate this card. Special Summon Werelephant from your Hand or Deck.",
    "activationTrigger": "OnOwnSpecificCreatureDestroyed",
    "condition": {
      "type": "And",
      "conditions": [
        {"type": "ActiveCreatureCheck", "creatureName": "Pebblephant"},
        {"type": "DestroyedCreatureCheck", "creatureName": "Pebblephant"}
      ]
    },
    "structuredEffects": [
      {
        "type": "SummonCreature",
        "category": "Summoning",
        "target": "PlayerSelf",
        "summonTarget": {"name": "Werelephant", "from": ["Hand", "Deck"]}
      }
    ],
    "collectionNumber": "314/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 417,
    "name": "Moonlight Awakening",
    "supertype": "Secret",
    "subtypes": ["Spell"],
    "rarity": "Borderless",
    "images": {"small": "CardImages/Secrets/SECRET-T-MoonlightAwakening3"},
    "setCode": "MC01",
    "effectText": "You can only activate this Spell card if you have Pebblephant on the active field. When your opponent destroys Pebblephant, you may activate this card. Special Summon Werelephant from your Hand or Deck.",
    "activationTrigger": "OnOwnSpecificCreatureDestroyed",
    "condition": {
      "type": "And",
      "conditions": [
        {"type": "ActiveCreatureCheck", "creatureName": "Pebblephant"},
        {"type": "DestroyedCreatureCheck", "creatureName": "Pebblephant"}
      ]
    },
    "structuredEffects": [
      {
        "type": "SummonCreature",
        "category": "Summoning",
        "target": "PlayerSelf",
        "summonTarget": {"name": "Werelephant", "from": ["Hand", "Deck"]}
      }
    ],
    "collectionNumber": "314/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 418,
    "name": "Not Today",
    "supertype": "Secret",
    "subtypes": ["Spell"],
    "rarity": "Rare",
    "images": {"small": "CardImages/Secrets/SECRET-T-NotToday"},
    "setCode": "MC01",
    "effectText": "When your opponent performs a sacrifice on their Bench, you may activate this card. Send your opponent's newly summoned Creature back to their Hand.",
    "activationTrigger": "OnOpponentSacrificeOnBench",
    "structuredEffects": [
      {
        "type": "ReturnToHand",
        "category": "Disruption",
        "target": "OpponentNewlySummonedCreature"
      }
    ],
    "collectionNumber": "228/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 419,
    "name": "Overcharged",
    "supertype": "Secret",
    "subtypes": ["Spell"],
    "rarity": "Uncommon",
    "images": {"small": "CardImages/Secrets/SECRET-T-Overcharged"},
    "setCode": "MC01",
    "effectText": "When your opponent's Creature attacks your Creature, you can activate this card. Your Creature still takes damage, however, your opponent's Creature loses all of its attached Power Cards.",
    "activationTrigger": "OnOpponentAttackDeclaration",
    "structuredEffects": [
      {
        "type": "TakeDamageAndRemoveOpponentPower",
        "category": "Retaliation",
        "target": "OpponentCreatureActive",
        "powerRemovalAmount": "All"
      }
    ],
    "collectionNumber": "227/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 420,
    "name": "Portal Home",
    "supertype": "Secret",
    "subtypes": ["Spell"],
    "rarity": "Rare",
    "images": {"small": "CardImages/Secrets/SECRET-T-PortalHome"},
    "setCode": "MC01",
    "effectText": "When your opponent's Creature attacks your Creature, you can activate this card. Negate their attack and switch the attacking Creature with another Creature from your opponent's Bench. (all Power cards remain attached to the swapped out Creature)",
    "activationTrigger": "OnOpponentAttackDeclaration",
    "structuredEffects": [
      {"type": "NegateAttack"},
      {
        "type": "SwitchOpponentActiveWithBench",
        "category": "Disruption",
        "retainPowerCards": true
      }
    ],
    "collectionNumber": "220/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 421,
    "name": "Posionous Vile",
    "supertype": "Secret",
    "subtypes": ["Spell"],
    "rarity": "Uncommon",
    "images": {"small": "CardImages/Secrets/SECRET-T-PoisonedTrap"},
    "setCode": "MC01",
    "effectText": "When your opponent's Creature attacks your Creature, you can activate this card. Your Creature still takes damage, however, your opponent's Creature is Poisoned, taking double Poison damage.",
    "activationTrigger": "OnOpponentAttackDeclaration",
    "structuredEffects": [
      {
        "type": "TakeDamageAndApplyPoison",
        "category": "Retaliation",
        "target": "OpponentCreatureActive",
        "poisonDamageMultiplier": 2
      }
    ],
    "collectionNumber": "226/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 422,
    "name": "Power Lock",
    "supertype": "Secret",
    "subtypes": ["Spell"],
    "rarity": "Common",
    "images": {"small": "CardImages/Secrets/SECRET-T-PowerLock"},
    "setCode": "MC01",
    "effectText": "When your opponent's Creature attacks your Creature, you can activate this card. Negate their attack and remove one Power card attached to your opponent's Creature.",
    "activationTrigger": "OnOpponentAttackDeclaration",
    "structuredEffects": [
      {"type": "NegateAttack"},
      {
        "type": "RemovePowerCard",
        "target": "OpponentCreatureActive",
        "amount": 1,
        "criteria": "AttachedAny"
      }
    ],
    "collectionNumber": "219/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 423,
    "name": "Pyschic Wall",
    "supertype": "Secret",
    "subtypes": ["Spell"],
    "rarity": "Rare",
    "images": {"small": "CardImages/Secrets/SECRET-T-PsychicWall"},
    "setCode": "MC01",
    "effectText": "When your opponent's Creature attacks your Creature, you can activate this card. Reduce your opponent's attack by -2000 for this turn as well as their next two turns. At the end of your opponent's third turn, send this card to the Discard Pile. (keep this card on the field until its effects wear off)",
    "activationTrigger": "OnOpponentAttackDeclaration",
    "structuredEffects": [
      {
        "type": "ReduceOpponentAttackOverTime",
        "category": "Defense",
        "target": "OpponentCreatureActive",
        "amount": -2000,
        "durationTurns": 3,
        "selfDestructsToDiscard": true,
        "remainsOnFieldDuration": "UntilEffectWearsOff"
      }
    ],
    "collectionNumber": "218/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 424,
    "name": "Reflective Armor",
    "supertype": "Secret",
    "subtypes": ["Spell"],
    "rarity": "Common",
    "images": {"small": "CardImages/Secrets/SECRET-T-ReflectiveArmor"},
    "setCode": "MC01",
    "effectText": "When your opponent's Creature attacks your Creature, you can activate this card. Reflect +1000 damage back to your opponent's Creature.",
    "activationTrigger": "OnOpponentAttackDeclaration",
    "structuredEffects": [
      {
        "type": "ReflectDamage",
        "category": "Retaliation",
        "target": "OpponentCreatureActive",
        "amount": 1000
      }
    ],
    "collectionNumber": "217/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 425,
    "name": "Reversed Time",
    "supertype": "Secret",
    "subtypes": ["Spell"],
    "rarity": "Uncommon",
    "images": {"small": "CardImages/Secrets/SECRET-T-ReversedTime"},
    "setCode": "MC01",
    "effectText": "When your opponent's Creature attacks your Creature, you can activate this card. Your Creature still takes damage, however, your opponent's Creature is returned to their Hand, discarding all attached Power cards to their Discard Pile.",
    "activationTrigger": "OnOpponentAttackDeclaration",
    "structuredEffects": [
      {"type": "TakeDamage"}, 
      {
        "type": "ReturnToHandAndDiscardAttachedPower",
        "category": "Disruption",
        "target": "OpponentCreatureActive"
      }
    ],
    "collectionNumber": "210/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 426,
    "name": "Rift in Time",
    "supertype": "Secret",
    "subtypes": ["Spell"],
    "rarity": "Rare",
    "images": {"small": "CardImages/Secrets/SECRET-T-RiftinTime"},
    "setCode": "MC01",
    "effectText": "When your opponent's Creature attacks your Creature, you can activate this card. Negate the damage and return your opponent's Creature to the bottom of their Deck, discarding all attached Power cards to their Discard Pile.",
    "activationTrigger": "OnOpponentAttackDeclaration",
    "structuredEffects": [
      {"type": "NegateDamage"},
      {
        "type": "ReturnToBottomOfDeckAndDiscardAttachedPower",
        "category": "Disruption",
        "target": "OpponentCreatureActive"
      }
    ],
    "collectionNumber": "184/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 427,
    "name": "Savage Jungle",
    "supertype": "Secret",
    "subtypes": ["Spell"],
    "rarity": "Common",
    "images": {"small": "CardImages/Secrets/SECRET-T-SavageJungle"},
    "setCode": "MC01",
    "effectText": "When your opponent's Creature attacks your Creature, you can activate this card. Your Creature still takes damage, however, your opponent's Creature takes -1000 damage as well.",
    "activationTrigger": "OnOpponentAttackDeclaration",
    "structuredEffects": [
      {"type": "TakeDamage"},
      {
        "type": "DealDamage",
        "category": "Retaliation",
        "target": "OpponentCreatureActive",
        "amount": 1000
      }
    ],
    "collectionNumber": "209/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 428,
    "name": "Scaredy Cat",
    "supertype": "Secret",
    "subtypes": ["Spell"],
    "rarity": "Uncommon",
    "images": {"small": "CardImages/Secrets/SECRET-T-ScaredyCat"},
    "setCode": "MC01",
    "effectText": "When your opponent plays a Magik card or activates a Spell card, you may activate this card. Negate that Magik or Spell and send it to their Discard Pile. Then, reduce all incoming damage from your opponent by -1000 for the next two turns. (keep this card on the field until its effects wear off)",
    "activationTrigger": "OnOpponentMagikOrSpellPlayOrActivation",
    "structuredEffects": [
      {"type": "NegateMagikOrSpellAndDiscard", "target": "OpponentPlayedCard"},
      {
        "type": "ReduceDamageTakenOverTime",
        "category": "Defense",
        "target": "PlayerSelf",
        "amount": -1000,
        "durationTurns": 2,
        "remainsOnFieldDuration": "UntilEffectWearsOff"
      }
    ],
    "collectionNumber": "207/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 429,
    "name": "Shadow Bind",
    "supertype": "Secret",
    "subtypes": ["Spell"],
    "rarity": "Common",
    "images": {"small": "CardImages/Secrets/SECRET-T-ShadowBind"},
    "setCode": "MC01",
    "effectText": "When your Creature is destroyed by your opponent's Creature, you can activate this card. Bind your opponent's Creature preventing it from Retreating until it is healed or destroyed. (keep this card on the field until its effects wear off)",
    "activationTrigger": "OnOwnCreatureDestroyedByOpponent",
    "structuredEffects": [
      {
        "type": "ApplyStatus",
        "category": "Control",
        "target": "OpponentCreatureActive",
        "status": "CannotRetreat",
        "duration": "UntilHealedOrDestroyed",
        "remainsOnFieldDuration": "UntilEffectWearsOff"
      }
    ],
    "collectionNumber": "203/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 430,
    "name": "Shattered Dreams",
    "supertype": "Secret",
    "subtypes": ["Spell"],
    "rarity": "Common",
    "images": {"small": "CardImages/Secrets/SECRET-T-ShatteredDreams"},
    "setCode": "MC01",
    "effectText": "When your opponent plays a Magik card, you may activate this card. Negate that Magik and send it to their Discard Pile and force your opponent to discard their entire Hand. Drawing the same number of cards minus one. (if your opponent has one card, they draw one card)",
    "activationTrigger": "OnOpponentMagikPlay",
    "structuredEffects": [
      {"type": "NegateMagikAndDiscard", "target": "OpponentMagik"},
      {
        "type": "ForceOpponentDiscardHandAndRedrawMinusOne",
        "category": "Disruption",
        "target": "PlayerOpponent"
      }
    ],
    "collectionNumber": "202/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 431,
    "name": "Sonic Shockwave",
    "supertype": "Secret",
    "subtypes": ["Spell"],
    "rarity": "Uncommon",
    "images": {"small": "CardImages/Secrets/SECRET-T-SonicShockwave"},
    "setCode": "MC01",
    "effectText": "When your opponent plays a Magik card, you may activate this card. Negate that Magik and send it to their Discard Pile. Then, reduce your opponent's attack by -2000 HP for this turn.",
    "activationTrigger": "OnOpponentMagikPlay",
    "structuredEffects": [
      {"type": "NegateMagikAndDiscard", "target": "OpponentMagik"},
      {"type": "ModifyStatsTemporary", "target": "OpponentCreatureActive", "stat": "Attack", "amount": -2000, "durationTurns": 1}
    ],
    "collectionNumber": "200/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 432,
    "name": "Soul Drain",
    "supertype": "Secret",
    "subtypes": ["Spell"],
    "rarity": "Common",
    "images": {"small": "CardImages/Secrets/SECRET-T-SoulDrain"},
    "setCode": "MC01",
    "effectText": "When your opponent's Creature attacks your Creature, you can activate this card. Negate their attack and remove one Power card attached to their Creature.",
    "activationTrigger": "OnOpponentAttackDeclaration",
    "structuredEffects": [
      {"type": "NegateAttack"},
      {
        "type": "RemovePowerCard",
        "target": "OpponentCreatureActive",
        "amount": 1,
        "criteria": "AttachedAny"
      }
    ],
    "collectionNumber": "197/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 433,
    "name": "Spell Catcher",
    "supertype": "Secret",
    "subtypes": ["Spell"],
    "rarity": "Common",
    "images": {"small": "CardImages/Secrets/SECRET-T-Wimp"},
    "setCode": "MC01",
    "effectText": "When your opponent activates a Spell card or Plays a Magik card, you may activate this card. Negate that Spell and send it to their Discard Pile. Your opponent cannot play or activate any Magik or Spell cards through the end of the next turn.",
    "activationTrigger": "OnOpponentSpellOrMagikActivationOrPlay",
    "structuredEffects": [
      {"type": "NegateCardAndDiscard", "target": "OpponentPlayedCard"},
      {
        "type": "ApplyFieldEffect",
        "duration": 1,
        "selfDestructsToDiscard": true,
        "subEffects": [
          {
            "type": "PreventCardTypePlay",
            "target": "OpponentPlayer",
            "cardSuperTypeToSearch": "Secret"
          }
        ]
      }
    ],
    "collectionNumber": "180/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 434,
    "name": "Spell Shield",
    "supertype": "Secret",
    "subtypes": ["Spell"],
    "rarity": "Common",
    "images": {"small": "CardImages/Secrets/SECRET-T-SpellShield"},
    "setCode": "MC01",
    "effectText": "When your opponent activates a Spell card, you may activate this card. Negate that Spell and send it to their Discard Pile and Confuse your opponent's Creature.",
    "activationTrigger": "OnOpponentSpellActivation",
    "structuredEffects": [
      {"type": "NegateSpellAndDiscard", "target": "OpponentSpell"},
      {"type": "ApplyStatus", "target": "OpponentCreatureActive", "status": "Confused"}
    ],
    "collectionNumber": "196/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 435,
    "name": "Spirit Guide",
    "supertype": "Secret",
    "subtypes": ["Spell"],
    "rarity": "Rare",
    "images": {"small": "CardImages/Secrets/SECRET-T-SpiritGuide1"},
    "setCode": "MC01",
    "effectText": "You can only activate this Spell card if you have a level 8 or higher Earth Creature on the active field and at least one Forest type on your Bench. When your opponent destroys your level 8 Creature, you may activate this card. Special Summon Isxóhe from your Hand or Deck.",
    "activationTrigger": "OnOwnSpecificCreatureDestroyed",
    "condition": {
      "type": "And",
      "conditions": [
        {"type": "ActiveCreatureCheck", "minLevel": 8, "powerType": "Earth"},
        {"type": "BenchCreatureCheck", "powerType": "Forest", "minCount": 1},
        {"type": "DestroyedCreatureCheck", "minLevel": 8}
      ]
    },
    "structuredEffects": [
      {
        "type": "SummonCreature",
        "category": "Summoning",
        "target": "PlayerSelf",
        "summonTarget": {"name": "Isxóhe", "from": ["Hand", "Deck"]}
      }
    ],
    "collectionNumber": "195/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 436,
    "name": "Spirit Guide",
    "supertype": "Secret",
    "subtypes": ["Spell"],
    "rarity": "HiddenRare",
    "images": {"small": "CardImages/Secrets/SECRET-T-SpiritGuide2"},
    "setCode": "MC01",
    "effectText": "You can only activate this Spell card if you have a level 8 or higher Earth Creature on the active field and at least one Forest type on your Bench. When your opponent destroys your level 8 Creature, you may activate this card. Special Summon Isxóhe from your Hand or Deck.",
    "activationTrigger": "OnOwnSpecificCreatureDestroyed",
    "condition": {
      "type": "And",
      "conditions": [
        {"type": "ActiveCreatureCheck", "minLevel": 8, "powerType": "Earth"},
        {"type": "BenchCreatureCheck", "powerType": "Forest", "minCount": 1},
        {"type": "DestroyedCreatureCheck", "minLevel": 8}
      ]
    },
    "structuredEffects": [
      {
        "type": "SummonCreature",
        "category": "Summoning",
        "target": "PlayerSelf",
        "summonTarget": {"name": "Isxóhe", "from": ["Hand", "Deck"]}
      }
    ],
    "collectionNumber": "313/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 437,
    "name": "Spirit Guide",
    "supertype": "Secret",
    "subtypes": ["Spell"],
    "rarity": "Borderless",
    "images": {"small": "CardImages/Secrets/SECRET-T-SpiritGuide3"},
    "setCode": "MC01",
    "effectText": "You can only activate this Spell card if you have a level 8 or higher Earth Creature on the active field and at least one Forest type on your Bench. When your opponent destroys your level 8 Creature, you may activate this card. Special Summon Isxóhe from your Hand or Deck.",
    "activationTrigger": "OnOwnSpecificCreatureDestroyed",
    "condition": {
      "type": "And",
      "conditions": [
        {"type": "ActiveCreatureCheck", "minLevel": 8, "powerType": "Earth"},
        {"type": "BenchCreatureCheck", "powerType": "Forest", "minCount": 1},
        {"type": "DestroyedCreatureCheck", "minLevel": 8}
      ]
    },
    "structuredEffects": [
      {
        "type": "SummonCreature",
        "category": "Summoning",
        "target": "PlayerSelf",
        "summonTarget": {"name": "Isxóhe", "from": ["Hand", "Deck"]}
      }
    ],
    "collectionNumber": "313/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 438,
    "name": "Strict Orders",
    "supertype": "Secret",
    "subtypes": ["Spell"],
    "rarity": "Uncommon",
    "images": {"small": "CardImages/Secrets/SECRET-T-StrictOrders"},
    "setCode": "MC01",
    "effectText": "When your opponent activates a Spell card, you may activate this card. Negate that Spell and send it to their Discard Pile. This card blocks both Players from playing any Spell cards for their next two full turns. At the end of your opponent's second turn, send this card to the Discard Pile. (keep this card on the field until its effects wear off)",
    "activationTrigger": "OnOpponentSpellActivation",
    "structuredEffects": [
      {"type": "NegateSpellAndDiscard", "target": "OpponentSpell"},
      {
        "type": "ApplyFieldEffect",
        "duration": 2,
        "selfDestructsToDiscard": true,
        "subEffects": [
          {
            "type": "PreventCardTypePlay",
            "target": "BothPlayers",
            "cardSuperTypeToSearch": "Secret",
            "cardSubTypeToSearch": "Spell"
          }
        ]
      }
    ],
    "collectionNumber": "188/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 439,
    "name": "System Reset",
    "supertype": "Secret",
    "subtypes": ["Spell"],
    "rarity": "Uncommon",
    "images": {"small": "CardImages/Secrets/SECRET-T-SystemReset"},
    "setCode": "MC01",
    "effectText": "When your opponent plays a Magik card, you may activate this card. Negate that Magik and send it to their Discard Pile. Then, return any two Power cards from your Discard Pile back to your Hand.",
    "activationTrigger": "OnOpponentMagikPlay",
    "structuredEffects": [
      {"type": "NegateMagikAndDiscard", "target": "OpponentMagik"},
      {
        "type": "ReturnCardsFromDiscardToHand",
        "target": "PlayerSelf",
        "amount": 2,
        "cardCriteria": {"cardSuperType": "Power", "anyType": true}
      }
    ],
    "collectionNumber": "185/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 440,
    "name": "Unseen Forces",
    "supertype": "Secret",
    "subtypes": ["Spell"],
    "rarity": "Common",
    "images": {"small": "CardImages/Secrets/SECRET-T-UnseenForces"},
    "setCode": "MC01",
    "effectText": "When your opponent activates a Spell card, you may activate this card. Negate that Spell and send it to their Discard Pile and discard one card at random from your opponent's Hand.",
    "activationTrigger": "OnOpponentSpellActivation",
    "structuredEffects": [
      { "type": "NegateSpellAndDiscard", "target": "OpponentSpell" },
      {
        "type": "DiscardCardsFromHand",
        "target": "PlayerOpponent",
        "amount": 1,
        "discardMethod": "Random"
      }
    ],
    "collectionNumber": "183/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 441,
    "name": "Weakling",
    "supertype": "Secret",
    "subtypes": ["Spell"],
    "rarity": "Uncommon",
    "images": {"small": "CardImages/Secrets/SECRET-T-Weakling"},
    "setCode": "MC01",
    "effectText": "When your opponent activates a Spell card, you may activate this card. Negate that Spell and send it to their Discard Pile. Then, return any two Power cards from your Discard Pile back to your Hand.",
    "activationTrigger": "OnOpponentSpellActivation",
    "structuredEffects": [
      {"type": "NegateSpellAndDiscard", "target": "OpponentSpell"},
      {
        "type": "ReturnCardsFromDiscardToHand",
        "target": "PlayerSelf",
        "amount": 2,
        "cardCriteria": {"cardSuperType": "Power", "anyType": true}
      }
    ],
    "collectionNumber": "182/311",
    "illustrator": "Mystik Creatures"
  },

  {
    "id": 442,
    "name": "Ancient Forests of Rehm",
    "supertype": "Secret",
    "subtypes": ["Terrain"],
    "rarity": "Uncommon",
    "images": {"small": "CardImages/Secrets/SECRET-TR-AncientForestsofRehm"},
    "setCode": "MC01",
    "effectText": "When this card is played, discard any other Terrain card. All Forest Creatures on the active field gain +1000 attack and +1000 HP.",
    "structuredEffects": [
      {"type": "DiscardOtherTerrain"},
      {
        "type": "ModifyStatGlobal",
        "category": "FieldControl",
        "target": "AllCreaturesInPlay",
        "statToModify": "Attack",
        "amount": 1000,
        "filterPowerType": "Forest"
      },
      {
        "type": "ModifyStatGlobal",
        "category": "FieldControl",
        "target": "AllCreaturesInPlay",
        "statToModify": "MaxHP",
        "amount": 1000,
        "filterPowerType": "Forest"
      }
    ],
    "collectionNumber": "290/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 443,
    "name": "Aquatic Paradise",
    "supertype": "Secret",
    "subtypes": ["Terrain"],
    "rarity": "Rare",
    "images": {"small": "CardImages/Secrets/SECRET-TR-AquaticParadise"},
    "setCode": "MC01",
    "effectText": "When this card is played, discard any other Terrain card. All Fire and Wind Creatures on the active field lose -1000 HP and -1000 attack. All Water and Forest Creatures on the active field gain +1000 HP and +1000 attack.",
    "structuredEffects": [
      {"type": "DiscardOtherTerrain"},
      {
        "type": "ModifyStatGlobal",
        "category": "FieldControl",
        "target": "AllCreaturesInPlay",
        "statToModify": "MaxHP",
        "amount": -1000,
        "filterPowerTypes": ["Fire", "Wind"]
      },
      {
        "type": "ModifyStatGlobal",
        "category": "FieldControl",
        "target": "AllCreaturesInPlay",
        "statToModify": "Attack",
        "amount": -1000,
        "filterPowerTypes": ["Fire", "Wind"]
      },
      {
        "type": "ModifyStatGlobal",
        "category": "FieldControl",
        "target": "AllCreaturesInPlay",
        "statToModify": "MaxHP",
        "amount": 1000,
        "filterPowerTypes": ["Water", "Forest"]
      },
      {
        "type": "ModifyStatGlobal",
        "category": "FieldControl",
        "target": "AllCreaturesInPlay",
        "statToModify": "Attack",
        "amount": 1000,
        "filterPowerTypes": ["Water", "Forest"]
      }
    ],
    "collectionNumber": "289/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 444,
    "name": "Dark Shadows",
    "supertype": "Secret",
    "subtypes": ["Terrain"],
    "rarity": "Common",
    "images": {"small": "CardImages/Secrets/SECRET-TR-DarkShadows"},
    "setCode": "MC01",
    "effectText": "When this card is played, discard any other Terrain card. All Dark Creatures on the active field gain +500 HP and +500 attack. All Light Creatures lose -500 HP and -500 attack.",
    "structuredEffects": [
      {"type": "DiscardOtherTerrain"},
      {
        "type": "ModifyStatGlobal",
        "category": "FieldControl",
        "target": "AllCreaturesInPlay",
        "statToModify": "MaxHP",
        "amount": 500,
        "filterPowerType": "Dark"
      },
      {
        "type": "ModifyStatGlobal",
        "category": "FieldControl",
        "target": "AllCreaturesInPlay",
        "statToModify": "Attack",
        "amount": 500,
        "filterPowerType": "Dark"
      },
      {
        "type": "ModifyStatGlobal",
        "category": "FieldControl",
        "target": "AllCreaturesInPlay",
        "statToModify": "MaxHP",
        "amount": -500,
        "filterPowerType": "Light"
      },
      {
        "type": "ModifyStatGlobal",
        "category": "FieldControl",
        "target": "AllCreaturesInPlay",
        "statToModify": "Attack",
        "amount": -500,
        "filterPowerType": "Light"
      }
    ],
    "collectionNumber": "286/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 445,
    "name": "Hurricanes off Jimbora",
    "supertype": "Secret",
    "subtypes": ["Terrain"],
    "rarity": "Uncommon",
    "images": {"small": "CardImages/Secrets/SECRET-TR-HurricanesoffJimbora"},
    "setCode": "MC01",
    "effectText": "When this card is played, discard any other Terrain card. All Thunder Creatures on the active field gain +1000 attack and +1000 HP.",
    "structuredEffects": [
      {"type": "DiscardOtherTerrain"},
      {
        "type": "ModifyStatGlobal",
        "category": "FieldControl",
        "target": "AllCreaturesInPlay",
        "statToModify": "Attack",
        "amount": 1000,
        "filterPowerType": "Thunder"
      },
      {
        "type": "ModifyStatGlobal",
        "category": "FieldControl",
        "target": "AllCreaturesInPlay",
        "statToModify": "MaxHP",
        "amount": 1000,
        "filterPowerType": "Thunder"
      }
    ],
    "collectionNumber": "279/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 446,
    "name": "Infernal Pits of Crom",
    "supertype": "Secret",
    "subtypes": ["Terrain"],
    "rarity": "Uncommon",
    "images": {"small": "CardImages/Secrets/SECRET-TR-InfernalPitsofCrom"},
    "setCode": "MC01",
    "effectText": "When this card is played, discard any other Terrain card. All Fire Creatures on the active field gain +1000 attack and +1000 HP.",
    "structuredEffects": [
      {"type": "DiscardOtherTerrain"},
      {
        "type": "ModifyStatGlobal",
        "category": "FieldControl",
        "target": "AllCreaturesInPlay",
        "statToModify": "Attack",
        "amount": 1000,
        "filterPowerType": "Fire"
      },
      {
        "type": "ModifyStatGlobal",
        "category": "FieldControl",
        "target": "AllCreaturesInPlay",
        "statToModify": "MaxHP",
        "amount": 1000,
        "filterPowerType": "Fire"
      }
    ],
    "collectionNumber": "268/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 447,
    "name": "Lights of Nura",
    "supertype": "Secret",
    "subtypes": ["Terrain"],
    "rarity": "Common",
    "images": {"small": "CardImages/Secrets/SECRET-TR-LightsofNura"},
    "setCode": "MC01",
    "effectText": "When this card is played, discard any other Terrain card. All Light Creatures on the active field gain +500 HP and +500 attack. All Dark Creatures lose -500 HP and -500 attack.",
    "structuredEffects": [
      {"type": "DiscardOtherTerrain"},
      {
        "type": "ModifyStatGlobal",
        "category": "FieldControl",
        "target": "AllCreaturesInPlay",
        "statToModify": "MaxHP",
        "amount": 500,
        "filterPowerType": "Light"
      },
      {
        "type": "ModifyStatGlobal",
        "category": "FieldControl",
        "target": "AllCreaturesInPlay",
        "statToModify": "Attack",
        "amount": 500,
        "filterPowerType": "Light"
      },
      {
        "type": "ModifyStatGlobal",
        "category": "FieldControl",
        "target": "AllCreaturesInPlay",
        "statToModify": "MaxHP",
        "amount": -500,
        "filterPowerType": "Dark"
      },
      {
        "type": "ModifyStatGlobal",
        "category": "FieldControl",
        "target": "AllCreaturesInPlay",
        "statToModify": "Attack",
        "amount": -500,
        "filterPowerType": "Dark"
      }
    ],
    "collectionNumber": "259/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 448,
    "name": "Mountains of Eurotha",
    "supertype": "Secret",
    "subtypes": ["Terrain"],
    "rarity": "Uncommon",
    "images": {"small": "CardImages/Secrets/SECRET-TR-MountainsofEurotha"},
    "setCode": "MC01",
    "effectText": "When this card is played, discard any other Terrain card. All Earth Creatures on the active field gain +1000 attack and +1000 HP.",
    "structuredEffects": [
      {"type": "DiscardOtherTerrain"},
      {
        "type": "ModifyStatGlobal",
        "category": "FieldControl",
        "target": "AllCreaturesInPlay",
        "statToModify": "Attack",
        "amount": 1000,
        "filterPowerType": "Earth"
      },
      {
        "type": "ModifyStatGlobal",
        "category": "FieldControl",
        "target": "AllCreaturesInPlay",
        "statToModify": "MaxHP",
        "amount": 1000,
        "filterPowerType": "Earth"
      }
    ],
    "collectionNumber": "251/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 449,
    "name": "Oceans of Nimbitu",
    "supertype": "Secret",
    "subtypes": ["Terrain"],
    "rarity": "Uncommon",
    "images": {"small": "CardImages/Secrets/SECRET-TR-OceansofNimbitu"},
    "effectText": "When this card is played, discard any other Terrain card. All Water Creatures on the active field gain +1000 attack and +1000 HP.",
    "structuredEffects": [
      {"type": "DiscardOtherTerrain"},
      {
        "type": "ModifyStatGlobal",
        "category": "FieldControl",
        "target": "AllCreaturesInPlay",
        "statToModify": "Attack",
        "amount": 1000,
        "filterPowerType": "Water"
      },
      {
        "type": "ModifyStatGlobal",
        "category": "FieldControl",
        "target": "AllCreaturesInPlay",
        "statToModify": "MaxHP",
        "amount": 1000,
        "filterPowerType": "Water"
      }
    ],
    "collectionNumber": "244/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 450,
    "name": "Pixie Forest",
    "supertype": "Secret",
    "subtypes": ["Terrain"],
    "rarity": "Common",
    "images": {"small": "CardImages/Secrets/SECRET-TR-PixieForest"},
    "setCode": "MC01",
    "effectText": "When this card is played, discard any other Terrain card. All Forest Creatures on the active field gain +500 HP and +500 attack. All Wind Creatures lose -500 HP and -500 attack.",
    "structuredEffects": [
      {"type": "DiscardOtherTerrain"},
      {
        "type": "ModifyStatGlobal",
        "category": "FieldControl",
        "target": "AllCreaturesInPlay",
        "statToModify": "MaxHP",
        "amount": 500,
        "filterPowerType": "Forest"
      },
      {
        "type": "ModifyStatGlobal",
        "category": "FieldControl",
        "target": "AllCreaturesInPlay",
        "statToModify": "Attack",
        "amount": 500,
        "filterPowerType": "Forest"
      },
      {
        "type": "ModifyStatGlobal",
        "category": "FieldControl",
        "target": "AllCreaturesInPlay",
        "statToModify": "MaxHP",
        "amount": -500,
        "filterPowerType": "Wind"
      },
      {
        "type": "ModifyStatGlobal",
        "category": "FieldControl",
        "target": "AllCreaturesInPlay",
        "statToModify": "Attack",
        "amount": -500,
        "filterPowerType": "Wind"
      }
    ],
    "collectionNumber": "241/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 451,
    "name": "Poisonous Swamp",
    "supertype": "Secret",
    "subtypes": ["Terrain"],
    "rarity": "Rare",
    "images": {"small": "CardImages/Secrets/SECRET-TR-PoisonousSwamp"},
    "setCode": "MC01",
    "effectText": "When this card is played, discard any other Terrain card. All Thunder and Light Creatures on the active field lose -1000 HP and -1000 attack. All Earth and Dark Creatures on the active field gain +1000 HP and +1000 attack.",
    "structuredEffects": [
      {"type": "DiscardOtherTerrain"},
      {
        "type": "ModifyStatGlobal",
        "category": "FieldControl",
        "target": "AllCreaturesInPlay",
        "statToModify": "MaxHP",
        "amount": -1000,
        "filterPowerTypes": ["Thunder", "Light"]
      },
      {
        "type": "ModifyStatGlobal",
        "category": "FieldControl",
        "target": "AllCreaturesInPlay",
        "statToModify": "Attack",
        "amount": -1000,
        "filterPowerTypes": ["Thunder", "Light"]
      },
      {
        "type": "ModifyStatGlobal",
        "category": "FieldControl",
        "target": "AllCreaturesInPlay",
        "statToModify": "MaxHP",
        "amount": 1000,
        "filterPowerTypes": ["Earth", "Dark"]
      },
      {
        "type": "ModifyStatGlobal",
        "category": "FieldControl",
        "target": "AllCreaturesInPlay",
        "statToModify": "Attack",
        "amount": 1000,
        "filterPowerTypes": ["Earth", "Dark"]
      }
    ],
    "collectionNumber": "240/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 452,
    "name": "Rough Seas",
    "supertype": "Secret",
    "subtypes": ["Terrain"],
    "rarity": "Common",
    "images": {"small": "CardImages/Secrets/SECRET-TR-RoughSeas"},
    "setCode": "MC01",
    "effectText": "When this card is played, discard any other Terrain card. All Water Creatures on the active field gain +500 HP and +500 attack. All Fire Creatures lose -500 HP and -500 attack.",
    "structuredEffects": [
      {"type": "DiscardOtherTerrain"},
      {
        "type": "ModifyStatGlobal",
        "category": "FieldControl",
        "target": "AllCreaturesInPlay",
        "statToModify": "MaxHP",
        "amount": 500,
        "filterPowerType": "Water"
      },
      {
        "type": "ModifyStatGlobal",
        "category": "FieldControl",
        "target": "AllCreaturesInPlay",
        "statToModify": "Attack",
        "amount": 500,
        "filterPowerType": "Water"
      },
      {
        "type": "ModifyStatGlobal",
        "category": "FieldControl",
        "target": "AllCreaturesInPlay",
        "statToModify": "MaxHP",
        "amount": -500,
        "filterPowerType": "Fire"
      },
      {
        "type": "ModifyStatGlobal",
        "category": "FieldControl",
        "target": "AllCreaturesInPlay",
        "statToModify": "Attack",
        "amount": -500,
        "filterPowerType": "Fire"
      }
    ],
    "collectionNumber": "233/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 453,
    "name": "Sacred Grounds",
    "supertype": "Secret",
    "subtypes": ["Terrain"],
    "rarity": "Rare",
    "images": {"small": "CardImages/Secrets/SECRET-TR-SacredGrounds"},
    "setCode": "MC01",
    "effectText": "When this card is played, discard any other Terrain card. All Water and Dark Creatures on the active field lose -1000 HP and -1000 attack. All Thunder and Light Creatures on the active field gain +1000 HP and +1000 attack.",
    "structuredEffects": [
      {"type": "DiscardOtherTerrain"},
      {
        "type": "ModifyStatGlobal",
        "category": "FieldControl",
        "target": "AllCreaturesInPlay",
        "statToModify": "MaxHP",
        "amount": -1000,
        "filterPowerTypes": ["Water", "Dark"]
      },
      {
        "type": "ModifyStatGlobal",
        "category": "FieldControl",
        "target": "AllCreaturesInPlay",
        "statToModify": "Attack",
        "amount": -1000,
        "filterPowerTypes": ["Water", "Dark"]
      },
      {
        "type": "ModifyStatGlobal",
        "category": "FieldControl",
        "target": "AllCreaturesInPlay",
        "statToModify": "MaxHP",
        "amount": 1000,
        "filterPowerTypes": ["Thunder", "Light"]
      },
      {
        "type": "ModifyStatGlobal",
        "category": "FieldControl",
        "target": "AllCreaturesInPlay",
        "statToModify": "Attack",
        "amount": 1000,
        "filterPowerTypes": ["Thunder", "Light"]
      }
    ],
    "collectionNumber": "223/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 454,
    "name": "Sandstorm",
    "supertype": "Secret",
    "subtypes": ["Terrain"],
    "rarity": "Common",
    "images": {"small": "CardImages/Secrets/SECRET-TR-Sandstorm"},
    "setCode": "MC01",
    "effectText": "When this card is played, discard any other Terrain card. All Earth Creatures on the active field gain +500 HP and +500 attack. All Thunder Creatures lose -500 HP and -500 attack.",
    "structuredEffects": [
      {"type": "DiscardOtherTerrain"},
      {
        "type": "ModifyStatGlobal",
        "category": "FieldControl",
        "target": "AllCreaturesInPlay",
        "statToModify": "MaxHP",
        "amount": 500,
        "filterPowerType": "Earth"
      },
      {
        "type": "ModifyStatGlobal",
        "category": "FieldControl",
        "target": "AllCreaturesInPlay",
        "statToModify": "Attack",
        "amount": 500,
        "filterPowerType": "Earth"
      },
      {
        "type": "ModifyStatGlobal",
        "category": "FieldControl",
        "target": "AllCreaturesInPlay",
        "statToModify": "MaxHP",
        "amount": -500,
        "filterPowerType": "Thunder"
      },
      {
        "type": "ModifyStatGlobal",
        "category": "FieldControl",
        "target": "AllCreaturesInPlay",
        "statToModify": "Attack",
        "amount": -500,
        "filterPowerType": "Thunder"
      }
    ],
    "collectionNumber": "221/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 455,
    "name": "Scorched Fields",
    "supertype": "Secret",
    "subtypes": ["Terrain"],
    "rarity": "Rare",
    "images": {"small": "CardImages/Secrets/SECRET-TR-ScorchedFields"},
    "setCode": "MC01",
    "effectText": "When this card is played, discard any other Terrain card. All Earth and Forest Creatures on the active field lose -1000 HP and -1000 attack. All Wind and Fire Creatures on the active field gain +1000 HP and +1000 attack.",
    "structuredEffects": [
      {"type": "DiscardOtherTerrain"},
      {
        "type": "ModifyStatGlobal",
        "category": "FieldControl",
        "target": "AllCreaturesInPlay",
        "statToModify": "MaxHP",
        "amount": -1000,
        "filterPowerTypes": ["Earth", "Forest"]
      },
      {
        "type": "ModifyStatGlobal",
        "category": "FieldControl",
        "target": "AllCreaturesInPlay",
        "statToModify": "Attack",
        "amount": -1000,
        "filterPowerTypes": ["Earth", "Forest"]
      },
      {
        "type": "ModifyStatGlobal",
        "category": "FieldControl",
        "target": "AllCreaturesInPlay",
        "statToModify": "MaxHP",
        "amount": 1000,
        "filterPowerTypes": ["Wind", "Fire"]
      },
      {
        "type": "ModifyStatGlobal",
        "category": "FieldControl",
        "target": "AllCreaturesInPlay",
        "statToModify": "Attack",
        "amount": 1000,
        "filterPowerTypes": ["Wind", "Fire"]
      }
    ],
    "collectionNumber": "215/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 456,
    "name": "Shadow Plains",
    "supertype": "Secret",
    "subtypes": ["Terrain"],
    "rarity": "Uncommon",
    "images": {"small": "CardImages/Secrets/SECRET-TR-ShadowPlains"},
    "setCode": "MC01",
    "effectText": "When this card is played, discard any other Terrain card. All Dark Creatures on the active field gain +1000 attack and +1000 HP.",
    "structuredEffects": [
      {"type": "DiscardOtherTerrain"},
      {
        "type": "ModifyStatGlobal",
        "category": "FieldControl",
        "target": "AllCreaturesInPlay",
        "statToModify": "Attack",
        "amount": 1000,
        "filterPowerType": "Dark"
      },
      {
        "type": "ModifyStatGlobal",
        "category": "FieldControl",
        "target": "AllCreaturesInPlay",
        "statToModify": "MaxHP",
        "amount": 1000,
        "filterPowerType": "Dark"
      }
    ],
    "collectionNumber": "205/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 457,
    "name": "Southern Winds of Us'ah",
    "supertype": "Secret",
    "subtypes": ["Terrain"],
    "rarity": "Uncommon",
    "images": {"small": "CardImages/Secrets/SECRET-TR-SouthernWindsofUsa"},
    "setCode": "MC01",
    "effectText": "When this card is played, discard any other Terrain card. All Wind Creatures on the active field gain +1000 attack and +1000 HP.",
    "structuredEffects": [
      {"type": "DiscardOtherTerrain"},
      {
        "type": "ModifyStatGlobal",
        "category": "FieldControl",
        "target": "AllCreaturesInPlay",
        "statToModify": "Attack",
        "amount": 1000,
        "filterPowerType": "Wind"
      },
      {
        "type": "ModifyStatGlobal",
        "category": "FieldControl",
        "target": "AllCreaturesInPlay",
        "statToModify": "MaxHP",
        "amount": 1000,
        "filterPowerType": "Wind"
      }
    ],
    "collectionNumber": "204/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 458,
    "name": "Star of Septetus",
    "supertype": "Secret",
    "subtypes": ["Terrain"],
    "rarity": "Uncommon",
    "images": {"small": "CardImages/Secrets/SECRET-TR-StarofSepteptus"},
    "setCode": "MC01",
    "effectText": "When this card is played, discard any other Terrain card. All Light Creatures on the active field gain +1000 attack and +1000 HP.",
    "structuredEffects": [
      {"type": "DiscardOtherTerrain"},
      {
        "type": "ModifyStatGlobal",
        "category": "FieldControl",
        "target": "AllCreaturesInPlay",
        "statToModify": "Attack",
        "amount": 1000,
        "filterPowerType": "Light"
      },
      {
        "type": "ModifyStatGlobal",
        "category": "FieldControl",
        "target": "AllCreaturesInPlay",
        "statToModify": "MaxHP",
        "amount": 1000,
        "filterPowerType": "Light"
      }
    ],
    "collectionNumber": "191/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 459,
    "name": "Stormy Skies",
    "supertype": "Secret",
    "subtypes": ["Terrain"],
    "rarity": "Common",
    "images": {"small": "CardImages/Secrets/SECRET-TR-StormySkies"},
    "setCode": "MC01",
    "effectText": "When this card is played, discard any other Terrain card. All Thunder Creatures on the active field gain +500 HP and +500 attack. All Water Creatures lose -500 HP and -500 attack.",
    "structuredEffects": [
      {"type": "DiscardOtherTerrain"},
      {
        "type": "ModifyStatGlobal",
        "category": "FieldControl",
        "target": "AllCreaturesInPlay",
        "statToModify": "MaxHP",
        "amount": 500,
        "filterPowerType": "Thunder"
      },
      {
        "type": "ModifyStatGlobal",
        "category": "FieldControl",
        "target": "AllCreaturesInPlay",
        "statToModify": "Attack",
        "amount": 500,
        "filterPowerType": "Thunder"
      },
      {
        "type": "ModifyStatGlobal",
        "category": "FieldControl",
        "target": "AllCreaturesInPlay",
        "statToModify": "MaxHP",
        "amount": -500,
        "filterPowerType": "Water"
      },
      {
        "type": "ModifyStatGlobal",
        "category": "FieldControl",
        "target": "AllCreaturesInPlay",
        "statToModify": "Attack",
        "amount": -500,
        "filterPowerType": "Water"
      }
    ],
    "collectionNumber": "190/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 460,
    "name": "Torn Wastelands",
    "supertype": "Secret",
    "subtypes": ["Terrain"],
    "rarity": "Uncommon",
    "images": {"small": "CardImages/Secrets/SECRET-TR-TornWastelands"},
    "setCode": "MC01",
    "effectText": "When this card is played, discard any other Terrain card. All Creatures on the active field gain +1000 attack and +1000 HP.",
    "structuredEffects": [
      {"type": "DiscardOtherTerrain"},
      {
        "type": "ModifyStatGlobal",
        "category": "FieldControl",
        "target": "AllCreaturesInPlay",
        "statToModify": "Attack",
        "amount": 1000
      },
      {
        "type": "ModifyStatGlobal",
        "category": "FieldControl",
        "target": "AllCreaturesInPlay",
        "statToModify": "MaxHP",
        "amount": 1000
      }
    ],
    "collectionNumber": "176/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 461,
    "name": "Volcanoes of Westu'ra",
    "supertype": "Secret",
    "subtypes": ["Terrain"],
    "rarity": "Common",
    "images": {"small": "CardImages/Secrets/SECRET-TR-VolcanoesofWestura"},
    "setCode": "MC01",
    "effectText": "When this card is played, discard any other Terrain card. All Fire Creatures on the active field gain +500 HP and +500 attack. All Forest Creatures lose -500 HP and -500 attack.",
    "structuredEffects": [
      {"type": "DiscardOtherTerrain"},
      {
        "type": "ModifyStatGlobal",
        "category": "FieldControl",
        "target": "AllCreaturesInPlay",
        "statToModify": "MaxHP",
        "amount": 500,
        "filterPowerType": "Fire"
      },
      {
        "type": "ModifyStatGlobal",
        "category": "FieldControl",
        "target": "AllCreaturesInPlay",
        "statToModify": "Attack",
        "amount": 500,
        "filterPowerType": "Fire"
      },
      {
        "type": "ModifyStatGlobal",
        "category": "FieldControl",
        "target": "AllCreaturesInPlay",
        "statToModify": "MaxHP",
        "amount": -500,
        "filterPowerType": "Forest"
      },
      {
        "type": "ModifyStatGlobal",
        "category": "FieldControl",
        "target": "AllCreaturesInPlay",
        "statToModify": "Attack",
        "amount": -500,
        "filterPowerType": "Forest"
      }
    ],
    "collectionNumber": "187/311",
    "illustrator": "Mystik Creatures"
  },
  {
    "id": 462,
    "name": "Winds off the Coast",
    "supertype": "Secret",
    "subtypes": ["Terrain"],
    "rarity": "Common",
    "images": {"small": "CardImages/Secrets/SECRET-TR-WindsofftheCoast"},
    "setCode": "MC01",
    "effectText": "When this card is played, discard any other Terrain card. All Wind Creatures on the active field gain +500 HP and +500 attack. All Earth Creatures lose -500 HP and -500 attack.",
    "structuredEffects": [
      {"type": "DiscardOtherTerrain"},
      {
        "type": "ModifyStatGlobal",
        "category": "FieldControl",
        "target": "AllCreaturesInPlay",
        "statToModify": "MaxHP",
        "amount": 500,
        "filterPowerType": "Wind"
      },
      {
        "type": "ModifyStatGlobal",
        "category": "FieldControl",
        "target": "AllCreaturesInPlay",
        "statToModify": "Attack",
        "amount": 500,
        "filterPowerType": "Wind"
      },
      {
        "type": "ModifyStatGlobal",
        "category": "FieldControl",
        "target": "AllCreaturesInPlay",
        "statToModify": "MaxHP",
        "amount": -500,
        "filterPowerType": "Earth"
      },
      {
        "type": "ModifyStatGlobal",
        "category": "FieldControl",
        "target": "AllCreaturesInPlay",
        "statToModify": "Attack",
        "amount": -500,
        "filterPowerType": "Earth"
      }
    ],
    "collectionNumber": "177/311",
    "illustrator": "Mystik Creatures"
  },

  {
    "id": 463,
    "name": "Dark Power",
    "supertype": "Power",
    "powerType": "Dark",
    "powerValue": 1,
    "rarity": "Common",
    "images": {"small": "CardImages/Power/Power-D"},
    "setCode": "MC01",
    "collectionNumber": "P001/018"
  },
  {
    "id": 464,
    "name": "Dark Power x2",
    "supertype": "Power",
    "powerType": "Dark",
    "powerValue": 2,
    "rarity": "Uncommon",
    "images": {"small": "CardImages/Power/Power-D2"},
    "setCode": "MC01",
    "collectionNumber": "P002/018"
  },
  {
    "id": 465,
    "name": "Earth Power",
    "supertype": "Power",
    "powerType": "Earth",
    "powerValue": 1,
    "rarity": "Common",
    "images": {"small": "CardImages/Power/Power-E"},
    "setCode": "MC01",
    "collectionNumber": "P003/018"
  },
  {
    "id": 466,
    "name": "Earth Power x2",
    "supertype": "Power",
    "powerType": "Earth",
    "powerValue": 2,
    "rarity": "Uncommon",
    "images": {"small": "CardImages/Power/Power-E2"},
    "setCode": "MC01",
    "collectionNumber": "P004/018"
  },
  {
    "id": 467,
    "name": "Fire Power",
    "supertype": "Power",
    "powerType": "Fire",
    "powerValue": 1,
    "rarity": "Common",
    "images": {"small": "CardImages/Power/Power-Fi"},
    "setCode": "MC01",
    "collectionNumber": "P005/018"
  },
  {
    "id": 468,
    "name": "Fire Power x2",
    "supertype": "Power",
    "powerType": "Fire",
    "powerValue": 2,
    "rarity": "Uncommon",
    "images": {"small": "CardImages/Power/Power-Fi2"},
    "setCode": "MC01",
    "collectionNumber": "P006/018"
  },
  {
    "id": 469,
    "name": "Forest Power",
    "supertype": "Power",
    "powerType": "Forest",
    "powerValue": 1,
    "rarity": "Common",
    "images": {"small": "CardImages/Power/Power-F"},
    "setCode": "MC01",
    "collectionNumber": "P007/018"
  },
  {
    "id": 470,
    "name": "Forest Power x2",
    "supertype": "Power",
    "powerType": "Forest",
    "powerValue": 2,
    "rarity": "Uncommon",
    "images": {"small": "CardImages/Power/Power-F2"},
    "setCode": "MC01",
    "collectionNumber": "P008/018"
  },
  {
    "id": 471,
    "name": "Light Power",
    "supertype": "Power",
    "powerType": "Light",
    "powerValue": 1,
    "rarity": "Common",
    "images": {"small": "CardImages/Power/Power-L"},
    "setCode": "MC01",
    "collectionNumber": "P009/018"
  },
  {
    "id": 472,
    "name": "Light Power x2",
    "supertype": "Power",
    "powerType": "Light",
    "powerValue": 2,
    "rarity": "Uncommon",
    "images": {"small": "CardImages/Power/Power-L2"},
    "setCode": "MC01",
    "collectionNumber": "P010/018"
  },
  {
    "id": 473,
    "name": "Thunder Power",
    "supertype": "Power",
    "powerType": "Thunder",
    "powerValue": 1,
    "rarity": "Common",
    "images": {"small": "CardImages/Power/Power-T"},
    "setCode": "MC01",
    "collectionNumber": "P011/018"
  },
  {
    "id": 474,
    "name": "Thunder Power x2",
    "supertype": "Power",
    "powerType": "Thunder",
    "powerValue": 2,
    "rarity": "Uncommon",
    "images": {"small": "CardImages/Power/Power-T2"},
    "setCode": "MC01",
    "collectionNumber": "P012/018"
  },
  {
    "id": 475,
    "name": "Water Power",
    "supertype": "Power",
    "powerType": "Water",
    "powerValue": 1,
    "rarity": "Common",
    "images": {"small": "CardImages/Power/Power-W"},
    "setCode": "MC01",
    "collectionNumber": "P013/018"
  },
  {
    "id": 476,
    "name": "Water Power x2",
    "supertype": "Power",
    "powerType": "Water",
    "powerValue": 2,
    "rarity": "Uncommon",
    "images": {"small": "CardImages/Power/Power-W2"},
    "setCode": "MC01",
    "collectionNumber": "P014/018"
  },
  {
    "id": 477,
    "name": "Wind Power",
    "supertype": "Power",
    "powerType": "Wind",
    "powerValue": 1,
    "rarity": "Common",
    "images": {"small": "CardImages/Power/Power-Wi"},
    "setCode": "MC01",
    "collectionNumber": "P015/018"
  },
  {
    "id": 478,
    "name": "Wind Power x2",
    "supertype": "Power",
    "powerType": "Wind",
    "powerValue": 2,
    "rarity": "Uncommon",
    "images": {"small": "CardImages/Power/Power-Wi2"},
    "setCode": "MC01",
    "collectionNumber": "P016/018"
  },
  {
    "id": 479,
    "name": "Blank Power",
    "supertype": "Power",
    "powerType": "Blank",
    "powerValue": 1,
    "rarity": "Common",
    "images": {"small": "CardImages/Power/Power-B"},
    "setCode": "MC01",
    "collectionNumber": "P017/018"
  },
  {
    "id": 480,
    "name": "Blank Power x2",
    "supertype": "Power",
    "powerType": "Blank",
    "powerValue": 2,
    "rarity": "Uncommon",
    "images": {"small": "CardImages/Power/Power-B2"},
    "setCode": "MC01",
    "collectionNumber": "P018/018"
  }

];