const comp = document.getElementById("competitions");
const work = document.getElementById("workshops");
const sections = document.getElementById("sections");

comp.addEventListener("click", function () {
    let existingCompetition = document.getElementById("comp");
    let existingWorkshop = document.getElementById("work");

    if (existingWorkshop) {
        existingWorkshop.remove();
    }

    if (!existingCompetition) {
        sections.insertAdjacentHTML("afterbegin", `
        <div id="comp">
            <label for="competition-options ">Competitions:</label>
            <select id="competition-options">
            <option value="" disabled selected></option>
            <option value="Digitization">Prescription Digitization</option>
            <option value="RoboQuest">RoboQuest</option>
            </select>
        </div>`);
    }
});

work.addEventListener("click", function () {
    let existingCompetition = document.getElementById("comp");
    let existingWorkshop = document.getElementById("work");

    if (existingCompetition) {
        existingCompetition.remove(); // يحذف العنصر بالكامل مع الـ label
    }
    if (!existingWorkshop) {
        sections.insertAdjacentHTML('afterbegin', `
        <div id="work">
        <label for="workshop-options">First Preference:</label>
        <select id="workshop-options">
            <option value="" disabled selected>Choose Your First Preference :</option>
            <option value="Python">Python</option>
            <option value="Machine Learning">Machine Learning</option>
            <option value="Ansys">Ansys</option>
            <option value="Solid Works">SolidWorks</option>
            <option value="Graphic Designer">Graphic Designer</option>
            <option value="Montag">Montag</option>
        </select>
        
        <label for="workshop-options">First Preference:</label>
            <select id="workshop-options">
                <option value="" disabled selected>Choose Your Second Preference :</option>
                <option value="Python">Python</option>
                <option value="Machine Learning">Machine Learning</option>
                <option value="Ansys">Ansys</option>
                <option value="Solid Works">SolidWorks</option>
                <option value="Graphic Designer">Graphic Designer</option>
                <option value="Montag">Montag</option>
        </select>
    </div>
        
        `)
    }
})
