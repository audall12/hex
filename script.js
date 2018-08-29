window.onload = function(){

			var hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
			var y = 0;
			
		    function change(){
				
				y += 1;
				var x = y%16;
				var decimal = x/16;
				var int = (y/16)-decimal;
				var w = hex[x];

				if (int<1) {

					var hexadecimal = w;
				}
				
				else {
					
					while (int >= 1) {
						
						var z = w;
						a = int;
						x = a%16;
						decimal = x/16;
						int = (a/16)-decimal;
						w = hex[x]+z;

						if (int<1) {						
							
							hexadecimal = w;
						}

					}

				}
				
				var length = hexadecimal.length;
				
				if (length==6) {
					var hexCode = hexadecimal;
				}
				
				if (length==5) {
					hexCode = '0'+ hexadecimal;
				}
				
				if (length==4) {
					hexCode = '00'+ hexadecimal;
				}
				
				if (length==3) {
					hexCode = '000'+ hexadecimal;
				}
				
				if (length==2) {
					hexCode = '0000'+ hexadecimal;
				}
				
				if (length==1) {
					hexCode = '00000'+ hexadecimal;
				}
				document.getElementById('mainDiv').innerHTML='#'+hexCode+';';
				document.getElementById('mainDiv').style.color='#'+hexCode;
				};
				
				setInterval(change, 1);
};