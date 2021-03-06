import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import navStyles from './Nav.module.scss';

const Nav = () => {
	const [isMobile, setMobile] = useState(true);
	const [navState, setNavState] = useState(false);
	const [startPos, setPos] = useState(null);

	const handleResize = () => {
		setMobile(window.innerWidth < 1000);
	};
	const handleNavToggle = (e) => setNavState(!navState);

	const handleNavSwipeClose = (e) => {
		const diff = Math.abs(startPos - e.changedTouches[0].clientX);
		return e.changedTouches[0].clientX < startPos && diff > 50 ? handleNavToggle() : null;
	};

	useEffect(() => {
		handleResize();
		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const servicesList = (
		<div className={navStyles.services__list}>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>

				<li>
					<Link to="/videos/">Videos</Link>
				</li>

				<li>
					<Link to="/contact/">Contact</Link>
				</li>
			</ul>
		</div>
	);

	return isMobile ? (
		<nav className={navStyles.nav}>
			<div className={navStyles.mobile__logo}>
				<NavLink to="/">The Clerk of Oxford Company</NavLink>
			</div>
			<div className={navStyles.toggle__box} onClick={(e) => handleNavToggle(e)}>
				<FiMenu
					style={
						navState
							? {
									transform: `rotate(180deg)`,
									transition: 'all .3s ease-in-out',
							  }
							: {
									transform: `rotate(-180deg)`,
									transition: 'all .3s ease-in-out',
							  }
					}
				/>
			</div>
			<div
				className={navState ? `${navStyles.sideMenu}` : `${navStyles.sideMenu} ${navStyles.sideMenu__hide}`}
				onTouchStart={(e) => setPos(e.touches[0].clientX)}
				onTouchEnd={(e) => handleNavSwipeClose(e)}
			>
				<div className={navStyles.sideMenu__container}>
					<div className={navStyles.close__box} onClick={(e) => handleNavToggle(e)}>
						<FiX
							style={
								navState
									? {
											transform: `rotate(180deg)`,
											transition: 'all .3s ease-in-out',
									  }
									: {
											transform: `rotate(-180deg)`,
											transition: 'all .3s ease-in-out',
									  }
							}
						/>
					</div>
					{servicesList}
				</div>
				<div className={navStyles.sideMenu__overlay} onClick={(e) => setNavState(!navState)}></div>
			</div>
		</nav>
	) : (
		<nav className={navStyles.nav}>
			<div className={navStyles.nav__left}>
				<NavLink to="/">The Clerk of Oxford Company</NavLink>
			</div>
			<div className={navStyles.nav__right}>
				<NavLink exact to="/" activeClassName={navStyles.active}>
					Home
				</NavLink>

				<NavLink exact to="/videos" activeClassName={navStyles.active}>
					Videos
				</NavLink>

				<NavLink exact to="/contact" activeClassName={navStyles.active}>
					Contact
				</NavLink>
			</div>
		</nav>
	);
};
export default Nav;
