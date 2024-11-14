import "./rise.css";
interface monsterinterface {
	monster: {
		name: string;
		iconsrc: string;
	};
}
function Rise({ monster, setMonsterRiseIndex, weapon, setWeaponRiseIndex }) {
	function getRandomIntMonster() {
		return Math.floor(Math.random() * 78);
	}
	function getRandomIntWeapon() {
		return Math.floor(Math.random() * 14);
	}
	function handleClick() {
		setMonsterRiseIndex(getRandomIntMonster);
		setWeaponRiseIndex(getRandomIntWeapon);
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
			<div className="logoContainer">
				<img
					className="logo"
					src="/Monster_Hunter_World_Logo.png"
					alt="Logo de Monster Hunter Rise"
				/>
			</div>
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

export default Rise;
