let colorArr = []

const getColotScheme = document.getElementById('btn-get-color-scheme')

function render() {
    const html = colorArr.map(color => {      
            return `
            <div class='box' id='color-data'>
                <div class='box-hex' style="background-color:${color.hex.value}"></div>
                <div class='color-hex'><p>${color.hex.value}</p></div>
            </div>`       
    }).join('')
    
     document.getElementById('color-scheme').innerHTML = html      
}


fetch('https://www.thecolorapi.com/scheme?hex=000000&mode=monochrome&count=6')
        .then(res => res.json())
        .then(data =>{ 
            colorArr = data.colors.slice(0, 5)
            render()    
        })
        
function getColor(){
    const colorPicker = document.getElementById('color-picker').value.substring(1)
    const selectMode = document.getElementById('type').value
    const numColors = document.getElementById('num').value
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorPicker}&mode=${selectMode}&count=${numColors}`)
        .then(res => res.json())
        .then(data =>{
            colorArr = data.colors.slice(0, 5)
            render()  
            
        })
}

getColotScheme.addEventListener('click', getColor)




