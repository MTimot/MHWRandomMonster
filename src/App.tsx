import "./App.css";
import Main from "./components/main/main.tsx";
import Rise from "./components/Rise/Rise.tsx";
import { useState } from "react";
import monsterRiseTab from "./assets/monsterRiseTab.tsx";
import monsterWorldTab from "./assets/monsterWorldTab.tsx";
import weaponTab from "./assets/weaponTab.tsx";

function App() {
	const [monsterIndex, setMonsterIndex] = useState(0);
	const [weaponIndex, setWeaponIndex] = useState(0);
	const [monsterRiseIndex, setMonsterRiseIndex] = useState(0);
	const [weaponRiseIndex, setWeaponRiseIndex] = useState(0);

	return (
		<>
			<Main
				monster={monsterWorldTab[monsterIndex]}
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
