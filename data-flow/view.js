const Renderer = function() {

    function renderColors(colors) {
        const colorList = $("#colors-list");
        colorList.empty();
        for (const color of colors) {
            const newColorLi = $(`<li>${color}</li>`);
            colorList.append(newColorLi);
        }
        $("#color-num").html(colors.length);
    }

    return {
        renderColors,
    }
}