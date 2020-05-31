
class InputTag extends HTMLElement{
    constructor() {
        super();
        this.template = document.createElement('template');
        this.template.innerHTML = `
        <style>
        .tag-input-container{
            box-sizing: border-box;
            font-size: 14px;
            display: inline-block;
            border: solid 1px #000;
            padding: 5px 0;
        }
        .tag-input-container .data-tag-container{
            display: inline;
        }
        .tag-input-container .data-tag-container .data-tag{
            display: inline-block;
            border: solid 1px #ccc;
            padding: 1px 5px;
            margin-right: 5px;
        }
        .tag-input-container .data-tag-container .data-tag a{
            display:inline-block;
            font-weight: bolder;
            padding: 0 5px;
            cursor: pointer;
            
        }
        
        .tag-input-container input{
            font-size: 1em;
            border: 0;
            outline: none;
            padding: 5px;
        }
        </style>
      `;
        this.data = [];
        const shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.appendChild(this.template.content.cloneNode(true));

        this.tagInputContainer = document.createElement('div');
        this.dataTagContainer = document.createElement('div');
        this.tagInput = document.createElement('input');

        this.tagInputContainer.setAttribute('class', 'tag-input-container');
        this.dataTagContainer.setAttribute('class', 'data-tag-container');
        this.tagInput.setAttribute('class', 'tag-input');

        this.tagInputContainer.appendChild(this.dataTagContainer);
        this.tagInputContainer.appendChild(this.tagInput);

        shadowRoot.appendChild(this.tagInputContainer);

        

        this.tagInput.addEventListener('keyup', e=>{
            const value = this.tagInput.value;
            if(e.key == 'Enter' && !this.exists(value)){
                this.data.push(value);
                this.tagInput.value = '';
                this.showData();
            }
        });

        this.tagInput.addEventListener('keydown', e =>{
            const value = this.tagInput.value;
            if(e.key == 'Backspace' && value == '' && this.data.length > 0){
                this.data.splice(-1,1);
                this.showData();
            }
        });
    }

    set value(data){
        this.setAttribute('value', data);
        this.data = data.split(',');
        this.showData();
    }

    get value(){
        return this.getAttribute('value');
    }

    exists(value){
        if(this.data.length === 0) return false;
        const res = this.data.filter(item => {
            return item == value
        });

        return res.length > 0;
    }

    showData(){
        this.dataTagContainer.innerHTML = '';

        this.data.forEach((item, index) =>{
            const dataTag = document.createElement('div');
            dataTag.setAttribute('data-id', index);
            dataTag.setAttribute('class', 'data-tag');

            const dataTagText = document.createTextNode(item);
            const closeButtonText = document.createTextNode('X');
            
            const closeButton = document.createElement('a');
            closeButton.addEventListener('click', e =>{
                const id = e.target.parentNode.getAttribute('data-id');
                this.data.splice(id, 1);
                this.showData();
                this.tagInput.focus();
            });
            closeButton.appendChild(closeButtonText);

            this.dataTagContainer.appendChild(dataTag);
            dataTag.appendChild(dataTagText);
            dataTag.appendChild(closeButton);
        });

        document.querySelectorAll('.data-tag a').forEach(item =>{
            item.addEventListener('click', this.closeButtonEvent);
        });
    }
    
}
window.customElements.define('input-tag', InputTag);
