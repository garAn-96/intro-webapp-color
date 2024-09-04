document.addEventListener('DOMContentLoaded', function() {
    const redRange = document.getElementById('redRange');
    const greenRange = document.getElementById('greenRange');
    const blueRange = document.getElementById('blueRange');
    const redValue = document.getElementById('redValue');
    const greenValue = document.getElementById('greenValue');
    const blueValue = document.getElementById('blueValue');
    const colorBox = document.getElementById('color-box');
    const hexCode = document.getElementById('hexCode');

    function updateColor() {
        const red = parseInt(redValue.value, 10) || 0;
        const green = parseInt(greenValue.value, 10) || 0;
        const blue = parseInt(blueValue.value, 10) || 0;

        // Asegurarse de que los valores estén dentro del rango válido
        const validRed = Math.min(255, Math.max(0, red));
        const validGreen = Math.min(255, Math.max(0, green));
        const validBlue = Math.min(255, Math.max(0, blue));

        const rgbColor = `rgb(${validRed}, ${validGreen}, ${validBlue})`;
        const hexColor = `#${validRed.toString(16).padStart(2, '0')}${validGreen.toString(16).padStart(2, '0')}${validBlue.toString(16).padStart(2, '0')}`;

        colorBox.style.backgroundColor = rgbColor;
        hexCode.textContent = hexColor.toUpperCase();
    }

    function syncSliders() {
        redRange.value = redValue.value;
        greenRange.value = greenValue.value;
        blueRange.value = blueValue.value;
        updateColor();
    }

    function syncValues() {
        redValue.value = redRange.value;
        greenValue.value = greenRange.value;
        blueValue.value = blueRange.value;
        updateColor();
    }

    redRange.addEventListener('input', syncValues);
    greenRange.addEventListener('input', syncValues);
    blueRange.addEventListener('input', syncValues);

    redValue.addEventListener('input', syncSliders);
    greenValue.addEventListener('input', syncSliders);
    blueValue.addEventListener('input', syncSliders);

    // Inicializar con los valores predeterminados
    updateColor();
});
