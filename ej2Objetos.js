document.getElementById('act').style.display='none';
var myArrayEst=[];
var myArayFiltrado=[];
let objpersona={
    ced:null,
    nom:null,
    ape:null,
    dir:null,
    n1:null,
    n2:null,
    n3:null,
}
let posact=null;
comprobarLocarStorage();
function comprobarLocarStorage(){
    if(localStorage.getItem('arregloEst') !== undefined && localStorage.getItem('arregloEst')){
        myArrayEst= JSON.parse(localStorage.getItem('arregloEst'));
        mostrarSalida(myArrayEst,'cuerpo');
        console.log(myArrayEst);
    }
}
function agregar(){
    objpersona= new Object();
    objpersona.ced=document.getElementById("ced").value;
    objpersona.nom=document.getElementById("nom").value;
    objpersona.ape=document.getElementById("ape").value;
    objpersona.dir=document.getElementById("dir").value;
    objpersona.n1=document.getElementById("n1").value;
    objpersona.n2=document.getElementById("n2").value;
    objpersona.n3=document.getElementById("n3").value;
    myArrayEst.push(objpersona);
    guardarLocal();
    mostrarSalida(myArrayEst,'cuerpo');
    limpiarCajas();

}
function guardarLocal(){
    localStorage.setItem('arregloEst',JSON.stringify(myArrayEst));
}
 function mostrarSalida(arreglo,tabla){
    let salida='';
    for(i in arreglo){
       salida+='<tr><td>'+arreglo[i].ced+'</td><td>'+arreglo[i].nom+'</td><td>'+
       arreglo[i].ape+'</td><td>'+arreglo[i].dir+'</td><td>'
       +arreglo[i].n1+'</td><td>'+arreglo[i].n2+'</td><td>'
       +arreglo[i].n3+'</td><td>'
       +nf(arreglo[i].n1,arreglo[i].n2,arreglo[i].n3)+'</td><td>'
       + '<button onclick="editar('+ i+')">Editar</button>'
       + '<button onclick="eliminar('+i+')">Eliminar</button>'
       +'</td></tr>';
    }
    
       document.getElementById(tabla).innerHTML=salida;
 }
function limpiarCajas(){
    document.getElementById("ced").value="";
    document.getElementById("nom").value="";
    document.getElementById("ape").value="";
    document.getElementById("dir").value="";
    document.getElementById("n1").value='';
    document.getElementById("n2").value='';
    document.getElementById("n3").value='';
    document.getElementById("ced").focus();
}

function modificar(){
    let sel=parseInt(document.getElementById("sel").value);
    switch(sel){
        case 0:objpersona.ced=document.getElementById("ced").value;break;
        case 1:objpersona.nom=document.getElementById("nom").value;break;
        case 2:objpersona.ape=document.getElementById("ape").value;break;
        case 3:objpersona.dir=document.getElementById("dir").value;break;
    }
       mostrarSalida(myArrayEst,'cuerpo');
       limpiarCajas();
}
function eliminar(pos){
    myArrayEst.splice(pos,1);
    guardarLocal();
    mostrarSalida(myArrayEst,'cuerpo');

}
function editar(pos){
    posact=pos;
    document.getElementById('agr').style.display='none';
    document.getElementById('act').style.display='block';
    document.getElementById('ced').value=myArrayEst[pos].ced;
    document.getElementById('nom').value=myArrayEst[pos].nom;
    document.getElementById('ape').value=myArrayEst[pos].ape;
    document.getElementById('dir').value=myArrayEst[pos].dir;
    document.getElementById("n1").value=myArrayEst[pos].n1;
    document.getElementById("n2").value=myArrayEst[pos].n2;
    document.getElementById("n3").value=myArrayEst[pos].n3;

}
function actualizar(){
    objpersona=new Object();
    document.getElementById('agr').style.display='block';
    document.getElementById('act').style.display='none';
    objpersona.ced=document.getElementById("ced").value;
    objpersona.nom=document.getElementById("nom").value;
    objpersona.ape=document.getElementById("ape").value;
    objpersona.dir=document.getElementById("dir").value;
    objpersona.n1=document.getElementById("n1").value;
    objpersona.n2=document.getElementById("n2").value;
    objpersona.n3=document.getElementById("n3").value;
    //let objP=JSON.parse(objpersona);
    myArrayEst[posact]=objpersona;
    guardarLocal()
    mostrarSalida(myArrayEst,'cuerpo');
       limpiarCajas();
}
function nf(n1,n2,n3){
    n1=parseFloat(n1);
    n2=parseFloat(n2);
    n3=parseFloat(n3);
    return ((n1+n2+n3)/3).toFixed(2);
}
function filtrarArray(){
    let opc=parseInt(document.getElementById('opc').value);
    switch(opc){
        case 0: myArayFiltrado=myArrayEst.filter((est)=>nf(est.n1,est.n2,est.n3)>=3.0); break;
    }
    mostrarSalida(myArayFiltrado,'cuerpo1');
}