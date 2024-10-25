import "./main.css";
function Main() {
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
				<h1>On chasse ?</h1>
				<div className="icon-placeholder"> </div>
				<button type="button" id="chassonsbutton">
					Chassons!!
				</button>
			</main>
		</>
	);
}

export default Main;
