function chosenColor(item) {
    function drawColor(array) {
        const randomColor = Math.floor(Math.random() * array.length);

        return array[randomColor];
    }

    const colors = ['white', 'red', 'green', 'blue', 'burlywood', 'orangered', 'brown', 'orange', 'yellow', 'cyan', 'greenyellow', 'blueviolet', 'purple', 'pink', 'gray', 'black'];
    const result = drawColor(colors);
    const itemHasColor = colors.some(color => item.contains(color));

    if (itemHasColor) colors.forEach(color => item.remove(color));

    item.add(result);
}

export default chosenColor