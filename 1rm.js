function calculateReps(reps) {
	var inputWeightValue = document.getElementById('inputWeight').value;
//	alert(calculate1Rm(inputWeightValue, reps));
	document.getElementById('result').innerHTML = calculate1Rm(inputWeightValue, reps);
}

function calculate1Rm(weight, reps) {
	return (weight * (1 + reps/40));
}