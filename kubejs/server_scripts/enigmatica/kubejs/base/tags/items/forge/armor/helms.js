events.listen('item.tags', function (event) {
    var items = [
        'aquaculture:neptunium_helmet',
        'ars_nouveau:apprentice_hood',
        'ars_nouveau:archmage_hood',
        'ars_nouveau:novice_hood',
        'botania:elementium_helmet',
        'botania:manasteel_helmet',
        'botania:manaweave_helmet',
        'botania:terrasteel_helmet',
        'byg:ametrine_helmet',
        'immersiveengineering:armor_faraday_head',
        'immersiveengineering:armor_steel_head',
        'mapperbase:steel_helmet',
        'mekanism:hazmat_mask',
        'mekanism:mekasuit_helmet',
        'mekanism:scuba_mask',
        'mekanismtools:bronze_helmet',
        'mekanismtools:lapis_lazuli_helmet',
        'mekanismtools:osmium_helmet',
        'mekanismtools:refined_glowstone_helmet',
        'mekanismtools:refined_obsidian_helmet',
        'minecraft:chainmail_helmet',
        'minecraft:diamond_helmet',
        'minecraft:golden_helmet',
        'minecraft:iron_helmet',
        'minecraft:leather_helmet',
        'minecraft:netherite_helmet',
        'mythicbotany:alfsteel_helmet',
        'naturesaura:infused_iron_helmet',
        'naturesaura:sky_helmet',
        'pneumaticcraft:pneumatic_helmet',
        'thermal:beekeeper_helmet',
        'thermal:diving_helmet',
        'thermal:hazmat_helmet',
        'undergarden:utheric_helmet',
        'undergarden:froststeel_helmet',
        'undergarden:cloggrum_helmet',
        'bloodmagic:livinghelmet',
        'dustrial_decor:cardboard_helmet',
        'mekanismtools:steel_helmet',
        'alexsmobs:sombrero',
        'alexsmobs:frontier_cap',
        'alexsmobs:moose_headgear',
        'eidolon:warlock_hat',
        'eidolon:top_hat'
    ];
    event.get('forge:armor').add(items);
    event.get('forge:armor/helm').add(items);
});
