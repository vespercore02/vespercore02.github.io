let circleSize, fontSize, deptX, deptY, dateX, dateY, nameX, nameY, dept, name;
		
		dept = "Department"
		name = "Name"

        const stamp = document.getElementById("stamp");
        const canvas = document.createElement("canvas");

        // Circle size
        const circleSizeBtn = document.getElementById("circleSize");
        const circleSizeOutput = document.getElementById("circleSizeValue");

        circleSize = circleSizeBtn.value;
        circleSizeOutput.innerHTML = circleSize;

        // Font size
        const fontSizeBtn = document.getElementById("fontSize");
        const fontSizeOutput = document.getElementById("fontSizeValue");

        fontSize = fontSizeBtn.value;
        fontSizeOutput.innerHTML = fontSize;

        // Department position
        const deptXBtn = document.getElementById("deptXposition");
        const deptXOutput = document.getElementById("deptXpositionValue");

        deptX = deptXBtn.value;
        deptXOutput.innerHTML = deptX;

        const deptYBtn = document.getElementById("deptYposition");
        const deptYOutput = document.getElementById("deptYpositionValue");

        deptY = deptYBtn.value;
        deptYOutput.innerHTML = deptY;

        // Date position
        const dateXBtn = document.getElementById("dateXposition");
        const dateXOutput = document.getElementById("dateXpositionValue");

        dateX = dateXBtn.value;
        dateXOutput.innerHTML = dateX;

        const dateYBtn = document.getElementById("dateYposition");
        const dateYOutput = document.getElementById("dateYpositionValue");

        dateY = dateYBtn.value;
        dateYOutput.innerHTML = dateY;

        // Name position
        const nameXBtn = document.getElementById("nameXposition");
        const nameXOutput = document.getElementById("nameXpositionValue");

        nameX = nameXBtn.value;
        nameXOutput.innerHTML = nameX;

        const nameYBtn = document.getElementById("nameYposition");
        const nameYOutput = document.getElementById("nameYpositionValue");

        nameY = nameYBtn.value;
        nameYOutput.innerHTML = nameY;

        // Event Listener
		
		function myDepartment() {
			
			dept = document.getElementById("department").value;
			
			//console.log(document.getElementById("department").value)
			drawCircle(circleSize, fontSize, deptX, deptY, dateX, dateY, nameX, nameY, dept, name);
		
		}
		
		function myName() {
			
			name = document.getElementById("name").value;
			
			drawCircle(circleSize, fontSize, deptX, deptY, dateX, dateY, nameX, nameY, dept, name);
		
		}

        circleSizeBtn.addEventListener("mousemove", function () {
            circleSize = circleSizeBtn.value;

            circleSizeOutput.innerHTML = circleSize;
            //drawCircle(circleSizeBtn.value);

            drawCircle(circleSize, fontSize, deptX, deptY, dateX, dateY, nameX, nameY, dept, name);

        });

        fontSizeBtn.addEventListener("mousemove", function () {
            fontSize = fontSizeBtn.value;

            fontSizeOutput.innerHTML = fontSize;
            //drawCircle(circleSizeBtn.value);

            drawCircle(circleSize, fontSize, deptX, deptY, dateX, dateY, nameX, nameY, dept, name);

        });

        // Department
        deptXBtn.addEventListener("mousemove", function () {
            deptX = deptXBtn.value;

            deptXOutput.innerHTML = deptX;
            //drawCircle(circleSizeBtn.value);

            drawCircle(circleSize, fontSize, deptX, deptY, dateX, dateY, nameX, nameY, dept, name);

        });

        deptYBtn.addEventListener("mousemove", function () {
            deptY = deptYBtn.value;

            deptYOutput.innerHTML = deptY;
            //drawCircle(circleSizeBtn.value);

            drawCircle(circleSize, fontSize, deptX, deptY, dateX, dateY, nameX, nameY, dept, name);

        });

        // Date
        dateXBtn.addEventListener("mousemove", function () {
            dateX = dateXBtn.value;

            dateXOutput.innerHTML = dateX;
            //drawCircle(circleSizeBtn.value);

            drawCircle(circleSize, fontSize, deptX, deptY, dateX, dateY, nameX, nameY, dept, name);

        });

        dateYBtn.addEventListener("mousemove", function () {
            dateY = dateYBtn.value;

            dateYOutput.innerHTML = dateY;
            //drawCircle(circleSizeBtn.value);

            drawCircle(circleSize, fontSize, deptX, deptY, dateX, dateY, nameX, nameY, dept, name);

        });

        // Name
        nameXBtn.addEventListener("mousemove", function () {
            nameX = nameXBtn.value;

            nameXOutput.innerHTML = nameX;
            //drawCircle(circleSizeBtn.value);

            drawCircle(circleSize, fontSize, deptX, deptY, dateX, dateY, nameX, nameY, dept, name);

        });

        nameYBtn.addEventListener("mousemove", function () {
            nameY = nameYBtn.value;

            nameYOutput.innerHTML = nameY;
            //drawCircle(circleSizeBtn.value);

            drawCircle(circleSize, fontSize, deptX, deptY, dateX, dateY, nameX, nameY, dept, name);

        });

        canvas.width = 300
        canvas.height = 300


        drawCircle(circleSize, fontSize, deptX, deptY, dateX, dateY, nameX, nameY, dept, name);

        function drawCircle(circleSize, fontSize, deptX, deptY, dateX, dateY, nameX, nameY, dept, name) {

            stamp.appendChild(canvas);

            const ctx = canvas.getContext("2d");
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.beginPath();
            ctx.arc(150, 150, circleSize, 0, 2 * Math.PI);
            ctx.lineWidth = circleSize / 40;

            var x = 70;

            ctx.moveTo(153 + circleSize / 2 + circleSize / 2.5, 155 - circleSize / 2.5)
            ctx.lineTo(147 - circleSize / 2 - circleSize / 2.5, 155 - circleSize / 2.5)

            ctx.moveTo(153 + circleSize / 2 + circleSize / 2.5, 145 + circleSize / 2.5)
            ctx.lineTo(147 - circleSize / 2 - circleSize / 2.5, 145 + circleSize / 2.5)

            ctx.stroke();

            ctx.font = fontSize + "px Calibri";
            // Department 
            //ctx.strokeText("PET MIS", 155 - circleSize / 2 - circleSize / 20, 148 - circleSize / 3 - circleSize / 10);
            ctx.strokeText(dept, deptX, deptY);

            // Date
            //ctx.strokeText("2020/04/21", 158 - circleSize / 2 - circleSize / 5.5, 155);
            ctx.strokeText("2020/04/21", dateX, dateY);

            // Name
            //ctx.strokeText("W. Leonardo", 153 - circleSize / 2 - circleSize / 5.5, 153 + circleSize / 2 + circleSize / 10);
            ctx.strokeText(name, nameX, nameY);
        }