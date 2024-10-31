import "./main.css";
interface monsterinterface {
	monster: {
		name: string;
		iconsrc: string;
	};
}
function Main({ monster, setMonsterIndex, weapon, setWeaponIndex }) {
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
				<h1>MONSTER RANDOMIZER</h1>
				<h2>
					{monster.name} with {weapon.name}
				</h2>
				<div className="bothicons">
					<div className="icon-placeholder">
						<img
							className="monster-icon"
							src={monster.iconsrc}
							alt="CA MARCHE PAS"
						/>
					</div>
					<div className="weapon-container">
						<img className="weaponimg" src={weapon.iconsrc} alt={weapon.name} />
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
