"use strict";

function ReactiveCard() {
	const [lang, setLang] = React.useState("eng");
	const [showStart, setShowStart] = React.useState(true);

	const chooseLang = (lang) => {
		setLang(lang);
		setShowStart(false);
	};

	const header = (
		<header class="navbar">
			<div id="nav-title" class="nav-title">
				<img src="./images/wedding-fav.png" />
				<h4 lang={lang} className="header-text">
					{lang === "eng" ? "Clemence & Zhi Min" : "智权和智敏"}
				</h4>
			</div>

			<div id="nav-actions" class="nav-actions">
				<ul>
					<li class="nav-link">{lang === "eng" ? "Photos" : "照片库"}</li>
				</ul>
				<button class="rsvp-cta">RSVP</button>
			</div>
		</header>
	);

	const languageCard = (
		<React.Fragment key={"wrapper-fragment"}>
			{header}
			<section class="content-block" id="content-block">
				<article id="wrapper-card" className="wrapper-card">
					<img src="./images/select-lang-avatar.png" />
					<span></span>
					<div className="card">
						<div>
							<h3 className="select-lang-title">
								<span className="top-break">Select Language</span>
								<span>/ 选择语言：</span>
							</h3>
							<div className="lang-buttons">
								<button onClick={() => chooseLang("eng")}>English</button>
								<span className="divider"></span>
								<button onClick={() => chooseLang("chi")}>中文</button>
							</div>
						</div>
					</div>
				</article>
			</section>
		</React.Fragment>
	);

	/**
	 * Language card
	 */
	if (showStart) {
		return languageCard;
	}

	const engContent = (
		<div className="invitation-card">
			<h1>Wedding of</h1>
			<h2>Clemence and Zhi Min</h2>
			<h3>8 Oct 2022</h3>
			<h3>7pm</h3>

			<h4>Hilton Singapore Orchard</h4>
			<h5>581 Orchard Rd, Singapore 238883</h5>

			<div>
				<button className="rsvp-cta">RSVP Here</button>
			</div>
		</div>
	);

	const chineseContent = (
		<div className="invitation-card" data-lang={lang}>
			<h1>吴智权 和 梁智敏</h1>
			<h3>谨订于</h3>
			<h3>公历 2022 年 10 月 08 日</h3>
			<h3>举行结婚喜宴</h3>

			<h4>Hilton Singapore Orchard</h4>
			<h4>581 Orchard Rd, Singapore 238883</h4>

			<div className="p-block">
				<p>中午七时晋席</p>
				<p>您的光临将是</p>
				<p>我们最大的荣幸</p>
			</div>

			<div>
				<button className="rsvp-cta">登记出席</button>
			</div>
		</div>
	);

	// Invitation card
	return (
		<React.Fragment key={"wrapper-fragment"}>
			{header}
			<section class="content-block" id="content-block">
				<article id="wrapper-card" className="wrapper-card">
					{lang === "eng" ? (
						<img src="./images/main-avatar.png" />
					) : (
						<img src="./images/main-avatar-chinese.png" />
					)}
					<span></span>
					<div className="card">
						{lang === "eng" ? engContent : chineseContent}
					</div>
				</article>
				<div className="language-select">
					<button onClick={() => chooseLang("eng")}>English</button>
					<hr className="line-divider" />
					<button onClick={() => chooseLang("chi")}>中文</button>
				</div>
			</section>
		</React.Fragment>
	);
}

const domContainer = document.querySelector("#app");
const e = React.createElement;
ReactDOM.render(e(ReactiveCard), domContainer);
