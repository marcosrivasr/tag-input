class InputTag extends HTMLElement{

    constructor() {
        super();
        this.template = document.createElement('template');
        this.template.innerHTML = `
        <style>
        :host{
            display: inline-block;
        }
        
        :host:focus, .focus{
            outline: -webkit-focus-ring-color auto 1px;
        }
        .tag-input-container{
            -webkit-writing-mode: horizontal-tb !important;
            text-rendering: auto;
            color: -internal-light-dark-color(black, white);
            letter-spacing: normal;
            word-spacing: normal;
            text-transform: none;
            text-indent: 0px;
            text-shadow: none;
            display: inline-block;
            text-align: start;
            -webkit-appearance: textfield;
            background-color: -internal-light-dark-color(rgb(255, 255, 255), rgb(59, 59, 59));
            -webkit-rtl-ordering: logical;
            cursor: text;
            margin: 0em;
            font: 400 13.3333px Arial;
            padding: 1px 2px;
            border-width: 1px;
            
            border-image: initial;
            width: 250px;
        }
        .tag-input-container .data-tag-container{
            display: inline-block;
        }
        .tag-input-container .data-tag{
            display: inline-block;
            border: solid 1px #ccc;
            padding: 1px 5px;
            margin: 1px;
            cursor: pointer;
        }
        .tag-input-container .data-tag:hover{
            background-color: #eee;
        }
        .tag-input-container .data-tag a{
            display:inline-block;
            font-weight: bolder;
            padding: 0 0 0 5px;
            cursor: pointer; 
        }

        .data-tag a svg{
            display: inline-block;
            vertical-align: middle;
            margin-top: -1px;
        }

        
        .tag-input-container input{
            background: transparent;
            font-size: 1em;
            border: 0;
            outline: none;
            min-width: 8px;
            width: 8px;
            margin: 1px;
            display: inline-block;
        }
        </style>
      `;
      const el = this;
        this.data = [];
        this.focus = ''; 
        this.selected = undefined;     

        const shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.appendChild(this.template.content.cloneNode(true));

        this.mainContainer = document.createElement('div');
        this.tags = document.createElement('div');
        this.input = document.createElement('input');

        this.mainContainer.setAttribute('class', 'tag-input-container');
        this.tags.setAttribute('class', 'data-tag-container');
        this.input.setAttribute('class', 'tag-input');

        this.mainContainer.appendChild(this.tags);
        this.mainContainer.appendChild(this.input);

        shadowRoot.appendChild(this.mainContainer);

        this.closest('form').addEventListener('submit', e =>{
            e.preventDefault();
            const form = e.target;
            const hidden = document.createElement('input');
            hidden.setAttribute('type', 'hidden');
            hidden.setAttribute('name', el.getAttribute('name'));
            hidden.value = el.value;
            form.appendChild(hidden);
            form.submit();
        });

        this.mainContainer.addEventListener('click', e =>{
            this.input.focus();
        });

        this.tags.addEventListener('click', e =>{
            this.focus = 'tags';
        });

        this.input.addEventListener('focus', e =>{
            el.classList.add('focus');
        });
        this.input.addEventListener('focusout', e =>{
            el.classList.remove('focus');
        });

        this.input.addEventListener('keyup', e =>{
//            console.log(e.target.selectionStart);
            const value = e.target.value.trim();
            const len = ((value.length + 3) * 12) + 'px';
            e.target.style.width = len;

            if(e.key == 'Enter' && value.length > 0 && !this.exists(value)){
                this.add(value, e);
            } 
        });


        this.input.addEventListener('keydown', e =>{
            const value = e.target.value.trim();

            if(e.key === 'Tab' && value.length > 0){
                e.preventDefault();
                this.add(value, e);
            }

            if(e.key === 'Backspace' && value.length === 0 && this.data.length > 0){
                this.remove(-1);
                e.target.focus();
            }
        });
    }
    
    add(value, e){
        this.data.push(value);
        this.showData();
        e.target.value = '';
        e.target.focus();
    }

    createUI(){
        
    }

    set value(data){
        this.setAttribute('value', data);
    }

    get value(){
        return this.getAttribute('value');
    }

    remove(index){
        this.data.splice(index,1);
        this.showData();
    }

    exists(value){
        if(this.data.length === 0) return false;
        const res = this.data.filter(item => {
            return item == value
        });

        return res.length > 0;
    }

    showData(){
        const values = this.data.join(',');
        this.value = values;

        this.tags.innerHTML = '';

        this.mainContainer.innerHTML='';

         this.data.forEach((item, index) =>{
            const newTag = this.createTag(index, item);
            this.mainContainer.append(newTag);
        });

        this.mainContainer.append(this.input);


        document.querySelectorAll('.data-tag a').forEach(item =>{
            item.addEventListener('click', this.closeButtonEvent);
        });
    }

    createTag(index, text){
        const dataTag = document.createElement('div');
        const dataTagText = document.createTextNode(text);
        const closeButton = document.createElement('a');

        dataTag.setAttribute('data-id', index);
        dataTag.setAttribute('class', 'data-tag');
        closeButton.setAttribute('data-id', index);


        closeButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 18 18" data-id=${index}><path data-id=${index} d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"/></svg>`;
        closeButton.addEventListener('click', e =>{
            const id = e.target.getAttribute('data-id');
            this.data.splice(id, 1);
            this.showData();
            this.input.focus();
        });

        dataTag.appendChild(dataTagText);
        dataTag.appendChild(closeButton);
        
        return dataTag;
    }

    connectedCallback(){
        if(this.value === null) return false;
        if(this.value != ''){
            const values = this.value.split(',');
            this.data = [...values];
            this.showData();
        }
    }   
}


window.customElements.define('input-tag', InputTag);
