import { useState, useEffect } from "react";
import axios from "axios";

import CvsuLogo from "./assets/cvsu-logo.png";
import BacoorCampus from "./assets/bacoor-campus.png";
import HidePasswordTertiary from "./assets/hide-password-tertiary.svg";
import HidePasswordPrimary from "./assets/hide-password-primary.svg";
import ShowPasswordTertiary from "./assets/show-password-tertiary.svg";
import ShowPasswordPrimary from "./assets/show-password-primary.svg";
import ArrowRightTertiary from "./assets/arrow-right-tertiary.svg";
import ArrowRightPrimary from "./assets/arrow-right-primary.svg";

export default function App() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isCredentialsValid, setIsCredentialsValid] = useState(true);
	const [isPasswordShown, setIsPasswordShown] = useState(false);
	const [isRegistering, setIsRegistering] = useState(false);

	function checkBackend() {
		axios.get("/api/check");
	}

	return (
		<div className="relatve flex flex-row">
			<div className="relative z-10 flex flex-col q-w-5-12 w-full h-screen md:p-0 p-4">
				<div className="flex flex-col h-full justify-center items-center bg-primary md:rounded-none rounded-lg">
					<div className="flex w-10/12 q-mb-10 gap-4 justify-center items-center">
						<img className="q-h-16" src={CvsuLogo} />
						<h1 className="q-text-4xl text-nowrap q-leading-8 text-highlight font-helvetica-compressed">
							CAVITE STATE UNIVERSITY
							<br />
							BACOOR CAMPUS
						</h1>
					</div>
					<div className="flex flex-col w-9/12 q-gap-5 items-center font-helvetica">
						<h1 className="q-mb-6 q-text-2xl font-bold text-dark">
							{isRegistering ? "Register Account" : "Account Sign-in"}
						</h1>
						{/* login form */}
						<div className="relative flex flex-col w-full items-center q-gap-5">
							{!isRegistering && (
								<>
									<div className="flex flex-col w-full">
										<label className="ml-1 mb-1 q-text-base font-bold text-tertiary">
											Email Address / Student Number
										</label>
										<input
											className={`w-full q-h-14 p-4 q-text-base text-dark focus:bg-primary q-rounded-xl ${
												isCredentialsValid
													? "bg-secondary"
													: "px-3.5 bg-red-200 border-2 border-red-600"
											}`}
											id="email"
											value={email}
											onChange={(e) => setEmail(e.target.value)}
											onClick={() => setIsCredentialsValid(true)}
										/>
									</div>
									<div className="flex flex-col w-full">
										<label className="ml-1 mb-1 q-text-base font-bold text-tertiary">
											Password
										</label>
										<div className="flex gap-1 ">
											<input
												className={`w-full q-h-14 p-4 q-text-base text-dark focus:bg-primary q-rounded-l-xl rounded-r ${
													isCredentialsValid
														? "bg-secondary"
														: "px-3.5 bg-red-200 border-2 border-red-600"
												}`}
												type={isPasswordShown ? "text" : "password"}
												value={password}
												onChange={(e) => setPassword(e.target.value)}
												onClick={() => setIsCredentialsValid(true)}
											/>
											<button
												className="group px-5 pt-0.5 bg-secondary hover:bg-highlight rounded-l q-rounded-r-xl"
												onClick={() => setIsPasswordShown(!isPasswordShown)}
											>
												<img
													className="group-hover:hidden q-w-6"
													src={isPasswordShown ? ShowPasswordTertiary : HidePasswordTertiary}
												/>
												<img
													className="group-hover:block hidden w-6"
													src={isPasswordShown ? ShowPasswordPrimary : HidePasswordPrimary}
												/>
											</button>
										</div>
									</div>
								</>
							)}
							{/* modal */}
							<div
								className={`absolute -bottom-28 flex justify-center drop-shadow-[0_4px_10px_rgba(0,0,0,0.4)] modal-anim ${
									!isCredentialsValid && "active"
								}`}
							>
								<div className="absolute z-0 border-r-8 -top-2 border-r-transparent border-l-8 border-l-transparent border-b-8 border-b-primary"></div>
								<div className="z-10 p-4 q-text-base font-bold text-tertiary text-pretty bg-primary q-rounded-xl">
									Login credentials
									<br />
									doesn't match anyone in
									<br />
									our system.
								</div>
							</div>
							{/* modal */}
						</div>
						{/* login input */}
						{/* sign in button */}
						{!isRegistering && (
							<>
								<button
									className="group flex w-full q-h-14 q-gap-5 mt-7 justify-center items-center bg-highlight hover:bg-highlight-light disabled:bg-secondary q-rounded-xl"
									disabled={!(email.length > 0 && password.length > 0)}
								>
									<p className="q-text-base text-primary group-disabled:text-tertiary font-bold">
										Sign In
									</p>
									<img className="group-disabled:hidden" src={ArrowRightPrimary} />
									<img className="group-disabled:block hidden" src={ArrowRightTertiary} />
								</button>
								{/* sign in button */}
								<div className="flex flex-col w-full q-gap-12 my-4 items-center">
									<button
										className="q-text-base text-tertiary hover:text-highlight"
										onClick={() => setIsCredentialsValid(!isCredentialsValid)}
										onMouseEnter={checkBackend}
									>
										Forgot Password?
									</button>
									<div className="w-full h-0.5 bg-tertiary rounded"></div>
									<p className="q-text-base text-tertiary">New Student of CvSU Bacoor?</p>
								</div>
								<button
									className="w-7/12 q-h-14 q-text-base font-bold text-primary bg-highlight hover:bg-highlight-light q-rounded-xl"
									onClick={() => setIsRegistering(true)}
								>
									Register
								</button>
							</>
						)}
					</div>
				</div>
			</div>
			<div className="md:static absolute z-0 flex w-screen h-screen justify-end items-end overflow-hidden">
				<div className="absolute w-full h-20 bg-gradient-to-b from-transparent to-black opacity-90" />
				<div className="absolute z-10 w-full h-full bg-highlight opacity-20" />
				<img className="relative z-0 w-full h-screen object-cover" src={BacoorCampus} />
				<img className="md:block hidden absolute z-10 w-36 m-10" src={CvsuLogo} />
			</div>
		</div>
	);
}
