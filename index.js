class Student {
    constructor(name, tall) {
        this.name = name;
        this.tall = tall;
    }

    describe() {
        return `${this.name} is this ${this.tall} tall.`;
    }
}

class Group {
    constructor(name) {
        this.name = name;
        this.students = [];
    }

    addStudent(student) {
        if (student instanceof Student) {
            this.students.push(student);
        } else {
            throw new Error(`You can only add an instance of Student. Argument is a student: ${student}`);
        }
    }

    describe() {
        return `${this.name} has ${this.students.length} many students in it.`;
    }
}

class Menu {
    constructor() {
        this.groups = [];
        this.selectedGroup = null;
    }

    start() {
        let selection = this.showMainMenuOptions();
        while (selection != 0) {
            switch (selection) {
                case '1':
                     this.createGroup();
                     break;
                case '2':
                    this.viewGroup();
                    break;
                case '3':
                    this.deleteGroup();
                    break;
                case '4':
                    this.displayGroups();
                    break;
                default:
                    selection = 0;
            }

            selection = this.showMainMenuOptions();
        }

        alert('Good luck with the project!');
    }


    showMainMenuOptions() {
        return prompt(`
        0) exit
        1) create a new group
        2) view group
        3) delete a group
        4) display all groups
        `);
    }

    showGroupMenuOptions(groupInfo) {
        return prompt(`
        0) back
        1) create student
        2) delete student
        |-----------------------|
        ${groupInfo}
        `)
    }

    displayGroups() {
        let groupString = ''
        for (let i = 0; i < this.groups.length; i++) {
            groupString += i + ') ' + this.groups[i].name + '\n';
        }

        alert(groupString);
    }

    createGroup() {
        let name = prompt('Enter the name of your new group:')
        this.groups.push(new Group(name));
    }

    viewGroup() {
        let index = prompt('Enter the index of the group you need to view');

        if (index > -1 && index < this.groups.length) {
            this.selectedGroup = this.groups[index];
            let description = 'Group name: ' + this.selectedGroup.name + '\n';

            for (let i = 0; i < this.selectedGroup.students; i++) {
                description += i + ') ' + this.selectedGroup.students[i].name + ' - ' + this.selectedGroup.students[i].tall + '\n';
            }

        let selection = this.showGroupMenuOptions(description)
        switch (selection) {
            case '1':
                this.createStudent();
                break;
            case '2':
                this.deleteStudent();
                break;
            }
        }
    }

    deleteGroup() {
        let index = prompt('Enter the index of the group you wish to delete:');
        if (index > -1 && index < this.groups.length) {
            this.groups.splice(index, 1);
        }
    }

    createStudent() {
        let name = prompt('Enter the name of the new student: ');
        let tall = prompt('Enter height of new player in inches: ');
        this.selectedGroup.students.push(new Student(name, tall));
    }

    deleteStudent() {
        let index = prompt ('Enter the index of the student you need to delete:');
        if (index > -1 && index < this.selectedGroup.students.length) {
            this.selectedGroup.students.splice(index, 1);
        }
    }

}

let menu = new Menu();
menu.start();