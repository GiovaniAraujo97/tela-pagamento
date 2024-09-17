function parcelas() {
    if(this.value.length == 0 || !this.value.length){
        let tab = document.getElementById('parcelas')    
        let n = 0
        let c = 1
        tab.innerHTML = ''
        while(c <= 6) {
            let item = document.createElement('option')
            item.text = `${c}x de ${(n/c).toFixed(2)}`
            tab.appendChild(item) 
            c++
        }    
    } else {
    let tab = document.getElementById('parcelas')    
        let n = Number(this.value)
        let c = 1
        tab.innerHTML = ''
        while(c <= 6) {
            let item = document.createElement('option')
            item.text = `${c}x de ${(n/c).toFixed(2)}`
            tab.appendChild(item) 
            c++
        }   
    }
  }
  var input = document.getElementById('pag');
  input.addEventListener('input', parcelas );
  
  function simular(){
    let tab = document.getElementById('caixa') 
    let t = document.getElementById('txtv')
        let n = Number(t.value)
        let v = 6
        let c = 1
        tab.innerHTML = ''
        while(c <= 6) {
            let item = document.createElement('li')
            item.innerHTML = `${(n/v).toFixed(2)}`
            tab.appendChild(item) 
            c++
        }    
  }

  function limparCampos() {
    document.getElementById('nomeCompleto').value = '';
    document.getElementById('cpf').value = '';
    document.getElementById('dataNascimento').value = '';
    document.getElementById('nomePagador').value = '';
    document.getElementById('numeroCartao').value = '';
    document.getElementById('vencimentoCartao').value = '';
    document.getElementById('cvvCartao').value = '';
    document.getElementById('valorCompra').value = '';
    document.getElementById('parcelas').value = '';
}