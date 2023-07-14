function cc() {
    var v = document.getElementById('gl').style.backgroundColor;
    var n=Math.floor(Math.random() * 10);
    var ar=['red','green','yellow','blue','orange','blueviolet','violet','pink','red','blue']
    if(v=='white') {
        document.getElementById('he').textContent='Click To Turn Off The Bulb';
        document.getElementById('cd').style.background='white';
        document.getElementById('bn').textContent="ON";
        document.getElementById('bn').style.backgroundColor='green';
        document.getElementById('gl').style.backgroundColor=ar[n];
        document.getElementById('lop').style.backgroundColor=ar[n];
    }
    else{
        document.getElementById('he').textContent='Click To Turn On The Bulb';
        document.getElementById('cd').style.backgroundColor='grey';
        document.getElementById('bn').style.backgroundColor='red';
        document.getElementById('bn').textContent="OFF";
        document.getElementById('gl').style.backgroundColor='white';
        document.getElementById('lop').style.backgroundColor='white';
    }
}