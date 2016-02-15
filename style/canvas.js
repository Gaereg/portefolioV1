function canvasBase(){
	ctx.beginPath();      
	ctx.moveTo(282,350);   
	ctx.lineTo(31,350); 
	ctx.stroke();
	ctx.closePath(); 
}

function canvasPoteau(){
	ctx.beginPath();     
	ctx.moveTo(60,350);    
	ctx.lineTo(60,20);  
	ctx.lineTo(200,20);  
	ctx.stroke();
	ctx.closePath(); 
}

function canvasCorde(){
	ctx.beginPath();     
	ctx.moveTo(200,20);    
	ctx.lineTo(200,60);  
	ctx.stroke();
	ctx.closePath(); 
}

function canvasTete(){
	ctx.beginPath();      
	ctx.arc(200,80,20,0,Math.PI*2,true);
	ctx.stroke();
	ctx.closePath(); 
}

function canvasCorps(){
	ctx.beginPath();     
	ctx.moveTo(200,100);    
	ctx.lineTo(200,170);  
	ctx.lineTo(180,220);  
	ctx.moveTo(200,170); 
	ctx.lineTo(220,220); 
	ctx.stroke();
	ctx.closePath(); 
}

function canvasBras(){
	ctx.beginPath();      
	ctx.moveTo(170,130);   
	ctx.lineTo(230,130); 
	ctx.stroke();
	ctx.closePath(); 
}