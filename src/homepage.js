function homePage() {
    const div = document.createElement('div');
    const content = document.querySelector('#content');

    content.lastChild.remove();
    div.innerHTML = "homepage";
    content.append(div);
}

export default homePage;