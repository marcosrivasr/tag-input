import TagModel from './TagModel';

class InputTag extends HTMLElement{

    constructor() {
        super();
        this.tagModel = new TagModel();

        this.template = document.createElement('template');
        this.template.innerHTML = `
        <style>
        :host{
            display: inline-block;
        }
        
        :host:focus, .focus{
            outline: -webkit-focus-ring-color auto 1px !important;
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

        const el = this; // it has the element reference
        this.mainElement = el;
        this.focus = ''; 
        this.selected = undefined;    
        


        const shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.appendChild(this.template.content.cloneNode(true));

        this.mainContainer  = document.createElement('div');    // main container for the HTML element
        this.tags           = document.createElement('div');    // container for the tags UI
        this.input          = document.createElement('input');  // input text to have user input

        // set CSS classes to the elements
        this.mainContainer.setAttribute('class', 'tag-input-container');
        this.tags.setAttribute('class', 'data-tag-container');
        this.input.setAttribute('class', 'tag-input');

        // attach input and tags container to main container
        this.mainContainer.appendChild(this.tags);
        this.mainContainer.appendChild(this.input);

        // attach the main container to the shadow root element
        shadowRoot.appendChild(this.mainContainer);

        // event for when the user submits the form
        this.closest('form').addEventListener('submit', e =>{
            this.handleSubmit(e, this.mainElement);
        });
        
        this.mainContainer.addEventListener('click', e =>{
            this.input.focus();
           
        });

        this.tags.addEventListener('click', e =>{
            this.focus = 'tags';
        });

        this.input.addEventListener('focus', e =>{
            el.classList.add('focus');
            this.mainContainer.classList.add('focus');
        });
        this.input.addEventListener('focusout', e =>{
            el.classList.remove('focus');
            this.mainContainer.classList.remove('focus');
        });

        this.input.addEventListener('keyup', e =>{
            const value = e.target.value.trim();
            const len = ((value.length + 3) * 12) + 'px';
            e.target.style.width = len;

            if(e.key == 'Enter' && value.length > 0 && !this.tagModel.exists(value)){
                this.tagModel.add(value, () =>{
                    this.showData();
                    e.target.value = '';
                    e.target.focus();
                });
            } 
        });


        this.input.addEventListener('keydown', e =>{
            const value = e.target.value.trim();

            if((e.key === 'Tab' || e.key === ',') && value.length > 0){
                e.preventDefault();
                this.tagModel.add(value, () =>{
                    this.showData();
                    e.target.value = '';
                    e.target.focus();
                });
            }

            if(e.key === 'Backspace' && value.length === 0 && this.tagModel.getAll().length > 0){
                this.tagModel.remove(-1, () =>{
                    this.showData();
                    e.target.focus();
                });
            }
        });
    }

    handleSubmit(e, element){
        e.preventDefault();
        const form = e.target;
        const hidden = document.createElement('input');
        hidden.setAttribute('type', 'hidden');
        hidden.setAttribute('name', element.getAttribute('name'));
        hidden.value = element.value;
        form.appendChild(hidden);
        form.submit();
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

    showData(){
        const values = this.tagModel.join(',');
        this.value = values;

        this.tags.innerHTML = '';

        this.mainContainer.innerHTML='';

        this.tagModel.getAll().forEach((item, index) =>{
            const newTag = this.createTag(index, item);
            this.mainContainer.append(newTag);
        });

        this.mainContainer.append(this.input);


        document.querySelectorAll('.data-tag a').forEach(item =>{
            item.addEventListener('click', this.closeButtonEvent);
        });
    }

    createTag(index, text){
        const dataTag       = createElement('div', {'data-id': index, 'class': 'data-tag'});
        const dataTagText   = document.createTextNode(text);
        const closeButton   = createElement('a', {'data-id': index});
        
        closeButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 18 18" data-id=${index}><path data-id=${index} d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"/></svg>`;
        closeButton.addEventListener('click', e =>{
            const id = e.target.getAttribute('data-id');
            this.tagModel.remove(id, () =>{
                this.showData();
                this.input.focus();
            });
            
        });
        appendElements(dataTag, [dataTagText, closeButton]);
        
        return dataTag;
    }

    connectedCallback(){
        if(this.value === null) return false;
        if(this.value != ''){
            const values = this.value.split(',');
            this.tagModel.createFrom(values);
            this.showData();
        }
    }   
}

function createElement(tag, properties){
    const element = document.createElement(tag);

    const props = Object.keys(properties);


    props.forEach(prop =>{
        element.setAttribute(prop, properties[prop]);
    });

    return element;
}

function appendElements(parent, children){
    children.forEach(child =>{
        parent.appendChild(child);
    });
}


window.customElements.define('input-tag', InputTag);
