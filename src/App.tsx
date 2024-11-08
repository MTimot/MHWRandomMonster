import "./App.css";
import Main from "./components/main/main.tsx";
import Rise from "./components/Rise/Rise.tsx";
import { useState } from "react";
const weaponTab = [
  {
    name: "Great Sword",
    iconsrc: "/weapons/greatsword.png",
  },
  {
    name: "Bow",
    iconsrc: "/weapons/bow.png",
  },
  {
    name: "Charge Blade",
    iconsrc: "/weapons/chargeblade.png",
  },
  {
    name: "Dual Blades",
    iconsrc: "/weapons/dualblades.png",
  },
  {
    name: "Gunlance",
    iconsrc: "/weapons/gunlance.png",
  },
  {
    name: "Hammer",
    iconsrc: "/weapons/hammer.png",
  },
  {
    name: "Heavy Bowgun",
    iconsrc: "/weapons/heavybowgun.png",
  },
  {
    name: "Hunting horn",
    iconsrc: "/weapons/huntinghorn.png",
  },
  {
    name: "Insect Glaive",
    iconsrc: "/weapons/insectglaive.png",
  },
  {
    name: "Lance",
    iconsrc: "/weapons/lance.png",
  },
  {
    name: "Light Bowgun",
    iconsrc: "/weapons/lightbowgun.png",
  },
  {
    name: "Long Sword",
    iconsrc: "/weapons/longsword.png",
  },
  {
    name: "Switch Axe",
    iconsrc: "/weapons/switchaxe.png",
  },
  {
    name: "Sword and Shield",
    iconsrc: "/weapons/swordandshield.png",
  },
];
const monsterTab = [
  {
    id: 1,
    name: "Anjanath",
    from: "world",
    iconsrc: "/monster-icons/anjanath.png",
  },
  {
    id: 2,
    name: "Great Jagras",
    from: "world",
    iconsrc: "/monster-icons/great-jagras.png",
  },
  {
    id: 3,
    name: "Fulgur Anjanath",
    from: "iceborne",
    iconsrc: "/monster-icons/fulgur-anjanath.png",
  },
  {
    id: 4,
    name: "Banbaro",
    from: "iceborne",
    iconsrc: "/monster-icons/banbaro.png",
  },
  {
    id: 5,
    name: "Barioth",
    from: "iceborne",
    iconsrc: "/monster-icons/Barioth.png",
  },
  {
    id: 6,
    name: "Frostfang Barioth",
    from: "iceborne",
    iconsrc: "/monster-icons/frostfang-barioth.png",
  },
  {
    id: 7,
    name: "Barroth",
    from: "world",
    iconsrc: "/monster-icons/barroth.png",
  },
  {
    id: 8,
    name: "Bazelgeuse",
    from: "world",
    iconsrc: "/monster-icons/Bazelgeuse.png",
  },
  {
    id: 9,
    name: "Seething Bazelgeuse",
    from: "iceborne",
    iconsrc: "/monster-icons/seething-bazelgeuse.png",
  },
  {
    id: 10,
    name: "Behemoth",
    from: "world",
    iconsrc: "/monster-icons/behemoth.png",
  },
  {
    id: 11,
    name: "Beotodus",
    from: "iceborne",
    iconsrc: "/monster-icons/beotodus.png",
  },
  {
    id: 12,
    name: "Brachydios",
    from: "iceborne",
    iconsrc: "/monster-icons/brachydios.png",
  },
  {
    id: 13,
    name: "Raging Brachydios",
    from: "iceborne",
    iconsrc: "/monster-icons/raging-brachydio.png",
  },
  {
    id: 14,
    name: "Deviljho",
    from: "world",
    iconsrc: "/monster-icons/deviljho.png",
  },
  {
    id: 15,
    name: "Savage Deviljho",
    from: "iceborne",
    iconsrc: "/monster-icons/savage-deviljho.png",
  },
  {
    id: 16,
    name: "Diablo",
    from: "world",
    iconsrc: "/monster-icons/diablos.png",
  },
  {
    id: 17,
    name: "Black Diablos",
    from: "world",
    iconsrc: "/monster-icons/black-diablos.png",
  },
  {
    id: 18,
    name: "Dodogama",
    from: "world",
    iconsrc: "/monster-icons/dodogama.png",
  },
  {
    id: 19,
    name: "Fatalis",
    from: "iceborne",
    iconsrc: "/monster-icons/fatalis.png",
  },
  {
    id: 20,
    name: "Glavenus",
    from: "iceborne",
    iconsrc: "/monster-icons/glavenus.png",
  },
  {
    id: 21,
    name: "Acidic Glavenus",
    from: "iceborne",
    iconsrc: "/monster-icons/acidic-glavenus.png",
  },
  {
    id: 22,
    name: "Great Girros",
    from: "world",
    iconsrc: "/monster-icons/great_girros.png",
  },
  {
    id: 23,
    name: "Jyuratodus",
    from: "world",
    iconsrc: "/monster-icons/jyuratodus.png",
  },
  {
    id: 24,
    name: "Kirin",
    from: "world",
    iconsrc: "/monster-icons/kirin.png",
  },
  {
    id: 25,
    name: "Kulu Ya Ku",
    from: "world",
    iconsrc: "/monster-icons/kulu-ya-ku.png",
  },
  {
    id: 26,
    name: "Kulve Taroth",
    from: "world",
    iconsrc: "/monster-icons/kulve-taroth.png",
  },
  {
    id: 27,
    name: "Kushala Daora",
    from: "world",
    iconsrc: "/monster-icons/kushala-daora.png",
  },
  {
    id: 28,
    name: "Lavasioth",
    from: "world",
    iconsrc: "/monster-icons/lavasioth.png",
  },
  {
    id: 29,
    name: "Legiana",
    from: "world",
    iconsrc: "/monster-icons/legiana.png",
  },
  {
    id: 30,
    name: "Shrieking Legiana",
    from: "iceborne",
    iconsrc: "/monster-icons/shrieking-legiana.png",
  },
  {
    id: 31,
    name: "Lunastra",
    from: "world",
    iconsrc: "/monster-icons/lunastra.png",
  },
  {
    id: 32,
    name: "Namielle",
    from: "iceborne",
    iconsrc: "/monster-icons/namielle.png",
  },
  {
    id: 33,
    name: "Nargacuga",
    from: "iceborne",
    iconsrc: "/monster-icons/nargacuga.png",
  },
  {
    id: 34,
    name: "Nergigante",
    from: "world",
    iconsrc: "/monster-icons/nergigante.png",
  },
  {
    id: 35,
    name: "Ruiner Nergigante",
    from: "iceborne",
    iconsrc: "/monster-icons/ruiner-nergigante.png",
  },
  {
    id: 36,
    name: "Odogaron",
    from: "world",
    iconsrc: "/monster-icons/odogaron.png",
  },
  {
    id: 37,
    name: "Ebony Odogaron",
    from: "iceborne",
    iconsrc: "/monster-icons/ebony-odogaron.png",
  },
  {
    id: 38,
    name: "Paolumu",
    from: "world",
    iconsrc: "/monster-icons/paolumu.png",
  },
  {
    id: 39,
    name: "Nightshade Paolumu",
    from: "iceborne",
    iconsrc: "/monster-icons/nightshade-paolumu_Icon.png",
  },
  {
    id: 40,
    name: "Pukei-Pukei",
    from: "world",
    iconsrc: "/monster-icons/pukei-pukei.png",
  },
  {
    id: 41,
    name: "Coral Pukei-Pukei",
    from: "iceborne",
    iconsrc: "/monster-icons/coral-pukei-pukei.png",
  },
  {
    id: 42,
    name: "Radobaan",
    from: "world",
    iconsrc: "/monster-icons/radobaan.png",
  },
  {
    id: 43,
    name: "Rajang",
    from: "iceborne",
    iconsrc: "/monster-icons/rajang.png",
  },
  {
    id: 44,
    name: "Furious Rajang",
    from: "iceborne",
    iconsrc: "/monster-icons/furious-rajang.png",
  },
  {
    id: 45,
    name: "Rathalos",
    from: "world",
    iconsrc: "/monster-icons/rathalos.png",
  },
  {
    id: 46,
    name: "Azure Rathalos",
    from: "world",
    iconsrc: "/monster-icons/azure-rathalos.png",
  },
  {
    id: 47,
    name: "Silver Rathalos",
    from: "iceborne",
    iconsrc: "/monster-icons/silver-rathalos.png",
  },
  {
    id: 48,
    name: "Rathian",
    from: "world",
    iconsrc: "/monster-icons/rathian.png",
  },
  {
    id: 49,
    name: "Pink Rathian",
    from: "world",
    iconsrc: "/monster-icons/pink-rathian.png",
  },
  {
    id: 50,
    name: "Gold Rathian",
    from: "iceborne",
    iconsrc: "/monster-icons/gold-rathian.png",
  },
  {
    id: 51,
    name: "Safi'Jiiva",
    from: "iceborn",
    iconsrc: "/monster-icons/safijiiva.png",
  },
  {
    id: 52,
    name: "Shara Ishvalda",
    from: "iceborne",
    iconsrc: "/monster-icons/shara-ishvalda.png",
  },
  {
    id: 53,
    name: "Teostra",
    from: "world",
    iconsrc: "/monster-icons/teostra.png",
  },
  {
    id: 54,
    name: "Tigrex",
    from: "iceborne",
    iconsrc: "/monster-icons/tigrex.png",
  },
  {
    id: 55,
    name: "Brute Tigrex",
    from: "iceborne",
    iconsrc: "/monster-icons/brute-tigrex.png",
  },
  {
    id: 56,
    name: "Tobi-Kadachi",
    from: "world",
    iconsrc: "/monster-icons/tobi-kadachi.png",
  },
  {
    id: 57,
    name: "Viper Tobi-Kadachi",
    from: "iceborne",
    iconsrc: "/monster-icons/viper-tobi-kadachi.png",
  },
  {
    id: 58,
    name: "Tzitzi-Ya-Ku",
    from: "world",
    iconsrc: "/monster-icons/tzitzi-ya-ku.png",
  },
  {
    id: 59,
    name: "Uragaan",
    from: "world",
    iconsrc: "/monster-icons/uragaan.png",
  },
  {
    id: 60,
    name: "Vaal Hazak",
    from: "world",
    iconsrc: "/monster-icons/vaal-hazak.png",
  },
  {
    id: 61,
    name: "Blackveil Vaal Hazak",
    from: "iceborne",
    iconsrc: "/monster-icons/blackveil-vaal-hazak.png",
  },
  {
    id: 62,
    name: "Velkhana",
    from: "iceborne",
    iconsrc: "/monster-icons/velkhana.png",
  },
  {
    id: 63,
    name: "Xeno'Jiiva",
    from: "world",
    iconsrc: "/monster-icons/xenojiiva.png",
  },
  {
    id: 64,
    name: "Yian-Garuga",
    from: "iceborne",
    iconsrc: "/monster-icons/yian-garuga.png",
  },
  {
    id: 65,
    name: "Scarred Yian-Garuga",
    from: "iceborne",
    iconsrc: "/monster-icons/scarred-yian-garuga.png",
  },
  {
    id: 66,
    name: "Zinogre",
    from: "iceborne",
    iconsrc: "/monster-icons/zinogre.png",
  },
  {
    id: 67,
    name: "Stygian Zinogre",
    from: "iceborne",
    iconsrc: "/monster-icons/stygian-zinogre.png",
  },
  {
    id: 68,
    name: "Zorah Magdaros",
    from: "world",
    iconsrc: "/monster-icons/zorah-magdaros.png",
  },
  {
    id: 69,
    name: "Alatreon",
    from: "iceborne",
    iconsrc: "/monster-icons/alatreon.png",
  },
  {
    id: 70,
    name: "Ancient Leshen",
    from: "world",
    iconsrc: "/monster-icons/ancient-leshen.png",
  },
  {
    id: 71,
    name: "Leshen",
    from: "world",
    iconsrc: "/monster-icons/leshen.png",
  },
];
const monsterRiseTab = [
  {
    name: "Aknosom",
    iconsrc: "/MHRise-icons/Aknosom_Icon.png",
  },
  {
    name: "Almudron",
    iconsrc: "/MHRise-icons/Almudron_Icon.png",
  },
  {
    name: "Magma Almudron",
    iconsrc: "/MHRise-icons/Magma_Almudron_Icon.png",
  },
  {
    name: "Amatsu",
    iconsrc: "/MHRise-icons/Amatsu_Icon.png",
  },
  {
    name: "Anjanath",
    iconsrc: "/MHRise-icons/Anjanath_Icon.png",
  },
  {
    name: "Astalos",
    iconsrc: "/MHRise-icons/Astalos_Icon.png",
  },
  {
    name: "Arzuros",
    iconsrc: "/MHRise-icons/Arzuros_Icon.png",
  },
  {
    name: "Apex Arzuros",
    iconsrc: "/MHRise-icons/Apex_Arzuros_Icon.png",
  },
  {
    name: "Barioth",
    iconsrc: "/MHRise-icons/Barioth_Icon.png",
  },
  {
    name: "Barroth",
    iconsrc: "/MHRise-icons/Barroth_Icon.png",
  },
  {
    name: "Bazelgeuse",
    iconsrc: "/MHRise-icons/Bazelgeuse_Icon.png",
  },
  {
    name: "Seething Bazelgeuse",
    iconsrc: "/MHRise-icons/Seething_Bazelgeuse_Icon.png",
  },
  {
    name: "Basarios",
    iconsrc: "/MHRise-icons/Basarios_Icon.png",
  },
  {
    name: "Bishaten",
    iconsrc: "/MHRise-icons/Bishaten_Icon.png",
  },
  {
    name: "Blood Orang Bishaten",
    iconsrc: "/MHRise-icons/Blood_Orange_Bishaten_Icon.png",
  },
  {
    name: "Chameleos",
    iconsrc: "/MHRise-icons/Chameleos_Icon.png",
  },
  {
    name: "Risen Chameleos",
    iconsrc: "/MHRise-icons/Risen_Chameleos_Icon.png",
  },
  {
    name: "Daimyo Hermitaur",
    iconsrc: "/MHRise-icons/Daimyo_Hermitaur_Icon.png",
  },
  {
    name: "Diablos",
    iconsrc: "/MHRise-icons/Diablos_Icon.png",
  },
  {
    name: "Apex Diablos",
    iconsrc: "/MHRise-icons/Apex_Diablos_Icon.png",
  },
  {
    name: "Espinas",
    iconsrc: "/MHRise-icons/Espinas_Icon.png",
  },
  {
    name: "Flaming Espinas",
    iconsrc: "/MHRise-icons/Flaming_Espinas_Icon.png",
  },
  {
    name: "Gaismagorm",
    iconsrc: "/MHRise-icons/Gaismagorm_Icon.png",
  },
  {
    name: "Garangolm",
    iconsrc: "/MHRise-icons/Garangolm_Icon.png",
  },
  {
    name: "Gore Magala",
    iconsrc: "/MHRise-icons/Gore_Magala_Icon.png",
  },
  {
    name: "Chaotic Gore Magala",
    iconsrc: "/MHRise-icons/Chaotic_Gore_Magala_Icon.png",
  },
  {
    name: "Goss Harag",
    iconsrc: "/MHRise-icons/Goss_Harag_Icon.png",
  },
  {
    name: "Great Baggi",
    iconsrc: "/MHRise-icons/Great_Baggi_Icon.png",
  },
  {
    name: "Great Izuchi",
    iconsrc: "/MHRise-icons/Great_Izuchi_Icon.png",
  },
  {
    name: "Great Wroggi",
    iconsrc: "/MHRise-icons/Great_Wroggi_Icon.png",
  },
  {
    name: "Jyuratodus",
    iconsrc: "/MHRise-icons/Jyuratodus_Icon.png",
  },
  {
    name: "Khezu",
    iconsrc: "/MHRise-icons/Khezu_Icon.png",
  },
  {
    name: "Kulu-Ya-Ku",
    iconsrc: "/MHRise-icons/Kulu-Ya-Ku_Icon.png",
  },
  {
    name: "Kushala Daora",
    iconsrc: "/MHRise-icons/Kushala_Daora_Icon.png",
  },
  {
    name: "Risen Kushala Daora",
    iconsrc: "/MHRise-icons/Risen_Kushala_Daora_Icon.png",
  },
  {
    name: "Lagombi",
    iconsrc: "/MHRise-icons/Lagombi_Icon.png",
  },
  {
    name: "Lunagaron",
    iconsrc: "/MHRise-icons/Lunagaron_Icon.png",
  },
  {
    name: "Magnamalo",
    iconsrc: "/MHRise-icons/Magnamalo_Icon.png",
  },
  {
    name: "Scorned Magnamalo",
    iconsrc: "/MHRise-icons/Scorned_Magnamalo_Icon.png",
  },
  {
    name: "Malzeno",
    iconsrc: "/MHRise-icons/Malzeno_Icon.png",
  },
  {
    name: "Primordial Malzeno",
    iconsrc: "/MHRise-icons/Primordial_Malzeno_Icon.png",
  },
  {
    name: "Mizutsune",
    iconsrc: "/MHRise-icons/Mizutsune_Icon.png",
  },
  {
    name: "Apex Mizutsune",
    iconsrc: "/MHRise-icons/Apex_Mizutsune_Icon.png",
  },
  {
    name: "Violet Mizutsune",
    iconsrc: "/MHRise-icons/Violet_Mizutsune_Icon.png",
  },
  {
    name: "Nargacuga",
    iconsrc: "/MHRise-icons/Nargacuga_Icon.png",
  },
  {
    name: "Lucent Nargacuga",
    iconsrc: "/MHRise-icons/Lucent_Nargacuga_Icon.png",
  },
  {
    name: "Pukei-Pukei",
    iconsrc: "/MHRise-icons/Pukei-Pukei_Icon.png",
  },
  {
    name: "Rajang",
    iconsrc: "/MHRise-icons/Rajang_Icon.png",
  },
  {
    name: "Furious Rajang",
    iconsrc: "/MHRise-icons/Furious_Rajang_Icon.png",
  },
  {
    name: "Rakna-Kadaki",
    iconsrc: "/MHRise-icons/Rakna-Kadaki_Icon.png",
  },
  {
    name: "Pyre Rakna-Kadaki",
    iconsrc: "/MHRise-icons/Pyre_Rakna-Kadaki_Icon.png",
  },
  {
    name: "Rathalos",
    iconsrc: "/MHRise-icons/Rathalos_Icon.png",
  },
  {
    name: "Apex Rathalos",
    iconsrc: "/MHRise-icons/Apex_Rathalos_Icon.png",
  },
  {
    name: "Silver Rathalos",
    iconsrc: "/MHRise-icons/Silver_Rathalos_Icon.png",
  },
  {
    name: "Rathian",
    iconsrc: "/MHRise-icons/Rathian_Icon.png",
  },
  {
    name: "Apex Rathian",
    iconsrc: "/MHRise-icons/Apex_Rathian_Icon.png",
  },
  {
    name: "Gold Rathian",
    iconsrc: "/MHRise-icons/Gold_Rathian_Icon.png",
  },
  {
    name: "Royal Ludroth",
    iconsrc: "/MHRise-icons/Royal_Ludroth_Icon.png",
  },
  {
    name: "Seregios",
    iconsrc: "/MHRise-icons/Seregios_Icon.png",
  },
  {
    name: "Shagaru Magala",
    iconsrc: "/MHRise-icons/Shagaru_Magala_Icon.png",
  },
  {
    name: "Risen Shagaru Magala",
    iconsrc: "/MHRise-icons/Risen_Shagaru_Magala_Icon.png",
  },
  {
    name: "Shogun Ceanataur",
    iconsrc: "/MHRise-icons/Shogun_Ceanataur_Icon.png",
  },
  {
    name: "Somnacanth",
    iconsrc: "/MHRise-icons/Somnacanth_Icon.png",
  },
  {
    name: "Aurora Somnacanth",
    iconsrc: "/MHRise-icons/Aurora_Somnacanth_Icon.png",
  },
  {
    name: "Teostra",
    iconsrc: "/MHRise-icons/Teostra_Icon.png",
  },
  {
    name: "Risen Teostra",
    iconsrc: "/MHRise-icons/Risen_Teostra_Icon.png",
  },
  {
    name: "Tetranadon",
    iconsrc: "/MHRise-icons/Tetranadon_Icon.png",
  },
  {
    name: "Thunder Serpent Narwa",
    iconsrc: "/MHRise-icons/Thunder_Serpent_Narwa_Icon.png",
  },
  {
    name: "Narwa the Allmother",
    iconsrc: "/MHRise-icons/Narwa_the_Allmother_Icon.png",
  },
  {
    name: "Tigrex",
    iconsrc: "/MHRise-icons/Tigrex_Icon.png",
  },
  {
    name: "Tobi-Kadachi",
    iconsrc: "/MHRise-icons/Tobi-Kadachi_Icon.png",
  },
  {
    name: "Crimson Glow Valstrax",
    iconsrc: "/MHRise-icons/Crimson_Glow_Valstrax_Icon.png",
  },
  {
    name: "Risen Crimson Glow Valstrax",
    iconsrc: "/MHRise-icons/Risen_Crimson_Glow_Valstrax_Icon.png",
  },
  {
    name: "Velkhana",
    iconsrc: "/MHRise-icons/Velkhana_Icon.png",
  },
  {
    name: "Volvidon",
    iconsrc: "/MHRise-icons/Volvidon_Icon.png",
  },
  {
    name: "Wind Serpent Ibushi",
    iconsrc: "/MHRise-icons/Wind_Serpent_Ibushi_Icon.png",
  },
  {
    name: "Zinogre",
    iconsrc: "/MHRise-icons/Zinogre_Icon.png",
  },
  {
    name: "Apex Zinogre",
    iconsrc: "/MHRise-icons/Apex_Zinogre_Icon.png",
  },
];
function App() {
  const [monsterIndex, setMonsterIndex] = useState(0);
  const [weaponIndex, setWeaponIndex] = useState(0);
  const [monsterRiseIndex, setMonsterRiseIndex] = useState(0);
  const [weaponRiseIndex, setWeaponRiseIndex] = useState(0);

  return (
    <>
      <Main
        monster={monsterTab[monsterIndex]}
        setMonsterIndex={setMonsterIndex}
        weapon={weaponTab[weaponIndex]}
        setWeaponIndex={setWeaponIndex}
      />
      <Rise
        monster={monsterRiseTab[monsterRiseIndex]}
        setMonsterRiseIndex={setMonsterRiseIndex}
        weapon={weaponTab[weaponRiseIndex]}
        setWeaponRiseIndex={setWeaponRiseIndex}
      />
    </>
  );
}

export default App;
