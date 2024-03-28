import React from "react"

import TelegramIcon from "@material-ui/icons/Telegram"
import GitHubIcon from "@material-ui/icons/GitHub"
import DiscordImg from "../../../assets/icons/discordIcon.svg"
import SkypeImg from "../../../assets/icons/skypeIcon.png"

import "./style.scss"

const Footer = () => {
	return (
		<div className="footer">
			<div className="footer__container">
				<h4>Follow me on social media</h4>
				<div className="footer__social-icons">
					<a
						href="https://github.com/adonisman710"
						target="_blank"
						rel="noopener noreferrer">
						{" "}
						<GitHubIcon className="social-icon" />
					</a>
					<a
						href="https://t.me/whiteSnake1004"
						target="_blank"
						rel="noopener noreferrer">
						<TelegramIcon className="social-icon" />
					</a>
					<a
						href="https://discord.gg/WMTtHuyY"
						target="_blank"
						rel="noopener noreferrer">
						<img className="social-icon" src={DiscordImg} alt="oleh_discord"/>
					</a>
					<a
						href="https://join.skype.com/invite/gXcWD3UYeyHJ"
						target="_blank"
						rel="noopener noreferrer">
						<img className="social-icon" src={SkypeImg} alt="oleh_skype" style={{width: "auto"}} />
					</a>

				</div>
				<p>
					Designed and developed by Oleh. Built with React, Typescript.
				</p>
				<p>Copyright © adonisninja {new Date().getFullYear()}</p>
			</div>
		</div>
	)
}

export default Footer
