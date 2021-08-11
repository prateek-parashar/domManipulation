class ProjectItem {
    constructor(id) {
        this.id = id;
        this.toggleButton = document.getElementById(this.id).lastElementChild;
        this.toggleState();
    }

    toggleState() {
        this.toggleButton.addEventListener("click", () => {
            console.log(this.id);
        });
    }
}

class ProjectList {
    projectItems = [];

    constructor(listType) {
        const projectItemList = document.querySelectorAll(`#${listType}-projects li`);

        for (const item of projectItemList) {
            this.projectItems.push(new ProjectItem(item.id));
        }
    }

    switchProject(projectItemId) {
        this.projectItems = this.projectItems.filter((p) => p.id !== projectItemId);
    }
}

class App {
    static init() {
        const activeProjectList = new ProjectList("active");
        const finishedProjectList = new ProjectList("finished");
    }
}

App.init();
