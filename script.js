//INPUT NODE

let inputNodeCounter = 1;
const container = document.querySelector('.container');
let logicGate = document.querySelector('.logic-gate');


function addInputNode() {
    const inputNode = document.createElement('div');
    const inputNodeClass = 'inp' + inputNodeCounter;
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
