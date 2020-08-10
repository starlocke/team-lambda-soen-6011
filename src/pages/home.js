import React from "react"

import "../components/homePage/main.css" // highlight-line


import { Helmet } from "react-helmet" // highlight-line

export default function Home() {
  return (
    <>
      <Helmet style={{'height': '1130em'}}>
        <title>SESTOPIA</title>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
		<link rel="stylesheet" href="../components/homePage/main.css" />
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"/>
      </Helmet>
      <header></header>
      
      <main>
      		<html>
      			<body>
				<section id="header" >
					<div className="inner">
						<span className="icon solid major fa-cloud"></span>
						 <h1><strong>SESTOPIA</strong></h1>
						<p>Sestopia is an encyclopedia of software engineering,<br />
						which covers seven different software engineering processing fields.</p>
						<ul className="actions special">
							<li><a href='..' className="button scrolly">Discover</a></li>
						</ul>
					</div>
				</section>
	
				<section id="footer">
					<div className="footer">
						<ul className="icons">
							<li><a href="#" className="icon brands alt fa-twitter"><span className="label">Twitter</span></a></li>
							<li><a href="#" className="icon brands alt fa-facebook-f"><span className="label">Facebook</span></a></li>
							<li><a href="#" className="icon brands alt fa-instagram"><span className="label">Instagram</span></a></li>
							<li><a href="#" className="icon brands alt fa-github"><span className="label">GitHub</span></a></li>
							<li><a href="#" className="icon solid alt fa-envelope"><span className="label">Email</span></a></li>
						</ul>
						<ul className="copyright">
							<li>&copy; SOEN 6011</li><li>Design: Team L</li>
						</ul>
					</div>
				</section>
				</body>
			</html>

	


      </main>
    </>
  )
}