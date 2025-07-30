export const getHeroAnimation = (request, response) => {
    response.status(200).sendFile("/home/lesaueqw/api/assets/heroAnimation.json");
}

export const getMeetTheTeam = (request, response) => {
    response.status(200).sendFile("/home/lesaueqw/api/assets/meet-the-team.png");
}

export const getAboutLESA = (request, response) => {
    response.status(200).sendFile("/home/lesaueqw/api/assets/about-lesa.svg");
}