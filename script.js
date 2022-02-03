function calcTip(event){
    event.preventDefault();
    let bill = document.getElementById('bill').value;
    let servicequaly = document.getElementById('servicequaly').value;
    let numOfPeople = document.getElementById('people').value;

    if(bill == '' | servicequaly == 0){
        alert('Por favor preencha os valores')
        return;
    }
    
    if(numOfPeople == '' | numOfPeople <= 1){
        numOfPeople = 1;
        document.getElementById('each').style.display = 'none';
    } else{
        document.getElementById('each').style.display = 'block';
    }

    let total = (bill * servicequaly) / numOfPeople;
    total = total.toFixed(2);
    document.getElementById('tip').innerHTML = total;
    document.getElementById('totaltip').style.display = 'block';
}

document.getElementById('totaltip').style.display = 'none';
document.getElementById('each').style.display = 'none';

document.getElementById('tipsform').addEventListener('submit', calcTip);