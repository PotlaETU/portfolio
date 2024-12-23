const skills = {
    "Front-End": {
        "html": 90,
        "css": 80,
        "js": 85,
        "react": 90,
        "vue": 80,
        "angular": 70
    },
    "Back-End": {
        "nodejs": 85,
        "express": 80,
        "php": 70,
        "laravel": 75,
        "python": 75,
        "django": 70
    },
    "Database": {
        "mysql": 80,
        "mongodb": 75,
        "postgresql": 70,
        "sqlite": 70
    },
    "DevOps": {
        "docker": 80,
        "kubernetes": 70,
        "jenkins": 70,
        "git": 90
    },
    "Autre": {
        "git": 90,
        "linux": 80,
        "bash": 70,
        "nginx": 75
    }
}

export function getSkills() {
    return skills;
}