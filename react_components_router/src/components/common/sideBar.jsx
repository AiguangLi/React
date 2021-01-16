import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = props => {
	const { items, activeItem } = props;
	return (
		<nav className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
			<div className="position-sticky pt-3">
				<ul className="nav flex-column">
					{items.map(item => (
						<li className="nav-item" key={item.path}>
							<Link
								className={
									'nav-link' + (item.path === activeItem.path ? ' active' : '')
								}
								aria-current="page"
								to={item.path}
							>
								{item.name}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
};

export default SideBar;
