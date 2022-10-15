
const add = document.querySelector(".add");
const right = document.querySelector(".right_half");
const tip = document.querySelector(".tip");
let wrapper = document.querySelector(".wrapper");
let wrapperWidth = wrapper.offsetWidth;


let checker = 0;

function appear(){
    if(wrapperWidth > 700){
        if(checker < 5){
            checker += 1;
            const api_BB_url = 'https://breakingbadapi.com/api/quotes';
    
            const box = document.createElement("div");
            const authorWeb = document.createElement("div");
            const quoteWeb = document.createElement("div");
            const deleteBtn = document.createElement("button");
    
            box.classList.add("box");
            authorWeb.classList.add("authorWeb");
            quoteWeb.classList.add("quoteWeb");
            deleteBtn.classList.add("deleteBtn");
    
            deleteBtn.textContent = "Delete";
            box.appendChild(quoteWeb);
            box.appendChild(authorWeb);
            box.appendChild(deleteBtn);
            right.appendChild(box);
                    
            deleteBtn.addEventListener("click", ()=>{
                right.removeChild(box);
                checker -= 1;
                if(checker == 0){
                    tip.style.display = "block";
                }
            });
    
            async function getBBquotes(){
                const response = await fetch(api_BB_url);
                const data = await response.json();
                let x = Math.random() * (69 - 0) + 0;
                const {author, quote} = data[x.toFixed(0)];
                authorWeb.textContent = author;
                quoteWeb.textContent = quote;
            }
                    
            getBBquotes();
    
            if(checker > 0){
                tip.style.display = "none";
            }
        }
        else{
           Swal.fire({
                title: 'Error',
                icon: 'error',
                html: 'You have too many quotes <br> To add another, please delete one of your quote'
            });
        }    
    }
    else if(wrapperWidth <= 700){
        if(checker < 3){
            checker += 1;
            const api_BB_url = 'https://breakingbadapi.com/api/quotes';
    
            const box = document.createElement("div");
            const authorWeb = document.createElement("div");
            const quoteWeb = document.createElement("div");
            const deleteBtn = document.createElement("button");
    
            box.classList.add("box");
            authorWeb.classList.add("authorWeb");
            quoteWeb.classList.add("quoteWeb");
            deleteBtn.classList.add("deleteBtn");
    
            deleteBtn.textContent = "Delete";
            box.appendChild(quoteWeb);
            box.appendChild(authorWeb);
            box.appendChild(deleteBtn);
            right.appendChild(box);
                    
            deleteBtn.addEventListener("click", ()=>{
                right.removeChild(box);
                checker -= 1;
                if(checker == 0){
                    tip.style.display = "block";
                }
            });
    
            async function getBBquotes(){
                const response = await fetch(api_BB_url);
                const data = await response.json();
                let x = Math.random() * (69 - 0) + 0;
                const {author, quote} = data[x.toFixed(0)];
                authorWeb.textContent = author;
                quoteWeb.textContent = quote;
            }
                    
            getBBquotes();
    
            if(checker > 0){
                tip.style.display = "none";
            }
        }
        else{
           Swal.fire({
                title: 'Error',
                icon: 'error',
                html: 'You have too many quotes <br> To add another, please delete one of your quote'
            });
        }    
    
    }
    

}



add.addEventListener("click", appear);

