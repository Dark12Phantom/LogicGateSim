let inputNodeCounter = 0;
let outputNodeCounter = 1;
const container = document.querySelector('.container');


//INPUT AND OUTPUT
function addNode(type, title, baseClass, specificClass, position, isRight = false) {
    const existingNodes = document.querySelectorAll('.' + baseClass);
    if ((type === 'input' && existingNodes.length >= 2) || (type === 'output' && existingNodes.length >= 2)) {
        return;
    }

    const node = document.createElement('div');
    node.classList.add(baseClass, specificClass);
    node.draggable = true;
    node.innerHTML = `
        <h1>${title}</h1>
        <div class="plug plug-middle-${isRight ? 'left' : 'right'}"></div>
        <button class="remove-btn" onclick="removeGateNode('${specificClass}')">×</button>
    `;

    const containerRect = container.getBoundingClientRect();
    const randomTop = Math.random() * (containerRect.height - node.offsetHeight);
    node.style[position] = isRight ? '130px' : '40px';
    node.style.top = randomTop + 'px';

    container.appendChild(node);

    addDragFunctionality(node);
    addConnectionFunctionality(node);

    if (type === 'input') {
        node.addEventListener('click', function () {
            if (this.classList.contains('active')) {
                this.classList.remove('active');
            } else {
                this.classList.add('active');
            }
        });
    }

    return node;
}

function addConnectionFunctionality(node) {
    const plug = node.querySelectorAll('.plug');

    plug.addEventListener('mousedown', function (event) {
        event.stopPropagation(); // Prevent dragging the node when clicking the plug
        const plugRect = plug.getBoundingClientRect();

        const startX = plugRect.right;
        const startY = plugRect.top + plugRect.height / 2;

        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.classList.add('connector');
        svg.style.position = 'absolute';
        svg.style.width = '100vw';
        svg.style.height = '100vh';
        svg.style.top = 0;
        svg.style.left = 0;

        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', startX);
        line.setAttribute('y1', startY);
        line.setAttribute('x2', startX);
        line.setAttribute('y2', startY);
        line.setAttribute('stroke', '#000');

        svg.appendChild(line);
        document.body.appendChild(svg);

        function move(event) {
            line.setAttribute('x2', event.clientX);
            line.setAttribute('y2', event.clientY);
            if (isConnectionAllowed(event.clientX, event.clientY)) {
                line.setAttribute('stroke', '#000');
                isConnectionEstablished = true;
            } else {
                line.setAttribute('stroke', 'red');
                isConnectionEstablished = false;
            }
        }
        

        function stop(event) {
            document.removeEventListener('mousemove', move);
            document.removeEventListener('mouseup', stop);
            if (!isConnectionEstablished) {
                svg.remove();
            }
        }

        document.addEventListener('mousemove', move);
        document.addEventListener('mouseup', stop);
    });
}



//LOGIC GATES
function addLogicGateNode(title, className) {
    if (document.querySelector('.' + className)) {
        return;
    }

    const node = document.createElement('div');
    node.classList.add('node', className);
    node.draggable = true;

    if (className === 'not-node') {
        node.innerHTML = `
            <h1>${title}</h1>
            <div class="plug plug-middle-left"></div>
            <div class="plug plug-middle-right"></div>
            <button class="remove-btn" onclick="removeGateNode('${className}')">×</button>
        `;
    } else {
        node.innerHTML = `
            <h1>${title}</h1>
            <div class="plug plug-top-left"></div>
            <div class="plug plug-bottom-left"></div>
            <div class="plug plug-middle-right"></div>
            <button class="remove-btn" onclick="removeGateNode('${className}')">×</button>
        `;
    }

    const containerRect = container.getBoundingClientRect();
    node.style.left = '800px';
    node.style.top = '350px';

    container.appendChild(node);

    addDragFunctionality(node);
    
    const plugs = node.querySelectorAll('.plug');
    plugs.forEach(plug => {
        plug.addEventListener('mousedown', function (event) {
            event.stopPropagation(); // Prevent dragging the node when clicking the plug

            const plugRect = plug.getBoundingClientRect();
            const startX = plugRect.right;
            const startY = plugRect.top + plugRect.height / 2;

            const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            svg.classList.add('connector');
            svg.style.position = 'absolute';
            svg.style.width = '100vw';
            svg.style.height = '100vh';
            svg.style.top = 0;
            svg.style.left = 0;

            const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            line.setAttribute('x1', startX);
            line.setAttribute('y1', startY);
            line.setAttribute('x2', startX);
            line.setAttribute('y2', startY);
            line.setAttribute('stroke', '#000');

            svg.appendChild(line);
            document.body.appendChild(svg);

            function move(event) {
                line.setAttribute('x2', event.clientX);
                line.setAttribute('y2', event.clientY);
                if (isConnectionAllowed(event.clientX, event.clientY)) {
                    line.setAttribute('stroke', '#000');
                    isConnectionEstablished = true;
                } else {
                    line.setAttribute('stroke', 'red');
                    isConnectionEstablished = false;
                }
            }
            

            function stop(event) {
                document.removeEventListener('mousemove', move);
                document.removeEventListener('mouseup', stop);
                if (!isConnectionEstablished) {
                    svg.remove();
                }
            }
            

            document.addEventListener('mousemove', move);
            document.addEventListener('mouseup', stop);
        });
    });

    return node;
}

function isConnectionAllowed(x, y) {
    const plugs = document.querySelectorAll('.plug');
    for (const plug of plugs) {
        const plugRect = plug.getBoundingClientRect();
        if (
            x >= plugRect.left &&
            x <= plugRect.right &&
            y >= plugRect.top &&
            y <= plugRect.bottom
        ) {
            return true;
        }
    }
    return false;
}

function addDragFunctionality(node) {
    let offsetX, offsetY;
    let isDragging = false;

    function dragStart(event) {
        isDragging = true;
        offsetX = event.clientX - node.getBoundingClientRect().left;
        offsetY = event.clientY - node.getBoundingClientRect().top;
    }

    function dragEnd() {
        isDragging = false;
    }

    function dragOver(event) {
        event.preventDefault();
        if (isDragging) {
            node.style.left = (event.clientX - offsetX) + 'px';
            node.style.top = (event.clientY - offsetY) + 'px';
        }
    }

    node.addEventListener('dragstart', dragStart);
    node.addEventListener('dragend', dragEnd);
    document.addEventListener('dragover', dragOver);
}

function removeGateNode(className) {
    const nodeToRemove = document.querySelector('.' + className);
    if (nodeToRemove) {
        nodeToRemove.remove();
    }
}

document.getElementById('addInputBtn').addEventListener('click', () => addNode('input', 'INPUT', 'input-node', 'inp' + (++inputNodeCounter), 'left'));
document.getElementById('addOutputBtn').addEventListener('click', () => addNode('output', 'OUTPUT', 'output-node', 'out' + (outputNodeCounter++), 'right', true));
document.getElementById('addAndNode').addEventListener('click', () => addLogicGateNode('AND', 'and-node'));
document.getElementById('addOrNode').addEventListener('click', () => addLogicGateNode('OR', 'or-node'));
document.getElementById('addNandNode').addEventListener('click', () => addLogicGateNode('NAND', 'nand-node'));
document.getElementById('addNotNode').addEventListener('click', () => addLogicGateNode('NOT', 'not-node'));
document.getElementById('addNorNode').addEventListener('click', () => addLogicGateNode('NOR', 'nor-node'));
document.getElementById('addXorNode').addEventListener('click', () => addLogicGateNode('XOR', 'xor-node'));
document.getElementById('addXnorNode').addEventListener('click', () => addLogicGateNode('XNOR', 'xnor-node'));
