export const getHeroAnimation = (request, response) => {
    response.set('Access-Control-Allow-Origin', '*');
    response.status(200).sendFile("/Users/romeluis/Documents/LESA Site 2.0/api/assets/heroAnimation.json");
}

export const getMeetTheTeam = (request, response) => {
    response.set('Access-Control-Allow-Origin', '*');
    response.status(200).sendFile("");
}

export const getAboutLESA = (request, response) => {
    response.set('Access-Control-Allow-Origin', '*');
    response.status(200).sendFile("");
}