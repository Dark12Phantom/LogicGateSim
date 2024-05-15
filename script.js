//INPUT NODE

let inputNodeCounter = 0;
const container = document.querySelector('.container');
let logicGate = document.querySelector('.logic-gate');


function addInputNode() {
    const existingInputNodes = document.querySelectorAll('.input-node');
    if (existingInputNodes.length >= 4) {
        return;
    }
    const inputNode = document.createElement('div');
    const inputNodeClass = 'inp' + (inputNodeCounter + 1);
    inputNode.classList.add('input-node', inputNodeClass);
    inputNode.draggable = true;
    inputNode.innerHTML = `
        <h1>INPUT</h1>
        <div class="plug"></div>
        <button class="remove-btn" onclick="removeInputNode('${inputNodeClass}')">×</button>
    `;

    const containerRect = container.getBoundingClientRect();
    const randomTop = Math.random() * (containerRect.height - inputNode.offsetHeight);
    inputNode.style.left = '40px';
    inputNode.style.top = randomTop + 'px';

    container.appendChild(inputNode);

    inputNode.addEventListener('click', function() {
        if (this.classList.contains('active')) {
            this.classList.remove('active');
        } else {
            this.classList.add('active');
        }
    });

    let offsetX, offsetY;
    let isDragging = false;

    function dragStart(event) {
        isDragging = true;
        offsetX = event.clientX - inputNode.getBoundingClientRect().left;
        offsetY = event.clientY - inputNode.getBoundingClientRect().top;
    }

    function dragEnd() {
        isDragging = false;
    }

    function dragOver(event) {
        event.preventDefault();
        if (isDragging) {
            inputNode.style.left = (event.clientX - offsetX) + 'px';
            inputNode.style.top = (event.clientY - offsetY) + 'px';
        }
    }

    inputNode.addEventListener('dragstart', dragStart);
    inputNode.addEventListener('dragend', dragEnd);
    document.addEventListener('dragover', dragOver);

    inputNodeCounter++;
}

function removeInputNode(className) {
    const nodeToRemove = document.querySelector('.' + className);
    if (nodeToRemove) {
        nodeToRemove.remove();
    }
}

document.getElementById('addInputBtn').addEventListener('click', addInputNode);

//OUTPUT NODE

let outputNodeCounter = 1;

function addOutputNode() {
    const existingOutputNodes = document.querySelectorAll('.output-node');
    if (existingOutputNodes.length >= 2) {
        return;
    }
    const outputNode = document.createElement('div');
    const outputNodeClass = 'out' + outputNodeCounter;
    outputNode.classList.add('output-node', outputNodeClass);
    outputNode.draggable = true;
    outputNode.innerHTML = `
        <h1>OUTPUT</h1>
        <div class="plug2"></div>
        <button class="remove-btn" onclick="removeOutputNode('${outputNodeClass}')">×</button>
    `;

    const containerRect = container.getBoundingClientRect();
    const randomTop = Math.random() * (containerRect.height - outputNode.offsetHeight);
    outputNode.style.right = '130px';
    outputNode.style.top = randomTop + 'px';

    container.appendChild(outputNode);

    let offsetX, offsetY;
    let isDragging = false;

    function dragStart1(event) {
        isDragging = true;
        offsetX = event.clientX - outputNode.getBoundingClientRect().left;
        offsetY = event.clientY - outputNode.getBoundingClientRect().top;
    }

    function dragEnd1() {
        isDragging = false;
    }

    function dragOver1(event) {
        event.preventDefault();
        if (isDragging) {
            outputNode.style.left = (event.clientX - offsetX) + 'px';
            outputNode.style.top = (event.clientY - offsetY) + 'px';
        }
    }

    outputNode.addEventListener('dragstart', dragStart1);
    outputNode.addEventListener('dragend', dragEnd1);
    document.addEventListener('dragover', dragOver1);


    outputNodeCounter++;
}

function removeOutputNode(className) {
    const nodeToRemove = document.querySelector('.' + className);
    if (nodeToRemove) {
        nodeToRemove.remove();
    }
}

document.getElementById('addOutputBtn').addEventListener('click', addOutputNode);

// LOGIC GATES
// AND Gate

function addAndNode() {
    if (document.querySelector('.and-node')) {
        return;
    }

    const andNode = document.createElement('div');
    const andNodeClass = 'and';
    andNode.classList.add('and-node', andNodeClass);
    andNode.innerHTML = `
    <h1>AND</h1>
    <div class="plug3"></div>
    <div class="plug4"></div>
    <div class="plug5"></div>
    <button class="remove-btn" onClick="removeAndNode('${andNodeClass}')">×</button>`;

    const containerRect = container.getBoundingClientRect();
    const randomTop = Math.random() * (containerRect.height - andNode.offsetHeight);
    andNode.style.left = '800px';
    andNode.style.top = '350px';

    container.appendChild(andNode);

    let offsetX, offsetY;
    let isDragging = false;

    function dragStart(event) {
        isDragging = true;
        offsetX = event.clientX - andNode.getBoundingClientRect().left;
        offsetY = event.clientY - andNode.getBoundingClientRect().top;
    }

    function dragEnd() {
        isDragging = false;
    }

    function dragOver(event) {
        event.preventDefault();
        if (isDragging) {
            andNode.style.left = (event.clientX - offsetX) + 'px';
            andNode.style.top = (event.clientY - offsetY) + 'px';
        }
    }
    andNode.addEventListener('dragstart', dragStart);
    andNode.addEventListener('dragend', dragEnd);
    document.addEventListener('dragover', dragOver);
}

function removeAndNode(className) {
    const nodeToRemove = document.querySelector('.' + className);
    if (nodeToRemove) {
        nodeToRemove.remove();
    }
}

document.getElementById('addAndNode').addEventListener('click', addAndNode);

// OR Gate

function addOrNode() { //Change
    if (document.querySelector('.or-node')) { //Change
        return;
    }

    const orNode = document.createElement('div'); //Change
    const orNodeClass = 'or-node'; //Change
    orNode.classList.add(orNodeClass); //Change
    orNode.innerHTML = `
    <h1>OR</h1>
    <div class="plug3"></div>
    <div class="plug4"></div>
    <div class="plug5"></div>
    <button class="remove-btn" onClick="removeOrNode('${orNodeClass}')">×</button>`; //Change

    const containerRect = container.getBoundingClientRect();
    const randomTop = Math.random() * (containerRect.height - orNode.offsetHeight); //Change
    orNode.style.left = '800px'; //Change
    orNode.style.top = '350px'; //Change

    container.appendChild(orNode); //Change

    let offsetX, offsetY;
    let isDragging = false;

    function dragStart(event) {
        isDragging = true;
        offsetX = event.clientX - orNode.getBoundingClientRect().left;
        offsetY = event.clientY - orNode.getBoundingClientRect().top;
    }

    function dragEnd() {
        isDragging = false;
    }

    function dragOver(event) {
        event.preventDefault();
        if (isDragging) {
            orNode.style.left = (event.clientX - offsetX) + 'px'; //Change
            orNode.style.top = (event.clientY - offsetY) + 'px'; //Change
        }
    }
    orNode.addEventListener('dragstart', dragStart); //Change
    orNode.addEventListener('dragend', dragEnd); //Change
    document.addEventListener('dragover', dragOver);
}

function removeOrNode(className) { //Change
    const nodeToRemove = document.querySelector('.' + className);
    if (nodeToRemove) {
        nodeToRemove.remove();
    }
}

document.getElementById('addOrNode').addEventListener('click', addOrNode); //Change


// NAND Gate

function addNandNode() { //Change
    if (document.querySelector('.nand-node')) { //Change
        return;
    }

    const nandNode = document.createElement('div'); //Change
    const nandNodeClass = 'nand-node'; //Change
    nandNode.classList.add(nandNodeClass); //Change
    nandNode.innerHTML = `
    <h1>NAND</h1>
    <div class="plug3"></div>
    <div class="plug4"></div>
    <div class="plug5"></div>
    <button class="remove-btn" onClick="removeNandNode('${nandNodeClass}')">×</button>`; //Change

    const containerRect = container.getBoundingClientRect();
    const randomTop = Math.random() * (containerRect.height - nandNode.offsetHeight); //Change
    nandNode.style.left = '800px'; //Change
    nandNode.style.top = '350px'; //Change

    container.appendChild(nandNode); //Change

    let offsetX, offsetY;
    let isDragging = false;

    function dragStart(event) {
        isDragging = true;
        offsetX = event.clientX - nandNode.getBoundingClientRect().left;
        offsetY = event.clientY - nandNode.getBoundingClientRect().top;
    }

    function dragEnd() {
        isDragging = false;
    }

    function dragOver(event) {
        event.preventDefault();
        if (isDragging) {
            nandNode.style.left = (event.clientX - offsetX) + 'px'; //Change
            nandNode.style.top = (event.clientY - offsetY) + 'px'; //Change
        }
    }
    nandNode.addEventListener('dragstart', dragStart); //Change
    nandNode.addEventListener('dragend', dragEnd); //Change
    document.addEventListener('dragover', dragOver);
}

function removeNandNode(className) { //Change
    const nodeToRemove = document.querySelector('.' + className);
    if (nodeToRemove) {
        nodeToRemove.remove();
    }
}

document.getElementById('addNandNode').addEventListener('click', addNandNode); //Change


// NOT Gate

function addNotNode() { //Change
    if (document.querySelector('.not-node')) { //Change
        return;
    }

    const notNode = document.createElement('div'); //Change
    const notNodeClass = 'not-node'; //Change
    notNode.classList.add(notNodeClass); //Change
    notNode.innerHTML = `
    <h1>NOT</h1>
    <div class="plug"></div>
    <div class="plug2"></div>
    <button class="remove-btn" onClick="removeNotNode('${notNodeClass}')">×</button>`; //Change

    const containerRect = container.getBoundingClientRect();
    const randomTop = Math.random() * (containerRect.height - notNode.offsetHeight); //Change
    notNode.style.left = '800px'; //Change
    notNode.style.top = '350px'; //Change

    container.appendChild(notNode); //Change

    let offsetX, offsetY;
    let isDragging = false;

    function dragStart(event) {
        isDragging = true;
        offsetX = event.clientX - notNode.getBoundingClientRect().left;
        offsetY = event.clientY - notNode.getBoundingClientRect().top;
    }

    function dragEnd() {
        isDragging = false;
    }

    function dragOver(event) {
        event.preventDefault();
        if (isDragging) {
            notNode.style.left = (event.clientX - offsetX) + 'px'; //Change
            notNode.style.top = (event.clientY - offsetY) + 'px'; //Change
        }
    }
    notNode.addEventListener('dragstart', dragStart); //Change
    notNode.addEventListener('dragend', dragEnd); //Change
    document.addEventListener('dragover', dragOver);
}

function removeNotNode(className) { //Change
    const nodeToRemove = document.querySelector('.' + className);
    if (nodeToRemove) {
        nodeToRemove.remove();
    }
}

document.getElementById('addNotNode').addEventListener('click', addNotNode); //Change

// NOR Gate

function addNorNode() { //Change
    if (document.querySelector('.nor-node')) { //Change
        return;
    }

    const norNode = document.createElement('div'); //Change
    const norNodeClass = 'nor-node'; //Change
    norNode.classList.add(norNodeClass); //Change
    norNode.innerHTML = `
    <h1>NOR</h1>
    <div class="plug3"></div>
    <div class="plug4"></div>
    <div class="plug5"></div>
    <button class="remove-btn" onClick="removeNorNode('${norNodeClass}')">×</button>`; //Change

    const containerRect = container.getBoundingClientRect();
    const randomTop = Math.random() * (containerRect.height - norNode.offsetHeight); //Change
    norNode.style.left = '800px'; //Change
    norNode.style.top = '350px'; //Change

    container.appendChild(norNode); //Change

    let offsetX, offsetY;
    let isDragging = false;

    function dragStart(event) {
        isDragging = true;
        offsetX = event.clientX - norNode.getBoundingClientRect().left;
        offsetY = event.clientY - norNode.getBoundingClientRect().top;
    }

    function dragEnd() {
        isDragging = false;
    }

    function dragOver(event) {
        event.preventDefault();
        if (isDragging) {
            norNode.style.left = (event.clientX - offsetX) + 'px'; //Change
            norNode.style.top = (event.clientY - offsetY) + 'px'; //Change
        }
    }
    norNode.addEventListener('dragstart', dragStart); //Change
    norNode.addEventListener('dragend', dragEnd); //Change
    document.addEventListener('dragover', dragOver);
}

function removeNorNode(className) { //Change
    const nodeToRemove = document.querySelector('.' + className);
    if (nodeToRemove) {
        nodeToRemove.remove();
    }
}

document.getElementById('addNorNode').addEventListener('click', addNorNode); //Change

// XOR Gate



// XNOR Gate
