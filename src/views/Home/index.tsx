import React from "react"

import Header from "components/landing/Header/Header"
import Skills from "components/landing/Skills"
import RecentProjects from "components/landing/RecentProjects"
import ArticlesVideos from "components/landing/ArticlesVideos"
import Experience from "components/landing/Experience"
import Footer from "components/common/Footer"

import "./style.scss"

const Home = () => {
	return (
		<div>
			<Header />
			<Skills />
			<RecentProjects />
			<Experience />
			<ArticlesVideos />
			<Footer />
		</div>
	)
}

export default Home
