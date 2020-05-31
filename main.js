
class InputTag extends HTMLElement{
    constructor() {
        super();
        var shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.innerHTML = `<strong>Shadow dom super powers for the win!</strong>`;
    }

    set value(data){
        this.setAttribute('value', data);
    }

    get value(){
        return this.getAttribute('value');
    }

    
}
window.customElements.define('input-tag', InputTag);


//console.log(document.querySelector('input-tag').value);