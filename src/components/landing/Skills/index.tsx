import React from "react"

import Skill from "./Skill"
import figmaIcon from "assets/icons/figma.svg"
import reactIcon from "assets/icons/react-icon.svg"
import mobileIcon from "assets/icons/mobile-icon.svg"
import nodeIcon from "assets/icons/node.svg"
import sassIcon from "assets/icons/sass.svg"
import pythonIcon from "assets/icons/python.svg"
import "./style.scss"

function Skills() {
	return (
		<div id="skills" className="skills">
			<div className="skills__container">
				<div className="section__title">
					<h3>My skill set</h3>
				</div>
				<div className="skills__lists">
					<Skill
						name="Front-end"
						detail="React, Next, Typescript, Redux, Redux saga, Vue, Vuex, Nuxt, Responsive, Pixel Perfect"
						icon={reactIcon}
					/>
					<Skill
						name="Back-end + DevOps"
						detail="Node, Django, Laravel, Ruby on Rails, MySQL, MongoDB, Docker, Google Cloud, Kubernetes"
						icon={nodeIcon}
					/>
					<Skill
						name="Mobile"
						detail="Swift, Objective-C, iOS SDK and frameworks, React Native, Flutter, User-Friendly Pixel Perfect UI, RESTful APIs"
						icon={mobileIcon}
					/>
					<Skill
						name="Style/Library"
						detail="CSS, SASS, Tailwind, Material UI, Vuetify, Bootstrap"
						icon={sassIcon}
					/>
					<Skill
						name="Additional"
						detail="Smart Contract, Solidity, Web3, Python, PHP, Socket.io, Git, Shopify, WordPress, WIX"
						icon={pythonIcon}
					/>
					<Skill
						name="Tools"
						detail="Figma, XD, Draw.io, Adobe suite, Jira, Intercom, Postman, Lens"
						icon={figmaIcon}
					/>
				</div>
			</div>
		</div>
	)
}

export default Skills
