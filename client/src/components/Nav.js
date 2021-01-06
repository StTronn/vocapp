import React from "react";

const Nav = () => {
	return (
		<nav className="bg-gray-800 mb-8">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					<div className="flex items-center">
						<div className="flex-shrink-0">
							<img
								className="h-8 w-8"
								src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
								alt="Workflow"
							/>
						</div>
						<div className="hidden md:block">
							<div className="ml-10 flex items-baseline space-x-4">
								{/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" 								<a
									href="/#"
									className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
								>
									Dashboard
								</a> */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Nav;
