const colors = Colors();
const renderer = Renderer();

renderer.renderColors(colors.getColors());

$("#color-input").on("keyup", function(event) {
    if (event.key === 'Enter') { 
        const color = $(this).val();
        colors.addColor(color);
        renderer.renderColors(colors.getColors());
        $(this).val("");
    }
})


