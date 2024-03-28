import React from "react"

import HeroImage from "../../../../assets/images/hero-image.png"
import HeaderBg from "../../../../assets/images/header__bg.png"
import Button from "../../../common/Button"

import "./style.scss"

export const Banner = () => {
	return (
		<div className="banner">
			<div className="banner__container">
				<div className="banner__content">
					<h3>HELLO, I’M OLEH BAZHAN</h3>
					<h1>Creative and Honest Software Engineer with 10 years of experience</h1>
					<h5>
						I’m a Voznesensk-based full-stack and blockchain developer focused on writing code
						that makes an{" "}
						<span className="text-highlight">impact on users.</span> I have also
						gained experience as a consultant,
						<span className="text-highlight"> product designer</span>, and
						digital marketer. My experience as a UX designer and startup
						co-founder has opened the ability to understand both the business
						side as well as the users’ side of any project. I commit code to{" "}
						<a
							className="github"
							href="https://github.com/adonisman710"
							target="_blank"
							rel="noopener noreferrer">
							Github.
						</a>{" "}
						I would like to take a pro-active approach to analyze and formulate a solution. <span className="text-highlight text-bold">Let's work together</span> to bring your ideas to life! 
					</h5>
					<a href="#recent-projects">
						<Button label="View projects" variant="outline" />
					</a>
				</div>
				<div className="banner__image">
					<img src={HeroImage} alt="sunshine smiling" />
				</div>
			</div>
			<img
				src={HeaderBg}
				alt="code abstract background"
				className="banner__bg"
			/>
		</div>
	)
}
export default Banner
