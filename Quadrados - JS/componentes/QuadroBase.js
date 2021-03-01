function QuadroBase(){
    const newNode = document.createElement('div')
    const styles = newNode.style;
    styles.width = '80vh';
    styles.height = '80vh';
    styles.backgroundColor = '#ddd';
    styles.border = '1vh solid #aaa';
    styles.display = 'grid';
    styles.gridTemplateColumns = '0.5fr repeat(3,4fr 0.5fr)';
    styles.gridTemplateRows = '0.5fr repeat(3,4fr 0.5fr)';
    return newNode
}

export { QuadroBase }