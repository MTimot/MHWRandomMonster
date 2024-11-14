import { useLoaderData } from "react-router-dom";
import "./rise.css";
import { useState } from "react";
import weaponTab from "../../assets/weaponTab";

function Rise() {
	const monster = useLoaderData();
	console.log(monster);

	const [monsterIndex, setMonsterIndex] = useState(0);
	const [weaponIndex, setWeaponIndex] = useState(0);
	const [isHovering, setIsHovering] = useState(false);

	const weapon = weaponTab;
	function getRandomIntMonster() {
		return Math.floor(Math.random() * 78);
	}
	function getRandomIntWeapon() {
		return Math.floor(Math.random() * 14);
	}
	function handleMouseEnter() {
		setIsHovering(!isHovering);
	}
	function handleMouseLeave() {
		setIsHovering(!isHovering);
	}
	function handleClick() {
		setMonsterIndex(getRandomIntMonster);
		setWeaponIndex(getRandomIntWeapon);
	}
	return (
		<>
			<video
				src="MHRise-Background.mp4"
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
					<div className="icon-placeholder2">
						<img
							className="monster-icon"
							src={monster[monsterIndex].iconsrc}
							alt="CA MARCHE PAS"
						/>
					</div>
					<div className="weapon-container">
						<img
							onMouseEnter={handleMouseEnter}
							onMouseLeave={handleMouseLeave}
							className="weaponimg"
							src={weapon[weaponIndex].iconsrc}
							alt={weapon[weaponIndex].name}
						/>
						{isHovering ? (
							<div className="weapon-description">
								{weapon[weaponIndex].desc}
							</div>
						) : (
							""
						)}
					</div>
				</div>
				<button type="button" id="chassonsbutton" onClick={handleClick}>
					Chassons!!
				</button>
			</main>
		</>
	);
}

export default Rise;
