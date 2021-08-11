class ProjectItem {
    constructor(id) {
        this.id = id;
    }
}

class ProjectList {
    projectItems = [];

    constructor(listType) {
        const projectItemList = document.querySelectorAll(`#${listType}-projects li`);

        for (const item of projectItemList) {
            this.projectItems.push(new ProjectItem(item.id));
        }

        console.log(this.projectItems);
    }
}

class App {
    static init() {
        const activeProjectList = new ProjectList("active");
        const finishedProjectList = new ProjectList("finished");
    }
}

App.init();
