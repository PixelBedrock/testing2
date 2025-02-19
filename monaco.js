require.config({
    paths: {
        "vs": "https://unpkg.com/monaco-editor@latest/min/vs"
    }
});

window.MonacoEnvironment = {
    getWorkerUrl: () => URL.createObjectURL(
        new Blob([`\
self.MonacoEnvironment = {
    baseUrl: "https://unpkg.com/monaco-editor@latest/min/"
};

importScripts("https://unpkg.com/monaco-editor@latest/min/vs/base/worker/workerMain.js");`], {
            type: "text/javascript"
        })
    )
};

require(["vs/editor/editor.main"], function() {
    monaco.languages.register({ id: "playground-web" });

    monaco.languages.setMonarchTokensProvider("playground-web", {
        actions: [
            "actionBar", "applyLayout", "applyPotion", "break", "cancelEvent", "changeHealth", "hungerLevel",
            "maxHealth", "attribute", "displayName", "changePlayerGroup", "changePlayerTeam", "changeTime",
            "chat", "clearBossbar", "clearEnderChest", "clearGlobalStats", "clearPlayerStats", "clearEffect",
            "closeMenu", "if", "else", "continue", "displayMenu", "exit", "explosion", "fullHeal", "function",
            "globalstat", "kill", "launchProjectile", "particle", "pause", "sound", "stat", "random",
            "repeat", "clearInventory", "title", "gamemode", "hitDelay", "propel", "bossbar",
            "startHouseMusic", "stopHouseMusic", "teleport"
        ],
        attributes: [
            "ARMOR", "ARMOR_TOUGHNESS", "ATTACK_DAMAGE", "ATTACK_KNOCKBACK", "ATTACK_SPEED",
            "BLOCK_BREAK_SPEED", "BLOCK_INTERACTION_SPEED", "BURNING_TIME", "ENTITY_INTERACTION_RANGE",
            "EXPLOSION_KNOCKBACK_RESISTANCE", "FALL_DAMAGE_MULTIPLIER", "FLYING_SPEED", "FOLLOW_RANGE",
            "GRAVITY", "JUMP_STRENGTH", "KNOCKBACK_RESISTANCE", "LUCK", "MAX_ABSORPTION", "MAX_HEALTH",
            "MINING_EFFICIENCY", "MOVEMENT_SPEED", "OXYGEN_BONUS", "SAFE_FALL_DISTANCE", "SCALE",
            "SNEAKING_SPEED", "STEP_HEIGHT", "SUBMERGED_MINING_SPEED", "SWEEPING_DAMAGE_RATIO",
            "WATER_MOVEMENT_EFFICIENCY"
        ],
        gamemodes: [
            "SURVIVAL", "CREATIVE", "ADVENTURE", "SPECTATOR"
        ],
        locations: [
            /*"CUSTOM", */"HOUSE_SPAWN", "PLAYER_LOCATION", "INVOKERS_LOCATION"
        ],
        particleTypes: [
            "LINE", "CIRCLE", "CURVE", "SQUARE"
        ],
        particles: [
            "POOF", "EXPLOSION", "EXPLOSION_EMITTER", "FIREWORK", "BUBBLE", "SPLASH", "FISHING", "UNDERWATER",
            "CRIT", "ENCHANTED_HIT", "SMOKE", "LARGE_SMOKE", "EFFECT", "INSTANT_EFFECT", "ENTITY_EFFECT",
            "WITCH", "DRIPPING_WATER", "DRIPPING_LAVA", "ANGRY_VILLAGER", "HAPPY_VILLAGER", "MYCELIUM", "NOTE",
            "PORTAL", "ENCHANT", "FLAME", "LAVA", "CLOUD", "DUST", "ITEM_SNOWBALL", "ITEM_SLIME", "HEART",
            "RAIN", "ELDER_GUARDIAN", "DRAGON_BREATH", "END_ROD", "DAMAGE_INDICATOR", "SWEEP_ATTACK",
            "TOTEM_OF_UNDYING", "SPIT", "SQUID_INK", "BUBBLE_POP", "CURRENT_DOWN", "BUBBLE_COLUMN_UP",
            "NAUTILUS", "DOLPHIN", "SNEEZE", "CAMPFIRE_COSY_SMOKE", "CAMPFIRE_SIGNAL_SMOKE", "COMPOSTER",
            "FLASH", "FALLING_LAVA", "LANDING_LAVA", "FALLING_WATER", "DRIPPING_HONEY", "FALLING_HONEY",
            "LANDING_HONEY", "FALLING_NECTAR", "SOUL_FIRE_FLAME", "ASH", "CRIMSON_SPORE", "WARPED_SPORE",
            "SOUL", "DRIPPING_OBSIDIAN_TEAR", "FALLING_OBSIDIAN_TEAR", "LANDING_OBSIDIAN_TEAR", "REVERSE_PORTAL",
            "WHITE_ASH", "DUST_COLOR_TRANSITION", "FALLING_SPORE_BLOSSOM", "SPORE_BLOSSOM_AIR", "SMALL_FLAME",
            "SNOWFLAKE", "DRIPPING_DRIPSTONE_LAVA", "FALLING_DRIPSTONE_LAVA", "DRIPPING_DRIPSTONE_WATER",
            "FALLING_DRIPSTONE_WATER", "GLOW_SQUID_INK", "GLOW", "WAX_ON", "WAX_OFF", "ELECTRIC_SPARK",
            "SCRAPE", "SONIC_BOOM", "SCULK_SOUL", "SCULK_CHARGE_POP", "CHERRY_LEAVES", "EGG_CRACK", "DUST_PLUME",
            "WHITE_SMOKE", "GUST", "SMALL_GUST", "GUST_EMITTER_LARGE", "GUST_EMITTER_SMALL",
            "TRIAL_SPAWNER_DETECTION", "TRIAL_SPAWNER_DETECTION_OMINOUS", "VAULT_CONNECTION", "INFESTED",
            "ITEM_COBWEB", "OMINOUS_SPAWNING", "RAID_OMEN", "TRIAL_OMEN"
        ],
        projectiles: [
            "ARROW", "WIND_CHARGE", "DRAGON_FIREBALL", "EGG", "ENDER_PEARL", "FIREBALL", "FIREWORK",
            "FISH_HOOK", "LLAMA_SPIT", "SHULKER_BULLET", "SMALL_FIREBALL", "SNOWBALL", "SPECTRAL_ARROW",
            "EXPERIENCE_BOTTLE", "SPLASH_POTION", "TRIDENT", "WITHER_SKULL"
        ],
        pushDirections: [
            "FORWARD", "BACKWARD", "UP", "DOWN", "RIGHT", "LEFT", "NORTH", "SOUTH", "EAST", "WEST"/*, "CUSTOM"*/
        ],
        comparators: [
            "<", "<=", "==", ">=", ">", "contains", "LESS_THAN", "LESS_THAN_OR_EQUAL", "EQUALS",
            "GREATER_THAN_OR_EQUAL", "GREATER_THAN", "CONTAINS"
        ],
        operations: [
            "+", "-", "=", "*", "/", "%", "floor", "round", "pStat", "gStat", "concat", "indexOf", "set",
            "lengthOf", "charAt", "SET", "ADD", "SUBTRACT", "MULTIPLY", "DIVIDE"
        ],
        tokenizer: {
            root: [
                [/(true|false)/, "value"],
                [/%(.+)%/, "placeholder"],
                [/[a-zA-Z_][\w]*/, {
                    cases: {
                        "@actions": "action",
                        "@attributes": "attribute",
                        "@gamemodes": "gamemode",
                        "@locations": "location",
                        "@particleTypes": "particleType",
                        "@particles": "particle",
                        "@projectiles": "projectile",
                        "@pushDirections": "pushDirection",
                        "@comparators": "comparator",
                        "@operations": "operation"
                    }
                }],
                [/[<=>+\-*\/%]/, {
                    cases: {
                        "@comparators": "comparator",
                        "@operations": "operation"
                    }
                }],
                [/"(.+)"/, "value"],
                [/\d(\.\d)/, "value"],
                [/\d/, "value"],
                [/[ \n]+/, ""]
            ]
        }
    });

    // monaco.languages.registerCompletionItemProvider("playground-web", {
    // 	provideCompletionItems: (model, position) => {}
    // });

    monaco.editor.defineTheme("playground-web-light", {
        base: "vs",
        inherit: true,
        rules: [
            {
                token: "action",
                foreground: "ad46ff" // purple-500
            },
            {
                token: "attribute",
                foreground: "2b7fff" // blue-500
            },
            {
                token: "gamemode",
                foreground: "2b7fff" // blue-500
            },
            {
                token: "location",
                foreground: "2b7fff" // blue-500
            },
            {
                token: "particleType",
                foreground: "2b7fff" // blue-500
            },
            {
                token: "particle",
                foreground: "2b7fff" // blue-500
            },
            {
                token: "projectile",
                foreground: "2b7fff" // blue-500
            },
            {
                token: "pushDirection",
                foreground: "2b7fff" // blue-500
            },
            {
                token: "comparator",
                foreground: "f6339a" // pink-500
            },
            {
                token: "operation",
                foreground: "f6339a" // pink-500
            },
            {
                token: "value",
                foreground: "00a63e" // green-600
            },
            {
                token: "placeholder",
                foreground: "ff6900" // orange-500
            }
        ],
        colors: {
            "editor.foreground": "#262626"
        }
    });

    monaco.editor.create(document.getElementById("container"), {
        automaticLayout: true,
        language: "playground-web",
        theme: "playground-web-light",
        value: `\
attribute ARMOR 1.0
gamemode SURVIVAL
teleport HOUSE_SPAWN
teleport "0,0,0"
particle ANGRY_VILLAGER LINE 2.0 5.0 HOUSE_SPAWN PLAYER_LOCATION
launchProjectile ARROW FORWARD 1.0

if (stat Kills LESS_THAN_OR_EQUAL 1.0 false) {
    stat Kills + %stat.player/notKills%
    stat "Kills" round 1.0
} else {
}
`
    });
});
