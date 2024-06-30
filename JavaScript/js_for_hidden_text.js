document.getElementById('toggleButton').addEventListener('click', function() {
            var textElement = document.getElementById('textToHide');
            if (textElement.classList.contains('hidden')) {
                textElement.classList.remove('hidden');
                this.textContent = 'Скрыть текст';
            } else {
                textElement.classList.add('hidden');
                this.textContent = 'Показать текст';
            }
        });

document.getElementById('toggleButton2').addEventListener('click', function() {
            var textElement = document.getElementById('textToHide2');            
            if (textElement.classList.contains('hidden')) {            
                textElement.classList.remove('hidden');                
                this.textContent = 'Скрыть текст';
            } else {
                textElement.classList.add('hidden');
                this.textContent = 'Показать текст';
            }
        });  

        document.getElementById('toggleButton3').addEventListener('click', function() {
            var textElement = document.getElementById('textToHide3');
            if (textElement.classList.contains('hidden')) {
                textElement.classList.remove('hidden');
                this.textContent = 'Скрыть текст';
            } else {
                textElement.classList.add('hidden');
                this.textContent = 'Показать текст';
            }
        });
