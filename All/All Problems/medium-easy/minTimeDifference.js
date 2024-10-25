/*
Given a list of 24-hour clock time points in "HH:MM" format, return the minimum minutes difference between any two time-points in the list.
 

Example 1:

Input: timePoints = ["23:59","00:00"]
Output: 1
Example 2:

Input: timePoints = ["00:00","23:59","00:00"]
Output: 0

*/

function minTimeDiff(timePoints){



	//time points are arrays of hours and around the clock 
	// 00:00 ---> 01:00 ---->23:00 ---> 23:59 ---> 00:00
	// 1hr or 60min   22hrs/22*60    22*60+59min     1min

	  // 0,60,1320,1379, 0 ==> sorted  => 0,0,60,1320,1379 ==> time diff= >  0 , 60 , 1260 , 59
 


	function convertToMin(time){
		let [hour,min] = time.split(":").map(Number)
		return  hour * 60 + min 
	}

	let totalDaysInMin = 60*24  // 1440

	//timepoint array in minutes 
	const minutes = timePoints.map(convertToMin) 


	//sort min array in decending order 
	minutes.sort((a,b)=>a-b)


	let minTimeDiff = Infinity

	for(let i = 1 ; i < minutes.length ; i++){
		minTimeDiff = Math.min(minTimeDiff , minutes[i] - minutes[i-1])
	}


	//handle circular arr 
	let circularDiff = totalDaysInMin + minutes[0] - minutes[minutes.length-1]


	return Math.min(minTimeDiff , circularDiff)	

}