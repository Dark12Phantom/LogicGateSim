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
        <button class="remove-btn" onclick="removeGateNode('${inputNodeClass}')">×</button>
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
        <button class="remove-btn" onclick="removeGateNode('${outputNodeClass}')">×</button>
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
    <button class="remove-btn" onClick="removeGateNode('${andNodeClass}')">×</button>`;

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


// OR Gate

function addOrNode() { 
    if (document.querySelector('.or-node')) { 
        return;
    }

    const orNode = document.createElement('div'); 
    const orNodeClass = 'or-node'; 
    orNode.classList.add(orNodeClass); 
    orNode.innerHTML = `
    <h1>OR</h1>
    <div class="plug3"></div>
    <div class="plug4"></div>
    <div class="plug5"></div>
    <button class="remove-btn" onClick="removeGateNode('${orNodeClass}')">×</button>`; 

    const containerRect = container.getBoundingClientRect();
    const randomTop = Math.random() * (containerRect.height - orNode.offsetHeight); 
    orNode.style.left = '800px'; 
    orNode.style.top = '350px'; 

    container.appendChild(orNode); 

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
            orNode.style.left = (event.clientX - offsetX) + 'px'; 
            orNode.style.top = (event.clientY - offsetY) + 'px'; 
        }
    }
    orNode.addEventListener('dragstart', dragStart); 
    orNode.addEventListener('dragend', dragEnd); 
    document.addEventListener('dragover', dragOver);
}



// NAND Gate

function addNandNode() { 
    if (document.querySelector('.nand-node')) { 
        return;
    }

    const nandNode = document.createElement('div'); 
    const nandNodeClass = 'nand-node'; 
    nandNode.classList.add(nandNodeClass); 
    nandNode.innerHTML = `
    <h1>NAND</h1>
    <div class="plug3"></div>
    <div class="plug4"></div>
    <div class="plug5"></div>
    <button class="remove-btn" onClick="removeGateNode('${nandNodeClass}')">×</button>`; 

    const containerRect = container.getBoundingClientRect();
    const randomTop = Math.random() * (containerRect.height - nandNode.offsetHeight); 
    nandNode.style.left = '800px'; 
    nandNode.style.top = '350px'; 

    container.appendChild(nandNode); 

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
            nandNode.style.left = (event.clientX - offsetX) + 'px'; 
            nandNode.style.top = (event.clientY - offsetY) + 'px'; 
        }
    }
    nandNode.addEventListener('dragstart', dragStart); 
    nandNode.addEventListener('dragend', dragEnd); 
    document.addEventListener('dragover', dragOver);
}



// NOT Gate

function addNotNode() { 
    if (document.querySelector('.not-node')) { 
        return;
    }

    const notNode = document.createElement('div'); 
    const notNodeClass = 'not-node'; 
    notNode.classList.add(notNodeClass); 
    notNode.innerHTML = `
    <h1>NOT</h1>
    <div class="plug"></div>
    <div class="plug2"></div>
    <button class="remove-btn" onClick="removeGateNode('${notNodeClass}')">×</button>`; 

    const containerRect = container.getBoundingClientRect();
    const randomTop = Math.random() * (containerRect.height - notNode.offsetHeight); 
    notNode.style.left = '800px'; 
    notNode.style.top = '350px'; 

    container.appendChild(notNode); 

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
            notNode.style.left = (event.clientX - offsetX) + 'px'; 
            notNode.style.top = (event.clientY - offsetY) + 'px'; 
        }
    }
    notNode.addEventListener('dragstart', dragStart); 
    notNode.addEventListener('dragend', dragEnd); 
    document.addEventListener('dragover', dragOver);
}
 

// NOR Gate

function addNorNode() { 
    if (document.querySelector('.nor-node')) { 
        return;
    }

    const norNode = document.createElement('div'); 
    const norNodeClass = 'nor-node'; 
    norNode.classList.add(norNodeClass); 
    norNode.innerHTML = `
    <h1>NOR</h1>
    <div class="plug3"></div>
    <div class="plug4"></div>
    <div class="plug5"></div>
    <button class="remove-btn" onClick="removeGateNode('${norNodeClass}')">×</button>`; 

    const containerRect = container.getBoundingClientRect();
    const randomTop = Math.random() * (containerRect.height - norNode.offsetHeight); 
    norNode.style.left = '800px'; 
    norNode.style.top = '350px'; 

    container.appendChild(norNode); 

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
            norNode.style.left = (event.clientX - offsetX) + 'px'; 
            norNode.style.top = (event.clientY - offsetY) + 'px'; 
        }
    }
    norNode.addEventListener('dragstart', dragStart); 
    norNode.addEventListener('dragend', dragEnd); 
    document.addEventListener('dragover', dragOver);
}


// XOR Gate

function addXorNode() { 
    if (document.querySelector('.xor-node')) { 
        return;
    }

    const xorNode = document.createElement('div'); 
    const xorNodeClass = 'xor-node'; 
    xorNode.classList.add(xorNodeClass); 
    xorNode.innerHTML = `
    <h1>XOR</h1>
    <div class="plug3"></div>
    <div class="plug4"></div>
    <div class="plug5"></div>
    <button class="remove-btn" onClick="removeGateNode('${xorNodeClass}')">×</button>`; 

    const containerRect = container.getBoundingClientRect();
    const randomTop = Math.random() * (containerRect.height - xorNode.offsetHeight); 
    xorNode.style.left = '800px'; 
    xorNode.style.top = '350px'; 

    container.appendChild(xorNode); 

    let offsetX, offsetY;
    let isDragging = false;

    function dragStart(event) {
        isDragging = true;
        offsetX = event.clientX - xorNode.getBoundingClientRect().left;
        offsetY = event.clientY - xorNode.getBoundingClientRect().top;
    }

    function dragEnd() {
        isDragging = false;
    }

    function dragOver(event) {
        event.preventDefault();
        if (isDragging) {
            xorNode.style.left = (event.clientX - offsetX) + 'px'; 
            xorNode.style.top = (event.clientY - offsetY) + 'px'; 
        }
    }
    xorNode.addEventListener('dragstart', dragStart); 
    xorNode.addEventListener('dragend', dragEnd); 
    document.addEventListener('dragover', dragOver);
}


// XNOR Gate

function addXnorNode() { 
    if (document.querySelector('.xnor-node')) { 
        return;
    }

    const xnorNode = document.createElement('div'); 
    const xnorNodeClass = 'xnor-node'; 
    xnorNode.classList.add(xnorNodeClass); 
    xnorNode.innerHTML = `
    <h1>XNOR</h1>
    <div class="plug3"></div>
    <div class="plug4"></div>
    <div class="plug5"></div>
    <button class="remove-btn" onClick="removeGateNode('${xnorNodeClass}')">×</button>`; 

    const containerRect = container.getBoundingClientRect();
    const randomTop = Math.random() * (containerRect.height - xnorNode.offsetHeight); 
    xnorNode.style.left = '800px'; 
    xnorNode.style.top = '350px'; 

    container.appendChild(xnorNode); 

    let offsetX, offsetY;
    let isDragging = false;

    function dragStart(event) {
        isDragging = true;
        offsetX = event.clientX - xnorNode.getBoundingClientRect().left;
        offsetY = event.clientY - xnorNode.getBoundingClientRect().top;
    }

    function dragEnd() {
        isDragging = false;
    }

    function dragOver(event) {
        event.preventDefault();
        if (isDragging) {
            xnorNode.style.left = (event.clientX - offsetX) + 'px'; 
            xnorNode.style.top = (event.clientY - offsetY) + 'px'; 
        }
    }
    xnorNode.addEventListener('dragstart', dragStart); 
    xnorNode.addEventListener('dragend', dragEnd); 
    document.addEventListener('dragover', dragOver);
}

function removeGateNode(className) { 
    const nodeToRemove = document.querySelector('.' + className);
    if (nodeToRemove) {
        nodeToRemove.remove();
    }
}

document.getElementById('addInputBtn').addEventListener('click', addInputNode);
document.getElementById('addOutputBtn').addEventListener('click', addOutputNode);
document.getElementById('addAndNode').addEventListener('click', addAndNode);
document.getElementById('addOrNode').addEventListener('click', addOrNode); 
document.getElementById('addNandNode').addEventListener('click', addNandNode); 
document.getElementById('addNotNode').addEventListener('click', addNotNode);
document.getElementById('addNorNode').addEventListener('click', addNorNode); 
document.getElementById('addXorNode').addEventListener('click', addXorNode); 
document.getElementById('addXnorNode').addEventListener('click', addXnorNode); 
