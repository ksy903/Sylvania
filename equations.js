function calculationValidate(calculationType){
    if(calculationType == 1){
        var a = document.getElementById("SCFM").value;
        var b = document.getElementById("Temp").value;
        var c = document.getElementById("Watts").value;
        
        if((a == "" || a == null) && (b == "" || b == null) && (c == "" || c == null)){
            alert("No inputs");
        }
        else if(isNaN(a) || isNaN(b) || isNaN(c)){
            alert("One or more of your inputs are not a number");
        }
        else if(a == "" || a == null){
            document.getElementById("SCFM").value = power_flowrate_temp(1, b, c);
        }
        else if(b == "" || b == null){
            document.getElementById("Temp").value = power_flowrate_temp(2, a, c);
        }
        else if(c == "" || c == null){
            document.getElementById("Watts").value = power_flowrate_temp(3, a, b);
        }
        else{
            alert("You need to leave one blank for the answer");
        }
    }
    else if(calculationType == 2){
        var a = document.getElementById("TempC").value;
        var b = document.getElementById("TempF").value;
        
        if((a == "" || a == null) && (b == "" || b == null)){
            alert("No inputs");
        }
        else if(isNaN(a) || isNaN(b)){
            alert("One or more of your inputs are not a number");
        }
        else if(a == "" || a == null){
            document.getElementById("TempC").value = temp_conversion(1, b);
        }
        else if(b == "" || b == null){
            document.getElementById("TempF").value = temp_conversion(2, a);
        }
        else{
            alert("You need to leave one blank for the answer");
        }
    }
    else if(calculationType == 3){
        var a = document.getElementById("Wattage").value;
        var b = document.getElementById("Voltage").value;
        var c = document.getElementById("LineCurrent").value;
        if((a == "" || a == null) && (b == "" || b == null) && (c == "" || c == null)){
            alert("No inputs");
        }
        else if(isNaN(a) || isNaN(b) || isNaN(c)){
            alert("One or more of your inputs are not a number");
        }
        else if(a == "" || a == null){
            document.getElementById("Wattage").value = three_phase_unit(1, b, c);
        }
        else if(b == "" || b == null){
            document.getElementById("Voltage").value = three_phase_unit(2, a, c);
        }
        else if(c == "" || c == null){
            document.getElementById("LineCurrent").value = three_phase_unit(3, a, b);
        }
        else{
            alert("You need to leave one blank for the answer");
        }
    }
    else if(calculationType == 4){
        var a = document.getElementById("Wattage2").value;
        var b = document.getElementById("Voltage2").value;
        var c = document.getElementById("LineCurrent2").value;
        if((a == "" || a == null) && (b == "" || b == null) && (c == "" || c == null)){
            alert("No inputs");
        }
        else if(isNaN(a) || isNaN(b) || isNaN(c)){
            alert("One or more of your inputs are not a number");
        }
        else if(a == "" || a == null){
            document.getElementById("Wattage2").value = single_phase_unit(1, b, c);
        }
        else if(b == "" || b == null){
            document.getElementById("Voltage2").value = single_phase_unit(2, a, c);
        }
        else if(c == "" || c == null){
            document.getElementById("LineCurrent2").value = single_phase_unit(3, a, b);
        }
        else{
            alert("You need to leave one blank for the answer");
        }
    }
    else if(calculationType == 5){
        var a = document.getElementById("W").value;
        var b = document.getElementById("E").value;
        var c = document.getElementById("I").value;
        var d = document.getElementById("R").value;
        if((a == "" || a == null) && (b == "" || b == null) && (c == "" || c == null) && (d == "" || d == null)){
            alert("No inputs");
        }
        else if(isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d)){
            alert("One or more of your inputs are not a number");
        }
        else if((a == "" || a == null) && (b == "" || b == null)){
            document.getElementById("E").value = ohms_law(1, c, d);
            document.getElementById("W").value = ohms_law(1, Math.pow(c, 2), d);
        }
        else if((a == "" || a == null) && (c == "" || c == null)){
            document.getElementById("I").value = ohms_law(2, b, d);
            document.getElementById("W").value = ohms_law(5, b, d);
        }
        else if((a == "" || a == null) && (d == "" || d == null)){
            document.getElementById("W").value = ohms_law(1, b, c);
            document.getElementById("R").value = ohms_law(2, b, c);
        }
        else if((b == "" || b == null) && (c == "" || c == null)){
            document.getElementById("E").value = ohms_law(3, a, d);
            document.getElementById("I").value = ohms_law(4, a, d);
        }
        else if((b == "" || b == null) && (d == "" || d == null)){
            document.getElementById("E").value = ohms_law(2, a, c);
            document.getElementById("R").value = ohms_law(6, a, c);
        }
        else if((c == "" || c == null) && (d == "" || d == null)){
            document.getElementById("I").value = ohms_law(2, a, b);
            document.getElementById("R").value = ohms_law(5, b, a);
        }
        else{
            alert("You need to leave two blank for the answer");
        }
    }
    else{
        var a = document.getElementById("density").value;
        var b = document.getElementById("volumeflowrate").value;
        var c = document.getElementById("specificheat").value;
        var d = document.getElementById("temperaturedifferential").value;
        var e = document.getElementById("Q").value;
        if((a == "" || a == null) && (b == "" || b == null) && (c == "" || c == null) && (d == "" || d == null) && (e == "" || e == null)){
            alert("No inputs");
        }
        else if(isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d) || isNaN(e)){
            alert("One or more of your inputs are not a number");
        }
        else if(a == "" || a == null){
            document.getElementById("density").value = convection(2, e, b, c, d);
        }
        else if(b == "" || b == null){
            document.getElementById("volumeflowrate").value = convection(2, e, a, c, d);
        }
        else if(c == "" || c == null){
            document.getElementById("specificheat").value = convection(2, e, a, b, d);
        }
        else if(d == "" || d == null){
            document.getElementById("temperaturedifferential").value = convection(2, e, a, b, c);
        }
        else if(e == "" || e == null){
            document.getElementById("Q").value = convection(1, a, b, c, d);
        }
        else{
            alert("You need to leave one blank for the answer");
        }
    }
}

function power_flowrate_temp (type, value1, value2){
	if(type == 1){
		return round((value2 * 2.5) / value1);
	}
	else if(type == 2){
		return round((value2 * 2.5) / value1);
	}
    else{
        return round((value1 * value2) / 2.5);
    }
}

function temp_conversion (type, value){
    if(type == 1){
        return round(((value-32)*5)/9);
    }
    else{
        return round(((value*9)/5)+32);
    }
}

function three_phase_unit (type, value1, value2){
    if(type == 1){
		return round(value1 * value2 * Math.sqrt(3));
	}
	else if(type == 2){
		return round(value1 / (value2 * Math.sqrt(3)));
	}
    else{
        return round(value1 / (value2 * Math.sqrt(3)));
    }
}

function single_phase_unit(type, value1, value2){
    if(type == 1){
		return round(value1 * value2);
	}
	else if(type == 2){
		return round(value1 / value2);
	}
    else{
        return round(value1 / value2);
    }
}

function ohms_law(type, value1, value2){
    if(type == 1){
		return round(value1 * value2);
	}
	else if(type == 2){
		return round(value1 / value2);
	}
	else if(type == 3){
		return round(Math.sqrt(value1 * value2));
	}
    else if(type == 4){
        return round(Math.sqrt(value1 / value2));
    }
    else if(type == 5){
        return round(Math.pow(value1, 2) / value2);
    }
    else{
        return round(value1 / Math.pow(value2, 2));
    }
}

function convection(type, value1, value2, value3, value4){
    if(type == 1){
        return round(value1*value2*value3*value4);
    }
    else{
        return round(value1/(value2*value3*value4));
    }
}

function round(num){
    //var val = (parseFloat(num).toPrecision(3));
	return num;
}

function clearAll(){
    document.getElementById("SCFM").value = null;
    document.getElementById("Temp").value = null;
    document.getElementById("Watts").value = null;
    document.getElementById("TempC").value = null;
    document.getElementById("TempF").value = null;
    document.getElementById("Wattage").value = null;
    document.getElementById("Voltage").value = null;
    document.getElementById("LineCurrent").value = null;
    document.getElementById("Wattage2").value = null;
    document.getElementById("Voltage2").value = null;
    document.getElementById("LineCurrent2").value = null;
    document.getElementById("W").value = null;
    document.getElementById("E").value = null;
    document.getElementById("I").value = null;
    document.getElementById("R").value = null;
    document.getElementById("density").value = null;
    document.getElementById("volumeflowrate").value = null;
    document.getElementById("specificheat").value = null;
    document.getElementById("temperaturedifferential").value = null;
    document.getElementById("Q").value = null;
    document.getElementById("productList").innerHTML = "";
}

function saveWattage(){
	var wattage = document.getElementById("Watts").value;
	document.getElementById("wattValue").innerHTML = wattage;
}

function saveSCFM(){
	var SCFM = document.getElementById("SCFM").value;
	document.getElementById("SCFMValue").innerHTML = SCFM;
}
