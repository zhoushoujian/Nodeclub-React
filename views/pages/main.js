import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { connect } from "react-redux";
import Meta from "./meta"
import { updateUsername } from "../store/user"
import "../theme/less/index.less"

const Main = (props) => {
	console.warn("props", props)

	let [seconds, setSeconds] = useState(5)

	useEffect(() => {
		setTimeout(() => {
			$dispatch(updateUsername("username"))
		}, 5000)
		const secondsInterval = setInterval(() => {
			if(seconds === 0) return clearInterval(secondsInterval)
			setSeconds(--seconds)
		}, 1000)
	}, [])

	return(
		<>
			<Meta
				TITLE="index"
				META_DESCRIPTION="META_DESCRIPTION"
				META_KEYWORDS="META_KEYWORDS"
				noIndex={false}
			/>
			<div className="container">
				<div className="link">
					<Link href="/a" as="/b">
						<a className="link-text">a</a>
					</Link>
				</div>
				<div className="link">
					<Link href="/b" as="/a">
						<a className="link-text">b</a>
					</Link>
				</div >
				<div className="text">this is redux data and will be changed after {seconds} seconds: <span>{props.username}</span></div>
			</div>
		</>
	)
}

Main.getInitialProps = ({ req, res }) => {
	if (req) {
		return {
			data: res ? res.data : null,
		};
	}
	return window.__NEXT_DATA__.props.pageProps;
}


const mapStateToProps = state => {
	return {
		username: state.user.username
	};
};

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Main);

