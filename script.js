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
    const andNodeClass = 'and-node';
    andNode.classList.add(andNodeClass);
    andNode.innerHTML = `
    <h1>AND</h1>
    <div class="plug3"></div>
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



// NAND Gate



// NOT Gate



// NOR Gate



// XOR Gate



// XNOR Gate
