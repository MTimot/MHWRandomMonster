import "./main.css";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import weaponTab from "../../assets/weaponTab";
function Main() {
	const monster = useLoaderData();
	const [monsterIndex, setMonsterIndex] = useState(0);
	const [weaponIndex, setWeaponIndex] = useState(0);
	const weapon = weaponTab;
	function getRandomIntMonster() {
		return Math.floor(Math.random() * 71);
	}
	function getRandomIntWeapon() {
		return Math.floor(Math.random() * 14);
	}
	function handleClick() {
		setMonsterIndex(getRandomIntMonster);
		setWeaponIndex(getRandomIntWeapon);
	}
	return (
		<>
			<video
				src="MonsterHunterWorld2.mp4"
				autoPlay
				muted
				loop
				className="videomhw"
			/>
			<main>
				<h2>
					{monster[monsterIndex].name} with {weapon[weaponIndex].name}
				</h2>
				<div className="bothicons">
					<div className="icon-placeholder">
						<img
							className="monster-icon"
							src={monster[monsterIndex].iconsrc}
							alt="CA MARCHE PAS"
						/>
					</div>
					<div className="weapon-container">
						<img
							className="weaponimg"
							src={weapon[weaponIndex].iconsrc}
							alt={weapon[weaponIndex].name}
						/>
					</div>
				</div>
				<button type="button" id="chassonsbutton" onClick={handleClick}>
					Chassons!!
				</button>
			</main>
		</>
	);
}

export default Main;
