const mibot = document.getElementById('mibtn')
const mibot1 = document.getElementById('mibtn1')
const mibot2 = document.getElementById('mibtn2')
const mitemplate = document.getElementById('template-carrito').content
const item2 = document.getElementById('item2')
const Mifragment = document.createDocumentFragment()
const container = document.querySelector('.container')
let vinos = {}


document.addEventListener('DOMContentLoaded', e => { jsones() });






//Atraparjson en una funcion
const jsones = async () => {
  
  const leer = await fetch('ListaV.json');
  const atrapar = await leer.json()

  leerVino(atrapar)
  
}


const leerVino = atrapar => {
  
  
  atrapar.forEach(element => {
    mitemplate.querySelector('th').textContent = element.id
    mitemplate.querySelectorAll('td')[0].textContent = element.name
    mitemplate.querySelectorAll('td')[1].textContent = element.cosecha
    mitemplate.querySelector('span').textContent = element.precio

    const clone = mitemplate.cloneNode(true)
    Mifragment.appendChild(clone)
   
                //  console.log(item2.appendChild(Mifragment.firstChild))
  });
  
  
  mibot.addEventListener('click', (e)=>{
      if(e.target.classList.contains("btn-primary"))   {
        item2.appendChild(Mifragment.querySelectorAll('tr')[0])
        
      }
      
  })


  mibot1.addEventListener('click' , (e)=>{
   if(e.target.classList.contains("btn-primary")) {
    item2.appendChild(Mifragment.querySelectorAll('tr')[0,1])
    
    
   }
 


})


mibot2.addEventListener( 'click' , (e)=>{
  if(e.target.classList.contains("btn-primary")) {
    item2.appendChild(Mifragment.lastElementChild)
  
  }


})
  
}



























