var brain = require('brain.js');
var net = new brain.NeuralNetwork();

// метод .train называется обучающей выборкой, каждый элемент которой состоит из массива объектов со свойством input и output (массив входящих и выходящих параметров)
net.train([{input: [0, 0], output: [0]}, 
           {input: [0, 1], output: [1]},
           {input: [1, 0], output: [1]},
           {input: [1, 1], output: [0]}]);

var output = net.run([0, 1]);  // Метод .run применяется для получения ответа нейронной сети на заданный в аргументе массив входящих сигналов
console.log(output);