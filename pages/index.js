import Head from 'next/head';
import Link from 'next/link'
import Portfolio from './Portfolio';
import 'bootstrap/dist/css/bootstrap.min.css'

import { useState, useEffect } from 'react';



export default function Home() {

	const [buttonBurger, setButtonBurger] = useState(false);

	const clickBurger = () => {
		buttonBurger == true ? setButtonBurger(false) : setButtonBurger(true)
		console.log(buttonBurger)
	}
	const clickCloseBurger = () => {
		setButtonBurger(false)
	}

	function useWindowSize() {
		const isClient = typeof window === "object";

		function getSize() {
			return {
				width: isClient ? window.innerWidth : undefined,
				height: isClient ? window.innerHeight : undefined
			};
		}

		const [windowSize, setWindowSize] = useState(getSize);

		useEffect(() => {
			if (!isClient) {
				return false;
			}

			function handleResize() {
				setWindowSize(getSize());
			}

			window.addEventListener("resize", handleResize);
			return () => window.removeEventListener("resize", handleResize);
		}, []); // Empty array ensures that effect is only run on mount and unmount

		return windowSize;
	}

	const screenWidth = useWindowSize().width;


	return (
		<div className="">
			<Head>
				<script type='text/javascript' src=""  ></script>

				<link rel="icon" href="/favicon.ico" />

				<title>Mon site Portfolio</title>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />

			</Head>
			<div className="is-preload">

				<div id="header">
					<div className="top">
						<div id="logo">
							<span className="image avatar48"><img src="images/avatar.jpg" alt="" /></span>
							<h1 id="title">Quentin DA SILVA</h1>
							<p>Administrateur Réseau</p>
						</div>
						<nav id="nav">
							<ul>
								<li><a href="#top" id="top-link"><span className="icon solid fa-home">Intro</span></a></li>
								<li><a href="#portfolio" id="portfolio-link"><span className="icon solid fa-th">Portfolio</span></a></li>
								<li><a href="#about" id="about-link"><span className="icon solid fa-user">About Me</span></a></li>
								<li><a href="#contact" id="contact-link"><span className="icon solid fa-envelope">Contact</span></a></li>
							</ul>
						</nav>
					</div>
					<div className="bottom">
						<ul className="icons">
							<li><a href="#" className="icon brands fa-twitter"><span className="label">Twitter</span></a></li>
							<li><a href="#" className="icon brands fa-facebook-f"><span className="label">Facebook</span></a></li>
							<li><a href="#" className="icon brands fa-github"><span className="label">Github</span></a></li>
							<li><a href="#" className="icon brands fa-dribbble"><span className="label">Dribbble</span></a></li>
							<li><a href="#" className="icon solid fa-envelope"><span className="label">Email</span></a></li>
						</ul>
					</div>
				</div>

				<div id="main">
					<section id="top" className="one dark cover">
						<div className="container">

							<header>
								<h2 className="alt">Hi! I'm <strong>Prologue</strong>, a <a href="http://html5up.net/license">free</a> responsive<br />
									site template designed by <a href="http://html5up.net">HTML5 UP</a>.</h2>
								<p>Ligula scelerisque justo sem accumsan diam quis<br />
									vitae natoque dictum sollicitudin elementum.</p>
							</header>
							<footer>
								<a href="#portfolio" className="button scrolly">Magna Aliquam</a>
							</footer>
						</div>
					</section>


					<section id="portfolio" className="two">
						<div className="container">

							<header>
								<h2>Portfolio</h2>
							</header>

							<p>Vitae natoque dictum etiam semper magnis enim feugiat convallis convallis
								egestas rhoncus ridiculus in quis risus amet curabitur tempor orci penatibus.
								Tellus erat mauris ipsum fermentum etiam vivamus eget. Nunc nibh morbi quis
								fusce hendrerit lacus ridiculus.</p>

							
									<Portfolio />
							

						</div>
					</section>


					<section id="about" className="three">
						<div className="container">

							<header>
								<h2>About Me</h2>
							</header>

							<a href="#" className="image featured"><img src="images/pic08.jpg" alt="" /></a>

							<p>Tincidunt eu elit diam magnis pretium accumsan etiam id urna. Ridiculus
								ultricies curae quis et rhoncus velit. Lobortis elementum aliquet nec vitae
								laoreet eget cubilia quam non etiam odio tincidunt montes. Elementum sem
								parturient nulla quam placerat viverra mauris non cum elit tempus ullamcorper
								dolor. Libero rutrum ut lacinia donec curae mus vel quisque sociis nec
								ornare iaculis.</p>

						</div>
					</section>


					<section id="contact" className="four">
						<div className="container">

							<header>
								<h2>Contact</h2>
							</header>

							<p>Elementum sem parturient nulla quam placerat viverra
								mauris non cum elit tempus ullamcorper dolor. Libero rutrum ut lacinia
								donec curae mus. Eleifend id porttitor ac ultricies lobortis sem nunc
								orci ridiculus faucibus a consectetur. Porttitor curae mauris urna mi dolor.</p>

							<form method="post" action="#">
								<div className="row">
									<div className="col-6 col-12-mobile"><input type="text" name="name" placeholder="Name" /></div>
									<div className="col-6 col-12-mobile"><input type="text" name="email" placeholder="Email" /></div>
									<div className="col-12">
										<textarea name="message" placeholder="Message"></textarea>
									</div>
									<div className="col-12">
										<input type="submit" value="Send Message" />
									</div>
								</div>
							</form>

						</div>
					</section>

				</div>


				<div id="footer">


					<ul className="copyright">
						<li>&copy; Untitled. All rights reserved.</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
					</ul>

				</div>



			</div>










		</div>
	)
}
