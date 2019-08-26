opcoes=["um_um","dois_um","um_dois","dois_dois","um_tres","dois_tres","um_quatro","dois_quatro","um_cinco","dois_cinco","um_seis","dois_seis","um_sete","dois_sete","um_oito","dois_oito"]
controla_jogada=0
text=""
score=10
final=0

	//verificando se ha valores repetidos no array novo
  function contem(x, n) {
        for ( i = 0; i < x.length; i++) {
            if (n === x[i]) {
                return true;
            } 

        }
        return false;
    }

//embaralhando as cores
function embaralhar(array) {
	
    var indice_atual = array.length, valor_temporario, indice_aleatorio;
 	novo=[]
    for(i=0;i<indice_atual;i++){
    	indice_aleatorio = Math.floor(Math.random() * indice_atual);
    	ne=opcoes[indice_aleatorio]
    	if(!contem(novo,ne))
    		novo.push(ne)
    	else
    		i--
    }
    return novo;
}



function cria(){
	

	opc=0
	
	
//verifica o tanto de linhas/colunas
linh_col=Math.sqrt(opcoes.length)
arr_novo=(embaralhar(opcoes))
for(i=0;i<linh_col;i++)
{	//cria opcoes randomicas
	
jogo=document.createElement('div')
jogo.id="jogo"
document.getElementById("jogando").appendChild(jogo);
linha =document.createElement('div');
linha.classList.add('linha')	
for(j=0;j<linh_col;j++){
	coluna=document.createElement('div')
	//coluna.classList.add('coluna')
	coluna.classList.add('op')
	coluna.id=arr_novo[opc]
	cor=coluna.id.split('_')
	coluna.classList.add(cor[1])
	oc=`clicou('${coluna.id}')`
	coluna.setAttribute('onclick', oc);
	opc++
	linha.appendChild(coluna)
}
document.getElementById("jogo").appendChild(linha);

document.getElementById('inicio').classList.add('esconde')
	document.getElementById('jogando').classList.remove('esconde')
	document.getElementById('score').innerHTML=`<p>Score:${score}</p>`
}
todas_divs=document.getElementsByClassName("op")
setTimeout(function(){
	//tempinho mostrando as cores
	for(k=0;k<todas_divs.length;k++)
	todas_divs[k].classList.add('coluna')
}, 3000);

}



function clicou(e)
{

	if(controla_jogada<2){
		if(controla_jogada==0)
			id_primeiro=e

		cont=e.split('_')
		text+=cont[1]+'.'
		document.getElementById(e).classList.remove('coluna')
		controla_jogada++

		if(controla_jogada==2){
			
			if(text.split('.')[0]===text.split('.')[1]){
				final++
				score+=10
				document.getElementById('score').innerHTML=`<p>Score:${score}</p>`
			}
			else{
				score-=1
				setTimeout(function(){
				alert('diferentes')
				document.getElementById('score').innerHTML=`<p>Score:${score}</p>`
				document.getElementById(e).classList.add('coluna')
				document.getElementById(id_primeiro).classList.add('coluna')
				}, 500);
			}
			
			if(final==(opcoes.length/2))
			{	
			alert('VOCE GANHOU')
			for(j=0;j<todas_divs.length;j++)
			todas_divs[j].classList.add('coluna')
			teste()
			}	
		}
	}
	else
	{
	controla_jogada=0
	text=""
	}
}



function aparece_play(){
	document.getElementById('titulo').classList.add('esconde')
	document.getElementById('play').classList.remove('esconde')
}

function aparece_titulo(){
	document.getElementById('titulo').classList.remove('esconde')
	document.getElementById('play').classList.add('esconde')
}


function teste(){
	document.getElementById('jogando').removeChild(document.getElementById("jogo"));
	again=confirm('jogar novamente?')
	if(again===true){
		controla_jogada=0
text=""
score=10
final=0
	cria()
}
else{
	document.getElementById('jogando').classList.add('esconde')
	document.getElementById('inicio').classList.remove('esconde')
	score=10
	final=0
}
}