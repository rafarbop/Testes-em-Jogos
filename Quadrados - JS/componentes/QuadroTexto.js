function QuadroTexto(){
    const newNode = document.createElement('div')
    const styles = newNode.style;
    styles.width = '40vh';
    styles.height = '80vh';
    styles.backgroundColor = '#ddd';
    styles.border = '1vh solid #aaa';
    return newNode
}

export { QuadroTexto }