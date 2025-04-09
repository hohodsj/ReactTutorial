import NewProject from "./components/NewProject";
import ProjectSidebar from "./components/ProjectSidebar";
import NoProjectSelected from "./components/NoProjectSelected";
import { useState } from "react";
import SelectedProject from "./components/SelectedProject";

function App() {
    const [projectsState, setProjectsState] = useState({
        selectedProject: undefined, // undefined means no project is selected, null means new project is being created
        projects: [],
        tasks: [],
    });

    function handleAddTask(text) {
        setProjectsState((prevState) => {
            const taskId = Math.random();
            const newTask = {
                text: text,
                projectId: prevState.selectedProject,
                id: taskId
            };

            return {
                ...prevState,
                tasks: [newTask, ...projectsState.tasks]
            };
        });
    }

    function handleDeleteTask(id) {
        setProjectsState((prevState) => {
            return {
                ...prevState,
                tasks: prevState.tasks.filter(
                    (task) => task.id !== id
                ),
            };
        });
    }

    function handleSelectProject(id) {
        setProjectsState((prevState) => {
            return {
                ...prevState,
                selectedProject: id,
            };
        });
    }

    function handleStartAddProject() {
        setProjectsState((prevState) => {
            return {
                ...prevState,
                selectedProject: null,
            };
        });
    }

    function handleCancelAddProject() {
        setProjectsState((prevState) => {
            return {
                ...prevState,
                selectedProject: undefined,
            };
        });
    }

    function handleAddProject(project) {
        const projectId = Math.random();
        setProjectsState((prevState) => {
            const newProject = {
                ...project,
                id: projectId,
            };

            return {
                ...prevState,
                selectedProject: undefined,
                projects: [...prevState.projects, newProject],
            };
        });
    }

    function handleDeleteProject() {
        setProjectsState((prevState) => {
            return {
                ...prevState,
                projects: prevState.projects.filter(
                    (project) => project.id !== prevState.selectedProject
                ),
                selectedProject: undefined,
            };
        });
    }

    const selectedProject = projectsState.projects.find(
        (project) => project.id === projectsState.selectedProject
    );

    let content = (
        <SelectedProject
            project={selectedProject}
            onDelete={handleDeleteProject}
            onAddTask={handleAddTask}
            onDeleteTask={handleDeleteTask}
            tasks={projectsState.tasks}
            selectedProjectId={projectsState.selectedProject}
        />
    );

    if (projectsState.selectedProject === null) {
        content = (
            <NewProject
                onAdd={handleAddProject}
                onCancel={handleCancelAddProject}
            />
        );
    } else if (projectsState.selectedProject === undefined) {
        content = (
            <NoProjectSelected onStartAddProject={handleStartAddProject} />
        );
    }

    return (
        <main className="h-screen my-8 flex gap-8">
            <ProjectSidebar
                onStartAddProject={handleStartAddProject}
                projects={projectsState.projects}
                onSelectProject={handleSelectProject}
                selectedProjectId={projectsState.selectedProject}
            />
            {content}
        </main>
    );
}

export default App;
