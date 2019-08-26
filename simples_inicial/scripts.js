    //let um=document.getElementById('um_um').className.split(' ')
    //let um=document.getElementsByClassName('um')[0].id
    //let um=document.getElementsByClassName('um')[0].classList.remove('coluna')
    //um.classList.remove('coluna')
    //let um_C=document.getElementsByClassName('um')
	//let dois_C=document.getElementsByClassName('dois')
 
text=""
i=0
score=10
final=0

function abre(){
	document.getElementById('main').classList.add('esconde')
	
}

function jogar(){
	document.getElementById('main').classList.remove('esconde')
	document.getElementById('botao').classList.add('esconde')
	todos=document.getElementsByClassName('op')
	for(k=0;k<todos.length;k++)
	todos[k].classList.remove('coluna')
	document.getElementById('score').innerHTML=`<p>Score:${score}</p>`

}

setTimeout(function(){
	
	todos=document.getElementsByClassName('op')
	for(k=0;k<todos.length;k++)
	todos[k].classList.add('coluna')
	
}, 5000);



function a(e)
{
if(i<2)
{
	if(i==0){
		id_primeiro=e
	}
	cont=e.split('_')
	text+=cont[1]+'.'
	document.getElementById(e).classList.remove('coluna')
	i++

	if(i==2){
		if(text.split('.')[0]===text.split('.')[1]){
			final++
			score+=10
			document.getElementById('score').innerHTML=`<p>Score:${score}</p>`
		if(final==6)
		{	todos=document.getElementsByClassName('op')
			alert('VOCE GANHOU')
			for(j=0;j<todos.length;j++)
			todos[j].classList.add('coluna')
			
		}
		}
		else{
		alert('diferentes')
		score-=1
		document.getElementById('score').innerHTML=`<p>Score:${score}</p>`
		document.getElementById(e).classList.add('coluna')
		document.getElementById(id_primeiro).classList.add('coluna')
		}

		
	}
}
else{
i=0
text=""
}
}


