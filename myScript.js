function myFunction() {
var input = document.getElementById("myNumber").value;
    
	//Get how many thousands there are
	var quotientTH = input/1000;
	var remainderTH = input%1000;

	//Get how many 500's there are
	var quotientFH = remainderTH/500;
	var remainderFH = remainderTH%500;

	//Get how many hundreds there are
	var quotientH = remainderFH/100;
	var remainderH = remainderFH%100;

	//Get how many 50's there are
	var quotientFI = remainderH/50;
	var remainderFI = remainderH%50;

		//Get how many 10's there are
	var quotientT = remainderFI/10
	var remainderT = remainderFI%10;

	//Get how many units there are
	var quotientU = remainderT;   

		//Thousand representation
		var thousandsoutput = "";
		while(quotientTH >= 1 && quotientTH < 10){
			thousandsoutput = "M".repeat(quotientTH);
		quotientTH = quotientTH - quotientTH;
		}


		//500's representation
		var fivehundredsoutput = "";
		while(quotientFH >= 1){
			fivehundredsoutput = "D".repeat(quotientFH);
		quotientFH = quotientFH - quotientFH;
		}


		//100's representation
		var onehundredsoutput = "";
		while(quotientH >= 1){
			onehundredsoutput = "C".repeat(quotientH);
		quotientH = quotientH - quotientH;
		}

		//50's representation
		var fiftiesoutput = "";
		while(quotientFI >= 1){
			fiftiesoutput = "L".repeat(quotientFI);
		quotientFI = quotientFI - quotientFI;
		}

		//10's representation
		var tensoutput = "";
		while(quotientT >= 1){
			tensoutput = "X".repeat(quotientT);
		quotientT = quotientT - quotientT;
		}

		//Units representation
		var unitsoutput = "";
		while(quotientU >= 1){

			//Irritating Roman Units
						if(quotientU == 1){
							unitsoutput = "I";
						}
						else if(quotientU == 2){
						unitsoutput = "II";
						}
						else if(quotientU == 3){
						unitsoutput = "III";
						}
						else if(quotientU == 4){
						unitsoutput = "IV";
						}
						else if(quotientU == 5){
						unitsoutput = "V";
						}
						else if(quotientU == 6){
						unitsoutput = "VI";
						}
						else if(quotientU == 7){
						unitsoutput = "VII";
						} 
						else if(quotientU == 8){
						unitsoutput = "VIII";
						}
						else if(quotientU == 9){
						unitsoutput = "IX";
						}
						else
						{unitsoutput = "";
						}
		quotientU = quotientU - quotientU;
		}
						
document.getElementById("Answer").innerHTML = thousandsoutput + fivehundredsoutput + onehundredsoutput + fiftiesoutput + tensoutput + unitsoutput;
}

 




















					// while(input > 10 ){
					// 	//take away 10 form input and display as X
						 
					// 	 input = input - 10;
					// 	 var output10 = "X";
					// }
