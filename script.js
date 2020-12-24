let zenitPolar = function (letras) {
	switch (letras) {
        case 'z': return 'p';
        case 'e': return 'o';
        case 'n': return 'l';
        case 'i': return 'a';
        case 't': return 'r';

        case 'p': return 'z';	    
        case 'o': return 'e';
        case 'l': return 'n';
        case 'a': return 'i';
        case 'r': return 't';
        
        case 'Z': return 'P';
        case 'E': return 'O';
        case 'N': return 'L';
        case 'I': return 'A';
        case 'T': return 'R';

	    case 'P': return 'Z';	   
	    case 'O': return 'E';	    
	    case 'L': return 'N';	    
	    case 'A': return 'I';	    
        case 'R': return 'T';

        // com acentos ↓

        case 'é': return 'ó';
        case 'í': return 'á';
        case 'ó': return 'é';
        case 'á': return 'í';

        case 'ê': return 'ô';
        case 'î': return 'â';
        case 'ô': return 'ê';
        case 'â': return 'î';

        case 'ẽ': return 'õ';
        case 'ĩ': return 'ã';
        case 'õ': return 'ẽ';
        case 'ã': return 'ĩ';
        
             
		default:
			return letras;

	}
}
let setTextInput = function (textInput) {
	let traducao = '';
	[].map.call(textInput, function (letras) {
		traducao += zenitPolar(letras);
	});
	return traducao;
}

let $textInput = document.querySelector('#textInput'),
	$sendMessage = document.querySelector('#send_message'),
	$textOutput = document.querySelector('#textOutput');

$sendMessage.addEventListener('submit',function (e) {
	e.preventDefault();
	$textOutput.value = setTextInput($textInput.value);
});
function clean(){
    document.getElementById('textInput').value = '';
    document.getElementById('textOutput').value = '';
};

let copy = () =>{
    const inputTest = document.querySelector("#textOutput");
    inputTest.select();
    document.execCommand('copy');
    document.getElementById('textInput').value = '';
    document.getElementById('textOutput').value = '';
    alert('O texto traduzido foi copiado com sucesso');
};
