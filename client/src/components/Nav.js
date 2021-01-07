import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
	return (
		<nav className="bg-gray-800 mb-8">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					<div className="flex items-center">
						<Link to="/">
							<div className="flex-shrink-0">
								<img
									className="h-8 w-8"
									src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
									alt="Workflow"
								/>
							</div>
						</Link>
						<div className="hidden md:block">
							<Link to="/">
								<div className="ml-10 flex items-baseline space-x-4">
									<span
										className=" text-white px-3 py-2 rounded-md text-sm
									font-medium"
									>
										{" "}
										Home
									</span>
								</div>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Nav;
