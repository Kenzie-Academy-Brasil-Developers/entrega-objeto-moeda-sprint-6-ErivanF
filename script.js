const section = document.querySelector("section")
const coin ={
    state: undefined,
    flip: function(){
        const result =  Math.random()
        if(result<0.5){
            this.state = 0
        }else{
            this.state = 1
        }
    },
    toString: function(){
        if(this.state===0){
            return "Heads"
        }
        if(this.state===1){
            return "Tails"
        }
        return undefined
    },
    toHTML: function(){
        const image = document.createElement("img")
        if(this.state===0){
            image.src = "./img/cara.jpg"
            image.alt = "Heads"
        }
        if(this.state===1){
            image.src = "./img/coroa.jpg"
            image.alt = "Tails"
        }
        return image
    }
}
function display20Flips() {
    const results = []
    for(let i=0;i<20;i++){
        coin.flip()
        results.push(coin.toString())
    }
    const div = document.createElement("div")
    div.innerText = results
    section.appendChild(div)
    return results
}
function display20Images() {
    const results = []
    const div = document.createElement("div")
    div.classList.add("moedas")
    for(let i=0;i<20;i++) {
        coin.flip()
        results.push(coin.toHTML())
        div.appendChild(coin.toHTML())
    }
    section.appendChild(div)
    return results
}