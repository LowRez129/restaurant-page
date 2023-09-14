function homePage() {
    const div = document.createElement('div');
    const content = document.querySelector('#content');

    content.lastChild.remove();
    div.innerHTML = 'homepage';
    div.style.backgroundColor = 'white';
    div.style.textAlign = 'center';
    content.append(div);
}

export default homePage;