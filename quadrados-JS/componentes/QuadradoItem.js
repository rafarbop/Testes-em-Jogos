function QuadradoItem(color='',circulo='None',dataPLQ='00',x='',y='',id=''){
    const QuadradoItem = document.createElement('div');
    QuadradoItem.setAttribute('class',dataPLQ)
    QuadradoItem.setAttribute('data-x',x)
    QuadradoItem.setAttribute('data-y',y)
    QuadradoItem.setAttribute('id',id)
    const styles = QuadradoItem.style;
    styles.background = color;
    styles.borderRadius = circulo;
    return QuadradoItem
}

export { QuadradoItem }