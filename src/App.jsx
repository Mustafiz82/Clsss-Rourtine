import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

import image from "./assets/happy-weekend-gif-6.gif";

function App() {
	const today = new Date();
	const options = { weekday: "long" };
	const dayName = today.toLocaleDateString("en-US", options);

	const [day, setDay] = useState(dayName);

	const [routine, setRoutine] = useState([]);
	console.log(day);

	useEffect(() => {
		// // console.log(day);
		// const newDay = "Monday";
		// setDay(newDay);
		// console.log(day);

		if (day == "Sunday") {
			const sunday = [
				{
					nameOfClass: "E-Commerce & CMS",
					timeOfClass: "09.00am - 09.40am",
					subjectCode: "66674",
					classRoom: "2105",
				},
				{
					nameOfClass: "Apps Development Project",
					timeOfClass: "09.40am - 11.00am",
					subjectCode: "66673",
					classRoom: "2202",
				},
				{
					nameOfClass: "Network Administration & System",
					timeOfClass: "11.00am - 11.40am",
					subjectCode: "66672",
					classRoom: "2206",
				},
				{
					nameOfClass: "Innovation & Entrepreneurship",
					timeOfClass: "11.40am - 12.20am",
					subjectCode: "65853",
					classRoom: "2303",
				},
				{
					nameOfClass: "System Analysis & Design",
					timeOfClass: "12.20am - 1.00pm",
					subjectCode: "66671",
					classRoom: "2303",
				},
			];

			setRoutine(sunday);
		} else if (day == "Monday") {
			const Monday = [
				{
					nameOfClass: "System Analysis & Design",
					timeOfClass: "08.20am - 09.00am",
					subjectCode: "66671",
					classRoom: "2107",
				},
				{
					nameOfClass: "Innovation & Entrepreneurship",
					timeOfClass: "09.00am - 09.40am",
					subjectCode: "66653",
					classRoom: "2107",
				},
				{
					nameOfClass: "Network Administration & System",
					timeOfClass: "09.40am - 11.00am",
					subjectCode: "66672",
					classRoom: "2202",
				},
				{
					nameOfClass: "Cyber Security & Ethics",
					timeOfClass: "11.00am - 11.40am",
					subjectCode: "65875",
					classRoom: "2202",
				},
				{
					nameOfClass: "Embedded System Design",
					timeOfClass: "11.40am - 12.20am",
					subjectCode: "66677",
					classRoom: "2202",
				},
			];

			setRoutine(Monday);
		} else if (day == "Tuesday") {
			const tuesDay = [
				{
					nameOfClass: "Embedded System Design",
					timeOfClass: "08.20am - 09.40am",
					subjectCode: "66677",
					classRoom: "2202",
				},
				{
					nameOfClass: "E-Commerce & CMS",
					timeOfClass: "09.40am - 11.00am",
					subjectCode: "66674",
					classRoom: "2204",
				},
				{
					nameOfClass: "Cyber Security & Ethics",
					timeOfClass: "11.00am - 12.20am",
					subjectCode: "66675",
					classRoom: "2202",
				},
			];

			setRoutine(tuesDay);
		} else if (day == "Wednesday") {
			const wednesDay = [
				{
					nameOfClass: "Cyber Security & Ethics",
					timeOfClass: "09.40am - 11.00am",
					subjectCode: "66675",
					classRoom: "2202",
				},
				{
					nameOfClass: "Embedded System Design",
					timeOfClass: "11.00am - 11.40am",
					subjectCode: "66677",
					classRoom: "2202",
				},
				{
					nameOfClass: "E-Commerce & CMS",
					timeOfClass: "11.40am - 1.00p m",
					subjectCode: "66674",
					classRoom: "2204",
				},
			];

			setRoutine(wednesDay);
		} else if (day == "Thursday") {
			const object = [
				{
					nameOfClass: "E-Commerce & CMS",
					timeOfClass: "08.20am - 09.00am",
					subjectCode: "66674",
					classRoom: "2303",
				},
				{
					nameOfClass: "Cyber Security & Ethics",
					timeOfClass: "09.00am - 09.40am",
					subjectCode: "66675",
					classRoom: "2303",
				},
				{
					nameOfClass: "Apps Development Project",
					timeOfClass: "09.40am - 11.00am",
					subjectCode: "66673",
					classRoom: "2202",
				},
				{
					nameOfClass: "System Analysis & Design",
					timeOfClass: "11.00am - 12.20am",
					subjectCode: "66671",
					classRoom: "2204",
				},
			];

			setRoutine(object);
		} else {
			setRoutine([]);
		}
	}, [day]);

	const days = [
		"Saturday",
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
	];
	const [index, setIndex] = useState(days.indexOf(dayName));

	const handleNext = (index) => {
		// console.log(index, "index from function");

		let newIndex = index + 1;
		let newDay = days[newIndex];

		if (index < 6) {
			setIndex(newIndex);
			setDay(newDay);
		} else {
			setIndex(0);
			setDay(days[0]);
		}
	};

	const handlePrev = (index) => {
		let newIndex = index - 1;
		let newDay = days[newIndex];

		if (index > 0) {
			setIndex(newIndex);
			setDay(newDay);
		} else {
			setIndex(6);
			setDay(days[6]);
		}
	};

	return (
		<>
			<div className="overflow-x-auto   text-white h-screen bg-gradient-to-br from-[#5004FD] to-[#A42DE9] ">
				<div className="fixed  md:sticky md:bg-gradient-to-br md:from-[#5004FD] md:to-[#8920F0] md:top-0 py-6 top-4 left-1/2 -translate-x-1/2  md:translate-x-0 flex justify-around items-center z-[9999] ">
					<div className="text-xl text-center">
						<h1>7CMTB1</h1>
						<h1 className="text-gray-300 text-base">
							{new Date().toDateString()}
						</h1>
					</div>
					<div className="join hidden md:block  justify-center  grid-cols-2 text-3xl ">
						<button
							onClick={() => {
								handlePrev(index);
							}}
							className="text-white join-item text-xl btn btn-outline"
						>
							{"<"}
						</button>

						<button className="text-white join-item  text-xl btn btn-outline">
							{day}
						</button>
						<button
							onClick={() => {
								handleNext(index);
							}}
							className="text-white join-item  text-xl btn btn-outline"
						>
							{">"}
						</button>
					</div>
				</div>
				<div className={routine.length == 0 ? "hidden" : "block "}>
					<table className=" table table-pin-rows mt-28 md:mt-0  text-center  w-[700px] md:w-full">
						{/* head */}
						<thead className="md:sticky md:top-24  text-white">
							<tr className="bg-gradient-to-br from-[#8553FF] to-[#A42DE9]">
								<th>Time</th>
								<th>Subject Name</th>
								<th>Room Number </th>
								<th>Subject code</th>
							</tr>
						</thead>
						<tbody className="">
							{routine.map((item, index) => (
								<tr
									key={index}
									className="hover hover:text-black hover:bg-white"
								>
									<td className="">{item?.timeOfClass}</td>
									<td className="">{item?.nameOfClass}</td>
									<td className="">{item?.classRoom}</td>
									<td className="">{item?.subjectCode}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
				<div
					className={
						routine.length == 0
							? " h-screen flex justify-center items-center"
							: "hidden"
					}
				>
					<img className="h-56" src={image} alt="" />
				</div>

				<div className="join fixed  bottom-10  left-1/2 -translate-x-1/2 md:hidden justify-center mt-10 md:mt-6 grid-cols-2 text-3xl flex">
					<button
						onClick={() => {
							handlePrev(index);
						}}
						className="text-white join-item text-xl btn btn-outline"
					>
						{"<"}
					</button>

					<button className="text-white join-item  text-xl btn btn-outline">
						{day}
					</button>
					<button
						onClick={() => {
							handleNext(index);
						}}
						className="text-white join-item  text-xl btn btn-outline"
					>
						{">"}
					</button>
				</div>
			</div>
		</>
	);
}

export default App;
