
const Colors = function() {
    const _colors = ['Blue', 'Red'];

    function addColor(color) {
        _colors.push(color);
    }

    function getColors() {
        // return _colors.slice();      // ES3 Style - shallow clone
        return [..._colors];            // ES6 Style - shallow clone
        // return JSON.parse(JSON.stringify(_colors)); // Deep clone
        // return _colors;
    }

    return {
        addColor,
        getColors
    }
}



const people1 = [
    {
        name: "Nir"
    },
    {
        name: "John"
    }
];


const person = {
    name: "John",
    age: 20
}

const p2 = {...person};

const people2 = [...people1];
people2.push({name: "Sarah"});

people2[0].name = "NEw Name"