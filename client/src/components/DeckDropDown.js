import React, { useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { Mode } from "../context/DeckModeContext";
import { MODES } from "../utils/";

const Absolute = styled.div`
	left: 50%;
`;
const Relative = styled.div`
	left: -50%;
`;

const DeckDropDown = ({ deckRef }) => {
	const { state, dispatch } = useContext(Mode);
	const path = useLocation().pathname;
	const [visible, setVisible] = useState(false);
	if (path === "/deck")
		return (
			<Absolute className="absolute h-16 my-3 z-10">
				<Relative className="relative inline-block text-left">
					<div>
						<button
							type="button"
							onClick={() => {
								setVisible(!visible);
							}}
							className="inline-flex items-center w-full rounded border border-gray-900 shadow-sm px-4 py-2 bg-gray-900 text-sm font-medium text-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
							id="options-menu"
							aria-haspopup="true"
							aria-expanded="true"
						>
							{state}
							{/* Heroicon name: chevron-down */}
							<svg
								className="-mr-1 ml-2 h-5 w-5"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path
									fillRule="evenodd"
									d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
									clipRule="evenodd"
								/>
							</svg>
						</button>
					</div>
					{visible && (
						<div
							className="origin-top-right absolute right-5 mt-1 w-56 rounded shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100"
							role="menu"
							aria-orientation="vertical"
							aria-labelledby="options-menu"
						>
							<div className="py-1">
								<div
									onClick={() => {
										dispatch({
											type: "CHANGE_MODE",
											payload: MODES.normal,
										});
										setVisible(false);
									}}
									className="block cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
								>
									Normal
								</div>
								<div
									onClick={() => {
										dispatch({
											type: "CHANGE_MODE",
											payload: MODES.test,
										});
										setVisible(false);
									}}
									className="block cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
								>
									Test
								</div>
							</div>
							<div className="py-1">
								<div
									onClick={() => {
										deckRef.current.resetDeck();
										setVisible(false);
									}}
									className="block cursor-pointer px-4 py-2 text-sm text-red-600 hover:bg-red-600 hover:text-white"
									role="menuitem"
								>
									Reset
								</div>
							</div>
						</div>
					)}
				</Relative>
			</Absolute>
		);
	return <></>;
};

export default DeckDropDown;
