function fss(elems, props = {}) {
    
    function camelize(str){
        let arr = str.split('-');
        let capital = arr.map((item, index) => index ? item.charAt(0).toUpperCase() + item.slice(1).toLowerCase() : item);
        let capitalString = capital.join("");
        return capitalString;
    }

    document.querySelectorAll(elems).forEach((el) => {
        Object.keys(props).forEach((prop) => el.style[camelize(prop)] = props[prop]);
    });
}

