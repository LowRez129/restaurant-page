function menuPage() {
    const div = document.createElement('div');
    const content = document.querySelector('#content');

    content.lastChild.remove();
    div.innerHTML = "menupage";
    content.append(div);
}

export default menuPage;